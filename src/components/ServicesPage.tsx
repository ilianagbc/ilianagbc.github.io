import React, { useState } from 'react';
import {
  Leaf,
  ShieldCheck,
  Building2,
  Zap,
  Cpu,
  CheckCircle2,
  Sliders,
  Award,
  FileText,
  Video,
  RefreshCw,
  Send,
  Workflow,
  Network
} from 'lucide-react';
import {
  Language,
  SERVICES,
  METHODOLOGY_STEPS
} from '../content';
import { PageId } from './Header';

interface ServicesPageProps {
  lang: Language;
  onNavigate: (page: PageId) => void;
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  lang,
  onNavigate,
  onSelectServiceForQuote
}) => {
  const [activeMethodologyIndex, setActiveMethodologyIndex] = useState(0);

  const serviceIcons = [Leaf, ShieldCheck, Building2, Zap, Cpu];

  const handleHireService = (serviceName: string) => {
    onSelectServiceForQuote(serviceName);
    onNavigate('contacto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentStep = METHODOLOGY_STEPS[activeMethodologyIndex];

  return (
    <div className="page-enter">

      {/* 1. Editorial Page Header */}
      <section className="bg-paper border-b border-rule py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-pine tracking-[-0.03em] leading-[1.08]">
              {lang === 'es'
                ? 'Servicios especializados en edificación sostenible'
                : 'Specialized sustainable building services'}
            </h1>

            <p className="text-base sm:text-lg text-ink-muted leading-relaxed max-w-3xl">
              {lang === 'es'
                ? 'Simulación energética computacional, cálculo de confort lumínico/térmico, dimensionamiento renovable y análisis de ciclo de vida aplicados desde la concepción del edificio hasta su validación oficial.'
                : 'Computational energy modeling, daylight and thermal comfort simulation, renewable sizing, and whole-building life-cycle assessment from concept design to official certification.'}
            </p>
          </div>
        </div>
      </section>

      {/* 2. 5 Technical Services + 6th Custom Combined Scope Anchor */}
      <section className="py-14 lg:py-20 bg-plaster border-b border-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-pine tracking-tight">
              {lang === 'es' ? 'Servicios técnicos' : 'Technical services'}
            </h2>
            <p className="text-sm sm:text-base text-ink-muted mt-2 leading-relaxed">
              {lang === 'es'
                ? 'Cómo estructuro cada servicio técnico para optimizar el rendimiento energético, el confort y la sostenibilidad de cada edificio.'
                : 'How I structure each technical service to optimize energy performance, occupant comfort, and building sustainability.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = serviceIcons[idx % serviceIcons.length];

              return (
                <div
                  key={service.id}
                  className="bg-paper rounded-lg border border-rule hover:border-emerald/70 p-7 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <span className="text-xs font-medium text-emerald">
                        {service.category[lang]}
                      </span>
                      <div className="w-9 h-9 bg-emerald-soft rounded-md flex items-center justify-center text-emerald shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-display text-xl font-bold text-pine mb-3 leading-snug">
                      {service.name[lang]}
                    </h3>

                    <p className="text-sm text-ink-muted leading-relaxed">
                      {service.description[lang]}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-rule/70">
                    <span className="text-xs font-mono text-ink-muted">
                      {service.software}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* 6th Card: Custom Combined Scope — Primary Dark Anchor */}
            <div className="bg-pine text-white rounded-lg p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-xs font-medium text-[#7dd3a5]">
                    {lang === 'es' ? 'Alcance combinado' : 'Custom scopes'}
                  </span>
                  <div className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-white shrink-0">
                    <Sliders className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-3 leading-snug">
                  {lang === 'es' ? 'Paquetes combinados a medida' : 'Tailored multi-disciplinary bundles'}
                </h3>

                <p className="text-sm text-white/80 leading-relaxed mb-7">
                  {lang === 'es'
                    ? 'Puedo crear un paquete técnico a medida unificando diferentes áreas de cálculo y simulación según los requerimientos y la fase concreta de tu proyecto. Agrupa disciplinas bajo una interlocución técnica única conmigo, evitando duplicidades y optimizando costes.'
                    : 'I can build a tailored technical bundle combining different calculation and simulation disciplines based on your project requirements and phase. Group multiple scopes under a single direct technical contact, streamlining workflows and optimizing costs.'}
                </p>
              </div>

              <button
                onClick={() => {
                  onNavigate('contacto');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full inline-flex items-center justify-center bg-paper hover:bg-emerald-soft text-pine py-3 px-5 rounded-md text-sm font-semibold transition-colors cursor-pointer"
              >
                {lang === 'es' ? 'Solicitar propuesta combinada' : 'Request combined proposal'}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. METODOLOGÍA DE TRABAJO & LOGÍSTICA (5 ÁREAS TÉCNICAS) */}
      <section className="py-16 lg:py-24 bg-mist/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-pine tracking-tight">
              {lang === 'es' ? 'Metodología de trabajo y logística' : 'Work methodology & logistics'}
            </h2>
            <p className="text-sm sm:text-base text-ink-muted mt-2 leading-relaxed">
              {lang === 'es'
                ? 'Protocolo de coordinación, sesiones de seguimiento continuo e iteraciones pactadas para cada disciplina técnica.'
                : 'Coordination protocols, structured follow-up sessions, and milestone iterations tailored for each technical discipline.'}
            </p>
          </div>

          {/* Interactive Methodology Navigator */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Disciplined Index Tabs (4 cols) */}
            <div className="lg:col-span-4 bg-paper border border-rule rounded-lg overflow-hidden divide-y divide-rule">
              {METHODOLOGY_STEPS.map((step, idx) => {
                const isSelected = activeMethodologyIndex === idx;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveMethodologyIndex(idx)}
                    aria-pressed={isSelected}
                    className={`w-full text-left px-5 py-4 transition-colors cursor-pointer border-l-[3px] ${
                      isSelected
                        ? 'border-l-emerald bg-plaster'
                        : 'border-l-transparent bg-paper hover:bg-plaster/60'
                    }`}
                  >
                    <span className={`text-xs font-medium block mb-1 ${isSelected ? 'text-emerald' : 'text-ink-muted'}`}>
                      {step.badge[lang]}
                    </span>
                    <span className={`font-display font-bold text-[15px] block leading-snug ${isSelected ? 'text-pine' : 'text-ink'}`}>
                      {step.title[lang]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Technical Specification Sheet (8 cols) */}
            <div className="lg:col-span-8 bg-paper rounded-lg border border-rule p-6 sm:p-9 space-y-8">

              {/* Sheet Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-rule">
                <div className="space-y-1.5">
                  <span className="text-xs font-medium text-emerald block">
                    {currentStep.phase[lang]}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-pine tracking-tight leading-tight">
                    {currentStep.title[lang]}
                  </h3>
                </div>

                <button
                  onClick={() => handleHireService(currentStep.title[lang])}
                  className="self-start inline-flex items-center justify-center bg-pine hover:bg-emerald text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer shrink-0"
                >
                  {lang === 'es' ? 'Consultar esta área' : 'Inquire for this area'}
                </button>
              </div>

              {/* Extended Technical Scope */}
              <div className="space-y-2.5">
                <h4 className="text-sm font-semibold text-pine flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald" />
                  <span>{lang === 'es' ? 'Alcance y fundamento técnico' : 'Technical scope & baseline'}</span>
                </h4>
                <p className="text-[15px] text-ink leading-relaxed max-w-[68ch]">
                  {currentStep.description[lang]}
                </p>
              </div>

              {/* 4-Phase Sequential Operating Workflow (Genuine Sequence: 01 -> 04) */}
              <div className="space-y-3.5">
                <h4 className="text-sm font-semibold text-pine flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-emerald" />
                  <span>{lang === 'es' ? 'Flujo de trabajo operativo en 4 fases' : '4-phase operating workflow'}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 border border-rule rounded-md divide-y sm:divide-y-0 sm:divide-x divide-rule bg-plaster/50">

                  {/* Phase 01: Reception */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-emerald tabular-nums">01</span>
                      <FileText className="w-4 h-4 text-ink-muted" />
                    </div>
                    <span className="font-display text-sm font-bold text-pine block leading-snug">
                      {lang === 'es' ? 'Recepción de proyecto' : 'Project intake'}
                    </span>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {currentStep.workflow.reception[lang]}
                    </p>
                  </div>

                  {/* Phase 02: Tracking */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-emerald tabular-nums">02</span>
                      <Video className="w-4 h-4 text-ink-muted" />
                    </div>
                    <span className="font-display text-sm font-bold text-pine block leading-snug">
                      {lang === 'es' ? 'Sesiones de seguimiento' : 'Follow-up sessions'}
                    </span>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {currentStep.workflow.tracking[lang]}
                    </p>
                  </div>

                  {/* Phase 03: Reviews */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-emerald tabular-nums">03</span>
                      <RefreshCw className="w-4 h-4 text-ink-muted" />
                    </div>
                    <span className="font-display text-sm font-bold text-pine block leading-snug">
                      {lang === 'es' ? 'Revisiones e iteraciones' : 'Reviews & iterations'}
                    </span>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {currentStep.workflow.reviews[lang]}
                    </p>
                  </div>

                  {/* Phase 04: Delivery */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-emerald tabular-nums">04</span>
                      <Send className="w-4 h-4 text-ink-muted" />
                    </div>
                    <span className="font-display text-sm font-bold text-pine block leading-snug">
                      {lang === 'es' ? 'Entrega ejecutiva' : 'Executive handover'}
                    </span>
                    <p className="text-xs text-ink-muted leading-relaxed">
                      {currentStep.workflow.delivery[lang]}
                    </p>
                  </div>

                </div>
              </div>

              {/* Area 2 ONLY: Official Certification Evidence Ledger */}
              {currentStep.certEvidence && (
                <div className="bg-plaster rounded-md p-6 border border-rule border-l-[3px] border-l-brass space-y-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-brass shrink-0" />
                    <span className="text-sm font-semibold text-pine">
                      {lang === 'es'
                        ? 'Evidencias oficiales para certificadoras e ICAEN'
                        : 'Official evidence for green labels & ICAEN'}
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    {currentStep.certEvidence[lang].map((item, eIdx) => (
                      <li
                        key={eIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] text-ink leading-relaxed pb-3 border-b border-rule/60"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brass shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Logistics & Client Coordination */}
              <div className="pt-6 border-t border-rule space-y-2">
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-emerald" />
                  <span className="text-sm font-semibold text-pine">
                    {lang === 'es' ? 'Coordinación y logística técnica' : 'Coordination & technical logistics'}
                  </span>
                </div>
                <p className="text-sm text-ink-muted leading-relaxed max-w-[68ch]">
                  {currentStep.logistics[lang]}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
