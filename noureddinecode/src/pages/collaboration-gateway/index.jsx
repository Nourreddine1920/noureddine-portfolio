import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ContactForm from './components/ContactForm';
import ContactMethods from './components/ContactMethods';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import ResourceDownloads from './components/ResourceDownloads';
import ResponseTimeStats from './components/ResponseTimeStats';

const CollaborationGateway = () => {
  const [activeTab, setActiveTab] = useState('contact');

  const tabs = [
    { id: 'contact', label: 'Contact Form', icon: 'MessageSquare' },
    { id: 'methods', label: 'Contact Methods', icon: 'Phone' },
    { id: 'calendar', label: 'Schedule Meeting', icon: 'Calendar' },
    { id: 'resources', label: 'Resources', icon: 'Download' },
    { id: 'stats', label: 'Communication', icon: 'BarChart3' }
  ];

  const collaborationTypes = [
    {
      title: 'Technical Recruitment',
      description: 'Comprehensive evaluation for embedded systems positions',
      features: ['Technical CV review', 'Skills assessment', 'Project portfolio', 'Reference verification'],
      icon: 'Users',
      color: 'bg-blue-500'
    },
    {
      title: 'Client Projects',
      description: 'Custom embedded systems development and consulting',
      features: ['Project scoping', 'Technical architecture', 'Development timeline', 'Budget estimation'],
      icon: 'Briefcase',
      color: 'bg-purple-500'
    },
    {
      title: 'Peer Collaboration',
      description: 'Knowledge sharing and joint development initiatives',
      features: ['Code reviews', 'Technical mentoring', 'Open source contributions', 'Industry networking'],
      icon: 'GitBranch',
      color: 'bg-green-500'
    },
    {
      title: 'Technical Consultation',
      description: 'Expert guidance on embedded systems challenges',
      features: ['Architecture review', 'Performance optimization', 'Technology selection', 'Best practices'],
      icon: 'Lightbulb',
      color: 'bg-orange-500'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'contact':
        return <ContactForm />;
      case 'methods':
        return <ContactMethods />;
      case 'calendar':
        return <AvailabilityCalendar />;
      case 'resources':
        return <ResourceDownloads />;
      case 'stats':
        return <ResponseTimeStats />;
      default:
        return <ContactForm />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-surface via-white to-brand-surface">
      <Helmet>
        <title>Collaboration Gateway - NoureddineCode | Professional Engagement Hub</title>
        <meta name="description" content="Connect with Noureddine for embedded systems projects, technical consultations, and professional collaboration. Schedule meetings, download resources, and start meaningful technical conversations." />
        <meta name="keywords" content="embedded systems consultant, technical collaboration, project inquiry, embedded systems expert, IoT consultation" />
      </Helmet>
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span>Available for New Projects</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Let's Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Extraordinary Together
              </span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Your gateway to professional embedded systems expertise. Whether you're looking to hire, 
              collaborate, or consult, I'm here to help bring your technical vision to life.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="bg-brand-primary hover:bg-brand-primary/90"
                onClick={() => setActiveTab('contact')}
              >
                Start a Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => setActiveTab('calendar')}
              >
                Schedule a Meeting
              </Button>
            </div>
          </div>

          {/* Collaboration Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {collaborationTypes?.map((type, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-card border border-border p-6 hover:shadow-elevated transition-all duration-300 group"
              >
                <div className={`w-12 h-12 ${type?.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={type?.icon} size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{type?.title}</h3>
                <p className="text-sm text-text-secondary mb-4">{type?.description}</p>
                <ul className="space-y-1">
                  {type?.features?.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-text-secondary flex items-center">
                      <Icon name="Check" size={12} className="text-success mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="bg-white rounded-2xl shadow-card border border-border p-2 mb-8">
            <div className="flex flex-wrap gap-2">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeTab === tab?.id
                      ? 'bg-brand-primary text-white shadow-interactive'
                      : 'text-text-secondary hover:text-text-primary hover:bg-brand-surface'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span className="hidden sm:inline">{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {renderTabContent()}
          </div>
        </div>
      </section>
      {/* Quick Contact CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-primary to-brand-secondary">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8">
            Don't let technical challenges slow you down. Let's discuss how embedded systems expertise 
            can accelerate your innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => window.location.href = 'tel:+15551234567'}
            >
              Call Now: +1 (555) 123-4567
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Mail"
              iconPosition="left"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => window.location.href = 'mailto:noureddine.embedded@gmail.com'}
            >
              Email: noureddine.embedded@gmail.com
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center">
                  <Icon name="Layers" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">Noureddine AWLED BARHIM</div>
                  <div className="text-sm text-white/70">Embedded Software Engineer</div>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Professional embedded systems development and consultation services. 
                Transforming innovative ideas into reliable, scalable embedded solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/nourreddine-awled-brahim" className="text-white/60 hover:text-white transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="https://github.com/Nourreddine1920" className="text-white/60 hover:text-white transition-colors">
                  <Icon name="Github" size={20} />
                </a>
                <a href="mailto:noureddine.awledbrahim@gmail.com" className="text-white/60 hover:text-white transition-colors">
                  <Icon name="Mail" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Embedded Systems Development</li>
                <li>IoT Solutions</li>
                <li>Automotive Systems</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>noureddine.awledbrahim@gmail.com</li>
                <li>+ (216) 98 790 520</li>
                <li>Available Mon-Fri, 9 AM - 6 PM EST</li>
                <li>Response within 4-6 hours</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/60">
            <p>&copy; {new Date()?.getFullYear()} Noureddine AWLED BARHIM. All rights reserved. Built with precision and passion for embedded systems excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CollaborationGateway;