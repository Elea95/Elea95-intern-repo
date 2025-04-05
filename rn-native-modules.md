### Why would you need to use native modules in a React Native app?

Native modules allow you to access platform-specific APIs that React Native does not support out-of-the-box, like system-level battery info, background services, or custom native SDKs. They are useful for performance-sensitive or hardware-integrated features.

### How does React Native communicate with native code?

React Native uses a bridge to allow asynchronous communication between JavaScript and native code (Java/Kotlin on Android, Objective-C/Swift on iOS). With the newer Fabric architecture and TurboModules, the bridge becomes more efficient and type-safe.

### What are some challenges of maintaining native bridges?

- Keeping native code in sync with JS APIs across platforms
- Updating native dependencies when React Native versions change
- Platform-specific bugs and build issues (especially on iOS)
- Debugging requires native toolchains (Xcode, Android Studio)
