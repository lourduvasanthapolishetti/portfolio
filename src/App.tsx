/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KpiSection } from './components/KpiSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationCertificates } from './components/EducationCertificates';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ResumeModal } from './components/ResumeModal';
import { RecruiterQuickFitModal } from './components/RecruiterQuickFitModal';
import { ProjectBriefOnePagerModal } from './components/ProjectBriefOnePagerModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isQuickFitOpen, setIsQuickFitOpen] = useState(false);
  const [isOnePagerOpen, setIsOnePagerOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F17] text-slate-900 dark:text-slate-100 relative overflow-x-hidden selection:bg-cyan-500 selection:text-white transition-colors duration-200">
        {/* Top Header & Navigation */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenQuickFit={() => setIsQuickFitOpen(true)}
          onOpenOnePager={() => setIsOnePagerOpen(true)}
        />

        <main>
          {/* Hero Section with Interactive Live Dashboard Widget & Quick Actions */}
          <HeroSection
            onOpenQuickFit={() => setIsQuickFitOpen(true)}
            onOpenOnePager={() => setIsOnePagerOpen(true)}
          />

          {/* High-Impact Analytics Metrics Snapshot */}
          <KpiSection />

          {/* Technical Skills & Toolset */}
          <SkillsSection />

          {/* Applied Analytics Dashboards & Case Studies */}
          <ProjectsSection onOpenOnePager={() => setIsOnePagerOpen(true)} />

          {/* Chronological Work Experience Ledger */}
          <ExperienceTimeline />

          {/* Accredited Credentials & Academic Foundation */}
          <EducationCertificates />

          {/* Long-tail FAQ content that mirrors the FAQPage JSON-LD markup */}
          <FaqSection />

          {/* Recruiter Direct Contact Hub & Message Generator */}
          <ContactSection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button with Radiant Green Pulse */}
        <WhatsAppFloatingButton />

        {/* Official Resume Preview & Download Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        {/* Recruiter 60-Second "Quick Fit" TL;DR Modal */}
        <RecruiterQuickFitModal
          isOpen={isQuickFitOpen}
          onClose={() => setIsQuickFitOpen(false)}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenOnePager={() => setIsOnePagerOpen(true)}
        />

        {/* Executive 1-Page Project Catalog & PDF Print Sheet */}
        <ProjectBriefOnePagerModal
          isOpen={isOnePagerOpen}
          onClose={() => setIsOnePagerOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
