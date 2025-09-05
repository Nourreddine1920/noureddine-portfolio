import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = ({ onViewProject }) => {
  const [activeCategory, setActiveCategory] = useState('All');

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
      teamSize: 8,
      github: 'https://github.com/Nourreddine1920/automotive-ecu-project'
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
      teamSize: 6,
      github: 'https://github.com/Nourreddine1920/iot-smart-city'
    },
    {
      id: 'autonomous-robot',
      title: 'Autonomous Mobile Robot',
      description: 'Self-navigating robot platform with computer vision and obstacle avoidance capabilities.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
      category: 'Robotics',
      technologies: ['ROS2', 'Python', 'OpenCV', 'TensorFlow'],
      metrics: {
        accuracy: '95%',
        speed: '2m/s',
        battery: '8hrs'
      },
      highlights: [
        'SLAM-based navigation',
        'Real-time object detection',
        'Dynamic path planning',
        'Remote monitoring interface'
      ],
      complexity: 'Intermediate',
      duration: '9 months',
      teamSize: 4,
      github: 'https://github.com/Nourreddine1920/autonomous-robot'
    },
    {
      id: 'industrial-monitoring',
      title: 'Industrial IoT Monitoring System',
      description: 'Real-time monitoring and predictive maintenance system for industrial equipment.',
      image: 'https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?w=800&h=600&fit=crop',
      category: 'IoT',
      technologies: ['Node.js', 'MQTT', 'InfluxDB', 'Docker'],
      metrics: {
        devices: '200+',
        dataPoints: '10K/s',
        accuracy: '99%'
      },
      highlights: [
        'Real-time equipment monitoring',
        'Predictive maintenance alerts',
        'Energy consumption optimization',
        'Custom dashboard interface'
      ],
      complexity: 'Advanced',
      duration: '15 months',
      teamSize: 5,
      github: 'https://github.com/Nourreddine1920/industrial-monitoring'
    }
  ];

  const categories = ['All', ...new Set(featuredProjects.map(project => project.category))];

  const filteredProjects = activeCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter(project => project.category === activeCategory);

  const getComplexityColor = (complexity) => {
    switch (complexity.toLowerCase()) {
      case 'basic': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-blue-600 bg-blue-100';
      case 'advanced': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-brand-primary text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-white rounded-xl border border-border shadow-card overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded-md bg-white/20 text-white text-xs font-medium backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-text-secondary mb-4">{project.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-text-secondary mb-1">Duration</div>
                  <div className="text-brand-primary font-bold">{project.duration}</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-text-secondary mb-1">Team</div>
                  <div className="text-brand-primary font-bold">{project.teamSize} devs</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-text-secondary mb-1">Level</div>
                  <div className={`text-sm font-medium ${getComplexityColor(project.complexity)}`}>
                    {project.complexity}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button
                  variant="primary"
                  onClick={() => onViewProject(project)}
                  className="flex items-center space-x-2"
                >
                  <span>View Details</span>
                  <Icon name="ArrowRight" size={16} />
                </Button>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <Icon name="Github" size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
