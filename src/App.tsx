import { useState } from 'react';
import { Language } from './content';
import { Header, PageId } from './components/Header';
import { FooterBanner } from './components/FooterBanner';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { TrayectoriaPage } from './components/TrayectoriaPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [lang, setLang] = useState<Language>('es');
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Smooth scroll to top on page change
  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper when selecting a service from card or methodology
  const handleSelectService = (serviceName: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceName) ? prev : [...prev, serviceName]
    );
    setActivePage('contacto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleService = (name: string) => {
    setSelectedServices(prev =>
      prev.includes(name) ? prev.filter(s => s !== name) : [...prev, name]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-plaster text-ink font-sans antialiased selection:bg-emerald/15 selection:text-pine">

      {/* Top Navigation Bar */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        lang={lang}
        onLanguageChange={setLang}
      />

      {/* Main Multi-Page Container */}
      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <HomePage
            lang={lang}
            onNavigate={handleNavigate}
            onSelectService={handleSelectService}
          />
        )}

        {activePage === 'servicios' && (
          <ServicesPage
            lang={lang}
            onNavigate={handleNavigate}
            onSelectServiceForQuote={handleSelectService}
          />
        )}

        {activePage === 'trayectoria' && (
          <TrayectoriaPage
            lang={lang}
            onNavigate={handleNavigate}
          />
        )}

        {activePage === 'contacto' && (
          <ContactPage
            lang={lang}
            selectedServices={selectedServices}
            onToggleService={toggleService}
          />
        )}
      </main>

      {/* Universal Footer Banner (Customer care & Our story & Logo on EVERY tab) */}
      <FooterBanner
        lang={lang}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
