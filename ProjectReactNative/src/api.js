// src/api.js
import axios from 'axios';
import axiosRetry from 'axios-retry';

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: 'https://your-api-endpoint.com/', // Replace with your API base URL
  timeout: 10000, // Request timeout in milliseconds
});

// Apply retry logic
axiosRetry(axiosInstance, {
  retries: 3, // Number of retries
  retryDelay: axiosRetry.exponentialDelay, // Exponential delay between retries
  retryCondition: (error) => {
    // Retry if the error is network-related or a 5xx server error
    return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.response?.status >= 500;
  },
});

export default axiosInstance;
