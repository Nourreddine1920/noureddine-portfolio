import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsInAction = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const skillProjects = [
    {
      id: 'automotive-ecu',
      title: 'Automotive Engine Control Unit',
      category: 'Automotive',
      duration: '8 months',
      team: '4 engineers',
      status: 'completed',
      impact: {
        performance: '+15% fuel efficiency',
        reliability: '99.8% uptime',
        cost: '-20% development time'
      },
      skillsApplied: [
        {
          skill: 'STM32 Programming',
          application: 'Real-time engine parameter monitoring and control algorithms',
          complexity: 'Expert',
          outcome: 'Achieved 1ms response time for critical control loops'
        },
        {
          skill: 'CAN Bus Protocol',
          application: 'Multi-ECU communication network design and implementation',
          complexity: 'Expert',
          outcome: 'Designed fault-tolerant network with 99.9% message delivery'
        },
        {
          skill: 'FreeRTOS',
          application: 'Multi-task real-time system for concurrent sensor processing',
          complexity: 'Advanced',
          outcome: 'Optimized task scheduling reducing CPU usage by 25%'
        },
        {
          skill: 'ISO 26262',
          application: 'Safety-critical system design and validation',
          complexity: 'Advanced',
          outcome: 'Achieved ASIL-C compliance for safety functions'
        }
      ],
      technologies: ['STM32F4', 'CAN', 'FreeRTOS', 'MISRA C', 'Vector CANoe'],
      challenges: [
        'Real-time constraints with sub-millisecond response requirements',
        'Safety-critical system validation and verification',
        'Multi-ECU network synchronization and fault tolerance'
      ],
      solutions: [
        'Implemented priority-based task scheduling with interrupt optimization',
        'Developed comprehensive safety monitoring with redundant sensors',
        'Created adaptive network protocol with automatic error recovery'
      ],
      metrics: {
        codeQuality: '98% MISRA compliance',
        testCoverage: '95% code coverage',
        performance: '1ms max response time',
        reliability: '10,000+ hours MTBF'
      }
    },
    {
      id: 'iot-gateway',
      title: 'Industrial IoT Gateway',
      category: 'IoT',
      duration: '6 months',
      team: '3 engineers',
      status: 'completed',
      impact: {
        connectivity: '500+ devices supported',
        efficiency: '+30% data processing',
        scalability: '10x device capacity'
      },
      skillsApplied: [
        {
          skill: 'ESP32 Development',
          application: 'Multi-protocol wireless communication hub',
          complexity: 'Expert',
          outcome: 'Achieved simultaneous WiFi, Bluetooth, and LoRa connectivity'
        },
        {
          skill: 'MQTT Protocol',
          application: 'Efficient device-to-cloud messaging system',
          complexity: 'Advanced',
          outcome: 'Reduced bandwidth usage by 40% with optimized message queuing'
        },
        {
          skill: 'Modbus Integration',
          application: 'Legacy industrial equipment connectivity',
          complexity: 'Advanced',
          outcome: 'Successfully integrated 50+ legacy devices to IoT network'
        },
        {
          skill: 'Edge Computing',
          application: 'Local data processing and analytics',
          complexity: 'Intermediate',
          outcome: 'Reduced cloud processing load by 60% with edge analytics'
        }
      ],
      technologies: ['ESP32', 'MQTT', 'Modbus', 'LoRaWAN', 'TensorFlow Lite'],
      challenges: [
        'Multi-protocol communication management',
        'Real-time data processing with limited resources',
        'Secure device authentication and data encryption'
      ],
      solutions: [
        'Developed unified communication abstraction layer',
        'Implemented efficient data buffering and compression',
        'Created certificate-based device authentication system'
      ],
      metrics: {
        throughput: '10,000 messages/second',
        latency: '< 50ms average',
        uptime: '99.5% availability',
        security: 'AES-256 encryption'
      }
    },
    {
      id: 'motor-controller',
      title: 'Precision Motor Control System',
      category: 'Industrial',
      duration: '5 months',
      team: '2 engineers',
      status: 'completed',
      impact: {
        precision: '±0.1° positioning accuracy',
        efficiency: '+25% energy savings',
        noise: '-15dB noise reduction'
      },
      skillsApplied: [
        {
          skill: 'ARM Cortex-M Programming',
          application: 'High-frequency PWM generation and control algorithms',
          complexity: 'Expert',
          outcome: 'Achieved 20kHz PWM frequency with precise duty cycle control'
        },
        {
          skill: 'PID Control',
          application: 'Closed-loop position and velocity control',
          complexity: 'Advanced',
          outcome: 'Optimized control parameters for ±0.1° positioning accuracy'
        },
        {
          skill: 'SPI Communication',
          application: 'High-speed encoder and sensor data acquisition',
          complexity: 'Advanced',
          outcome: 'Implemented 10MHz SPI for real-time position feedback'
        },
        {
          skill: 'Power Electronics',
          application: 'Efficient motor drive circuit design and control',
          complexity: 'Intermediate',
          outcome: 'Achieved 95% power conversion efficiency'
        }
      ],
      technologies: ['STM32G4', 'SPI', 'PWM', 'ADC', 'Optical Encoders'],
      challenges: [
        'High-frequency control loop stability',
        'Electromagnetic interference mitigation',
        'Thermal management in compact design'
      ],
      solutions: [
        'Implemented adaptive PID with feedforward compensation',
        'Designed EMI filtering and shielding strategy',
        'Created intelligent thermal monitoring and protection'
      ],
      metrics: {
        accuracy: '±0.1° positioning',
        speed: '6000 RPM max',
        efficiency: '95% power conversion',
        response: '10ms settling time'
      }
    },
    {
      id: 'sensor-network',
      title: 'Wireless Sensor Network',
      category: 'IoT',
      duration: '4 months',
      team: '3 engineers',
      status: 'in-progress',
      impact: {
        coverage: '10km² monitoring area',
        battery: '5+ years battery life',
        accuracy: '±1% sensor precision'
      },
      skillsApplied: [
        {
          skill: 'LoRaWAN Development',
          application: 'Long-range, low-power sensor communication',
          complexity: 'Advanced',
          outcome: 'Achieved 15km communication range with 10-year battery life'
        },
        {
          skill: 'Power Management',
          application: 'Ultra-low power sensor node design',
          complexity: 'Expert',
          outcome: 'Reduced power consumption to 2µA in sleep mode'
        },
        {
          skill: 'Sensor Calibration',
          application: 'Multi-parameter environmental monitoring',
          complexity: 'Advanced',
          outcome: 'Achieved ±1% accuracy across temperature range'
        },
        {
          skill: 'Mesh Networking',
          application: 'Self-healing sensor network topology',
          complexity: 'Intermediate',
          outcome: 'Implemented automatic route discovery and healing'
        }
      ],
      technologies: ['STM32L4', 'LoRaWAN', 'I2C Sensors', 'Solar Harvesting'],
      challenges: [
        'Ultra-low power consumption requirements',
        'Harsh environmental conditions',
        'Network scalability and reliability'
      ],
      solutions: [
        'Implemented intelligent sleep/wake scheduling',
        'Designed weatherproof enclosures with IP67 rating',
        'Created adaptive mesh routing algorithms'
      ],
      metrics: {
        range: '15km line-of-sight',
        battery: '10+ years estimated',
        nodes: '1000+ network capacity',
        reliability: '99.2% uptime'
      }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-success bg-success/10 border-success/20';
      case 'in-progress': return 'text-warning bg-warning/10 border-warning/20';
      case 'planned': return 'text-text-secondary bg-border/50 border-border';
      default: return 'text-text-secondary bg-border/50 border-border';
    }
  };

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'Expert': return 'text-red-700 bg-red-100 border-red-200';
      case 'Advanced': return 'text-orange-700 bg-orange-100 border-orange-200';
      case 'Intermediate': return 'text-blue-700 bg-blue-100 border-blue-200';
      case 'Beginner': return 'text-green-700 bg-green-100 border-green-200';
      default: return 'text-gray-700 bg-gray-100 border-gray-200';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Automotive': return 'Car';
      case 'IoT': return 'Wifi';
      case 'Industrial': return 'Factory';
      default: return 'Code';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-card border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Skills in Action</h2>
          <p className="text-text-secondary">Real-world applications and measurable outcomes</p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Zap" size={20} className="text-brand-primary" />
          <span className="text-sm font-medium text-brand-primary">Live Project Showcase</span>
        </div>
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {skillProjects?.map((project) => (
          <div
            key={project?.id}
            className={`relative group cursor-pointer transition-all duration-300 ${
              selectedProject === project?.id ? 'scale-105' : 'hover:scale-102'
            }`}
            onClick={() => setSelectedProject(selectedProject === project?.id ? null : project?.id)}
          >
            <div className="bg-brand-surface rounded-lg p-6 border border-border hover:border-brand-primary/30 hover:shadow-card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                    <Icon name={getCategoryIcon(project?.category)} size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">{project?.title}</h3>
                    <p className="text-sm text-text-secondary">{project?.category}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(project?.status)}`}>
                  {project?.status?.replace('-', ' ')}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="Clock" size={14} />
                  <span>{project?.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="Users" size={14} />
                  <span>{project?.team}</span>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-text-primary mb-2">Key Impact</h4>
                <div className="grid grid-cols-1 gap-1">
                  {Object.entries(project?.impact)?.map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between text-xs">
                      <span className="text-text-secondary capitalize">{key}:</span>
                      <span className="font-medium text-success">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Preview */}
              <div className="mb-4">
                <h4 className="text-xs font-medium text-text-primary mb-2">Skills Applied</h4>
                <div className="flex flex-wrap gap-1">
                  {project?.skillsApplied?.slice(0, 3)?.map((skillApp, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-brand-primary/10 text-brand-primary rounded text-xs"
                    >
                      {skillApp?.skill}
                    </span>
                  ))}
                  {project?.skillsApplied?.length > 3 && (
                    <span className="px-2 py-1 bg-text-secondary/10 text-text-secondary rounded text-xs">
                      +{project?.skillsApplied?.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">
                  {project?.skillsApplied?.length} skills demonstrated
                </span>
                <Icon 
                  name={selectedProject === project?.id ? "ChevronUp" : "ChevronDown"} 
                  size={16} 
                  className="text-brand-primary" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Detailed Project View */}
      {selectedProject && (
        <div className="bg-brand-surface rounded-lg p-6 border border-border">
          {(() => {
            const project = skillProjects?.find(p => p?.id === selectedProject);
            return (
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
                    <Icon name={getCategoryIcon(project?.category)} size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">{project?.title}</h3>
                    <p className="text-text-secondary">{project?.category} • {project?.duration} • {project?.team}</p>
                  </div>
                </div>
                {/* Skills Applied Detail */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-4">Skills Applied & Outcomes</h4>
                  <div className="space-y-4">
                    {project?.skillsApplied?.map((skillApp, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 border border-border">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-medium text-text-primary">{skillApp?.skill}</h5>
                          <span className={`px-2 py-1 rounded text-xs border ${getComplexityColor(skillApp?.complexity)}`}>
                            {skillApp?.complexity}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary mb-2">{skillApp?.application}</p>
                        <div className="flex items-start space-x-2">
                          <Icon name="Target" size={14} className="text-success mt-0.5" />
                          <p className="text-sm text-success">{skillApp?.outcome}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Technologies & Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project?.technologies?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm border border-accent/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Performance Metrics</h4>
                    <div className="space-y-2">
                      {Object.entries(project?.metrics)?.map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between text-sm">
                          <span className="text-text-secondary capitalize">{key?.replace(/([A-Z])/g, ' $1')?.trim()}:</span>
                          <span className="font-medium text-text-primary">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Technical Challenges</h4>
                    <div className="space-y-2">
                      {project?.challenges?.map((challenge, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Icon name="AlertTriangle" size={14} className="text-warning mt-0.5" />
                          <p className="text-sm text-text-secondary">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Solutions Implemented</h4>
                    <div className="space-y-2">
                      {project?.solutions?.map((solution, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={14} className="text-success mt-0.5" />
                          <p className="text-sm text-text-secondary">{solution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
      {/* Skills Summary */}
      <div className="mt-8 bg-gradient-to-r from-brand-surface to-white rounded-lg p-6 border border-border">
        <h3 className="font-semibold text-text-primary mb-4">Skills Application Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-primary">{skillProjects?.length}</div>
            <div className="text-sm text-text-secondary">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success">
              {skillProjects?.reduce((acc, project) => acc + project?.skillsApplied?.length, 0)}
            </div>
            <div className="text-sm text-text-secondary">Skills Applied</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-warning">
              {skillProjects?.filter(p => p?.status === 'completed')?.length}
            </div>
            <div className="text-sm text-text-secondary">Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">
              {skillProjects?.reduce((acc, project) => acc + project?.technologies?.length, 0)}
            </div>
            <div className="text-sm text-text-secondary">Technologies</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsInAction;