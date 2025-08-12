import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const InteractiveSkillsRadar = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: "Embedded C/C++",
      level: 95,
      category: "Programming",
      applications: ["Firmware Development", "Device Drivers", "Real-time Systems"],
      experience: "5+ years",
      projects: 25,
      icon: "Code",
      color: "#3b82f6"
    },
    {
      name: "STM32 Microcontrollers",
      level: 90,
      category: "Hardware",
      applications: ["ARM Cortex-M", "HAL Programming", "Peripheral Control"],
      experience: "4+ years",
      projects: 20,
      icon: "Cpu",
      color: "#10b981"
    },
    {
      name: "RTOS (FreeRTOS)",
      level: 85,
      category: "Systems",
      applications: ["Task Scheduling", "Memory Management", "Inter-task Communication"],
      experience: "3+ years",
      projects: 15,
      icon: "Layers",
      color: "#f59e0b"
    },
    {
      name: "CAN Bus Protocol",
      level: 88,
      category: "Communication",
      applications: ["Automotive Networks", "Industrial Automation", "Protocol Analysis"],
      experience: "4+ years",
      projects: 18,
      icon: "Network",
      color: "#ef4444"
    },
    {
      name: "IoT Development",
      level: 82,
      category: "Connectivity",
      applications: ["WiFi/Bluetooth", "MQTT", "Cloud Integration"],
      experience: "3+ years",
      projects: 12,
      icon: "Wifi",
      color: "#8b5cf6"
    },
    {
      name: "PCB Design",
      level: 75,
      category: "Hardware",
      applications: ["Altium Designer", "KiCad", "Signal Integrity"],
      experience: "2+ years",
      projects: 10,
      icon: "CircuitBoard",
      color: "#06b6d4"
    },
    {
      name: "Debugging & Testing",
      level: 92,
      category: "Quality",
      applications: ["JTAG/SWD", "Logic Analyzers", "Unit Testing"],
      experience: "5+ years",
      projects: 30,
      icon: "Bug",
      color: "#84cc16"
    },
    {
      name: "Linux Embedded",
      level: 78,
      category: "Systems",
      applications: ["Yocto Project", "Device Tree", "Kernel Modules"],
      experience: "2+ years",
      projects: 8,
      icon: "Terminal",
      color: "#f97316"
    }
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  // Calculate radar chart points
  const getRadarPoints = () => {
    const centerX = 200;
    const centerY = 200;
    const maxRadius = 150;
    
    return skills?.map((skill, index) => {
      const angle = (index * 2 * Math.PI) / skills?.length - Math.PI / 2;
      const radius = (skill?.level / 100) * maxRadius;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      return { x, y, angle, radius, skill, index };
    });
  };

  const radarPoints = getRadarPoints();

  // Create path for radar chart
  const createRadarPath = () => {
    const points = radarPoints?.map(point => `${point?.x},${point?.y}`)?.join(' ');
    return `M ${points} Z`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Interactive visualization of technical competencies with detailed proficiency levels and real-world applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <svg width="400" height="400" viewBox="0 0 400 400" className="w-full h-auto">
                {/* Background circles */}
                {[20, 40, 60, 80, 100]?.map((percentage, index) => (
                  <circle
                    key={index}
                    cx="200"
                    cy="200"
                    r={(percentage / 100) * 150}
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                ))}

                {/* Axis lines */}
                {radarPoints?.map((point, index) => (
                  <line
                    key={index}
                    x1="200"
                    y1="200"
                    x2={200 + 150 * Math.cos(point?.angle)}
                    y2={200 + 150 * Math.sin(point?.angle)}
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                ))}

                {/* Skill area */}
                <motion.path
                  d={createRadarPath()}
                  fill="rgba(59, 130, 246, 0.1)"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  viewport={{ once: true }}
                />

                {/* Skill points */}
                {radarPoints?.map((point, index) => (
                  <motion.g key={index}>
                    <motion.circle
                      cx={point?.x}
                      cy={point?.y}
                      r={hoveredSkill === index ? 8 : 6}
                      fill={point?.skill?.color}
                      stroke="white"
                      strokeWidth="2"
                      className="cursor-pointer"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredSkill(index)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onClick={() => setSelectedSkill(selectedSkill === index ? null : index)}
                    />
                    
                    {/* Skill labels */}
                    <text
                      x={200 + (170 * Math.cos(point?.angle))}
                      y={200 + (170 * Math.sin(point?.angle))}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-xs font-medium fill-slate-700"
                      style={{
                        transform: `translate(${point?.angle > Math.PI/2 && point?.angle < 3*Math.PI/2 ? '0' : '0'}, 0)`
                      }}
                    >
                      {point?.skill?.name?.split(' ')?.[0]}
                    </text>
                  </motion.g>
                ))}

                {/* Center label */}
                <text
                  x="200"
                  y="200"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-sm font-bold fill-slate-900"
                >
                  Skills
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Skill Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {selectedSkill !== null ? (
              // Selected skill details
              (<div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${skills?.[selectedSkill]?.color}20` }}
                  >
                    <Icon 
                      name={skills?.[selectedSkill]?.icon} 
                      size={24} 
                      style={{ color: skills?.[selectedSkill]?.color }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{skills?.[selectedSkill]?.name}</h3>
                    <p className="text-slate-600">{skills?.[selectedSkill]?.category}</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {/* Proficiency Level */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">Proficiency Level</span>
                      <span className="text-sm font-bold text-slate-900">{skills?.[selectedSkill]?.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <motion.div
                        className="h-3 rounded-full"
                        style={{ backgroundColor: skills?.[selectedSkill]?.color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${skills?.[selectedSkill]?.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>

                  {/* Experience & Projects */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">{skills?.[selectedSkill]?.experience}</div>
                      <div className="text-sm text-slate-600">Experience</div>
                    </div>
                    <div className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">{skills?.[selectedSkill]?.projects}</div>
                      <div className="text-sm text-slate-600">Projects</div>
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Applications</h4>
                    <div className="space-y-2">
                      {skills?.[selectedSkill]?.applications?.map((app, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: skills?.[selectedSkill]?.color }}></div>
                          <span className="text-sm text-slate-700">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>)
            ) : (
              // Skills overview
              (<div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Click on any skill point to explore details</h3>
                {categories?.map((category, categoryIndex) => (
                  <div key={category} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                    <h4 className="text-lg font-semibold text-slate-900 mb-4">{category}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {skills?.filter(skill => skill?.category === category)?.map((skill, index) => (
                          <div
                            key={skill?.name}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors duration-200"
                            onClick={() => setSelectedSkill(skills?.indexOf(skill))}
                          >
                            <div 
                              className="w-8 h-8 rounded-lg flex items-center justify-center"
                              style={{ backgroundColor: `${skill?.color}20` }}
                            >
                              <Icon name={skill?.icon} size={16} style={{ color: skill?.color }} />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-slate-900">{skill?.name}</div>
                              <div className="text-xs text-slate-500">{skill?.level}% proficiency</div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>)
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkillsRadar;