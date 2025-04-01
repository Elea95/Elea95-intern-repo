# Performance Optimization in React Native #20

## Understanding Common Performance Bottlenecks

React Native apps may suffer from various performance issues, such as:

1️⃣ Unnecessary Re-renders
When components re-render unnecessarily, it slows down the app.

Solution: Use React.memo, useMemo, and useCallback to optimize rendering.

2️⃣ Large Component Trees
Too many deeply nested components cause slow rendering.

Solution: Break large components into smaller, independent components.

3️⃣ Inefficient State Management
Using too many useState and useEffect hooks can cause unnecessary renders.

Solution: Use useReducer or context-based state management (like Redux/Zustand).

4️⃣ Blocking the JavaScript Thread
Heavy operations in JavaScript (e.g., loops, animations) can block the UI.

Solution: Offload work to background threads (use react-native-reanimated, react-native-worker, etc.).

5️⃣ Unoptimized Images & Assets
Large images slow down performance.

Solution: Use optimized images with react-native-fast-image and cache assets.

## Optimize Rendering with useMemo, useCallback, and React.memo

These hooks prevent unnecessary renders, improving performance.

🔹 React.memo() – Prevents Unnecessary Re-renders
Use it for functional components that don’t need to update frequently.

```tsx
import React from "react";

const Button = React.memo(({ title, onPress }) => {
  console.log("Button rendered");
  return <button onClick={onPress}>{title}</button>;
});

export default Button;
```

✅ Now, Button will only re-render if title or onPress changes.

🔹 useMemo() – Optimizing Expensive Calculations

Use it to memoize values and avoid expensive re-computations.

```tsx
import React, { useMemo } from "react";

const ExpensiveComponent = ({ numbers }) => {
  const sum = useMemo(
    () => numbers.reduce((acc, num) => acc + num, 0),
    [numbers]
  );

  return <p>Sum: {sum}</p>;
};
```

✅ sum will only be recalculated when numbers changes.

🔹 useCallback() – Memoizing Functions

Use it to prevent function re-creations on every render.

```tsx
import React, { useCallback } from "react";

const Parent = () => {
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return <Button onPress={handleClick} />;
};
```

✅ The function handleClick is only recreated if dependencies change, reducing unnecessary re-renders.

## Reflection

### 1. What are the most common performance issues in React Native?

- Unnecessary re-renders
- Large component trees
- Inefficient state management
- Blocking the JavaScript thread
- Large images/assets

### 2. How do useMemo and useCallback improve performance?

- `useMemo`: Avoids expensive recalculations by caching values.
- `useCallback`: Prevents function re-creation, reducing unnecessary renders.

### 3. What tools can you use to measure and monitor app performance?

- React Native Performance Profiler
- `@shopify/react-native-performance`
- `expo-perf` for Expo projects
