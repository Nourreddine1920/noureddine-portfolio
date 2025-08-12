import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ onSearch, placeholder = "Search articles, tutorials, and insights..." }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e?.preventDefault();
    onSearch(searchTerm);
  };

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Icon name="Search" size={20} className="text-text-muted" />
        </div>
        
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value)}
          className="pl-12 pr-12 py-4 text-lg bg-white border-2 border-border focus:border-brand-primary rounded-xl shadow-card"
        />
        
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-12 flex items-center pr-2 text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            <Icon name="X" size={18} />
          </button>
        )}
        
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-4 text-brand-primary hover:text-brand-secondary transition-colors duration-200"
        >
          <Icon name="ArrowRight" size={20} />
        </button>
      </div>
      {/* Quick search suggestions */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        <span className="text-text-muted text-sm">Popular searches:</span>
        {['STM32', 'RTOS', 'IoT Security', 'Automotive ECU', 'Driver Development']?.map((term) => (
          <button
            key={term}
            type="button"
            onClick={() => {
              setSearchTerm(term);
              onSearch(term);
            }}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-surface text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-200"
          >
            {term}
          </button>
        ))}
      </div>
    </form>
  );
};

export default SearchBar;