import React from "react";
import ExpensiveList from "../components/ExpensiveList";
import { Link } from "react-router-dom";

const UseMemoExamplePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ExpensiveList />
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
};

export default UseMemoExamplePage;
