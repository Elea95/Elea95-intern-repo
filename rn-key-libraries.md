# Understanding Key Libraries Used in Focus Bear #13

Picked Libraries and Their Purpose

1. redux-persist
   🔧 Category: State Management

Purpose:
Redux Persist saves the Redux store in persistent storage (like AsyncStorage) so that data is retained between app restarts.

Example:
If a user logs in and the app is closed, redux-persist ensures their login state is retained when they reopen Focus Bear.

```js
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
```

2. react-native-reanimated
   🔧 Category: Performance

Purpose:
Enables smooth, native-like animations by running animations on the native thread (not JS thread), avoiding frame drops.

Why It’s Important:
Focus Bear includes gesture-based interactions, timers, transitions. Reanimated makes these fluid and responsive.

Example:

```js
const offset = useSharedValue(0);
const animatedStyles = useAnimatedStyle(() => ({
  transform: [{ translateX: offset.value }],
}));
```

3. react-native-auth0
   🔐 Category: Authentication

Purpose:
Handles secure user authentication using OAuth2 and OpenID Connect via Auth0, supporting Google, Apple, passwordless login, etc.

Why It’s Used:
Instead of storing passwords or building login flows from scratch, Focus Bear leverages Auth0’s battle-tested system.

Example:

```js
const auth0 = new Auth0({ domain: "focusbear.auth0.com", clientId: "YOUR_ID" });
auth0.webAuth.authorize({ scope: "openid profile email" });
```

✅ One Unfamiliar Library: posthog-react-native
Purpose:
PostHog captures product analytics events like screen views, button clicks, feature usage.

How It Works:

Tracks user behavior across sessions

Sends data to PostHog’s servers

Supports A/B testing, funnels, retention

Example:

```js
import PostHog from "posthog-react-native";

PostHog.init("YOUR_POSTHOG_KEY", { host: "https://app.posthog.com" });
PostHog.capture("task_completed", { category: "Pomodoro" });
```

## Reflection

### What is the purpose of Redux-Persist, and why is it useful?

Redux Persist allows the Redux store to survive app restarts by saving it to local storage (e.g., AsyncStorage). It's useful because it preserves user sessions, app state, and preferences without forcing them to log in or reconfigure settings each time they open Focus Bear.

---

### How does react-native-background-fetch differ from a normal timer?

Normal JS timers (`setInterval`, etc.) **don’t run reliably in the background** on mobile OSes due to power management. `react-native-background-fetch` schedules OS-level background jobs, even when the app is closed, making it ideal for features like **habit reminders or background sync** in Focus Bear.

---

### Why does Focus Bear use Auth0 instead of handling authentication manually?

Auth0 abstracts the complexity of authentication, including token management, secure storage, social login integration, and compliance (e.g., GDPR, HIPAA). It improves security and saves development time, avoiding pitfalls of handling passwords and tokens directly.

---

### How does PostHog help improve the user experience in Focus Bear?

PostHog tracks user behavior (e.g., which features are used most, drop-off points) to drive product decisions. This feedback loop helps improve UX by focusing on what real users are doing, not assumptions.

---

### What’s the difference between Sentry and PostHog, and when would you use each?

- **Sentry** = crash/error monitoring (what went wrong technically)
- **PostHog** = product analytics (what the user did)

Use **Sentry** to debug and fix bugs. Use **PostHog** to improve engagement, onboarding, and feature discoverability.

---

### How does react-native-localize work, and how does it interact with i18next?

`react-native-localize` detects the device’s language and timezone settings. Combined with `i18next`, it auto-selects the correct language file (e.g., en.json, fr.json). It’s crucial for **showing localized content** right from the first app launch.

---

### If you had to remove one library and replace it with an alternative, which one would you choose and why?

If needed, I’d replace **`redux`** (and related middlewares) with **`zustand`** or **`Recoil`**. These are simpler, modern state libraries that reduce boilerplate and offer a more flexible API for component-based state.
