import axios from "axios";

// Generate a random request ID (example)
const generateRequestId = () => Math.random().toString(36).substring(2, 15);

// Create an axios instance
const api = axios.create({
  baseURL: "https://api.example.com", // Replace with your API URL
  timeout: 5000, // 5 seconds timeout for requests
  headers: {
    Accept: "*/*",  // Default Accept header
    "X-Request-ID": generateRequestId(), // Random request ID for tracking
  },
});

// Request Interceptor: Attach auth token if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // Get the token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to Authorization header
    }
    return config;
  },
  (error) => {
    // Handle error if there is an issue with the request
    return Promise.reject(error);
  }
);

// Response Interceptor: Handle errors globally
api.interceptors.response.use(
  (response) => {
    // Return the response if everything is fine
    return response;
  },
  (error) => {
    // Handle error globally (you can add custom error handling here)
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else {
      console.error("Network Error or Timeout:", error.message);
    }
    return Promise.reject(error);
  }
);

// Function to handle API calls with request cancellation support
export const fetchWithAbort = async (endpoint, options = {}) => {
  const controller = new AbortController(); // Create a new AbortController instance
  options.signal = controller.signal; // Add the signal to the options

  try {
    // Make the API request
    const response = await api(endpoint, options);
    return response.data; // Return the response data if the request is successful
  } catch (error) {
    // Handle canceled requests or other errors
    if (axios.isCancel(error)) {
      console.warn("Request canceled:", error.message);
    } else {
      console.error("API Error:", error);
    }
    throw error; // Re-throw the error for handling elsewhere
  }
};

// Export the axios instance for regular API calls
export default api;
