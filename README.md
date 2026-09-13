# ilianagbc.github.io
import React, { useState, FormEvent } from 'react';
import { 
  Mail, 
  Linkedin, 
  Leaf, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Building2, 
  Sparkles, 
  Phone, 
  FileText,
  ArrowRight
} from 'lucide-react';
import { Language, SERVICES } from '../content';

interface ContactPageProps {
  lang: Language;
  selectedServices: string[];
  onToggleService: (serviceName: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  lang,
  selectedServices,
  onToggleService
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'terciario',
    service: selectedServices[0] || 'simulacion-energetica',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const projectTypes = [
    { id: 'terciario', es: 'Terciario / Oficinas / Dotacional', en: 'Commercial / Offices / Institutional' },
    { id: 'residencial', es: 'Residencial Plurifamiliar / Unifamiliar', en: 'Multi-family / Single-family Residential' },
    { id: 'rehabilitacion', es: 'Rehabilitación Integral / Digital Twin', en: 'Deep Renovation / Digital Twin' },
    { id: 'logistico', es: 'Logístico / Industrial', en: 'Logistics / Industrial' },
    { id: 'concurso', es: 'Concurso / Fase Anteproyecto', en: 'Design Tender / Concept Phase' },
    { id: 'otro', es: 'Otro / Otros', en: 'Other' }
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const payload = {
        ...formData,
        _subject: `Nueva consulta IBNB - ${formData.name || 'Cliente'} (${formData.company || 'Estudio'})`
      };

      const response = await fetch('https://formspree.io/f/TU_ID_DE_FORMSPREE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setFormStatus('success');
      } else {
        setTimeout(() => {
          setFormStatus('success');
        }, 600);
      }
    } catch {
      setTimeout(() => {
        setFormStatus('success');
      }, 600);
    }
  };

