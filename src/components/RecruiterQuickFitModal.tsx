import React from 'react';
import { X, CheckCircle2, Award, GraduationCap, FileText, Sparkles } from 'lucide-react';
import { RECRUITER_BRIEF } from '../data/portfolioData';

interface RecruiterQuickFitModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onOpenOnePager?: () => void;
}

export const RecruiterQuickFitModal: React.FC<RecruiterQuickFitModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onOpenOnePager
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="recruiter-quick-fit-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-cyan-600 to-teal-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center font-bold text-base">
              <Sparkles className="w-5 h-5 text-cyan-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-200 font-bold">
                  60-SECOND RECRUITER TL;DR
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold font-display">
                Candidate Fit Snapshot
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Close Quick Fit Briefing"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-900 dark:text-slate-100 text-xs sm:text-sm">
          {/* Status & Availability Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-center">
            <div>
              <span className="text-[10px] font-mono text-slate-500 block">Notice Period</span>
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block">
                Immediate (0 Days)
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 block">Location</span>
              <span className="text-xs font-mono font-bold text-slate-900 dark:text-white mt-0.5 block">
                Hyderabad, India
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 block">Relocation</span>
              <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 mt-0.5 block">
                Open (All Metros)
              </span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-slate-500 block">Work Mode</span>
              <span className="text-xs font-mono font-bold text-slate-900 dark:text-white mt-0.5 block">
                On-site / Hybrid
              </span>
            </div>
          </div>

          {/* Core Target Roles */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
              Target Job Roles:
            </span>
            <div className="flex flex-wrap gap-2">
              {RECRUITER_BRIEF.targetRoles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800 text-xs font-mono font-semibold flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{role}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Unique Selling Proposition */}
          <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/80 space-y-1.5 text-amber-950 dark:text-amber-200">
            <span className="text-[11px] font-mono uppercase font-bold text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              The Lourdu Vasantha Edge:
            </span>
            <p className="text-xs leading-relaxed">
              <strong>3+ years in regulated pharmaceutical QC at Dr. Reddy's Laboratories</strong> handling 21 CFR Part 11 audit trails, OOS/OOT investigations, and LIMS records. Certified by NASSCOM and ExcelR with hands-on mastery of multi-table SQL queries, Star Schema Power BI modeling, and advanced DAX measures.
            </p>
          </div>

          {/* Technical Competencies Matrix */}
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
              Technical Competencies:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {RECRUITER_BRIEF.techHighlights.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800"
                >
                  <div className="font-mono font-bold text-xs text-slate-900 dark:text-white mb-0.5">
                    {tech.tech}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                    {tech.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic & Certifications Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
              <Award className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                  Accredited Credentials
                </span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white block mt-0.5">
                  NASSCOM & ExcelR Certified
                </span>
                <span className="text-[11px] text-slate-500 block">
                  FutureSkills Prime Accredited
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
              <GraduationCap className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">
                  Academic Foundation
                </span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white block mt-0.5">
                  B.Sc. (9.89 CGPA - Best Outgoing)
                </span>
                <span className="text-[11px] text-slate-500 block">
                  M.Sc. Chemistry (7.91 CGPA)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer: Fast-Action Buttons */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="px-3.5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono font-semibold transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Resume</span>
            </button>

            {onOpenOnePager && (
              <button
                onClick={() => {
                  onClose();
                  onOpenOnePager();
                }}
                className="px-3.5 py-2 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 hover:bg-cyan-100 dark:hover:bg-cyan-900 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 text-xs font-mono font-semibold transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>1-Page Project Catalog</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
