import axios from 'axios';
import axiosRetry from 'axios-retry';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API URL
  timeout: 5000, // Set request timeout (5 seconds)
  headers: {
    'Content-Type': 'application/json',
  },
});

// Enable automatic retries on failures
axiosRetry(axiosInstance, {
  retries: 3, // Number of retry attempts
  retryDelay: (retryCount) => retryCount * 1000, // Delay between retries (1s, 2s, 3s)
  retryCondition: (error) => error.response?.status >= 500, // Retry only on server errors (500+)
});

export default axiosInstance;
