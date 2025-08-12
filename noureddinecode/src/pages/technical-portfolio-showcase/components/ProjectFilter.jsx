import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  onClearFilters, 
  searchQuery, 
  onSearchChange,
  sortBy,
  onSortChange 
}) => {
  const filterCategories = [
    {
      key: 'industry',
      label: 'Industry',
      icon: 'Building2',
      options: filters?.industries
    },
    {
      key: 'technology',
      label: 'Technology',
      icon: 'Code2',
      options: filters?.technologies
    },
    {
      key: 'difficulty',
      label: 'Difficulty',
      icon: 'Target',
      options: filters?.difficulties
    }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First', icon: 'Calendar' },
    { value: 'oldest', label: 'Oldest First', icon: 'CalendarDays' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'complexity', label: 'Most Complex', icon: 'Zap' }
  ];

  const hasActiveFilters = Object.values(activeFilters)?.some(filters => filters?.length > 0);

  return (
    <div className="bg-white rounded-xl border border-border shadow-card p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
        />
        <input
          type="text"
          placeholder="Search projects by name, description, or technology..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200"
        />
      </div>
      {/* Filter Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {filterCategories?.map((category) => (
          <div key={category?.key} className="space-y-3">
            <div className="flex items-center space-x-2">
              <Icon name={category?.icon} size={18} className="text-brand-primary" />
              <h4 className="font-semibold text-text-primary">{category?.label}</h4>
            </div>
            <div className="space-y-2">
              {category?.options?.map((option) => (
                <label key={option} className="flex items-center space-x-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={activeFilters?.[category?.key]?.includes(option) || false}
                    onChange={(e) => {
                      const isChecked = e?.target?.checked;
                      const currentFilters = activeFilters?.[category?.key] || [];
                      const newFilters = isChecked
                        ? [...currentFilters, option]
                        : currentFilters?.filter(f => f !== option);
                      onFilterChange(category?.key, newFilters);
                    }}
                    className="w-4 h-4 text-brand-primary border-border rounded focus:ring-brand-primary focus:ring-2"
                  />
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Sort and Clear Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Icon name="ArrowUpDown" size={18} className="text-text-secondary" />
            <span className="text-sm font-medium text-text-primary">Sort by:</span>
          </div>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e?.target?.value)}
            className="px-3 py-2 border border-border rounded-lg text-sm focus:ring-2 focus:ring-brand-primary focus:border-transparent"
          >
            {sortOptions?.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>

        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onClearFilters}
            className="text-text-secondary hover:text-text-primary"
          >
            Clear Filters
          </Button>
        )}
      </div>
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Filter" size={16} className="text-brand-primary" />
            <span className="text-sm font-medium text-text-primary">Active Filters:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters)?.map(([category, filters]) =>
              filters?.map((filter) => (
                <span
                  key={`${category}-${filter}`}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-brand-primary text-white text-xs rounded-full"
                >
                  <span>{filter}</span>
                  <button
                    onClick={() => {
                      const newFilters = activeFilters?.[category]?.filter(f => f !== filter);
                      onFilterChange(category, newFilters);
                    }}
                    className="hover:bg-white/20 rounded-full p-0.5 transition-colors duration-200"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </span>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectFilter;