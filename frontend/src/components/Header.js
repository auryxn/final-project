import React from 'react';
import { Activity, Bell, Settings, User } from 'lucide-react';

const Header = () => (
  <header className="flex justify-between items-center bg-gray-800 p-6 border-b border-gray-700">
    <div className="flex items-center gap-3">
      <div className="bg-green-500 p-2 rounded-lg">
        <Activity className="text-white" size={24} />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white">SmartCity Eco-OS</h1>
        <p className="text-xs text-gray-400">Integrated Infrastructure Monitor</p>
      </div>
    </div>
    <div className="flex items-center gap-6">
      <div className="flex gap-4 text-gray-400">
        <Bell size={20} className="hover:text-white cursor-pointer" />
        <Settings size={20} className="hover:text-white cursor-pointer" />
      </div>
      <div className="flex items-center gap-3 pl-6 border-l border-gray-700">
        <div className="text-right text-xs">
          <p className="text-white font-semibold">Sir Admin</p>
          <p className="text-green-400">Verified System Access</p>
        </div>
        <div className="bg-gray-700 p-2 rounded-full text-blue-400">
          <User size={20} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
