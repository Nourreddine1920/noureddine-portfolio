import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      subtitle: 'Direct Communication',
      description: 'Best for detailed technical discussions and project documentation',
      value: 'noureddine.embedded@gmail.com',
      action: 'mailto:noureddine.embedded@gmail.com',
      icon: 'Mail',
      color: 'bg-blue-500',
      responseTime: 'Response within 24 hours',
      availability: 'Available 24/7'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      subtitle: 'Professional Networking',
      description: 'Connect for professional opportunities and industry discussions',
      value: 'linkedin.com/in/noureddine-embedded',
      action: 'https://linkedin.com/in/noureddine-embedded',
      icon: 'Linkedin',
      color: 'bg-blue-600',
      responseTime: 'Response within 12 hours',
      availability: 'Business hours preferred'
    },
    {
      id: 'github',
      title: 'GitHub',
      subtitle: 'Open Source Collaboration',
      description: 'Collaborate on embedded systems projects and code reviews',
      value: 'github.com/noureddine-embedded',
      action: 'https://github.com/noureddine-embedded',
      icon: 'Github',
      color: 'bg-gray-800',
      responseTime: 'Response within 48 hours',
      availability: 'Project-based availability'
    },
    {
      id: 'phone',
      title: 'Phone',
      subtitle: 'Urgent Technical Support',
      description: 'For urgent project discussions and immediate technical consultation',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      icon: 'Phone',
      color: 'bg-green-500',
      responseTime: 'Immediate response',
      availability: 'Mon-Fri, 9 AM - 6 PM EST'
    }
  ];

  const handleContactClick = (method) => {
    if (method?.id === 'email') {
      window.location.href = method?.action;
    } else if (method?.id === 'phone') {
      window.location.href = method?.action;
    } else {
      window.open(method?.action, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Direct Contact Methods</h3>
        <p className="text-text-secondary">
          Choose the communication channel that works best for your needs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactMethods?.map((method) => (
          <div
            key={method?.id}
            className="bg-white rounded-xl shadow-card border border-border p-6 hover:shadow-elevated transition-all duration-300 group"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 ${method?.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={method?.icon} size={24} className="text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-text-primary">{method?.title}</h4>
                  <span className="text-xs text-text-secondary bg-brand-surface px-2 py-1 rounded-full">
                    {method?.subtitle}
                  </span>
                </div>
                
                <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                  {method?.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Icon name="Clock" size={14} className="text-text-secondary mr-2" />
                    <span className="text-text-secondary">{method?.responseTime}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Icon name="Calendar" size={14} className="text-text-secondary mr-2" />
                    <span className="text-text-secondary">{method?.availability}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-text-primary bg-brand-surface px-3 py-1 rounded-md truncate flex-1 mr-3">
                    {method?.value}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleContactClick(method)}
                    iconName="ExternalLink"
                    iconPosition="right"
                    className="flex-shrink-0"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold mb-2">Need Immediate Assistance?</h4>
            <p className="text-white/90 text-sm">
              For urgent technical support or time-sensitive project discussions
            </p>
          </div>
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = 'tel:+15551234567'}
              iconName="Phone"
              iconPosition="left"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Call Now
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = 'mailto:noureddine.embedded@gmail.com?subject=Urgent Technical Support'}
              iconName="Mail"
              iconPosition="left"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              Email
            </Button>
          </div>
        </div>
      </div>
      {/* Response Time Guarantee */}
      <div className="bg-success/5 border border-success/20 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
            <Icon name="Shield" size={16} className="text-success" />
          </div>
          <div>
            <h5 className="font-semibold text-text-primary">Response Time Guarantee</h5>
            <p className="text-sm text-text-secondary">
              I commit to responding to all inquiries within the specified timeframes. 
              For urgent matters, please use phone or mark your email as "URGENT".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;