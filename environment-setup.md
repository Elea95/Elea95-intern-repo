# Setting up a React Native Development Environment (Expo & Metro Server) #26

1️⃣ What is the role of Metro in React Native development?
Metro is the JavaScript bundler used in React Native. It:

Transforms React Native code into JavaScript that runs on mobile devices.

Optimizes performance with incremental builds and caching.

Supports fast refresh, reloading the app instantly when code changes.

2️⃣ How does Expo simplify React Native development?
Expo provides:

Pre-configured development tools (no need to install Xcode or Android Studio).

A single codebase that works across iOS, Android, and web.

Over-the-air updates without needing to re-submit to app stores.

Access to native APIs (camera, push notifications, etc.) without writing native code.

3️⃣ What issues did you encounter, and how did you resolve them?
🛑 Expo command not found:
✅ Run: npm install -g expo-cli or yarn global add expo-cli

🛑 Metro bundler stuck on "Loading"
✅ Restart the server: expo start -c (clears cache)

🛑 Device/emulator not connecting to Metro
✅ Ensure your phone and PC are on the same Wi-Fi
✅ Try running: expo start --tunnel
