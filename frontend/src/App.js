import React from 'react';
import Header from './components/Header';
import Statistics from './components/Statistics';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const lineData = {
    labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'],
    datasets: [
      {
        label: 'Eco Impact Score',
        data: [85, 82, 65, 60, 55, 70, 88],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const barData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Peak Congestion Index',
        data: [12, 19, 15, 8, 2, 3, 7],
        backgroundColor: '#3b82f6',
      }
    ]
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 font-sans">
      <Header />
      <main className="max-w-[1600px] mx-auto">
        <Statistics />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Charts Section */}
          <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Environmental Trend Analysis
            </h2>
            <div className="h-[400px]">
              <Line data={lineData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>

          <div className="bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Weekly Traffic Congestion
            </h2>
            <div className="h-[400px]">
              <Bar data={barData} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="p-6">
          <div className="bg-gray-800 h-96 rounded-3xl border border-gray-700 flex flex-col items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('https://www.mapcustomizer.com/img/map-placeholder.png')] opacity-20 group-hover:scale-105 transition-transform duration-1000"></div>
             <p className="text-gray-400 font-mono text-lg z-10">GIS ENGINE INITIALIZING...</p>
             <div className="w-64 h-1 bg-gray-700 mt-4 rounded-full overflow-hidden z-10">
               <div className="bg-blue-500 h-full w-1/2 animate-shimmer"></div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
