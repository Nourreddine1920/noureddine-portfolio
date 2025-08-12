import React from 'react';
import Icon from '../../../components/AppIcon';

const GitHubStats = () => {
  const githubStats = {
    totalRepos: 47,
    totalCommits: 1284,
    totalStars: 156,
    totalForks: 23,
    contributionStreak: 127,
    languageStats: [
      { language: 'C/C++', percentage: 45, color: 'bg-blue-500' },
      { language: 'Python', percentage: 25, color: 'bg-green-500' },
      { language: 'JavaScript', percentage: 15, color: 'bg-yellow-500' },
      { language: 'Assembly', percentage: 10, color: 'bg-red-500' },
      { language: 'Other', percentage: 5, color: 'bg-gray-500' }
    ],
    recentActivity: [
      {
        type: 'commit',
        repo: 'stm32-rtos-framework',
        message: 'Optimize task scheduling algorithm for better performance',
        time: '2 hours ago'
      },
      {
        type: 'pr',
        repo: 'automotive-can-driver',
        message: 'Add support for CAN-FD protocol implementation',
        time: '1 day ago'
      },
      {
        type: 'issue',
        repo: 'iot-sensor-network',
        message: 'Fix memory leak in sensor data processing',
        time: '3 days ago'
      },
      {
        type: 'release',
        repo: 'embedded-bootloader',
        message: 'Release v2.1.0 with enhanced security features',
        time: '1 week ago'
      }
    ]
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'commit':
        return 'GitCommit';
      case 'pr':
        return 'GitPullRequest';
      case 'issue':
        return 'AlertCircle';
      case 'release':
        return 'Tag';
      default:
        return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'commit':
        return 'text-green-600 bg-green-100';
      case 'pr':
        return 'text-blue-600 bg-blue-100';
      case 'issue':
        return 'text-red-600 bg-red-100';
      case 'release':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-border shadow-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
            <Icon name="Github" size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-text-primary">GitHub Activity</h2>
            <p className="text-text-secondary text-sm">Live development statistics and contributions</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-success">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span className="text-sm font-medium">Active</span>
        </div>
      </div>
      {/* GitHub Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="text-center p-4 bg-brand-surface rounded-lg">
          <div className="text-2xl font-bold text-brand-primary">{githubStats?.totalRepos}</div>
          <div className="text-sm text-text-secondary">Repositories</div>
        </div>
        <div className="text-center p-4 bg-brand-surface rounded-lg">
          <div className="text-2xl font-bold text-brand-primary">{githubStats?.totalCommits?.toLocaleString()}</div>
          <div className="text-sm text-text-secondary">Commits</div>
        </div>
        <div className="text-center p-4 bg-brand-surface rounded-lg">
          <div className="text-2xl font-bold text-brand-primary">{githubStats?.totalStars}</div>
          <div className="text-sm text-text-secondary">Stars</div>
        </div>
        <div className="text-center p-4 bg-brand-surface rounded-lg">
          <div className="text-2xl font-bold text-brand-primary">{githubStats?.totalForks}</div>
          <div className="text-sm text-text-secondary">Forks</div>
        </div>
        <div className="text-center p-4 bg-brand-surface rounded-lg">
          <div className="text-2xl font-bold text-brand-primary">{githubStats?.contributionStreak}</div>
          <div className="text-sm text-text-secondary">Day Streak</div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Language Statistics */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">Language Distribution</h3>
          <div className="space-y-3">
            {githubStats?.languageStats?.map((lang, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${lang?.color}`}></div>
                  <span className="text-sm font-medium text-text-primary">{lang?.language}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${lang?.color} transition-all duration-500`}
                      style={{ width: `${lang?.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-text-secondary w-8 text-right">{lang?.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {githubStats?.recentActivity?.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity?.type)}`}>
                  <Icon name={getActivityIcon(activity?.type)} size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-text-primary">{activity?.repo}</span>
                    <span className="text-xs text-text-secondary">{activity?.time}</span>
                  </div>
                  <p className="text-sm text-text-secondary line-clamp-2">{activity?.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contribution Graph Placeholder */}
      <div className="mt-6 pt-6 border-t border-border">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Contribution Graph</h3>
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <Icon name="BarChart3" size={48} className="mx-auto text-gray-400 mb-2" />
          <p className="text-gray-500">Interactive contribution heatmap</p>
          <p className="text-sm text-gray-400">Showing daily commits over the past year</p>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;