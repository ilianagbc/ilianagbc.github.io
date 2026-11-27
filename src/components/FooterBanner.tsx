import React from 'react';
import { Mail, Linkedin, CheckCircle2 } from 'lucide-react';
import { Language, FOOTER_CONTENT } from '../content';
import { PageId } from './Header';

interface FooterBannerProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const FooterBanner: React.FC<FooterBannerProps> = ({ lang, onNavigate }) => {
  const content = FOOTER_CONTENT;

  return (
    <footer className="bg-pine-deep text-white border-t border-pine mt-auto">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-14">

        {/* Main Footer Grid: 3 structured columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/12">

          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center text-left cursor-pointer rounded-md"
            >
              <div className="bg-paper rounded-md px-3.5 py-2">
                <img
                  src="/logo.png"
                  alt="IBNB — Green Building Energy Analysis"
                  className="h-8 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </button>

            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              {content.customerCare.desc[lang]}
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="mailto:ilianagbc@gmail.com"
                className="w-9 h-9 rounded-md bg-white/8 border border-white/12 hover:bg-emerald hover:border-emerald flex items-center justify-center text-white/85 hover:text-white transition-colors"
                title="Email: ilianagbc@gmail.com"
                aria-label="Email: ilianagbc@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/iliana-gbc"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-md bg-white/8 border border-white/12 hover:bg-emerald hover:border-emerald flex items-center justify-center text-white/85 hover:text-white transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Useful Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="font-display font-semibold text-sm text-white">
              {lang === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/75">
              <li>
                <button
                  onClick={() => {
                    onNavigate('servicios');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Servicios técnicos' : 'Technical services'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('trayectoria');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Mi trayectoria' : 'My background'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contacto');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Contacto directo' : 'Direct contact'}
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care & Tech Support (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <h4 className="font-display font-semibold text-sm text-white">
              {content.customerCare.title[lang]}
            </h4>

            <ul className="space-y-2.5 text-sm text-white/80">
              {content.customerCare.trustBullets[lang].map((bullet, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#52b788] shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-white/55 gap-3">
          <p>© {new Date().getFullYear()} IBNB green building energy analysis. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <div className="flex items-center gap-5">
            <span>UPC ETSEIB Alumni</span>
            <span>Barcelona, Spain</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
