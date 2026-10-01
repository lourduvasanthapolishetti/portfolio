import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume?: () => void;
  onOpenQuickFit?: () => void;
  onOpenOnePager?: () => void;
}

const NAV_LINKS = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#education' },
  { label: 'Academic Degrees', href: '#degrees' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenQuickFit,
  onOpenOnePager
}) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');

  // Scroll position: progress bar + solid background
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);
      setScrolled(currentScroll > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy: highlight the section currently in view
  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.15, 0.4] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Dynamic Scroll Progress Bar */}
      <div
        id="scroll-progress"
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-500 via-sky-400 to-emerald-400 z-50 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 dark:bg-[#0B0F17]/85 backdrop-blur-xl py-2.5 border-b border-slate-200/70 dark:border-slate-800/70 shadow-sm dark:shadow-black/30'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          {/* Logo / Personal Brand */}
          <a
            href="#"
            className="group flex items-center gap-3 text-slate-900 dark:text-white font-display transition-transform duration-150 active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white flex items-center justify-center font-display font-extrabold text-sm shadow-md shadow-cyan-500/25 group-hover:shadow-lg group-hover:shadow-cyan-500/40 transition-all">
              LV
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-[15px] tracking-tight group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                Lourdu Vasantha
              </span>
              <span className="text-[11px] font-sans font-medium text-slate-500 dark:text-slate-400">
                Data Analyst
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-4">
            <ul className="flex items-center gap-1 list-none">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      aria-current={isActive ? 'true' : undefined}
                      className={`inline-block px-3 py-2 rounded-full text-[13px] font-sans transition-colors ${
                        isActive
                          ? 'font-semibold text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-500/15'
                          : 'font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="h-5 w-px bg-slate-200 dark:bg-slate-800" />

            {/* Recruiter 60s Snapshot Button */}
            {onOpenQuickFit && (
              <button
                onClick={onOpenQuickFit}
                id="nav-quick-fit-btn"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13px] font-sans font-semibold text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/25 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Recruiter TL;DR</span>
              </button>
            )}

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              id="nav-resume-btn"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-sans font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-sm transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-500" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex xl:hidden items-center gap-1.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-500" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-dropdown"
            className="xl:hidden bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-5 py-5 shadow-xl transition-all"
          >
            <ul className="flex flex-col gap-1 list-none">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-[15px] font-sans px-3 py-2.5 rounded-xl transition-colors ${
                        isActive
                          ? 'font-semibold text-cyan-800 dark:text-cyan-300 bg-cyan-100 dark:bg-cyan-500/15'
                          : 'font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-500/10'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}

              <li className="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2.5">
                {onOpenQuickFit && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenQuickFit();
                    }}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/25 text-cyan-800 dark:text-cyan-300 text-sm font-sans font-semibold hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-colors"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Recruiter Fit Snapshot (60s)</span>
                  </button>
                )}

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume?.();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-sans font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Official Resume</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};