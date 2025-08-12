import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const InteractiveHardwareSchematics = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [signalFlow, setSignalFlow] = useState(false);

  const components = [
    {
      id: 'mcu',
      name: 'STM32F4 MCU',
      position: { x: 200, y: 150 },
      size: { width: 80, height: 60 },
      description: 'ARM Cortex-M4 microcontroller with FPU, running at 168MHz',
      specifications: ['32-bit ARM Cortex-M4', '1MB Flash', '192KB RAM', '168MHz Clock'],
      connections: ['sensor', 'can', 'power', 'debug'],
      color: '#3b82f6'
    },
    {
      id: 'sensor',
      name: 'Temperature Sensor',
      position: { x: 50, y: 80 },
      size: { width: 60, height: 40 },
      description: 'High-precision digital temperature sensor with I2C interface',
      specifications: ['±0.5°C Accuracy', 'I2C Interface', '12-bit Resolution', '-40°C to +125°C'],
      connections: ['mcu'],
      color: '#10b981'
    },
    {
      id: 'can',
      name: 'CAN Transceiver',
      position: { x: 350, y: 120 },
      size: { width: 70, height: 50 },
      description: 'High-speed CAN transceiver for automotive communication',
      specifications: ['ISO 11898-2', '1Mbps Max Speed', '3.3V/5V Compatible', 'ESD Protection'],
      connections: ['mcu', 'canbus'],
      color: '#f59e0b'
    },
    {
      id: 'power',
      name: 'Power Management',
      position: { x: 180, y: 280 },
      size: { width: 80, height: 45 },
      description: 'Switching regulator with multiple voltage rails',
      specifications: ['12V to 3.3V/5V', '90% Efficiency', 'Over-current Protection', 'Thermal Shutdown'],
      connections: ['mcu', 'sensor', 'can'],
      color: '#ef4444'
    },
    {
      id: 'debug',
      name: 'Debug Interface',
      position: { x: 320, y: 220 },
      size: { width: 60, height: 35 },
      description: 'SWD/JTAG interface for programming and debugging',
      specifications: ['SWD Protocol', 'JTAG Compatible', 'Real-time Trace', 'Breakpoint Support'],
      connections: ['mcu'],
      color: '#8b5cf6'
    },
    {
      id: 'canbus',
      name: 'CAN Bus Network',
      position: { x: 480, y: 100 },
      size: { width: 90, height: 30 },
      description: 'High-speed CAN network connection',
      specifications: ['Twisted Pair', '120Ω Termination', 'Differential Signaling', 'Noise Immunity'],
      connections: ['can'],
      color: '#06b6d4'
    }
  ];

  const connections = [
    { from: 'sensor', to: 'mcu', type: 'I2C', color: '#10b981' },
    { from: 'mcu', to: 'can', type: 'CAN_TX/RX', color: '#f59e0b' },
    { from: 'can', to: 'canbus', type: 'CAN_H/L', color: '#06b6d4' },
    { from: 'power', to: 'mcu', type: '3.3V', color: '#ef4444' },
    { from: 'power', to: 'sensor', type: '3.3V', color: '#ef4444' },
    { from: 'power', to: 'can', type: '5V', color: '#ef4444' },
    { from: 'mcu', to: 'debug', type: 'SWD', color: '#8b5cf6' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSignalFlow(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getConnectionPath = (from, to) => {
    const fromComp = components?.find(c => c?.id === from);
    const toComp = components?.find(c => c?.id === to);
    
    if (!fromComp || !toComp) return '';

    const fromX = fromComp?.position?.x + fromComp?.size?.width / 2;
    const fromY = fromComp?.position?.y + fromComp?.size?.height / 2;
    const toX = toComp?.position?.x + toComp?.size?.width / 2;
    const toY = toComp?.position?.y + toComp?.size?.height / 2;

    // Create curved path
    const midX = (fromX + toX) / 2;
    const midY = (fromY + toY) / 2;
    const controlOffset = 20;

    return `M ${fromX} ${fromY} Q ${midX + controlOffset} ${midY - controlOffset} ${toX} ${toY}`;
  };

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Interactive Hardware Architecture</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Explore embedded system components and their interconnections with animated signal flow visualization
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Schematic Diagram */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
            >
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold">System Architecture</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${signalFlow ? 'bg-green-400' : 'bg-slate-600'} transition-colors duration-300`}></div>
                    <span className="text-sm text-slate-400">Signal Flow</span>
                  </div>
                  <button
                    onClick={() => setActiveComponent(null)}
                    className="text-sm text-blue-400 hover:text-blue-300"
                  >
                    Reset View
                  </button>
                </div>
              </div>

              <div className="relative bg-slate-900 rounded-xl p-6 min-h-[400px]">
                <svg width="100%" height="400" viewBox="0 0 600 350" className="w-full">
                  {/* Connection Lines */}
                  {connections?.map((conn, index) => (
                    <g key={index}>
                      <motion.path
                        d={getConnectionPath(conn?.from, conn?.to)}
                        stroke={conn?.color}
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={signalFlow ? "5,5" : "none"}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className={signalFlow ? 'signal-flow' : ''}
                      />
                      
                      {/* Connection Label */}
                      <text
                        x={(components?.find(c => c?.id === conn?.from)?.position?.x + components?.find(c => c?.id === conn?.to)?.position?.x) / 2}
                        y={(components?.find(c => c?.id === conn?.from)?.position?.y + components?.find(c => c?.id === conn?.to)?.position?.y) / 2 - 10}
                        textAnchor="middle"
                        className="text-xs fill-slate-400"
                      >
                        {conn?.type}
                      </text>
                    </g>
                  ))}

                  {/* Components */}
                  {components?.map((component, index) => (
                    <motion.g
                      key={component?.id}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <rect
                        x={component?.position?.x}
                        y={component?.position?.y}
                        width={component?.size?.width}
                        height={component?.size?.height}
                        rx="8"
                        fill={activeComponent === component?.id ? component?.color : 'rgba(51, 65, 85, 0.8)'}
                        stroke={component?.color}
                        strokeWidth="2"
                        className="cursor-pointer transition-all duration-300"
                        onClick={() => setActiveComponent(activeComponent === component?.id ? null : component?.id)}
                      />
                      
                      <text
                        x={component?.position?.x + component?.size?.width / 2}
                        y={component?.position?.y + component?.size?.height / 2}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xs font-medium fill-white pointer-events-none"
                      >
                        {component?.name}
                      </text>

                      {/* Active indicator */}
                      {activeComponent === component?.id && (
                        <motion.circle
                          cx={component?.position?.x + component?.size?.width + 10}
                          cy={component?.position?.y - 5}
                          r="4"
                          fill={component?.color}
                          initial={{ scale: 0 }}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                    </motion.g>
                  ))}
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Component Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {activeComponent ? (
              // Selected component details
              (<div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
                {(() => {
                  const component = components?.find(c => c?.id === activeComponent);
                  return (
                    <>
                      <div className="flex items-center space-x-3 mb-6">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${component?.color}20` }}
                        >
                          <Icon name="Cpu" size={20} style={{ color: component?.color }} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{component?.name}</h3>
                          <p className="text-sm text-slate-400">Hardware Component</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-300 mb-2">Description</h4>
                          <p className="text-sm text-slate-400 leading-relaxed">{component?.description}</p>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-slate-300 mb-3">Specifications</h4>
                          <div className="space-y-2">
                            {component?.specifications?.map((spec, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: component?.color }}></div>
                                <span className="text-sm text-slate-400">{spec}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-slate-300 mb-3">Connections</h4>
                          <div className="flex flex-wrap gap-2">
                            {component?.connections?.map((conn, index) => {
                              const connectedComp = components?.find(c => c?.id === conn);
                              return connectedComp ? (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                                  style={{ borderLeft: `3px solid ${connectedComp?.color}` }}
                                >
                                  {connectedComp?.name}
                                </span>
                              ) : null;
                            })}
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>)
            ) : (
              // Component overview
              (<div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">System Components</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Click on any component in the schematic to explore its specifications and connections.
                </p>
                {components?.map((component, index) => (
                  <motion.div
                    key={component?.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-800 rounded-lg p-4 border border-slate-700 cursor-pointer hover:border-slate-600 transition-colors duration-200"
                    onClick={() => setActiveComponent(component?.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${component?.color}20` }}
                      >
                        <Icon name="Cpu" size={16} style={{ color: component?.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{component?.name}</div>
                        <div className="text-xs text-slate-400">{component?.specifications?.[0]}</div>
                      </div>
                      <Icon name="ChevronRight" size={16} className="text-slate-500" />
                    </div>
                  </motion.div>
                ))}
              </div>)
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveHardwareSchematics;