import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
    Key,
    RefreshCw,
    Calculator,
    Calendar,
    CheckCircle
} from 'lucide-react';
import { useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useApi } from '@/contexts/ApiContext';

const GenerateKeyModal = ({
    isOpen,
    onClose,
    onGenerateKey,
    isGenerating = false
}) => {
    const [licenseCount, setLicenseCount] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const { products } = useApi();

    // Calculate pricing based on Stripe tiers for selected product
    const calculatePriceForProduct = (product, quantity) => {
        if (!product || !product.prices || !product.prices[0] || !product.prices[0].tiers) {
            return { unitPrice: 0, totalPrice: 0 };
        }

        const price = product.prices[0];
        const tiers = price.tiers;

        // Find the appropriate tier based on quantity
        let unitPrice = 0;

        for (const tier of tiers) {
            if (tier.up_to === null || quantity <= tier.up_to) {
                unitPrice = tier.unit_amount;
                break;
            }
        }

        // Convert from cents to euros
        const unitPriceEur = unitPrice / 100;
        const totalPrice = unitPriceEur * quantity;

        return {
            unitPrice: unitPriceEur,
            totalPrice: totalPrice
        };
    };

    // Get current selected product object
    const getCurrentProduct = () => {
        return products?.find(product => product.id === selectedProduct);
    };

    // Get pricing info for current selection
    const getPricingInfo = () => {
        const product = getCurrentProduct();
        if (!product) return { unitPrice: 0, totalPrice: 0 };

        return calculatePriceForProduct(product, licenseCount);
    };

    // Get billing interval for display
    const getBillingInterval = () => {
        const product = getCurrentProduct();
        if (!product || !product.prices || !product.prices[0]) return '';

        const interval = product.prices[0].recurring?.interval;
        return interval === 'month' ? 'mois' : interval === 'year' ? 'an' : interval;
    };

    // Check if there are volume discounts available
    const hasVolumeDiscount = () => {
        const product = getCurrentProduct();
        if (!product || !product.prices || !product.prices[0] || !product.prices[0].tiers) {
            return false;
        }

        return product.prices[0].tiers.length > 1;
    };

    // Get tier information for display
    const getTierInfo = () => {
        const product = getCurrentProduct();
        if (!product || !product.prices || !product.prices[0] || !product.prices[0].tiers) {
            return '';
        }

        const tiers = product.prices[0].tiers;
        const currentTier = tiers.find(tier =>
            tier.up_to === null || licenseCount <= tier.up_to
        );

        if (!currentTier) return '';

        const tierIndex = tiers.indexOf(currentTier);
        if (tierIndex === 0 && tiers.length > 1) {
            return `Tarif standard (jusqu'à ${currentTier.up_to} licences)`;
        } else if (tierIndex > 0) {
            return `Tarif préférentiel (${tiers[tierIndex - 1].up_to + 1}+ licences)`;
        }

        return 'Tarif standard';
    };

    const handleGenerate = () => {
        const product = getCurrentProduct();
        onGenerateKey({
            licenseCount,
            productId: selectedProduct,
            product: product
        });
    };

    const handleClose = () => {
        if (!isGenerating) {
            onClose();
        }
    };

    const pricingInfo = getPricingInfo();

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Key className="h-5 w-5 text-primary" />
                        Générer une nouvelle clé de licence
                    </DialogTitle>
                    <DialogDescription>
                        Configurez votre nouvelle licence en sélectionnant le nombre de licences et le type d'abonnement.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* License Count Selection */}
                    <div className="space-y-2">
                        <Label htmlFor="license-count" className="flex items-center gap-2">
                            <Calculator className="h-4 w-4" />
                            Nombre de licences
                        </Label>
                        <Input
                            id="license-count"
                            type="number"
                            min="1"
                            max="100"
                            value={licenseCount}
                            onChange={(e) => setLicenseCount(parseInt(e.target.value) || 1)}
                            placeholder="Entrez le nombre de licences"
                            disabled={isGenerating}
                        />
                        {hasVolumeDiscount() && (
                            <p className="text-xs text-muted-foreground">
                                {getTierInfo()}
                            </p>
                        )}
                    </div>

                    {/* Product Selection */}
                    <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Type d'abonnement
                        </Label>
                        <Select
                            value={selectedProduct}
                            onValueChange={setSelectedProduct}
                            disabled={isGenerating}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Sélectionnez le type d'abonnement" />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                {products?.map((product) => (
                                    <SelectItem key={product.id} value={product.id}>
                                        {product.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Pricing Summary */}
                    {selectedProduct && (
                        <div className="space-y-3 p-4 bg-muted rounded-lg">
                            <h4 className="font-medium text-sm">Résumé de la commande</h4>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span>{licenseCount} licence{licenseCount > 1 ? 's' : ''}</span>
                                    <span>x {pricingInfo.unitPrice.toFixed(2)}€/{getBillingInterval()}</span>
                                </div>

                                <Separator />

                                <div className="flex justify-between font-medium">
                                    <span>Total {getBillingInterval() === 'mois' ? 'mensuel' : 'annuel'}</span>
                                    <span>{pricingInfo.totalPrice.toFixed(2)}€ TTC</span>
                                </div>

                                {hasVolumeDiscount() && licenseCount > 1 && (
                                    <div className="pt-2">
                                        <div className="flex items-center gap-2 text-blue-600 text-xs">
                                            <CheckCircle className="h-3 w-3" />
                                            <span>
                                                Tarification par volumes disponible
                                            </span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={handleClose}
                        disabled={isGenerating}
                    >
                        Annuler
                    </Button>
                    <Button
                        onClick={handleGenerate}
                        disabled={isGenerating || !selectedProduct}
                        className="bg-primary hover:bg-primary/90"
                    >
                        {isGenerating ? (
                            <>
                                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                Génération...
                            </>
                        ) : (
                            <>
                                <Key className="mr-2 h-4 w-4" />
                                Générer la clé
                            </>
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default GenerateKeyModal;
