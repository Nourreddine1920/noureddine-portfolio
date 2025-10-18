import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";
import Button from "../../../components/ui/Button";

const FeaturedProjects = ({ onViewProject }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredProjects = [
    {
      id: "stm32-lab",
      title: "STM32 Lab Management System",
      description:
        "A full-stack lab management system for STM32 microcontrollers with backend automation and frontend dashboard.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&h=600",
      category: "Embedded Systems",
      technologies: ["STM32", "Python", "React", "C"],
      metrics: {
        features: "15+",
        coverage: "100%",
        reliability: "99.9%",
      },
      highlights: [
        "Lab automation system",
        "Real-time diagnostics",
        "Interactive dashboard",
        "Hardware integration",
      ],
      complexity: "Advanced",
      duration: "6 months",
      teamSize: 2,
      github: "https://github.com/Nourreddine1920/STM32_LAB_Backend",
    },
    {
      id: "mqtt-broker",
      title: "MQTT Broker with STM32 & SIM7600",
      description:
        "Custom MQTT broker implementation on STM32 microcontroller with cellular connectivity using SIM7600 module.",
      image:
        "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&h=600",
      category: "IoT",
      technologies: ["STM32", "SIM7600", "MQTT", "C"],
      metrics: {
        protocol: "MQTT 3.1.1",
        stability: "99.9%",
        performance: "High",
      },
      highlights: [
        "Cellular IoT connectivity",
        "MQTT protocol stack",
        "Power optimization",
        "Remote management",
      ],
      complexity: "Advanced",
      duration: "4 months",
      teamSize: 1,
      github: "https://github.com/Nourreddine1920/MQTT-Brocker-STM32-SIM7600",
    },
    {
      id: "i2c-config",
      title: "I2C Configuration Manager",
      description:
        "Advanced I2C protocol implementation with register-level configuration for embedded systems communication.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&h=600",
      category: "Embedded Systems",
      technologies: ["I2C", "C", "Embedded", "Hardware"],
      metrics: {
        speed: "1MHz+",
        reliability: "99.9%",
        compatibility: "Multi-device",
      },
      highlights: [
        "Register management",
        "Multi-device support",
        "Low-level configuration",
        "Error handling",
      ],
      complexity: "Intermediate",
      duration: "3 months",
      teamSize: 1,
      github:
        "https://github.com/Nourreddine1920/I2C-Configuration-with-Registres",
    },
  ];

  const categories = [
    "All",
    ...new Set(featuredProjects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? featuredProjects
      : featuredProjects.filter(
          (project) => project.category === activeCategory
        );

  const getComplexityColor = (complexity) => {
    switch (complexity.toLowerCase()) {
      case "basic":
        return "text-green-600 bg-green-100";
      case "intermediate":
        return "text-blue-600 bg-blue-100";
      case "advanced":
        return "text-purple-600 bg-purple-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-brand-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full object-center"
                style={{ aspectRatio: "16/9" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-white/25 text-white text-sm font-medium backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1.5 rounded-full bg-white/25 text-white text-sm font-medium backdrop-blur-sm">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-8">
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Project Metrics */}
              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-sm font-medium text-text-secondary mb-2">
                      Duration
                    </div>
                    <div className="text-brand-primary text-lg font-bold">
                      {project.duration}
                    </div>
                  </div>
                  <div className="text-center border-x border-gray-200">
                    <div className="text-sm font-medium text-text-secondary mb-2">
                      Team
                    </div>
                    <div className="text-brand-primary text-lg font-bold">
                      {project.teamSize} devs
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-text-secondary mb-2">
                      Level
                    </div>
                    <div
                      className={`text-sm font-semibold px-3 py-1 rounded-full inline-block ${getComplexityColor(
                        project.complexity
                      )}`}
                    >
                      {project.complexity}
                    </div>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Key Highlights
                </h4>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <li
                      key={index}
                      className="flex items-center text-text-secondary"
                    >
                      <Icon
                        name="CheckCircle"
                        size={18}
                        className="text-success mr-2"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-500 hover:text-brand-primary transition-colors"
                  >
                    <Icon name="Github" size={28} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All Projects Button */}
      <div className="border-t border-gray-200 mt-12"></div>

      <div className="flex justify-center mt-12 mb-16">
        <a
          href="https://github.com/Nourreddine1920?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 px-10 py-5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <Icon name="Github" size={24} />
          <span className="text-lg">Explore More Projects</span>
          <Icon name="ExternalLink" size={20} />
        </a>
      </div>
            <div className="border-t border-gray-200 mt-12"></div>

    </div>
  );
};

export default FeaturedProjects;
