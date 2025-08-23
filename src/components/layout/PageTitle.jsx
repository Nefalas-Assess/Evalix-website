import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../contexts/LanguageContext';

const PageTitle = ({ pageKey }) => {
  const { t, currentLanguage } = useLanguage();

  const title = pageKey ? t(`pageTitle.${pageKey}`) : t('pageTitle.base');

  // Force update document.title directly since Helmet seems to have issues
  useEffect(() => {
    if (title && title !== `pageTitle.${pageKey}` && title !== 'pageTitle.base') {
      document.title = title;
      document.documentElement.lang = currentLanguage === 'fr' ? 'fr' :
        currentLanguage === 'nl' ? 'nl' : 'en';
    }
  }, [title, pageKey, currentLanguage]);

  return (
    <Helmet>
      <title>{title}</title>
      <html lang={currentLanguage === 'fr' ? 'fr' : currentLanguage === 'nl' ? 'nl' : 'en'} />
    </Helmet>
  );
};

export default PageTitle;