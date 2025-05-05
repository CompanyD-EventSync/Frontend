import React from "react";
import { FiMenu, FiLogOut, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="h-screen flex font-sans bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-purple-200 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold text-purple-800 mb-8">☰ Menu</h2>
          <nav className="space-y-4 text-purple-900 font-semibold">
            <a href="#">📊 Dashboard</a>
            <a href="#">📅 Bookings</a>
            <a href="#">🎵 Events</a>
            <a href="#">📄 Invoices</a>
            <a href="#">📝 Reviews</a>
          </nav>
        </div>
        <button className="flex items-center text-purple-800 gap-2 hover:text-purple-900">
          <FiLogOut />
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Header */}
        <header className="flex items-center justify-between bg-white px-8 py-4 shadow">
          <h1 className="text-3xl font-bold text-purple-700">EVENTSYNC</h1>
          <div className="w-10 h-10 bg-purple-300 rounded-full flex items-center justify-center text-white text-lg">👤</div>
        </header>

        {/* Body */}
        <main className="flex-1 p-6 overflow-y-auto space-y-6">

          {/* Top panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Calendar */}
            <div className="bg-white rounded-lg p-4 shadow">
              <h2 className="text-lg font-semibold mb-2">Select Date</h2>
              <div className="text-sm text-gray-600">Mon, Jul 17</div>
              <div className="mt-2 text-gray-400 text-xs">📅 (Static calendar placeholder)</div>
            </div>

            {/* Booked Events */}
            <div className="bg-purple-100 rounded-lg p-4 shadow">
              <h2 className="text-lg font-semibold text-purple-800 mb-4">Booked Events</h2>
              <ul className="text-sm space-y-2">
                <li className="bg-white p-2 rounded">🎨 Art Fair – 21 July</li>
                <li className="bg-white p-2 rounded">🌱 Tree Planting – 22 July</li>
              </ul>
            </div>

            {/* Spacer or More content in future */}
            <div></div>
          </div>

          {/* Gallery */}
          <section className="bg-purple-100 p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Gallery</h2>
              <div className="flex items-center bg-white rounded px-2 py-1">
                <input type="text" placeholder="Search Event…" className="outline-none text-sm px-2" />
                <FiSearch className="text-gray-500" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Echo Beats Festival", date: "24 July", tag: "Music" },
                { title: "Tech Future Expo", date: "28 July", tag: "Tech" },
                { title: "AI Competition", date: "1 August", tag: "Competition" },
                { title: "Carnival", date: "3 August", tag: "Fun" },
                { title: "Health Summit", date: "3 August", tag: "Health" },
                { title: "Spring Fashion", date: "5 August", tag: "Fashion" },
              ].map((event, index) => (
                <div key={index} className="bg-white p-3 rounded shadow hover:shadow-md transition">
                  <div className="h-24 bg-purple-300 rounded mb-2"></div>
                  <h3 className="font-semibold">{event.title}</h3>
                  <p className="text-xs text-gray-600">{event.date}</p>
                  <p className="text-xs text-purple-700">{event.tag}</p>
                </div>
              ))}
            </div>

            <div className="text-right mt-4">
              <Link to="/events" className="inline-flex items-center text-sm text-purple-800 font-medium hover:underline">
                More events <span className="ml-1">↗</span>
              </Link>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
