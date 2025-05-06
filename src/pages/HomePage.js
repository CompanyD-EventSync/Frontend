/*function HomePage() {
    return <h2>Welcome to EventSync 🎉</h2>;
  }
  export default HomePage;
 */

// 📁 src/pages/HomePage.js
// 📁 src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";

const upcomingEvents = [
  { title: "Echo Beats Festival", date: "24 July", category: "Music", img: "concert" },
  { title: "Tech Future Expo", date: "28 July", category: "Tech", img: "technology" },
  { title: "AI Competition", date: "1 August", category: "Competition", img: "ai" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-200 to-purple-500 text-white flex flex-col items-center justify-center p-8">
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

      {/* Main welcome text */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Welcome to EventSync</h1>
        <p className="text-xl">From Planning to Applause — All in One Place</p>
      </div>

      {/* Upcoming Events */}
      <div className="w-full max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white text-purple-800 rounded shadow p-4">
              <img
                src={`https://source.unsplash.com/300x150/?${event.img}`}
                alt={event.title}
                className="w-full h-28 object-cover rounded mb-2"
              />
              <h3 className="font-bold text-lg">{event.title}</h3>
              <p className="text-sm">{event.date}</p>
              <p className="text-xs text-purple-600">{event.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
