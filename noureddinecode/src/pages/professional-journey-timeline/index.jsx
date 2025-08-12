import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TimelineEntry from './components/TimelineEntry';
import TimelineFilter from './components/TimelineFilter';
import TimelineStats from './components/TimelineStats';
import SkillsEvolution from './components/SkillsEvolution';
import CareerMilestones from './components/CareerMilestones';

const ProfessionalJourneyTimeline = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredEntries, setFilteredEntries] = useState([]);

  // Mock timeline data
  const timelineData = [
    {
      id: 1,
      type: 'work',
      title: 'Senior Embedded Systems Engineer',
      company: 'TechFlow Automotive Solutions',
      location: 'Munich, Germany',
      duration: 'Jan 2023 - Present',
      current: true,
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
      description: `Leading the development of next-generation automotive embedded systems with focus on ADAS (Advanced Driver Assistance Systems) and autonomous vehicle technologies. Responsible for architecting scalable firmware solutions and mentoring a team of 8 junior engineers.`,
      responsibilities: [
        'Architected and implemented real-time embedded systems for automotive ECUs using STM32 and NXP processors',
        'Led cross-functional teams in developing ISO 26262 compliant safety-critical automotive software',
        'Optimized system performance achieving 40% reduction in power consumption and 25% improvement in response time',
        'Mentored junior developers and established coding standards and review processes',
        'Collaborated with hardware teams to define system requirements and interface specifications'
      ],
      achievements: [
        'Successfully delivered 3 major automotive projects ahead of schedule',
        'Reduced system boot time by 60% through optimized initialization sequences',
        'Implemented CAN-FD communication protocols improving data throughput by 300%',
        'Led team to achieve ISO 26262 ASIL-D certification for safety-critical components'
      ],
      technologies: [
        'STM32', 'NXP S32K', 'FreeRTOS', 'AUTOSAR', 'CAN/CAN-FD', 'LIN', 'Ethernet',
        'C/C++', 'Python', 'MATLAB/Simulink', 'Vector CANoe', 'Git', 'Jenkins'
      ],
      metrics: [
        { label: 'Projects Delivered', value: '12+' },
        { label: 'Team Members Mentored', value: '8' },
        { label: 'Performance Improvement', value: '40%' },
        { label: 'Code Review Coverage', value: '95%' }
      ],
      testimonials: [
        {
          author: 'Dr. Michael Weber',
          role: 'Engineering Director, TechFlow Automotive',
          quote: 'Noureddine consistently delivers exceptional results and has become our go-to expert for complex embedded systems challenges. His technical leadership and mentoring abilities are outstanding.'
        }
      ]
    },
    {
      id: 2,
      type: 'work',
      title: 'Embedded Software Developer',
      company: 'InnovateTech IoT Solutions',
      location: 'Berlin, Germany',
      duration: 'Mar 2021 - Dec 2022',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center',
      description: `Developed cutting-edge IoT solutions for industrial automation and smart city applications. Specialized in low-power wireless communication protocols and edge computing implementations.`,
      responsibilities: [
        'Designed and implemented IoT firmware for ESP32 and Nordic nRF52 platforms',
        'Developed secure communication protocols using LoRaWAN, Zigbee, and BLE',
        'Implemented edge AI algorithms for real-time data processing and decision making',
        'Created comprehensive testing frameworks and automated CI/CD pipelines',
        'Collaborated with cloud teams to ensure seamless device-to-cloud integration'
      ],
      achievements: [
        'Delivered 15+ IoT products with 99.8% uptime in production',
        'Reduced power consumption by 70% through advanced sleep mode optimization',
        'Implemented OTA update system serving 10,000+ devices globally',
        'Achieved sub-100ms response time for critical industrial control applications'
      ],
      technologies: [
        'ESP32', 'Nordic nRF52', 'FreeRTOS', 'Zephyr OS', 'LoRaWAN', 'Zigbee', 'BLE',
        'MQTT', 'CoAP', 'TensorFlow Lite', 'C/C++', 'Python', 'Docker', 'AWS IoT'
      ],
      metrics: [
        { label: 'IoT Devices Deployed', value: '10K+' },
        { label: 'System Uptime', value: '99.8%' },
        { label: 'Power Optimization', value: '70%' },
        { label: 'Response Time', value: '<100ms' }
      ],
      testimonials: [
        {
          author: 'Sarah Chen',
          role: 'Product Manager, InnovateTech',
          quote: 'Noureddine\'s expertise in IoT and embedded systems was instrumental in our product success. His attention to detail and innovative solutions consistently exceeded expectations.'
        }
      ]
    },
    {
      id: 3,
      type: 'education',
      title: 'Master of Science in Embedded Systems',
      institution: 'Technical University of Munich (TUM)',
      location: 'Munich, Germany',
      duration: 'Sep 2019 - Feb 2021',
      logo: 'https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center',
      description: `Advanced studies in embedded systems engineering with focus on real-time systems, automotive electronics, and IoT architectures. Thesis on "Optimizing Real-Time Performance in Multi-Core Embedded Systems" achieved distinction.`,
      achievements: [
        'Graduated with Distinction (GPA: 3.8/4.0)',
        'Thesis awarded "Best Research Project" in Embedded Systems track',
        'Published 2 research papers in IEEE conferences',
        'Teaching Assistant for "Microcontroller Programming" course'
      ],
      technologies: [
        'ARM Cortex-M', 'Real-Time Systems', 'RTOS Design', 'System Architecture',
        'Signal Processing', 'Control Systems', 'VHDL', 'SystemC', 'MATLAB'
      ],
      metrics: [
        { label: 'GPA', value: '3.8/4.0' },
        { label: 'Research Papers', value: '2' },
        { label: 'Projects Completed', value: '15+' },
        { label: 'Lab Sessions Taught', value: '50+' }
      ]
    },
    {
      id: 4,
      type: 'work',
      title: 'Junior Embedded Developer',
      company: 'MicroSystems Engineering',
      location: 'Stuttgart, Germany',
      duration: 'Jun 2019 - Aug 2019',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center',
      description: `Summer internship focused on developing firmware for industrial control systems. Gained hands-on experience with PLC programming and industrial communication protocols.`,
      responsibilities: [
        'Developed firmware for STM32-based industrial controllers',
        'Implemented Modbus RTU and Ethernet/IP communication protocols',
        'Created HMI interfaces for industrial machinery control',
        'Performed system testing and validation in production environment',
        'Documented technical specifications and user manuals'
      ],
      achievements: [
        'Successfully completed 3 industrial automation projects',
        'Reduced system response time by 30% through code optimization',
        'Implemented robust error handling reducing system failures by 50%',
        'Received "Outstanding Intern" recognition'
      ],
      technologies: [
        'STM32', 'Modbus RTU', 'Ethernet/IP', 'HMI Development', 'PLC Programming',
        'C/C++', 'LabVIEW', 'Industrial Protocols', 'System Testing'
      ],
      metrics: [
        { label: 'Projects Completed', value: '3' },
        { label: 'Response Time Improvement', value: '30%' },
        { label: 'Failure Reduction', value: '50%' },
        { label: 'Documentation Pages', value: '200+' }
      ]
    },
    {
      id: 5,
      type: 'certification',
      title: 'Certified Embedded Systems Professional',
      institution: 'IEEE Computer Society',
      duration: 'Nov 2022',
      logo: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop&crop=center',
      description: `Advanced certification demonstrating expertise in embedded systems design, real-time programming, and system optimization. Comprehensive examination covering hardware-software integration and industry best practices.`,
      achievements: [
        'Scored 95% on comprehensive technical examination',
        'Demonstrated proficiency in 15+ embedded technologies',
        'Completed advanced coursework in safety-critical systems',
        'Peer recognition as subject matter expert'
      ],
      technologies: [
        'Embedded Systems Design', 'Real-Time Programming', 'Safety-Critical Systems',
        'Hardware-Software Integration', 'System Optimization', 'Industry Standards'
      ]
    },
    {
      id: 6,
      type: 'certification',
      title: 'ISO 26262 Functional Safety Certification',
      institution: 'TÜV SÜD Academy',
      duration: 'Mar 2023',
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center',
      description: `Specialized certification in automotive functional safety standards, covering ASIL classification, hazard analysis, and safety lifecycle management for automotive embedded systems.`,
      achievements: [
        'Certified for ASIL-D safety-critical system development',
        'Completed 40-hour intensive training program',
        'Demonstrated expertise in hazard analysis and risk assessment',
        'Qualified to lead functional safety projects'
      ],
      technologies: [
        'ISO 26262', 'Functional Safety', 'ASIL Classification', 'Hazard Analysis',
        'Safety Lifecycle', 'Risk Assessment', 'Automotive Standards'
      ]
    },
    {
      id: 7,
      type: 'project',
      title: 'Autonomous Vehicle Sensor Fusion System',
      company: 'TechFlow Automotive Solutions',
      duration: 'Jan 2023 - Jun 2023',
      logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=center',
      description: `Led development of advanced sensor fusion system for autonomous vehicles, integrating data from LiDAR, cameras, radar, and IMU sensors for real-time environmental perception and decision making.`,
      responsibilities: [
        'Architected multi-sensor data fusion algorithms using Kalman filtering',
        'Implemented real-time processing pipeline handling 1GB/s sensor data',
        'Developed safety-critical software meeting ISO 26262 ASIL-D requirements',
        'Optimized algorithms for ARM Cortex-A78 automotive processors',
        'Created comprehensive testing framework with hardware-in-the-loop simulation'
      ],
      achievements: [
        'Achieved 99.7% object detection accuracy in various weather conditions',
        'Reduced processing latency to under 50ms for critical safety decisions',
        'Successfully passed all ISO 26262 safety validation tests',
        'System deployed in 500+ test vehicles across Europe'
      ],
      technologies: [
        'ARM Cortex-A78', 'Linux RT', 'ROS2', 'OpenCV', 'PCL', 'Kalman Filtering',
        'C++17', 'Python', 'CUDA', 'TensorRT', 'CAN-FD', 'Ethernet AVB'
      ],
      metrics: [
        { label: 'Detection Accuracy', value: '99.7%' },
        { label: 'Processing Latency', value: '<50ms' },
        { label: 'Test Vehicles', value: '500+' },
        { label: 'Data Throughput', value: '1GB/s' }
      ]
    },
    {
      id: 8,
      type: 'education',
      title: 'Bachelor of Engineering in Electronics',
      institution: 'University of Technology Casablanca',
      location: 'Casablanca, Morocco',
      duration: 'Sep 2015 - Jun 2019',
      logo: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=100&h=100&fit=crop&crop=center',
      description: `Comprehensive undergraduate program in electronics engineering with specialization in embedded systems and digital signal processing. Strong foundation in mathematics, physics, and engineering principles.`,
      achievements: [
        'Graduated Magna Cum Laude (GPA: 3.7/4.0)',
        'President of Electronics Engineering Student Association',
        'Winner of National Embedded Systems Design Competition',
        'Completed senior project on "Smart Home Automation System"'
      ],
      technologies: [
        'Microcontrollers', 'Digital Signal Processing', 'Circuit Design',
        'PCB Layout', 'FPGA Programming', 'Control Systems', 'C Programming'
      ],
      metrics: [
        { label: 'GPA', value: '3.7/4.0' },
        { label: 'Leadership Roles', value: '3' },
        { label: 'Competition Wins', value: '2' },
        { label: 'Projects Completed', value: '25+' }
      ]
    }
  ];

  // Mock skills evolution data
  const skillsEvolutionData = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'C/C++', startYear: 2017, proficiency: 95 },
        { name: 'Python', startYear: 2019, proficiency: 85 },
        { name: 'Assembly', startYear: 2018, proficiency: 80 },
        { name: 'MATLAB', startYear: 2019, proficiency: 75 }
      ]
    },
    {
      category: 'Embedded Platforms',
      skills: [
        { name: 'STM32', startYear: 2018, proficiency: 95 },
        { name: 'ESP32', startYear: 2020, proficiency: 90 },
        { name: 'Nordic nRF', startYear: 2021, proficiency: 85 },
        { name: 'NXP S32K', startYear: 2022, proficiency: 80 }
      ]
    },
    {
      category: 'Communication Protocols',
      skills: [
        { name: 'CAN/CAN-FD', startYear: 2019, proficiency: 95 },
        { name: 'UART/SPI/I2C', startYear: 2017, proficiency: 95 },
        { name: 'Ethernet', startYear: 2020, proficiency: 85 },
        { name: 'LoRaWAN', startYear: 2021, proficiency: 80 }
      ]
    },
    {
      category: 'Real-Time Systems',
      skills: [
        { name: 'FreeRTOS', startYear: 2019, proficiency: 95 },
        { name: 'Zephyr OS', startYear: 2021, proficiency: 80 },
        { name: 'Linux RT', startYear: 2022, proficiency: 75 },
        { name: 'AUTOSAR', startYear: 2023, proficiency: 70 }
      ]
    }
  ];

  // Mock career milestones
  const careerMilestones = [
    {
      id: 1,
      title: 'First Embedded Project',
      description: 'Developed my first microcontroller-based project during university',
      date: 'Mar 2017',
      icon: 'Zap',
      color: 'bg-success'
    },
    {
      id: 2,
      title: 'Industry Internship',
      description: 'Completed first professional internship in embedded systems',
      date: 'Jun 2019',
      icon: 'Briefcase',
      color: 'bg-brand-primary'
    },
    {
      id: 3,
      title: 'Master\'s Degree',
      description: 'Graduated with distinction from Technical University of Munich',
      date: 'Feb 2021',
      icon: 'GraduationCap',
      color: 'bg-success'
    },
    {
      id: 4,
      title: 'IoT Expertise',
      description: 'Became specialized in IoT and wireless communication systems',
      date: 'Dec 2021',
      icon: 'Wifi',
      color: 'bg-accent'
    },
    {
      id: 5,
      title: 'Safety Certification',
      description: 'Achieved ISO 26262 functional safety certification',
      date: 'Mar 2023',
      icon: 'Shield',
      color: 'bg-warning'
    },
    {
      id: 6,
      title: 'Team Leadership',
      description: 'Promoted to senior role with team leadership responsibilities',
      date: 'Jan 2023',
      icon: 'Users',
      color: 'bg-brand-primary'
    }
  ];

  // Calculate statistics
  const stats = {
    yearsExperience: new Date()?.getFullYear() - 2019,
    professionalRoles: timelineData?.filter(entry => entry?.type === 'work')?.length,
    certifications: timelineData?.filter(entry => entry?.type === 'certification')?.length,
    majorProjects: timelineData?.filter(entry => entry?.type === 'project')?.length
  };

  // Calculate entry counts for filters
  const entryCounts = {
    all: timelineData?.length,
    work: timelineData?.filter(entry => entry?.type === 'work')?.length,
    education: timelineData?.filter(entry => entry?.type === 'education')?.length,
    certification: timelineData?.filter(entry => entry?.type === 'certification')?.length,
    project: timelineData?.filter(entry => entry?.type === 'project')?.length
  };

  // Filter timeline entries
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredEntries(timelineData);
    } else {
      setFilteredEntries(timelineData?.filter(entry => entry?.type === activeFilter));
    }
  }, [activeFilter]);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-brand-surface via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Icon name="Clock" size={32} className="text-brand-primary" />
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
                Professional Journey
              </h1>
            </div>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Explore my career progression in embedded systems engineering, from academic foundations 
              to leading complex automotive and IoT projects. Each milestone represents growth, learning, 
              and measurable impact in the embedded systems industry.
            </p>
          </motion.div>

          {/* Statistics Overview */}
          <TimelineStats stats={stats} />
        </div>
      </section>
      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Controls */}
          <TimelineFilter 
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            entryCounts={entryCounts}
          />

          {/* Skills Evolution */}
          <SkillsEvolution skillsData={skillsEvolutionData} />

          {/* Career Milestones */}
          <CareerMilestones milestones={careerMilestones} />

          {/* Timeline */}
          <div className="bg-card rounded-xl border border-border shadow-card p-8">
            <div className="flex items-center space-x-3 mb-8">
              <Icon name="Timeline" size={24} className="text-brand-primary" />
              <h2 className="text-2xl font-bold text-text-primary">
                Detailed Timeline
              </h2>
              <span className="px-3 py-1 bg-brand-surface text-brand-primary text-sm rounded-full">
                {filteredEntries?.length} {filteredEntries?.length === 1 ? 'Entry' : 'Entries'}
              </span>
            </div>

            {filteredEntries?.length > 0 ? (
              <div className="space-y-0">
                {filteredEntries?.map((entry, index) => (
                  <TimelineEntry
                    key={entry?.id}
                    entry={entry}
                    index={index}
                    isLast={index === filteredEntries?.length - 1}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="text-text-muted mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  No entries found
                </h3>
                <p className="text-text-secondary">
                  Try adjusting your filter to see more timeline entries.
                </p>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Let's discuss how my embedded systems expertise can contribute to your next project. 
                From concept to deployment, I bring proven experience and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                  className="bg-white text-brand-primary border-white hover:bg-white/90"
                >
                  Download Resume
                </Button>
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="bg-white/20 text-white border-white/20 hover:bg-white/30"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-secondary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Code" size={16} color="white" />
              </div>
              <span className="text-xl font-bold">NoureddineCode</span>
            </div>
            <p className="text-white/70 mb-4">
              Embedded Systems Engineer • IoT Specialist • Automotive Expert
            </p>
            <p className="text-white/50 text-sm">
              © {new Date()?.getFullYear()} NoureddineCode. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalJourneyTimeline;