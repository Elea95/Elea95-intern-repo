# Handling API Calls in React Native using Axios & Axios-Retry #18

Why is Axios preferred over fetch in some cases?

Axios provides more built-in features such as automatic JSON parsing, request cancellation, better error handling, and support for interceptors. It simplifies making requests and handling various edge cases compared to fetch(), which is more basic and requires manual handling of many features.

How does Axios-Retry improve network reliability?

Axios-Retry automatically retries requests that fail due to transient issues, such as network connectivity problems or server errors (e.g., 5xx errors). This ensures that temporary issues don’t interrupt the user experience, improving reliability.

How would you handle API failures gracefully in a React Native app?

Use error states to display user-friendly error messages (like "Please check your internet connection" or "Unable to fetch data at the moment").

Implement retry logic (as shown above) to automatically retry failed requests.

Consider using caching to reduce the need for repetitive requests and improve the app’s offline functionality.

Provide a retry button or other means for users to attempt fetching data again.
