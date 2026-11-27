import React, { useState, FormEvent } from 'react';
import {
  Mail,
  Linkedin,
  Leaf,
  ShieldCheck,
  CheckCircle2,
  AlertCircle
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
    projectType: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const [emailError, setEmailError] = useState('');

  const projectTypes = [
    { id: 'terciario', es: 'Terciario / Oficinas / Dotacional', en: 'Commercial / Offices / Institutional' },
    { id: 'residencial', es: 'Residencial Plurifamiliar / Unifamiliar', en: 'Multi-family / Single-family Residential' },
    { id: 'rehabilitacion', es: 'Rehabilitación Integral / Digital Twin', en: 'Deep Renovation / Digital Twin' },
    { id: 'logistico', es: 'Logístico / Industrial', en: 'Logistics / Industrial' },
    { id: 'concurso', es: 'Concurso / Fase Anteproyecto', en: 'Design Tender / Concept Phase' },
    { id: 'otro', es: 'Otro / Otros', en: 'Other' }
  ];

  // Expresión regular robusta para validar emails reales
  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email.trim());
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validación estricta de email
    if (!isValidEmail(formData.email)) {
      setEmailError(
        lang === 'es'
          ? 'Por favor, introduce una dirección de email válida (ej. nombre@empresa.com)'
          : 'Please enter a valid email address (e.g. name@company.com)'
      );
      return;
    }
    setEmailError('');

    setFormStatus('sending');

    const serviciosArray = formData.service
      ? [formData.service]
      : (selectedServices.length > 0 ? selectedServices : []);

    const payload = {
      nombre: formData.name.trim(),
      email: formData.email.trim(),
      empresa: formData.company.trim(),
      telefono: formData.phone.trim() || '',
      tipologiaActivo: formData.projectType || '',
      servicios: serviciosArray,
      mensaje: formData.message.trim()
    };

    try {
      // Envío a Google Apps Script con mode 'no-cors' para salvar redirecciones cruzadas de Google
      await fetch('https://script.google.com/macros/s/AKfycbwqCjh6ag-l_VABxTJw_u52kn9Yqf096NhIUlnvZ6Jf3X-YmkaZsXNoM5_ffmZT_xoV5A/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload)
      });

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        projectType: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setFormStatus('error');
    }
  };

  const fieldClasses =
    'w-full px-3.5 py-2.5 rounded-md border border-rule bg-plaster/50 focus:bg-paper focus:border-emerald focus:ring-2 focus:ring-emerald/15 text-sm text-ink placeholder:text-ink-muted/65 outline-hidden transition-colors';

  return (
    <div className="page-enter">

      {/* Page Intro */}
      <section className="bg-paper border-b border-rule py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3">
            <h1 className="font-display text-3xl sm:text-5xl font-bold text-pine tracking-[-0.03em] leading-[1.08]">
              {lang === 'es' ? '¿Cómo puedo ayudarte?' : 'How can I help you?'}
            </h1>
            <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
              {lang === 'es'
                ? 'Consultoría directa y personalizada para la simulación energética y descarbonización de tu proyecto.'
                : 'Direct and customized consultancy for energy simulation and building decarbonization.'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Two-Column Grid: Direct Info + Form */}
      <section className="bg-plaster py-12 lg:py-18">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Direct Info (5 cols) */}
            <div className="lg:col-span-5 space-y-5">

              <div className="bg-pine text-white p-7 rounded-lg space-y-5">
                <div className="space-y-2">
                  <span className="text-xs font-medium text-[#7dd3a5] block">
                    {lang === 'es' ? 'Asesoría directa' : 'Direct advisory'}
                  </span>
                  <h2 className="font-display font-bold text-2xl text-white leading-snug">
                    {lang === 'es' ? 'Trato directo conmigo' : 'Direct contact with me'}
                  </h2>
                </div>

                <p className="text-sm text-white/80 leading-relaxed">
                  {lang === 'es'
                    ? 'Hablas directamente conmigo, sin intermediarios comerciales ni filtros. Analizo personalmente los modelos energéticos y la viabilidad técnica de tu proyecto.'
                    : 'You speak directly with me, with no sales intermediaries or filters. I personally analyze the energy models and technical feasibility of your project.'}
                </p>

                <div className="space-y-2.5 border-t border-white/15 pt-5 text-sm text-white/90">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#7dd3a5] shrink-0" />
                    <span>{lang === 'es' ? 'Defensa técnica de cálculos y modelos' : 'Technical defense of calculations and models'}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Leaf className="w-4 h-4 text-[#7dd3a5] shrink-0" />
                    <span>{lang === 'es' ? 'Modelos abiertos y transparentes' : 'Open and transparent model sources'}</span>
                  </div>
                </div>
              </div>

              <div className="bg-paper rounded-lg border border-rule divide-y divide-rule">
                <a
                  href="mailto:ilianagbc@gmail.com"
                  className="p-5 flex items-center gap-4 hover:bg-plaster transition-colors group"
                >
                  <div className="w-9 h-9 rounded-md bg-emerald-soft text-emerald flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-ink-muted block">Email</span>
                    <span className="font-semibold text-sm text-pine group-hover:text-emerald transition-colors">
                      ilianagbc@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/iliana-gbc"
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 flex items-center gap-4 hover:bg-plaster transition-colors group"
                >
                  <div className="w-9 h-9 rounded-md bg-emerald-soft text-emerald flex items-center justify-center shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-ink-muted block">LinkedIn</span>
                    <span className="font-semibold text-sm text-pine group-hover:text-emerald transition-colors">
                      linkedin.com/in/iliana-gbc
                    </span>
                  </div>
                </a>
              </div>

            </div>

            {/* Right Column: Form Surface (7 cols) */}
            <div className="lg:col-span-7 bg-paper rounded-lg border border-rule p-6 sm:p-9">

              {formStatus === 'success' ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-soft text-emerald rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-pine">
                    {lang === 'es' ? 'Consulta enviada con éxito' : 'Inquiry sent successfully'}
                  </h3>
                  <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                    {lang === 'es'
                      ? 'Muchas gracias por tu mensaje. He recibido los datos de tu proyecto correctamente y me pondré en contacto contigo a la mayor brevedad.'
                      : 'Thank you for your message. I have received your project details and will be in touch with you shortly.'}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setFormStatus('idle')}
                      className="px-5 py-2.5 rounded-md text-sm font-medium bg-pine text-white hover:bg-emerald transition-colors cursor-pointer"
                    >
                      {lang === 'es' ? 'Enviar otra consulta' : 'Send another inquiry'}
                    </button>
                  </div>
                </div>
              ) : formStatus === 'error' ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-12 h-12 bg-red-50 text-red-700 rounded-full flex items-center justify-center mx-auto">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-pine">
                    {lang === 'es' ? 'No se pudo enviar el mensaje' : 'Could not send message'}
                  </h3>
                  <p className="text-sm text-ink-muted max-w-md mx-auto leading-relaxed">
                    {lang === 'es'
                      ? 'Ha ocurrido un problema al enviar el formulario. Por favor, inténtalo de nuevo o escríbeme directamente a ilianagbc@gmail.com.'
                      : 'An error occurred while submitting the form. Please try again or email me directly at ilianagbc@gmail.com.'}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setFormStatus('idle')}
                      className="px-5 py-2.5 rounded-md text-sm font-medium bg-pine text-white hover:bg-emerald transition-colors cursor-pointer"
                    >
                      {lang === 'es' ? 'Reintentar' : 'Try again'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-pine mb-1.5">
                        {lang === 'es' ? 'Nombre *' : 'Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'es' ? 'Tu nombre' : 'Your name'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={fieldClasses}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-pine mb-1.5">
                        {lang === 'es' ? 'Email *' : 'Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
                        title={lang === 'es' ? 'Introduce un correo válido (ejemplo: usuario@empresa.com)' : 'Enter a valid email (e.g. user@company.com)'}
                        placeholder="email@estudio.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (emailError) setEmailError('');
                        }}
                        className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-ink placeholder:text-ink-muted/65 outline-hidden transition-colors ${
                          emailError
                            ? 'border-red-600 bg-red-50/30 focus:ring-2 focus:ring-red-200'
                            : 'border-rule bg-plaster/50 focus:bg-paper focus:border-emerald focus:ring-2 focus:ring-emerald/15'
                        }`}
                      />
                      {emailError && (
                        <p className="mt-1.5 text-xs text-red-700 font-medium">{emailError}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-pine mb-1.5">
                        {lang === 'es' ? 'Empresa o estudio *' : 'Company or studio *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'es' ? 'Nombre de empresa' : 'Company name'}
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className={fieldClasses}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-pine mb-1.5">
                        {lang === 'es' ? 'Teléfono (opcional)' : 'Phone (optional)'}
                      </label>
                      <input
                        type="tel"
                        placeholder="+34 600 000 000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={fieldClasses}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Asset Typology Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-pine mb-1.5">
                        {lang === 'es' ? 'Tipología de activo' : 'Asset typology'}
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className={fieldClasses}
                      >
                        <option value="">
                          {lang === 'es' ? 'A elegir...' : 'Please select...'}
                        </option>
                        {projectTypes.map((pt) => (
                          <option key={pt.id} value={pt[lang]}>
                            {pt[lang]}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Required Services Dropdown with "Other" */}
                    <div>
                      <label className="block text-sm font-medium text-pine mb-1.5">
                        {lang === 'es' ? 'Servicio requerido' : 'Required service'}
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
                        className={fieldClasses}
                      >
                        <option value="">
                          {lang === 'es' ? 'A elegir...' : 'Please select...'}
                        </option>
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
                    <label className="block text-sm font-medium text-pine mb-1.5">
                      {lang === 'es' ? 'Mensaje' : 'Message'}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={
                        lang === 'es'
                          ? 'Explica brevemente tu proyecto (m², ubicación o dudas)...'
                          : 'Briefly describe your project (m², location or questions)...'
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={fieldClasses}
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full py-3.5 rounded-md text-sm font-semibold bg-pine hover:bg-emerald text-white flex items-center justify-center transition-colors cursor-pointer disabled:opacity-60"
                  >
                    {formStatus === 'sending'
                      ? (lang === 'es' ? 'Enviando...' : 'Sending...')
                      : (lang === 'es' ? 'Enviar consulta' : 'Send inquiry')}
                  </button>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
