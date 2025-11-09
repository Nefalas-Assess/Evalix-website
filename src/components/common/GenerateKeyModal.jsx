import React, { useState, useMemo, useCallback, useEffect } from 'react';
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
    CheckCircle,
    CreditCard,
    Settings
} from 'lucide-react';
import { useApi } from '@/contexts/ApiContext';
import { useLanguage } from '@/contexts/LanguageContext';

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
    onAction,
    isGenerating = false,
    currentSubscription = null,
    mode = 'generate' // 'generate' or 'update'
}) => {
    const [licenseCount, setLicenseCount] = useState(1);
    const [selectedPriceId, setSelectedPriceId] = useState(null);
    const { t } = useLanguage();

    const { products } = useApi();

    // Get the first (and only) product
    const product = useMemo(() => products?.[0], [products]);

    // Initialize with current subscription data if in update mode
    useEffect(() => {
        if (mode === 'update' && currentSubscription) {
            setLicenseCount(currentSubscription.quantity || 1);
            setSelectedPriceId(currentSubscription?.plan?.id || null);
        } else {
            // Reset for generate mode
            setLicenseCount(1);
            setSelectedPriceId(null);
        }
    }, [mode, currentSubscription, isOpen]);

    // Memoized price calculation function for a specific price
    const calculatePriceForPrice = useCallback((price, quantity) => {
        if (!price?.tiers) {
            return { unitPrice: 0, totalPrice: 0, unitPriceAnnual: 0, totalPriceAnnual: 0 };
        }

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

    // Memoized current price
    const currentPrice = useMemo(() =>
        product?.prices?.find(price => price.id === selectedPriceId),
        [product, selectedPriceId]
    );

    // Memoized pricing info
    const pricingInfo = useMemo(() =>
        currentPrice ? calculatePriceForPrice(currentPrice, licenseCount) : { unitPrice: 0, totalPrice: 0 },
        [currentPrice, licenseCount, calculatePriceForPrice]
    );

    // Memoized billing interval
    const billingIntervalKey = useMemo(() => {
        if (!currentPrice?.recurring?.interval) return '';
        const interval = currentPrice.recurring.interval;
        const intervalCount = currentPrice.recurring.interval_count || 1;

        if (interval === 'month' && intervalCount === 3) {
            return 'quarter';
        }

        if (interval === 'month') return 'month';
        if (interval === 'year') return 'year';
        return interval;
    }, [currentPrice]);

    const billingIntervalLabel = useMemo(() => {
        if (!billingIntervalKey) return '';

        switch (billingIntervalKey) {
            case 'month':
                return t('generate_key_modal.interval_month');
            case 'quarter':
                return t('generate_key_modal.interval_quarter');
            case 'year':
                return t('generate_key_modal.interval_year');
            default:
                return billingIntervalKey;
        }
    }, [billingIntervalKey, t]);

    // Memoized prices with pricing (sorted by annual price)
    const pricesWithPricing = useMemo(() => {
        if (!product?.prices) return [];

        return product.prices
            .map(price => ({
                price,
                pricing: calculatePriceForPrice(price, licenseCount)
            }))
            .sort((a, b) => a.pricing.unitPriceAnnual - b.pricing.unitPriceAnnual);
    }, [product, licenseCount, calculatePriceForPrice]);

    // Memoized tier information
    const tierInfo = useMemo(() => {
        if (!currentPrice?.tiers) return { hasDiscount: false, info: '', discount: null };

        const tiers = currentPrice.tiers;
        const hasDiscount = tiers.length > 1;

        if (!hasDiscount) return { hasDiscount: false, info: '', discount: null };

        const currentTier = findTierForQuantity(tiers, licenseCount);
        if (!currentTier) return { hasDiscount: true, info: '', discount: null };

        const tierIndex = tiers.indexOf(currentTier);
        let info = '';
        let discount = null;

        if (tierIndex === 0 && tiers.length > 1) {
            info = `${t('generate_key_modal.tier_standard_up_to')} ${currentTier.up_to} ${currentTier.up_to > 1 ? t('generate_key_modal.licenses_plural') : t('generate_key_modal.licenses')})`;
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
                message: `${t('generate_key_modal.savings_potential')} ${savingsPercentage}% (${savings.toFixed(2)}€/${t('generate_key_modal.per_license')}) ${t('generate_key_modal.savings_from')} ${minQuantityForDiscount} ${minQuantityForDiscount > 1 ? t('generate_key_modal.licenses_plural') : t('generate_key_modal.licenses')}`
            };
        } else if (tierIndex > 0) {
            info = `${t('generate_key_modal.tier_preferential')} (${tiers[tierIndex - 1].up_to + 1}+ ${t('generate_key_modal.licenses_plural')})`;
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
                message: `${t('generate_key_modal.savings_current')} ${savingsPercentage}% ${t('generate_key_modal.savings_per_license')} (${(savings * licenseCount).toFixed(2)}€ ${t('generate_key_modal.savings_total')})`
            };
        } else {
            info = t('generate_key_modal.tier_standard');
        }

        return { hasDiscount: true, info, discount };
    }, [currentPrice, licenseCount]);

    // Handlers
    const handleLicenseCountChange = useCallback((e) => {
        setLicenseCount(parseInt(e.target.value) || 1);
    }, []);

    const handlePriceSelect = useCallback((priceId) => {
        setSelectedPriceId(priceId);
    }, []);

    const handleSubmit = useCallback(() => {
        onAction({
            licenseCount,
            priceId: selectedPriceId,
            price: currentPrice,
            product: product,
            subscriptionId: mode === 'update' ? currentSubscription?.id : undefined
        });
    }, [licenseCount, selectedPriceId, currentPrice, product, onAction, mode, currentSubscription]);

    const handleClose = useCallback(() => {
        if (!isGenerating) {
            onClose();
        }
    }, [isGenerating, onClose]);

    // Determine if changes were made (for update mode)
    const hasChanges = useMemo(() => {
        if (mode !== 'update' || !currentSubscription) return true;

        return selectedPriceId !== currentSubscription.price?.id ||
            licenseCount !== (currentSubscription.quantity || 1);
    }, [mode, currentSubscription, selectedPriceId, licenseCount]);

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        {mode === 'generate' ? (
                            <Key className="h-5 w-5 text-primary" />
                        ) : (
                            <Settings className="h-5 w-5 text-primary" />
                        )}
                        {mode === 'generate'
                            ? t('generate_key_modal.title_generate')
                            : t('generate_key_modal.title_update')
                        }
                    </DialogTitle>
                    <DialogDescription>
                        {mode === 'generate'
                            ? t('generate_key_modal.desc_generate')
                            : t('generate_key_modal.desc_update')
                        }
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    {/* Current subscription info for update mode */}
                    {mode === 'update' && currentSubscription && (
                        <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-center gap-2 text-blue-800 mb-1">
                                <CreditCard className="h-4 w-4" />
                                <span className="font-medium text-sm">{t('generate_key_modal.current_subscription')}</span>
                            </div>
                            <p className="text-xs text-blue-600">
                                {currentSubscription.quantity || 1} {(currentSubscription.quantity || 1) > 1 ? t('generate_key_modal.licenses_plural') : t('generate_key_modal.licenses')} •
                                {currentSubscription.price?.recurring?.interval === 'month' ? t('account.subscription.type_monthly') : t('account.subscription.type_annual')}
                            </p>
                        </div>
                    )}

                    {/* License Count Selection */}
                    <div className="space-y-2">
                        <Label htmlFor="license-count" className="flex items-center gap-2">
                            <Calculator className="h-4 w-4" />
                            {t('generate_key_modal.license_count')}
                        </Label>
                        <Input
                            id="license-count"
                            type="number"
                            min="1"
                            max="100"
                            value={licenseCount}
                            onChange={handleLicenseCountChange}
                            placeholder={t('generate_key_modal.license_count_placeholder')}
                            disabled={isGenerating}
                        />
                        {tierInfo.hasDiscount && (
                            <p className="text-xs text-muted-foreground">
                                {tierInfo.info}
                            </p>
                        )}
                    </div>

                    {/* Price Selection */}
                    <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {t('generate_key_modal.billing_plan')}
                        </Label>

                        {pricesWithPricing.length > 0 ? (
                            <div className="space-y-2">
                                {pricesWithPricing.map(({ price, pricing }) => {
                                    const isSelected = price.id === selectedPriceId;
                                    const interval = pricing.interval === 'month' ? '/mois' : pricing.interval === 'year' ? '/an' : '';

                                    return (
                                        <PriceOption
                                            key={price.id}
                                            price={price}
                                            pricing={pricing}
                                            isSelected={isSelected}
                                            onSelect={handlePriceSelect}
                                        />
                                    );
                                })}
                            </div>
                        ) : (
                            <EmptyPricesState />
                        )}
                    </div>

                    {/* Pricing Summary */}
                    {selectedPriceId && (
                        <PricingSummary
                            licenseCount={licenseCount}
                            pricingInfo={pricingInfo}
                            billingIntervalKey={billingIntervalKey}
                            billingIntervalLabel={billingIntervalLabel}
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
                        {t('generate_key_modal.cancel')}
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={isGenerating || !selectedPriceId || (mode === 'update' && !hasChanges)}
                        className="bg-primary hover:bg-primary/90"
                    >
                        {isGenerating ? (
                            <>
                                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                                {mode === 'generate' ? t('generate_key_modal.generating') : t('generate_key_modal.updating')}
                            </>
                        ) : (
                            <>
                                {mode === 'generate' ? (
                                    <Key className="mr-2 h-4 w-4" />
                                ) : (
                                    <Settings className="mr-2 h-4 w-4" />
                                )}
                                {mode === 'generate' ? t('generate_key_modal.generate') : t('generate_key_modal.update')}
                            </>
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

// Updated component for price selection instead of product selection
const PriceOption = React.memo(({ price, pricing, isSelected, onSelect }) => {
    const { t } = useLanguage();
    return (
        <div
            className={`relative cursor-pointer transition-all duration-200 rounded-lg ${isSelected
                ? 'bg-primary/10 border-2 border-primary shadow-sm'
                : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
            onClick={() => onSelect(price.id)}
        >
            <div className="p-4 rounded-lg">
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                            {isSelected && <CheckCircle className="h-4 w-4 text-primary" />}
                            <h4 className={`font-medium ${isSelected ? 'text-primary' : 'text-gray-900'}`}>
                                {t('generate_key_modal.plan')} {t(`pricing.period.${pricing.interval}${pricing.intervalCount}`)}
                            </h4>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                            {t('generate_key_modal.forfait')} {t(`pricing.period.${pricing.interval}${pricing.intervalCount}`)}
                        </p>
                    </div>

                    <div className="text-right ml-4">
                        <div className="text-lg font-bold text-gray-900">
                            {pricing.unitPrice.toFixed(2)}€
                        </div>
                        <div className="text-sm text-gray-500">
                            {t('generate_key_modal.per_license')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

const EmptyPricesState = React.memo(() => {
    const { t } = useLanguage();
    return (
        <div className="text-center py-8 text-gray-500">
            <Calendar className="h-8 w-8 mx-auto mb-2 opacity-50" />
            <p>{t('generate_key_modal.no_plans')}</p>
        </div>
    );
});

const PricingSummary = React.memo(({ licenseCount, pricingInfo, billingIntervalKey, billingIntervalLabel, tierInfo }) => {
    const { t } = useLanguage();
    const totalLabel =
        billingIntervalKey === 'month'
            ? t('generate_key_modal.total_monthly')
            : billingIntervalKey === 'quarter'
                ? t('generate_key_modal.total_quarterly')
            : t('generate_key_modal.total_annual');

    return (
        <div className="space-y-3 p-4 bg-muted rounded-lg">
            <h4 className="font-medium text-sm">{t('generate_key_modal.order_summary')}</h4>

            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span>{licenseCount} {licenseCount > 1 ? t('generate_key_modal.licenses_plural') : t('generate_key_modal.licenses')}</span>
                    <span>x {pricingInfo.unitPrice.toFixed(2)}€/{billingIntervalLabel || billingIntervalKey}</span>
                </div>

                <Separator />

                <div className="flex justify-between font-medium">
                    <span>{totalLabel}</span>
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
    );
});

export default GenerateKeyModal;
