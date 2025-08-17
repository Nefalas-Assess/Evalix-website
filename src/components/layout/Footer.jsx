import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import logoEvalix from '../../assets/Logo-Evalix.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logoEvalix} 
                alt="Evalix Logo" 
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl text-foreground">Evalix</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              {t('footer.description')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/presentation" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.presentation')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/tarifs" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contacts" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/telechargements" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('nav.downloads')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/mentions-legales" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.legal')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/politique-confidentialite" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Evalix. Tous droits réservés.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Logiciel professionnel de calcul d'indemnités
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

