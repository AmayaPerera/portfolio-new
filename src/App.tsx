import React from 'react';
import { Navbar } from './components/Navbar';
import { FloatingObjects } from './components/FloatingObjects';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { JourneySection } from './components/JourneySection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { QualitySection } from './components/QualitySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen bg-[#0B0B0B] text-white selection:bg-teal-500/30 selection:text-teal-200 font-sans overflow-x-hidden">
      {/* Background Elements */}
      <FloatingObjects />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <JourneySection />
        <SkillsSection />
        <ProjectsSection />
        <QualitySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>;
}