import axios from 'axios';

const API_BASE_URL = 'http://localhost:3030/api';

const ApiService = {
  loginUser: async (credentials) => {
    const res = await axios.post(`${API_BASE_URL}/auth/login`, credentials);
    return res.data;
  },

  registerUser: async (data) => {
    const res = await axios.post(`${API_BASE_URL}/auth/register`, data);
    return res.data;
  },

  fetchUpcomingEvents: async () => {
    const res = await axios.get(`${API_BASE_URL}/events/upcoming`);
    return res.data;
  },
};

export default ApiService;
