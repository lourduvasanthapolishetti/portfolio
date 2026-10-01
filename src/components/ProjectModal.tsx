import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { X, Database, BarChart2, CheckCircle, MessageSquare, Copy, Check, Info } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'sql' | 'dax'>('overview');
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const projectWhatsAppUrl = `https://wa.me/${PERSONAL_INFO.phoneRaw}?text=${encodeURIComponent(
    `Hi Lourdu Vasantha, I am reviewing your case study on '${project.title}' and would like to discuss this analytics project with you.`
  )}`;

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="project-modal-backdrop"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div
        id="project-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col transition-colors duration-200"
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <span className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400 font-semibold uppercase tracking-wider">
                Case Study & Technical Deep Dive
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
              <span>{project.subtitle}</span>
              <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span>{project.projectDate}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation in Modal */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/40 text-xs px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 font-medium transition-colors border-b-2 ${
              activeTab === 'overview'
                ? 'border-cyan-500 text-cyan-700 dark:text-cyan-400'
                : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
            }`}
          >
            Overview & Insights
          </button>

          {project.sqlSnippet && (
            <button
              onClick={() => setActiveTab('sql')}
              className={`py-3 px-4 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === 'sql'
                  ? 'border-cyan-500 text-cyan-700 dark:text-cyan-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>SQL Queries</span>
            </button>
          )}

          {project.daxSnippet && (
            <button
              onClick={() => setActiveTab('dax')}
              className={`py-3 px-4 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
                activeTab === 'dax'
                  ? 'border-cyan-500 text-cyan-700 dark:text-cyan-400'
                  : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>DAX Measures</span>
            </button>
          )}
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm leading-relaxed">
          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-xs bg-slate-100 dark:bg-slate-800 text-cyan-700 dark:text-cyan-300 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700"
              >
                {s}
              </span>
            ))}
            <span className="font-mono text-xs bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800">
              {project.highlightMetric}
            </span>
          </div>

          {activeTab === 'overview' && (
            <>
              {/* Project Screenshot */}
              {project.image && (
                <figure className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/50">
                  <img
                    src={project.image}
                    alt={project.imageAlt || `${project.title} screenshot`}
                    loading="lazy"
                    className="w-full object-contain object-top bg-white dark:bg-slate-950"
                    onError={(e) => {
                      (e.currentTarget.parentElement as HTMLElement | null)?.setAttribute('hidden', 'true');
                    }}
                  />
                  {project.imageAlt && (
                    <figcaption className="px-4 py-2.5 text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800">
                      {project.imageAlt}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* Executive Summary */}
              <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                {project.summary}
              </p>

              {/* KPI Metric Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-center"
                  >
                    <div className="font-mono text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {m.value}
                    </div>
                    <div className="font-mono text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Problem & Solution Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <span className="font-mono text-xs uppercase tracking-wider text-rose-600 dark:text-rose-400 block font-semibold mb-1.5">
                    Problem Statement
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {project.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block font-semibold mb-1.5">
                    Analytics Solution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Insights */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Key Insights Discovered
                </h4>
                <ul className="space-y-2">
                  {project.keyInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dataset and Provenance Info */}
              <div className="flex items-center gap-2 p-3 rounded-lg bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800/60 text-xs text-cyan-800 dark:text-cyan-300 font-mono">
                <Info className="w-4 h-4 shrink-0" />
                <span>Dataset Scale: {project.datasetSize} · Dashboard preview available upon request for interviews.</span>
              </div>

              {/* Skills Applied */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Skills Applied
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 rounded-lg text-[11px] font-mono font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'sql' && project.sqlSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  SQL Query Logic & Aggregations
                </span>
                <button
                  onClick={() => handleCopyCode(project.sqlSnippet!)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Query'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 text-cyan-300 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                <code>{project.sqlSnippet}</code>
              </pre>
            </div>
          )}

          {activeTab === 'dax' && project.daxSnippet && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
                  Power BI DAX Calculated Measure
                </span>
                <button
                  onClick={() => handleCopyCode(project.daxSnippet!)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy DAX'}</span>
                </button>
              </div>

              <pre className="p-4 rounded-xl bg-slate-950 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                <code>{project.daxSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-5 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 shrink-0">
          <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
            {project.toolsUsed.join(' · ')}
          </span>

          <div className="flex items-center gap-3">
            <a
              href={projectWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold shadow-sm transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Discuss on WhatsApp</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
