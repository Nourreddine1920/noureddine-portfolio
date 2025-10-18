import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CertificationTracker = () => {
  const [selectedCategory, setSelectedCategory] = useState('completed');

  const certifications = {
    completed: [
      {
        name: 'STM32 Certified Developer',
        issuer: 'STMicroelectronics',
        date: '2023-08-15',
        validUntil: '2026-08-15',
        credentialId: 'STM32-DEV-2023-8472',
        skills: ['STM32 HAL', 'CubeMX', 'Debugging', 'Peripheral Configuration'],
        level: 'Professional',
        description: 'Comprehensive certification covering STM32 microcontroller development, HAL programming, and advanced debugging techniques.',
        verificationUrl: 'https://verify.st.com/cert/STM32-DEV-2023-8472',
        badge: 'https://images.credly.com/size/340x340/images/stm32-developer.png'
      },
      {
        name: 'ARM Accredited Engineer',
        issuer: 'ARM Limited',
        date: '2023-03-22',
        validUntil: '2025-03-22',
        credentialId: 'ARM-AE-2023-1847',
        skills: ['ARM Architecture', 'Cortex-M Programming', 'CMSIS', 'Performance Optimization'],
        level: 'Expert',
        description: 'Advanced certification demonstrating expertise in ARM Cortex-M architecture and embedded software development.',
        verificationUrl: 'https://verify.arm.com/cert/ARM-AE-2023-1847',
        badge: 'https://images.credly.com/size/340x340/images/arm-accredited.png'
      },
      {
        name: 'FreeRTOS Certified Professional',
        issuer: 'Amazon Web Services',
        date: '2022-11-10',
        validUntil: '2025-11-10',
        credentialId: 'FRTOS-PRO-2022-9384',
        skills: ['Task Management', 'Synchronization', 'Memory Management', 'Real-time Systems'],
        level: 'Professional',
        description: 'Certification validating proficiency in FreeRTOS development and real-time system design principles.',
        verificationUrl: 'https://verify.aws.com/cert/FRTOS-PRO-2022-9384',
        badge: 'https://images.credly.com/size/340x340/images/freertos-certified.png'
      },
      {
        name: 'CAN Protocol Expert',
        issuer: 'Vector Informatik',
        date: '2023-06-05',
        validUntil: '2026-06-05',
        credentialId: 'VEC-CAN-EXP-2023-5621',
        skills: ['CAN Protocol', 'CANopen', 'J1939', 'Network Diagnostics'],
        level: 'Expert',
        description: 'Expert-level certification in CAN bus protocol implementation and automotive network design.',
        verificationUrl: 'https://verify.vector.com/cert/VEC-CAN-EXP-2023-5621',
        badge: 'https://images.credly.com/size/340x340/images/can-expert.png'
      },
      {
        name: 'Embedded C Certification',
        issuer: 'Udemy',
        date: '2023-01-18',
        validUntil: '2026-01-18',
        credentialId: 'AWS-IOT-2023-7429',
        skills: ['Embedded C', 'STM32', 'HAL', 'LL'],
        level: 'Professional',
        description: 'Certification demonstrating expertise in Embedded C and the use of Embedded C in microcontrollers.',
        verificationUrl: 'https://verify.udemy.com/cert/AWS-IOT-2023-7429',
        badge: 'https://images.credly.com/size/340x340/images/aws-iot-certified.png'
      }
    ],
    inProgress: [
      {
        name: 'ISO 26262 Functional Safety',
        issuer: 'TÜV SÜD',
        startDate: '2024-09-01',
        expectedCompletion: '2024-12-15',
        progress: 65,
        skills: ['Functional Safety', 'ASIL Classification', 'Safety Analysis', 'Verification & Validation'],
        level: 'Expert',
        description: 'Comprehensive training in automotive functional safety standards and safety-critical system development.',
        modules: [
          { name: 'Safety Lifecycle', status: 'completed' },
          { name: 'Hazard Analysis', status: 'completed' },
          { name: 'Safety Requirements', status: 'in-progress' },
          { name: 'Safety Architecture', status: 'pending' },
          { name: 'Verification & Validation', status: 'pending' }
        ]
      },
      {
        name: 'Azure IoT Developer',
        issuer: 'Microsoft',
        startDate: '2024-10-01',
        expectedCompletion: '2024-12-30',
        progress: 40,
        skills: ['Azure IoT Hub', 'Device Twins', 'IoT Edge', 'Stream Analytics'],
        level: 'Professional',
        description: 'Microsoft Azure IoT platform certification for cloud-connected device development and management.',
        modules: [
          { name: 'IoT Hub Fundamentals', status: 'completed' },
          { name: 'Device Management', status: 'in-progress' },
          { name: 'IoT Edge Development', status: 'pending' },
          { name: 'Data Processing', status: 'pending' }
        ]
      }
    ],
    planned: [
      {
        name: 'AUTOSAR Certified Professional',
        issuer: 'AUTOSAR Development Partnership',
        plannedStart: '2025-01-15',
        estimatedDuration: '4 months',
        skills: ['AUTOSAR Architecture', 'Classic Platform', 'Adaptive Platform', 'Methodology'],
        level: 'Expert',
        description: 'Advanced certification in AUTOSAR automotive software architecture and development methodology.',
        prerequisites: ['C++ Programming', 'Automotive Systems', 'Software Architecture'],
        cost: '$2,500'
      },
      {
        name: 'Automotive Cybersecurity',
        issuer: 'SAE International',
        plannedStart: '2025-03-01',
        estimatedDuration: '3 months',
        skills: ['Cybersecurity Framework', 'Threat Analysis', 'Security Testing', 'Incident Response'],
        level: 'Professional',
        description: 'Certification in automotive cybersecurity principles and implementation strategies.',
        prerequisites: ['Network Security', 'Automotive Systems', 'Risk Assessment'],
        cost: '$1,800'
      },
      {
        name: 'LoRaWAN Certified Engineer',
        issuer: 'LoRa Alliance',
        plannedStart: '2025-02-01',
        estimatedDuration: '2 months',
        skills: ['LoRaWAN Protocol', 'Network Architecture', 'Device Management', 'Security'],
        level: 'Professional',
        description: 'Certification in LoRaWAN technology for long-range IoT applications and network deployment.',
        prerequisites: ['Wireless Communication', 'IoT Fundamentals', 'Network Protocols'],
        cost: '$1,200'
      }
    ]
  };

  const getCategoryStats = () => {
    return {
      completed: certifications?.completed?.length,
      inProgress: certifications?.inProgress?.length,
      planned: certifications?.planned?.length
    };
  };

  const stats = getCategoryStats();

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'bg-red-100 text-red-700 border-red-200';
      case 'Professional': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Associate': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isExpiringSoon = (validUntil) => {
    const expiryDate = new Date(validUntil);
    const sixMonthsFromNow = new Date();
    sixMonthsFromNow?.setMonth(sixMonthsFromNow?.getMonth() + 6);
    return expiryDate <= sixMonthsFromNow;
  };

  return (
    <div className="bg-white rounded-xl shadow-card border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Certification Tracker</h2>
          <p className="text-text-secondary">Professional development and skill validation progress</p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Award" size={20} className="text-brand-primary" />
          <span className="text-sm font-medium text-brand-primary">
            {stats?.completed + stats?.inProgress + stats?.planned} Total Certifications
          </span>
        </div>
      </div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(stats)?.map(([category, count]) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-brand-primary text-white shadow-interactive'
                : 'bg-brand-surface text-text-secondary hover:text-text-primary hover:bg-brand-surface/80'
            }`}
          >
            <Icon 
              name={
                category === 'completed' ? 'CheckCircle' :
                category === 'inProgress' ? 'Clock' : 'Calendar'
              } 
              size={16} 
            />
            <span className="capitalize">{category?.replace(/([A-Z])/g, ' $1')?.trim()}</span>
            <span className="bg-white/20 px-2 py-1 rounded text-xs">{count}</span>
          </button>
        ))}
      </div>
      {/* Completed Certifications */}
      {selectedCategory === 'completed' && (
        <div className="space-y-4">
          {certifications?.completed?.map((cert, index) => (
            <div key={index} className="bg-brand-surface rounded-lg p-4 border border-border hover:border-brand-primary/30 transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-text-primary">{cert?.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs border ${getLevelColor(cert?.level)}`}>
                      {cert?.level}
                    </span>
                    {isExpiringSoon(cert?.validUntil) && (
                      <span className="px-2 py-1 bg-warning/10 text-warning rounded text-xs border border-warning/20">
                        Expires Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary mb-2">{cert?.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <span>Issued by {cert?.issuer}</span>
                    <span>•</span>
                    <span>Earned {formatDate(cert?.date)}</span>
                    <span>•</span>
                    <span>Valid until {formatDate(cert?.validUntil)}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="ExternalLink" size={16} className="text-brand-primary" />
                  <Icon name="Download" size={16} className="text-text-secondary" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-medium text-text-primary mb-2">Skills Validated</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert?.skills?.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-success/10 text-success rounded text-xs border border-success/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-text-primary mb-2">Credential Details</h4>
                  <div className="text-xs text-text-secondary space-y-1">
                    <div>ID: {cert?.credentialId}</div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Shield" size={12} className="text-success" />
                      <span>Verified Credential</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* In Progress Certifications */}
      {selectedCategory === 'inProgress' && (
        <div className="space-y-4">
          {certifications?.inProgress?.map((cert, index) => (
            <div key={index} className="bg-brand-surface rounded-lg p-4 border border-border">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-text-primary">{cert?.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs border ${getLevelColor(cert?.level)}`}>
                      {cert?.level}
                    </span>
                    <span className="px-2 py-1 bg-warning/10 text-warning rounded text-xs border border-warning/20">
                      {cert?.progress}% Complete
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-2">{cert?.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <span>Started {formatDate(cert?.startDate)}</span>
                    <span>•</span>
                    <span>Expected completion {formatDate(cert?.expectedCompletion)}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-text-secondary mb-1">
                  <span>Overall Progress</span>
                  <span>{cert?.progress}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-warning to-warning/80"
                    style={{ width: `${cert?.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Modules Progress */}
              {cert?.modules && (
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-text-primary mb-2">Module Progress</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {cert?.modules?.map((module, idx) => (
                      <div key={idx} className="flex items-center space-x-2 p-2 bg-white rounded border border-border">
                        <Icon 
                          name={
                            module.status === 'completed' ? 'CheckCircle' :
                            module.status === 'in-progress' ? 'Clock' : 'Circle'
                          } 
                          size={14} 
                          className={
                            module.status === 'completed' ? 'text-success' :
                            module.status === 'in-progress' ? 'text-warning' : 'text-text-secondary'
                          }
                        />
                        <span className="text-xs text-text-primary">{module.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-medium text-text-primary mb-2">Target Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {cert?.skills?.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-warning/10 text-warning rounded text-xs border border-warning/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Planned Certifications */}
      {selectedCategory === 'planned' && (
        <div className="space-y-4">
          {certifications?.planned?.map((cert, index) => (
            <div key={index} className="bg-brand-surface rounded-lg p-4 border border-border border-dashed">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-text-primary">{cert?.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs border ${getLevelColor(cert?.level)}`}>
                      {cert?.level}
                    </span>
                    <span className="px-2 py-1 bg-text-secondary/10 text-text-secondary rounded text-xs border border-text-secondary/20">
                      Planned
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-2">{cert?.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <span>Planned start {formatDate(cert?.plannedStart)}</span>
                    <span>•</span>
                    <span>Duration {cert?.estimatedDuration}</span>
                    <span>•</span>
                    <span>Investment {cert?.cost}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-medium text-text-primary mb-2">Target Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert?.skills?.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-text-secondary/10 text-text-secondary rounded text-xs border border-text-secondary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-medium text-text-primary mb-2">Prerequisites</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert?.prerequisites?.map((prereq, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-success/10 text-success rounded text-xs border border-success/20"
                      >
                        ✓ {prereq}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Summary Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-success/10 rounded-lg p-4 border border-success/20">
          <div className="flex items-center space-x-3">
            <Icon name="Award" size={24} className="text-success" />
            <div>
              <div className="text-2xl font-bold text-success">{stats?.completed}</div>
              <div className="text-sm text-success/80">Completed</div>
            </div>
          </div>
        </div>
        <div className="bg-warning/10 rounded-lg p-4 border border-warning/20">
          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={24} className="text-warning" />
            <div>
              <div className="text-2xl font-bold text-warning">{stats?.inProgress}</div>
              <div className="text-sm text-warning/80">In Progress</div>
            </div>
          </div>
        </div>
        <div className="bg-brand-primary/10 rounded-lg p-4 border border-brand-primary/20">
          <div className="flex items-center space-x-3">
            <Icon name="Calendar" size={24} className="text-brand-primary" />
            <div>
              <div className="text-2xl font-bold text-brand-primary">{stats?.planned}</div>
              <div className="text-sm text-brand-primary/80">Planned</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationTracker;