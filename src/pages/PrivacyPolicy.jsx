import React from 'react';
import PageTitle from '../components/layout/PageTitle';
import { useLanguage } from '../contexts/LanguageContext';

const renderParagraphs = (paragraphs) => {
  return paragraphs?.map((text, index) => (
    <p key={index} className="text-muted-foreground">
      {text}
    </p>
  ));
};

const renderList = (items) => {
  if (!items?.length) {
    return null;
  }

  return (
    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export const PrivacyPolicy = () => {
  const { t } = useLanguage();
  const content = t('privacy_page');

  if (!content || typeof content !== 'object') {
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle pageKey="privacy" />

      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            {content.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {content.heroTitle}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {content.heroIntro}
          </p>
        </header>

        <div className="space-y-10">
          {content.lastUpdated && (
            <section className="rounded-xl border bg-card text-card-foreground shadow-sm">
              <div className="p-6 md:p-8 space-y-2">
                <h2 className="text-2xl font-semibold text-foreground">
                  {content.title}
                </h2>
                <p className="text-muted-foreground">
                  {content.lastUpdated}
                </p>
              </div>
            </section>
          )}

          {content.sections?.map((section, index) => (
            <section
              key={section.title || index}
              className="rounded-xl border bg-card text-card-foreground shadow-sm"
            >
              <div className="p-6 md:p-8 space-y-4">
                {section.title && (
                  <h2 className="text-2xl font-semibold text-foreground">
                    {section.title}
                  </h2>
                )}
                {renderParagraphs(section.paragraphs)}
                {renderList(section.list)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
