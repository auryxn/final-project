import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';

export const TrafficService = {
  getLatestMetrics: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/traffic/metrics`);
      return response.data;
    } catch (error) {
      console.error('Error fetching traffic data:', error);
      return [];
    }
  },

  logRawData: async (data) => {
    try {
      await axios.post(`${API_BASE_URL}/traffic/log`, data);
    } catch (error) {
      console.error('Error logging raw data:', error);
    }
  }
};
