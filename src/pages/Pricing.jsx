import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Calculator, FileText, Shield, Users, Headphones, RefreshCw } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { pricingData, calculateSavings } from '../utils/pricing';
import PageTitle from '../components/layout/PageTitle';

const Pricing = () => {
  const { t } = useLanguage();
  const [selectedPlan, setSelectedPlan] = useState('annual');

  const features = [
    { icon: Calculator, key: 'calculation' },
    { icon: FileText, key: 'reports' },
    { icon: Headphones, key: 'support' },
    { icon: RefreshCw, key: 'updates' },
    { icon: Shield, key: 'security' }
  ];

  const plans = [
    {
      id: 'small',
      nameKey: 'pricing.plans.small.name',
      descriptionKey: 'pricing.plans.small.description',
      quarterly: pricingData.quarterly.small,
      annual: pricingData.annual.small,
      popular: false
    },
    {
      id: 'large',
      nameKey: 'pricing.plans.large.name',
      descriptionKey: 'pricing.plans.large.description',
      quarterly: pricingData.quarterly.large,
      annual: pricingData.annual.large,
      popular: false
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle pageKey="pricing" />
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t("pricing.title")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t("pricing.subtitle")}
        </p>
      </div>

      {/* Toggle Plan Type */}
      <div className="flex justify-center mb-12">
        <div className="bg-muted p-1 rounded-lg">
          <button
            onClick={() => setSelectedPlan("quarterly")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${selectedPlan === "quarterly"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {t("pricing.quarterly")}
          </button>
          <button
            onClick={() => setSelectedPlan("annual")}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${selectedPlan === "annual"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
              }`}
          >
            {t("pricing.annual")}
            <Badge variant="secondary" className="ml-2 bg-primary/10 text-primary">
              {t("pricing.recommended")}
            </Badge>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {plans.map((plan) => {
          const currentPricing = plan[selectedPlan];
          const savings = calculateSavings(plan.id === "large" ? 10 : 5);

          return (
            <Card key={plan.id} className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  {t("pricing.recommended")}
                </Badge>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{t(plan.nameKey)}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {t(plan.descriptionKey)}
                </CardDescription>

                <div className="mt-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-foreground">
                      {currentPricing.currency}{currentPricing.priceTTC.toFixed(2)}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      / {t("pricing.perMonth")} / {t("pricing.perLicense")}
                    </span>
                  </div>

                  <div className="text-sm text-muted-foreground mt-2">
                    {currentPricing.currency}{currentPricing.priceHT.toFixed(2)} {t("pricing.htva")} | {currentPricing.currency}{currentPricing.priceTTC.toFixed(2)} {t("pricing.tvac")} {t("pricing.perMonthPerLicense")}
                  </div>

                  {selectedPlan === "annual" && (
                    <div className="text-sm text-primary font-medium mt-2">
                      {t("pricing.savings")}: {savings.savingsPercentage}% ({currentPricing.currency}{savings.savings.toFixed(2)}/an)
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <li key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm text-foreground">
                          {t(`features.${feature.key}`)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  size="lg"
                  onClick={() => window.location.href = '/account'}
                >
                  {t("pricing.subscribe")}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* Contact Section */}
      <div className="text-center bg-muted/50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          {t("pricing.contact_section.title")}
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t("pricing.contact_section.description")}
        </p>
        <Button variant="outline" size="lg" onClick={() => window.location.href = '/contacts'}>
          {t("nav.contact")}
        </Button>
      </div>

      {/* Features Grid */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          {t("pricing.features_included")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {t(`features.${feature.key}`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`pricing.feature_descriptions.${feature.key}`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Descriptions des fonctionnalités
const getFeatureDescription = (key) => {
  const descriptions = {
    calculation: "Calculs automatisés basés sur la législation en vigueur et les barèmes officiels",
    reports: "Génération de rapports détaillés pour la gestion de vos dossiers",
    support: "Assistance technique dédiée et assistance à l\"utilisation du logiciel",
    updates: "Mises à jour automatiques avec les dernières évolutions légales",
    security: "Aucune conservation des données sur nos serveurs et conformité GDPR garantie",
  };
  return descriptions[key] || key;
};

export default Pricing;

