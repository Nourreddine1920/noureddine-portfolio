import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import SkillsMatrix from './components/SkillsMatrix';
import LearningPaths from './components/LearningPaths';
import CertificationTracker from './components/CertificationTracker';
import SkillsInAction from './components/SkillsInAction';
import IndustryAlignment from './components/IndustryAlignment';
import Icon from '../../components/AppIcon';

const SkillsExpertiseObservatory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const observatoryStats = [
    {
      icon: 'Target',
      value: '25+',
      label: 'Core Skills',
      description: 'Technical competencies across embedded systems domains'
    },
    {
      icon: 'Award',
      value: '8',
      label: 'Certifications',
      description: 'Professional certifications and ongoing training'
    },
    {
      icon: 'TrendingUp',
      value: '3',
      label: 'Learning Paths',
      description: 'Structured progression routes for specialization'
    },
    {
      icon: 'Zap',
      value: '15+',
      label: 'Projects',
      description: 'Real-world applications demonstrating expertise'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Skills & Expertise Observatory - NoureddineCode</title>
        <meta name="description" content="Interactive visualization of technical competencies, learning paths, and industry alignment for embedded systems engineering expertise." />
        <meta name="keywords" content="embedded systems skills, STM32 expertise, ARM programming, IoT development, automotive ECU, industrial automation, technical competencies" />
        <meta property="og:title" content="Skills & Expertise Observatory - NoureddineCode" />
        <meta property="og:description" content="Explore technical skills matrix, certification tracking, and industry alignment analysis for embedded systems engineering." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/skills-expertise-observatory" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Icon name="Telescope" size={20} />
                <span className="text-sm font-medium">Skills Observatory</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Technical Expertise
                <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Observatory
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Dynamic visualization of technical competencies through interactive learning paths, 
                proficiency indicators, and real-world project applications in embedded systems engineering.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {observatoryStats?.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat?.icon} size={24} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat?.value}</div>
                  <div className="text-sm font-medium mb-2">{stat?.label}</div>
                  <div className="text-xs text-white/70">{stat?.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-40 right-10 w-12 h-12 bg-white/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </section>

        {/* Skills Matrix Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SkillsMatrix />
          </div>
        </section>

        {/* Learning Paths Section */}
        <section className="py-20 bg-brand-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LearningPaths />
          </div>
        </section>

        {/* Certification Tracker Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CertificationTracker />
          </div>
        </section>

        {/* Skills in Action Section */}
        <section className="py-20 bg-brand-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SkillsInAction />
          </div>
        </section>

        {/* Industry Alignment Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <IndustryAlignment />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <Icon name="Rocket" size={48} className="mx-auto mb-6 text-white/90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Collaborate?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how these technical competencies can drive your next embedded systems project forward.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/collaboration-gateway"
                className="inline-flex items-center justify-center space-x-2 bg-white text-brand-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-200"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Start a Conversation</span>
              </a>
              <a
                href="/technical-portfolio-showcase"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 border border-white/20"
              >
                <Icon name="Eye" size={20} />
                <span>View Project Portfolio</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center">
                  <Icon name="Code" size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">NoureddineCode</div>
                  <div className="text-sm text-white/70">Embedded Systems Engineering</div>
                </div>
              </div>
              <p className="text-white/70 mb-4 max-w-md">
                Transforming ideas into intelligent embedded solutions through precision engineering 
                and innovative problem-solving in IoT, automotive, and industrial domains.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Skills</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Microcontrollers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Real-time Systems</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Communication Protocols</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Development Tools</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="/technical-portfolio-showcase" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="/industry-insights-hub" className="hover:text-white transition-colors">Insights</a></li>
                <li><a href="/professional-journey-timeline" className="hover:text-white transition-colors">Journey</a></li>
                <li><a href="/collaboration-gateway" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/70">
            <p>&copy; {new Date()?.getFullYear()} NoureddineCode. All rights reserved. Built with precision and passion for embedded systems excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkillsExpertiseObservatory;