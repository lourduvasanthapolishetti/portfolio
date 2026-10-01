import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Building2, MapPin, Calendar, CheckCircle, Sparkles, Award, ExternalLink } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career Timeline</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              Professional Experience
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5">
              Pharmaceutical quality control, a career transition into data analytics, and an internship in business intelligence.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>2021 — Present &middot; 4 Entries</span>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => {
            const badge = {
              analytics: { label: 'Data Analytics Role', cls: 'bg-cyan-600 text-white' },
              upskilling: { label: 'Upskilling', cls: 'bg-amber-500 text-white' },
              pharma: { label: 'Pharmaceutical QC Role', cls: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700' }
            }[exp.category];
            return (
              <TiltCard
                key={exp.id}
                id={`exp-card-${exp.id}`}
                maxTilt={4}
                perspective={950}
                glare={true}
                className="w-full rounded-2xl"
              >
                <div className="w-full rounded-2xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200 dark:border-slate-800/90 shadow-md hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  {/* Top gradient accent line identical to Projects */}
                  <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="p-6 sm:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      {/* Left Column: Organization, Role, and Metadata */}
                      <div className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${badge.cls}`}
                          >
                            {badge.label}
                          </span>
                          {exp.employmentType && (
                            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                              {exp.employmentType}
                            </span>
                          )}
                        </div>

                          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                            {exp.role}
                          </h3>

                          <div className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-semibold text-sm mt-1">
                            <Building2 className="w-4 h-4 shrink-0" />
                            <span>{exp.organization}</span>
                          </div>

                          <div className="flex flex-col gap-1 text-xs font-mono text-slate-500 dark:text-slate-400 mt-3">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-slate-400" />
                              <span>
                                {exp.dateRange}
                                {exp.duration ? ` · ${exp.duration}` : ''}
                              </span>
                            </div>
                            {exp.location && (
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                <span>
                                  {exp.location}
                                  {exp.workMode ? ` · ${exp.workMode}` : ''}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Key Deliverables & Tech Stack */}
                      <div className="lg:col-span-8 flex flex-col justify-between">
                        <div>
                          {exp.summary && (
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                              {exp.summary}
                            </p>
                          )}

                          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-semibold">
                            Key Responsibilities & Deliverables
                          </h4>
                          <ul className="space-y-2.5">
                            {exp.highlights.map((h, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                              >
                                <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Internship Certificate */}
                        {exp.certificate && (
                          <a
                            href={exp.certificate.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 flex items-center gap-4 p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/70 hover:border-emerald-400 dark:hover:border-emerald-600 transition-colors group/cert"
                          >
                            <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800/70">
                              <img
                                src={exp.certificate.image}
                                alt={exp.certificate.imageAlt}
                                loading="lazy"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 mb-1">
                                <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                                  {exp.certificate.title}
                                </span>
                              </div>
                              <p className="text-[11px] font-mono text-slate-600 dark:text-slate-400 truncate">
                                ID: {exp.certificate.credentialId}
                              </p>
                              <p className="text-[11px] font-mono text-slate-500 dark:text-slate-500">
                                Issued {exp.certificate.issuedOn}
                              </p>
                            </div>
                            <ExternalLink className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400 ml-auto group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
