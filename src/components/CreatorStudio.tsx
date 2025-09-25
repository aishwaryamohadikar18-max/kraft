import React, { useState } from 'react';
import { 
  Image, 
  Video, 
  FileText, 
  Palette, 
  Sparkles, 
  Play, 
  Download, 
  Upload,
  Layers,
  Type,
  Square,
  Circle,
  Triangle,
  Zap,
  Settings,
  Eye,
  Save,
  Share2,
  Copy,
  RotateCcw,
  Move,
  Crop,
  Filter,
  Sliders,
  PaintBucket,
  MousePointer,
  Grid,
  AlignCenter,
  Bold,
  Italic,
  Underline,
  Send,
  Bot,
  ChevronDown,
  Wand2
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const CreatorStudio: React.FC = () => {
  const { getThemeClasses } = useTheme();
  const themeClasses = getThemeClasses();
  
  const [activeCreativeType, setActiveCreativeType] = useState<string>('image');
  const [selectedTool, setSelectedTool] = useState<string>('select');
  const [showBrandKit, setShowBrandKit] = useState(false);
  const [activeTab, setActiveTab] = useState('design');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedBrandKit, setSelectedBrandKit] = useState('default');
  const [logoPlacement, setLogoPlacement] = useState('top-right');
  const [formatStyle, setFormatStyle] = useState('modern');
  
  const creativeTypes = [
    { id: 'image', label: 'Image Ads', icon: Image, color: 'blue' },
    { id: 'video', label: 'Video Ads', icon: Video, color: 'red' },
    { id: 'copy', label: 'Ad Copy', icon: FileText, color: 'green' },
    { id: 'design', label: 'Creative Design', icon: Palette, color: 'purple' },
  ];

  const designTools = [
    { id: 'select', label: 'Select', icon: MousePointer },
    { id: 'text', label: 'Text', icon: Type },
    { id: 'shapes', label: 'Shapes', icon: Square },
    { id: 'images', label: 'Images', icon: Image },
    { id: 'crop', label: 'Crop', icon: Crop },
    { id: 'filter', label: 'Filter', icon: Filter },
    { id: 'paint', label: 'Paint', icon: PaintBucket },
  ];

  const templates = [
    { 
      id: 1, 
      name: 'Holiday Sale Banner', 
      type: 'image', 
      performance: 'High',
      thumbnail: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    { 
      id: 2, 
      name: 'Product Showcase Video', 
      type: 'video', 
      performance: 'Medium',
      thumbnail: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    { 
      id: 3, 
      name: 'Social Media Post', 
      type: 'image', 
      performance: 'High',
      thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    { 
      id: 4, 
      name: 'Email Header Design', 
      type: 'design', 
      performance: 'Low',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
  ];

  const brandAssets = [
    { name: 'Primary Logo', type: 'logo', url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'Secondary Logo', type: 'logo', url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'Product Shot 1', type: 'image', url: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'Product Shot 2', type: 'image', url: 'https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'Background 1', type: 'background', url: 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { name: 'Background 2', type: 'background', url: 'https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  ];

  const generatedCreatives = [
    { 
      id: 1, 
      name: 'Jeep Adventure Campaign', 
      status: 'generated',
      thumbnail: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
      variations: 4
    },
    { 
      id: 2, 
      name: 'Off-Road Experience', 
      status: 'generating',
      thumbnail: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
      variations: 3
    },
    { 
      id: 3, 
      name: 'Desert Explorer', 
      status: 'generated',
      thumbnail: 'https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop',
      variations: 5
    },
  ];

  const brandKitOptions = [
    { id: 'default', name: 'Default Brand Kit' },
    { id: 'premium', name: 'Premium Collection' },
    { id: 'minimal', name: 'Minimal Style' },
  ];

  const logoPlacementOptions = [
    { id: 'top-left', name: 'Top Left' },
    { id: 'top-right', name: 'Top Right' },
    { id: 'bottom-left', name: 'Bottom Left' },
    { id: 'bottom-right', name: 'Bottom Right' },
    { id: 'center', name: 'Center' },
  ];

  const formatStyleOptions = [
    { id: 'modern', name: 'Modern' },
    { id: 'classic', name: 'Classic' },
    { id: 'bold', name: 'Bold' },
    { id: 'minimal', name: 'Minimal' },
    { id: 'creative', name: 'Creative' },
  ];

  const handleGenerateCreative = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      setPrompt('');
      // Add new creative to the list
    }, 3000);
  };

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case 'High': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'generated': return 'text-green-600 bg-green-100';
      case 'generating': return 'text-blue-600 bg-blue-100';
      case 'failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg} transition-all duration-500`}>
      <div className="space-y-6 p-6">
        <div className="text-center mb-8">
          <h2 className={`text-3xl font-bold ${themeClasses.text} mb-2`}>Creator Studio</h2>
          <p className={`${themeClasses.textSecondary}`}>Design and build compelling creatives for your campaigns</p>
        </div>

        {/* Creative Type Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {creativeTypes.map((type) => {
            const Icon = type.icon;
            const isActive = activeCreativeType === type.id;
            
            return (
              <button
                key={type.id}
                onClick={() => setActiveCreativeType(type.id)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  isActive 
                    ? `border-${type.color}-500 ${themeClasses.gradient} ${themeClasses.shadow}` 
                    : `${themeClasses.border} ${themeClasses.cardBg} ${themeClasses.hover}`
                }`}
              >
                <Icon 
                  className={`mx-auto mb-3 ${
                    isActive ? `text-${type.color}-600` : themeClasses.textSecondary
                  }`} 
                  size={32} 
                />
                <h3 className={`font-medium ${
                  isActive ? `text-${type.color}-900` : themeClasses.text
                }`}>
                  {type.label}
                </h3>
              </button>
            );
          })}
        </div>

        {/* AI Creative Generator with Chat Interface */}
        <div className={`${themeClasses.cardBg} ${themeClasses.border} border-2 rounded-3xl p-8 ${themeClasses.shadow}`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-2xl font-bold ${themeClasses.text} mb-2 flex items-center`}>
                <Sparkles className="mr-3 text-purple-500 animate-pulse" size={28} />
                AI Creative Generator
              </h3>
              <p className={`${themeClasses.textSecondary}`}>
                Generate high-performing creatives using AI-powered design tools
              </p>
            </div>
            <div className="hidden md:block">
              <div className={`w-20 h-20 ${themeClasses.gradient} rounded-2xl flex items-center justify-center`}>
                <Wand2 size={32} className="text-white animate-bounce" />
              </div>
            </div>
          </div>

          {/* Generation Settings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Brand Kit Selection */}
            <div>
              <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                Brand Kit Selection
              </label>
              <div className="relative">
                <select
                  value={selectedBrandKit}
                  onChange={(e) => setSelectedBrandKit(e.target.value)}
                  className={`w-full p-3 ${themeClasses.cardBg} ${themeClasses.border} border rounded-xl ${themeClasses.text} focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none`}
                >
                  {brandKitOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${themeClasses.textSecondary}`} size={20} />
              </div>
            </div>

            {/* Logo Placement */}
            <div>
              <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                Logo Placement
              </label>
              <div className="relative">
                <select
                  value={logoPlacement}
                  onChange={(e) => setLogoPlacement(e.target.value)}
                  className={`w-full p-3 ${themeClasses.cardBg} ${themeClasses.border} border rounded-xl ${themeClasses.text} focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none`}
                >
                  {logoPlacementOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${themeClasses.textSecondary}`} size={20} />
              </div>
            </div>

            {/* Format Styling */}
            <div>
              <label className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                Format Styling
              </label>
              <div className="relative">
                <select
                  value={formatStyle}
                  onChange={(e) => setFormatStyle(e.target.value)}
                  className={`w-full p-3 ${themeClasses.cardBg} ${themeClasses.border} border rounded-xl ${themeClasses.text} focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none`}
                >
                  {formatStyleOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${themeClasses.textSecondary}`} size={20} />
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className={`${themeClasses.cardBg} ${themeClasses.border} border-2 rounded-2xl p-4 mb-6`}>
            <div className="flex items-center space-x-3">
              <Bot className="text-purple-500 animate-pulse" size={24} />
              <div className="flex-1">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your creative vision... (e.g., 'Create a modern social media ad for eco-friendly skincare products with a clean, minimalist design')"
                  className={`w-full p-4 bg-transparent ${themeClasses.text} placeholder-gray-400 resize-none focus:outline-none text-lg`}
                  rows={3}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleGenerateCreative();
                    }
                  }}
                />
              </div>
              <button
                onClick={handleGenerateCreative}
                disabled={!prompt.trim() || isGenerating}
                className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed ${themeClasses.accent} text-white ${themeClasses.shadow}`}
              >
                {isGenerating ? (
                  <div className="animate-spin">
                    <Sparkles size={24} />
                  </div>
                ) : (
                  <Send size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Generation Status */}
          {isGenerating && (
            <div className={`${themeClasses.gradient} rounded-2xl p-6 text-center mb-6`}>
              <div className="flex items-center justify-center mb-4">
                <Bot className="text-white mr-3 animate-spin" size={32} />
                <span className="text-white font-semibold text-lg">AI is creating your masterpiece...</span>
              </div>
              <div className="flex space-x-2 justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          )}
        </div>

        {/* Generated Creatives */}
        <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-xl font-semibold ${themeClasses.text}`}>Generated Creatives</h3>
            <div className="flex space-x-2">
              <button className={`px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors font-medium`}>
                Regenerate
              </button>
              <button className={`px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors font-medium`}>
                Save All
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {generatedCreatives.map((creative) => (
              <div key={creative.id} className={`group ${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-4 ${themeClasses.hover} transition-all cursor-pointer ${themeClasses.shadow}`}>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                  <img 
                    src={creative.thumbnail} 
                    alt={creative.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                <h4 className={`font-medium ${themeClasses.text} mb-2`}>{creative.name}</h4>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(creative.status)}`}>
                    {creative.status}
                  </span>
                  <span className={`text-xs ${themeClasses.textSecondary}`}>{creative.variations} variations</span>
                </div>
                
                <div className="flex space-x-2">
                  <button className={`flex-1 p-2 ${themeClasses.textSecondary} hover:text-blue-600 transition-colors ${themeClasses.border} border rounded-lg hover:border-blue-300`}>
                    <Eye size={16} className="mx-auto" />
                  </button>
                  <button className={`flex-1 p-2 ${themeClasses.textSecondary} hover:text-green-600 transition-colors ${themeClasses.border} border rounded-lg hover:border-green-300`}>
                    <Download size={16} className="mx-auto" />
                  </button>
                  <button className={`flex-1 p-2 ${themeClasses.textSecondary} hover:text-purple-600 transition-colors ${themeClasses.border} border rounded-lg hover:border-purple-300`}>
                    <Settings size={16} className="mx-auto" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Creative Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Tools Panel */}
          <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-4`}>
            <h4 className={`font-semibold ${themeClasses.text} mb-4`}>Design Tools</h4>
            <div className="space-y-2">
              {designTools.map((tool) => {
                const Icon = tool.icon;
                const isActive = selectedTool === tool.id;
                
                return (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-xl transition-colors ${
                      isActive 
                        ? `bg-purple-100 text-purple-700 ${themeClasses.border} border` 
                        : `${themeClasses.textSecondary} ${themeClasses.hover}`
                    }`}
                  >
                    <Icon size={18} className="mr-3" />
                    <span className="text-sm font-medium">{tool.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Text Formatting Tools */}
            {selectedTool === 'text' && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h5 className={`font-medium ${themeClasses.text} mb-3`}>Text Formatting</h5>
                <div className="grid grid-cols-3 gap-2">
                  <button className={`p-2 ${themeClasses.border} border rounded-lg ${themeClasses.hover}`}>
                    <Bold size={16} className={`mx-auto ${themeClasses.textSecondary}`} />
                  </button>
                  <button className={`p-2 ${themeClasses.border} border rounded-lg ${themeClasses.hover}`}>
                    <Italic size={16} className={`mx-auto ${themeClasses.textSecondary}`} />
                  </button>
                  <button className={`p-2 ${themeClasses.border} border rounded-lg ${themeClasses.hover}`}>
                    <Underline size={16} className={`mx-auto ${themeClasses.textSecondary}`} />
                  </button>
                </div>
                
                <div className="mt-3">
                  <label className={`block text-xs ${themeClasses.textSecondary} mb-1`}>Font Size</label>
                  <input type="range" min="12" max="72" className="w-full" />
                </div>
              </div>
            )}

            {/* Shape Tools */}
            {selectedTool === 'shapes' && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h5 className={`font-medium ${themeClasses.text} mb-3`}>Shapes</h5>
                <div className="grid grid-cols-3 gap-2">
                  <button className={`p-2 ${themeClasses.border} border rounded-lg ${themeClasses.hover}`}>
                    <Square size={16} className={`mx-auto ${themeClasses.textSecondary}`} />
                  </button>
                  <button className={`p-2 ${themeClasses.border} border rounded-lg ${themeClasses.hover}`}>
                    <Circle size={16} className={`mx-auto ${themeClasses.textSecondary}`} />
                  </button>
                  <button className={`p-2 ${themeClasses.border} border rounded-lg ${themeClasses.hover}`}>
                    <Triangle size={16} className={`mx-auto ${themeClasses.textSecondary}`} />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Canvas Area */}
          <div className={`lg:col-span-2 ${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-xl font-semibold ${themeClasses.text}`}>Creative Canvas</h3>
              <div className="flex space-x-2">
                <button className={`p-2 ${themeClasses.textSecondary} hover:text-blue-600 transition-colors`}>
                  <RotateCcw size={18} />
                </button>
                <button className={`p-2 ${themeClasses.textSecondary} hover:text-green-600 transition-colors`}>
                  <Save size={18} />
                </button>
                <button className={`p-2 ${themeClasses.textSecondary} hover:text-purple-600 transition-colors`}>
                  <Share2 size={18} />
                </button>
              </div>
            </div>
            
            <div className={`aspect-video ${themeClasses.gradient} rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden`}>
              <div className="relative text-center z-10">
                <Grid className={`${themeClasses.textSecondary} mb-4 mx-auto`} size={48} />
                <p className={`${themeClasses.textSecondary} mb-2`}>Creative canvas</p>
                <p className={`text-sm ${themeClasses.textSecondary}`}>1920 x 1080 pixels</p>
              </div>
              
              {/* Sample creative elements */}
              <div className={`absolute top-4 left-4 w-16 h-16 ${themeClasses.cardBg} rounded-xl ${themeClasses.shadow} flex items-center justify-center`}>
                <Image size={24} className={`${themeClasses.textSecondary}`} />
              </div>
              <div className="absolute bottom-4 right-4 bg-purple-500 text-white px-4 py-2 rounded-xl font-semibold">
                Sample Text
              </div>
            </div>

            {/* Canvas Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className={`text-sm ${themeClasses.textSecondary}`}>Zoom:</span>
                <div className="flex items-center space-x-2">
                  <button className={`px-3 py-1 ${themeClasses.cardBg} ${themeClasses.text} rounded ${themeClasses.hover} transition-colors`}>
                    50%
                  </button>
                  <button className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
                    100%
                  </button>
                  <button className={`px-3 py-1 ${themeClasses.cardBg} ${themeClasses.text} rounded ${themeClasses.hover} transition-colors`}>
                    200%
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className={`p-2 ${themeClasses.textSecondary} hover:text-blue-600 transition-colors`}>
                  <AlignCenter size={18} />
                </button>
                <button className={`p-2 ${themeClasses.textSecondary} hover:text-blue-600 transition-colors`}>
                  <Layers size={18} />
                </button>
                <button className={`p-2 ${themeClasses.textSecondary} hover:text-blue-600 transition-colors`}>
                  <Move size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Assets & Properties Panel */}
          <div className="space-y-4">
            {/* Brand Kit */}
            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-4`}>
              <div className="flex items-center justify-between mb-4">
                <h4 className={`font-semibold ${themeClasses.text}`}>Brand Kit</h4>
                <button 
                  onClick={() => setShowBrandKit(!showBrandKit)}
                  className={`${themeClasses.textSecondary} hover:text-blue-600 transition-colors`}
                >
                  <Settings size={16} />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {brandAssets.slice(0, 4).map((asset, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className={`aspect-square ${themeClasses.cardBg} rounded-xl overflow-hidden mb-1 ${themeClasses.hover} transition-all ${themeClasses.shadow}`}>
                        <img 
                          src={asset.url} 
                          alt={asset.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <p className={`text-xs ${themeClasses.textSecondary} truncate`}>{asset.name}</p>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full py-2 text-sm text-blue-600 hover:text-blue-700 transition-colors ${themeClasses.border} border rounded-xl hover:bg-blue-50`}>
                  View All Assets
                </button>
              </div>
            </div>

            {/* Brand Colors */}
            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-4`}>
              <h4 className={`font-semibold ${themeClasses.text} mb-3`}>Brand Colors</h4>
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square bg-purple-500 rounded-xl cursor-pointer hover:scale-105 transition-transform"></div>
                <div className="aspect-square bg-blue-500 rounded-xl cursor-pointer hover:scale-105 transition-transform"></div>
                <div className="aspect-square bg-pink-500 rounded-xl cursor-pointer hover:scale-105 transition-transform"></div>
                <div className="aspect-square bg-orange-500 rounded-xl cursor-pointer hover:scale-105 transition-transform"></div>
              </div>
              <div className={`mt-3 text-xs ${themeClasses.textSecondary}`}>
                <p>Primary: #8B5CF6</p>
                <p>Secondary: #3B82F6</p>
              </div>
            </div>

            {/* Layers Panel */}
            <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-4`}>
              <h4 className={`font-semibold ${themeClasses.text} mb-3`}>Layers</h4>
              <div className="space-y-2">
                {['Background', 'Logo', 'Text Layer', 'Button'].map((layer, index) => (
                  <div key={index} className={`flex items-center justify-between p-2 ${themeClasses.cardBg} rounded-xl`}>
                    <div className="flex items-center space-x-2">
                      <Eye size={14} className={`${themeClasses.textSecondary}`} />
                      <span className={`text-sm ${themeClasses.text}`}>{layer}</span>
                    </div>
                    <button className={`${themeClasses.textSecondary} hover:text-red-500 transition-colors`}>
                      <Copy size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Creative Templates */}
        <div className={`${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-6`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-xl font-semibold ${themeClasses.text}`}>Creative Templates</h3>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors font-medium">
              Browse All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
              <div key={template.id} className={`group ${themeClasses.cardBg} ${themeClasses.border} border rounded-2xl p-4 ${themeClasses.hover} transition-all cursor-pointer ${themeClasses.shadow}`}>
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mb-4 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                  <img 
                    src={template.thumbnail} 
                    alt={template.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                <h4 className={`font-medium ${themeClasses.text} mb-2`}>{template.name}</h4>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPerformanceColor(template.performance)}`}>
                    {template.performance}
                  </span>
                  <div className="flex space-x-2">
                    <button className={`p-1 ${themeClasses.textSecondary} hover:text-blue-600 transition-colors`}>
                      <Play size={16} />
                    </button>
                    <button className={`p-1 ${themeClasses.textSecondary} hover:text-green-600 transition-colors`}>
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Performance Analytics */}
        <div className={`${themeClasses.gradient} ${themeClasses.border} border rounded-2xl p-6`}>
          <h3 className={`text-xl font-semibold ${themeClasses.text} mb-4`}>Creative Performance Insights</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`${themeClasses.cardBg}/70 rounded-2xl p-4`}>
              <h4 className={`font-medium ${themeClasses.text} mb-2`}>Top Performing Elements</h4>
              <ul className={`text-sm ${themeClasses.textSecondary} space-y-1`}>
                <li>• Bold headlines (+23% CTR)</li>
                <li>• Product images (+18% engagement)</li>
                <li>• Call-to-action buttons (+15% conversions)</li>
              </ul>
            </div>
            <div className={`${themeClasses.cardBg}/70 rounded-2xl p-4`}>
              <h4 className={`font-medium ${themeClasses.text} mb-2`}>Color Psychology</h4>
              <ul className={`text-sm ${themeClasses.textSecondary} space-y-1`}>
                <li>• Purple: Trust & luxury</li>
                <li>• Orange: Energy & action</li>
                <li>• Blue: Reliability & calm</li>
              </ul>
            </div>
            <div className={`${themeClasses.cardBg}/70 rounded-2xl p-4`}>
              <h4 className={`font-medium ${themeClasses.text} mb-2`}>A/B Test Results</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className={`${themeClasses.textSecondary}`}>Version A:</span>
                  <span className={`font-bold ${themeClasses.text}`}>2.4% CTR</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={`${themeClasses.textSecondary}`}>Version B:</span>
                  <span className={`font-bold ${themeClasses.text}`}>3.1% CTR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};