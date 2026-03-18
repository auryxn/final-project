import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Statistics from './components/Statistics';
import { TrafficService } from './services/trafficService';
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
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const App = () => {
  const [metrics, setMetrics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await TrafficService.getLatestMetrics();
      setMetrics(data);
      setLoading(false);
    };
    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: metrics.length > 0 ? metrics.map(m => new Date(m.timestamp).getHours() + ':00') : ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
    datasets: [
      {
        fill: true,
        label: 'Real-time Traffic Volume',
        data: metrics.length > 0 ? metrics.map(m => m.volume) : [3000, 4500, 6000, 5500, 7000, 4000],
        borderColor: '#38bdf8',
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        tension: 0.4,
      }
    ]
  };

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-sky-500/30">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-white text-xl font-bold tracking-tight">System Overview</h2>
          <p className="text-slate-400 text-sm">Real-time telemetry from urban sensor network</p>
        </div>

        <Statistics />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-semibold text-white">Traffic Dynamics</h3>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-sky-500/10 text-sky-400 text-xs font-medium rounded-full border border-sky-500/20">LIVE</span>
              </div>
            </div>
            <div className="h-[350px]">
              <Line data={chartData} options={{ 
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  y: { grid: { color: 'rgba(255,255,255,0.05)' } },
                  x: { grid: { display: false } }
                }
              }} />
            </div>
          </div>

          {/* Side Info */}
          <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-slate-700/50 shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-6">Environment AI</h3>
            <div className="space-y-6">
              <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-700/30">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Pollution Forecast</p>
                <p className="text-2xl font-bold text-emerald-400 italic">Moderate</p>
                <div className="mt-2 h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-1/3 animate-pulse"></div>
                </div>
              </div>
              <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-700/30">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">ML Model Status</p>
                <p className="text-2xl font-bold text-sky-400 italic">Active</p>
                <p className="text-[10px] text-slate-500 mt-1">Version: v2.4.0-eco</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-10 text-center border-t border-slate-800 mt-10">
        <p className="text-slate-500 text-sm">SmartCity Eco-Traffic Monitor • Enterprise Edition 2026</p>
      </footer>
    </div>
  );
};

export default App;
