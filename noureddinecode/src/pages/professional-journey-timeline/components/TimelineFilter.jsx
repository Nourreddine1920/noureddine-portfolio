import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TimelineFilter = ({ activeFilter, onFilterChange, entryCounts }) => {
  const filters = [
    { key: 'all', label: 'All Experiences', icon: 'List', count: entryCounts?.all },
    { key: 'work', label: 'Work Experience', icon: 'Briefcase', count: entryCounts?.work },
    { key: 'education', label: 'Education', icon: 'GraduationCap', count: entryCounts?.education },
    { key: 'certification', label: 'Certifications', icon: 'Award', count: entryCounts?.certification },
    { key: 'project', label: 'Key Projects', icon: 'Code', count: entryCounts?.project }
  ];

  return (
    <div className="bg-card rounded-xl border border-border shadow-card p-6 mb-8">
      <div className="flex items-center space-x-3 mb-4">
        <Icon name="Filter" size={20} className="text-brand-primary" />
        <h3 className="text-lg font-semibold text-text-primary">Filter Timeline</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {filters?.map((filter) => (
          <Button
            key={filter?.key}
            variant={activeFilter === filter?.key ? "default" : "outline"}
            size="sm"
            iconName={filter?.icon}
            iconPosition="left"
            onClick={() => onFilterChange(filter?.key)}
            className={`${
              activeFilter === filter?.key 
                ? "bg-brand-primary text-white" :"text-text-secondary hover:text-text-primary hover:bg-brand-surface"
            }`}
          >
            {filter?.label}
            <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
              activeFilter === filter?.key 
                ? "bg-white/20 text-white" :"bg-muted text-text-secondary"
            }`}>
              {filter?.count}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TimelineFilter;