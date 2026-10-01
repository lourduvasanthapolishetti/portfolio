import React, { Suspense, lazy, useEffect, useState } from 'react';
import { ArrowDown, Mail, Linkedin, Box, Activity, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { DashboardPreviewCard } from './DashboardPreviewCard';

/**
 * three.js is ~525 kB and the 3D core is purely decorative. Loading it eagerly
 * blocks first paint and inflates LCP, which Google treats as a ranking signal.
 * Code-splitting it defers the download until after the hero has rendered.
 */
const HeroThreeCanvas = lazy(() =>
  import('./HeroThreeCanvas').then((m) => ({ default: m.HeroThreeCanvas }))
);

/**
 * Placeholder shown while the 3D chunk loads. Sized to match the canvas so the
 * swap does not shift layout.
 */
const ThreeFallback: React.FC = () => (
  <div
    className="w-full aspect-square max-h-[520px] rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 animate-pulse"
    aria-hidden="true"
  />
);

interface HeroSectionProps {
  onOpenQuickFit?: () => void;
  onOpenOnePager?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuickFit,
  onOpenOnePager
}) => {
  const [heroMode, setHeroMode] = useState<'3d' | 'dashboard'>('3d');

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-200"
    >
      {/* Background Cybernetic Grid & Ambient Spotlights */}
      <div className="absolute inset-0 bg-grid-pattern-light dark:bg-grid-pattern-dark opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Recruiter-Oriented Profile Framing */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Real-time Availability & Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700/80 text-emerald-800 dark:text-emerald-300 mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span>LIVE TELEMETRY // AVAILABLE FOR DATA ANALYST ROLES</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold font-display tracking-tight text-slate-900 dark:text-white leading-[1.08]">
              Lourdu Vasantha{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500 dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
                Polishetti
              </span>
            </h1>

            {/* Futuristic Tech Stack Tagline */}
            <div className="flex flex-wrap items-center gap-2 mt-4 text-xs sm:text-sm font-mono font-semibold text-slate-700 dark:text-slate-200">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-cyan-600 dark:text-cyan-400 shadow-xs">
                DATA ANALYST
              </span>
              <span className="text-slate-400">//</span>
              <span className="px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60">
                SQL CTEs & Window Fn
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                Power BI (DAX Star-Schema)
              </span>
              <span className="px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60">
                Tableau &amp; Excel
              </span>
              <span className="px-2 py-0.5 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                Python &amp; R
              </span>
            </div>

            {/* Core Value Proposition Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mt-5 max-w-2xl">
              <strong className="font-semibold text-slate-900 dark:text-white underline decoration-cyan-500 decoration-2 underline-offset-2">Aspiring Data Analyst</strong> | Power BI, SQL, Tableau | Transitioning from Pharma QC to IT. Open to opportunities in Data Analytics, Business Intelligence and Reporting.
            </p>

            {/* Action Buttons Cluster */}
            <div className="flex flex-wrap items-center gap-3 mt-8 w-full sm:w-auto">
              {/* Recruiter 60-second snapshot CTA */}
              {onOpenQuickFit && (
                <button
                  onClick={onOpenQuickFit}
                  id="hero-quick-fit-btn"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-500 hover:from-cyan-500 hover:to-teal-500 text-white font-bold text-xs font-mono shadow-lg shadow-cyan-600/30 hover:shadow-cyan-600/50 transition-all duration-200 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
                  <span>Recruiter Fit (60s)</span>
                </button>
              )}

              {/* 1-Page Project Catalog */}
              {onOpenOnePager && (
                <button
                  onClick={onOpenOnePager}
                  id="hero-one-pager-btn"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 hover:bg-cyan-100 dark:hover:bg-cyan-900/60 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 font-medium text-xs font-mono transition-all duration-150 shadow-xs"
                >
                  <span>1-Page Catalog</span>
                </button>
              )}

              {/* Direct Mail */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send Direct Email"
                className="p-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Email Lourdu Vasantha"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Heroic 3D Visualizer & Analytics Command Center */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            {/* 3D vs. Dashboard Mode Switcher with High Contrast in White & Dark Mode */}
            <div className="w-full flex items-center justify-between gap-2 p-1.5 mb-3 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-300 dark:border-slate-800 shadow-sm backdrop-blur-md">
              <button
                onClick={() => setHeroMode('3d')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
                  heroMode === '3d'
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                    : 'text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Box className={`w-3.5 h-3.5 ${heroMode === '3d' ? 'text-white' : 'text-cyan-600 dark:text-cyan-400'}`} />
                <span className="font-semibold tracking-wide">3D Quantum Core</span>
              </button>

              <button
                onClick={() => setHeroMode('dashboard')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
                  heroMode === 'dashboard'
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                    : 'text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Activity className={`w-3.5 h-3.5 ${heroMode === 'dashboard' ? 'text-white' : 'text-emerald-600 dark:text-emerald-400'}`} />
                <span className="font-semibold tracking-wide">KPI Drilldown</span>
              </button>
            </div>

            {/* Display the Selected Heroic Experience */}
            <div className="w-full relative">
              {heroMode === '3d' ? (
                <div className="relative animate-fadeIn">
                  <Suspense fallback={<ThreeFallback />}>
                    <HeroThreeCanvas interactive={true} />
                  </Suspense>
                </div>
              ) : (
                <div className="relative animate-fadeIn">
                  <DashboardPreviewCard />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
