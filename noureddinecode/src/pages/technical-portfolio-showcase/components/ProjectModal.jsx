import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedCode, setExpandedCode] = useState(false);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'technical', label: 'Technical Details', icon: 'Code2' },
    { id: 'architecture', label: 'Architecture', icon: 'Network' },
    { id: 'results', label: 'Results & Impact', icon: 'TrendingUp' }
  ];

  const handleBackdropClick = (e) => {
    if (e?.target === e?.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl shadow-elevated max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg flex items-center justify-center">
              <Icon name="Code2" size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">{project?.title}</h2>
              <p className="text-text-secondary">{project?.industry} • {project?.difficulty}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary"
          />
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-border">
          <div className="flex space-x-1 p-6">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-brand-primary text-white shadow-interactive'
                    : 'text-text-secondary hover:text-text-primary hover:bg-brand-surface'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Project Image */}
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src={project?.image}
                  alt={project?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm opacity-90">Project Duration</div>
                  <div className="text-xl font-bold">{project?.duration}</div>
                </div>
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Project Description</h3>
                <p className="text-text-secondary leading-relaxed">{project?.fullDescription}</p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project?.features?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-brand-surface rounded-lg">
                      <Icon name="CheckCircle" size={20} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-text-primary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-brand-primary text-white text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-6">
              {/* Technical Challenges */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Technical Challenges</h3>
                <div className="space-y-3">
                  {project?.challenges?.map((challenge, index) => (
                    <div key={index} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Icon name="AlertTriangle" size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-red-900 mb-1">{challenge?.title}</h4>
                          <p className="text-red-700 text-sm">{challenge?.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions Implemented */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Solutions Implemented</h3>
                <div className="space-y-3">
                  {project?.solutions?.map((solution, index) => (
                    <div key={index} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-green-900 mb-1">{solution?.title}</h4>
                          <p className="text-green-700 text-sm">{solution?.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Snippet */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-text-primary">Code Implementation</h3>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName={expandedCode ? "Minimize2" : "Maximize2"}
                    iconPosition="left"
                    onClick={() => setExpandedCode(!expandedCode)}
                  >
                    {expandedCode ? "Collapse" : "Expand"}
                  </Button>
                </div>
                <div className={`bg-gray-900 rounded-lg overflow-hidden ${expandedCode ? 'h-96' : 'h-48'}`}>
                  <div className="flex items-center justify-between p-3 bg-gray-800 border-b border-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-sm font-mono">{project?.codeLanguage}</span>
                  </div>
                  <pre className="p-4 text-green-400 font-mono text-sm overflow-auto h-full">
                    <code>{project?.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* System Architecture Diagram */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">System Architecture</h3>
                <div className="bg-gray-50 rounded-lg p-6 border border-border">
                  <div className="text-center text-gray-500">
                    <Icon name="Network" size={48} className="mx-auto mb-2" />
                    <p>Interactive Architecture Diagram</p>
                    <p className="text-sm">Click components to explore details</p>
                  </div>
                </div>
              </div>

              {/* Architecture Components */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Key Components</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project?.architectureComponents?.map((component, index) => (
                    <div key={index} className="p-4 bg-white border border-border rounded-lg shadow-card">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Cpu" size={20} className="text-white" />
                        </div>
                        <div>
                          <h4 className="font-medium text-text-primary mb-1">{component?.name}</h4>
                          <p className="text-text-secondary text-sm mb-2">{component?.description}</p>
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-1 bg-brand-surface text-brand-primary text-xs rounded">
                              {component?.technology}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-6">
              {/* Performance Metrics */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Performance Improvements</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project?.metrics?.map((metric, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg text-white">
                      <div className="text-3xl font-bold mb-2">{metric?.value}</div>
                      <div className="text-sm opacity-90">{metric?.label}</div>
                      <div className="text-xs opacity-75 mt-1">{metric?.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Summary */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Project Impact</h3>
                <div className="p-6 bg-success/10 border border-success/20 rounded-lg">
                  <p className="text-text-primary leading-relaxed">{project?.impact}</p>
                </div>
              </div>

              {/* Lessons Learned */}
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-3">Lessons Learned</h3>
                <div className="space-y-3">
                  {project?.lessonsLearned?.map((lesson, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                      <Icon name="Lightbulb" size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-900">{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-gray-50">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              iconName="Github"
              iconPosition="left"
              className="text-text-secondary hover:text-text-primary"
            >
              View Repository
            </Button>
            <Button
              variant="outline"
              iconName="ExternalLink"
              iconPosition="left"
              className="text-text-secondary hover:text-text-primary"
            >
              Live Demo
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              onClick={onClose}
              className="text-text-secondary hover:text-text-primary"
            >
              Close
            </Button>
            <Button
              variant="default"
              iconName="Download"
              iconPosition="left"
              className="bg-brand-primary hover:bg-brand-primary/90"
            >
              Download Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;