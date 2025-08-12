import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TimelineEntry = ({ entry, index, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'work':
        return 'Briefcase';
      case 'education':
        return 'GraduationCap';
      case 'certification':
        return 'Award';
      case 'project':
        return 'Code';
      default:
        return 'Circle';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'work':
        return 'bg-brand-primary';
      case 'education':
        return 'bg-success';
      case 'certification':
        return 'bg-warning';
      case 'project':
        return 'bg-accent';
      default:
        return 'bg-muted';
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-border -z-10"></div>
      )}
      {/* Timeline Node */}
      <div className="flex items-start space-x-6">
        <div className={`flex-shrink-0 w-12 h-12 ${getTypeColor(entry?.type)} rounded-full flex items-center justify-center shadow-interactive`}>
          <Icon name={getTypeIcon(entry?.type)} size={20} color="white" />
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex-1 bg-card rounded-xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 mb-8"
        >
          {/* Header */}
          <div className="p-6 border-b border-border">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {entry?.title}
                  </h3>
                  {entry?.current && (
                    <span className="px-2 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-brand-primary font-medium mb-1">
                  {entry?.company || entry?.institution}
                </p>
                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={14} />
                    <span>{entry?.duration}</span>
                  </div>
                  {entry?.location && (
                    <div className="flex items-center space-x-1">
                      <Icon name="MapPin" size={14} />
                      <span>{entry?.location}</span>
                    </div>
                  )}
                </div>
              </div>
              
              {entry?.logo && (
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg border border-border overflow-hidden">
                  <Image
                    src={entry?.logo}
                    alt={`${entry?.company || entry?.institution} logo`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              )}
            </div>

            <p className="text-text-secondary mt-3 leading-relaxed">
              {entry?.description}
            </p>

            {/* Key Achievements Preview */}
            {entry?.achievements && entry?.achievements?.length > 0 && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {entry?.achievements?.slice(0, 3)?.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-brand-surface text-brand-primary text-sm rounded-full"
                    >
                      {achievement}
                    </span>
                  ))}
                  {entry?.achievements?.length > 3 && (
                    <span className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full">
                      +{entry?.achievements?.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Expand Button */}
            <div className="mt-4">
              <Button
                variant="ghost"
                size="sm"
                iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
                iconPosition="right"
                onClick={toggleExpanded}
                className="text-brand-primary hover:bg-brand-surface"
              >
                {isExpanded ? "Show Less" : "Show More Details"}
              </Button>
            </div>
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 space-y-6">
                  {/* Technologies Used */}
                  {entry?.technologies && entry?.technologies?.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="Code" size={18} />
                        <span>Technologies & Tools</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {entry?.technologies?.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 text-sm rounded-lg"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Responsibilities */}
                  {entry?.responsibilities && entry?.responsibilities?.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="CheckCircle" size={18} />
                        <span>Key Responsibilities</span>
                      </h4>
                      <ul className="space-y-2">
                        {entry?.responsibilities?.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Icon name="ArrowRight" size={16} className="text-brand-primary mt-0.5 flex-shrink-0" />
                            <span className="text-text-secondary">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* All Achievements */}
                  {entry?.achievements && entry?.achievements?.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="Trophy" size={18} />
                        <span>Key Achievements</span>
                      </h4>
                      <ul className="space-y-2">
                        {entry?.achievements?.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Icon name="Star" size={16} className="text-warning mt-0.5 flex-shrink-0" />
                            <span className="text-text-secondary">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Impact Metrics */}
                  {entry?.metrics && entry?.metrics?.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="TrendingUp" size={18} />
                        <span>Impact & Results</span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {entry?.metrics?.map((metric, idx) => (
                          <div key={idx} className="bg-brand-surface rounded-lg p-4">
                            <div className="text-2xl font-bold text-brand-primary mb-1">
                              {metric?.value}
                            </div>
                            <div className="text-sm text-text-secondary">
                              {metric?.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Testimonials */}
                  {entry?.testimonials && entry?.testimonials?.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center space-x-2">
                        <Icon name="MessageSquare" size={18} />
                        <span>Testimonials</span>
                      </h4>
                      <div className="space-y-4">
                        {entry?.testimonials?.map((testimonial, idx) => (
                          <div key={idx} className="bg-muted rounded-lg p-4">
                            <p className="text-text-secondary italic mb-3">
                              "{testimonial?.quote}"
                            </p>
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">
                                  {testimonial?.author?.split(' ')?.map(n => n?.[0])?.join('')}
                                </span>
                              </div>
                              <div>
                                <div className="font-medium text-text-primary">
                                  {testimonial?.author}
                                </div>
                                <div className="text-sm text-text-secondary">
                                  {testimonial?.role}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineEntry;