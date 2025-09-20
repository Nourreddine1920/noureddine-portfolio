import React from "react";
import { Link } from "react-router-dom";
import Icon from "../../../components/AppIcon";
import Image from "../../../components/AppImage";

const ArticleCard = ({ article, featured = false }) => {
  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatReadTime = (minutes) => {
    return `${minutes} min read`;
  };

  if (featured) {
    return (
      <article className="group relative bg-white rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden border border-border">
        <div className="aspect-video overflow-hidden">
          <Image
            src={article?.image}
            alt={article?.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-primary text-white">
              {article?.category}
            </span>
            <span className="text-white/80 text-sm">
              {formatDate(article?.publishedAt)}
            </span>
            <span className="text-white/80 text-sm">
              {formatReadTime(article?.readTime)}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors duration-300">
            {article?.title}
          </h2>

          <p className="text-white/90 text-base mb-4 line-clamp-2">
            {article?.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={article?.author?.avatar}
                  alt={article?.author?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-medium text-sm">
                  {article?.author?.name}
                </p>
                <p className="text-white/70 text-xs">{article?.author?.role}</p>
              </div>
            </div>

            <a
              href="https://deepbluembedded.com/stm32-dma-tutorial-using-direct-memory-access-dma-in-stm32/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white hover:text-brand-accent transition-colors duration-200"
            >
              <span className="text-sm font-medium">Read More</span>
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden border border-border card-hover">
      <div className="aspect-video overflow-hidden">
        <Image
          src={article?.image}
          alt={article?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-3">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-brand-surface text-brand-primary">
            {article?.category}
          </span>
          <span className="text-text-muted text-sm">
            {formatDate(article?.publishedAt)}
          </span>
          <span className="text-text-muted text-sm">
            {formatReadTime(article?.readTime)}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-brand-primary transition-colors duration-300 line-clamp-2">
          {article?.title}
        </h3>

        <p className="text-text-secondary text-sm mb-4 line-clamp-3">
          {article?.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={article?.author?.avatar}
                alt={article?.author?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-text-primary font-medium text-sm">
                {article?.author?.name}
              </p>
            </div>
          </div>

          <a
            href={article?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-brand-primary hover:text-brand-secondary transition-colors duration-200"
          >
            <span className="text-sm font-medium">Read</span>
            <Icon name="ArrowRight" size={14} />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
