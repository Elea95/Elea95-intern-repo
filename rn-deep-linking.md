### What are the benefits of deep linking in mobile apps?

Deep linking allows mobile apps to open specific screens via URLs. This enhances user experience, supports marketing campaigns, and enables integration with external platforms (e.g., open Focus Bear from a browser or calendar event).

### How does React Navigation handle deep linking?

React Navigation uses a `linking` configuration to map URLs to screens. It listens to app launch events (cold, background, or foreground) via the Linking API and automatically routes users based on the deep link.

### What challenges might arise when implementing deep linking?

- Platform differences (iOS vs Android intent filters and URL schemes)
- Handling parameters and validation
- Conflicts with universal links or other deep link providers
- Navigating while app is launching vs already in memory
- Testing across real devices and simulators
