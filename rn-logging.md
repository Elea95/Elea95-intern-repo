### Why is logging important in a production React Native app?

Logging helps identify bugs before users report them. It allows developers to trace issues quickly, especially in complex apps like Focus Bear. Without logging, errors might silently crash the app without context.

### How does Sentry improve debugging and issue tracking?

Sentry tracks crashes, JS errors, and native crashes in real time. It captures breadcrumbs (user interactions), device info, app state, and version, helping developers debug efficiently. It also notifies teams instantly when issues arise.

### What are best practices for handling and logging errors?

- Capture handled and unhandled exceptions.
- Use breadcrumbs to track user flow before errors.
- Avoid sending sensitive data.
- Separate environments for staging and production.
- Use tags and context (`Sentry.setUser`, `Sentry.setTag`) to categorize errors.
