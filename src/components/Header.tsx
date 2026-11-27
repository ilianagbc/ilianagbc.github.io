import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language } from '../content';

export type PageId = 'home' | 'servicios' | 'trayectoria' | 'contacto';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  lang,
  onLanguageChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-plaster/92 backdrop-blur-md border-b border-rule">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between gap-4">

        {/* Brand Logo - Clicking here goes to HOME */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center text-left cursor-pointer py-1 rounded-sm"
          title={lang === 'es' ? 'Ir al inicio' : 'Go to homepage'}
          id="brand-logo-btn"
        >
          <img
            src="/logo.png"
            alt="IBNB — Green Building Energy Analysis"
            className="h-9 sm:h-11 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </button>

        {/* Desktop Navigation: Only 3 tabs (Servicios, Mi Trayectoria, Contacta) - Home is accessed via logo */}
        <nav className="hidden md:flex items-center gap-7" aria-label={lang === 'es' ? 'Navegación principal' : 'Primary navigation'}>

          <button
            id="nav-tab-servicios"
            onClick={() => handleNavClick('servicios')}
            aria-current={activePage === 'servicios' ? 'page' : undefined}
            className={`relative py-2 text-sm font-medium transition-colors cursor-pointer ${
              activePage === 'servicios'
                ? 'text-pine font-semibold'
                : 'text-ink-muted hover:text-pine'
            }`}
          >
            {lang === 'es' ? 'Servicios' : 'Services'}
            {activePage === 'servicios' && (
              <span className="absolute inset-x-0 -bottom-[22px] h-[2px] bg-emerald" aria-hidden="true" />
            )}
          </button>

          <button
            id="nav-tab-trayectoria"
            onClick={() => handleNavClick('trayectoria')}
            aria-current={activePage === 'trayectoria' ? 'page' : undefined}
            className={`relative py-2 text-sm font-medium transition-colors cursor-pointer ${
              activePage === 'trayectoria'
                ? 'text-pine font-semibold'
                : 'text-ink-muted hover:text-pine'
            }`}
          >
            {lang === 'es' ? 'Mi trayectoria' : 'My background'}
            {activePage === 'trayectoria' && (
              <span className="absolute inset-x-0 -bottom-[22px] h-[2px] bg-emerald" aria-hidden="true" />
            )}
          </button>

          <span className="h-5 w-px bg-rule" aria-hidden="true" />

          {/* Language Switcher */}
          <div className="flex items-center bg-paper p-0.5 rounded-md border border-rule text-xs font-medium">
            <button
              type="button"
              id="lang-btn-es"
              onClick={() => onLanguageChange('es')}
              className={`px-2.5 py-1 rounded-[4px] transition-colors cursor-pointer ${
                lang === 'es'
                  ? 'bg-pine text-white font-semibold'
                  : 'text-ink-muted hover:text-pine'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              id="lang-btn-en"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-[4px] transition-colors cursor-pointer ${
                lang === 'en'
                  ? 'bg-pine text-white font-semibold'
                  : 'text-ink-muted hover:text-pine'
              }`}
            >
              EN
            </button>
          </div>

          {/* Contacta CTA */}
          <button
            id="nav-tab-contacto"
            onClick={() => handleNavClick('contacto')}
            aria-current={activePage === 'contacto' ? 'page' : undefined}
            className={`inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer ${
              activePage === 'contacto'
                ? 'bg-emerald text-white'
                : 'bg-pine text-white hover:bg-emerald'
            }`}
          >
            {lang === 'es' ? 'Contacta' : 'Contact'}
          </button>

        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2.5 md:hidden">
          <div className="flex items-center bg-paper p-0.5 rounded-md border border-rule text-xs font-medium">
            <button
              type="button"
              onClick={() => onLanguageChange('es')}
              className={`px-2 py-1 rounded-[4px] transition-colors ${
                lang === 'es' ? 'bg-pine text-white font-semibold' : 'text-ink-muted'
              }`}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-1 rounded-[4px] transition-colors ${
                lang === 'en' ? 'bg-pine text-white font-semibold' : 'text-ink-muted'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md border border-rule bg-paper text-pine hover:bg-mist transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            id="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-rule bg-paper px-5 py-5 space-y-2">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3.5 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
              activePage === 'home'
                ? 'bg-emerald-soft text-pine font-semibold border-l-2 border-emerald'
                : 'text-ink hover:bg-plaster'
            }`}
          >
            <span>{lang === 'es' ? 'Inicio' : 'Home'}</span>
          </button>

          <button
            onClick={() => handleNavClick('servicios')}
            className={`w-full text-left px-3.5 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
              activePage === 'servicios'
                ? 'bg-emerald-soft text-pine font-semibold border-l-2 border-emerald'
                : 'text-ink hover:bg-plaster'
            }`}
          >
            <span>{lang === 'es' ? 'Servicios y metodología' : 'Services & methodology'}</span>
          </button>

          <button
            onClick={() => handleNavClick('trayectoria')}
            className={`w-full text-left px-3.5 py-3 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
              activePage === 'trayectoria'
                ? 'bg-emerald-soft text-pine font-semibold border-l-2 border-emerald'
                : 'text-ink hover:bg-plaster'
            }`}
          >
            <span>{lang === 'es' ? 'Mi trayectoria' : 'My background'}</span>
          </button>

          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contacto')}
              className="w-full text-center py-3 rounded-md text-sm font-medium bg-pine text-white hover:bg-emerald transition-colors"
            >
              {lang === 'es' ? 'Contactar y pedir propuesta' : 'Contact & request proposal'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
