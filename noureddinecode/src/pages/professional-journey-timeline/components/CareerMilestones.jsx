import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const CareerMilestones = ({ milestones }) => {
  return (
    <div className="bg-card rounded-xl border border-border shadow-card p-6 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="Flag" size={20} className="text-brand-primary" />
        <h3 className="text-lg font-semibold text-text-primary">Career Milestones</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {milestones?.map((milestone, index) => (
          <motion.div
            key={milestone?.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-brand-surface to-white rounded-lg p-4 border border-brand-primary/20 hover:shadow-card transition-all duration-300"
          >
            <div className="flex items-start space-x-3">
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${milestone?.color}`}>
                <Icon name={milestone?.icon} size={18} color="white" />
              </div>
              
              <div className="flex-1">
                <h4 className="font-semibold text-text-primary text-sm mb-1">
                  {milestone?.title}
                </h4>
                <p className="text-xs text-text-secondary mb-2">
                  {milestone?.description}
                </p>
                <div className="flex items-center space-x-2 text-xs text-text-muted">
                  <Icon name="Calendar" size={12} />
                  <span>{milestone?.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CareerMilestones;