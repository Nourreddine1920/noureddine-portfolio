import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const LearningPaths = () => {
  const [selectedPath, setSelectedPath] = useState(null);

  const learningPaths = [
    {
      id: 'automotive-ecu',
      title: 'Automotive ECU Development',
      icon: 'Car',
      color: 'from-red-600 to-red-800',
      duration: '12-18 months',
      difficulty: 'Advanced',
      description: 'Comprehensive path for developing automotive electronic control units with focus on safety-critical systems.',
      prerequisites: ['C/C++ Programming', 'Microcontroller Basics', 'Electronics Fundamentals'],
      milestones: [
        {
          title: 'Foundation Phase',
          duration: '3 months',
          status: 'completed',
          skills: ['Automotive Standards (ISO 26262)', 'CAN Protocol', 'AUTOSAR Basics'],
          projects: ['Basic ECU Simulator', 'CAN Bus Communication']
        },
        {
          title: 'Development Phase',
          duration: '6 months',
          status: 'completed',
          skills: ['AUTOSAR Classic Platform', 'Diagnostics (UDS)', 'Bootloader Development'],
          projects: ['Engine Control Module', 'Diagnostic Interface', 'OTA Update System']
        },
        {
          title: 'Advanced Phase',
          duration: '6 months',
          status: 'in-progress',
          skills: ['Functional Safety', 'AUTOSAR Adaptive', 'Cybersecurity'],
          projects: ['Safety-Critical ECU', 'Adaptive AUTOSAR Application', 'Secure Communication']
        },
        {
          title: 'Specialization Phase',
          duration: '3 months',
          status: 'planned',
          skills: ['AI/ML Integration', 'Edge Computing', 'V2X Communication'],
          projects: ['Intelligent ECU', 'Edge AI Processing', 'Connected Vehicle System']
        }
      ],
      certifications: [
        { name: 'AUTOSAR Certified Professional', status: 'completed' },
        { name: 'ISO 26262 Functional Safety', status: 'in-progress' },
        { name: 'Automotive Cybersecurity', status: 'planned' }
      ],
      careerOutcomes: ['Senior Automotive Engineer', 'ECU Team Lead', 'Automotive Systems Architect']
    },
    {
      id: 'iot-programming',
      title: 'IoT Device Programming',
      icon: 'Wifi',
      color: 'from-blue-600 to-blue-800',
      duration: '8-12 months',
      difficulty: 'Intermediate',
      description: 'End-to-end IoT development from device programming to cloud integration and data analytics.',
      prerequisites: ['Embedded C', 'Basic Networking', 'Sensor Interfacing'],
      milestones: [
        {
          title: 'IoT Fundamentals',
          duration: '2 months',
          status: 'completed',
          skills: ['IoT Architecture', 'Wireless Protocols', 'Sensor Integration'],
          projects: ['Temperature Monitor', 'Wireless Sensor Node']
        },
        {
          title: 'Connectivity & Communication',
          duration: '3 months',
          status: 'completed',
          skills: ['WiFi/Bluetooth', 'MQTT/CoAP', 'LoRaWAN'],
          projects: ['Smart Home Hub', 'Environmental Monitoring', 'Long-Range Sensor Network']
        },
        {
          title: 'Cloud Integration',
          duration: '3 months',
          status: 'in-progress',
          skills: ['Cloud Platforms', 'Data Processing', 'Device Management'],
          projects: ['IoT Dashboard', 'Predictive Maintenance', 'Fleet Management']
        },
        {
          title: 'Advanced IoT',
          duration: '4 months',
          status: 'planned',
          skills: ['Edge Computing', 'AI/ML at Edge', 'Security'],
          projects: ['Edge AI Camera', 'Predictive Analytics', 'Secure IoT Gateway']
        }
      ],
      certifications: [
        { name: 'AWS IoT Core Certified', status: 'completed' },
        { name: 'Azure IoT Developer', status: 'in-progress' },
        { name: 'LoRaWAN Certified', status: 'planned' }
      ],
      careerOutcomes: ['IoT Solutions Architect', 'Connected Products Engineer', 'IoT Platform Developer']
    },
    {
      id: 'industrial-automation',
      title: 'Industrial Automation',
      icon: 'Factory',
      color: 'from-green-600 to-green-800',
      duration: '10-14 months',
      difficulty: 'Advanced',
      description: 'Industrial control systems, PLCs, SCADA, and Industry 4.0 technologies for manufacturing automation.',
      prerequisites: ['Control Systems', 'Industrial Networks', 'Safety Systems'],
      milestones: [
        {
          title: 'Control Systems Basics',
          duration: '3 months',
          status: 'completed',
          skills: ['PID Control', 'Motor Control', 'Sensor Calibration'],
          projects: ['Temperature Controller', 'Motor Speed Control', 'Process Monitor']
        },
        {
          title: 'Industrial Communication',
          duration: '3 months',
          status: 'completed',
          skills: ['Modbus', 'Profibus/Profinet', 'EtherCAT'],
          projects: ['Modbus Gateway', 'Profinet Device', 'Multi-protocol Bridge']
        },
        {
          title: 'SCADA & HMI',
          duration: '4 months',
          status: 'in-progress',
          skills: ['SCADA Systems', 'HMI Design', 'Data Historian'],
          projects: ['Plant Monitoring System', 'Operator Interface', 'Production Analytics']
        },
        {
          title: 'Industry 4.0',
          duration: '4 months',
          status: 'planned',
          skills: ['Digital Twin', 'Predictive Maintenance', 'Cybersecurity'],
          projects: ['Smart Factory', 'Predictive System', 'Secure Industrial Network']
        }
      ],
      certifications: [
        { name: 'Siemens TIA Portal Certified', status: 'completed' },
        { name: 'Rockwell Automation Certified', status: 'in-progress' },
        { name: 'Industrial Cybersecurity', status: 'planned' }
      ],
      careerOutcomes: ['Automation Engineer', 'Control Systems Specialist', 'Industry 4.0 Consultant']
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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return 'CheckCircle';
      case 'in-progress': return 'Clock';
      case 'planned': return 'Circle';
      default: return 'Circle';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-card border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Learning Paths & Progression</h2>
          <p className="text-text-secondary">Structured pathways for embedded systems specialization</p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="TrendingUp" size={20} className="text-brand-primary" />
          <span className="text-sm font-medium text-brand-primary">Career Development</span>
        </div>
      </div>
      {/* Learning Paths Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {learningPaths?.map((path) => (
          <div
            key={path?.id}
            className={`relative group cursor-pointer transition-all duration-300 ${
              selectedPath === path?.id ? 'scale-105' : 'hover:scale-102'
            }`}
            onClick={() => setSelectedPath(selectedPath === path?.id ? null : path?.id)}
          >
            <div className="bg-brand-surface rounded-lg p-6 border border-border hover:border-brand-primary/30 hover:shadow-card">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${path?.color} flex items-center justify-center mb-4`}>
                <Icon name={path?.icon} size={24} className="text-white" />
              </div>
              
              <h3 className="font-semibold text-text-primary mb-2">{path?.title}</h3>
              <p className="text-sm text-text-secondary mb-4 line-clamp-2">{path?.description}</p>
              
              <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                <span className="flex items-center space-x-1">
                  <Icon name="Clock" size={12} />
                  <span>{path?.duration}</span>
                </span>
                <span className={`px-2 py-1 rounded ${
                  path?.difficulty === 'Advanced' ? 'bg-red-100 text-red-700' :
                  path?.difficulty === 'Intermediate'? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                }`}>
                  {path?.difficulty}
                </span>
              </div>

              {/* Progress Indicator */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-text-secondary mb-1">
                  <span>Progress</span>
                  <span>{Math.round((path?.milestones?.filter(m => m?.status === 'completed')?.length / path?.milestones?.length) * 100)}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${path?.color}`}
                    style={{ width: `${(path?.milestones?.filter(m => m?.status === 'completed')?.length / path?.milestones?.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">
                  {path?.milestones?.filter(m => m?.status === 'completed')?.length}/{path?.milestones?.length} milestones
                </span>
                <Icon 
                  name={selectedPath === path?.id ? "ChevronUp" : "ChevronDown"} 
                  size={16} 
                  className="text-brand-primary" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Detailed Path View */}
      {selectedPath && (
        <div className="bg-brand-surface rounded-lg p-6 border border-border">
          {(() => {
            const path = learningPaths?.find(p => p?.id === selectedPath);
            return (
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${path?.color} flex items-center justify-center`}>
                    <Icon name={path?.icon} size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-1">{path?.title}</h3>
                    <p className="text-text-secondary">{path?.description}</p>
                  </div>
                </div>
                {/* Prerequisites */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Prerequisites</h4>
                  <div className="flex flex-wrap gap-2">
                    {path?.prerequisites?.map((prereq, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white rounded-full text-sm text-text-secondary border border-border"
                      >
                        {prereq}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Milestones Timeline */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-4">Learning Milestones</h4>
                  <div className="space-y-4">
                    {path?.milestones?.map((milestone, idx) => (
                      <div key={idx} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          <Icon 
                            name={getStatusIcon(milestone?.status)} 
                            size={20} 
                            className={milestone?.status === 'completed' ? 'text-success' : 
                                     milestone?.status === 'in-progress' ? 'text-warning' : 'text-text-secondary'} 
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-text-primary">{milestone?.title}</h5>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(milestone?.status)}`}>
                                {milestone?.status?.replace('-', ' ')}
                              </span>
                              <span className="text-xs text-text-secondary">{milestone?.duration}</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h6 className="text-xs font-medium text-text-primary mb-1">Skills</h6>
                              <div className="flex flex-wrap gap-1">
                                {milestone?.skills?.map((skill, skillIdx) => (
                                  <span
                                    key={skillIdx}
                                    className="px-2 py-1 bg-brand-primary/10 text-brand-primary rounded text-xs"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h6 className="text-xs font-medium text-text-primary mb-1">Projects</h6>
                              <div className="flex flex-wrap gap-1">
                                {milestone?.projects?.map((project, projectIdx) => (
                                  <span
                                    key={projectIdx}
                                    className="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                                  >
                                    {project}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Certifications & Career Outcomes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Target Certifications</h4>
                    <div className="space-y-2">
                      {path?.certifications?.map((cert, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg border border-border">
                          <span className="text-sm text-text-primary">{cert?.name}</span>
                          <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(cert?.status)}`}>
                            {cert?.status?.replace('-', ' ')}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Career Outcomes</h4>
                    <div className="space-y-2">
                      {path?.careerOutcomes?.map((outcome, idx) => (
                        <div key={idx} className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-border">
                          <Icon name="Target" size={16} className="text-success" />
                          <span className="text-sm text-text-primary">{outcome}</span>
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
    </div>
  );
};

export default LearningPaths;