import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsEvolution = ({ skillsData }) => {
  return (
    <div className="bg-card rounded-xl border border-border shadow-card p-6 mb-8">
      <div className="flex items-center space-x-3 mb-6">
        <Icon name="TrendingUp" size={20} className="text-brand-primary" />
        <h3 className="text-lg font-semibold text-text-primary">Skills Evolution Over Time</h3>
      </div>
      <div className="space-y-6">
        {skillsData?.map((skillCategory, index) => (
          <motion.div
            key={skillCategory?.category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border-l-4 border-brand-primary pl-6"
          >
            <h4 className="text-md font-semibold text-text-primary mb-3">
              {skillCategory?.category}
            </h4>
            
            <div className="space-y-3">
              {skillCategory?.skills?.map((skill, skillIndex) => (
                <div key={skill?.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm text-text-secondary">
                      {skill?.name}
                    </span>
                    <span className="text-xs text-text-muted">
                      Since {skill?.startYear}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill?.proficiency}%` }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.8 }}
                        className="bg-brand-primary h-2 rounded-full"
                      />
                    </div>
                    <span className="text-xs text-text-secondary w-8">
                      {skill?.proficiency}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsEvolution;