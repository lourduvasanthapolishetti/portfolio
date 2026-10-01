import React, { useState } from 'react';
import { FAQS } from '../data/faqData';
import { ChevronDown, HelpCircle } from 'lucide-react';

/**
 * Frequently Asked Questions.
 *
 * Two jobs, both SEO-related:
 *  1. The questions are phrased the way people actually type them into
 *     Google, so this section can surface in long-tail and "People also
 *     ask" results for the name.
 *  2. It carries visible text matching the FAQPage JSON-LD in index.html,
 *     which Google requires — markup without matching on-page content is
 *     ignored and can trigger a manual action.
 *
 * The content lives in src/data/faqData.ts and is mirrored in index.html.
 * Update both together.
 */
export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800 mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-slate-900 dark:text-white">
            About Lourdu Vasantha Polishetti
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-1.5 max-w-2xl">
            Common questions recruiters, hiring managers, and fellow analysts ask about my
            background, skills, projects, and availability.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className="rounded-2xl bg-white dark:bg-slate-900/85 border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-answer`}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold font-display text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-cyan-600 dark:text-cyan-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={`${faq.id}-answer`}
                    className="px-5 sm:px-6 pb-5 -mt-1"
                  >
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};