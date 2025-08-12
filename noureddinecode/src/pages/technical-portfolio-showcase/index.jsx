import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import GitHubStats from './components/GitHubStats';
import FeaturedProjects from './components/FeaturedProjects';

const TechnicalPortfolioShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    industry: [],
    technology: [],
    difficulty: []
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "Real-Time Engine Control System",
      description: "Advanced ECU development for hybrid vehicle engine management with real-time diagnostics and CAN bus communication.",
      fullDescription: `This project involved developing a sophisticated Engine Control Unit (ECU) for hybrid vehicles, focusing on real-time performance and reliability. The system manages engine parameters, fuel injection timing, and emission control while maintaining seamless communication with other vehicle systems through CAN-FD protocol.\n\nThe implementation required deep understanding of automotive standards including ISO 26262 for functional safety and AUTOSAR architecture for software modularity. The project achieved significant improvements in fuel efficiency and reduced emissions while maintaining optimal performance across various driving conditions.`,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      industry: "Automotive",
      difficulty: "Advanced",
      technologies: ["STM32F7", "CAN-FD", "AUTOSAR", "C/C++", "MISRA-C"],
      duration: "18 months",
      teamSize: 8,
      linesOfCode: "45K",
      rating: 4.9,
      improvement: "40% Performance",
      features: [
        "Real-time engine parameter monitoring and control",
        "Advanced fault detection and diagnostic algorithms",
        "ISO 26262 ASIL-D functional safety compliance",
        "Over-the-air firmware update capability",
        "Multi-protocol communication support",
        "Adaptive control algorithms for optimal performance"
      ],
      challenges: [
        {
          title: "Real-time Constraints",
          description: "Meeting strict timing requirements for engine control loops while maintaining system stability and safety."
        },
        {
          title: "Safety Compliance",
          description: "Implementing ISO 26262 ASIL-D requirements for critical automotive safety functions."
        },
        {
          title: "Multi-protocol Communication",
          description: "Integrating CAN-FD, LIN, and Ethernet protocols for comprehensive vehicle network communication."
        }
      ],
      solutions: [
        {
          title: "Optimized Task Scheduling",
          description: "Implemented priority-based RTOS scheduling with interrupt-driven architecture for deterministic timing."
        },
        {
          title: "Redundant Safety Systems",
          description: "Developed dual-core architecture with independent safety monitoring and fail-safe mechanisms."
        },
        {
          title: "Protocol Abstraction Layer",
          description: "Created unified communication interface supporting multiple automotive protocols seamlessly."
        }
      ],
      codeLanguage: "C/C++",
      codeSnippet: `// Engine Control Loop Implementation
void EngineControlTask(void *pvParameters) {
    TickType_t xLastWakeTime = xTaskGetTickCount();
    const TickType_t xFrequency = pdMS_TO_TICKS(1); // 1ms cycle
    
    for(;;) {
        // Read sensor data
        EngineData_t engineData = ReadSensorData();
        
        // Calculate control parameters
        ControlParams_t params = CalculateControlParams(&engineData);
        
        // Apply safety checks
        if(SafetyCheck(&params) == SAFETY_OK) {
            // Update actuators
            UpdateFuelInjection(&params);
            UpdateIgnitionTiming(&params);
            UpdateThrottlePosition(&params);
        } else {
            // Enter safe mode
            EnterSafeMode();
        }
        
        // Send diagnostics via CAN
        SendDiagnosticData(&engineData, &params);
        
        // Wait for next cycle
        vTaskDelayUntil(&xLastWakeTime, xFrequency);
    }
}`,
      architectureComponents: [
        {
          name: "Engine Control Module",
          description: "Core processing unit managing engine parameters and control algorithms",
          technology: "STM32F7"
        },
        {
          name: "Safety Monitor",
          description: "Independent safety system monitoring critical functions and fault detection",
          technology: "Dual-Core ARM"
        },
        {
          name: "Communication Gateway",
          description: "Multi-protocol interface handling CAN-FD, LIN, and Ethernet communications",
          technology: "CAN-FD Controller"
        },
        {
          name: "Diagnostic System",
          description: "Real-time diagnostic and logging system for maintenance and troubleshooting",
          technology: "Flash Memory"
        }
      ],
      metrics: [
        {
          value: "40%",
          label: "Performance Improvement",
          description: "Faster response time and better fuel efficiency"
        },
        {
          value: "25%",
          label: "Emission Reduction",
          description: "Lower NOx and CO2 emissions compared to previous generation"
        },
        {
          value: "99.9%",
          label: "System Reliability",
          description: "Uptime in production vehicles over 100,000 miles"
        }
      ],
      impact: "This project revolutionized the client's hybrid vehicle performance, achieving 40% improvement in engine response time and 25% reduction in emissions. The system has been deployed in over 50,000 vehicles with 99.9% reliability, contributing to the company's leadership in sustainable automotive technology.",
      lessonsLearned: [
        "Importance of early safety analysis and FMEA in automotive projects",
        "Benefits of modular AUTOSAR architecture for code reusability",
        "Critical role of comprehensive testing in safety-critical systems",
        "Value of continuous integration in embedded systems development"
      ]
    },
    {
      id: 2,
      title: "Smart City IoT Sensor Network",
      description: "Distributed environmental monitoring system with 500+ sensors across 50km² urban area using LoRaWAN and edge computing.",
      fullDescription: `A comprehensive IoT infrastructure project designed to monitor environmental conditions across a major metropolitan area. The system deploys hundreds of wireless sensor nodes measuring air quality, noise levels, temperature, humidity, and traffic patterns in real-time.\n\nThe project utilized LoRaWAN technology for long-range, low-power communication, enabling sensors to operate for years on battery power. Edge computing capabilities process data locally to reduce bandwidth usage and provide immediate alerts for environmental hazards.`,
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop",
      industry: "IoT",
      difficulty: "Advanced",
      technologies: ["ESP32", "LoRaWAN", "MQTT", "FreeRTOS", "TensorFlow Lite"],
      duration: "12 months",
      teamSize: 6,
      linesOfCode: "32K",
      rating: 4.8,
      improvement: "60% Coverage",
      features: [
        "500+ wireless sensor nodes with 5-year battery life",
        "Real-time air quality and environmental monitoring",
        "Mesh networking for extended coverage and reliability",
        "Edge computing for local data processing",
        "Predictive analytics for environmental trends",
        "Mobile app for citizen engagement and alerts"
      ],
      challenges: [
        {
          title: "Power Optimization",
          description: "Achieving 5-year battery life while maintaining reliable communication and sensing capabilities."
        },
        {
          title: "Network Coverage",
          description: "Ensuring reliable connectivity across diverse urban environments with varying RF conditions."
        },
        {
          title: "Data Management",
          description: "Processing and storing massive amounts of sensor data while maintaining real-time responsiveness."
        }
      ],
      solutions: [
        {
          title: "Advanced Power Management",
          description: "Implemented dynamic power scaling and intelligent sleep modes based on environmental conditions."
        },
        {
          title: "Mesh Network Topology",
          description: "Deployed self-healing mesh network with multiple gateway redundancy for robust connectivity."
        },
        {
          title: "Edge Computing Architecture",
          description: "Local data processing and filtering reduces bandwidth usage by 80% while enabling real-time alerts."
        }
      ],
      codeLanguage: "C++",
      codeSnippet: `// IoT Sensor Node Main Loop
void SensorNodeTask(void *parameter) {
    SensorData_t sensorData;
    uint32_t sleepDuration = NORMAL_SLEEP_MS;
    
    while(1) {
        // Wake up and initialize sensors
        InitializeSensors();
        
        // Read environmental data
        sensorData.temperature = ReadTemperature();
        sensorData.humidity = ReadHumidity();
        sensorData.airQuality = ReadAirQuality();
        sensorData.noiseLevel = ReadNoiseLevel();
        sensorData.timestamp = GetTimestamp();
        
        // Process data locally (edge computing)
        ProcessedData_t processed = ProcessSensorData(&sensorData);
        
        // Check for alerts
        if(CheckAlertConditions(&processed)) {
            // Send immediate alert
            SendUrgentData(&processed);
            sleepDuration = ALERT_SLEEP_MS;
        } else {
            // Normal data transmission
            SendRoutineData(&processed);
            sleepDuration = NORMAL_SLEEP_MS;
        }
        
        // Enter deep sleep to conserve battery
        EnterDeepSleep(sleepDuration);
    }
}`,
      architectureComponents: [
        {
          name: "Sensor Nodes",
          description: "Battery-powered environmental sensors with LoRaWAN connectivity",
          technology: "ESP32"
        },
        {
          name: "LoRaWAN Gateways",
          description: "Network gateways providing connectivity to sensor nodes",
          technology: "LoRa SX1301"
        },
        {
          name: "Edge Processing Units",
          description: "Local data processing and filtering before cloud transmission",
          technology: "Raspberry Pi 4"
        },
        {
          name: "Cloud Platform",
          description: "Centralized data storage, analytics, and visualization platform",
          technology: "AWS IoT Core"
        }
      ],
      metrics: [
        {
          value: "50km²",
          label: "Coverage Area",
          description: "Complete environmental monitoring across metropolitan area"
        },
        {
          value: "500+",
          label: "Active Sensors",
          description: "Distributed sensor nodes providing real-time data"
        },
        {
          value: "99.5%",
          label: "Network Uptime",
          description: "Reliable connectivity and data transmission"
        }
      ],
      impact: "The smart city IoT network has transformed urban environmental monitoring, providing real-time insights that help city planners make data-driven decisions. The system has detected over 200 environmental incidents, enabling rapid response and improving public health outcomes.",
      lessonsLearned: [
        "Critical importance of power optimization in battery-powered IoT devices",
        "Benefits of edge computing in reducing cloud infrastructure costs",
        "Value of mesh networking for urban IoT deployments",
        "Importance of citizen engagement in smart city initiatives"
      ]
    },
    {
      id: 3,
      title: "Industrial Process Control System",
      description: "High-precision manufacturing automation controller with machine learning optimization and predictive maintenance capabilities.",
      fullDescription: `An advanced industrial automation system designed for precision manufacturing processes. The system integrates multiple control loops, sensor fusion, and machine learning algorithms to optimize production quality and efficiency.\n\nThe controller manages complex manufacturing processes with sub-millisecond response times while continuously learning from production data to improve performance. Predictive maintenance algorithms analyze equipment health to prevent costly downtime.`,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      industry: "Industrial",
      difficulty: "Advanced",
      technologies: ["ARM Cortex-M7", "Modbus", "EtherCAT", "Python", "TensorFlow"],
      duration: "15 months",
      teamSize: 5,
      linesOfCode: "38K",
      rating: 4.9,
      improvement: "35% Throughput",
      features: [
        "Sub-millisecond control loop response time",
        "Machine learning-based process optimization",
        "Predictive maintenance and fault detection",
        "Multi-protocol industrial communication",
        "Real-time quality control and inspection",
        "Remote monitoring and control dashboard"
      ],
      challenges: [
        {
          title: "Real-time Performance",
          description: "Achieving sub-millisecond response times while running complex control algorithms."
        },
        {
          title: "System Integration",
          description: "Integrating with legacy industrial equipment using various communication protocols."
        },
        {
          title: "Predictive Analytics",
          description: "Implementing machine learning algorithms on resource-constrained embedded hardware."
        }
      ],
      solutions: [
        {
          title: "Optimized Control Architecture",
          description: "Implemented deterministic real-time control with dedicated hardware acceleration for critical loops."
        },
        {
          title: "Protocol Gateway",
          description: "Developed universal communication interface supporting Modbus, EtherCAT, and Profinet protocols."
        },
        {
          title: "Edge ML Implementation",
          description: "Optimized TensorFlow Lite models for embedded deployment with quantization and pruning techniques."
        }
      ],
      codeLanguage: "C++",
      codeSnippet: `// High-Speed Control Loop Implementation
void HighSpeedControlISR(void) {
    static uint32_t cycleCount = 0;
    
    // Read process variables (< 50µs)
    ProcessData_t currentState = ReadProcessSensors();
    
    // Calculate control output using PID + feedforward
    ControlOutput_t output = CalculateControlOutput(&currentState, &setpoint);
    
    // Apply machine learning optimization (every 100 cycles)
    if(++cycleCount >= 100) {
        MLOptimization_t mlOutput = RunMLOptimization(&currentState);
        ApplyMLCorrection(&output, &mlOutput);
        cycleCount = 0;
    }
    
    // Update actuators (< 30µs)
    UpdateActuators(&output);
    
    // Log data for predictive maintenance
    LogProcessData(&currentState, &output);
    
    // Clear interrupt flag
    ClearTimerInterrupt();
}`,
      architectureComponents: [
        {
          name: "Control Processor",
          description: "High-performance ARM processor running real-time control algorithms",
          technology: "ARM Cortex-M7"
        },
        {
          name: "I/O Interface",
          description: "High-speed analog and digital I/O for sensor and actuator connections",
          technology: "24-bit ADC"
        },
        {
          name: "Communication Module",
          description: "Industrial protocol support for equipment integration",
          technology: "EtherCAT Master"
        },
        {
          name: "ML Accelerator",
          description: "Dedicated hardware for machine learning inference",
          technology: "Neural Processing Unit"
        }
      ],
      metrics: [
        {
          value: "±0.1%",
          label: "Control Precision",
          description: "Exceptional accuracy in process control"
        },
        {
          value: "35%",
          label: "Throughput Increase",
          description: "Improved production efficiency and speed"
        },
        {
          value: "60%",
          label: "Downtime Reduction",
          description: "Predictive maintenance preventing failures"
        }
      ],
      impact: "The industrial control system has revolutionized manufacturing efficiency, achieving 35% increase in throughput while maintaining exceptional quality standards. Predictive maintenance capabilities have reduced unplanned downtime by 60%, saving millions in production costs.",
      lessonsLearned: [
        "Importance of deterministic real-time performance in industrial applications",
        "Benefits of machine learning integration in process optimization",
        "Critical role of predictive maintenance in modern manufacturing",
        "Value of modular architecture for industrial system scalability"
      ]
    },
    {
      id: 4,
      title: "Wireless Medical Device Network",
      description: "FDA-compliant medical device communication system for patient monitoring with end-to-end encryption and real-time alerts.",
      fullDescription: `A comprehensive medical device networking solution designed for hospital environments, enabling seamless communication between patient monitoring devices, infusion pumps, and central monitoring stations.\n\nThe system ensures FDA compliance with medical device regulations while providing secure, reliable communication for critical patient care applications. Real-time data processing enables immediate alerts for patient safety.`,
      image: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?w=800&h=600&fit=crop",
      industry: "IoT",
      difficulty: "Advanced",
      technologies: ["STM32L4", "Zigbee", "AES-256", "FreeRTOS", "HL7 FHIR"],
      duration: "20 months",
      teamSize: 7,
      linesOfCode: "42K",
      rating: 4.9,
      improvement: "50% Response Time",
      features: [
        "FDA 510(k) compliant medical device communication",
        "End-to-end AES-256 encryption for patient data",
        "Real-time patient monitoring and alert system",
        "Interoperability with existing hospital systems",
        "Battery life optimization for portable devices",
        "Comprehensive audit logging and compliance reporting"
      ],
      challenges: [
        {
          title: "Regulatory Compliance",
          description: "Meeting strict FDA requirements for medical device software and communication protocols."
        },
        {
          title: "Security Requirements",
          description: "Implementing robust encryption while maintaining real-time performance for critical alerts."
        },
        {
          title: "Interoperability",
          description: "Ensuring compatibility with diverse medical equipment from multiple manufacturers."
        }
      ],
      solutions: [
        {
          title: "Compliance Framework",
          description: "Implemented comprehensive quality management system following ISO 13485 and FDA guidelines."
        },
        {
          title: "Hardware Security Module",
          description: "Dedicated cryptographic processor for secure key management and encryption operations."
        },
        {
          title: "HL7 FHIR Integration",
          description: "Standardized healthcare data exchange protocol for seamless interoperability."
        }
      ],
      codeLanguage: "C",
      codeSnippet: `// Secure Medical Data Transmission
typedef struct {
    uint32_t patientId;
    uint32_t deviceId;
    uint64_t timestamp;
    uint8_t vitalSigns[32];
    uint8_t alertLevel;
    uint8_t checksum;
} MedicalDataPacket_t;

HAL_StatusTypeDef TransmitSecureData(MedicalDataPacket_t *data) {
    uint8_t encryptedData[64];
    uint8_t authTag[16];
    
    // Validate data integrity
    if(ValidateDataIntegrity(data) != HAL_OK) {
        LogSecurityEvent(SECURITY_DATA_INTEGRITY_FAIL);
        return HAL_ERROR;
    }
    
    // Encrypt patient data using AES-256-GCM
    if(AES_GCM_Encrypt((uint8_t*)data, sizeof(MedicalDataPacket_t),
                       encryptedData, authTag) != HAL_OK) {
        LogSecurityEvent(SECURITY_ENCRYPTION_FAIL);
        return HAL_ERROR;
    }
    
    // Transmit encrypted data with authentication tag
    return TransmitEncryptedPacket(encryptedData, authTag);
}`,
      architectureComponents: [
        {
          name: "Medical Device Nodes",
          description: "Patient monitoring devices with secure communication capabilities",
          technology: "STM32L4"
        },
        {
          name: "Security Gateway",
          description: "Centralized security management and key distribution",
          technology: "Hardware Security Module"
        },
        {
          name: "Central Monitoring",
          description: "Hospital-wide patient monitoring and alert management system",
          technology: "Linux Server"
        },
        {
          name: "EMR Integration",
          description: "Electronic medical record system integration interface",
          technology: "HL7 FHIR API"
        }
      ],
      metrics: [
        {
          value: "50%",
          label: "Faster Response",
          description: "Reduced alert response time for critical patient events"
        },
        {
          value: "99.99%",
          label: "System Reliability",
          description: "Mission-critical uptime for patient safety"
        },
        {
          value: "100%",
          label: "FDA Compliance",
          description: "Full regulatory compliance and certification"
        }
      ],
      impact: "The medical device network has improved patient safety outcomes by enabling 50% faster response to critical events. The system has been deployed in 15 hospitals, monitoring over 10,000 patients with zero security incidents and full FDA compliance.",
      lessonsLearned: [
        "Critical importance of regulatory compliance in medical device development",
        "Benefits of hardware security modules for medical data protection",
        "Value of standardized protocols like HL7 FHIR for healthcare interoperability",
        "Importance of comprehensive testing and validation in safety-critical systems"
      ]
    },
    {
      id: 5,
      title: "Autonomous Drone Flight Controller",
      description: "Advanced flight control system with computer vision, obstacle avoidance, and autonomous navigation for commercial applications.",
      fullDescription: `A sophisticated flight control system designed for commercial autonomous drones, featuring advanced navigation algorithms, real-time obstacle avoidance, and computer vision capabilities for various applications including inspection, delivery, and surveillance.\n\nThe system integrates multiple sensors including IMU, GPS, LiDAR, and cameras to provide robust autonomous flight capabilities in challenging environments. Machine learning algorithms enable adaptive flight behavior and improved safety.`,
      image: "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?w=800&h=600&fit=crop",
      industry: "Automotive",
      difficulty: "Advanced",
      technologies: ["STM32H7", "OpenCV", "ROS2", "SLAM", "TensorFlow Lite"],
      duration: "16 months",
      teamSize: 9,
      linesOfCode: "55K",
      rating: 4.8,
      improvement: "90% Autonomy",
      features: [
        "Fully autonomous flight with GPS-denied navigation",
        "Real-time obstacle detection and avoidance",
        "Computer vision for object recognition and tracking",
        "SLAM (Simultaneous Localization and Mapping)",
        "Adaptive flight control for various weather conditions",
        "Mission planning and waypoint navigation"
      ],
      challenges: [
        {
          title: "Real-time Processing",
          description: "Processing multiple sensor streams and computer vision algorithms within strict timing constraints."
        },
        {
          title: "Safety Assurance",
          description: "Ensuring safe autonomous operation in dynamic environments with moving obstacles."
        },
        {
          title: "Power Efficiency",
          description: "Optimizing computational performance while maintaining acceptable flight time."
        }
      ],
      solutions: [
        {
          title: "Multi-core Architecture",
          description: "Distributed processing across multiple cores with dedicated tasks for sensor fusion and control."
        },
        {
          title: "Redundant Safety Systems",
          description: "Multiple independent safety layers including emergency landing and fail-safe mechanisms."
        },
        {
          title: "Optimized Algorithms",
          description: "Custom-optimized computer vision and control algorithms for embedded deployment."
        }
      ],
      codeLanguage: "C++",
      codeSnippet: `// Autonomous Flight Control Loop
void FlightControlTask(void *pvParameters) {
    FlightState_t currentState;
    ControlCommands_t commands;
    ObstacleMap_t obstacles;
    
    while(1) {
        // Sensor fusion for state estimation
        currentState = FuseSensorData();
        
        // Computer vision processing
        ProcessCameraData(&currentState);
        
        // Obstacle detection and mapping
        obstacles = DetectObstacles(&currentState);
        
        // Path planning with obstacle avoidance
        Waypoint_t nextWaypoint = PlanPath(&currentState, &obstacles);
        
        // Calculate control commands
        commands = CalculateFlightCommands(&currentState, &nextWaypoint);
        
        // Safety checks
        if(SafetyCheck(&commands, &obstacles) == SAFETY_OK) {
            // Apply control commands
            UpdateMotorCommands(&commands);
        } else {
            // Emergency procedures
            ExecuteEmergencyLanding();
        }
        
        // Telemetry and logging
        SendTelemetryData(&currentState, &commands);
        
        vTaskDelay(pdMS_TO_TICKS(10)); // 100Hz control loop
    }
}`,
      architectureComponents: [
        {
          name: "Flight Controller",
          description: "High-performance processor running flight control algorithms",
          technology: "STM32H7"
        },
        {
          name: "Sensor Suite",
          description: "IMU, GPS, barometer, and magnetometer for state estimation",
          technology: "9-DOF IMU"
        },
        {
          name: "Vision System",
          description: "Stereo cameras and LiDAR for obstacle detection and navigation",
          technology: "OpenCV"
        },
        {
          name: "Communication Module",
          description: "Long-range telemetry and control link",
          technology: "LoRa Radio"
        }
      ],
      metrics: [
        {
          value: "90%",
          label: "Autonomous Operation",
          description: "Fully autonomous flight without human intervention"
        },
        {
          value: "100%",
          label: "Obstacle Avoidance",
          description: "Perfect safety record in obstacle detection tests"
        },
        {
          value: "45min",
          label: "Flight Time",
          description: "Extended flight duration with full sensor suite"
        }
      ],
      impact: "The autonomous drone system has enabled new commercial applications in inspection and delivery, achieving 90% autonomous operation with perfect safety record. The technology has been licensed to three major drone manufacturers and deployed in over 500 commercial drones.",
      lessonsLearned: [
        "Importance of sensor fusion for robust state estimation",
        "Critical role of safety systems in autonomous vehicles",
        "Benefits of modular software architecture for complex systems",
        "Value of extensive simulation and testing in autonomous system development"
      ]
    },
    {
      id: 6,
      title: "Smart Grid Energy Management",
      description: "Distributed energy management system for smart grid applications with renewable energy integration and demand response.",
      fullDescription: `A comprehensive smart grid energy management solution designed to optimize power distribution and integrate renewable energy sources. The system manages energy flow, demand response, and grid stability across distributed generation and storage systems.\n\nThe platform enables utilities to efficiently manage renewable energy integration while maintaining grid stability and optimizing energy costs for consumers. Advanced algorithms predict energy demand and automatically balance supply and demand.`,
      image: "https://images.pixabay.com/photo/2017/09/12/13/21/photovoltaic-system-2742304_1280.jpg?w=800&h=600&fit=crop",
      industry: "Industrial",
      difficulty: "Intermediate",
      technologies: ["ARM Cortex-A53", "Modbus TCP", "MQTT", "Linux RT", "Python"],
      duration: "14 months",
      teamSize: 6,
      linesOfCode: "35K",
      rating: 4.7,
      improvement: "30% Efficiency",
      features: [
        "Real-time energy monitoring and control",
        "Renewable energy source integration",
        "Demand response and load balancing",
        "Grid stability monitoring and protection",
        "Energy storage system management",
        "Consumer energy optimization dashboard"
      ],
      challenges: [
        {
          title: "Grid Stability",
          description: "Maintaining power quality and stability with variable renewable energy sources."
        },
        {
          title: "Real-time Optimization",
          description: "Optimizing energy distribution in real-time across complex grid topology."
        },
        {
          title: "Scalability",
          description: "Supporting thousands of distributed energy resources and consumers."
        }
      ],
      solutions: [
        {
          title: "Advanced Control Algorithms",
          description: "Implemented model predictive control for optimal energy distribution and grid stability."
        },
        {
          title: "Distributed Architecture",
          description: "Scalable microservices architecture supporting thousands of connected devices."
        },
        {
          title: "Machine Learning Integration",
          description: "Predictive algorithms for energy demand forecasting and renewable generation prediction."
        }
      ],
      codeLanguage: "Python",
      codeSnippet: `# Smart Grid Energy Optimization
class EnergyManager:
    def __init__(self):
        self.grid_state = GridState()
        self.renewable_sources = RenewableSources()
        self.energy_storage = EnergyStorage()
        self.demand_predictor = DemandPredictor()
    
    def optimize_energy_distribution(self):
        # Get current grid state
        current_demand = self.grid_state.get_total_demand()
        available_renewable = self.renewable_sources.get_available_power()
        storage_capacity = self.energy_storage.get_available_capacity()
        
        # Predict future demand
        predicted_demand = self.demand_predictor.predict_next_hour()
        
        # Optimize energy distribution
        optimization_result = self.solve_optimization_problem(
            current_demand, available_renewable, 
            storage_capacity, predicted_demand
        )
        
        # Apply control commands
        self.apply_control_commands(optimization_result)
        
        return optimization_result
    
    def solve_optimization_problem(self, demand, renewable, storage, prediction):
        # Linear programming optimization for energy distribution
        # Minimize cost while maintaining grid stability
        pass`,
      architectureComponents: [
        {
          name: "Grid Controller",
          description: "Central control unit managing energy distribution and grid stability",
          technology: "ARM Cortex-A53"
        },
        {
          name: "Smart Meters",
          description: "Distributed energy monitoring and control devices",
          technology: "Zigbee Mesh"
        },
        {
          name: "Renewable Interface",
          description: "Integration modules for solar, wind, and other renewable sources",
          technology: "Modbus TCP"
        },
        {
          name: "Energy Storage",
          description: "Battery management system for grid-scale energy storage",
          technology: "CAN Bus"
        }
      ],
      metrics: [
        {
          value: "30%",
          label: "Efficiency Gain",
          description: "Improved energy distribution efficiency and reduced waste"
        },
        {
          value: "85%",
          label: "Renewable Integration",
          description: "Percentage of renewable energy successfully integrated"
        },
        {
          value: "99.9%",
          label: "Grid Stability",
          description: "Maintained power quality and system reliability"
        }
      ],
      impact: "The smart grid system has transformed energy management for a regional utility, achieving 30% improvement in distribution efficiency and 85% renewable energy integration. The system manages over 100,000 smart meters and has reduced carbon emissions by 40%.",
      lessonsLearned: [
        "Importance of predictive algorithms in energy management",
        "Benefits of distributed architecture for scalable grid systems",
        "Critical role of real-time optimization in renewable integration",
        "Value of consumer engagement in demand response programs"
      ]
    }
  ];

  // Filter configuration
  const filters = {
    industries: [...new Set(projects.map(p => p.industry))],
    technologies: [...new Set(projects.flatMap(p => p.technologies))],
    difficulties: [...new Set(projects.map(p => p.difficulty))]
  };

  // Filter and sort projects
  useEffect(() => {
    let filtered = projects?.filter(project => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchQuery?.toLowerCase()));

      // Industry filter
      const matchesIndustry = activeFilters?.industry?.length === 0 || 
        activeFilters?.industry?.includes(project?.industry);

      // Technology filter
      const matchesTechnology = activeFilters?.technology?.length === 0 || 
        activeFilters?.technology?.some(tech => project?.technologies?.includes(tech));

      // Difficulty filter
      const matchesDifficulty = activeFilters?.difficulty?.length === 0 || 
        activeFilters?.difficulty?.includes(project?.difficulty);

      return matchesSearch && matchesIndustry && matchesTechnology && matchesDifficulty;
    });

    // Sort projects
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b?.id - a?.id;
        case 'oldest':
          return a?.id - b?.id;
        case 'rating':
          return b?.rating - a?.rating;
        case 'complexity':
          const complexityOrder = { 'Advanced': 3, 'Intermediate': 2, 'Beginner': 1 };
          return complexityOrder?.[b?.difficulty] - complexityOrder?.[a?.difficulty];
        default:
          return 0;
      }
    });

    setFilteredProjects(filtered);
  }, [activeFilters, searchQuery, sortBy]);

  const handleFilterChange = (category, values) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: values
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({
      industry: [],
      technology: [],
      difficulty: []
    });
    setSearchQuery('');
  };

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-surface via-white to-brand-surface">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Icon name="Code2" size={16} />
              <span>Technical Portfolio</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6">
              Project Laboratory
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Comprehensive showcase of embedded systems expertise across automotive, IoT, and industrial applications. 
              Each project demonstrates technical mastery, innovative problem-solving, and measurable impact.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">{projects?.length}</div>
              <div className="text-sm text-text-secondary">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">200K+</div>
              <div className="text-sm text-text-secondary">Lines of Code</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">15+</div>
              <div className="text-sm text-text-secondary">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">4.8</div>
              <div className="text-sm text-text-secondary">Avg. Rating</div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Featured Projects */}
        <FeaturedProjects onViewProject={handleViewProject} />

        {/* GitHub Statistics */}
        <GitHubStats />

        {/* Project Filters */}
        <ProjectFilter
          filters={filters}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-text-primary">
              All Projects
            </h2>
            <span className="px-3 py-1 bg-brand-primary text-white text-sm font-medium rounded-full">
              {filteredProjects?.length} {filteredProjects?.length === 1 ? 'project' : 'projects'}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-text-secondary">
            <Icon name="Filter" size={16} />
            <span className="text-sm">
              {Object.values(activeFilters)?.flat()?.length} active filters
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects?.map((project) => (
              <ProjectCard
                key={project?.id}
                project={project}
                onViewDetails={handleViewProject}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-2">No projects found</h3>
            <p className="text-text-secondary mb-6">
              Try adjusting your filters or search terms to find relevant projects.
            </p>
            <Button
              variant="outline"
              iconName="RotateCcw"
              iconPosition="left"
              onClick={handleClearFilters}
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Load More Button (if needed) */}
        {filteredProjects?.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              iconName="Plus"
              iconPosition="left"
              className="text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">NoureddineCode</h3>
                  <p className="text-gray-400 text-sm">Embedded Systems Excellence</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Transforming ideas into robust embedded solutions across automotive, IoT, and industrial domains.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" iconName="Github" className="text-gray-300 hover:text-white" />
                <Button variant="ghost" size="sm" iconName="Linkedin" className="text-gray-300 hover:text-white" />
                <Button variant="ghost" size="sm" iconName="Mail" className="text-gray-300 hover:text-white" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/interactive-landing-experience" className="block text-gray-300 hover:text-white transition-colors">Home</a>
                <a href="/professional-journey-timeline" className="block text-gray-300 hover:text-white transition-colors">Journey</a>
                <a href="/skills-expertise-observatory" className="block text-gray-300 hover:text-white transition-colors">Skills</a>
                <a href="/collaboration-gateway" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <div className="space-y-2">
                <span className="block text-gray-300">STM32 & ARM Cortex</span>
                <span className="block text-gray-300">RTOS & Linux</span>
                <span className="block text-gray-300">IoT & Wireless</span>
                <span className="block text-gray-300">Automotive Systems</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date()?.getFullYear()} NoureddineCode. All rights reserved. Built with precision and passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechnicalPortfolioShowcase;