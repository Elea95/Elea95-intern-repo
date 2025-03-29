"use client"; // Required for using useState in Next.js

import { useState } from "react";

export default function Counter() {
  // ✅ Using useState to manage the count state
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-semibold">Count: {count}</h2>

      {/* ✅ Button to increment the counter */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}
/*Explanation:
We import useState from React to manage the state.

- useState(0) initializes count to 0.

- The button updates the count when clicked using setCount(count + 1). */