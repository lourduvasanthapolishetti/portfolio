import React from 'react';
import { Database, FileCheck, Layers, Award, TrendingUp } from 'lucide-react';
import { TiltCard } from './TiltCard';

export const KpiSection: React.FC = () => {
  const metrics = [
    {
      id: 'kpi-experience',
      icon: FileCheck,
      value: '3+',
      unit: 'Yrs',
      label: 'Pharma QC Data Rigor',
      subtext: 'Labware LIMS records, OOS/OOT investigation, and GMP/GLP/ICH audit-ready documentation at Dr. Reddy\'s Laboratories.',
      source: 'Dr. Reddy\'s Laboratories',
      badge: 'Zero-Defect Audit',
      color: 'cyan',
      sparkline: 'M0 20 Q15 18 30 14 T60 8 T90 4 L90 25 L0 25 Z'
    },
    {
      id: 'kpi-records',
      icon: Database,
      value: '100K',
      unit: 'Records',
      label: 'Banking Transactions Analyzed',
      subtext: '100,000 debit and credit transactions modeled in Power BI, driving the credit-to-debit ratio, net amount, and high-risk flag measures.',
      source: 'Debit & Credit dataset',
      badge: 'Cleaned & Modeled',
      color: 'emerald',
      sparkline: 'M0 22 Q20 19 40 12 T70 9 T90 2 L90 25 L0 25 Z'
    },
    {
      id: 'kpi-dashboards',
      icon: Layers,
      value: '5',
      unit: 'Shipped',
      label: 'Interactive BI Dashboards',
      subtext: '3 Power BI, 1 Excel and 1 Tableau dashboard spanning banking, retail and financial analysis.',
      source: 'Banking · Retail · Finance',
      badge: 'Power BI · Excel · Tableau',
      color: 'indigo',
      sparkline: 'M0 21 Q25 15 50 10 T75 6 T90 3 L90 25 L0 25 Z'
    },
    {
      id: 'kpi-certifications',
      icon: Award,
      value: '3',
      unit: 'Verified',
      label: 'Certificates & Credentials',
      subtext: 'NASSCOM Data Analyst Silver Badge, ExcelR Certificate of Excellence, and the Aivariant internship certificate.',
      source: 'Credential IDs on file',
      badge: 'NASSCOM · ExcelR · Aivariant',
      color: 'amber',
      sparkline: 'M0 24 Q30 18 55 12 T80 5 T90 2 L90 25 L0 25 Z'
    }
  ];

  return (
    <section id="kpis" className="py-14 px-4 sm:px-6 lg:px-8 border-y border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070B12]/80 transition-colors duration-200 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <TiltCard
                key={m.id}
                id={m.id}
                maxTilt={6}
                perspective={950}
                glare={true}
                className="h-full rounded-2xl"
              >
                <div className="h-full rounded-2xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200 dark:border-slate-800/90 shadow-md hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                  {/* Top gradient accent line identical to Projects */}
                  <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 text-cyan-600 dark:text-cyan-400 border border-cyan-200/50 dark:border-cyan-800/40 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-200 shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80">
                        {m.badge}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {m.value}
                      </span>
                      <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 uppercase">
                        {m.unit}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 mt-2 tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {m.label}
                    </h3>
                  </div>

                  <div className="px-6 pb-6 pt-0">
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {m.subtext}
                      </p>

                      {/* Mini SVG Sparkline */}
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 flex items-center gap-1 min-w-0">
                          <TrendingUp className="w-3 h-3 text-emerald-500 shrink-0" />
                          <span className="truncate">{m.source}</span>
                        </span>
                        <svg className="w-20 h-5 overflow-visible opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 90 25">
                          <defs>
                            <linearGradient id={`grad-${m.id}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path d={m.sparkline} fill={`url(#grad-${m.id})`} />
                          <path
                            d={m.sparkline.replace(/ L90 25 L0 25 Z/, '')}
                            fill="none"
                            stroke="#06b6d4"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
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
