import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { StrategyStudio } from './components/StrategyStudio';
import { CreatorStudio } from './components/CreatorStudio';
import { Simulations } from './components/Simulations';
import { AgentManagement } from './components/AgentManagement';
import { PerformanceCockpit } from './components/PerformanceCockpit';
import { AdminControls } from './components/AdminControls';
import { BrandKit } from './components/BrandKit';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'strategy':
        return <StrategyStudio />;
      case 'dashboard':
        return <Dashboard />;
      case 'creator':
        return <CreatorStudio />;
      case 'brandkit':
        return <BrandKit />;
      case 'simulations':
        return <Simulations />;
      case 'agents':
        return <AgentManagement />;
      case 'performance':
        return <PerformanceCockpit />;
      case 'admin':
        return <AdminControls />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 overflow-auto">
          <div className="mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;