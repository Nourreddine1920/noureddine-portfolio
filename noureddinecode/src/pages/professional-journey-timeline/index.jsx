import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import TimelineEntry from "./components/TimelineEntry";
import TimelineFilter from "./components/TimelineFilter";
import TimelineStats from "./components/TimelineStats";
import SkillsEvolution from "./components/SkillsEvolution";
import CareerMilestones from "./components/CareerMilestones";

const ProfessionalJourneyTimeline = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredEntries, setFilteredEntries] = useState([]);

  // Mock timeline data
  const timelineData = [
    {
      id: 1,
      type: "work",
      title: "Embedded Software Engineer",
      company: "ACTIA Engineering Services",
      location: "Tunis, Tunisia",
      duration: "August 2023 - Present",
      current: true,
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center",
      description: `Driving the evolution of STM32-based embedded systems, enhancing firmware architecture, optimizing real-time performance, and implementing advanced peripheral integrations. Responsible for developing scalable solutions and guiding the adoption of best practices in embedded software design.`,
      responsibilities: [
        "Architected and implemented real-time STM32 embedded systems for robotics and automation, ensuring precise peripheral control (I2C, FMC, SPI, UART, CAN)",
        "Developed control and monitoring features under real-time performance constraints, aligned with safety-critical practices",
        "Integrated CI/CD workflows using Jenkins and Docker for automated build, test, and deployment processes",
        "Mentored junior developers, established coding standards, and conducted code reviews to ensure maintainable firmware",
        "Collaborated closely with hardware teams to define system requirements and interface specifications",
      ],
      achievements: [
        "Delivered 3 major embedded projects ahead of schedule",
        "Reduced system boot time by 60% via optimized initialization sequences",
        "Implemented CAN-FD protocols, increasing data throughput by 300%",
        "Contributed to achieving ISO 26262 ASIL-D certification for safety-critical components",
      ],
      technologies: [
        "STM32",
        "Connectivity peripherals",
        "FreeRTOS",
        "AUTOSAR",
        "CAN/CAN-FD",
        "LIN",
        "Ethernet",
        "C/C++",
        "Python",
        "Vector CANoe",
        "Jira",
        "Git",
        "Jenkins",
      ],
      metrics: [
        { label: "Projects Delivered", value: "3+" },
        { label: "Team Members Mentored", value: "5+" },
        { label: "System Boot Time Reduction", value: "60%" },
        { label: "Data Throughput Improvement", value: "300%" },
      ],
      testimonials: [
        {
          author: "Dr. Michael Weber",
          role: "Engineering Director, Project manager",
          quote:
            "Noureddine consistently delivers exceptional results and has become our go-to expert for complex embedded systems challenges. His technical leadership and mentoring abilities are outstanding.",
        },
      ],
    },
    {
      id: 2,
      type: "work",
      title: "Software Developer",
      company: "Confledis SAS",
      location: "Paris, France",
      duration: "June 2022 - August 2022",
      logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center",
      description: `Designed and implemented dynamic web applications with responsive interfaces and robust backend architectures. Specialized in full-stack development using React JS, Django, and modern frameworks for scalable and maintainable solutions.`,
      responsibilities: [
        "Developed dynamic web interfaces using React JS, Bootstrap, and the Ionic Framework, ensuring responsive and user-friendly designs",
        "Built and maintained robust backend architectures using Django Cookiecutter to streamline workflows and improve maintainability",
        "Integrated advanced timezone management and date handling features using the Dayjs library",
        "Collaborated with team members to implement RESTful APIs and ensure seamless front-end/back-end integration",
        "Implemented version control and CI/CD pipelines using Git, GitLab, and Docker for automated testing and deployment",
      ],
      achievements: [
        "Delivered multiple web applications with high usability and responsiveness",
        "Enhanced global user experience through precise timezone management features",
        "Streamlined development processes with modular backend architecture and reusable components",
        "Improved deployment efficiency and code reliability using CI/CD pipelines",
      ],
      technologies: [
        "React JS",
        "Bootstrap",
        "Ionic Framework",
        "Python",
        "Django",
        "Django Cookiecutter",
        "Dayjs",
        "REST APIs",
        "PostgreSQL",
        "Docker",
        "Git",
        "GitLab",
      ],
      metrics: [
        { label: "Web Applications Delivered", value: "5+" },
        { label: "Frontend Responsiveness", value: "100%" },
        { label: "Backend Modularization", value: "90%" },
        { label: "CI/CD Automation Coverage", value: "95%" },
      ],
      testimonials: [
        {
          author: "Sarah Chen",
          role: "Product Manager, InnovateTech",
          quote:
            "Noureddine's expertise in full-stack development was instrumental in our web projects. His attention to detail and innovative solutions consistently exceeded expectations.",
        },
      ],
    },
    {
      id: 3,
      type: "education",
      title: "Engineering degree in Embedded Systems",
      institution: "Faculty of Sciences Tunis Elmanar",
      location: "Tunis, Tunisia",
      duration: "Sep 2021 - Feb 2023",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center",
      description: `Advanced studies in embedded systems engineering with focus on real-time systems, automotive electronics, and IoT architectures. Thesis on "Optimizing Real-Time Performance in Multi-Core Embedded Systems" achieved distinction.`,
      achievements: [
        'Thesis awarded "Best Research Project" in Embedded Systems track',
        "Published 2 research papers in IEEE conferences",
        'Teaching Assistant for "Microcontroller Programming" course',
      ],
      technologies: [
        "ARM Cortex-M",
        "Real-Time Systems",
        "RTOS Design",
        "System Architecture",
        "Signal Processing",
        "Control Systems",
        "VHDL",
        "SystemC",
        "MATLAB",
      ],
      metrics: [
        { label: "Research Papers", value: "2" },
        { label: "Projects Completed", value: "15+" },
        { label: "Lab Sessions Taught", value: "50+" },
      ],
    },
    {
      id: 4,
      type: "work",
      title: "Junior Embedded Developer Internship",
      company: "Pixii Motors technologies",
      location: "Tunis, Tunisia",
      duration: "Jun 2022 - Aug 2022",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop&crop=center",
      description: `Summer internship focused on developing embedded firmware and automation tools for automotive systems. Gained hands-on experience with STM32, CAN bus communication, and test automation pipelines.`,
      responsibilities: [
        "Implemented CAN bus communication on STM32 for BMS data supervision and touchscreen interaction",
        "Developed Python and batch scripts for automated testing and report generation using Jenkins pipelines",
        "Performed runtime error detection and debugging to validate system-level communication and robustness",
        "Collaborated with hardware teams to ensure seamless integration of firmware and peripherals",
        "Documented technical specifications and testing procedures for embedded systems",
      ],
      achievements: [
        "Successfully implemented reliable CAN bus communication for multiple automotive modules",
        "Automated test reporting, reducing manual effort by 70%",
        "Detected and resolved critical runtime errors improving system stability",
        "Received recognition for contributing to high-quality embedded software delivery",
      ],
      technologies: [
        "STM32",
        "CAN/CAN-FD",
        "Python",
        "Batch Scripting",
        "Jenkins",
        "STM32CubeProgrammer",
        "Embedded Firmware Development",
        "System Testing",
        "Debugging Tools",
      ],
      metrics: [
        { label: "Modules Integrated", value: "3+" },
        { label: "Test Automation Coverage", value: "70%" },
        { label: "Runtime Errors Detected", value: "100%" },
        { label: "Firmware Reliability Improvement", value: "High" },
      ],
    },
    {
      id: 5,
      type: "certification",
      title: "Certified Embedded Systems Professional",
      institution: "IEEE Computer Society",
      duration: "Nov 2022",
      logo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop&crop=center",
      description: `Advanced certification demonstrating expertise in embedded systems design, real-time programming, and system optimization. Comprehensive examination covering hardware-software integration and industry best practices.`,
      achievements: [
        "Scored 95% on comprehensive technical examination",
        "Demonstrated proficiency in 15+ embedded technologies",
        "Completed advanced coursework in safety-critical systems",
        "Peer recognition as subject matter expert",
      ],
      technologies: [
        "Embedded Systems Design",
        "Real-Time Programming",
        "Safety-Critical Systems",
        "Hardware-Software Integration",
        "System Optimization",
        "Industry Standards",
      ],
    },
    {
      id: 6,
      type: "certification",
      title: "ISO 26262 Functional Safety Certification",
      institution: "TÜV SÜD Academy",
      duration: "Mar 2023",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center",
      description: `Specialized certification in automotive functional safety standards, covering ASIL classification, hazard analysis, and safety lifecycle management for automotive embedded systems.`,
      achievements: [
        "Certified for ASIL-D safety-critical system development",
        "Completed 40-hour intensive training program",
        "Demonstrated expertise in hazard analysis and risk assessment",
        "Qualified to lead functional safety projects",
      ],
      technologies: [
        "ISO 26262",
        "Functional Safety",
        "ASIL Classification",
        "Hazard Analysis",
        "Safety Lifecycle",
        "Risk Assessment",
        "Automotive Standards",
      ],
    },
    {
      id: 7,
      type: "project",
      title: "Remote Access to Hardware Testing Boards",
      company: "Faculty of Sciences Tunis El Manar",
      duration: "Feb 2022 - Jun 2022",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=center",
      description: `Developed a web-based platform for remote access to STM32 development boards, enabling automated deployment, testing, and monitoring of embedded systems in a simulated robotic environment.`,
      responsibilities: [
        "Built a web platform to remotely access STM32 boards and deploy firmware binaries",
        "Implemented automated test execution pipelines using Jenkins and Docker",
        "Developed parallel task execution for simultaneous board testing and monitoring",
        "Integrated hardware communication using STM32CubeProgrammer CLI, I2C, and ADC interfaces",
        "Designed scalable system architecture enabling seamless interaction between web server, hardware, and test execution",
      ],
      achievements: [
        "Reduced manual testing effort by 50% through automation",
        "Enabled real-time monitoring of multiple STM32 boards",
        "Ensured reliable firmware deployment across different test targets",
        "Successfully demonstrated remote execution for multiple student projects",
      ],
      technologies: [
        "STM32",
        "STM32CubeProgrammer CLI",
        "I2C",
        "ADC",
        "Django",
        "React JS",
        "Docker",
        "Jenkins",
        "GitLab",
        "Parallel Task Execution",
      ],
      metrics: [
        { label: "Boards Tested Remotely", value: "10+" },
        { label: "Testing Effort Reduction", value: "50%" },
        { label: "Automated Test Pipelines", value: "5+" },
        { label: "Firmware Deployments", value: "100+" },
      ],
    },
    {
      id: 8,
      type: "education",
      title: "Preparatory Program for Engineering",
      institution: "Higher Institute Of Science And Technology Mahdia",
      location: "Mahdia, Tunisia",
      duration: "Sep 2018 - Jun 2020",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=100&h=100&fit=crop&crop=center",
      description: `Comprehensive preparatory program focusing on mathematics, physics, and foundational engineering concepts to prepare for advanced engineering studies. Developed problem-solving, analytical, and technical skills applicable to embedded systems and mechatronics.`,
      achievements: [
        "Completed full preparatory curriculum with distinction",
        "Participated in national mathematics and physics competitions",
        "Developed early projects in programming and electronics labs",
        "Prepared for advanced engineering studies in embedded systems and robotics",
      ],
      technologies: [
        "Mathematics",
        "Physics",
        "C Programming",
        "Electronics Fundamentals",
        "Circuit Analysis",
        "Problem Solving",
        "Engineering Lab Tools",
      ],
      metrics: [
        { label: "Programs Completed", value: "Full Preparatory Curriculum" },
        { label: "Competitions Participated", value: "3+" },
        { label: "Lab Projects Completed", value: "5+" },
        { label: "Average Grade", value: "Distinction" },
      ],
    },
  ];

  // Mock skills evolution data
  const skillsEvolutionData = [
    {
      category: "Programming Languages",
      skills: [
        { name: "C/C++", startYear: 2017, proficiency: 95 },
        { name: "Python", startYear: 2019, proficiency: 85 },
        { name: "Assembly", startYear: 2018, proficiency: 80 },
        { name: "MATLAB", startYear: 2019, proficiency: 75 },
      ],
    },
    {
      category: "Embedded Platforms",
      skills: [
        { name: "STM32", startYear: 2018, proficiency: 95 },
        { name: "ESP32", startYear: 2020, proficiency: 90 },
        { name: "Nordic nRF", startYear: 2021, proficiency: 85 },
        { name: "NXP S32K", startYear: 2022, proficiency: 80 },
      ],
    },
    {
      category: "Communication Protocols",
      skills: [
        { name: "CAN/CAN-FD", startYear: 2019, proficiency: 95 },
        { name: "UART/SPI/I2C", startYear: 2017, proficiency: 95 },
        { name: "Ethernet", startYear: 2020, proficiency: 85 },
        { name: "LoRaWAN", startYear: 2021, proficiency: 80 },
      ],
    },
    {
      category: "Real-Time Systems",
      skills: [
        { name: "FreeRTOS", startYear: 2019, proficiency: 95 },
        { name: "Zephyr OS", startYear: 2021, proficiency: 80 },
        { name: "Linux RT", startYear: 2022, proficiency: 75 },
        { name: "AUTOSAR", startYear: 2023, proficiency: 70 },
      ],
    },
  ];

  // Mock career milestones
  const careerMilestones = [
    {
      id: 1,
      title: "First Embedded Project",
      description:
        "Developed my first microcontroller-based project during university",
      date: "Mar 2017",
      icon: "Zap",
      color: "bg-success",
    },
    {
      id: 2,
      title: "Industry Internship",
      description:
        "Completed first professional internship in embedded systems",
      date: "Jun 2019",
      icon: "Briefcase",
      color: "bg-brand-primary",
    },
    {
      id: 3,
      title: "Master's Degree",
      description:
        "Graduated with distinction from Technical University of Munich",
      date: "Feb 2021",
      icon: "GraduationCap",
      color: "bg-success",
    },
    {
      id: 4,
      title: "IoT Expertise",
      description:
        "Became specialized in IoT and wireless communication systems",
      date: "Dec 2021",
      icon: "Wifi",
      color: "bg-accent",
    },
    {
      id: 5,
      title: "Safety Certification",
      description: "Achieved ISO 26262 functional safety certification",
      date: "Mar 2023",
      icon: "Shield",
      color: "bg-warning",
    },
    {
      id: 6,
      title: "Team Leadership",
      description:
        "Promoted to senior role with team leadership responsibilities",
      date: "Jan 2023",
      icon: "Users",
      color: "bg-brand-primary",
    },
  ];

  // Calculate statistics
  const stats = {
    yearsExperience: new Date()?.getFullYear() - 2023,
    professionalRoles: timelineData?.filter((entry) => entry?.type === "work")
      ?.length,
    certifications: timelineData?.filter(
      (entry) => entry?.type === "certification"
    )?.length,
    majorProjects: timelineData?.filter((entry) => entry?.type === "project")
      ?.length,
  };

  // Calculate entry counts for filters
  const entryCounts = {
    all: timelineData?.length,
    work: timelineData?.filter((entry) => entry?.type === "work")?.length,
    education: timelineData?.filter((entry) => entry?.type === "education")
      ?.length,
    certification: timelineData?.filter(
      (entry) => entry?.type === "certification"
    )?.length,
    project: timelineData?.filter((entry) => entry?.type === "project")?.length,
  };

  // Filter timeline entries
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredEntries(timelineData);
    } else {
      setFilteredEntries(
        timelineData?.filter((entry) => entry?.type === activeFilter)
      );
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
              Explore my career progression in embedded systems engineering,
              from academic foundations to leading complex automotive and IoT
              projects. Each milestone represents growth, learning, and
              measurable impact in the embedded systems industry.
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
                {filteredEntries?.length}{" "}
                {filteredEntries?.length === 1 ? "Entry" : "Entries"}
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
                <Icon
                  name="Search"
                  size={48}
                  className="text-text-muted mx-auto mb-4"
                />
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
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Let's discuss how my embedded systems expertise can contribute
                to your next project. From concept to deployment, I bring proven
                experience and innovative solutions.
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
              <span className="text-xl font-bold">Noureddine AWLED BRAHIM</span>
            </div>
            <p className="text-white/70 mb-4">
              Embedded Systems Engineer • IoT Specialist • Automotive Expert
            </p>
            <p className="text-white/50 text-sm">
              © {new Date()?.getFullYear()} Noureddine AWLED BRAHIM. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalJourneyTimeline;
