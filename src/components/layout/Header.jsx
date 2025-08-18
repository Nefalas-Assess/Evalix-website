import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import logoEvalix from '../../assets/Logo-Evalix.png';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { currentLanguage, changeLanguage, availableLanguages, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { key: 'home', path: '/' },
    { key: 'presentation', path: '/presentation' },
    { key: 'pricing', path: '/tarifs' },
    { key: 'contact', path: '/contacts' },
    { key: 'downloads', path: '/telechargements' }
  ];

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logoEvalix}
              alt="Evalix Logo"
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl text-foreground">Evalix</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${isActivePath(item.path)
                  ? 'text-primary'
                  : 'text-muted-foreground'
                  }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          {/* Actions Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Sélecteur de langue */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 px-0">
                  <span className="text-lg">
                    {availableLanguages.find(lang => lang.code === currentLanguage)?.flag || '🌐'}
                  </span>
                  <span className="sr-only">{t('header.change_language')}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {availableLanguages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={currentLanguage === lang.code ? 'bg-accent' : ''}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Switch thème */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 px-0"
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">{t('header.change_theme')}</span>
            </Button>

            {/* Bouton Souscrire */}
            <Button className="bg-primary hover:bg-primary/90" onClick={() => window.location.href = '/login'}>
              {t('nav.login')}
            </Button>
          </div>

          {/* Menu Mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 px-0"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">{t('header.menu')}</span>
            </Button>
          </div>
        </div>

        {/* Menu Mobile Ouvert */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${isActivePath(item.path)
                    ? 'text-primary bg-accent'
                    : 'text-muted-foreground'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}

              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center space-x-2">
                  {/* Sélecteur de langue mobile */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <span className="text-lg mr-2">
                          {availableLanguages.find(lang => lang.code === currentLanguage)?.flag || '🌐'}
                        </span>
                        <span className="text-sm">
                          {availableLanguages.find(lang => lang.code === currentLanguage)?.name}
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {availableLanguages.map((lang) => (
                        <DropdownMenuItem
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={currentLanguage === lang.code ? 'bg-accent' : ''}
                        >
                          <span className="mr-2">{lang.flag}</span>
                          {lang.name}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Switch thème mobile */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                  >
                    {theme === 'dark' ? (
                      <Sun className="h-4 w-4" />
                    ) : (
                      <Moon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <div className="px-3 py-2">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  {t('nav.subscribe')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

