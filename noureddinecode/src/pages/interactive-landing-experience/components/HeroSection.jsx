import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Professional highlights to display instead of code snippets
  const highlights = [
    "STM32 Firmware & RTOS Expert",
    "Driver Development: I2C, SPI, UART, CAN",
    "Workflow Automation: Jenkins & Docker",
    "IoT, Automotive & Industrial Automation Enthusiast",
    "2+ Years Experience, 40+ Projects Delivered",
    "Certified Embedded Systems Professional"
  ];

  // Scroll to Featured Projects section
  const handleExploreProjects = () => {
    const section = document.getElementById('featured-projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Icon name="Zap" size={16} />
                <span>Embedded Systems Engineer</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              >
                Embedded Software Engineer
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  STM32 Firmware, RTOS & Driver Development
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-slate-600 leading-relaxed max-w-2xl"
              >
                Embedded Software Engineer specializing in STM32 firmware, RTOS,
                and driver development (I2C, SPI, UART, CAN). Experienced in
                optimizing embedded systems and automating workflows with
                Jenkins and Docker. Passionate about IoT, automotive software,
                and industrial automation.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                iconName="Rocket"
                iconPosition="left"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4"
                onClick={handleExploreProjects}
              >
                Explore Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-4"
              >
                Schedule Consultation
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">2+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">40+</div>
                <div className="text-sm text-slate-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">15+</div>
                <div className="text-sm text-slate-600">Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Code Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-center items-center min-h-[20rem] p-4 sm:p-8 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-slate-800 border-2 border-blue-500 rounded-2xl p-7 shadow-lg hover:border-blue-700 hover:scale-[1.03] transition-all duration-200"
                  >
                    <div className="mb-4">
                      <Icon
                        name="CheckCircle"
                        size={36}
                        className="text-blue-400 drop-shadow"
                      />
                    </div>
                    <span className="text-base sm:text-lg text-slate-100 text-center font-semibold tracking-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-slate-200"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-slate-700">
                  Professional highlights
                </span>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-blue-600 text-white rounded-lg shadow-lg p-4"
            >
              <div className="flex items-center space-x-2">
                <Icon name="Cpu" size={16} />
                <span className="text-sm font-medium">Let's Explore</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-slate-400"
        >
          <span className="text-sm">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;