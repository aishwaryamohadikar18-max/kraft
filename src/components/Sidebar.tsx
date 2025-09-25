import React from 'react';
import { 
  BarChart3, 
  Users, 
  Sparkles, 
  Target, 
  Settings, 
  Layers3,
  TrendingUp,
  Shield,
  Palette as PaletteIcon
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeSelector } from './ThemeSelector';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const sidebarItems = [
  { id: 'strategy', label: 'Strategy Studio', icon: Target, color: 'text-purple-600' },
  { id: 'dashboard', label: 'Dashboard', icon: BarChart3, color: 'text-blue-600' },
  { id: 'creator', label: 'Creator Studio', icon: Sparkles, color: 'text-pink-600' },
  { id: 'brandkit', label: 'Brand Kit', icon: PaletteIcon, color: 'text-indigo-600' },
  { id: 'simulations', label: 'Simulations', icon: Layers3, color: 'text-green-600' },
  { id: 'agents', label: 'Agents', icon: Users, color: 'text-orange-600' },
  { id: 'performance', label: 'Performance Cockpit', icon: TrendingUp, color: 'text-red-600' },
  { id: 'admin', label: 'Admin Controls', icon: Shield, color: 'text-gray-600' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const { getThemeClasses } = useTheme();
  const themeClasses = getThemeClasses();

  return (
    <div className={`w-64 ${themeClasses.cardBg} border-r ${themeClasses.border} h-screen flex flex-col transition-all duration-500`}>
      <div className={`p-6 border-b ${themeClasses.border}`}>
        <h1 className={`text-xl font-bold ${themeClasses.text}`}>Builder Module</h1>
        <p className={`text-sm ${themeClasses.textSecondary} mt-1`}>Campaign Orchestrator</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 group transform hover:scale-105 ${
                isActive 
                  ? `${themeClasses.gradient} border ${themeClasses.border} ${themeClasses.shadow}` 
                  : `${themeClasses.hover} hover:shadow-sm`
              }`}
            >
              <Icon 
                size={20} 
                className={`mr-3 transition-colors ${
                  isActive ? item.color : `${themeClasses.textSecondary} group-hover:${themeClasses.text}`
                }`} 
              />
              <span className={`font-medium transition-colors ${
                isActive ? themeClasses.text : `${themeClasses.textSecondary} group-hover:${themeClasses.text}`
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className={`p-4 border-t ${themeClasses.border} space-y-4`}>
        {/* Theme Selector */}
        <div>
          <p className={`text-xs ${themeClasses.textSecondary} mb-2 font-medium`}>Theme</p>
          <ThemeSelector />
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 text-white">
          <p className="font-medium text-sm">Brand Profile</p>
          <div className="flex items-center mt-2">
            <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-xs font-bold">P</span>
            </div>
            <span className="ml-2 text-sm">Premium</span>
          </div>
        </div>
      </div>
    </div>
  );
};