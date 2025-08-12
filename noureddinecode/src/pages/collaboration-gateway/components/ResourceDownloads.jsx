import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ResourceDownloads = () => {
  const [downloadCounts, setDownloadCounts] = useState({
    'technical-cv': 1247,
    'portfolio-pdf': 892,
    'capability-statement': 634,
    'project-samples': 456,
    'technical-specs': 321,
    'rate-card': 289
  });

  const resources = [
    {
      id: 'technical-cv',
      title: 'Technical CV',
      subtitle: 'Comprehensive Resume',
      description: 'Detailed technical resume with project history, skills matrix, and professional achievements in embedded systems development.',
      fileSize: '2.3 MB',
      fileType: 'PDF',
      icon: 'FileText',
      color: 'bg-blue-500',
      audience: 'Recruiters & Hiring Managers',
      lastUpdated: 'January 2025',
      highlights: [
        '8+ years embedded systems experience',
        'STM32, ARM Cortex-M expertise',
        'IoT and automotive projects',
        'Professional certifications'
      ]
    },
    {
      id: 'portfolio-pdf',
      title: 'Project Portfolio',
      subtitle: 'Visual Project Showcase',
      description: 'Comprehensive portfolio showcasing major embedded systems projects with technical details, architecture diagrams, and outcomes.',
      fileSize: '15.7 MB',
      fileType: 'PDF',
      icon: 'Briefcase',
      color: 'bg-purple-500',
      audience: 'Clients & Technical Teams',
      lastUpdated: 'January 2025',
      highlights: [
        '12 major project case studies',
        'Architecture diagrams included',
        'Performance metrics & results',
        'Client testimonials'
      ]
    },
    {
      id: 'capability-statement',
      title: 'Capability Statement',
      subtitle: 'Technical Expertise Overview',
      description: 'One-page summary of core competencies, service offerings, and technical capabilities for quick evaluation.',
      fileSize: '1.1 MB',
      fileType: 'PDF',
      icon: 'Target',
      color: 'bg-green-500',
      audience: 'Decision Makers',
      lastUpdated: 'December 2024',
      highlights: [
        'Core technical competencies',
        'Service delivery approach',
        'Industry certifications',
        'Key differentiators'
      ]
    },
    {
      id: 'project-samples',
      title: 'Code Samples',
      subtitle: 'Technical Implementation Examples',
      description: 'Curated collection of code samples demonstrating embedded C/C++, RTOS implementation, and driver development expertise.',
      fileSize: '8.4 MB',
      fileType: 'ZIP',
      icon: 'Code',
      color: 'bg-orange-500',
      audience: 'Technical Reviewers',
      lastUpdated: 'January 2025',
      highlights: [
        'Clean, documented code',
        'Multiple project examples',
        'Best practices demonstrated',
        'Performance optimizations'
      ]
    },
    {
      id: 'technical-specs',
      title: 'Technical Specifications',
      subtitle: 'Development Standards',
      description: 'Technical documentation outlining development methodologies, coding standards, and quality assurance processes.',
      fileSize: '3.2 MB',
      fileType: 'PDF',
      icon: 'Settings',
      color: 'bg-indigo-500',
      audience: 'Engineering Teams',
      lastUpdated: 'November 2024',
      highlights: [
        'Coding standards & guidelines',
        'Testing methodologies',
        'Documentation practices',
        'Quality assurance processes'
      ]
    },
    {
      id: 'rate-card',
      title: 'Rate Card & Services',
      subtitle: 'Pricing & Service Information',
      description: 'Transparent pricing structure for consulting services, project rates, and service packages with detailed scope descriptions.',
      fileSize: '1.8 MB',
      fileType: 'PDF',
      icon: 'DollarSign',
      color: 'bg-emerald-500',
      audience: 'Project Managers',
      lastUpdated: 'January 2025',
      highlights: [
        'Transparent pricing structure',
        'Service package options',
        'Hourly & project rates',
        'Terms & conditions'
      ]
    }
  ];

  const handleDownload = (resourceId, title) => {
    // Simulate download
    setDownloadCounts(prev => ({
      ...prev,
      [resourceId]: prev?.[resourceId] + 1
    }));

    // In a real application, this would trigger the actual download
    console.log(`Downloading ${title}...`);
    
    // Show success message (you could use a toast notification here)
    alert(`${title} download started!`);
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Professional Resources</h3>
        <p className="text-text-secondary">
          Download comprehensive materials to evaluate technical expertise and project capabilities
        </p>
      </div>
      {/* Quick Stats */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl p-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold">4,839</div>
            <div className="text-sm text-white/80">Total Downloads</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">98%</div>
            <div className="text-sm text-white/80">Positive Feedback</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">24h</div>
            <div className="text-sm text-white/80">Update Frequency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">6</div>
            <div className="text-sm text-white/80">Resource Types</div>
          </div>
        </div>
      </div>
      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources?.map((resource) => (
          <div
            key={resource?.id}
            className="bg-white rounded-xl shadow-card border border-border p-6 hover:shadow-elevated transition-all duration-300 group"
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className={`w-12 h-12 ${resource?.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={resource?.icon} size={24} className="text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-lg font-semibold text-text-primary">{resource?.title}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-brand-surface text-text-secondary px-2 py-1 rounded-full">
                      {resource?.fileType}
                    </span>
                    <span className="text-xs text-text-secondary">{resource?.fileSize}</span>
                  </div>
                </div>
                <p className="text-sm text-brand-primary font-medium mb-2">{resource?.subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              {resource?.description}
            </p>

            {/* Highlights */}
            <div className="mb-4">
              <h5 className="text-sm font-semibold text-text-primary mb-2">Key Highlights:</h5>
              <ul className="space-y-1">
                {resource?.highlights?.map((highlight, index) => (
                  <li key={index} className="text-xs text-text-secondary flex items-center">
                    <Icon name="Check" size={12} className="text-success mr-2 flex-shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Metadata */}
            <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Icon name="Users" size={12} className="mr-1" />
                  {resource?.audience}
                </span>
                <span className="flex items-center">
                  <Icon name="Calendar" size={12} className="mr-1" />
                  {resource?.lastUpdated}
                </span>
              </div>
              <span className="flex items-center">
                <Icon name="Download" size={12} className="mr-1" />
                {downloadCounts?.[resource?.id]?.toLocaleString()} downloads
              </span>
            </div>

            {/* Download Button */}
            <Button
              variant="outline"
              fullWidth
              onClick={() => handleDownload(resource?.id, resource?.title)}
              iconName="Download"
              iconPosition="left"
              className="group-hover:border-brand-primary group-hover:text-brand-primary"
            >
              Download {resource?.title}
            </Button>
          </div>
        ))}
      </div>
      {/* Additional Information */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <Icon name="AlertCircle" size={20} className="text-yellow-600 mt-0.5" />
          <div>
            <h5 className="font-semibold text-yellow-900 mb-2">Resource Usage Guidelines</h5>
            <div className="text-sm text-yellow-800 space-y-1">
              <p>• All resources are provided for evaluation and professional purposes only</p>
              <p>• Please respect intellectual property and confidentiality</p>
              <p>• For questions about specific projects or implementations, schedule a consultation</p>
              <p>• Resources are updated regularly - check back for the latest versions</p>
            </div>
          </div>
        </div>
      </div>
      {/* Custom Resource Request */}
      <div className="bg-white rounded-xl shadow-card border border-border p-6 text-center">
        <Icon name="FileQuestion" size={32} className="text-brand-primary mx-auto mb-4" />
        <h4 className="text-lg font-semibold text-text-primary mb-2">Need Something Specific?</h4>
        <p className="text-text-secondary mb-4">
          Looking for custom documentation, specific code examples, or tailored capability statements?
        </p>
        <Button
          variant="outline"
          iconName="MessageCircle"
          iconPosition="left"
        >
          Request Custom Resource
        </Button>
      </div>
    </div>
  );
};

export default ResourceDownloads;