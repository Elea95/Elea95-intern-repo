"use client"; // Required for using useState in Next.js

import { useState } from "react";

export default function Form() {
  const [inputText, setInputText] = useState(""); // State to hold the input value
  const [list, setList] = useState([]); // State to hold the list of items

  // Handle form submission and adding text to the list
  const handleAddItem = () => {
    if (inputText.trim() !== "") {
      setList((prevList) => [...prevList, inputText]);
      setInputText(""); // Clear input field after adding
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} // Update input state
        className="px-4 py-2 border rounded-md"
        placeholder="Enter text"
      />
      <button
        onClick={handleAddItem}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
      >
        Add to List
      </button>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Your List</h2>
        <ul className="list-disc pl-5">
          {/* Display the list using .map() */}
          {list.map((item, index) => (
            <li key={index} className="py-1">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}