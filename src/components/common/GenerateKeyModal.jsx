import React, { useState, useMemo, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import {
    Key,
    RefreshCw,
    Calculator,
    Calendar,
    CheckCircle
} from 'lucide-react';
import { useApi } from '@/contexts/ApiContext';

// Helper functions moved outside component to prevent recreation
const convertCentsToEuros = (cents) => cents / 100;

const calculateAnnualMultiplier = (interval, intervalCount = 1) => {
    if (interval === 'month') return 12 / intervalCount;
    if (interval === 'year') return 1 / intervalCount;
    return 1;
};

const findTierForQuantity = (tiers, quantity) => {
    return tiers.find(tier => tier.up_to === null || quantity <= tier.up_to);
};

const GenerateKeyModal = ({
    isOpen,
    onClose,
    onGenerateKey,
    isGenerating = false
}) => {
    const [licenseCount, setLicenseCount] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const { products } = useApi();

    // Memoized price calculation function
    const calculatePriceForProduct = useCallback((product, quantity) => {
        if (!product?.prices?.[0]?.tiers) {
            return { unitPrice: 0, totalPrice: 0, unitPriceAnnual: 0, totalPriceAnnual: 0 };
        }

        const price = product.prices[0];
        const { tiers, recurring } = price;
        const { interval, interval_count: intervalCount = 1 } = recurring || {};

        const tier = findTierForQuantity(tiers, quantity);
        if (!tier) return { unitPrice: 0, totalPrice: 0, unitPriceAnnual: 0, totalPriceAnnual: 0 };

        const unitPriceEur = convertCentsToEuros(tier.unit_amount);
        const totalPrice = unitPriceEur * quantity;
        const multiplier = calculateAnnualMultiplier(interval, intervalCount);

        return {
            unitPrice: unitPriceEur,
            totalPrice,
            unitPriceAnnual: unitPriceEur * multiplier,
            totalPriceAnnual: totalPrice * multiplier,
            interval,
            intervalCount
        };
    }, []);

    // Memoized current product
    const currentProduct = useMemo(() =>
        products?.find(product => product.id === selectedProduct),
        [products, selectedProduct]
    );

    // Memoized pricing info
    const pricingInfo = useMemo(() =>
        currentProduct ? calculatePriceForProduct(currentProduct, licenseCount) : { unitPrice: 0, totalPrice: 0 },
        [currentProduct, licenseCount, calculatePriceForProduct]
    );

    // Memoized billing interval
    const billingInterval = useMemo(() => {
        if (!currentProduct?.prices?.[0]?.recurring?.interval) return '';
        const interval = currentProduct.prices[0].recurring.interval;
        return interval === 'month' ? 'mois' : interval === 'year' ? 'an' : interval;
    }, [currentProduct]);

    // Memoized products with pricing (sorted by annual price)
    const productsWithPricing = useMemo(() => {
        if (!products) return [];

        return products
            .map(product => ({
                product,
                pricing: calculatePriceForProduct(product, licenseCount)
            }))
            .sort((a, b) => a.pricing.unitPriceAnnual - b.pricing.unitPriceAnnual);
    }, [products, licenseCount, calculatePriceForProduct]);

    // Memoized tier information
    const tierInfo = useMemo(() => {
        if (!currentProduct?.prices?.[0]?.tiers) return { hasDiscount: false, info: '', discount: null };

        const tiers = currentProduct.prices[0].tiers;
        const hasDiscount = tiers.length > 1;

        if (!hasDiscount) return { hasDiscount: false, info: '', discount: null };

        const currentTier = findTierForQuantity(tiers, licenseCount);
        if (!currentTier) return { hasDiscount: true, info: '', discount: null };

        const tierIndex = tiers.indexOf(currentTier);
        let info = '';
        let discount = null;

        if (tierIndex === 0 && tiers.length > 1) {
            info = `Tarif standard (jusqu'à ${currentTier.up_to} licences)`;
            // Calculate potential savings
            const nextTier = tiers[1];
            const currentUnitPrice = convertCentsToEuros(currentTier.unit_amount);
            const nextTierPrice = convertCentsToEuros(nextTier.unit_amount);
            const savings = currentUnitPrice - nextTierPrice;
            const savingsPercentage = Math.round((savings / currentUnitPrice) * 100);
            const minQuantityForDiscount = currentTier.up_to + 1;

            discount = {
                type: 'potential',
                savings,
                savingsPercentage,
                minQuantity: minQuantityForDiscount,
                message: `Économisez ${savingsPercentage}% (${savings.toFixed(2)}€/licence) à partir de ${minQuantityForDiscount} licences`
            };
        } else if (tierIndex > 0) {
            info = `Tarif préférentiel (${tiers[tierIndex - 1].up_to + 1}+ licences)`;
            // Calculate current savings
            const firstTier = tiers[0];
            const firstTierPrice = convertCentsToEuros(firstTier.unit_amount);
            const currentUnitPrice = convertCentsToEuros(currentTier.unit_amount);
            const savings = firstTierPrice - currentUnitPrice;
            const savingsPercentage = Math.round((savings / firstTierPrice) * 100);

            discount = {
                type: 'current',
                savings,
                savingsPercentage,
                totalSavings: savings * licenseCount,
                message: `Vous économisez ${savingsPercentage}% par licence (${(savings * licenseCount).toFixed(2)}€ au total)`
            };
        } else {
            info = 'Tarif standard';
        }

        return { hasDiscount: true, info, discount };
    }, [currentProduct, licenseCount]);

    // Handlers
    const handleLicenseCountChange = useCallback((e) => {
        setLicenseCount(parseInt(e.target.value) || 1);
    }, []);

    const handleProductSelect = useCallback((productId) => {
        setSelectedProduct(productId);
    }, []);

    const handleGenerate = useCallback(() => {
        onGenerateKey({
            licenseCount,
            productId: selectedProduct,
            product: currentProduct
        });
    }, [licenseCount, selectedProduct, currentProduct, onGenerateKey]);

    const handleClose = useCallback(() => {
        if (!isGenerating) {
            onClose();
        }
    }, [isGenerating, onClose]);

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
                            onChange={handleLicenseCountChange}
                            placeholder="Entrez le nombre de licences"
                            disabled={isGenerating}
                        />
                        {tierInfo.hasDiscount && (
                            <p className="text-xs text-muted-foreground">
                                {tierInfo.info}
                            </p>
                        )}
                    </div>

                    {/* Product Selection */}
                    <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Choisissez votre abonnement
                        </Label>

                        {productsWithPricing.length > 0 ? (
                            <div className="space-y-2">
                                {productsWithPricing.map(({ product, pricing }) => {
                                    const isSelected = product.id === selectedProduct;
                                    const interval = pricing.interval === 'month' ? '/mois' : pricing.interval === 'year' ? '/an' : '';

                                    return (
                                        <ProductOption
                                            key={product.id}
                                            product={product}
                                            pricing={pricing}
                                            interval={interval}
                                            isSelected={isSelected}
                                            onSelect={handleProductSelect}
                                        />
                                    );
                                })}
                            </div>
                        ) : (
                            <EmptyProductsState />
                        )}
                    </div>

                    {/* Pricing Summary */}
                    {selectedProduct && (
                        <PricingSummary
                            licenseCount={licenseCount}
                            pricingInfo={pricingInfo}
                            billingInterval={billingInterval}
                            tierInfo={tierInfo}
                        />
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

// Extracted components for better readability and performance
const ProductOption = React.memo(({ product, pricing, interval, isSelected, onSelect }) => (
    <div
        className={`relative cursor-pointer transition-all duration-200 rounded-lg ${isSelected
                ? 'bg-primary/10 border-2 border-primary shadow-sm'
                : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm'
            }`}
        onClick={() => onSelect(product.id)}
    >
        <div className="p-4 rounded-lg">
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        {isSelected && <CheckCircle className="h-4 w-4 text-primary" />}
                        <h4 className={`font-medium ${isSelected ? 'text-primary' : 'text-gray-900'}`}>
                            {product.name}
                        </h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                        {product.description}
                    </p>
                </div>

                <div className="text-right ml-4">
                    <div className="text-lg font-bold text-gray-900">
                        {pricing.unitPrice.toFixed(2)}€{interval}
                    </div>
                    <div className="text-sm text-gray-500">
                        par licence
                    </div>
                </div>
            </div>
        </div>
    </div>
));

const EmptyProductsState = React.memo(() => (
    <div className="text-center py-8 text-gray-500">
        <Calendar className="h-8 w-8 mx-auto mb-2 opacity-50" />
        <p>Aucun abonnement disponible</p>
    </div>
));

const PricingSummary = React.memo(({ licenseCount, pricingInfo, billingInterval, tierInfo }) => (
    <div className="space-y-3 p-4 bg-muted rounded-lg">
        <h4 className="font-medium text-sm">Résumé de la commande</h4>

        <div className="space-y-2 text-sm">
            <div className="flex justify-between">
                <span>{licenseCount} licence{licenseCount > 1 ? 's' : ''}</span>
                <span>x {pricingInfo.unitPrice.toFixed(2)}€/{billingInterval}</span>
            </div>

            <Separator />

            <div className="flex justify-between font-medium">
                <span>Total {billingInterval === 'mois' ? 'mensuel' : 'annuel'}</span>
                <span>{pricingInfo.totalPrice.toFixed(2)}€ TTC</span>
            </div>

            {/* Volume discount info */}
            {tierInfo.discount && (
                <div className="pt-2">
                    <div className={`flex items-center gap-2 text-xs ${tierInfo.discount.type === 'current' ? 'text-green-600' : 'text-blue-600'
                        }`}>
                        <CheckCircle className="h-3 w-3" />
                        <span>{tierInfo.discount.message}</span>
                    </div>
                </div>
            )}
        </div>
    </div>
));

export default GenerateKeyModal;
