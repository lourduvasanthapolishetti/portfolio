import React, { useRef } from 'react';
import { X, Printer, Database, Award } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, RECRUITER_BRIEF } from '../data/portfolioData';

interface ProjectBriefOnePagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectBriefOnePagerModal: React.FC<ProjectBriefOnePagerModalProps> = ({
  isOpen,
  onClose
}) => {
  const printAreaRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="project-brief-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyan-600 text-white font-mono font-bold text-xs">
              PDF
            </div>
            <div>
              <h3 className="text-sm font-bold font-display text-slate-900 dark:text-white">
                Executive Project Catalog & Candidate Briefing
              </h3>
              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                1-Page Summary for Hiring Managers & Review Panels
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-semibold transition-all shadow-md shadow-cyan-600/30"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Close catalog modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Executive Brief Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans leading-relaxed selection:bg-cyan-100 selection:text-cyan-900 print:p-0">
          <div ref={printAreaRef} className="space-y-6 max-w-3xl mx-auto print:max-w-none">
            {/* Header / Candidate Identity Block */}
            <div className="border-b-2 border-slate-900 pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="inline-block text-[10px] font-mono font-bold tracking-widest uppercase text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded border border-cyan-200 mb-1.5">
                  DATA ANALYST · POWER BI DEVELOPER
                </div>
                <h1 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-slate-900">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xs text-slate-600 mt-1 max-w-xl font-serif italic">
                  "3+ years of regulated pharmaceutical QC data rigor at Dr. Reddy's Laboratories combined with certified mastery in SQL, Power BI, Advanced Excel, and Star-Schema Dimensional Modeling."
                </p>
              </div>

              <div className="text-left sm:text-right text-xs font-mono space-y-0.5 text-slate-600 shrink-0">
                <div className="font-semibold text-slate-900">{PERSONAL_INFO.location}</div>
                <div>{PERSONAL_INFO.phone}</div>
                <div className="text-cyan-700 font-medium">{PERSONAL_INFO.email}</div>
                <div className="text-[11px] text-emerald-700 font-bold">Status: Immediate Joiner (0 Days)</div>
              </div>
            </div>

            {/* Core Competencies Matrix */}
            <div className="grid grid-cols-4 gap-2 text-center text-xs font-mono p-3 bg-slate-50 rounded-xl border border-slate-200">
              <div className="border-r border-slate-200 pr-2">
                <span className="text-[10px] text-slate-500 uppercase block">Database</span>
                <span className="font-bold text-slate-900 mt-0.5 block">SQL (Joins, CTEs)</span>
              </div>
              <div className="border-r border-slate-200 pr-2">
                <span className="text-[10px] text-slate-500 uppercase block">BI & Modeling</span>
                <span className="font-bold text-slate-900 mt-0.5 block">Power BI & DAX</span>
              </div>
              <div className="border-r border-slate-200 pr-2">
                <span className="text-[10px] text-slate-500 uppercase block">Spreadsheets</span>
                <span className="font-bold text-slate-900 mt-0.5 block">Power Query ETL</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Credentials</span>
                <span className="font-bold text-emerald-700 mt-0.5 block">NASSCOM & ExcelR</span>
              </div>
            </div>

            {/* Section: 4 Flagship Production Projects */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-1.5">
                <h2 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-900">
                  FLAGSHIP ANALYTICS DASHBOARDS & CASE STUDIES
                </h2>
                <span className="text-[10px] font-mono text-slate-500">
                  {PROJECTS.length} Analytics Dashboards
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECTS.map((p, idx) => (
                  <div
                    key={p.id}
                    className="p-4 rounded-xl border border-slate-200 bg-white space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-[10px] font-mono uppercase text-cyan-700 font-bold">
                          {p.subtitle}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                          {p.datasetSize}
                        </span>
                      </div>
                      <h3 className="font-bold text-sm text-slate-900">
                        {p.title}
                      </h3>
                      <p className="text-[11px] text-slate-600 leading-snug mt-1">
                        {p.summary}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-500">Key Metric:</span>
                        <span className="font-bold text-emerald-700">{p.highlightMetric}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {p.stack.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic & Prior Career Foundation */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold uppercase text-[11px] text-slate-900 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-cyan-700" />
                  Academic Excellence & Regulated Industry Pedigree
                </span>
                <span className="text-[10px] font-mono text-slate-500">Dr. Reddy's Laboratories (2020–2023)</span>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Completed M.Sc. in Chemistry (7.91 CGPA) and B.Sc. with <strong>9.89 CGPA</strong>, graduating as <strong>Best Outgoing Student</strong>. Three years executing Out-of-Specification (OOS) investigations, variance checks, and audit trails under ICH, GLP, GDP, and GMP standards.
              </p>
            </div>

            {/* Footer QR / Direct Contact Callout */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Interactive Portfolio: https://ais-dev-ewdzv74e56qssdcyhhfoch-279477942811.asia-east1.run.app</span>
              <span className="font-bold text-slate-900">WhatsApp: +91 93466 35987</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
