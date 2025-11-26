import React from 'react';
import { Helmet } from 'react-helmet-async';
import { getBaseUrl } from '@/config/seo';
import { useLanguage } from '../../contexts/LanguageContext';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { currentLanguage } = useLanguage();
  const baseUrl = getBaseUrl(currentLanguage);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Evalix',
    url: baseUrl,
    logo: `${baseUrl}/favicon.ico`,
    areaServed: ['BE', 'FR', 'NL'],
    sameAs: []
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Evalix',
    url: baseUrl,
    inLanguage: currentLanguage || 'en'
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
