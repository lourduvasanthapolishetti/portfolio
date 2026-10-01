import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Mail, Phone, Linkedin, ArrowUpRight, MessageCircle, Copy, Check, Send, Sparkles, MapPin, AlertCircle, Loader2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formRoleType, setFormRoleType] = useState('Full-Time Data Analyst Role');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'drafted' | 'error'>('idle');
  const [errorText, setErrorText] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const buildMailto = () => {
    const subject = encodeURIComponent(`${formRoleType} - ${formCompany || 'Inquiry'} (via Portfolio)`);
    const body = encodeURIComponent(
      `Hello Lourdu Vasantha,\n\nName: ${formName}\nEmail: ${formEmail}\nCompany: ${formCompany}\nRole Opportunity: ${formRoleType}\n\nMessage:\n${formMessage}\n\nBest regards,\n${formName}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');

    // Spam trap: real users never see this field, bots fill it in.
    if (honeypot) {
      setStatus('sent');
      return;
    }

    const endpoint = PERSONAL_INFO.contactFormEndpoint;

    // Fallback: no endpoint configured -> hand off to the visitor's mail client.
    if (!endpoint) {
      window.location.href = buildMailto();
      setStatus('drafted');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formName,
          email: formEmail,
          company: formCompany,
          roleType: formRoleType,
          message: formMessage,
          _subject: `Portfolio enquiry - ${formRoleType} - ${formCompany || 'Inquiry'}`,
        }),
      });

      if (!res.ok) throw new Error(`Request failed (${res.status})`);

      setStatus('sent');
      setFormName('');
      setFormEmail('');
      setFormCompany('');
      setFormMessage('');
    } catch (err) {
      // Delivery failed -> offer the mail-client fallback so the lead is never lost.
      setStatus('error');
      setErrorText(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Recruiter Direct Channel</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            Connect with Lourdu Vasantha
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
            Actively interviewing for Data Analyst roles in Hyderabad, hybrid locations, and remote data teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Instant Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* WhatsApp Fast Response Card with 3D Tilt */}
            <TiltCard id="contact-whatsapp-tilt" maxTilt={5} perspective={950} glare={true} className="rounded-2xl">
              <a
                id="contact-whatsapp-card"
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative rounded-2xl bg-[#25D366] text-slate-950 p-6 shadow-xl hover:shadow-[0_0_30px_rgba(37,211,102,0.45)] transition-all duration-300 group overflow-hidden"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-white text-[#25D366] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-950/80">
                          Fastest Response
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-900 animate-pulse" />
                      </div>
                      <h3 className="font-bold text-lg text-slate-950">
                        Chat on WhatsApp
                      </h3>
                      <p className="text-xs text-slate-900/80 font-mono">
                        {PERSONAL_INFO.phone}
                      </p>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shadow-xs">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </a>
            </TiltCard>

            {/* Email Card with One-Click Copy */}
            <TiltCard id="contact-email-tilt" maxTilt={5} perspective={950} glare={true} className="rounded-2xl">
              <div className="rounded-2xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200 dark:border-slate-800/90 shadow-md hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 shrink-0 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-200">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 truncate block transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </TiltCard>

            {/* Direct Phone Card */}
            <TiltCard id="contact-phone-tilt" maxTilt={5} perspective={950} glare={true} className="rounded-2xl">
              <div className="rounded-2xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200 dark:border-slate-800/90 shadow-md hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                        Phone & WhatsApp
                      </span>
                      <a
                        href={`tel:${PERSONAL_INFO.phoneRaw}`}
                        className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 truncate block transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shrink-0"
                    title="Copy phone number to clipboard"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </TiltCard>

            {/* Location & LinkedIn Row */}
            <div className="grid grid-cols-2 gap-3">
              <TiltCard id="contact-location-tilt" maxTilt={5} perspective={950} glare={true} className="rounded-xl">
                <div className="h-full p-4 rounded-xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200 dark:border-slate-800/90 shadow-sm hover:border-cyan-500/60 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono mb-1">
                    <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Location</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    Hyderabad, India
                  </span>
                </div>
              </TiltCard>

              <TiltCard id="contact-linkedin-tilt" maxTilt={5} perspective={950} glare={true} className="rounded-xl">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full p-4 rounded-xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200 dark:border-slate-800/90 shadow-sm hover:border-cyan-500/60 hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono mb-1">
                        <Linkedin className="w-3.5 h-3.5 text-cyan-600" />
                        <span>LinkedIn</span>
                      </div>
                      <span className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        View Profile
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 transition-colors" />
                  </div>
                </a>
              </TiltCard>
            </div>
          </div>

          {/* Right Column: Direct Recruiter Inquiry Email Form */}
          <div className="lg:col-span-7">
            <TiltCard id="contact-form-tilt" maxTilt={3} perspective={1100} glare={true} className="rounded-2xl">
              <form
                onSubmit={handleFormSubmit}
                className="p-6 sm:p-8 rounded-2xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200 dark:border-slate-800/90 shadow-md hover:border-cyan-500/60 hover:shadow-2xl transition-all duration-300 space-y-4 overflow-hidden group"
              >
                {/* Top gradient accent line identical to Projects */}
                <div className="h-1 -mt-6 sm:-mt-8 -mx-6 sm:-mx-8 mb-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Send a Direct Recruitment Message
                </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {PERSONAL_INFO.contactFormEndpoint
                  ? 'Sends straight to Lourdu’s inbox. No mail app required.'
                  : 'Opens your email app with a message pre-filled for Lourdu.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Vasantha Polishetti"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formCompany}
                    onChange={(e) => setFormCompany(e.target.value)}
                    placeholder="e.g. Deloitte / Amazon / TCS"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Opportunity Type
                </label>
                <select
                  value={formRoleType}
                  onChange={(e) => setFormRoleType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="Full-Time Data Analyst Role">Full-Time Data Analyst Role</option>
                  <option value="Contract / Project-Based Analytics">Contract / Project-Based Analytics</option>
                  <option value="Interview Screening Request">Interview Screening Request</option>
                  <option value="Technical Assessment / Case Study Inquiry">Technical Assessment / Case Study Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message / Brief Note
                </label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Tell Vasantha about the team, required SQL/Power BI stack, or your timeline..."
                  className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                />
              </div>

              {/* Honeypot - hidden from humans, catches bots */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-xs shadow-sm transition-colors active:scale-98"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Sending…</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>{PERSONAL_INFO.contactFormEndpoint ? 'Send Message' : 'Open Draft in Mail App'}</span>
                  </>
                )}
              </button>

              {status === 'sent' && (
                <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-mono text-center">
                  Message sent. Lourdu will reply to the email you provided.
                </div>
              )}

              {status === 'drafted' && (
                <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 text-xs font-mono text-center">
                  Your email app should have opened with the message ready. If nothing happened, email{' '}
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-semibold">
                    {PERSONAL_INFO.email}
                  </a>{' '}
                  directly.
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 text-xs font-mono text-center space-y-2">
                  <p className="flex items-center justify-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    Could not send automatically{errorText ? ` (${errorText})` : ''}.
                  </p>
                  <a
                    href={buildMailto()}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Open in mail app instead
                  </a>
                </div>
              )}
            </form>
          </TiltCard>
        </div>
        </div>
      </div>
    </section>
  );
};
