import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";

const TrendingTopics = ({ topics }) => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            Trending Topics
          </h2>
          <p className="text-text-secondary">
            Hot topics in embedded systems development
          </p>
        </div>
        <div className="flex items-center space-x-2 text-brand-primary">
          <Icon name="TrendingUp" size={20} />
          <span className="font-medium">Live Updates</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topics?.map((topic, index) => (
          <a
            key={topic?.id}
            href={topic?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden border border-border card-hover"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center ${topic?.color}`}
                >
                  <Icon name={topic?.icon} size={24} className="text-white" />
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-xs font-bold text-brand-primary">
                    #{index + 1}
                  </span>
                  <Icon name="TrendingUp" size={14} className="text-success" />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-brand-primary transition-colors duration-300">
                {topic?.name}
              </h3>

              <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                {topic?.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon
                      name="FileText"
                      size={14}
                      className="text-text-muted"
                    />
                    <span className="text-text-muted text-xs">
                      {topic?.articleCount} articles
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={14} className="text-text-muted" />
                    <span className="text-text-muted text-xs">
                      {topic?.views}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-success">
                  <span className="text-xs font-medium">+{topic?.growth}%</span>
                  <Icon name="ArrowUp" size={12} />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default TrendingTopics;
