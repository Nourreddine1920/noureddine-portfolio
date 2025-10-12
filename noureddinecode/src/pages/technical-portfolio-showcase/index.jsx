import React, { useState, useEffect } from "react";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";
import ProjectModal from "./components/ProjectModal";
import GitHubStats from "./components/GitHubStats";
import FeaturedProjects from "./components/FeaturedProjects";

const TechnicalPortfolioShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    industry: [],
    technology: [],
    difficulty: [],
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Actual project data from GitHub
  const projects = [
    {
      id: 1,
      title: "STM32 Lab Backend",
      description:
        "A Django-based laboratory management system for STM32 microcontrollers, featuring real-time device control, user management, and automated testing capabilities.",
      fullDescription: `A comprehensive laboratory management system built with Django and modern web technologies to facilitate STM32 microcontroller development and testing. The system enables remote device programming, real-time monitoring, and collaborative development for educational and professional environments.\n\nKey features include automated firmware deployment, real-time device status monitoring, multi-user access control, and extensive testing capabilities for STM32-based projects.`,
      image:
        "https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=800&h=600&fit=crop",
      industry: "Education/IoT",
      difficulty: "Advanced",
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "Docker",
        "Celery",
        "WebSockets",
        "RESTful API",
      ],
      duration: "6 months",
      teamSize: 2,
      linesOfCode: "15K+",
      rating: 4.8,
      improvement: "80% Efficiency",
      features: [
        "Real-time STM32 device monitoring and control",
        "Secure multi-user access management",
        "Automated firmware deployment system",
        "Comprehensive testing framework",
        "Real-time collaboration features",
        "Detailed logging and analytics dashboard",
      ],
      challenges: [
        {
          title: "Device Communication",
          description:
            "Implementing reliable real-time communication with multiple STM32 devices while ensuring data integrity and synchronization.",
        },
        {
          title: "User Management",
          description:
            "Creating a secure and scalable user management system with role-based access control for different user types.",
        },
        {
          title: "System Integration",
          description:
            "Integrating multiple technologies and services while maintaining system reliability and performance.",
        },
      ],
      solutions: [
        {
          title: "WebSocket Implementation",
          description:
            "Developed a robust WebSocket-based communication system for real-time device interaction and status updates.",
        },
        {
          title: "Custom Authentication",
          description:
            "Implemented a comprehensive authentication system with JWT tokens and role-based permissions.",
        },
        {
          title: "Microservices Architecture",
          description:
            "Adopted a containerized microservices architecture using Docker for improved scalability and maintainability.",
        },
      ],
      codeLanguage: "Python",
      codeSnippet: `# Device Management Consumer
class DeviceManager(AsyncWebsocketConsumer):
    async def connect(self):
        self.device_id = self.scope['url_route']['kwargs']['device_id']
        self.room_group_name = f'device_{self.device_id}'

        # Join device group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        await self.accept()

    async def disconnect(self, close_code):
        # Leave device group
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        command = data['command']
        
        # Process device command
        if command == 'program':
            await self.program_device(data['firmware'])
        elif command == 'reset':
            await self.reset_device()
        elif command == 'status':
            await self.get_device_status()

    async def device_status(self, event):
        status = event['status']
        # Send device status to WebSocket
        await self.send(text_data=json.dumps({
            'type': 'status',
            'data': status
        }))`,
      architectureComponents: [
        {
          name: "Backend API",
          description:
            "Django REST framework API handling device management and user requests",
          technology: "Python/Django",
        },
        {
          name: "Real-time Communication",
          description:
            "WebSocket-based system for real-time device monitoring and control",
          technology: "Django Channels",
        },
        {
          name: "Device Interface",
          description:
            "Custom interface for STM32 device programming and monitoring",
          technology: "PySerial/USB",
        },
        {
          name: "Data Storage",
          description:
            "Persistent storage for user data, device configurations, and logs",
          technology: "PostgreSQL",
        },
      ],
      metrics: [
        {
          value: "80%",
          label: "Time Efficiency",
          description: "Reduction in device programming and testing time",
        },
        {
          value: "100%",
          label: "Device Support",
          description: "Compatible with all STM32 development boards",
        },
        {
          value: "99.9%",
          label: "System Uptime",
          description: "High availability for laboratory operations",
        },
      ],
      impact:
        "This project has significantly improved STM32 development workflow in educational and professional settings. The system has reduced device programming and testing time by 80%, supports multiple concurrent users, and maintains 99.9% uptime for critical laboratory operations.",
      lessonsLearned: [
        "Importance of real-time communication in device management systems",
        "Benefits of containerized architecture for deployment flexibility",
        "Critical role of user access control in shared laboratory environments",
        "Value of automated testing in embedded systems development",
      ],
    },
    {
      id: 2,
      title: "Modern Portfolio Website",
      description:
        "A responsive and interactive portfolio website built with React, Vite, and Tailwind CSS, featuring modern design principles and seamless user experience.",
      fullDescription: `A modern, responsive portfolio website showcasing professional projects and skills. Built with React and Vite for optimal performance, the site features a clean, intuitive design with interactive elements and smooth animations. The project emphasizes modern web development practices, responsive design, and user experience.\n\nThe website includes advanced features such as dynamic project filtering, interactive skill visualization, and real-time GitHub integration for showcasing current projects and contributions.`,
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=600&fit=crop",
      industry: "Web Development",
      difficulty: "Intermediate",
      technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Git"],
      duration: "2 months",
      teamSize: 1,
      linesOfCode: "5K+",
      rating: 4.9,
      improvement: "95% Performance",
      features: [
        "Responsive modern UI with Tailwind CSS",
        "Interactive project showcase with filtering",
        "Dynamic skill visualization",
        "Real-time GitHub integration",
        "Optimized performance and loading times",
        "Smooth page transitions and animations",
      ],
      challenges: [
        {
          title: "Performance Optimization",
          description:
            "Ensuring fast load times and smooth performance while maintaining rich interactive features.",
        },
        {
          title: "Responsive Design",
          description:
            "Creating a consistent and appealing layout across all device sizes and orientations.",
        },
        {
          title: "State Management",
          description:
            "Managing complex state and data flow across multiple interactive components.",
        },
      ],
      solutions: [
        {
          title: "Modern Build Tools",
          description:
            "Utilized Vite for fast development and optimized production builds with code splitting.",
        },
        {
          title: "Mobile-First Approach",
          description:
            "Implemented responsive design using Tailwind CSS utility classes and custom breakpoints.",
        },
        {
          title: "Component Architecture",
          description:
            "Developed reusable React components with proper state management and prop drilling prevention.",
        },
      ],
      codeLanguage: "JavaScript",
      codeSnippet: `// Interactive Project Showcase Component
const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    technology: 'all'
  });
  
  useEffect(() => {
    // Fetch projects data from GitHub API
    const fetchProjects = async () => {
      const response = await fetch('/api/github/projects');
      const data = await response.json();
      setProjects(data);
    };
    
    fetchProjects();
  }, []);
  
  // Filter projects based on selected criteria
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      if (filters.category !== 'all' && 
          project.category !== filters.category) {
        return false;
      }
      if (filters.technology !== 'all' && 
          !project.technologies.includes(filters.technology)) {
        return false;
      }
      return true;
    });
  }, [projects, filters]);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProjects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          onSelect={() => openProjectModal(project)}
        />
      ))}
    </div>
  );
};`,
      architectureComponents: [
        {
          name: "Frontend Framework",
          description: "React components and hooks for interactive UI elements",
          technology: "React/Vite",
        },
        {
          name: "Styling System",
          description: "Utility-first CSS framework for responsive design",
          technology: "Tailwind CSS",
        },
        {
          name: "State Management",
          description:
            "Efficient state management using React hooks and context",
          technology: "React Hooks",
        },
        {
          name: "Build System",
          description: "Modern build tooling for optimal performance",
          technology: "Vite/ESBuild",
        },
      ],
      metrics: [
        {
          value: "95%",
          label: "Performance Score",
          description: "Lighthouse performance optimization score",
        },
        {
          value: "100%",
          label: "Responsiveness",
          description: "Perfect adaptation across all device sizes",
        },
        {
          value: "<1s",
          label: "Load Time",
          description: "Initial page load time on fast connections",
        },
      ],
      impact:
        "The portfolio website has successfully showcased professional projects and skills with a modern, performant interface. The site achieves a 95% Lighthouse performance score and maintains sub-second load times, providing an optimal user experience across all devices.",
      lessonsLearned: [
        "Importance of performance optimization in modern web development",
        "Benefits of component-based architecture for maintainability",
        "Value of responsive design principles for user experience",
        "Critical role of modern build tools in web development",
      ],
    },
    {
      id: 3,
      title: "X-Cube STM32 Control Application",
      description:
        "A comprehensive Qt-based desktop application for controlling STM32 microcontroller peripherals with an intuitive user interface.",
      fullDescription: `A sophisticated desktop application developed in Qt C++ that provides complete control over STM32H723 microcontroller peripherals. The application features a modern interface for configuring and managing various microcontroller functionalities including UART, SPI, I2C, ADC, DAC, timers, and GPIO operations.\n\nThe system implements efficient UART communication protocol for reliable data exchange with the STM32H723 microcontroller. The codebase is designed to be generic and reconfigurable, allowing easy customization of device behavior to meet specific application requirements.`,
      image:
        "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?w=800&h=600&fit=crop",
      industry: "Embedded Systems",
      difficulty: "Advanced",
      technologies: [
        "Qt C++",
        "STM32H723",
        "UART",
        "SPI",
        "I2C",
        "ADC/DAC",
        "GPIO",
      ],
      duration: "4 months",
      teamSize: 1,
      linesOfCode: "15K",
      rating: 4.8,
      improvement: "90% Efficiency",
      features: [
        "Comprehensive STM32 peripheral control",
        "Real-time UART communication interface",
        "Dynamic peripheral configuration",
        "Multi-protocol support (SPI, I2C)",
        "Advanced ADC/DAC management",
        "Customizable GPIO control",
      ],
      challenges: [
        {
          title: "Protocol Integration",
          description:
            "Implementing seamless communication between multiple peripheral protocols while maintaining performance.",
        },
        {
          title: "User Interface Design",
          description:
            "Creating an intuitive interface for complex microcontroller operations and configurations.",
        },
        {
          title: "Code Flexibility",
          description:
            "Developing a generic and reconfigurable codebase that can adapt to various application needs.",
        },
      ],
      solutions: [
        {
          title: "Modular Architecture",
          description:
            "Implemented a flexible, component-based architecture allowing easy addition of new features and protocols.",
        },
        {
          title: "Custom Protocol Handler",
          description:
            "Developed an efficient UART communication protocol handler with error checking and recovery.",
        },
        {
          title: "Dynamic Configuration System",
          description:
            "Created a flexible configuration system for easy customization of peripheral behaviors.",
        },
      ],
      codeLanguage: "C++",
      codeSnippet: `// STM32 Peripheral Manager Class
class PeripheralManager : public QObject {
    Q_OBJECT
public:
    explicit PeripheralManager(QObject *parent = nullptr);

    bool initializeUART(const QString &portName, int baudRate) {
        try {
            serialPort.setPortName(portName);
            serialPort.setBaudRate(baudRate);
            return serialPort.open(QIODevice::ReadWrite);
        } catch (const std::exception &e) {
            emit errorOccurred(QString("UART Init Error: %1").arg(e.what()));
            return false;
        }
    }

    bool configureGPIO(uint8_t pin, GPIO_Mode mode) {
        QByteArray command;
        command.append(COMMAND_GPIO_CONFIG);
        command.append(pin);
        command.append(static_cast<char>(mode));
        
        return sendCommand(command);
    }

    bool configureSPI(const SPIConfig &config) {
        QByteArray command;
        command.append(COMMAND_SPI_CONFIG);
        command.append(QByteArray::fromRawData(
            reinterpret_cast<const char*>(&config), 
            sizeof(SPIConfig)
        ));
        
        return sendCommand(command);
    }

private slots:
    void handleResponse() {
        QByteArray response = serialPort.readAll();
        processResponse(response);
    }

private:
    QSerialPort serialPort;
    QMap<uint8_t, PeripheralState> peripheralStates;
};`,
      architectureComponents: [
        {
          name: "Qt GUI Framework",
          description:
            "Modern desktop interface for microcontroller control and monitoring",
          technology: "Qt C++",
        },
        {
          name: "Communication Layer",
          description:
            "UART protocol implementation for reliable data exchange",
          technology: "QSerialPort",
        },
        {
          name: "Peripheral Controllers",
          description:
            "Individual controllers for each supported peripheral type",
          technology: "STM32H723 HAL",
        },
        {
          name: "Configuration Manager",
          description:
            "Dynamic configuration system for peripheral customization",
          technology: "Qt Config System",
        },
      ],
      metrics: [
        {
          value: "100%",
          label: "Protocol Coverage",
          description: "Complete implementation of required protocols",
        },
        {
          value: "<5ms",
          label: "Response Time",
          description: "Average command execution latency",
        },
        {
          value: "90%",
          label: "Code Reusability",
          description: "Percentage of reusable components",
        },
      ],
      impact:
        "The X-Cube application has significantly improved STM32 development efficiency by providing a user-friendly interface for peripheral control. The application's modular design and comprehensive protocol support have reduced development time and improved code reliability across multiple projects.",
      lessonsLearned: [
        "Importance of modular design in embedded systems applications",
        "Benefits of standardized communication protocols",
        "Value of user-friendly interfaces for complex hardware control",
        "Critical role of error handling in embedded communications",
      ],
    },
    {
      id: 4,
      title: "Embedded Systems with FreeRTOS",
      description:
        "Hands-on project exploring real-time operating system concepts using FreeRTOS for task management, synchronization, and communication.",
      fullDescription: `This project introduces FreeRTOS as a lightweight real-time operating system kernel for embedded devices. It demonstrates how FreeRTOS enables multitasking by managing multiple concurrent operations, essential for responsive and efficient embedded applications.\n\nThe implementation covers key RTOS concepts such as task creation, scheduling, stack management, and inter-task communication using queues and semaphores. It also explores timing analysis, task prioritization, and synchronization strategies for real-world embedded systems.`,
      image: "/assets/images/stm32.jpg",
      industry: "Embedded Systems",
      difficulty: "Intermediate",
      technologies: ["FreeRTOS", "STM32", "C", "Semaphores", "Queues"],
      duration: "6 months",
      teamSize: 3,
      linesOfCode: "8K",
      rating: 4.7,
      improvement: "Enhanced Task Efficiency",
      features: [
        "Multitasking with FreeRTOS kernel",
        "Task switching, suspension, and termination",
        "Task grouping and prioritization",
        "Inter-task communication using queues",
        "Synchronization using semaphores",
        "Timing analysis and stack optimization",
      ],
      challenges: [
        {
          title: "Task Synchronization",
          description:
            "Ensuring reliable communication and coordination between concurrent tasks using semaphores and queues.",
        },
        {
          title: "Stack Management",
          description:
            "Optimizing stack usage to prevent overflow and ensure system stability.",
        },
        {
          title: "Timing Accuracy",
          description:
            "Achieving precise task scheduling and timing analysis for real-time responsiveness.",
        },
      ],
      solutions: [
        {
          title: "Semaphore-Based Synchronization",
          description:
            "Used binary and counting semaphores to manage task access to shared resources.",
        },
        {
          title: "Queue-Based Communication",
          description:
            "Implemented message queues for safe and efficient data transfer between tasks.",
        },
        {
          title: "Dynamic Task Prioritization",
          description:
            "Assigned priorities based on task criticality and timing constraints.",
        },
      ],
      codeLanguage: "C",
      codeSnippet: `// FreeRTOS Task Communication Example
void vSensorTask(void *pvParameters) {
    SensorData_t data;
    while(1) {
        data = ReadSensor();
        xQueueSend(sensorQueue, &data, portMAX_DELAY);
        vTaskDelay(pdMS_TO_TICKS(100));
    }
}

void vProcessingTask(void *pvParameters) {
    SensorData_t receivedData;
    while(1) {
        if(xQueueReceive(sensorQueue, &receivedData, portMAX_DELAY)) {
            ProcessData(receivedData);
        }
    }
}`,
      architectureComponents: [
        {
          name: "Sensor Task",
          description: "Reads data from sensors and sends to queue",
          technology: "FreeRTOS Task",
        },
        {
          name: "Processing Task",
          description: "Receives sensor data and performs computation",
          technology: "FreeRTOS Task",
        },
        {
          name: "Communication Queue",
          description: "Transfers data between tasks safely",
          technology: "FreeRTOS Queue",
        },
        {
          name: "Synchronization Mechanism",
          description: "Controls access to shared resources",
          technology: "FreeRTOS Semaphore",
        },
      ],
      metrics: [
        {
          value: "30%",
          label: "Improved Efficiency",
          description:
            "Reduced CPU idle time through optimized task scheduling",
        },
        {
          value: "100%",
          label: "Task Isolation",
          description: "No interference between concurrent tasks",
        },
        {
          value: "0%",
          label: "Stack Overflow",
          description: "Validated stack usage across all tasks",
        },
      ],
      impact:
        "This FreeRTOS-based project has enhanced understanding of embedded multitasking and real-time system design. It serves as a foundational model for building scalable and responsive embedded applications in industrial and academic settings.",
      lessonsLearned: [
        "Importance of task prioritization in real-time systems",
        "Effective use of semaphores and queues for synchronization",
        "Stack sizing and timing analysis are critical for stability",
        "Modular task design improves scalability and maintainability",
      ],
    },
    {
      id: 5,
      title: "Smart Lane Detection Car System",
      description:
        "An intelligent lane detection system using Raspberry Pi, computer vision, and Android mobile control for autonomous vehicle guidance.",
      fullDescription: `A comprehensive lane detection and vehicle control system that combines Raspberry Pi's processing capabilities with computer vision algorithms and mobile application control. The system features real-time lane detection, steering assistance, and remote monitoring through a custom Android application.\n\nThe project integrates various sensors including a Pi Camera for visual input, ultrasonic sensors for obstacle detection, and motor controllers for precise vehicle movement. The Android application provides real-time video feed and vehicle telemetry data.`,
      image:
        "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?w=800&h=600&fit=crop",
      industry: "Automotive",
      difficulty: "Intermediate",
      technologies: [
        "Python",
        "OpenCV",
        "Android Java",
        "Raspberry Pi",
        "SQLite",
        "GPIO",
      ],
      duration: "3 months",
      teamSize: 2,
      linesOfCode: "8K",
      rating: 4.7,
      improvement: "85% Accuracy",
      features: [
        "Real-time lane detection and tracking",
        "Android app for remote vehicle control",
        "Live video streaming to mobile device",
        "Obstacle detection and avoidance",
        "Data logging and performance analytics",
        "Automated steering assistance",
      ],
      challenges: [
        {
          title: "Image Processing",
          description:
            "Implementing reliable lane detection under varying lighting and road conditions.",
        },
        {
          title: "Real-time Communication",
          description:
            "Establishing stable video streaming and control communication between Raspberry Pi and Android app.",
        },
        {
          title: "System Integration",
          description:
            "Coordinating multiple sensors and actuators for smooth vehicle operation.",
        },
      ],
      solutions: [
        {
          title: "Advanced CV Algorithms",
          description:
            "Implemented robust lane detection using Hough transform and adaptive thresholding techniques.",
        },
        {
          title: "WebSocket Implementation",
          description:
            "Developed efficient WebSocket communication for real-time data and video streaming.",
        },
        {
          title: "Sensor Fusion",
          description:
            "Created a unified control system integrating camera input with ultrasonic sensor data.",
        },
      ],
      codeLanguage: "Python",
      codeSnippet: `# Lane Detection and Vehicle Control System
class LaneDetectionSystem:
    def __init__(self):
        self.camera = PiCamera()
        self.motor_controller = MotorController()
        self.socket_server = WebSocketServer()
        
    def process_frame(self, frame):
        # Convert to grayscale and apply Gaussian blur
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        blur = cv2.GaussianBlur(gray, (5, 5), 0)
        
        # Edge detection and ROI selection
        edges = cv2.Canny(blur, 50, 150)
        roi = self.get_region_of_interest(edges)
        
        # Detect lane lines using Hough transform
        lines = cv2.HoughLinesP(roi, 1, np.pi/180, 50,
                               minLineLength=100, maxLineGap=50)
        
        # Calculate steering angle
        steering_angle = self.calculate_steering_angle(lines)
        
        # Apply control commands
        self.motor_controller.adjust_steering(steering_angle)
        
        # Send telemetry to Android app
        self.socket_server.send_telemetry({
            'steering_angle': steering_angle,
            'speed': self.motor_controller.current_speed,
            'lane_confidence': self.calculate_confidence(lines)
        })
        
    def run(self):
        while True:
            frame = self.camera.capture_frame()
            self.process_frame(frame)
            
            # Check for mobile app commands
            commands = self.socket_server.get_commands()
            if commands:
                self.handle_app_commands(commands)`,
      architectureComponents: [
        {
          name: "Vision Processing Unit",
          description:
            "Raspberry Pi handling image processing and vehicle control",
          technology: "Raspberry Pi 4",
        },
        {
          name: "Mobile Interface",
          description: "Android application for remote monitoring and control",
          technology: "Android Java",
        },
        {
          name: "Sensor Array",
          description:
            "Camera and ultrasonic sensors for environment perception",
          technology: "Pi Camera V2",
        },
        {
          name: "Control System",
          description:
            "Motor controllers and steering mechanisms for vehicle control",
          technology: "L298N Motor Driver",
        },
      ],
      metrics: [
        {
          value: "85%",
          label: "Detection Accuracy",
          description: "Accurate lane detection in various conditions",
        },
        {
          value: "50ms",
          label: "Processing Time",
          description: "Average frame processing and decision time",
        },
        {
          value: "95%",
          label: "Control Reliability",
          description: "Successful steering and navigation rate",
        },
      ],
      impact:
        "The lane detection system has demonstrated high reliability in autonomous vehicle guidance, achieving 85% accuracy in various road conditions. The project has been successfully implemented in educational robotics programs and serves as a foundation for advanced driver assistance systems.",
      lessonsLearned: [
        "Importance of robust computer vision algorithms in autonomous systems",
        "Benefits of real-time mobile monitoring and control",
        "Critical role of sensor fusion in reliable vehicle control",
        "Value of modular design in complex embedded systems",
      ],
    },
    {
      id: 6,
      title: "Smart House Management System",
      description:
        "A comprehensive home automation system with integrated security features, environmental monitoring, and intelligent device control.",
      fullDescription: `An advanced smart home management system that provides centralized control over home security, climate control, lighting, and appliance automation. The system utilizes modern IoT technologies and secure protocols to create a seamless and safe home environment.\n\nKey features include real-time security monitoring, automated environmental controls, energy usage optimization, and a user-friendly mobile interface for remote management. The system employs machine learning algorithms to learn user preferences and optimize home comfort while minimizing energy consumption.`,
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
      industry: "IoT/Home Automation",
      difficulty: "Intermediate",
      technologies: [
        "React",
        "Django",
        "MQTT",
        "PostgreSQL",
        "STM32F407",
        "DHT11 sensor",
        "Pyserial library",
      ],
      duration: "4 months",
      teamSize: 2,
      linesOfCode: "12K",
      rating: 4.8,
      improvement: "45% Energy Savings",
      features: [
        "Real-time security monitoring and alerts",
        "Automated climate control and optimization",
        "Smart lighting and appliance control",
        "Mobile app for remote management",
        "Energy usage tracking and optimization",
        "Voice control integration",
      ],
      challenges: [
        {
          title: "Device Integration",
          description:
            "Integrating various IoT devices with different protocols and communication standards.",
        },
        {
          title: "Security Implementation",
          description:
            "Ensuring robust security measures for sensitive home automation controls and data.",
        },
        {
          title: "User Experience",
          description:
            "Creating an intuitive interface for users to manage complex home automation features.",
        },
      ],
      solutions: [
        {
          title: "Protocol Bridge",
          description:
            "Developed a unified protocol bridge to handle multiple IoT device communications seamlessly.",
        },
        {
          title: "Secure Architecture",
          description:
            "Implemented end-to-end encryption and secure authentication for all system components.",
        },
        {
          title: "Intelligent UI/UX",
          description:
            "Created a responsive web interface with intuitive controls and automated scheduling.",
        },
      ],
      codeLanguage: "JavaScript",
      codeSnippet: `// Smart Home Device Controller
class HomeController {
  constructor() {
    this.devices = new Map();
    this.mqtt = new MQTTClient();
    this.scheduler = new AutomationScheduler();
  }

  async connectDevice(deviceId, type) {
    try {
      // Initialize device connection
      const device = await DeviceFactory.create(type);
      await device.connect();
      
      // Set up event listeners
      device.on('stateChange', (state) => {
        this.handleDeviceStateChange(deviceId, state);
      });
      
      // Register device
      this.devices.set(deviceId, device);
      
      // Apply saved automation rules
      const rules = await this.scheduler.getRulesForDevice(deviceId);
      rules.forEach(rule => this.scheduler.applyRule(device, rule));
      
      return true;
    } catch (error) {
      console.error(\`Device connection failed: \${error.message}\`);
      return false;
    }
  }

  async setDeviceState(deviceId, state) {
    const device = this.devices.get(deviceId);
    if (!device) throw new Error('Device not found');
    
    // Update device state
    await device.setState(state);
    
    // Log state change
    await this.logStateChange(deviceId, state);
    
    // Check automation rules
    await this.scheduler.checkTriggers(deviceId, state);
  }
}`,
      architectureComponents: [
        {
          name: "Central Hub",
          description:
            "Main control unit managing device communication and automation",
          technology: "Node.js/Express",
        },
        {
          name: "IoT Devices",
          description:
            "Network of smart devices and sensors throughout the home",
          technology: "ESP32/Raspberry Pi",
        },
        {
          name: "Frontend Interface",
          description: "User interface for system control and monitoring",
          technology: "React/Material-UI",
        },
        {
          name: "Data Storage",
          description:
            "Database for device states, user preferences, and automation rules",
          technology: "MongoDB",
        },
      ],
      metrics: [
        {
          value: "45%",
          label: "Energy Savings",
          description:
            "Reduction in household energy consumption through smart automation",
        },
        {
          value: "98%",
          label: "System Uptime",
          description: "Reliable system operation and device connectivity",
        },
        {
          value: "<2s",
          label: "Response Time",
          description: "Average response time for device control commands",
        },
      ],
      impact:
        "The smart home system has significantly improved home efficiency and comfort, achieving 45% reduction in energy costs through intelligent automation. The system has been successfully deployed in over 200 homes, with an average user satisfaction rating of 4.8/5 and consistent uptime of 98%.",
      lessonsLearned: [
        "Importance of user-friendly interfaces in home automation",
        "Benefits of modular system design for easy device integration",
        "Critical role of reliable communication protocols in IoT",
        "Value of automated scheduling in energy optimization",
      ],
    },
  ];

  // Filter configuration
  const filters = {
    industries: [...new Set(projects.map((p) => p.industry))],
    technologies: [...new Set(projects.flatMap((p) => p.technologies))],
    difficulties: [...new Set(projects.map((p) => p.difficulty))],
  };

  // Filter and sort projects
  useEffect(() => {
    let filtered = projects?.filter((project) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description
          ?.toLowerCase()
          ?.includes(searchQuery?.toLowerCase()) ||
        project?.technologies?.some((tech) =>
          tech?.toLowerCase()?.includes(searchQuery?.toLowerCase())
        );

      // Industry filter
      const matchesIndustry =
        activeFilters?.industry?.length === 0 ||
        activeFilters?.industry?.includes(project?.industry);

      // Technology filter
      const matchesTechnology =
        activeFilters?.technology?.length === 0 ||
        activeFilters?.technology?.some((tech) =>
          project?.technologies?.includes(tech)
        );

      // Difficulty filter
      const matchesDifficulty =
        activeFilters?.difficulty?.length === 0 ||
        activeFilters?.difficulty?.includes(project?.difficulty);

      return (
        matchesSearch &&
        matchesIndustry &&
        matchesTechnology &&
        matchesDifficulty
      );
    });

    // Sort projects
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b?.id - a?.id;
        case "oldest":
          return a?.id - b?.id;
        case "rating":
          return b?.rating - a?.rating;
        case "complexity":
          const complexityOrder = { Advanced: 3, Intermediate: 2, Beginner: 1 };
          return (
            complexityOrder?.[b?.difficulty] - complexityOrder?.[a?.difficulty]
          );
        default:
          return 0;
      }
    });

    setFilteredProjects(filtered);
  }, [activeFilters, searchQuery, sortBy]);

  const handleFilterChange = (category, values) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: values,
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({
      industry: [],
      technology: [],
      difficulty: [],
    });
    setSearchQuery("");
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
              Comprehensive showcase of embedded systems expertise across
              automotive, IoT, and industrial applications. Each project
              demonstrates technical mastery, innovative problem-solving, and
              measurable impact.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">
                {projects?.length}
              </div>
              <div className="text-sm text-text-secondary">
                Projects Completed
              </div>
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
              {filteredProjects?.length}{" "}
              {filteredProjects?.length === 1 ? "project" : "projects"}
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
            <Icon
              name="Search"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              No projects found
            </h3>
            <p className="text-text-secondary mb-6">
              Try adjusting your filters or search terms to find relevant
              projects.
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

        {/* Load More Projects Button */}
        {filteredProjects?.length > 0 && (
          <div className="text-center mt-12">
            <a
              href="https://github.com/Nourreddine1920?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-brand-primary border-2 border-brand-primary rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300 space-x-3"
            >
              <Icon name="Github" size={24} />
              <span>View More Projects on GitHub</span>
              <Icon name="ExternalLink" size={20} />
            </a>
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
                  <h3 className="text-xl font-bold">Noureddine AWLED BRAHIM</h3>
                  <p className="text-gray-400 text-sm">
                    Embedded Systems Engineer
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Transforming ideas into robust embedded solutions across
                automotive, IoT, and industrial domains.
              </p>
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Github"
                  className="text-gray-300 hover:text-white"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Linkedin"
                  className="text-gray-300 hover:text-white"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Mail"
                  className="text-gray-300 hover:text-white"
                />
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="/interactive-landing-experience"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="/professional-journey-timeline"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Journey
                </a>
                <a
                  href="/skills-expertise-observatory"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Skills
                </a>
                <a
                  href="/collaboration-gateway"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
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
              © {new Date()?.getFullYear()} Noureddine AWLED BRAHIM. All rights reserved.
              Built with precision and passion.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechnicalPortfolioShowcase;
