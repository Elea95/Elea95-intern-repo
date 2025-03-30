import React from "react";

const ChildComponent = React.memo(({ increment }) => {
  console.log("ChildComponent re-rendered");

  return (
    <div>
      <button
        onClick={increment}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
});

export default ChildComponent;
