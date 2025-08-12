import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = ({ onViewProject }) => {
  const featuredProjects = [
    {
      id: 'automotive-ecu',
      title: 'Automotive ECU Development',
      description: 'Advanced Engine Control Unit with real-time diagnostics and CAN bus communication for hybrid vehicles.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      category: 'Automotive',
      technologies: ['STM32F7', 'CAN-FD', 'AUTOSAR', 'C/C++'],
      metrics: {
        performance: '+40%',
        efficiency: '+25%',
        reliability: '99.9%'
      },
      highlights: [
        'Real-time engine parameter monitoring',
        'Advanced fault detection algorithms',
        'ISO 26262 functional safety compliance',
        'Over-the-air update capability'
      ],
      complexity: 'Advanced',
      duration: '18 months',
      teamSize: 8
    },
    {
      id: 'iot-smart-city',
      title: 'Smart City IoT Infrastructure',
      description: 'Distributed sensor network for environmental monitoring with edge computing and cloud integration.',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop',
      category: 'IoT',
      technologies: ['ESP32', 'LoRaWAN', 'MQTT', 'FreeRTOS'],
      metrics: {
        coverage: '50km²',
        sensors: '500+',
        uptime: '99.5%'
      },
      highlights: [
        'Low-power sensor nodes with 5-year battery life',
        'Mesh networking for extended coverage',
        'Real-time air quality monitoring',
        'Predictive maintenance algorithms'
      ],
      complexity: 'Advanced',
      duration: '12 months',
      teamSize: 6
    },
    {
      id: 'industrial-automation',
      title: 'Industrial Process Controller',
      description: 'High-precision control system for manufacturing automation with machine learning optimization.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      category: 'Industrial',
      technologies: ['ARM Cortex-M7', 'Modbus', 'EtherCAT', 'Python'],
      metrics: {
        precision: '±0.1%',
        throughput: '+35%',
        downtime: '-60%'
      },
      highlights: [
        'Sub-millisecond response time',
        'Adaptive control algorithms',
        'Predictive quality control',
        'Remote monitoring dashboard'
      ],
      complexity: 'Advanced',
      duration: '15 months',
      teamSize: 5
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Featured Projects</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Showcase of complex embedded systems projects demonstrating expertise in automotive, IoT, and industrial applications
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {featuredProjects?.map((project, index) => (
          <div
            key={project?.id}
            className="group bg-white rounded-xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project?.image}
                alt={project?.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-brand-primary text-sm font-semibold rounded-full">
                  {project?.category}
                </span>
              </div>

              {/* Complexity Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1.5 bg-red-500/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full">
                  {project?.complexity}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-brand-primary transition-colors duration-200">
                {project?.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                {project?.description}
              </p>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {Object.entries(project?.metrics)?.map(([key, value], metricIndex) => (
                  <div key={metricIndex} className="text-center p-2 bg-brand-surface rounded-lg">
                    <div className="text-lg font-bold text-brand-primary">{value}</div>
                    <div className="text-xs text-text-secondary capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Technology Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project?.technologies?.slice(0, 3)?.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md"
                  >
                    {tech}
                  </span>
                ))}
                {project?.technologies?.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
                    +{project?.technologies?.length - 3}
                  </span>
                )}
              </div>

              {/* Key Highlights */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-text-primary mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project?.highlights?.slice(0, 2)?.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start space-x-2 text-xs text-text-secondary">
                      <Icon name="CheckCircle" size={12} className="text-success mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Stats */}
              <div className="flex items-center justify-between text-xs text-text-secondary mb-4 pt-3 border-t border-border">
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} />
                  <span>{project?.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={12} />
                  <span>{project?.teamSize} members</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="Github"
                    className="text-text-secondary hover:text-text-primary p-1"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    iconName="ExternalLink"
                    className="text-text-secondary hover:text-text-primary p-1"
                  />
                </div>
                <Button
                  variant="default"
                  size="sm"
                  iconName="ArrowRight"
                  iconPosition="right"
                  onClick={() => onViewProject(project)}
                  className="bg-brand-primary hover:bg-brand-primary/90"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* View All Projects Button */}
      <div className="text-center mt-8">
        <Button
          variant="outline"
          size="lg"
          iconName="Grid3X3"
          iconPosition="left"
          className="text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white"
        >
          View All Projects
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProjects;