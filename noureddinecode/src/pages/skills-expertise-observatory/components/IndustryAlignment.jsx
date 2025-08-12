import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const IndustryAlignment = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('automotive');

  const industryData = {
    automotive: {
      title: 'Automotive Industry',
      icon: 'Car',
      color: 'from-red-600 to-red-800',
      marketTrends: [
        { trend: 'Electric Vehicle Adoption', growth: '+45%', relevance: 95 },
        { trend: 'Autonomous Driving Systems', growth: '+38%', relevance: 90 },
        { trend: 'Connected Car Technologies', growth: '+32%', relevance: 88 },
        { trend: 'Advanced Driver Assistance', growth: '+28%', relevance: 92 },
        { trend: 'Vehicle Cybersecurity', growth: '+55%', relevance: 85 }
      ],
      demandSkills: [
        { skill: 'AUTOSAR Development', demand: 95, proficiency: 75, gap: -20 },
        { skill: 'Functional Safety (ISO 26262)', demand: 90, proficiency: 70, gap: -20 },
        { skill: 'CAN/CAN-FD Protocol', demand: 88, proficiency: 95, gap: +7 },
        { skill: 'Automotive Cybersecurity', demand: 85, proficiency: 60, gap: -25 },
        { skill: 'Electric Powertrain Control', demand: 92, proficiency: 65, gap: -27 },
        { skill: 'V2X Communication', demand: 78, proficiency: 55, gap: -23 },
        { skill: 'Real-time Systems', demand: 87, proficiency: 90, gap: +3 },
        { skill: 'Embedded C/C++', demand: 85, proficiency: 95, gap: +10 }
      ],
      salaryRanges: {
        junior: '$65,000 - $85,000',
        mid: '$85,000 - $120,000',
        senior: '$120,000 - $160,000',
        lead: '$160,000 - $200,000+'
      },
      jobRoles: [
        'Automotive Software Engineer',
        'ECU Development Engineer',
        'AUTOSAR Developer',
        'Functional Safety Engineer',
        'Vehicle Network Engineer'
      ],
      companies: ['Tesla', 'BMW', 'Mercedes-Benz', 'Bosch', 'Continental', 'Aptiv'],
      futureSkills: ['AI/ML for Automotive', 'Quantum Computing Security', 'Edge AI Processing']
    },
    iot: {
      title: 'IoT & Connected Devices',
      icon: 'Wifi',
      color: 'from-blue-600 to-blue-800',
      marketTrends: [
        { trend: 'Industrial IoT Growth', growth: '+42%', relevance: 92 },
        { trend: 'Edge Computing Adoption', growth: '+48%', relevance: 88 },
        { trend: 'IoT Security Solutions', growth: '+52%', relevance: 90 },
        { trend: '5G IoT Applications', growth: '+65%', relevance: 85 },
        { trend: 'AI at the Edge', growth: '+58%', relevance: 80 }
      ],
      demandSkills: [
        { skill: 'Wireless Protocols (WiFi, BLE, LoRa)', demand: 92, proficiency: 85, gap: -7 },
        { skill: 'Cloud Integration (AWS, Azure)', demand: 88, proficiency: 75, gap: -13 },
        { skill: 'Edge Computing', demand: 85, proficiency: 70, gap: -15 },
        { skill: 'IoT Security', demand: 90, proficiency: 65, gap: -25 },
        { skill: 'MQTT/CoAP Protocols', demand: 82, proficiency: 80, gap: -2 },
        { skill: 'Power Management', demand: 87, proficiency: 85, gap: -2 },
        { skill: 'Sensor Integration', demand: 84, proficiency: 90, gap: +6 },
        { skill: 'Microcontroller Programming', demand: 86, proficiency: 95, gap: +9 }
      ],
      salaryRanges: {
        junior: '$60,000 - $80,000',
        mid: '$80,000 - $110,000',
        senior: '$110,000 - $145,000',
        lead: '$145,000 - $180,000+'
      },
      jobRoles: [
        'IoT Solutions Architect',
        'Embedded IoT Developer',
        'Edge Computing Engineer',
        'IoT Security Specialist',
        'Connected Products Engineer'
      ],
      companies: ['Amazon', 'Microsoft', 'Google', 'Cisco', 'Intel', 'Qualcomm'],
      futureSkills: ['5G Integration', 'AI/ML at Edge', 'Blockchain for IoT']
    },
    industrial: {
      title: 'Industrial Automation',
      icon: 'Factory',
      color: 'from-green-600 to-green-800',
      marketTrends: [
        { trend: 'Industry 4.0 Implementation', growth: '+35%', relevance: 95 },
        { trend: 'Digital Twin Technology', growth: '+48%', relevance: 88 },
        { trend: 'Predictive Maintenance', growth: '+42%', relevance: 90 },
        { trend: 'Industrial Cybersecurity', growth: '+55%', relevance: 92 },
        { trend: 'Smart Manufacturing', growth: '+38%', relevance: 87 }
      ],
      demandSkills: [
        { skill: 'PLC Programming', demand: 90, proficiency: 75, gap: -15 },
        { skill: 'Industrial Networks (Profinet, EtherCAT)', demand: 88, proficiency: 80, gap: -8 },
        { skill: 'SCADA Systems', demand: 85, proficiency: 70, gap: -15 },
        { skill: 'HMI Development', demand: 82, proficiency: 65, gap: -17 },
        { skill: 'Motion Control', demand: 87, proficiency: 85, gap: -2 },
        { skill: 'Industrial Cybersecurity', demand: 92, proficiency: 60, gap: -32 },
        { skill: 'Modbus Protocol', demand: 78, proficiency: 85, gap: +7 },
        { skill: 'Real-time Control Systems', demand: 89, proficiency: 90, gap: +1 }
      ],
      salaryRanges: {
        junior: '$58,000 - $75,000',
        mid: '$75,000 - $105,000',
        senior: '$105,000 - $140,000',
        lead: '$140,000 - $175,000+'
      },
      jobRoles: [
        'Automation Engineer',
        'Control Systems Engineer',
        'Industrial IoT Developer',
        'SCADA Developer',
        'Manufacturing Systems Engineer'
      ],
      companies: ['Siemens', 'Rockwell Automation', 'Schneider Electric', 'ABB', 'Honeywell', 'Emerson'],
      futureSkills: ['Digital Twin Development', 'AI-driven Predictive Maintenance', 'Cybersecurity for OT']
    }
  };

  const currentIndustry = industryData?.[selectedIndustry];

  const getGapColor = (gap) => {
    if (gap >= 0) return 'text-success bg-success/10 border-success/20';
    if (gap >= -10) return 'text-warning bg-warning/10 border-warning/20';
    return 'text-destructive bg-destructive/10 border-destructive/20';
  };

  const getGapIcon = (gap) => {
    if (gap >= 0) return 'TrendingUp';
    if (gap >= -10) return 'Minus';
    return 'TrendingDown';
  };

  return (
    <div className="bg-white rounded-xl shadow-card border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Industry Alignment Analysis</h2>
          <p className="text-text-secondary">Skills alignment with current market demands and trends</p>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="BarChart3" size={20} className="text-brand-primary" />
          <span className="text-sm font-medium text-brand-primary">Market Intelligence</span>
        </div>
      </div>
      {/* Industry Selector */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(industryData)?.map(([key, industry]) => (
          <button
            key={key}
            onClick={() => setSelectedIndustry(key)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedIndustry === key
                ? 'bg-brand-primary text-white shadow-interactive'
                : 'bg-brand-surface text-text-secondary hover:text-text-primary hover:bg-brand-surface/80'
            }`}
          >
            <Icon name={industry?.icon} size={16} />
            <span className="hidden sm:inline">{industry?.title}</span>
            <span className="sm:hidden">{industry?.title?.split(' ')?.[0]}</span>
          </button>
        ))}
      </div>
      {/* Industry Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Market Trends */}
        <div className="bg-brand-surface rounded-lg p-4 border border-border">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
            <Icon name="TrendingUp" size={18} className="text-success" />
            <span>Market Trends</span>
          </h3>
          <div className="space-y-3">
            {currentIndustry?.marketTrends?.map((trend, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="text-sm font-medium text-text-primary">{trend?.trend}</div>
                  <div className="text-xs text-text-secondary">Growth: {trend?.growth}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-success">{trend?.relevance}%</div>
                  <div className="text-xs text-text-secondary">Relevance</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Salary Ranges */}
        <div className="bg-brand-surface rounded-lg p-4 border border-border">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
            <Icon name="DollarSign" size={18} className="text-brand-primary" />
            <span>Salary Ranges</span>
          </h3>
          <div className="space-y-3">
            {Object.entries(currentIndustry?.salaryRanges)?.map(([level, range]) => (
              <div key={level} className="flex items-center justify-between">
                <span className="text-sm font-medium text-text-primary capitalize">{level} Level</span>
                <span className="text-sm text-text-secondary">{range}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Top Companies */}
        <div className="bg-brand-surface rounded-lg p-4 border border-border">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
            <Icon name="Building" size={18} className="text-accent" />
            <span>Top Employers</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {currentIndustry?.companies?.map((company, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-white rounded text-xs text-text-secondary border border-border"
              >
                {company}
              </span>
            ))}
          </div>
          <div className="mt-3">
            <h4 className="text-xs font-medium text-text-primary mb-2">Common Roles</h4>
            <div className="space-y-1">
              {currentIndustry?.jobRoles?.slice(0, 3)?.map((role, idx) => (
                <div key={idx} className="text-xs text-text-secondary">• {role}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Skills Gap Analysis */}
      <div className="bg-brand-surface rounded-lg p-6 border border-border mb-6">
        <h3 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
          <Icon name="Target" size={18} className="text-brand-primary" />
          <span>Skills Gap Analysis</span>
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentIndustry?.demandSkills?.map((skill, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 border border-border">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-text-primary">{skill?.skill}</h4>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded text-xs border flex items-center space-x-1 ${getGapColor(skill?.gap)}`}>
                    <Icon name={getGapIcon(skill?.gap)} size={12} />
                    <span>{skill?.gap > 0 ? '+' : ''}{skill?.gap}%</span>
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-text-secondary mb-1">
                  <span>Market Demand</span>
                  <span>{skill?.demand}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary"
                    style={{ width: `${skill?.demand}%` }}
                  ></div>
                </div>

                <div className="flex justify-between text-xs text-text-secondary mb-1">
                  <span>Current Proficiency</span>
                  <span>{skill?.proficiency}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      skill?.proficiency >= skill?.demand 
                        ? 'bg-gradient-to-r from-success to-success/80' :'bg-gradient-to-r from-warning to-warning/80'
                    }`}
                    style={{ width: `${skill?.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Future Skills & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-lg p-6 border border-brand-primary/20">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
            <Icon name="Lightbulb" size={18} className="text-brand-primary" />
            <span>Emerging Skills</span>
          </h3>
          <div className="space-y-3">
            {currentIndustry?.futureSkills?.map((skill, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <Icon name="ArrowRight" size={14} className="text-brand-primary" />
                <span className="text-sm text-text-primary">{skill}</span>
                <span className="px-2 py-1 bg-brand-primary/10 text-brand-primary rounded text-xs">
                  Future
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-success/5 to-success/10 rounded-lg p-6 border border-success/20">
          <h3 className="font-semibold text-text-primary mb-4 flex items-center space-x-2">
            <Icon name="CheckCircle" size={18} className="text-success" />
            <span>Recommendations</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Icon name="Star" size={14} className="text-success mt-0.5" />
              <div>
                <div className="text-sm font-medium text-text-primary">Strengthen Core Skills</div>
                <div className="text-xs text-text-secondary">Focus on skills with largest gaps</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="TrendingUp" size={14} className="text-success mt-0.5" />
              <div>
                <div className="text-sm font-medium text-text-primary">Leverage Strong Areas</div>
                <div className="text-xs text-text-secondary">Capitalize on above-average skills</div>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Icon name="BookOpen" size={14} className="text-success mt-0.5" />
              <div>
                <div className="text-sm font-medium text-text-primary">Future-Proof Skills</div>
                <div className="text-xs text-text-secondary">Invest in emerging technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overall Alignment Score */}
      <div className="mt-6 bg-gradient-to-r from-brand-surface to-white rounded-lg p-6 border border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-text-primary mb-1">Overall Industry Alignment</h3>
            <p className="text-sm text-text-secondary">Based on current skills vs market demand</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-brand-primary">
              {Math.round(currentIndustry?.demandSkills?.reduce((acc, skill) => acc + Math.min(skill?.proficiency, skill?.demand), 0) / currentIndustry?.demandSkills?.length)}%
            </div>
            <div className="text-sm text-text-secondary">Alignment Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryAlignment;