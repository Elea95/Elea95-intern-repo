import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <Link to="/profile" className="text-blue-500 hover:underline">
        Go to Profile
      </Link>
    </div>
  );
};

export default Home;
