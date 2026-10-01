import React, { useState } from 'react';
import { TiltCard } from './TiltCard';
import { TrendingUp, Code2 } from 'lucide-react';

export const DashboardPreviewCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'loans' | 'transactions' | 'margin'>('loans');
  const [showCode, setShowCode] = useState(false);

  return (
    <TiltCard id="hero-dashboard-preview-tilt" maxTilt={4} perspective={1100} glare={true} className="rounded-2xl">
      <div className="relative rounded-2xl bg-white/95 dark:bg-[#0D1420]/95 backdrop-blur-md border border-slate-200 dark:border-slate-800/90 shadow-xl hover:border-cyan-500/60 dark:hover:border-cyan-500/60 hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        {/* Top gradient accent line identical to Projects */}
        <div className="h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />

        {/* Top Window Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-50 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-300 ml-2">
            analytics_engine://executive_kpi_feed.sql
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowCode(!showCode)}
            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
              showCode
                ? 'bg-cyan-600 text-white'
                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            <Code2 className="w-3 h-3" />
            <span>{showCode ? 'Preview' : 'SQL / DAX'}</span>
          </button>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Live Model
          </span>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/40 text-xs">
        <button
          onClick={() => { setActiveTab('loans'); setShowCode(false); }}
          className={`flex-1 py-2.5 px-3 font-medium transition-colors border-b-2 text-center ${
            activeTab === 'loans'
              ? 'border-cyan-500 text-cyan-700 dark:text-cyan-400 bg-white dark:bg-[#0D1420]'
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          Banking Loans (1K)
        </button>
        <button
          onClick={() => { setActiveTab('transactions'); setShowCode(false); }}
          className={`flex-1 py-2.5 px-3 font-medium transition-colors border-b-2 text-center ${
            activeTab === 'transactions'
              ? 'border-cyan-500 text-cyan-700 dark:text-cyan-400 bg-white dark:bg-[#0D1420]'
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          Ledger Cash Flow (100K)
        </button>
        <button
          onClick={() => { setActiveTab('margin'); setShowCode(false); }}
          className={`flex-1 py-2.5 px-3 font-medium transition-colors border-b-2 text-center ${
            activeTab === 'margin'
              ? 'border-cyan-500 text-cyan-700 dark:text-cyan-400 bg-white dark:bg-[#0D1420]'
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          Superstore Sales
        </button>
      </div>

      {/* Code Inspector Mode */}
      {showCode ? (
        <div className="p-4 sm:p-5 bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed max-h-[300px]">
          <div className="text-slate-500 mb-2">// Query logic powering this view</div>
          {activeTab === 'loans' && (
            <pre className="text-cyan-300"><code>{`SELECT
  loan_type,
  COUNT(loan_id) AS total_loans,
  SUM(CASE WHEN loan_status = 'Default' THEN loan_amount ELSE 0 END)
    AS defaulted_amount,
  ROUND(SUM(loan_amount), 2) AS total_disbursed
FROM loan_master
GROUP BY loan_type
ORDER BY total_disbursed DESC;`}</code></pre>
          )}

          {activeTab === 'transactions' && (
            <pre className="text-emerald-300"><code>{`SELECT
  branch_name,
  SUM(CASE WHEN tx_type = 'Credit' THEN amount ELSE 0 END) AS total_credit,
  SUM(CASE WHEN tx_type = 'Debit' THEN amount ELSE 0 END) AS total_debit,
  ROUND(SUM(CASE WHEN tx_type = 'Credit' THEN amount
                 ELSE -amount END), 2) AS net_cash_flow
FROM banking_transactions
GROUP BY branch_name
ORDER BY net_cash_flow DESC;`}</code></pre>
          )}

          {activeTab === 'margin' && (
            <pre className="text-sky-300"><code>{`SELECT
  region,
  category,
  ROUND(SUM(sales), 2) AS total_sales,
  ROUND(SUM(profit), 2) AS total_profit
FROM superstore_orders
GROUP BY region, category
ORDER BY total_sales DESC;`}</code></pre>
          )}
        </div>
      ) : (
        <div className="p-4 sm:p-5 space-y-4">
          {activeTab === 'loans' && (
            <>
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Client Records</span>
                  <span className="text-base font-bold text-slate-900 dark:text-white font-mono">1,000</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Dataset size</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">KPIs Tracked</span>
                  <span className="text-base font-bold text-cyan-600 dark:text-cyan-400 font-mono">4 Core</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Default to Recovery</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Build Tools</span>
                  <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono">4</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">SQL, Excel, PBI, TBL</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                    Loan KPIs Monitored
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  {['Default Rate', 'Delinquency Rate', 'Recovery Rate', 'On-Time Repayment Rate'].map((kpi) => (
                    <div key={kpi} className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                      <span className="truncate">{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'transactions' && (
            <>
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Total Records</span>
                  <span className="text-base font-bold text-slate-900 dark:text-white font-mono">100,000</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Transactions</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Peak Volume</span>
                  <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono">&#8377;42.91M</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">City Center Branch</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Dashboards</span>
                  <span className="text-base font-bold text-cyan-600 dark:text-cyan-400 font-mono">2</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Power BI (Part 1 + 2)</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-2">
                  Measures Calculated
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                  {['Total Credit Amount', 'Total Debit Amount', 'Credit-to-Debit Ratio', 'Net Transaction Amount', 'Account Activity Ratio', 'High Risk Flag'].map((m) => (
                    <div key={m} className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="truncate">{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'margin' && (
            <>
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Analysis</span>
                  <span className="text-base font-bold text-slate-900 dark:text-white font-mono">Sales &amp; Profit</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">By category &amp; state</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Build Tool</span>
                  <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 font-mono">Tableau</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">With Excel prep</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 block uppercase">Features</span>
                  <span className="text-base font-bold text-cyan-600 dark:text-cyan-400 font-mono">Interactive</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Filters + KPI cards</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-1.5">
                  Regional &amp; Category-Level Analysis
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Compared total sales, profit margin, and return rate across product categories, states, and customer segments using filters, KPI cards, and visual comparisons to surface sales and profitability patterns.
                </p>
              </div>
            </>
          )}

        </div>
      )}
      </div>
    </TiltCard>
  );
};
