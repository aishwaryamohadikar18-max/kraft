import React, { useState } from 'react';
import { Shield, Users, Database, Settings, Activity, AlertTriangle, CheckCircle, Lock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const AdminControls: React.FC = () => {
  const { getThemeClasses } = useTheme();
  const themeClasses = getThemeClasses();
  const [activeSection, setActiveSection] = useState('overview');

  const systemHealth = {
    database: 'healthy',
    apis: 'healthy',
    agents: 'warning',
    storage: 'healthy'
  };

  const recentActivities = [
    { id: 1, action: 'Agent permissions updated', user: 'Admin', timestamp: '2 hours ago', type: 'security' },
    { id: 2, action: 'New knowledge graph node created', user: 'System', timestamp: '4 hours ago', type: 'system' },
    { id: 3, action: 'Campaign approval workflow modified', user: 'Manager', timestamp: '6 hours ago', type: 'workflow' },
    { id: 4, action: 'Database backup completed', user: 'System', timestamp: '12 hours ago', type: 'system' },
  ];

  const getHealthIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="text-green-500" size={20} />;
      case 'warning': return <AlertTriangle className="text-yellow-500" size={20} />;
      case 'error': return <AlertTriangle className="text-red-500" size={20} />;
      default: return <Activity className="text-gray-500" size={20} />;
    }
  };

  const getHealthColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'border-green-200 bg-green-50';
      case 'warning': return 'border-yellow-200 bg-yellow-50';
      case 'error': return 'border-red-200 bg-red-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'security': return <Shield className="text-red-500" size={16} />;
      case 'system': return <Database className="text-blue-500" size={16} />;
      case 'workflow': return <Settings className="text-purple-500" size={16} />;
      default: return <Activity className="text-gray-500" size={16} />;
    }
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg} transition-all duration-500`}>
      <div className="space-y-6 p-6">
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-bold ${themeClasses.text} mb-2`}>Admin Controls</h2>
          <p className={`${themeClasses.textSecondary}`}>System administration and security management</p>
        </div>

        {/* Admin Navigation */}
        <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-2`}>
          <div className="flex space-x-2">
            {[
              { id: 'overview', label: 'Overview', icon: Activity },
              { id: 'users', label: 'User Management', icon: Users },
              { id: 'security', label: 'Security', icon: Shield },
              { id: 'system', label: 'System Settings', icon: Settings },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`flex items-center px-4 py-2 rounded-xl font-medium transition-colors ${
                    activeSection === tab.id
                      ? `${themeClasses.accent} text-white ${themeClasses.shadow}`
                      : `${themeClasses.text} ${themeClasses.hover}`
                  }`}
                >
                  <Icon size={18} className="mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* System Health Overview */}
        {activeSection === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {Object.entries(systemHealth).map(([component, status]) => (
                <div key={component} className={`border rounded-2xl p-4 ${getHealthColor(status)} ${themeClasses.hover} transition-all duration-300 transform hover:scale-105`}>
                  <div className="flex items-center justify-between mb-2">
                    {getHealthIcon(status)}
                    <span className={`text-lg font-bold capitalize ${themeClasses.text}`}>
                      {component}
                    </span>
                  </div>
                  <p className={`text-sm capitalize font-medium ${
                    status === 'healthy' ? 'text-green-700' :
                    status === 'warning' ? 'text-yellow-700' : 'text-red-700'
                  }`}>
                    {status}
                  </p>
                </div>
              ))}
            </div>

            {/* Recent Activities */}
            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-6`}>Recent Activities</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className={`flex items-center justify-between p-4 ${themeClasses.cardBg} rounded-xl ${themeClasses.hover} transition-colors`}>
                    <div className="flex items-center space-x-3">
                      {getActivityIcon(activity.type)}
                      <div>
                        <h4 className={`font-medium ${themeClasses.text}`}>{activity.action}</h4>
                        <p className={`text-sm ${themeClasses.textSecondary}`}>by {activity.user}</p>
                      </div>
                    </div>
                    <span className={`text-sm ${themeClasses.textSecondary}`}>{activity.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Knowledge Graph Status */}
            <div className={`${themeClasses.gradient} ${themeClasses.border} border rounded-2xl p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>Knowledge Graph Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`${themeClasses.cardBg}/70 rounded-xl p-4`}>
                  <h4 className={`font-medium ${themeClasses.text} mb-2`}>Total Nodes</h4>
                  <p className={`text-2xl font-bold ${themeClasses.text}`}>2,847</p>
                  <p className={`text-sm ${themeClasses.textSecondary}`}>+127 this week</p>
                </div>
                <div className={`${themeClasses.cardBg}/70 rounded-xl p-4`}>
                  <h4 className={`font-medium ${themeClasses.text} mb-2`}>Connections</h4>
                  <p className={`text-2xl font-bold ${themeClasses.text}`}>8,932</p>
                  <p className={`text-sm ${themeClasses.textSecondary}`}>+445 this week</p>
                </div>
                <div className={`${themeClasses.cardBg}/70 rounded-xl p-4`}>
                  <h4 className={`font-medium ${themeClasses.text} mb-2`}>Insights Generated</h4>
                  <p className={`text-2xl font-bold ${themeClasses.text}`}>156</p>
                  <p className={`text-sm ${themeClasses.textSecondary}`}>+23 this week</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* User Management */}
        {activeSection === 'users' && (
          <div className="space-y-6">
            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-xl font-semibold ${themeClasses.text}`}>User Management</h3>
                <button className={`px-4 py-2 ${themeClasses.accent} text-white rounded-xl hover:opacity-90 transition-colors`}>
                  Add New User
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Total Users</h4>
                  <p className="text-3xl font-bold text-blue-600">24</p>
                  <p className="text-sm text-blue-700">+3 this month</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Active Sessions</h4>
                  <p className="text-3xl font-bold text-green-600">18</p>
                  <p className="text-sm text-green-700">75% online</p>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Pending Approvals</h4>
                  <p className="text-3xl font-bold text-yellow-600">5</p>
                  <p className="text-sm text-yellow-700">Role assignments</p>
                </div>
              </div>
            </div>

            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
              <h4 className={`font-semibold ${themeClasses.text} mb-4`}>Role-Based Access Control</h4>
              <div className="space-y-3">
                {['Admin', 'Manager', 'Analyst', 'Viewer'].map((role) => (
                  <div key={role} className={`flex items-center justify-between p-3 ${themeClasses.cardBg} rounded-xl ${themeClasses.hover} transition-colors`}>
                    <span className={`font-medium ${themeClasses.text}`}>{role}</span>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {role === 'Admin' ? '3' : role === 'Manager' ? '8' : role === 'Analyst' ? '10' : '3'} users
                      </span>
                      <button className={`${themeClasses.accent} text-white px-3 py-1 rounded-xl hover:opacity-90 transition-colors text-xs`}>
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Security Settings */}
        {activeSection === 'security' && (
          <div className="space-y-6">
            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-6`}>Security Configuration</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <Lock className="text-green-600" size={24} />
                    <div>
                      <h4 className="font-medium text-green-900">Two-Factor Authentication</h4>
                      <p className="text-sm text-green-700">Enabled for all admin accounts</p>
                    </div>
                  </div>
                  <div className="text-green-600">
                    <CheckCircle size={24} />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <Shield className="text-blue-600" size={24} />
                    <div>
                      <h4 className="font-medium text-blue-900">API Security</h4>
                      <p className="text-sm text-blue-700">Rate limiting and authentication active</p>
                    </div>
                  </div>
                  <div className="text-blue-600">
                    <CheckCircle size={24} />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-2xl">
                  <div className="flex items-center space-x-3">
                    <Database className="text-yellow-600" size={24} />
                    <div>
                      <h4 className="font-medium text-yellow-900">Data Encryption</h4>
                      <p className="text-sm text-yellow-700">AES-256 encryption for sensitive data</p>
                    </div>
                  </div>
                  <div className="text-yellow-600">
                    <AlertTriangle size={24} />
                  </div>
                </div>
              </div>
            </div>

            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
              <h4 className={`font-semibold ${themeClasses.text} mb-4`}>Security Monitoring</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                  <h5 className="font-medium text-red-900 mb-2">Failed Login Attempts</h5>
                  <p className="text-2xl font-bold text-red-600">12</p>
                  <p className="text-sm text-red-700">Last 24 hours</p>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                  <h5 className="font-medium text-blue-900 mb-2">Active Sessions</h5>
                  <p className="text-2xl font-bold text-blue-600">18</p>
                  <p className="text-sm text-blue-700">Currently online</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* System Settings */}
        {activeSection === 'system' && (
          <div className="space-y-6">
            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
              <h3 className={`text-xl font-semibold ${themeClasses.text} mb-6`}>System Configuration</h3>
              
              <div className="space-y-4">
                <div className={`flex items-center justify-between p-4 ${themeClasses.cardBg} rounded-2xl ${themeClasses.hover} transition-colors`}>
                  <div>
                    <h4 className={`font-medium ${themeClasses.text}`}>Auto-scaling</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>Automatically scale resources based on demand</p>
                  </div>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
                    Enabled
                  </button>
                </div>

                <div className={`flex items-center justify-between p-4 ${themeClasses.cardBg} rounded-2xl ${themeClasses.hover} transition-colors`}>
                  <div>
                    <h4 className={`font-medium ${themeClasses.text}`}>Backup Schedule</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>Daily backups at 2:00 AM UTC</p>
                  </div>
                  <button className={`px-4 py-2 ${themeClasses.accent} text-white rounded-xl hover:opacity-90 transition-colors`}>
                    Configure
                  </button>
                </div>

                <div className={`flex items-center justify-between p-4 ${themeClasses.cardBg} rounded-2xl ${themeClasses.hover} transition-colors`}>
                  <div>
                    <h4 className={`font-medium ${themeClasses.text}`}>Maintenance Mode</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>Temporarily disable public access</p>
                  </div>
                  <button className="px-4 py-2 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-colors">
                    Disabled
                  </button>
                </div>
              </div>
            </div>

            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
              <h4 className={`font-semibold ${themeClasses.text} mb-4`}>Resource Usage</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                  <h5 className="font-medium text-blue-900 mb-2">CPU Usage</h5>
                  <p className="text-2xl font-bold text-blue-600">45%</p>
                  <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-2xl">
                  <h5 className="font-medium text-green-900 mb-2">Memory Usage</h5>
                  <p className="text-2xl font-bold text-green-600">62%</p>
                  <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-2xl">
                  <h5 className="font-medium text-purple-900 mb-2">Storage Usage</h5>
                  <p className="text-2xl font-bold text-purple-600">38%</p>
                  <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: '38%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};