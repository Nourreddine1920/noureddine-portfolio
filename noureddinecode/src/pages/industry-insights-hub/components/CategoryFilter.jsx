import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onCategoryChange('all')}
        className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          activeCategory === 'all' ?'bg-brand-primary text-white shadow-interactive' :'bg-brand-surface text-text-secondary hover:text-text-primary hover:bg-brand-primary/10'
        }`}
      >
        <Icon name="Grid3X3" size={16} />
        <span>All Articles</span>
      </button>
      {categories?.map((category) => (
        <button
          key={category?.id}
          onClick={() => onCategoryChange(category?.id)}
          className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            activeCategory === category?.id
              ? 'bg-brand-primary text-white shadow-interactive'
              : 'bg-brand-surface text-text-secondary hover:text-text-primary hover:bg-brand-primary/10'
          }`}
        >
          <Icon name={category?.icon} size={16} />
          <span>{category?.name}</span>
          <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
            {category?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;