import React, { useState } from 'react';
import {
  CheckCircle2,
  Building2,
  Award,
  Zap,
  ChevronDown,
  Layers
} from 'lucide-react';
import {
  Language,
  HERO_BENEFITS,
  INDUSTRY_BADGES,
  CLIENT_PROFILES,
  FAQ_ITEMS
} from '../content';
import { PageId } from './Header';

interface HomePageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, onNavigate }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <div className="page-enter">

      {/* 1. ARCHITECTURAL HERO — Asymmetric Editorial Split + Signature Viewfinder Frame */}
      <section className="bg-plaster border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-20 lg:pb-18">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Typography, Claim & Actions (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-pine tracking-[-0.03em] leading-[1.06] max-w-2xl">
                {lang === 'es'
                  ? 'Dando forma a la arquitectura del mañana'
                  : 'Shaping the city of tomorrow'}
              </h1>

              <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-xl">
                {lang === 'es'
                  ? 'Simulación energética para diseñar, verificar y optimizar edificios.'
                  : 'Energy simulation to design, verify and optimize buildings.'}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('contacto')}
                  className="inline-flex items-center justify-center bg-pine hover:bg-emerald text-white px-6 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Contactar' : 'Contact'}
                </button>
                <button
                  onClick={() => onNavigate('servicios')}
                  className="inline-flex items-center justify-center bg-paper hover:bg-mist text-pine border border-rule px-6 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Explorar servicios' : 'Explore services'}
                </button>
              </div>
            </div>

            {/* Right Column: Framed Architectural Photograph with IBNB Viewfinder Brackets (5 cols) */}
            <div className="lg:col-span-5">
              <div className="ibnb-viewfinder">
                <div className="rounded-md overflow-hidden border border-rule bg-paper">
                  <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] overflow-hidden bg-mist">
                    <img
                      src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85"
                      alt={lang === 'es' ? 'Arquitectura sostenible contemporánea' : 'Contemporary sustainable architecture'}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="px-4 py-3 bg-paper border-t border-rule flex items-center justify-between text-xs text-ink-muted">
                    <span className="font-medium text-pine">Barcelona</span>
                    <span className="font-mono tabular-nums">
                      {lang === 'es' ? 'Simulación horaria 8.760 h/año' : '8,760 h/yr dynamic simulation'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5 Core Benefits — Architectural Horizontal Ledger */}
        <div className="border-t border-rule bg-paper">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-rule border-x border-rule">
              {HERO_BENEFITS.map((b) => (
                <div
                  key={b.id}
                  className="px-5 py-5 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-pine leading-snug">
                    {b.title[lang]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. SOFTWARE & MOTORES DE SIMULACIÓN — Calibrated 6-Column Specification Strip */}
      <section className="bg-paper border-b border-rule py-14 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-7">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-pine tracking-tight">
              {lang === 'es' ? 'Software y motores de simulación' : 'Simulation software & engines'}
            </h2>
            <span className="text-xs font-mono text-ink-muted tabular-nums">
              {lang === 'es' ? '6 entornos validados' : '6 validated engines'}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-t border-l border-rule">
            {INDUSTRY_BADGES.map((badge, idx) => (
              <div
                key={idx}
                className="border-r border-b border-rule bg-paper hover:bg-plaster px-4 py-6 flex flex-col justify-between transition-colors min-h-[104px]"
              >
                <span className="font-display font-bold text-base text-pine leading-tight">
                  {badge.name === 'CYPETHERM HE Plus' ? (
                    <>
                      CYPETHERM<br />HE Plus
                    </>
                  ) : (
                    badge.name
                  )}
                </span>
                {lang === 'es' && badge.description && (
                  <span className="text-xs text-ink-muted mt-3 leading-snug">
                    {badge.description}
                  </span>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. ¿A QUIÉN VAN DIRIGIDOS LOS ANÁLISIS? — Structured 4-Column Stakeholder Band */}
      <section className="bg-mist/65 border-b border-rule py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-pine tracking-tight">
              {lang === 'es' ? '¿A quién van dirigidos los análisis?' : 'Who are the analyses for?'}
            </h2>
            <p className="text-base text-ink-muted mt-3 leading-relaxed">
              {lang === 'es'
                ? 'Soluciones técnicas para cada agente de la edificación.'
                : 'Technical solutions for every building stakeholder.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CLIENT_PROFILES.map((profile, i) => {
              const icons = [Building2, Award, Zap, Layers];
              const Icon = icons[i % icons.length];

              return (
                <div
                  key={profile.id}
                  className="bg-paper border border-rule border-t-2 border-t-pine rounded-lg p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-md bg-emerald-soft text-pine flex items-center justify-center mb-5">
                      <Icon className="w-4 h-4 text-emerald" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-pine mb-2 leading-snug">
                      {profile.title[lang]}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed mb-5">
                      {profile.subtitle[lang]}
                    </p>
                    <ul className="space-y-2.5 text-sm text-ink pt-5 border-t border-rule/80">
                      {profile.benefits[lang].map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald shrink-0 mt-0.5" />
                          <span className="leading-snug">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. FAQ — Editorial 12-Column Hairline Accordion */}
      <section className="bg-plaster py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">

            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-pine tracking-tight">
                FAQ
              </h2>
              <p className="text-base text-ink-muted mt-3 leading-relaxed max-w-sm">
                {lang === 'es'
                  ? 'Respuestas directas sobre plazos, entregables y metodología.'
                  : 'Direct answers on timelines, deliverables, and methodology.'}
              </p>
            </div>

            <div className="lg:col-span-8 border-t border-rule divide-y divide-rule">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openFaqId === item.id;

                return (
                  <div key={item.id}>
                    <button
                      onClick={() => toggleFaq(item.id)}
                      aria-expanded={isOpen}
                      className="w-full text-left py-5 flex items-center justify-between gap-6 cursor-pointer group"
                    >
                      <span className="font-display font-semibold text-base sm:text-lg text-pine group-hover:text-emerald transition-colors leading-snug">
                        {item.question[lang]}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-pine border-pine text-white'
                            : 'bg-paper border-rule text-ink-muted group-hover:border-emerald group-hover:text-pine'
                        }`}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-6 pr-10 text-[15px] text-ink-muted leading-relaxed max-w-[66ch]">
                        {item.answer[lang]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
