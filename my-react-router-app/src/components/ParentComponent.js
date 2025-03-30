import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // Without useCallback, this function would be recreated on every render
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array means this function is only created once

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-lg font-bold">Optimizing with `useCallback`</h2>

      <ChildComponent increment={increment} />

      <p>Parent Count: {count}</p>
      <button
        onClick={() => setToggle(!toggle)}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Toggle Re-Render
      </button>
    </div>
  );
};

export default ParentComponent;