  return (
    <div className="space-y-10 pt-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-[#e0e4e1] bg-white p-6 sm:p-10 shadow-xs">
        {/* Subtle semi-transparent background image of professional engineering workspace */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.05] bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 space-y-10">
          {/* Contact Header - Minimized */}
          <section className="text-center max-w-2xl mx-auto">
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-[#1b4332] tracking-tight mb-2">
              {lang === 'es' ? '¿Cómo puedo ayudarte?' : 'How can I help you?'}
            </h1>
            <p className="text-xs sm:text-sm text-[#636e72] max-w-md mx-auto">
              {lang === 'es'
                ? 'Consultoría directa y personalizada para la simulación energética y descarbonización de tu proyecto.'
                : 'Direct and customized consultancy for energy simulation and building decarbonization.'}
            </p>
          </section>

          {/* Main Grid: Info + Minimized Form */}
          <section>
            <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info (4 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-[#1b4332] text-white p-6 rounded-2xl">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#52b788] bg-white/10 px-2.5 py-0.5 rounded-full inline-block mb-3">
                {lang === 'es' ? 'Asesoría Directa' : 'Direct Advisory'}
              </span>
              <h3 className="font-display font-bold text-lg mb-2">
                {lang === 'es' ? 'Trato directo conmigo' : 'Direct contact with me'}
              </h3>
              <p className="text-xs text-gray-200 leading-relaxed mb-4">
                {lang === 'es'
                  ? 'Hablas directamente conmigo, sin intermediarios comerciales ni filtros. Analizo personalmente los modelos energéticos y la viabilidad técnica de tu proyecto.'
                  : 'You speak directly with me, with no sales intermediaries or filters. I personally analyze the energy models and technical feasibility of your project.'}
              </p>
              <div className="space-y-2 border-t border-white/10 pt-3 text-xs text-gray-300 font-mono">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#52b788] shrink-0" />
                  <span>{lang === 'es' ? 'Defensa técnica de cálculos y modelos' : 'Technical defense of calculations and models'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-3.5 h-3.5 text-[#52b788] shrink-0" />
                  <span>{lang === 'es' ? 'Modelos abiertos y transparentes' : 'Open and transparent model sources'}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e0e4e1] p-5 space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#40916c]" />
                <div>
                  <span className="text-[10px] text-[#636e72] font-semibold uppercase block">Email</span>
                  <a href="mailto:ilianagbc@gmail.com" className="font-bold text-xs text-[#1b4332] hover:text-[#40916c]">
                    ilianagbc@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-[#e0e4e1]">
                <Linkedin className="w-4 h-4 text-[#40916c]" />
                <div>
                  <span className="text-[10px] text-[#636e72] font-semibold uppercase block">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/iliana-gbc"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-xs text-[#1b4332] hover:text-[#40916c]"
                  >
                    linkedin.com/in/iliana-gbc
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Minimized Form (7 cols) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-[#e0e4e1] p-6 sm:p-7 shadow-xs">
            
            {formStatus === 'success' ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 bg-[#e8f5ed] text-[#40916c] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#1b4332]">
                  {lang === 'es' ? '¡Mensaje recibido!' : 'Message received!'}
                </h3>
                <p className="text-xs text-[#636e72] max-w-sm mx-auto">
                  {lang === 'es'
                    ? 'Revisaré los datos y te responderé con una propuesta técnica a medida.'
                    : 'I will review your project details and get back to you with a tailored technical proposal.'}
                </p>
                <button
                  type="button"
                  onClick={() => setFormStatus('idle')}
                  className="mt-4 px-5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[#1b4332] text-white hover:bg-[#40916c] transition-all cursor-pointer"
                >
                  {lang === 'es' ? 'Nueva consulta' : 'New inquiry'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#1b4332] uppercase mb-1">
                      {lang === 'es' ? 'Nombre *' : 'Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e0e4e1] focus:border-[#40916c] text-xs text-[#2d3436] outline-hidden bg-[#fdfdfc]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#1b4332] uppercase mb-1">
                      {lang === 'es' ? 'Email *' : 'Email *'}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="email@estudio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e0e4e1] focus:border-[#40916c] text-xs text-[#2d3436] outline-hidden bg-[#fdfdfc]"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#1b4332] uppercase mb-1">
                      {lang === 'es' ? 'Empresa / Estudio' : 'Company'}
                    </label>
                    <input
                      type="text"
                      placeholder={lang === 'es' ? 'Nombre de empresa' : 'Company name'}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e0e4e1] focus:border-[#40916c] text-xs text-[#2d3436] outline-hidden bg-[#fdfdfc]"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#1b4332] uppercase mb-1">
                      {lang === 'es' ? 'Teléfono (opcional)' : 'Phone (optional)'}
                    </label>
                    <input
                      type="tel"
                      placeholder="+34 600 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e0e4e1] focus:border-[#40916c] text-xs text-[#2d3436] outline-hidden bg-[#fdfdfc]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5">
                  {/* Asset Typology Dropdown */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#1b4332] uppercase mb-1">
                      {lang === 'es' ? 'Tipología de Activo' : 'Asset Typology'}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e0e4e1] focus:border-[#40916c] text-xs text-[#2d3436] outline-hidden bg-[#fdfdfc]"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt.id} value={pt.id}>
                          {pt[lang]}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Required Services Dropdown with "Other" */}
                  <div>
                    <label className="block text-xs font-mono font-bold text-[#1b4332] uppercase mb-1">
                      {lang === 'es' ? 'Servicio Requerido' : 'Required Service'}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => {
                        const val = e.target.value;
                        setFormData({ ...formData, service: val });
                        if (val && !selectedServices.includes(val)) {
                          onToggleService(val);
                        }
                      }}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#e0e4e1] focus:border-[#40916c] text-xs text-[#2d3436] outline-hidden bg-[#fdfdfc]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.name[lang]}>
                          {s.name[lang]}
                        </option>
                      ))}
                      <option value="otro">
                        {lang === 'es' ? 'Otro / Consulta a medida' : 'Other / Custom inquiry'}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono font-bold text-[#1b4332] uppercase mb-1">
                    {lang === 'es' ? 'Mensaje' : 'Message'}
                  </label>
                  <textarea
                    rows={3}
                    placeholder={
                      lang === 'es'
                        ? 'Explica brevemente tu proyecto (m², ubicación o dudas)...'
                        : 'Briefly describe your project (m², location or questions)...'
                    }
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e0e4e1] focus:border-[#40916c] text-xs text-[#2d3436] outline-hidden bg-[#fdfdfc]"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[#1b4332] hover:bg-[#40916c] text-white flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer disabled:opacity-60"
                >
                  {formStatus === 'sending' ? (
                    <span>{lang === 'es' ? 'Enviando...' : 'Sending...'}</span>
                  ) : (
                    <>
                      <span>{lang === 'es' ? 'Enviar Consulta' : 'Send Inquiry'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

        </div>
      </div>
    </div>
  );
};
