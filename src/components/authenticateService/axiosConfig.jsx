import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://smartinventory-backend.azurewebsites.net/sims', // Replace with your backend URL
  timeout: 10000,
  withCredentials: true, // Enable sending cookies with requests
});

export default instance;
