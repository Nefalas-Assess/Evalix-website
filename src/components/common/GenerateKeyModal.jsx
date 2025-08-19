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
import { pricingData, calculateSavings } from '../../utils/pricing';

const GenerateKeyModal = ({
    isOpen,
    onClose,
    onGenerateKey,
    isGenerating = false
}) => {
    const [licenseCount, setLicenseCount] = useState(1);
    const [billingPeriod, setBillingPeriod] = useState('annual');

    // Calculate pricing based on selection
    const getCurrentPricing = () => {
        const isLarge = licenseCount >= 10;
        const pricing = billingPeriod === 'annual' ? pricingData.annual : pricingData.quarterly;
        return isLarge ? pricing.large : pricing.small;
    };

    const getTotalPrice = () => {
        const pricing = getCurrentPricing();
        return (pricing.priceTTC * licenseCount).toFixed(2);
    };

    const getSavingsInfo = () => {
        if (billingPeriod === 'annual') {
            return calculateSavings(licenseCount);
        }
        return null;
    };

    const handleGenerate = () => {
        onGenerateKey({
            licenseCount,
            billingPeriod
        });
    };

    const handleClose = () => {
        if (!isGenerating) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Key className="h-5 w-5 text-primary" />
                        Générer une nouvelle clé de licence
                    </DialogTitle>
                    <DialogDescription>
                        Configurez votre nouvelle licence en sélectionnant le nombre de licences et la période de facturation.
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
                        <p className="text-xs text-muted-foreground">
                            {licenseCount >= 10 ? "Tarif préférentiel applicable" : "Tarif standard"}
                        </p>
                    </div>

                    {/* Billing Period Selection */}
                    <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            Période de facturation
                        </Label>
                        <Select
                            value={billingPeriod}
                            onValueChange={setBillingPeriod}
                            disabled={isGenerating}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez la période" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="quarterly">Trimestrielle</SelectItem>
                                <SelectItem value="annual">Annuelle (Recommandé)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Pricing Summary */}
                    <div className="space-y-3 p-4 bg-muted rounded-lg">
                        <h4 className="font-medium text-sm">Résumé de la commande</h4>

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>{licenseCount} licence{licenseCount > 1 ? 's' : ''}</span>
                                <span>x {getCurrentPricing().priceTTC}€/mois</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Période</span>
                                <span>{billingPeriod === 'annual' ? 'Annuelle' : 'Trimestrielle'}</span>
                            </div>

                            <Separator />

                            <div className="flex justify-between font-medium">
                                <span>Total mensuel</span>
                                <span>{getTotalPrice()}€ TTC</span>
                            </div>

                            {billingPeriod === 'annual' && getSavingsInfo() && (
                                <div className="pt-2">
                                    <div className="flex items-center gap-2 text-green-600 text-xs">
                                        <CheckCircle className="h-3 w-3" />
                                        <span>
                                            Économie de {getSavingsInfo().savingsPercentage}%
                                            ({getSavingsInfo().savings.toFixed(2)}€/an)
                                        </span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
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
                        disabled={isGenerating}
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
