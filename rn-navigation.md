# Navigation in React Native using React Navigation #23

Explanations:
In this issue, the goal is to learn and implement navigation in React Native using React Navigation. React Navigation is a powerful and easy-to-use library that helps you manage screen transitions, navigation, and routing in a React Native app. It allows you to use different navigation paradigms like stack navigation, tab navigation, and drawer navigation.

Reflection:

1. What are the key differences between stack, tab, and drawer navigation?

Stack Navigation:
Stack navigation is a type of navigation where screens are stacked on top of one another. Each time a user navigates to a new screen, the new screen is pushed onto the stack. The user can navigate back to previous screens by popping them off the stack. This is ideal for apps where users go through a sequence of screens (e.g., form steps, login flows).

Commonly used in apps with linear workflows.

Users can move forward or backward through the screen stack.

Tab Navigation:
Tab navigation is a navigation style where screens are organized into tabs that the user can switch between. Each tab represents a different screen or section of the app. Tabs are typically shown at the top or bottom of the screen and allow users to quickly switch between key sections of the app.

Ideal for apps with distinct sections that need quick access (e.g., social media apps with "Home", "Search", "Profile" tabs).

No "back" functionality, as each tab is independent.

Drawer Navigation:
Drawer navigation is a side navigation menu that slides in from the edge of the screen. The drawer typically contains links to different sections or features in the app. Drawer navigation is ideal when you have a lot of sections and want to save screen space.

Common in apps with many features or sections that aren’t easily represented in tabs.

Can be used in combination with stack and tab navigation to provide a hierarchical menu structure.

2. How does React Navigation handle screen transitions?

React Navigation handles screen transitions using a combination of animation and gesture-based interactions. The library makes it easy to customize screen transition animations, such as sliding, fading, or rotating between screens. Each screen has a navigation prop that allows you to define how screens should transition between one another.

Stack Navigation: By default, screens slide in and out from the right (for iOS) or from the bottom (for Android).

Tab Navigation: When switching tabs, screens fade in and out or swipe to reveal the new screen.

Drawer Navigation: The drawer opens and closes with a sliding animation when the user interacts with the drawer menu.

React Navigation uses React Native's animation libraries to manage transitions, such as the react-navigation-stack and react-navigation-tabs packages, and enables developers to customize animations based on the navigation type.

3. How would you implement deep linking in a React Native app?

Deep linking allows you to link directly to specific content or screens within your app, even if the app isn’t already open. It can be implemented using React Navigation with the help of the Linking API.

Here’s an overview of how to implement deep linking:

Step 1: Set up a deep linking configuration in your navigation.

For example, configure your app’s navigation to handle URLs:

```js
const linking = {
  prefixes: ["myapp://"],
  config: {
    screens: {
      Home: "",
      Profile: "profile/:id",
    },
  },
};
```

Step 2: Configure your navigator to use the deep linking setup.

```js
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      {/* Your navigation setup */}
    </NavigationContainer>
  );
}
```

Step 3: Handle the deep link. When a deep link is triggered (e.g., myapp://profile/123), React Navigation will match the link to the corresponding screen (Profile in this case) and pass any parameters (id = 123).

Deep linking is especially useful when you want to allow users to share specific pages of your app or handle links from external sources like emails or websites.
