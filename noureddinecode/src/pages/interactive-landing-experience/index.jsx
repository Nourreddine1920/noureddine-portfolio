import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SystemStatusDashboard from './components/SystemStatusDashboard';
import FeaturedProjectsCarousel from './components/FeaturedProjectsCarousel';
import InteractiveSkillsRadar from './components/InteractiveSkillsRadar';
import InteractiveHardwareSchematics from './components/InteractiveHardwareSchematics';

const InteractiveLandingExperience = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SystemStatusDashboard />
        <FeaturedProjectsCarousel />
        <InteractiveSkillsRadar />
        <InteractiveHardwareSchematics />
      </main>
      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xl font-bold">Noureddine AWLED BRAHIM</span>
            </div>
            <p className="text-slate-400 mb-6">
              Engineering the invisible intelligence that powers tomorrow's connected world
            </p>
            <div className="text-sm text-slate-500">
              © {new Date()?.getFullYear()} Noureddine AWLED BRAHIM. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InteractiveLandingExperience;