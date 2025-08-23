import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Monitor, Smartphone, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PageTitle from '../components/layout/PageTitle';

const Downloads = () => {
  const { t } = useLanguage();

  const downloadLinks = {
    windows: 'https://github.com/Nefalas-Assess/Assess-calculator/releases/download/v0.2.2/Evalix-0.2.2.exe',
    macos: 'https://github.com/Nefalas-Assess/Assess-calculator/releases/download/v0.2.2/Evalix-0.2.2.dmg'
  };

  const systemRequirements = {
    windows: {
      os: t('downloads_page.windows_card.os'),
      processor: t('downloads_page.windows_card.processor'),
      memory: t('downloads_page.windows_card.memory'),
      storage: t('downloads_page.windows_card.storage')
    },
    macos: {
      os: t('downloads_page.macos_card.os'),
      processor: t('downloads_page.macos_card.processor'),
      memory: t('downloads_page.macos_card.memory'),
      storage: t('downloads_page.macos_card.storage')
    }
  };

  const features = [
    {
      icon: Shield,
      key: 'secure_reliable'
    },
    {
      icon: CheckCircle,
      key: 'latest_version'
    },
    {
      icon: Monitor,
      key: 'modern_interface'
    }
  ];

  const handleDownload = (platform) => {
    window.open(downloadLinks[platform], '_blank');
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle pageKey="downloads" />
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t('downloads_page.title')}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t('downloads_page.subtitle')}
        </p>
      </div>

      {/* Download Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        {/* Windows */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Monitor className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-2xl font-bold">{t('downloads_page.windows_card.title')}</CardTitle>
            <CardDescription>
              {t('downloads_page.windows_card.description')}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">{t('downloads_page.windows_card.requirements')}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {systemRequirements.windows.os}</li>
                <li>• {systemRequirements.windows.processor}</li>
                <li>• {systemRequirements.windows.memory}</li>
                <li>• {systemRequirements.windows.storage}</li>
              </ul>
            </div>

            <Button
              onClick={() => handleDownload('windows')}
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
            >
              <Download className="h-4 w-4 mr-2" />
              {t('downloads_page.windows_card.download_button')}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              {t('downloads_page.windows_card.file_info')}
            </p>
          </CardContent>
        </Card>

        {/* macOS */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-8 w-8 text-gray-600 dark:text-gray-400" />
            </div>
            <CardTitle className="text-2xl font-bold">{t('downloads_page.macos_card.title')}</CardTitle>
            <CardDescription>
              {t('downloads_page.macos_card.description')}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">{t('downloads_page.macos_card.requirements')}</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• {systemRequirements.macos.os}</li>
                <li>• {systemRequirements.macos.processor}</li>
                <li>• {systemRequirements.macos.memory}</li>
                <li>• {systemRequirements.macos.storage}</li>
              </ul>
            </div>

            <Button
              onClick={() => handleDownload('macos')}
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
            >
              <Download className="h-4 w-4 mr-2" />
              {t('downloads_page.macos_card.download_button')}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              {t('downloads_page.macos_card.file_info')}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {t(`downloads_page.features_section.${feature.key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t(`downloads_page.features_section.${feature.key}.description`)}
              </p>
            </div>
          );
        })}
      </div>

      {/* Installation Instructions */}
      <div className="bg-muted/50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          {t('downloads_page.installation_instructions.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center">
              <Monitor className="h-5 w-5 mr-2 text-blue-600" />
              {t('downloads_page.installation_instructions.windows.title')}
            </h3>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li>{t('downloads_page.installation_instructions.windows.step1')}</li>
              <li>{t('downloads_page.installation_instructions.windows.step2')}</li>
              <li>{t('downloads_page.installation_instructions.windows.step3')}</li>
              <li>{t('downloads_page.installation_instructions.windows.step4')}</li>
            </ol>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 flex items-center">
              <Smartphone className="h-5 w-5 mr-2 text-gray-600" />
              {t('downloads_page.installation_instructions.macos.title')}
            </h3>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li>{t('downloads_page.installation_instructions.macos.step1')}</li>
              <li>{t('downloads_page.installation_instructions.macos.step2')}</li>
              <li>{t('downloads_page.installation_instructions.macos.step3')}</li>
              <li>{t('downloads_page.installation_instructions.macos.step4')}</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Support */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          {t('downloads_page.support_section.title')}
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          {t('downloads_page.support_section.description')}
        </p>
        <Button variant="outline" size="lg" onClick={() => window.location.href = '/contacts'}>
          {t('downloads_page.support_section.contact_support')}
        </Button>
      </div>
    </div>
  );
};

export default Downloads;

