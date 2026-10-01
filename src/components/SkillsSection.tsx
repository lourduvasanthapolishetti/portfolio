import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS
    : SKILLS.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SKILLS &amp; TOOLSET</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
              Technical Skills &amp; Toolset
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5 max-w-2xl">
              Ten core competencies spanning SQL and BI tooling, ETL and analytics, and pharmaceutical quality and laboratory systems — each backed by documented project or professional experience.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span>10 CORE COMPETENCIES</span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'all', label: 'All Skills' },
            { id: 'core', label: 'SQL, MySQL & Excel' },
            { id: 'bi', label: 'Power BI & Tableau' },
            { id: 'data', label: 'ETL, Analytics & Python' },
            { id: 'domain', label: 'Quality, LIMS & Lab' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all duration-150 ${
                selectedCategory === cat.id
                  ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid with 3D Tilt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {filteredSkills.map((skill) => {
            return (
              <TiltCard
                key={skill.id}
                id={`skill-card-${skill.id}`}
                maxTilt={6}
                perspective={950}
                glare={true}
                className="h-full rounded-2xl"
              >
                <div className="h-full rounded-2xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200 dark:border-slate-800/90 shadow-md hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                  {/* Top gradient accent line identical to Projects */}
                  <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                          {skill.code}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 group-hover:text-cyan-500 transition-colors">
                          Core competency
                        </span>
                      </div>

                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white font-display group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {skill.title}
                        </h3>
                        <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400">
                          {skill.proficiency}%
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {skill.description}
                      </p>

                      {/* Visual Progress Bar */}
                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-4">
                        <div
                          className="bg-gradient-to-r from-cyan-500 to-emerald-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>

                    {/* Sub-tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                      {skill.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80"
                        >
                          {tag}
                        </span>
                      ))}
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
