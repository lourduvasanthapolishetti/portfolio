import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink, Calendar, Star } from 'lucide-react';

export const EducationCertificates: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200 bg-slate-50/50 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 mb-3 shadow-xs">
              <Award className="w-3.5 h-3.5" />
              <span>ACCREDITED CERTIFICATIONS & ACADEMIC PEDIGREE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              Certifications & Academic Foundation
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5 max-w-2xl">
              Verified industry-standard data analytics credentials from NASSCOM FutureSkills and ExcelR, anchored by topper and academic honour awards across four institutions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-3 shadow-xs">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
                <Star className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Academic Distinction</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white font-mono">9.89 CGPA · Best Outgoing</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Industry Certifications (Side-by-Side Cards) */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Industry Certifications</span>
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Government & Industry Authorized Data Analytics Specializations
                </p>
              </div>
            </div>
          </div>

          {/* Certifications: 3-up grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <TiltCard
                key={cert.id}
                id={`cert-card-${cert.id}`}
                maxTilt={6}
                perspective={950}
                glare={true}
                className="w-full rounded-3xl h-full"
              >
                <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800/90 shadow-md hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col">
                  <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                  {cert.image && (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 group/cert"
                    >
                      <img
                        src={cert.image}
                        alt={cert.imageAlt}
                        loading="lazy"
                        className="w-full h-40 object-cover object-top"
                      />
                      <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-900/80 text-white text-[10px] font-mono font-semibold opacity-0 group-hover/cert:opacity-100 transition-opacity">
                        <ExternalLink className="w-3 h-3" />
                        View
                      </span>
                    </a>
                  )}

                  <div className="p-6 flex flex-col flex-1 gap-4">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-[10px] font-mono font-semibold border border-emerald-200 dark:border-emerald-800">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          Verified
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          {cert.issueDate}
                          {cert.expiry ? ` · ${cert.expiry}` : ''}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                        {cert.title}
                      </h4>

                      <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1.5 font-medium flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                        <span>{cert.issuer}</span>
                      </div>

                      {cert.description && (
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-2.5 leading-relaxed">
                          {cert.description}
                        </p>
                      )}
                    </div>

                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <span key={skill} className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                        Credential ID
                      </span>
                      <p className="text-[11px] font-mono font-bold text-cyan-700 dark:text-cyan-400 break-all">
                        {cert.credentialId}
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* 2. Academic Degrees (Side-by-Side Cards) */}
        <div id="degrees" className="space-y-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 scroll-mt-24">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Academic Degrees</span>
                </h3>
              </div>
            </div>
          </div>

          {/* Degrees: 4-up Grid, all Top Rank */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {EDUCATION.map((edu) => (
              <TiltCard
                key={edu.id}
                id={`edu-card-${edu.id}`}
                maxTilt={6}
                perspective={950}
                glare={true}
                className="w-full rounded-3xl"
              >
                <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-900/90 backdrop-blur-md border border-cyan-300 dark:border-cyan-800/80 ring-1 ring-cyan-500/20 shadow-md hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col justify-between">
                  <div className="h-1.5 bg-gradient-to-r from-amber-400 via-cyan-400 to-emerald-400" />

                  <div className="p-6 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {edu.period}
                        </span>
                        <span className="text-[10px] font-mono text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded font-bold border border-amber-200 dark:border-amber-800 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span>Top Rank</span>
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 dark:text-white font-display group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                        {edu.degree}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                        {edu.institution}
                      </p>

                      {edu.activities && edu.activities.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {edu.activities.map((a, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                              <Sparkles className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        Score:
                      </span>
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg border bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800">
                        {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
