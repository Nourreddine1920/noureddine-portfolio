import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SystemStatusDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  // Personal/professional stats
  const personalStats = [
    {
      label: "Years Experience",
      value: "2+",
      icon: "Calendar",
      color: "text-blue-400"
    },
    {
      label: "Projects Delivered",
      value: "40+",
      icon: "Rocket",
      color: "text-green-400"
    },
    {
      label: "Technologies Mastered",
      value: "15+",
      icon: "Cpu",
      color: "text-cyan-400"
    },
    {
      label: "Certifications",
      value: "Embedded Pro",
      icon: "Award",
      color: "text-yellow-400"
    },
    {
      label: "GitHub Contributions",
      value: "1500+",
      icon: "Github",
      color: "text-slate-400"
    },
    // New professional stats aligned with device simulations
    {
      label: "MCU Platforms",
      value: "STM32, Raspberry Pi",
      icon: "Chip",
      color: "text-purple-400"
    },
    {
      label: "IoT & Robotics",
      value: "Python, CAN Bus",
      icon: "Settings",
      color: "text-pink-400"
    },
    {
      label: "Custom Hardware",
      value: "PCB Design, Sensors",
      icon: "Tool",
      color: "text-orange-400"
    },
    {
      label: "Mobile Integration",
      value: "App Controlled Devices",
      icon: "Smartphone",
      color: "text-teal-400"
    }
  ];

  // Real GitHub projects for Nourreddine1920
  const githubActivity = [
    {
      repo: "STM32_LAB_Backend",
      url: "https://github.com/Nourreddine1920/STM32_LAB_Backend",
      language: "C, Python",
      status: "active",
      description: "Backend for STM32 lab automation and diagnostics."
    },
    {
      repo: "STM32_LAB_Frontend",
      url: "https://github.com/Nourreddine1920/STM32_LAB_Frontend",
      language: "React, JS",
      status: "active",
      description: "Frontend dashboard for STM32 lab management."
    },
    {
      repo: "exti-irq-test-orange-blink",
      url: "https://github.com/Nourreddine1920/exti-irq-test-orange-blink",
      language: "C",
      status: "maintenance",
      description: "STM32 EXTI IRQ test project for orange LED blink."
    },
    {
      repo: "X-Cube-Application-STM32",
      url: "https://github.com/Nourreddine1920/X-Cube-Application-STM32",
      language: "C",
      status: "active",
      description: "Application examples for STM32 X-Cube expansion."
    },
    // Additional GitHub projects
    {
      repo: "Linux_Kernel_Driver",
      url: "https://github.com/Nourreddine1920/Linux_Kernel_Driver",
      language: "C",
      status: "active",
      description: "Custom Linux kernel driver development for embedded systems."
    },
    {
      repo: "github_actions",
      url: "https://github.com/Nourreddine1920/github_actions",
      language: "YAML, CI/CD",
      status: "active",
      description: "Automated workflows and CI/CD pipelines using GitHub Actions."
    },
    {
      repo: "MQTT-Brocker-STM32-SIM7600",
      url: "https://github.com/Nourreddine1920/MQTT-Brocker-STM32-SIM7600",
      language: "C",
      status: "active",
      description: "MQTT broker implementation on STM32 with SIM7600 for IoT connectivity."
    },
    {
      repo: "I2C-Configuration-with-Registres",
      url: "https://github.com/Nourreddine1920/I2C-Configuration-with-Registres",
      language: "C",
      status: "active",
      description: "I2C configuration and register management for embedded devices."
    }
  ];

  const deviceSimulations = [
    { id: "STM32-Series", type: "STM32 Development Boards (F0, F1, F4, F7, H7)", status: "active", utility: "MCU, RTOS, Drivers" },
    { id: "Raspberry-Pi", type: "Raspberry Pi 4 Model B", status: "active", utility: "Python, IoT, Robotics" },
    { id: "Temp-Sensor", type: "Digital Temperature Sensor", status: "active", utility: "Environmental Monitoring" },
    { id: "CAN-Analyzer", type: "CAN Bus Analyzer Tool", status: "maintenance", utility: "Bus Diagnostics" },
    { id: "CAN-Node", type: "CAN Node (Custom PCB)", status: "active", utility: "Automotive, Industrial" },
    { id: "Ultrasonic-Sensor", type: "Ultrasonic Distance Sensor", status: "active", utility: "Obstacle Detection" },
    { id: "Autonomous-Car", type: "Raspberry Pi Autonomous Car (Mobile App Controlled)", status: "prototype", utility: "Mobile App, Autonomous Driving" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Simulate changing metrics
      setSystemMetrics(prev => ({
        cpuUsage: Math.max(20, Math.min(80, prev?.cpuUsage + (Math.random() - 0.5) * 10)),
        memoryUsage: Math.max(30, Math.min(90, prev?.memoryUsage + (Math.random() - 0.5) * 8)),
        networkActivity: Math.max(10, Math.min(50, prev?.networkActivity + (Math.random() - 0.5) * 15)),
        activeConnections: Math.max(5, Math.min(15, prev?.activeConnections + Math.floor((Math.random() - 0.5) * 3)))
      }));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'text-green-500';
      case 'active': return 'text-blue-500';
      case 'maintenance': return 'text-yellow-500';
      case 'idle': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'running': return 'bg-green-100';
      case 'active': return 'bg-blue-100';
      case 'maintenance': return 'bg-yellow-100';
      case 'idle': return 'bg-gray-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Live System Dashboard</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real-time monitoring of development environment, GitHub activity, and embedded device simulations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* System Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Professional Stats</h3>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Live</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {personalStats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center bg-slate-700 rounded-xl p-4">
                  <Icon name={stat.icon} size={28} className={stat.color + " mb-2"} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="text-xs text-slate-500 font-mono mt-6">
              Last updated: {currentTime?.toLocaleTimeString()}
            </div>
          </motion.div>

          {/* GitHub Activity */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">GitHub Activity</h3>
              <Icon name="Github" size={20} className="text-slate-400" />
            </div>

            <div className="space-y-4">
              {githubActivity?.map((repo, index) => (
                <motion.div
                  key={repo?.repo}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-3 bg-slate-700 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(repo?.status)?.replace('text-', 'bg-')}`}></div>
                    <div>
                      <a href={repo?.url} target="_blank" rel="noopener noreferrer" className="font-medium text-sm text-blue-400 hover:underline">
                        {repo?.repo}
                      </a>
                      <div className="text-xs text-slate-400">{repo?.language}</div>
                      <div className="text-xs text-slate-400 mt-1">{repo?.description}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <a href={repo?.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-300 hover:underline">View Repo</a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Total commits this week</span>
                <span className="font-bold text-green-400">40</span>
              </div>
            </div>
          </motion.div>

          {/* Device Simulations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-2xl p-6 border border-slate-700"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Device Simulations</h3>
              <Icon name="Cpu" size={20} className="text-slate-400" />
            </div>

            <div className="space-y-4">
              {deviceSimulations?.map((device, index) => (
                <motion.div
                  key={device?.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-slate-700 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(device?.status)?.replace('text-', 'bg-')}`}></div>
                      <span className="font-medium text-sm">{device?.id}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusBg(device?.status)} ${getStatusColor(device?.status)}`}>
                      {device?.status}
                    </span>
                  </div>
                  
                  <div className="text-xs text-slate-400 mb-3">{device?.type}</div>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="col-span-2">
                      <span className="text-slate-400">Utility:</span>
                      <span className="ml-1 font-mono">{device?.utility}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SystemStatusDashboard;