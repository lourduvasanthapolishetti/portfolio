import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { TiltCard } from './TiltCard';
import { ArrowUpRight, TrendingUp, Layers, BarChart3, PieChart, Sparkles, CalendarDays } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenOnePager?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenOnePager }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const getVisualIcon = (type: string) => {
    switch (type) {
      case 'loan':
        return <TrendingUp className="w-5 h-5 text-cyan-500" />;
      case 'transaction':
        return <Layers className="w-5 h-5 text-emerald-500" />;
      case 'superstore':
        return <BarChart3 className="w-5 h-5 text-sky-500" />;
      case 'financial':
        return <PieChart className="w-5 h-5 text-indigo-500" />;
      default:
        return <BarChart3 className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <section id="projects" className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200 relative">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>APPLIED BUSINESS INTELLIGENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              Analytics Dashboards
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5 max-w-2xl">
              Dashboards built with Excel, Power BI, and Tableau — covering financial performance, loan portfolios, banking transaction analysis, and retail sales.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {onOpenOnePager && (
              <button
                onClick={onOpenOnePager}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 text-xs font-mono font-semibold transition-all shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                <span>Download One-Pager (PDF)</span>
              </button>
            )}

            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>{PROJECTS.length} DASHBOARDS</span>
            </div>
          </div>
        </div>

        {/* Project Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((proj) => {
            return (
              <TiltCard
                key={proj.id}
                id={`project-card-${proj.id}`}
                maxTilt={6}
                perspective={950}
                glare={true}
                className="h-full rounded-2xl"
                onClick={() => setSelectedProject(proj)}
              >
                <div className="h-full rounded-2xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200 dark:border-slate-800/90 shadow-md hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                  {/* Subtle top accent line */}
                  <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="p-6 sm:p-8">
                    {/* Project Screenshot (optional — drop a file in /public/projects) */}
                    {proj.image && (
                      <div className="mb-5 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800/50">
                        <img
                          src={proj.image}
                          alt={proj.imageAlt || `${proj.title} screenshot`}
                          loading="lazy"
                          className="w-full h-44 sm:h-52 object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                          onError={(e) => {
                            (e.currentTarget.parentElement as HTMLElement | null)?.setAttribute('hidden', 'true');
                          }}
                        />
                      </div>
                    )}

                    {/* Top Bar with Stack & Highlight */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div className="flex flex-wrap gap-1.5">
                        {proj.stack.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <span className="text-[11px] font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 shadow-xs">
                        {proj.highlightMetric}
                      </span>
                    </div>

                    {/* Title and Subtitle */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display mb-1.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {proj.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4">
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {proj.subtitle}
                      </p>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                        <CalendarDays className="w-3 h-3" />
                        {proj.projectDate}
                      </span>
                    </div>

                    {/* Project Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {proj.summary}
                    </p>

                    {/* Metrics Snapshot Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 mb-5">
                      {proj.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <span className="text-xs font-bold font-mono text-slate-900 dark:text-white block">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono block mt-0.5 truncate">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Key Insight Highlight */}
                    <div className="text-xs text-slate-600 dark:text-slate-400 border-l-2 border-cyan-500 pl-3 py-1 bg-cyan-50/40 dark:bg-cyan-950/20 rounded-r-lg italic">
                      "{proj.keyInsights[0]}"
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="px-6 sm:px-8 py-4 bg-slate-50/90 dark:bg-slate-900/95 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getVisualIcon(proj.visualType)}
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        {proj.toolsUsed[0]} · Drilldown Available
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(proj);
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white shadow-md shadow-cyan-600/20 transition-all duration-150 active:scale-95"
                    >
                      <span>Deep Dive Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
