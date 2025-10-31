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

const renderDetails = (details) => {
  return details?.map((text, index) => (
    <p key={index} className="text-muted-foreground">
      {text}
    </p>
  ));
};

const renderLinks = (links) => {
  return links?.map((link, index) => (
    <p key={index} className="text-muted-foreground">
      {link.label ? `${link.label} : ` : ''}
      <a
        href={link.href}
        target="_blank"
        rel="noreferrer"
        className="text-primary hover:underline"
      >
        {link.text}
      </a>
    </p>
  ));
};

export const MentionLegal = () => {
  const { t } = useLanguage();
  const content = t('legal_page');

  if (!content || typeof content !== 'object') {
    return null;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageTitle pageKey="legal" />

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
                <div className="space-y-2">
                  {renderParagraphs(section.paragraphs)}
                  {renderDetails(section.details)}
                  {renderLinks(section.links)}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentionLegal;
