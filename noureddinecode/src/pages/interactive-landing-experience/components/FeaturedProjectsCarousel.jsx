import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const FeaturedProjectsCarousel = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Linux Kernel Driver",
      category: "Embedded Systems",
      description: "Custom Linux kernel driver development for embedded systems, focusing on hardware abstraction and performance optimization.",
      image: "https://raw.githubusercontent.com/torvalds/linux/master/Documentation/logo.gif", // Linux kernel logo
      technologies: ["Linux", "Kernel", "C", "Embedded"],
      metrics: {
        performance: "Low-latency IO",
        compatibility: "Multi-platform",
        reliability: "Robust Error Handling"
      },
      githubUrl: "https://github.com/Nourreddine1920/Linux_Kernel_Driver",
      liveDemo: "",
      status: "Production Ready"
    },
    {
      id: 2,
      title: "GitHub Actions Workflows",
      category: "DevOps & Automation",
      description: "Automated CI/CD pipelines and workflows for software projects using GitHub Actions, including build, test, and deployment steps.",
      image: "https://avatars.githubusercontent.com/u/9919?s=200&v=4", // Reliable GitHub logo PNG
      technologies: ["GitHub Actions", "YAML", "CI/CD", "Automation"],
      metrics: {
        automation: "100% Automated",
        speed: "Fast Deployments",
        coverage: "Multi-project Support"
      },
      githubUrl: "https://github.com/Nourreddine1920/github_actions",
      liveDemo: "",
      status: "Active Development"
    },
    {
      id: 3,
      title: "MQTT Broker on STM32 & SIM7600",
      category: "IoT Connectivity",
      description: "MQTT broker implementation on STM32 microcontroller with SIM7600 for cellular IoT connectivity and remote device management.",
      image: "https://raw.githubusercontent.com/stm32duino/Arduino_Core_STM32/main/CI/logo/STM32_LOGO.png", // STM32 logo
      technologies: ["STM32", "SIM7600", "MQTT", "C"],
      metrics: {
        connectivity: "Cellular IoT",
        scalability: "Multiple Devices",
        security: "Encrypted Data"
      },
      githubUrl: "https://github.com/Nourreddine1920/MQTT-Brocker-STM32-SIM7600",
      liveDemo: "",
      status: "Deployed"
    },
    {
      id: 4,
      title: "I2C Configuration with Registers",
      category: "Embedded Communication",
      description: "I2C configuration and register management for embedded devices, enabling flexible communication and device control.",
      image: "https://raw.githubusercontent.com/raspberrypi/documentation/master/documentation/asciidoc/computers/i2c/i2c-example.png", // I2C diagram from Raspberry Pi docs
      technologies: ["I2C", "Registers", "C", "Embedded"],
      metrics: {
        flexibility: "Configurable Registers",
        compatibility: "Multiple Devices",
        efficiency: "Optimized Communication"
      },
      githubUrl: "https://github.com/Nourreddine1920/I2C-Configuration-with-Registres",
      liveDemo: "",
      status: "Production Ready"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects?.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects?.length) % projects?.length);
  };

  const project = projects?.[currentProject];

  return (
    <section className="py-20 bg-white" id="featured-projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore flagship embedded systems projects with live demonstrations, performance metrics, and technical deep-dives
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div className="relative h-96 lg:h-auto overflow-hidden">
                  <Image
                    src={project?.image}
                    alt={project?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project?.status === 'Production Ready' ? 'bg-green-100 text-green-800' :
                      project?.status === 'Active Development'? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                    }`}>
                      {project?.status}
                    </span>
                  </div>

                  {/* Live Demo Button */}
                  <div className="absolute bottom-6 right-6">
                    <Button
                      variant="default"
                      size="sm"
                      iconName="ExternalLink"
                      iconPosition="right"
                      className="bg-white/90 text-slate-900 hover:bg-white"
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <div className="text-blue-600 font-medium text-sm mb-2">{project?.category}</div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{project?.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg">{project?.description}</p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project?.technologies?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-900 mb-4">Key Metrics</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {Object.entries(project?.metrics)?.map(([key, value], index) => (
                        <div key={index} className="text-center p-4 bg-white rounded-lg border border-slate-200">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                          <div className="text-xs text-slate-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project?.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="default"
                        iconName="Github"
                        iconPosition="left"
                        className="bg-slate-900 hover:bg-slate-800 text-white w-full"
                      >
                        View Source Code
                      </Button>
                    </a>
                    <a
                      href={project?.githubUrl ? `${project.githubUrl}/blob/main/README.md` : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        iconName="BookOpen"
                        iconPosition="left"
                        className="border-blue-200 text-blue-700 hover:bg-blue-50 w-full"
                      >
                        Technical Details
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevProject}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors duration-200"
              aria-label="Previous project"
            >
              <Icon name="ChevronLeft" size={20} className="text-slate-600" />
            </button>

            {/* Project Indicators */}
            <div className="flex items-center space-x-3">
              {projects?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentProject ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 hover:bg-slate-50 transition-colors duration-200"
              aria-label="Next project"
            >
              <Icon name="ChevronRight" size={20} className="text-slate-600" />
            </button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-6">
            <span className="text-sm text-slate-500">
              {currentProject + 1} of {projects?.length} projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsCarousel;