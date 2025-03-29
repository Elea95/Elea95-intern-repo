import React, { useState, useEffect } from "react";

const EffectExample = () => {
  const [data, setData] = useState(null);
  const [fetching, setFetching] = useState(false);

  // Logs a message when the component mounts and unmounts
  useEffect(() => {
    console.log("Component Mounted!");

    return () => {
      console.log("Component Unmounted!");
    };
  }, []); // Empty dependency array = runs only on mount/unmount

  // Function to fetch data
  const fetchData = async () => {
    setFetching(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setFetching(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-lg font-bold">Understanding `useEffect`</h2>
      <button onClick={fetchData} className="px-4 py-2 bg-blue-500 text-white rounded">
        Fetch Data
      </button>
      {fetching && <p>Loading...</p>}
      {data && <pre className="bg-gray-100 p-4">{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default EffectExample;
