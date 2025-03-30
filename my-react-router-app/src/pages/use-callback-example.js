import React from "react";
import ParentComponent from "../components/ParentComponent";
import { Link } from "react-router-dom";

const UseCallbackExamplePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ParentComponent />
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default UseCallbackExamplePage;
