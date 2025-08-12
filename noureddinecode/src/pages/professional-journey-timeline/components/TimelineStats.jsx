import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TimelineStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'Calendar',
      label: 'Years of Experience',
      value: stats?.yearsExperience,
      color: 'text-brand-primary'
    },
    {
      icon: 'Briefcase',
      label: 'Professional Roles',
      value: stats?.professionalRoles,
      color: 'text-success'
    },
    {
      icon: 'Award',
      label: 'Certifications',
      value: stats?.certifications,
      color: 'text-warning'
    },
    {
      icon: 'Code',
      label: 'Major Projects',
      value: stats?.majorProjects,
      color: 'text-accent'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statItems?.map((stat, index) => (
        <motion.div
          key={stat?.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-card rounded-xl border border-border shadow-card p-6 text-center hover:shadow-elevated transition-all duration-300"
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-current/10 mb-4 ${stat?.color}`}>
            <Icon name={stat?.icon} size={24} className={stat?.color} />
          </div>
          <div className="text-3xl font-bold text-text-primary mb-2">
            {stat?.value}
          </div>
          <div className="text-sm text-text-secondary">
            {stat?.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TimelineStats;