import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const FeaturedSeries = ({ series }) => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-2">
            Featured Series
          </h2>
          <p className="text-text-secondary">
            Deep-dive technical series on embedded systems
          </p>
        </div>
        <Link
          to="/industry-insights-hub/series"
          className="inline-flex items-center space-x-2 text-brand-primary hover:text-brand-secondary transition-colors duration-200"
        >
          <span className="font-medium">View All Series</span>
          <Icon name="ArrowRight" size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {series?.map((item) => (
          <div
            key={item?.id}
            className="group bg-white rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden border border-border card-hover"
          >
            <div className="aspect-video overflow-hidden relative">
              <Image
                src={item?.image}
                alt={item?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-primary text-white">
                  {item?.articleCount} Articles
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-brand-primary transition-colors duration-300">
                {item?.title}
              </h3>

              <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                {item?.description}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-text-muted" />
                  <span className="text-text-muted text-sm">
                    {item?.totalReadTime} min total
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={16} className="text-success" />
                  <span className="text-success text-sm font-medium">
                    {item?.difficulty}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {item?.tags?.slice(0, 3)?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-brand-surface text-brand-primary"
                  >
                    {tag}
                  </span>
                ))}
                {item?.tags?.length > 3 && (
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-brand-surface text-text-muted">
                    +{item?.tags?.length - 3} more
                  </span>
                )}
              </div>

              <a
                href={item?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 w-full justify-center px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-brand-secondary transition-colors duration-200"
              >
                <span className="font-medium">Start Series</span>
                <Icon name="Play" size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSeries;
