import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', path: '/interactive-landing-experience', icon: 'Home' },
    { name: 'Portfolio', path: '/technical-portfolio-showcase', icon: 'Briefcase' },
    { name: 'Journey', path: '/professional-journey-timeline', icon: 'Clock' },
    { name: 'Skills', path: '/skills-expertise-observatory', icon: 'Target' },
    { name: 'Insights', path: '/industry-insights-hub', icon: 'BookOpen' }
  ];

  const secondaryItems = [
    { name: 'Collaboration', path: '/collaboration-gateway', icon: 'Users' }
  ];

  // GitHub account URL
  const githubUrl = "https://github.com/Nourreddine1920"; // Replace with your actual GitHub URL

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleScheduleCall = () => {
    navigate('/collaboration-gateway');
  };

  const handleGithubClick = () => {
    window.open(githubUrl, '_blank');
  };

  const Logo = () => (
    <Link to="/interactive-landing-experience" className="flex items-center space-x-2 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center shadow-interactive">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              className="signal-flow"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              className="signal-flow"
              style={{ animationDelay: '0.5s' }}
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
              className="signal-flow"
              style={{ animationDelay: '1s' }}
            />
          </svg>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-text-primary tracking-tight">
          Noureddine AWLED BRAHIM
        </span>
        <span className="text-xs text-text-secondary font-mono tracking-wider">
          Embedded Software Engineer
        </span>
      </div>
    </Link>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  isActivePath(item?.path)
                    ? 'bg-brand-primary text-white shadow-interactive'
                    : 'text-text-secondary hover:text-text-primary hover:bg-brand-surface'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-brand-surface transition-all duration-200 flex items-center space-x-2">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-elevated border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                {secondaryItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm hover:bg-brand-surface transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      isActivePath(item?.path)
                        ? 'text-brand-primary bg-brand-surface' :'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <Icon name={item?.icon} size={16} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="Github"
              iconPosition="left"
              className="text-text-secondary hover:text-text-primary"
              onClick={handleGithubClick}
            >
              GitHub
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Calendar"
              iconPosition="left"
              className="bg-success hover:bg-success/90"
              onClick={handleScheduleCall}
            >
              Schedule Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-brand-surface transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100' :'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {[...navigationItems, ...secondaryItems]?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-brand-primary text-white shadow-interactive'
                    : 'text-text-secondary hover:text-text-primary hover:bg-brand-surface'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            <div className="pt-4 border-t border-border space-y-2">
              <Button
                variant="outline"
                fullWidth
                iconName="Github"
                iconPosition="left"
                className="justify-center"
                onClick={handleGithubClick}
              >
                View GitHub
              </Button>
              <Button
                variant="default"
                fullWidth
                iconName="Calendar"
                iconPosition="left"
                className="justify-center bg-success hover:bg-success/90"
                onClick={handleScheduleCall}
              >
                Schedule Technical Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;