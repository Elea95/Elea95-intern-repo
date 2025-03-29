import React, { useState, useMemo } from "react";

const ExpensiveList = () => {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");

  // Generate a large list of numbers
  const numbers = useMemo(() => {
    console.log("Generating numbers...");
    return Array.from({ length: 5000 }, (_, i) => i + 1);
  }, []); // Runs once when component mounts

  // Expensive calculation: filtering large numbers list
  const filteredNumbers = useMemo(() => {
    console.log("Filtering numbers...");
    return numbers.filter((num) => num.toString().includes(filter));
  }, [filter, numbers]); // Recomputes only when `filter` changes

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-lg font-bold">Optimizing with `useMemo`</h2>

      <input
        type="text"
        placeholder="Filter numbers..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border px-2 py-1 my-2"
      />

      <p>Showing {filteredNumbers.length} results</p>
      <ul className="h-40 overflow-y-auto border p-2">
        {filteredNumbers.slice(0, 50).map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>

      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment Count ({count})
      </button>
    </div>
  );
};

export default ExpensiveList;
