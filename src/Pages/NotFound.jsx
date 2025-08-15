import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col text-center bg-slate-900 text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! Page not found.</p>
      <Link to="/" className="text-blue-400 hover:underline">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
