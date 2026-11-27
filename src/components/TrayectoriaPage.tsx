import React, { useState } from 'react';
import {
  ExternalLink,
  X,
  GraduationCap,
  Plus
} from 'lucide-react';
import {
  Language,
  VALUES,
  EDUCATION_DATA,
  ValueCard
} from '../content';
import { PageId } from './Header';

interface TrayectoriaPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
}

export const TrayectoriaPage: React.FC<TrayectoriaPageProps> = ({ lang }) => {
  const [selectedModalValue, setSelectedModalValue] = useState<ValueCard | null>(null);

  return (
    <div className="page-enter">

      {/* 1. Editorial Biography & Personal Profile */}
      <section className="bg-paper border-b border-rule py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Column: Brand Mark & Experience Anchor (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <div className="rounded-lg bg-plaster border border-rule p-8 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="IBNB — Green Building Energy Analysis"
                  className="h-16 sm:h-20 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="pt-6 border-t border-rule flex items-baseline gap-4">
                <span className="font-display text-5xl font-bold text-pine tabular-nums leading-none">
                  4
                </span>
                <span className="text-sm text-ink-muted leading-snug">
                  {lang === 'es'
                    ? 'Años de experiencia en ingeniería y simulación dinámica'
                    : 'Years of experience in engineering and dynamic simulation'}
                </span>
              </div>
            </div>

            {/* Right Column: Monograph Biography (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-display text-3xl sm:text-5xl font-bold text-pine tracking-[-0.03em] leading-[1.08]">
                {lang === 'es' ? 'Sobre mí, Iliana' : 'About me, Iliana'}
              </h1>

              <div className="text-[15px] sm:text-base text-ink space-y-4 leading-[1.72] max-w-[66ch]">
                <p>
                  {lang === 'es' ? (
                    <>
                      Soy ingeniera especializada en <strong className="font-semibold text-pine">simulación dinámica computacional, certificación ambiental de edificios y descarbonización del entorno construido</strong>. A través de <strong className="font-semibold text-pine">IBNB green building energy analysis</strong>, ayudo a estudios de arquitectura, promotoras e ingenierías a transformar intuiciones de diseño en decisiones numéricas contrastadas.
                    </>
                  ) : (
                    <>
                      I am an engineer specialized in <strong className="font-semibold text-pine">computational dynamic simulation, environmental certifications, and built environment decarbonization</strong>. Through <strong className="font-semibold text-pine">IBNB green building energy analysis</strong>, I help architecture firms, developers, and engineering teams translate design intuitions into empirically validated numerical decisions.
                    </>
                  )}
                </p>

                {lang === 'es' ? (
                  <>
                    <p>
                      Encontré esta pasión sin buscarla, dejándome guiar a lo largo de mis estudios por lo que de verdad me interesaba, con libertad y también con conciencia. Cuando llegué al mundo de la edificación sostenible, algo encajó: mi trayectoria profesional adquirió por fin un sentido concreto y encontré un sector hacia el que quería orientar mi camino.
                    </p>
                    <p>
                      Desde entonces participo activamente en conferencias, workshops y encuentros del sector, porque quiero seguir aprendiendo, contribuir a su evolución y formar parte de una comunidad que comparte una misma visión. Hoy siento que he encontrado mi lugar y que pertenezco a un colectivo que asume una responsabilidad común: apostar por un futuro en el que preservemos nuestros recursos naturales y la biodiversidad, mejoremos la calidad de vida de las personas y respetemos el derecho de las generaciones futuras a vivir en un entorno con una huella ambiental controlada.
                    </p>
                    <p>
                      Mi vocación profesional es contribuir a hacer de la edificación sostenible una herramienta real para avanzar hacia ese futuro.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      I found this passion without searching for it, letting myself be guided throughout my studies by what truly interested me, freely and consciously. When I entered the world of sustainable building, something clicked: my professional journey finally gained concrete purpose and I found a sector toward which I wanted to direct my path.
                    </p>
                    <p>
                      Since then, I actively participate in conferences, workshops, and industry gatherings because I want to keep learning, contribute to its evolution, and be part of a community that shares the same vision. Today I feel I have found my place and belong to a collective that embraces a shared responsibility: committing to a future where we preserve our natural resources and biodiversity, enhance people's quality of life, and respect future generations' right to live in an environment with a controlled environmental footprint.
                    </p>
                    <p>
                      My professional vocation is to contribute to making sustainable building an effective tool to advance toward that future.
                    </p>
                  </>
                )}

                <p className="pt-2 border-t border-rule text-ink">
                  {lang === 'es' ? (
                    <>
                      Los edificios son responsables de aproximadamente el <strong className="font-semibold text-pine tabular-nums">40% del consumo de energía y el 36% de las emisiones directas e indirectas de gases de efecto invernadero en la Unión Europea</strong>. Creo firmemente que la única forma de alcanzar la neutralidad climática sin incurrir en sobrecostes ni desviaciones de obra es simular rigurosamente el comportamiento dinámico del edificio antes de colocar un solo ladrillo.
                    </>
                  ) : (
                    <>
                      Buildings account for roughly <strong className="font-semibold text-pine tabular-nums">40% of energy consumption and 36% of greenhouse gas emissions in the European Union</strong>. I firmly believe that achieving climate neutrality without cost overruns or site deviations requires simulating the dynamic physics of the building rigorously before laying a single brick.
                    </>
                  )}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Formación Académica Especializada */}
      <section className="bg-mist/65 border-b border-rule py-16 lg:py-22">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3 mb-10">
            <div className="w-9 h-9 rounded-md bg-paper border border-rule flex items-center justify-center text-emerald shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-pine tracking-tight">
              {lang === 'es' ? 'Formación académica especializada' : 'Specialized academic background'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {/* UPC ETSEIB */}
            <div className="bg-paper rounded-lg border border-rule p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-medium text-emerald">
                    {lang === 'es' ? 'Universidad pública, Barcelona' : 'Public university, Barcelona'}
                  </span>
                  <a
                    href={EDUCATION_DATA.upc.institutionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-ink-muted hover:text-pine inline-flex items-center gap-1 transition-colors"
                  >
                    <span>upc.edu</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <h3 className="font-display font-bold text-xl text-pine mb-5 leading-snug">
                  {EDUCATION_DATA.upc.institution}
                </h3>

                <div className="border-y border-rule divide-y divide-rule">
                  {EDUCATION_DATA.upc.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="py-4 flex items-start justify-between gap-3 group"
                    >
                      <div>
                        <span className="text-xs text-ink-muted block mb-1">
                          {idx === 0
                            ? (lang === 'es' ? 'Posgrado / Máster universitario' : 'Graduate / Master’s degree')
                            : (lang === 'es' ? 'Grado / Recorrido sucesivo PARS' : 'Bachelor’s / PARS track')}
                        </span>
                        <span className="font-display font-semibold text-sm sm:text-[15px] text-pine group-hover:text-emerald transition-colors leading-snug block">
                          {item.title[lang]}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-ink-muted group-hover:text-emerald shrink-0 mt-1 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              <p className="pt-5 text-sm text-ink-muted leading-relaxed">
                {lang === 'es'
                  ? 'Fundamentos termodinámicos avanzados, transferencia de calor, integración de energías renovables y modelización matemática aplicada a la física de la edificación.'
                  : 'Advanced thermodynamic principles, heat transfer physics, renewable energy systems integration, and computational mathematical modeling for building performance.'}
              </p>
            </div>

            {/* UPC School */}
            <div className="bg-paper rounded-lg border border-rule p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-medium text-emerald">
                    {lang === 'es' ? 'Especialización avanzada' : 'Advanced specialization'}
                  </span>
                  <a
                    href={EDUCATION_DATA.upcSchool.institutionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-ink-muted hover:text-pine inline-flex items-center gap-1 transition-colors"
                  >
                    <span>talent.upc.edu</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <h3 className="font-display font-bold text-xl text-pine mb-5 leading-snug">
                  {EDUCATION_DATA.upcSchool.institution}
                </h3>

                <div className="border-y border-rule divide-y divide-rule">
                  {EDUCATION_DATA.upcSchool.items.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="py-4 flex items-start justify-between gap-3 group"
                    >
                      <div>
                        <span className="text-xs text-ink-muted block mb-1">
                          {idx === 0
                            ? (lang === 'es' ? 'Inteligencia artificial y automatización' : 'Artificial intelligence & automation')
                            : (lang === 'es' ? 'Arquitectura pasiva y regenerativa' : 'Passive & regenerative architecture')}
                        </span>
                        <span className="font-display font-semibold text-sm sm:text-[15px] text-pine group-hover:text-emerald transition-colors leading-snug block">
                          {item.title[lang]}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-ink-muted group-hover:text-emerald shrink-0 mt-1 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              <p className="pt-5 text-sm text-ink-muted leading-relaxed">
                {lang === 'es'
                  ? 'Integración de inteligencia artificial en flujos computacionales y diseño bioclimático de alta eficiencia energética.'
                  : 'Integration of artificial intelligence into engineering computational pipelines and high-performance bioclimatic building design.'}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Pilares Diferenciales (Values & Methodology) */}
      <section className="bg-plaster py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-pine tracking-tight">
              {lang === 'es' ? '¿Por qué confiar tu proyecto a IBNB?' : 'Why entrust your project to IBNB?'}
            </h2>
            <p className="text-base text-ink-muted mt-3 leading-relaxed">
              {lang === 'es'
                ? 'Haz clic en cada pilar para conocer el detalle de los flujos de trabajo aplicados.'
                : 'Select any pillar to explore the operational workflows and technical guarantees.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((val) => (
              <button
                key={val.id}
                type="button"
                onClick={() => setSelectedModalValue(val)}
                className="text-left bg-paper p-7 rounded-lg border border-rule hover:border-emerald transition-colors flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <h3 className="font-display font-bold text-xl text-pine mb-3 group-hover:text-emerald transition-colors">
                    {val.title[lang]}
                  </h3>

                  <p className="text-sm text-ink-muted leading-relaxed">
                    {val.shortDesc[lang]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-rule/80 flex items-center justify-between text-xs font-medium text-emerald">
                  <span>{lang === 'es' ? 'Ver detalle' : 'View details'}</span>
                  <Plus className="w-4 h-4" />
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Value Modal Dialog */}
      {selectedModalValue && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pine-deep/45 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="value-modal-title"
        >
          <div className="bg-paper rounded-lg max-w-lg w-full p-7 sm:p-8 border border-rule shadow-xl relative">
            <button
              type="button"
              onClick={() => setSelectedModalValue(null)}
              aria-label={lang === 'es' ? 'Cerrar' : 'Close'}
              className="absolute top-5 right-5 p-2 rounded-md border border-rule text-ink-muted hover:text-pine hover:bg-plaster transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3
              id="value-modal-title"
              className="font-display text-2xl font-bold text-pine mb-3 pr-10"
            >
              {selectedModalValue.title[lang]}
            </h3>

            <p className="text-[15px] text-ink leading-relaxed mb-5">
              {selectedModalValue.detail[lang]}
            </p>

            <div className="pt-4 border-t border-rule text-xs font-mono text-emerald">
              {selectedModalValue.highlight[lang]}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
