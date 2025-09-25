import React, { useState } from 'react';
import { TrendingUp, Target, Eye, MousePointer, DollarSign, BarChart3, Filter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const PerformanceCockpit: React.FC = () => {
  const { getThemeClasses } = useTheme();
  const themeClasses = getThemeClasses();
  const [timeRange, setTimeRange] = useState('30d');
  const [selectedMetric, setSelectedMetric] = useState('impressions');

  const keyMetrics = [
    { title: 'Total Impressions', value: '12.4M', change: '+18.2%', icon: Eye, color: 'blue' },
    { title: 'Click-Through Rate', value: '2.8%', change: '+0.4%', icon: MousePointer, color: 'green' },
    { title: 'Conversion Rate', value: '4.1%', change: '+1.2%', icon: Target, color: 'purple' },
    { title: 'Total Spend', value: '$24,580', change: '+8.7%', icon: DollarSign, color: 'orange' },
    { title: 'ROAS', value: '3.2x', change: '+0.8x', icon: TrendingUp, color: 'pink' },
    { title: 'Cost per Click', value: '$0.42', change: '-$0.08', icon: BarChart3, color: 'cyan' },
  ];

  const campaigns = [
    {
      name: 'Holiday Sale 2024',
      status: 'active',
      impressions: '2.1M',
      clicks: '45.2K',
      conversions: '1,234',
      spend: '$5,680',
      roas: '4.2x',
      performance: 'excellent'
    },
    {
      name: 'Brand Awareness Q1',
      status: 'active',
      impressions: '1.8M',
      clicks: '38.7K',
      conversions: '892',
      spend: '$4,230',
      roas: '3.1x',
      performance: 'good'
    },
    {
      name: 'Product Launch',
      status: 'completed',
      impressions: '3.2M',
      clicks: '68.9K',
      conversions: '2,156',
      spend: '$8,940',
      roas: '3.8x',
      performance: 'excellent'
    }
  ];

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'fair': return 'text-yellow-600 bg-yellow-100';
      case 'poor': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg} transition-all duration-500`}>
      <div className="space-y-6 p-6">
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-bold ${themeClasses.text} mb-2`}>Performance Cockpit</h2>
          <p className={`${themeClasses.textSecondary}`}>Real-time analytics and performance monitoring</p>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Filter className={`${themeClasses.textSecondary}`} size={20} />
            <span className={`font-medium ${themeClasses.text}`}>Time Range:</span>
            <div className="flex space-x-2">
              {['7d', '30d', '90d', '1y'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-2 rounded-xl font-medium transition-colors ${
                    timeRange === range
                      ? `${themeClasses.accent} text-white`
                      : `${themeClasses.cardBg} ${themeClasses.text} ${themeClasses.hover}`
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
          
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
            <BarChart3 className="mr-2" size={16} />
            Export Report
          </button>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const isPositive = metric.change.startsWith('+');
            
            return (
              <div key={index} className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6 ${themeClasses.hover} transition-all duration-300 transform hover:scale-105 ${themeClasses.shadow}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-${metric.color}-100 rounded-xl`}>
                    <Icon className={`text-${metric.color}-600`} size={24} />
                  </div>
                  <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                    isPositive ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
                  }`}>
                    {metric.change}
                  </span>
                </div>
                <h3 className={`text-2xl font-bold ${themeClasses.text} mb-1`}>{metric.value}</h3>
                <p className={`${themeClasses.textSecondary} text-sm`}>{metric.title}</p>
              </div>
            );
          })}
        </div>

        {/* Performance Chart */}
        <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-xl font-semibold ${themeClasses.text}`}>Performance Trends</h3>
            <div className="flex space-x-2">
              {['impressions', 'clicks', 'conversions', 'spend'].map((metric) => (
                <button
                  key={metric}
                  onClick={() => setSelectedMetric(metric)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors capitalize ${
                    selectedMetric === metric
                      ? `${themeClasses.accent} text-white`
                      : `${themeClasses.cardBg} ${themeClasses.text} ${themeClasses.hover}`
                  }`}
                >
                  {metric}
                </button>
              ))}
            </div>
          </div>
          
          <div className={`h-64 ${themeClasses.gradient} rounded-2xl flex items-center justify-center`}>
            <div className="text-center">
              <BarChart3 className={`${themeClasses.textSecondary} mb-4 mx-auto`} size={48} />
              <p className={`${themeClasses.textSecondary} mb-2`}>Interactive performance chart</p>
              <p className={`text-sm ${themeClasses.textSecondary}`}>Displaying {selectedMetric} for {timeRange}</p>
            </div>
          </div>
        </div>

        {/* Campaign Performance Table */}
        <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
          <h3 className={`text-xl font-semibold ${themeClasses.text} mb-6`}>Campaign Performance</h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${themeClasses.border}`}>
                  <th className={`text-left py-3 px-4 font-semibold ${themeClasses.text}`}>Campaign</th>
                  <th className={`text-left py-3 px-4 font-semibold ${themeClasses.text}`}>Status</th>
                  <th className={`text-right py-3 px-4 font-semibold ${themeClasses.text}`}>Impressions</th>
                  <th className={`text-right py-3 px-4 font-semibold ${themeClasses.text}`}>Clicks</th>
                  <th className={`text-right py-3 px-4 font-semibold ${themeClasses.text}`}>Conversions</th>
                  <th className={`text-right py-3 px-4 font-semibold ${themeClasses.text}`}>Spend</th>
                  <th className={`text-right py-3 px-4 font-semibold ${themeClasses.text}`}>ROAS</th>
                  <th className={`text-center py-3 px-4 font-semibold ${themeClasses.text}`}>Performance</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign, index) => (
                  <tr key={index} className={`border-b ${themeClasses.border} ${themeClasses.hover} transition-colors`}>
                    <td className="py-4 px-4">
                      <div>
                        <h4 className={`font-medium ${themeClasses.text}`}>{campaign.name}</h4>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className={`py-4 px-4 text-right font-medium ${themeClasses.text}`}>{campaign.impressions}</td>
                    <td className={`py-4 px-4 text-right font-medium ${themeClasses.text}`}>{campaign.clicks}</td>
                    <td className={`py-4 px-4 text-right font-medium ${themeClasses.text}`}>{campaign.conversions}</td>
                    <td className={`py-4 px-4 text-right font-medium ${themeClasses.text}`}>{campaign.spend}</td>
                    <td className="py-4 px-4 text-right font-bold text-green-600">{campaign.roas}</td>
                    <td className="py-4 px-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPerformanceColor(campaign.performance)}`}>
                        {campaign.performance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Insights */}
        <div className={`${themeClasses.gradient} ${themeClasses.border} border rounded-2xl p-6`}>
          <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>AI Performance Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className={`${themeClasses.cardBg}/70 rounded-xl p-4`}>
                <h4 className={`font-medium ${themeClasses.text} mb-2`}>Optimization Opportunities</h4>
                <ul className={`text-sm ${themeClasses.textSecondary} space-y-1`}>
                  <li>• Increase budget on Holiday Sale campaign (+28% ROAS potential)</li>
                  <li>• Adjust targeting for Brand Awareness campaign</li>
                  <li>• Test new creative variations for Product Launch</li>
                </ul>
              </div>
              <div className={`${themeClasses.cardBg}/70 rounded-xl p-4`}>
                <h4 className={`font-medium ${themeClasses.text} mb-2`}>Performance Alerts</h4>
                <ul className={`text-sm ${themeClasses.textSecondary} space-y-1`}>
                  <li>• CPC increased 15% in last 7 days</li>
                  <li>• Holiday Sale campaign approaching daily budget limit</li>
                </ul>
              </div>
            </div>
            
            <div className={`${themeClasses.cardBg}/70 rounded-xl p-4`}>
              <h4 className={`font-medium ${themeClasses.text} mb-4`}>Predictive Analytics</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${themeClasses.textSecondary}`}>Next 7 days forecast</span>
                  <span className={`font-bold ${themeClasses.text}`}>+12.3% growth</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${themeClasses.textSecondary}`}>Budget optimization potential</span>
                  <span className={`font-bold ${themeClasses.text}`}>$2,150 savings</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${themeClasses.textSecondary}`}>Conversion rate improvement</span>
                  <span className={`font-bold ${themeClasses.text}`}>+0.7% potential</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};