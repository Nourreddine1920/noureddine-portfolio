import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ArticleCard from './components/ArticleCard';
import CategoryFilter from './components/CategoryFilter';
import FeaturedSeries from './components/FeaturedSeries';
import NewsletterSubscription from './components/NewsletterSubscription';
import SearchBar from './components/SearchBar';
import TrendingTopics from './components/TrendingTopics';

const IndustryInsightsHub = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  // Mock data for articles
  const articles = [
    {
      id: 1,
      title: "Advanced STM32 DMA Configuration for High-Performance Applications",
      slug: "advanced-stm32-dma-configuration",
      excerpt: "Deep dive into STM32 Direct Memory Access configuration techniques for optimizing data transfer performance in embedded applications. Learn advanced patterns for circular buffers, linked lists, and interrupt handling.",
      content: `This comprehensive guide explores advanced DMA configuration techniques for STM32 microcontrollers.\n\nDirect Memory Access (DMA) is crucial for high-performance embedded applications where CPU efficiency matters. We'll cover:\n\n• Advanced DMA modes and configurations\n• Circular buffer implementations\n• Linked list DMA transfers\n• Error handling and recovery strategies\n• Performance optimization techniques`,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      category: "STM32 Development",
      author: {
        name: "Noureddine Bouchama",
        role: "Embedded Systems Engineer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      publishedAt: "2025-01-08",
      readTime: 12,
      tags: ["STM32", "DMA", "Performance", "Embedded C"],
      featured: true
    },
    {
      id: 2,
      title: "IoT Security Best Practices: Protecting Embedded Devices from Cyber Threats",
      slug: "iot-security-best-practices",
      excerpt: "Essential security measures for IoT devices including secure boot, encryption, authentication protocols, and vulnerability assessment techniques for embedded systems.",
      content: `IoT security is paramount in today's connected world. This article covers essential security practices for embedded devices.\n\nKey topics include:\n• Secure boot implementation\n• Hardware security modules (HSM)\n• Encryption and key management\n• Authentication protocols\n• Over-the-air update security`,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      category: "IoT Security",
      author: {
        name: "Noureddine Bouchama",
        role: "Embedded Systems Engineer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      publishedAt: "2025-01-05",
      readTime: 15,
      tags: ["IoT", "Security", "Encryption", "Authentication"]
    },
    {
      id: 3,
      title: "Real-Time Operating Systems: FreeRTOS Task Management and Scheduling",
      slug: "freertos-task-management-scheduling",
      excerpt: "Comprehensive guide to FreeRTOS task management, priority scheduling, inter-task communication, and memory management for embedded applications.",
      content: `FreeRTOS is one of the most popular real-time operating systems for embedded applications.\n\nThis guide covers:\n• Task creation and management\n• Priority-based scheduling\n• Queue and semaphore usage\n• Memory management strategies\n• Debugging RTOS applications`,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      category: "RTOS",
      author: {
        name: "Noureddine Bouchama",
        role: "Embedded Systems Engineer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      publishedAt: "2025-01-03",
      readTime: 18,
      tags: ["FreeRTOS", "RTOS", "Task Management", "Scheduling"]
    },
    {
      id: 4,
      title: "Automotive ECU Development: CAN Bus Communication and Diagnostics",
      slug: "automotive-ecu-can-bus-communication",
      excerpt: "Learn automotive ECU development fundamentals including CAN bus protocol implementation, diagnostic services, and compliance with automotive standards.",
      content: `Automotive ECU development requires deep understanding of communication protocols and diagnostic standards.\n\nTopics covered:\n• CAN bus protocol implementation\n• UDS diagnostic services\n• AUTOSAR compliance\n• Functional safety (ISO 26262)\n• Testing and validation strategies`,
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      category: "Automotive",
      author: {
        name: "Noureddine Bouchama",
        role: "Embedded Systems Engineer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      publishedAt: "2025-01-01",
      readTime: 20,
      tags: ["Automotive", "CAN Bus", "ECU", "Diagnostics"]
    },
    {
      id: 5,
      title: "Industrial Automation: Modbus Protocol Implementation and Optimization",
      slug: "industrial-automation-modbus-protocol",
      excerpt: "Complete guide to Modbus protocol implementation for industrial automation systems, including RTU and TCP variants with performance optimization techniques.",
      content: `Modbus remains a cornerstone protocol in industrial automation systems.\n\nThis comprehensive guide covers:\n• Modbus RTU implementation\n• Modbus TCP/IP networking\n• Error handling and recovery\n• Performance optimization\n• Integration with SCADA systems`,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      category: "Industrial Automation",
      author: {
        name: "Noureddine Bouchama",
        role: "Embedded Systems Engineer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      publishedAt: "2024-12-28",
      readTime: 14,
      tags: ["Modbus", "Industrial", "Automation", "Protocol"]
    },
    {
      id: 6,
      title: "Low-Power Design Techniques for Battery-Operated IoT Devices",
      slug: "low-power-design-iot-devices",
      excerpt: "Essential techniques for designing ultra-low-power IoT devices including sleep modes, power management, and energy harvesting strategies.",
      content: `Battery life is critical for IoT devices. This article explores power optimization strategies.\n\nKey techniques include:\n• Sleep mode optimization\n• Dynamic voltage scaling\n• Peripheral power management\n• Energy harvesting integration\n• Power consumption measurement`,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      category: "Power Management",
      author: {
        name: "Noureddine Bouchama",
        role: "Embedded Systems Engineer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      publishedAt: "2024-12-25",
      readTime: 16,
      tags: ["Low Power", "IoT", "Battery", "Energy"]
    }
  ];

  // Mock data for categories
  const categories = [
    { id: 'stm32', name: 'STM32 Development', icon: 'Cpu', count: 8 },
    { id: 'iot-security', name: 'IoT Security', icon: 'Shield', count: 6 },
    { id: 'rtos', name: 'RTOS', icon: 'Clock', count: 5 },
    { id: 'automotive', name: 'Automotive', icon: 'Car', count: 4 },
    { id: 'industrial', name: 'Industrial Automation', icon: 'Settings', count: 3 },
    { id: 'power', name: 'Power Management', icon: 'Battery', count: 4 }
  ];

  // Mock data for featured series
  const featuredSeries = [
    {
      id: 1,
      title: "Embedded Systems Security Fundamentals",
      slug: "embedded-security-fundamentals",
      description: "Complete security implementation guide for embedded systems covering hardware security, secure boot, encryption, and threat mitigation strategies.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      articleCount: 8,
      totalReadTime: 120,
      difficulty: "Advanced",
      tags: ["Security", "Encryption", "Hardware", "Protocols"]
    },
    {
      id: 2,
      title: "Automotive ECU Development Mastery",
      slug: "automotive-ecu-mastery",
      description: "From basic CAN communication to advanced diagnostic services, master automotive ECU development with real-world examples and industry standards.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop",
      articleCount: 6,
      totalReadTime: 95,
      difficulty: "Expert",
      tags: ["Automotive", "CAN", "Diagnostics", "AUTOSAR"]
    },
    {
      id: 3,
      title: "IoT Device Optimization Techniques",
      slug: "iot-optimization-techniques",
      description: "Comprehensive guide to optimizing IoT devices for performance, power consumption, and reliability in production environments.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      articleCount: 5,
      totalReadTime: 75,
      difficulty: "Intermediate",
      tags: ["IoT", "Optimization", "Performance", "Power"]
    }
  ];

  // Mock data for trending topics
  const trendingTopics = [
    {
      id: 1,
      name: "Edge AI Integration",
      slug: "edge-ai-integration",
      description: "Machine learning on embedded systems",
      icon: "Brain",
      color: "bg-purple-500",
      articleCount: 12,
      views: "15.2K",
      growth: 45
    },
    {
      id: 2,
      name: "Rust for Embedded",
      slug: "rust-embedded",
      description: "Memory-safe embedded programming",
      icon: "Code",
      color: "bg-orange-500",
      articleCount: 8,
      views: "12.8K",
      growth: 38
    },
    {
      id: 3,
      name: "5G IoT Connectivity",
      slug: "5g-iot-connectivity",
      description: "Next-gen wireless communication",
      icon: "Wifi",
      color: "bg-blue-500",
      articleCount: 6,
      views: "9.4K",
      growth: 32
    },
    {
      id: 4,
      name: "Quantum Security",
      slug: "quantum-security",
      description: "Post-quantum cryptography",
      icon: "Lock",
      color: "bg-green-500",
      articleCount: 4,
      views: "7.1K",
      growth: 28
    }
  ];

  // Filter articles based on category and search term
  useEffect(() => {
    let filtered = articles;

    if (activeCategory !== 'all') {
      const categoryName = categories?.find(cat => cat?.id === activeCategory)?.name;
      filtered = filtered?.filter(article => 
        article?.category?.toLowerCase()?.includes(activeCategory?.toLowerCase()) ||
        article?.category === categoryName
      );
    }

    if (searchTerm) {
      filtered = filtered?.filter(article =>
        article?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        article?.excerpt?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        article?.tags?.some(tag => tag?.toLowerCase()?.includes(searchTerm?.toLowerCase()))
      );
    }

    setFilteredArticles(filtered);
  }, [activeCategory, searchTerm]);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const featuredArticle = articles?.find(article => article?.featured);
  const regularArticles = filteredArticles?.filter(article => !article?.featured);

  return (
    <div className="min-h-screen bg-brand-surface">
      <Helmet>
        <title>Industry Insights Hub - NoureddineCode | Embedded Systems Expertise</title>
        <meta name="description" content="Expert insights on embedded systems, IoT security, automotive ECU development, and industrial automation. Technical articles, tutorials, and industry trends by Noureddine Bouchama." />
        <meta name="keywords" content="embedded systems, IoT security, STM32, RTOS, automotive ECU, industrial automation, embedded programming" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Icon name="BookOpen" size={20} className="text-white" />
                <span className="text-white font-medium">Industry Insights Hub</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Embedded Systems
                <span className="block text-brand-accent">Expertise & Insights</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Deep technical insights, tutorials, and industry analysis covering IoT security, 
                automotive ECU development, industrial automation, and cutting-edge embedded systems technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <Icon name="FileText" size={20} />
                  <span>50+ Technical Articles</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={20} />
                  <span>2,500+ Subscribers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} />
                  <span>Weekly Updates</span>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Trending Topics */}
          <TrendingTopics topics={trendingTopics} />

          {/* Featured Article */}
          {featuredArticle && !searchTerm && activeCategory === 'all' && (
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-text-primary mb-2">Featured Article</h2>
                  <p className="text-text-secondary">In-depth technical analysis and insights</p>
                </div>
                <div className="flex items-center space-x-2 text-brand-primary">
                  <Icon name="Star" size={20} />
                  <span className="font-medium">Editor's Pick</span>
                </div>
              </div>
              
              <ArticleCard article={featuredArticle} featured={true} />
            </section>
          )}

          {/* Featured Series */}
          {!searchTerm && activeCategory === 'all' && (
            <FeaturedSeries series={featuredSeries} />
          )}

          {/* Articles Section */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-2">
                  {searchTerm ? `Search Results for "${searchTerm}"` : 'Latest Articles'}
                </h2>
                <p className="text-text-secondary">
                  {searchTerm 
                    ? `Found ${filteredArticles?.length} articles matching your search`
                    : 'Technical insights and tutorials on embedded systems'
                  }
                </p>
              </div>
              
              {!searchTerm && (
                <div className="flex items-center space-x-2 text-text-muted">
                  <Icon name="Clock" size={16} />
                  <span className="text-sm">Updated daily</span>
                </div>
              )}
            </div>

            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />

            {/* Articles Grid */}
            {filteredArticles?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularArticles?.map((article) => (
                  <ArticleCard key={article?.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-brand-surface rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Search" size={32} className="text-text-muted" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">No articles found</h3>
                <p className="text-text-secondary mb-6">
                  Try adjusting your search terms or browse different categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition-colors duration-200"
                >
                  <Icon name="RotateCcw" size={16} />
                  <span>Reset Filters</span>
                </button>
              </div>
            )}
          </section>

          {/* Newsletter Subscription */}
          <section className="mb-16">
            <NewsletterSubscription />
          </section>

          {/* Additional Resources */}
          <section className="bg-white rounded-2xl shadow-card p-8 border border-border">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-4">Expand Your Knowledge</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Explore additional resources to deepen your embedded systems expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Github" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Open Source Projects</h3>
                <p className="text-text-secondary mb-4">
                  Explore code repositories and contribute to embedded systems projects
                </p>
                <a
                  href="https://github.com/noureddine-bouchama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-secondary transition-colors duration-200"
                >
                  <span className="font-medium">View GitHub</span>
                  <Icon name="ExternalLink" size={16} />
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Video" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Video Tutorials</h3>
                <p className="text-text-secondary mb-4">
                  Watch step-by-step tutorials on embedded systems development
                </p>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-secondary transition-colors duration-200"
                >
                  <span className="font-medium">Watch Videos</span>
                  <Icon name="Play" size={16} />
                </a>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">Community Forum</h3>
                <p className="text-text-secondary mb-4">
                  Join discussions with fellow embedded systems engineers
                </p>
                <a
                  href="#"
                  className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-secondary transition-colors duration-200"
                >
                  <span className="font-medium">Join Community</span>
                  <Icon name="Users" size={16} />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                  <Icon name="BookOpen" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Industry Insights Hub</h3>
                  <p className="text-white/70 text-sm">by NoureddineCode</p>
                </div>
              </div>
              <p className="text-white/80 mb-4 max-w-md">
                Your trusted source for embedded systems expertise, technical insights, 
                and industry trends. Empowering engineers with knowledge and practical solutions.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  <Icon name="Github" size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                {categories?.slice(0, 4)?.map((category) => (
                  <li key={category?.id}>
                    <button
                      onClick={() => handleCategoryChange(category?.id)}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {category?.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Code Examples</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Video Tutorials</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors duration-200">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/70 text-sm">
              © {new Date()?.getFullYear()} NoureddineCode. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndustryInsightsHub;