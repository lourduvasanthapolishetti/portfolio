import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowUpRight,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Clock,
  Check,
  Copy,
  ChevronUp,
  BarChart3,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkClass =
    'w-full flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-400 dark:hover:border-cyan-500/60 hover:text-slate-900 dark:hover:text-white hover:shadow-md transition-all group';

  return (
    <footer className="relative bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-20 bg-grid-pattern-light dark:bg-grid-pattern-dark" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-400/10 dark:bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          {/* Col 1: Identity & Availability */}
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-700 dark:text-emerald-400 text-xs font-sans font-semibold mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{PERSONAL_INFO.availabilityStatus}</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-cyan-700 dark:text-cyan-400 font-sans text-sm font-medium mt-1">
                {PERSONAL_INFO.role} &middot; SQL, Excel, Power BI &amp; Tableau
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <span className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-sans flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 text-xs font-sans flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                Notice Period: 0 Days
              </span>
            </div>
          </div>

          {/* Col 2: Contact Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-sans font-bold text-slate-900 dark:text-slate-100 uppercase tracking-[0.12em]">
              Get in Touch
            </h4>

            <div className="space-y-2.5 text-sm font-sans">
              <button onClick={handleCopyEmail} className={`${linkClass} text-left`}>
                <div className="flex items-center gap-3 truncate">
                  <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </div>
                <span className="text-[11px] shrink-0 pl-1 text-cyan-700 dark:text-cyan-400 flex items-center gap-1 font-semibold">
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </span>
              </button>

              <a href={`tel:${PERSONAL_INFO.phone}`} className={linkClass}>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <span className="text-[11px] text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400">
                  Direct Call
                </span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.tableauPublic}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Tableau Public</span>
                </div>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500 dark:text-slate-500">
          <span className="text-center sm:text-left">
            &copy; {currentYear} {PERSONAL_INFO.name}
          </span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 hover:border-cyan-300 dark:hover:border-cyan-500/60 transition-all text-xs font-sans font-medium group"
          >
            <span>Back to top</span>
            <ChevronUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};