import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Zap, 
  Eye, 
  Clock, 
  TestTube, 
  Calendar, 
  DollarSign, 
  Building, 
  Users,
  CheckCircle,
  ArrowRight,
  Globe,
  Calculator
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Presentation = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Eye className="h-6 w-6" />,
      titleKey: "presentation.features.interface.title",
      descriptionKey: "presentation.features.interface.description"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      titleKey: "presentation.features.speed.title",
      descriptionKey: "presentation.features.speed.description"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      titleKey: "presentation.features.intuitive.title",
      descriptionKey: "presentation.features.intuitive.description"
    }
  ];

  const pricingBenefits = [
    {
      icon: <Building className="h-6 w-6" />,
      titleKey: "presentation.pricing_benefits.small.title",
      descriptionKey: "presentation.pricing_benefits.small.description"
    },
    {
      icon: <Users className="h-6 w-6" />,
      titleKey: "presentation.pricing_benefits.large.title",
      descriptionKey: "presentation.pricing_benefits.large.description"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* En-tête */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            {t("nav.presentation")}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {t("presentation.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("presentation.subtitle")}
          </p>
        </div>

        {/* Section Développement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              {t("presentation.development.title")}
            </CardTitle>
            <CardDescription>
              {t("presentation.development.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 rounded-lg border bg-card">
                  <div className="flex justify-center mb-3 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{t(feature.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground">{t(feature.descriptionKey)}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section Multilingue */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              {t("presentation.languages.title")}
            </CardTitle>
            <CardDescription>
              {t("presentation.languages.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              {t("presentation.languages.content")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <span className="text-2xl">🇫🇷</span>
                <span className="font-medium">Français</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <span className="text-2xl">🇳🇱</span>
                <span className="font-medium">Nederlands</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                <span className="text-2xl">🇬🇧</span>
                <span className="font-medium">English</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section Précision des calculs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-primary" />
              {t("presentation.precision.title")}
            </CardTitle>
            <CardDescription>
              {t("presentation.precision.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              {t("presentation.precision.content")}
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                {t("presentation.precision.example_title")}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t("presentation.precision.example")}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section Gestion des intérêts */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              {t("presentation.interests.title")}
            </CardTitle>
            <CardDescription>
              {t("presentation.interests.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {t("presentation.interests.content")}
            </p>
          </CardContent>
        </Card>

        {/* Section Licence de test */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TestTube className="h-5 w-5 text-primary" />
              {t("presentation.test_license.title")}
            </CardTitle>
            <CardDescription>
              {t("presentation.test_license.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-semibold">{t("home.test_license.badge")}</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  {t("presentation.test_license.content")}
                </p>
                <Button className="w-full md:w-auto" onClick={() => window.location.href = '/contacts'}>
                  {t("presentation.test_license.cta_request")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Espace réservé pour capture d'écran */}
              <div className="w-full md:w-80 h-48 bg-muted rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="text-sm font-medium mb-1">Espace réservé</div>
                  <div className="text-xs">Capture d'écran à intégrer</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section Tarification juste */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              {t("presentation.fair_pricing.title")}
            </CardTitle>
            <CardDescription>
              {t("presentation.fair_pricing.description")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              {t("presentation.fair_pricing.content")}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {pricingBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <div className="text-primary mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t(benefit.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">{t(benefit.descriptionKey)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Espace réservé pour capture d'écran */}
            <div className="w-full h-48 bg-muted rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="text-sm font-medium mb-1">Espace réservé</div>
                <div className="text-xs">Capture d'écran des tarifs à intégrer</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Separator className="mb-8" />
          <h2 className="text-2xl font-bold mb-4">{t("presentation.final_cta.title")}</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            {t("presentation.final_cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => window.location.href = '/contacts'}>
              {t("presentation.final_cta.demo_button")}
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.location.href = '/tarifs'}>
              {t("presentation.final_cta.pricing_button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;

