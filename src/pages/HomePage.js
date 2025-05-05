/*function HomePage() {
    return <h2>Welcome to EventSync 🎉</h2>;
  }
  export default HomePage;
 */

// 📁 src/pages/HomePage.js

import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="relative h-screen bg-gradient-to-r from-purple-200 to-purple-500 flex items-center justify-center">
      
      {/* Top-right corner buttons */}
      <div className="absolute top-4 right-6 space-x-4">
        <Link to="/login">
          <button className="bg-white text-purple-700 font-semibold px-4 py-2 rounded shadow hover:bg-purple-100 transition">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-purple-700 text-white font-semibold px-4 py-2 rounded shadow hover:bg-purple-800 transition">
            Sign Up
          </button>
        </Link>
      </div>

      {/* Main content */}
      <div className="text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to EventSync</h1>
        <p className="text-lg md:text-xl mb-8">From Planning to Applause — All in One Place</p>
        <Link to="/register">
          <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded shadow hover:bg-purple-100 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

  
  