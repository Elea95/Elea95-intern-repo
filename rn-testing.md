# Writing Unit and Integration Tests for React Native #19

1️⃣ Why is testing important in React Native development?

Ensures stability and reliability of the app.

Prevents unexpected bugs when making updates.

Helps maintainable code with confidence in refactoring.

2️⃣ How do you mock API calls in tests?

Use jest.mock() to override API methods.

Example:

javascript
Copy
Edit
jest.mock('../src/api', () => ({
get: jest.fn(() => Promise.resolve({ data: { title: 'Mocked Post' } })),
}));
Simulate failures with mockRejectedValueOnce().

3️⃣ What’s the difference between unit and integration tests?

Unit Tests test individual components/functions in isolation.

Integration Tests test how multiple components interact.

Example:

Unit Test: Checking if a button renders.

Integration Test: Clicking the button should update the screen.
