import React from "react";
import EffectExample from "../components/EffectExample";
import { Link } from "react-router-dom";

const UseEffectExamplePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <EffectExample />
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default UseEffectExamplePage;
