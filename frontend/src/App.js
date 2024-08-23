import React from 'react';
import Page_Sidebar from './Components/Page_Sidebar/Page_Sidebar';
import Tabs from './Components/Tabs/Tabs';
import Signup from './Components/Login/Signup';

const App = () => {
  return (
    <div className="flex">
      <div className="w-3/10 bg-gray-200"> 
        <Page_Sidebar />
      </div>
      <div className="w-7/10 p-4"> 
        <Tabs />
      </div>
      <Signup/>
    </div>
  );
};

export default App;
