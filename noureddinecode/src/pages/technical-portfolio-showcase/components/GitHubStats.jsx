import React, { useEffect, useState } from 'react';
import Icon from '../../../components/AppIcon';
import axios from 'axios';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const GitHubStats = () => {
  const [githubStats, setGithubStats] = useState({
    totalRepos: 0,
    totalCommits: 0,
    totalStars: 0,
    totalForks: 0,
    contributionStreak: 0,
    contributionData: [],
    recentActivity: [],
    languageStats: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = 'Nourreddine1920';
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        
        if (!token) {
          throw new Error('GitHub token not found. Please check your environment variables.');
        }

        const headers = {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        };

        const userResponse = await axios.get(`https://api.github.com/users/${username}`, { headers });
        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?per_page=100`, { headers });

        // Calculate total stars and forks
        const totalStars = reposResponse.data.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = reposResponse.data.reduce((acc, repo) => acc + repo.forks_count, 0);

        // Calculate total commits
        let totalCommits = 0;
        for (const repo of reposResponse.data) {
          try {
            const commitsResponse = await axios.get(`https://api.github.com/repos/${username}/${repo.name}/stats/participation`, { headers });
            if (commitsResponse.data && commitsResponse.data.owner) {
              totalCommits += commitsResponse.data.owner.reduce((acc, weekCount) => acc + weekCount, 0);
            }
          } catch (error) {
            console.warn(`Could not fetch commits for ${repo.name}:`, error);
          }
        }

        // Get contribution data and streak
        let contributionStreak = 0;
        let contributionData = [];
        try {
          let weeklyData = new Array(52).fill(null).map((_, i) => ({
            week: new Date(Date.now() - (51 - i) * 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
            commits: 0
          }));
          
          for (const repo of reposResponse.data) {
            try {
              const commitsResponse = await axios.get(
                `https://api.github.com/repos/${username}/${repo.name}/stats/commit_activity`,
                { headers }
              );
              
              if (commitsResponse.data) {
                commitsResponse.data.forEach((week, index) => {
                  if (index < 52) {
                    weeklyData[index].commits += week.total;
                  }
                });
              }
            } catch (error) {
              console.warn(`Could not fetch commit activity for ${repo.name}:`, error);
            }
          }
          
          // Set the contribution data
          contributionData = weeklyData.filter(week => week.commits > 0);
          
          const eventsResponse = await axios.get(`https://api.github.com/users/${username}/events/public`, { headers });
          const events = eventsResponse.data;
          let currentStreak = 0;
          let lastDate = null;

          for (const event of events) {
            const eventDate = new Date(event.created_at).toDateString();
            if (lastDate === null || eventDate === lastDate) {
              currentStreak++;
            } else if (eventDate !== lastDate) {
              contributionStreak = Math.max(contributionStreak, currentStreak);
              currentStreak = 1;
            }
            lastDate = eventDate;
          }
          contributionStreak = Math.max(contributionStreak, currentStreak);
        } catch (error) {
          console.warn('Could not fetch contribution streak:', error);
        }

        // Get language statistics
        const languages = {};
        for (const repo of reposResponse.data) {
          if (repo.language) {
            languages[repo.language] = (languages[repo.language] || 0) + 1;
          }
        }

        // Calculate language percentages
        const totalRepos = Object.values(languages).reduce((acc, count) => acc + count, 0);
        const languageStats = Object.entries(languages)
          .map(([language, count]) => ({
            language,
            percentage: Math.round((count / totalRepos) * 100),
            color: getLanguageColor(language),
          }))
          .sort((a, b) => b.percentage - a.percentage);

        // Get recent activity
        const recentActivity = await fetchRecentActivity(username, headers);

        setGithubStats({
          totalRepos: userResponse.data.public_repos,
          totalCommits,
          totalStars,
          totalForks,
          contributionStreak,
          contributionData,
          languageStats,
          recentActivity,
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error.response?.data || error.message);
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  const fetchRecentActivity = async (username, headers) => {
    try {
      const eventsResponse = await axios.get(`https://api.github.com/users/${username}/events/public`, { headers });
      return eventsResponse.data
        .slice(0, 4)
        .map(event => ({
          type: getEventType(event.type),
          repo: event.repo.name,
          message: getEventMessage(event),
          time: new Date(event.created_at).toLocaleDateString()
        }));
    } catch (error) {
      return [];
    }
  };

  const getLanguageColor = (language) => {
    const colors = {
      'C': 'bg-blue-500',
      'C++': 'bg-blue-600',
      'Python': 'bg-green-500',
      'JavaScript': 'bg-yellow-500',
      'TypeScript': 'bg-blue-400',
      'Assembly': 'bg-red-500',
      'Other': 'bg-gray-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  const getEventType = (eventType) => {
    switch (eventType) {
      case 'PushEvent': return 'commit';
      case 'PullRequestEvent': return 'pr';
      case 'IssuesEvent': return 'issue';
      case 'ReleaseEvent': return 'release';
      default: return 'other';
    }
  };

  const getEventMessage = (event) => {
    switch (event.type) {
      case 'PushEvent':
        return event.payload.commits?.[0]?.message || 'Pushed commits';
      case 'PullRequestEvent':
        return `${event.payload.action} pull request: ${event.payload.pull_request.title}`;
      case 'IssuesEvent':
        return `${event.payload.action} issue: ${event.payload.issue.title}`;
      case 'ReleaseEvent':
        return `Released ${event.payload.release.tag_name}`;
      default:
        return 'Performed action';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'commit': return 'GitCommit';
      case 'pr': return 'GitPullRequest';
      case 'issue': return 'AlertCircle';
      case 'release': return 'Tag';
      default: return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'commit': return 'text-green-600 bg-green-100';
      case 'pr': return 'text-blue-600 bg-blue-100';
      case 'issue': return 'text-red-600 bg-red-100';
      case 'release': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl border border-border shadow-card p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/Nourreddine1920"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <Icon name="Github" size={24} className="text-white" />
          </a>
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
                  <div className={`w-3 h-3 rounded-full ${lang.color}`}></div>
                  <span className="text-sm font-medium text-text-primary">{lang.language}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${lang.color} transition-all duration-500`}
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-text-secondary w-8 text-right">{lang.percentage}%</span>
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
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                  <Icon name={getActivityIcon(activity.type)} size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-text-primary">{activity.repo}</span>
                    <span className="text-xs text-text-secondary">{activity.time}</span>
                  </div>
                  <p className="text-sm text-text-secondary line-clamp-2">{activity.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contribution Graph */}
      <div className="mt-6 pt-6 border-t border-border">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Contribution Graph</h3>
        <div className="bg-gray-50 rounded-lg p-6">
          {loading ? (
            <div className="flex items-center justify-center h-[200px]">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-primary"></div>
            </div>
          ) : githubStats.contributionData?.length > 0 ? (
            <>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                  data={githubStats.contributionData}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <XAxis
                    dataKey="week"
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return `${date.getMonth() + 1}/${date.getDate()}`;
                    }}
                  />
                  <YAxis
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                    tickFormatter={(value) => value}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '0.5rem',
                    }}
                    labelFormatter={(value) => `Week of ${value}`}
                    formatter={(value) => [`${value} commits`, 'Commits']}
                  />
                  <Area
                    type="monotone"
                    dataKey="commits"
                    stroke="#22c55e"
                    fillOpacity={1}
                    fill="url(#colorCommits)"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-sm text-text-secondary text-center mt-4">
                Showing weekly commits over the past year
              </p>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-[200px] text-gray-500">
              <Icon name="GitCommit" size={48} className="mb-4 text-gray-400" />
              <p>No contribution data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
