import React, { useState } from 'react';
import Resume from '../Resume/Resume';


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <div className="flex border-b border-gray-300">
        <button
          className={`flex-1 py-2 px-4 text-center border-b-2 font-medium ${
            activeTab === 'tab1'
              ? 'border-blue-500 text-blue-500'
              : 'border-transparent text-gray-500'
          }`}
          onClick={() => handleTabChange('tab1')}
        >
          Work
        </button>
        <button
          className={`flex-1 py-2 px-4 text-center border-b-2 font-medium ${
            activeTab === 'tab2'
              ? 'border-blue-500 text-blue-500'
              : 'border-transparent text-gray-500'
          }`}
          onClick={() => handleTabChange('tab2')}
        >
          Resume
        </button>
      </div>
      <div className="p-4 border border-gray-300">
        {activeTab === 'tab1' && <div className="text-gray-700"></div>}
        {activeTab === 'tab2' && <div className="text-gray-700"><Resume/></div>}
      </div>
    </div>
  );
};

export default Tabs;
