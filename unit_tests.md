# Introduction to Unit Testing with Jest #66

### Why is automated testing important?

Automated testing helps prevent bugs, ensures code stability, and allows developers to refactor code confidently.

### What was challenging?

Setting up Jest in React Native required configuring `package.json` correctly and dealing with dependencies like `@testing-library/react-native`.

### What did I learn?

- How to set up Jest in React Native
- How to write and run a unit test
- The importance of testing for long-term project stability

### What are the benefits of using React Testing Library instead of testing implementation details?

React Testing Library focuses on testing how users interact with the app rather than testing internal component logic. This leads to:

- More **reliable tests** (fewer false positives)
- **Less refactoring required** when UI changes
- **Better alignment with real user behavior**

### What challenges did you encounter when simulating user interaction?

- **Finding the right query** (e.g., `getByText`, `getByRole`)
- **Understanding fireEvent vs. userEvent** (userEvent is more realistic)
- **Ensuring the DOM updates properly after state changes**

### Why is it important to mock API calls in tests?

- Avoids real network requests → Faster tests.

- Ensures predictable responses → No dependency on external API changes.

- Prevents rate limits or API downtime issues.

- Focuses tests on component behavior, not API reliability.

### Common Pitfalls When Testing Async Code

- Not using await waitFor() → Causes flaky tests.

- Forgetting to reset mocks (jest.clearAllMocks()) → Data leaks across tests.

- Mocking incorrect API structure → Breaks integration with real API.

### What was the most challenging part of testing Redux?

- Handling async actions correctly (e.g., mocking API calls).

- Ensuring Redux state updates correctly in tests.

### How do Redux tests differ from React component tests?

- Component tests check how the UI renders and behaves.

- Redux tests check state logic and reducers without rendering the UI.
