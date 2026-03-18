import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Activity, Thermometer, Wind, Car } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [data, setData] = useState({
    labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
    datasets: [
      {
        label: 'Traffic Volume',
        data: [4500, 5200, 4800, 5100, 6200, 5800, 4100],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  });

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Activity className="text-green-400" />
          Smart City: Eco-Traffic Dashboard
        </h1>
        <div className="bg-gray-800 px-4 py-2 rounded-lg border border-gray-700">
          Status: <span className="text-green-400 font-mono">Live</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
          <div className="flex items-center gap-4 mb-2">
            <Car className="text-blue-400" />
            <h3 className="text-gray-400 uppercase text-sm font-semibold">Current Traffic</h3>
          </div>
          <p className="text-4xl font-bold">5,240 <span className="text-sm font-normal text-gray-500">v/h</span></p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
          <div className="flex items-center gap-4 mb-2">
            <Wind className="text-teal-400" />
            <h3 className="text-gray-400 uppercase text-sm font-semibold">Air Quality Index</h3>
          </div>
          <p className="text-4xl font-bold">42 <span className="text-sm font-normal text-green-400">Good</span></p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
          <div className="flex items-center gap-4 mb-2">
            <Thermometer className="text-orange-400" />
            <h3 className="text-gray-400 uppercase text-sm font-semibold">Avg. Temp</h3>
          </div>
          <p className="text-4xl font-bold">14°C</p>
        </div>
      </div>

      <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 shadow-2xl">
        <h2 className="text-xl font-bold mb-6">Traffic Intensity Prediction (Next 12h)</h2>
        <div className="h-96">
          <Line data={data} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
      
      <footer className="mt-12 text-center text-gray-500 text-sm italic">
        Architecture: Spring Boot 3 + PostgreSQL + Python ML Engine
      </footer>
    </div>
  );
};

export default Dashboard;
