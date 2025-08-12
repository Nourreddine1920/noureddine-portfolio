import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Beginner':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getIndustryIcon = (industry) => {
    switch (industry) {
      case 'Automotive':
        return 'Car';
      case 'IoT':
        return 'Wifi';
      case 'Industrial':
        return 'Factory';
      default:
        return 'Cpu';
    }
  };

  return (
    <div
      className={`bg-white rounded-xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden group ${
        isHovered ? 'transform scale-105' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Industry Badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
            <Icon name={getIndustryIcon(project?.industry)} size={16} className="text-brand-primary" />
            <span className="text-sm font-medium text-text-primary">{project?.industry}</span>
          </div>
        </div>

        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${getDifficultyColor(project?.difficulty)}`}>
            {project?.difficulty}
          </span>
        </div>

        {/* Performance Improvement */}
        {project?.improvement && (
          <div className="absolute bottom-4 left-4">
            <div className="bg-success/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">
              <span className="text-sm font-semibold">+{project?.improvement}</span>
            </div>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-primary transition-colors duration-200">
            {project?.title}
          </h3>
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-text-secondary">{project?.rating}</span>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {project?.description}
        </p>

        {/* Technology Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 3)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-brand-surface text-brand-primary text-xs font-medium rounded-md border border-brand-primary/20"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md">
              +{project?.technologies?.length - 3} more
            </span>
          )}
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 py-3 border-t border-border">
          <div className="text-center">
            <div className="text-lg font-bold text-brand-primary">{project?.duration}</div>
            <div className="text-xs text-text-secondary">Duration</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-brand-primary">{project?.teamSize}</div>
            <div className="text-xs text-text-secondary">Team Size</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-brand-primary">{project?.linesOfCode}</div>
            <div className="text-xs text-text-secondary">Lines of Code</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              iconName="Github"
              iconPosition="left"
              className="text-text-secondary hover:text-text-primary"
            >
              Code
            </Button>
            <Button
              variant="ghost"
              size="sm"
              iconName="ExternalLink"
              iconPosition="left"
              className="text-text-secondary hover:text-text-primary"
            >
              Demo
            </Button>
          </div>
          <Button
            variant="default"
            size="sm"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => onViewDetails(project)}
            className="bg-brand-primary hover:bg-brand-primary/90"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;