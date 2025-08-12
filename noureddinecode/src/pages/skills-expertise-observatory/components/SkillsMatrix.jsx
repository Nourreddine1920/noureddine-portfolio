import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState('microcontrollers');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    microcontrollers: {
      title: 'Microcontroller Programming',
      icon: 'Cpu',
      color: 'from-blue-600 to-blue-800',
      skills: [
        {
          name: 'STM32 Series',
          proficiency: 95,
          experience: '5+ years',
          projects: ['Automotive ECU', 'IoT Gateway', 'Industrial Controller'],
          certifications: ['STM32 Certified Developer'],
          description: 'Expert-level proficiency in STM32 microcontroller programming with extensive experience in HAL, LL drivers, and bare-metal development.'
        },
        {
          name: 'ARM Cortex-M',
          proficiency: 90,
          experience: '4+ years',
          projects: ['Real-time Control System', 'Sensor Network', 'Motor Controller'],
          certifications: ['ARM Accredited Engineer'],
          description: 'Advanced knowledge of ARM Cortex-M architecture, interrupt handling, and low-power optimization techniques.'
        },
        {
          name: 'PIC Microcontrollers',
          proficiency: 75,
          experience: '3+ years',
          projects: ['Home Automation', 'Data Logger', 'Temperature Controller'],
          certifications: [],
          description: 'Solid experience with PIC microcontrollers for embedded applications and peripheral interfacing.'
        },
        {
          name: 'ESP32/ESP8266',
          proficiency: 85,
          experience: '3+ years',
          projects: ['IoT Weather Station', 'Smart Home Hub', 'Wireless Sensor'],
          certifications: ['Espressif Certified'],
          description: 'Proficient in ESP32/ESP8266 development for IoT applications with WiFi and Bluetooth connectivity.'
        }
      ]
    },
    rtos: {
      title: 'Real-Time Operating Systems',
      icon: 'Clock',
      color: 'from-green-600 to-green-800',
      skills: [
        {
          name: 'FreeRTOS',
          proficiency: 90,
          experience: '4+ years',
          projects: ['Multi-task Controller', 'Communication Gateway', 'Sensor Fusion'],
          certifications: ['FreeRTOS Certified'],
          description: 'Expert in FreeRTOS task management, synchronization, and memory management for real-time applications.'
        },
        {
          name: 'ThreadX',
          proficiency: 70,
          experience: '2+ years',
          projects: ['Industrial Automation', 'Medical Device'],
          certifications: [],
          description: 'Experience with ThreadX RTOS for high-performance embedded applications.'
        },
        {
          name: 'Zephyr RTOS',
          proficiency: 65,
          experience: '1+ years',
          projects: ['IoT Device', 'Bluetooth Mesh'],
          certifications: [],
          description: 'Growing expertise in Zephyr RTOS for scalable IoT and connected device development.'
        },
        {
          name: 'CMSIS-RTOS',
          proficiency: 80,
          experience: '3+ years',
          projects: ['ARM-based Controller', 'Real-time Data Processor'],
          certifications: [],
          description: 'Proficient in CMSIS-RTOS API for portable real-time applications on ARM Cortex-M processors.'
        }
      ]
    },
    protocols: {
      title: 'Communication Protocols',
      icon: 'Radio',
      color: 'from-purple-600 to-purple-800',
      skills: [
        {
          name: 'CAN Bus',
          proficiency: 95,
          experience: '5+ years',
          projects: ['Automotive ECU Network', 'Industrial Control Bus', 'Vehicle Diagnostics'],
          certifications: ['CAN Protocol Expert'],
          description: 'Expert-level knowledge of CAN protocol implementation, diagnostics, and automotive network design.'
        },
        {
          name: 'SPI',
          proficiency: 90,
          experience: '5+ years',
          projects: ['Sensor Interface', 'Display Controller', 'Memory Interface'],
          certifications: [],
          description: 'Advanced proficiency in SPI protocol for high-speed peripheral communication and data transfer.'
        },
        {
          name: 'I2C',
          proficiency: 88,
          experience: '4+ years',
          projects: ['Multi-sensor System', 'EEPROM Interface', 'RTC Communication'],
          certifications: [],
          description: 'Strong expertise in I2C protocol for multi-device communication and sensor interfacing.'
        },
        {
          name: 'UART/USART',
          proficiency: 92,
          experience: '5+ years',
          projects: ['Debug Interface', 'GPS Communication', 'Wireless Module'],
          certifications: [],
          description: 'Extensive experience with UART/USART for serial communication and debugging interfaces.'
        },
        {
          name: 'Ethernet',
          proficiency: 75,
          experience: '2+ years',
          projects: ['Industrial Gateway', 'Data Logger'],
          certifications: [],
          description: 'Solid understanding of Ethernet protocol implementation for industrial networking applications.'
        }
      ]
    },
    tools: {
      title: 'Development Tools & IDEs',
      icon: 'Wrench',
      color: 'from-orange-600 to-orange-800',
      skills: [
        {
          name: 'STM32CubeIDE',
          proficiency: 95,
          experience: '4+ years',
          projects: ['All STM32 Projects', 'Code Generation', 'Debugging'],
          certifications: ['STM32 Tool Expert'],
          description: 'Expert proficiency in STM32CubeIDE for project development, code generation, and advanced debugging.'
        },
        {
          name: 'Keil µVision',
          proficiency: 85,
          experience: '3+ years',
          projects: ['ARM Development', 'Real-time Debugging', 'Performance Analysis'],
          certifications: [],
          description: 'Advanced skills in Keil µVision for ARM microcontroller development and real-time debugging.'
        },
        {
          name: 'MPLAB X',
          proficiency: 75,
          experience: '3+ years',
          projects: ['PIC Development', 'Embedded Programming'],
          certifications: [],
          description: 'Proficient in MPLAB X IDE for PIC microcontroller development and programming.'
        },
        {
          name: 'PlatformIO',
          proficiency: 80,
          experience: '2+ years',
          projects: ['Multi-platform Development', 'Library Management'],
          certifications: [],
          description: 'Strong experience with PlatformIO for cross-platform embedded development and library management.'
        },
        {
          name: 'Oscilloscope/Logic Analyzer',
          proficiency: 90,
          experience: '5+ years',
          projects: ['Signal Analysis', 'Protocol Debugging', 'Timing Analysis'],
          certifications: [],
          description: 'Expert in using oscilloscopes and logic analyzers for signal analysis and protocol debugging.'
        }
      ]
    }
  };

  const currentSkills = skillCategories?.[selectedCategory]?.skills;

  return (
    <div className="bg-white rounded-xl shadow-card border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Technical Skills Matrix</h2>
          <p className="text-text-secondary">Interactive exploration of technical competencies and expertise levels</p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Target" size={20} className="text-brand-primary" />
          <span className="text-sm font-medium text-brand-primary">Proficiency Scale: 0-100%</span>
        </div>
      </div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(skillCategories)?.map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === key
                ? 'bg-brand-primary text-white shadow-interactive'
                : 'bg-brand-surface text-text-secondary hover:text-text-primary hover:bg-brand-surface/80'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span className="hidden sm:inline">{category?.title}</span>
            <span className="sm:hidden">{category?.title?.split(' ')?.[0]}</span>
          </button>
        ))}
      </div>
      {/* Skills Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {currentSkills?.map((skill, index) => (
          <div
            key={skill?.name}
            className="relative group"
            onMouseEnter={() => setHoveredSkill(skill?.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="bg-brand-surface rounded-lg p-4 border border-border hover:border-brand-primary/30 transition-all duration-300 hover:shadow-card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">{skill?.name}</h3>
                  <div className="flex items-center space-x-3 text-sm text-text-secondary">
                    <span>{skill?.experience}</span>
                    {skill?.certifications?.length > 0 && (
                      <div className="flex items-center space-x-1">
                        <Icon name="Award" size={14} className="text-success" />
                        <span className="text-success">Certified</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-brand-primary">{skill?.proficiency}%</div>
                  <div className="text-xs text-text-secondary">Proficiency</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skillCategories?.[selectedCategory]?.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill?.proficiency}%` }}
                  ></div>
                </div>
              </div>

              {/* Projects Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {skill?.projects?.slice(0, 3)?.map((project, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-white rounded text-xs text-text-secondary border border-border"
                  >
                    {project}
                  </span>
                ))}
                {skill?.projects?.length > 3 && (
                  <span className="px-2 py-1 bg-white rounded text-xs text-brand-primary border border-brand-primary/30">
                    +{skill?.projects?.length - 3} more
                  </span>
                )}
              </div>

              {/* Hover Details */}
              {hoveredSkill === skill?.name && (
                <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-lg shadow-elevated border border-border z-10 transform transition-all duration-200">
                  <p className="text-sm text-text-secondary mb-3">{skill?.description}</p>
                  
                  {skill?.certifications?.length > 0 && (
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-text-primary mb-1">Certifications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {skill?.certifications?.map((cert, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-success/10 text-success rounded text-xs border border-success/20"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-xs font-semibold text-text-primary mb-1">Applied in Projects:</h4>
                    <div className="flex flex-wrap gap-1">
                      {skill?.projects?.map((project, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-brand-surface text-text-secondary rounded text-xs border border-border"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* Category Summary */}
      <div className="mt-8 p-4 bg-gradient-to-r from-brand-surface to-white rounded-lg border border-border">
        <div className="flex items-center space-x-3 mb-2">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skillCategories?.[selectedCategory]?.color} flex items-center justify-center`}>
            <Icon name={skillCategories?.[selectedCategory]?.icon} size={20} className="text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">{skillCategories?.[selectedCategory]?.title}</h3>
            <p className="text-sm text-text-secondary">
              {currentSkills?.length} skills • Average proficiency: {Math.round(currentSkills?.reduce((acc, skill) => acc + skill?.proficiency, 0) / currentSkills?.length)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsMatrix;