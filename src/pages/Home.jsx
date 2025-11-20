import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Calculator,
  FileText,
  Shield,
  Users,
  Zap,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Clock,
  Award
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageTitle from '../components/layout/PageTitle';
import { useLatestRelease } from '@/hooks/useLatestRelease';

const Home = () => {
  const { t } = useLanguage();
  const { version } = useLatestRelease();

  const features = [
    {
      key: 'precision',
      icon: Calculator
    },
    {
      key: 'efficiency',
      icon: Zap
    },
    {
      key: 'security',
      icon: Shield
    },
    {
      key: 'reports',
      icon: FileText
    },
    {
      key: 'negotiation_tool',
      icon: BarChart3
    },
    {
      key: 'continuous_development',
      icon: Award
    }
  ];

  const benefits = [
    {
      key: 'time_saving',
      icon: Clock
    },
    {
      key: 'recognized_expertise',
      icon: Award
    },
    {
      key: 'dedicated_support',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen">
      <PageTitle pageKey="home" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary">
              {t("home.new_version_badge", { version })}
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {t("hero.title")}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6" onClick={() => window.location.href = '/telechargements'}>
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => window.location.href = '/presentation'}>
                {t("home.test_license.cta_learn_more")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("home.why_choose_evalix.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("home.why_choose_evalix.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-0 bg-muted/30">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold">{t(`home.features.${feature.key}.title`)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`home.features.${feature.key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("home.benefits.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {t(`home.benefits.${benefit.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`home.benefits.${benefit.key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Test License Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t("home.test_license.title")}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {t("home.test_license.subtitle")}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <Badge variant="secondary" className="text-lg px-4 py-2 mb-4">
                    {t("home.test_license.badge")}
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    {t("home.test_license.description")}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => window.location.href = '/contacts'}>
                    {t("home.test_license.cta_request")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => window.location.href = '/presentation'}>
                    {t("home.test_license.cta_learn_more")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t("home.cta.title")}
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            {t("home.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6"
              onClick={() => window.location.href = "account"}
            >
              {t("home.cta.start_now")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
              onClick={() => window.location.href = "tarifs"}
            >
              {t("home.cta.view_pricing")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
