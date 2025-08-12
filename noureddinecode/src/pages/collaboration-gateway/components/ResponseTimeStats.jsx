import React from 'react';
import Icon from '../../../components/AppIcon';

const ResponseTimeStats = () => {
  const stats = [
    {
      metric: 'Average Response Time',
      value: '4.2 hours',
      change: '-15%',
      trend: 'down',
      icon: 'Clock',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      metric: 'Client Satisfaction',
      value: '98.5%',
      change: '+2.1%',
      trend: 'up',
      icon: 'Star',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      metric: 'Project Success Rate',
      value: '100%',
      change: '0%',
      trend: 'stable',
      icon: 'CheckCircle',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      metric: 'Repeat Clients',
      value: '87%',
      change: '+12%',
      trend: 'up',
      icon: 'Repeat',
      color: 'text-brand-primary',
      bgColor: 'bg-brand-primary/10'
    }
  ];

  const responseTimeBreakdown = [
    { type: 'Email Inquiries', time: '< 6 hours', percentage: 92 },
    { type: 'Project Consultations', time: '< 12 hours', percentage: 95 },
    { type: 'Technical Questions', time: '< 4 hours', percentage: 88 },
    { type: 'Urgent Requests', time: '< 2 hours', percentage: 100 }
  ];

  const communicationPreferences = [
    {
      method: 'Email',
      usage: '65%',
      responseTime: '4-6 hours',
      bestFor: 'Detailed technical discussions',
      icon: 'Mail'
    },
    {
      method: 'Phone/Video',
      usage: '25%',
      responseTime: 'Immediate',
      bestFor: 'Urgent consultations',
      icon: 'Phone'
    },
    {
      method: 'LinkedIn',
      usage: '8%',
      responseTime: '8-12 hours',
      bestFor: 'Professional networking',
      icon: 'Linkedin'
    },
    {
      method: 'GitHub',
      usage: '2%',
      responseTime: '24-48 hours',
      bestFor: 'Code collaboration',
      icon: 'Github'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-text-primary mb-2">Communication Excellence</h3>
        <p className="text-text-secondary">
          Proven track record of responsive, professional communication with clients and collaborators
        </p>
      </div>
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats?.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-card border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${stat?.bgColor} rounded-lg flex items-center justify-center`}>
                <Icon name={stat?.icon} size={20} className={stat?.color} />
              </div>
              <div className={`flex items-center text-sm ${
                stat?.trend === 'up' ? 'text-success' : 
                stat?.trend === 'down'? 'text-success' : 'text-text-secondary'
              }`}>
                {stat?.trend === 'up' && <Icon name="TrendingUp" size={14} className="mr-1" />}
                {stat?.trend === 'down' && <Icon name="TrendingDown" size={14} className="mr-1" />}
                {stat?.trend === 'stable' && <Icon name="Minus" size={14} className="mr-1" />}
                {stat?.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-text-primary mb-1">{stat?.value}</div>
            <div className="text-sm text-text-secondary">{stat?.metric}</div>
          </div>
        ))}
      </div>
      {/* Response Time Breakdown */}
      <div className="bg-white rounded-xl shadow-card border border-border p-6">
        <h4 className="text-lg font-semibold text-text-primary mb-6">Response Time Commitments</h4>
        <div className="space-y-4">
          {responseTimeBreakdown?.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-brand-surface rounded-lg">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-text-primary">{item?.type}</span>
                  <span className="text-sm text-text-secondary">{item?.time}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-brand-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item?.percentage}%` }}
                  ></div>
                </div>
              </div>
              <div className="ml-4 text-right">
                <div className="text-lg font-bold text-brand-primary">{item?.percentage}%</div>
                <div className="text-xs text-text-secondary">On Time</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Communication Methods */}
      <div className="bg-white rounded-xl shadow-card border border-border p-6">
        <h4 className="text-lg font-semibold text-text-primary mb-6">Preferred Communication Channels</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communicationPreferences?.map((method, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 border border-border rounded-lg">
              <div className="w-10 h-10 bg-brand-surface rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={method?.icon} size={20} className="text-brand-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-semibold text-text-primary">{method?.method}</h5>
                  <span className="text-sm font-medium text-brand-primary">{method?.usage}</span>
                </div>
                <div className="text-sm text-text-secondary mb-1">
                  <strong>Response Time:</strong> {method?.responseTime}
                </div>
                <div className="text-sm text-text-secondary">
                  <strong>Best For:</strong> {method?.bestFor}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Client Testimonials */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-xl p-6 text-white">
        <h4 className="text-lg font-semibold mb-6">What Clients Say About Communication</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-400">
                {[...Array(5)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="fill-current" />
                ))}
              </div>
            </div>
            <p className="text-sm text-white/90 mb-3">
              "Noureddine's communication is exceptional. He responds quickly, explains complex technical concepts clearly, and keeps everyone aligned throughout the project."
            </p>
            <div className="text-xs text-white/70">
              — Sarah Chen, Technical Director at InnovateTech
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-400">
                {[...Array(5)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="fill-current" />
                ))}
              </div>
            </div>
            <p className="text-sm text-white/90 mb-3">
              "Professional, responsive, and always available when we need technical guidance. His communication style makes complex embedded systems accessible to our entire team."
            </p>
            <div className="text-xs text-white/70">
              — Marcus Rodriguez, CTO at AutoSystems Pro
            </div>
          </div>
        </div>
      </div>
      {/* Availability Status */}
      <div className="bg-success/5 border border-success/20 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
          <h5 className="font-semibold text-success">Currently Available</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-medium text-text-primary">Response Time</div>
            <div className="text-text-secondary">Within 4-6 hours</div>
          </div>
          <div>
            <div className="font-medium text-text-primary">Availability</div>
            <div className="text-text-secondary">Mon-Fri, 9 AM - 6 PM EST</div>
          </div>
          <div>
            <div className="font-medium text-text-primary">Capacity</div>
            <div className="text-text-secondary">Accepting new projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseTimeStats;