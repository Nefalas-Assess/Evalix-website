import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSeoForPage } from '@/config/seo';
import { useLanguage } from '../../contexts/LanguageContext';

const PageTitle = ({ pageKey }) => {
  const { t, currentLanguage } = useLanguage();
  const location = useLocation();

  const fallbackTitle = pageKey ? t(`pageTitle.${pageKey}`) : t('pageTitle.base');
  const seo = getSeoForPage(currentLanguage, pageKey, fallbackTitle);

  const htmlLang = currentLanguage === 'fr' ? 'fr' : currentLanguage === 'nl' ? 'nl' : 'en';
  const ogLocale = htmlLang === 'fr' ? 'fr_FR' : htmlLang === 'nl' ? 'nl_NL' : 'en_US';
  const path = location?.pathname || '/';
  const canonicalUrl = `${seo.baseUrl || ''}${path}`;

  // Force update document.title directly since Helmet seems to have issues
  useEffect(() => {
    if (seo.title && seo.title !== `pageTitle.${pageKey}` && seo.title !== 'pageTitle.base') {
      document.title = seo.title;
      document.documentElement.lang = htmlLang;
    }
  }, [seo.title, pageKey, htmlLang]);

  return (
    <Helmet>
      <title>{seo.title}</title>
      <html lang={htmlLang} />
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:locale" content={ogLocale} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Evalix" />
      <meta property="og:type" content={seo.type} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default PageTitle;
