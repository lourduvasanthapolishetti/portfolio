import React from 'react';
import { X, Download, Printer, CheckCircle, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CERTIFICATIONS, SKILLS, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col transition-colors duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm tracking-wide">
              Official Resume Preview · Lourdu Vasantha Polishetti
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={`${import.meta.env.BASE_URL}resume/Lourdu_Vasantha_Polishetti_Data_Analyst_Resume.pdf`}
              download="Lourdu_Vasantha_Polishetti_Data_Analyst_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto font-sans text-slate-800 dark:text-slate-200 text-sm leading-relaxed space-y-7">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white uppercase font-display">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-base mt-1 tracking-wide">
              {PERSONAL_INFO.role} | SQL | Power BI | Excel | Tableau | Python | R
            </p>
            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={`tel:${PERSONAL_INFO.phoneRaw}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.phone}
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <a
                href={PERSONAL_INFO.tableauPublic}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
              >
                Tableau Public <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 font-mono">
              Professional Summary
            </h2>
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              Data Analyst with 3+ years of rigorous professional experience in pharmaceutical Quality Control at Dr. Reddy's Laboratories, followed by intensive hands-on analytics training and internship experience at Ai Variant. Proven proficiency in SQL querying, dynamic Excel modeling, Star-schema Power BI dashboards, and Tableau visual storytelling. Strong foundation in statistical analysis, out-of-trend root cause analysis, KPI formulation, and audit-ready data governance.
            </p>
          </div>

          {/* Core Technical Competencies */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5 font-mono">
              Technical & Analytical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">SQL & Databases</span>
                <span className="text-slate-600 dark:text-slate-400">Complex Joins, Subqueries, CTEs, Window Functions, Aggregations, Grouping, Filtering, Data Cleaning</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">Power BI & Tableau</span>
                <span className="text-slate-600 dark:text-slate-400">DAX Measures, Data Modeling (Star Schema), Interactive Drill-throughs, Time Intelligence, LOD Expressions</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">Advanced Excel</span>
                <span className="text-slate-600 dark:text-slate-400">XLOOKUP, INDEX/MATCH, Pivot Tables & Slicers, Power Query, Dynamic Arrays, Financial Modeling</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">Methodology & Domain Rigor</span>
                <span className="text-slate-600 dark:text-slate-400">Root Cause Analysis (OOS/OOT), Labware LIMS, GLP/GMP Compliance, Audit Preparedness, KPI Formulations</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 font-mono">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-cyan-500/40 pl-4 py-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                      {exp.role} <span className="text-cyan-600 dark:text-cyan-400 font-normal">@ {exp.organization}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {exp.dateRange} · {exp.location}
                    </span>
                  </div>
                  <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Analytics Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-mono">
              Key Analytics Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                      {proj.title}
                    </h4>
                    <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                      {proj.highlightMetric}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                    {proj.summary}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {proj.stack.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 text-[10px] font-mono bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 rounded border border-cyan-200 dark:border-cyan-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-200 dark:border-slate-800">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-mono">
                Education
              </h2>
              <div className="space-y-3">
                {EDUCATION.map((edu) => (
                  <div key={edu.id}>
                    <p className="font-semibold text-slate-900 dark:text-white text-xs">{edu.degree}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{edu.institution}</p>
                    <p className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 mt-0.5">{edu.cgpa} · {edu.period}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-mono">
                Industry Certifications
              </h2>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white text-xs">{cert.title}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{cert.issuer} · {cert.issueDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
