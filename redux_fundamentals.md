# When should you use Redux instead of useState?

Use useState for local component state (e.g., form inputs).

Use Redux when:

State needs to be shared across multiple components.

The app has complex state logic (e.g., authentication, global settings).

You need debugging tools to track state changes.

# What are the benefits of using selectors instead of directly accessing state?

Selectors improve code readability and maintainability.

They allow reusability across multiple components.

Selectors optimize performance by preventing unnecessary re-renders when using memoization techniques like createSelector.