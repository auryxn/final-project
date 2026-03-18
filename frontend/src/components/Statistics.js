import React from 'react';
import { Car, Wind, AlertTriangle, CheckCircle } from 'lucide-react';

const Statistics = () => {
  const stats = [
    { label: 'Total Car Flow', value: '1.2M', sub: '+12% from yesterday', icon: <Car className="text-blue-500" />, color: 'blue' },
    { label: 'Avg. Air Quality', value: '48 AQI', sub: 'Status: Healthy', icon: <Wind className="text-green-500" />, color: 'green' },
    { label: 'System Alerts', value: '2 Active', sub: '1 Minor, 1 Major', icon: <AlertTriangle className="text-yellow-500" />, color: 'yellow' },
    { label: 'API Uptime', value: '99.98%', sub: 'Last 30 days', icon: <CheckCircle className="text-teal-500" />, color: 'teal' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {stats.map((item, idx) => (
        <div key={idx} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-gray-500 transition-all cursor-default">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-gray-900 rounded-xl">{item.icon}</div>
            <span className={`text-${item.color}-400 text-xs font-bold uppercase tracking-widest`}>Live</span>
          </div>
          <h3 className="text-gray-400 text-sm mb-1">{item.label}</h3>
          <p className="text-3xl font-bold text-white mb-2">{item.value}</p>
          <p className="text-xs text-gray-500 font-medium">{item.sub}</p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
