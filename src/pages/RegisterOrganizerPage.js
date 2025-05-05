import React from "react";
import { Link } from "react-router-dom";

export default function RegisterOrganizerPage() {
  return (
    <div className="flex h-screen">
      {/* Left branding */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-purple-700 tracking-widest">EVENTSYNC</h1>
        <p className="mt-4 text-sm text-gray-700 uppercase tracking-widest">For Organizers — Make Every Event Matter</p>
        <p className="absolute bottom-4 text-xs text-gray-400">© EventSync 2025 | Privacy | Terms</p>
      </div>

      {/* Right form */}
      <div className="w-1/2 bg-purple-100 flex items-center justify-center">
        <div className="w-3/4 max-w-md bg-white bg-opacity-50 rounded-xl p-6">
          <div className="flex mb-4">
            <button className="flex-1 bg-purple-700 text-white py-2 rounded-l-xl">Event Organizer</button>
            <Link to="/register-purchaser" className="flex-1 bg-purple-300 text-center py-2 rounded-r-xl">Purchaser</Link>
          </div>
          <form className="space-y-4">
            <input className="w-full border rounded p-2" placeholder="Name" />
            <input className="w-full border rounded p-2" placeholder="Email" />
            <input className="w-full border rounded p-2" placeholder="Password" type="password" />
            <input className="w-full border rounded p-2" placeholder="Organization Name" />
            <button className="w-full bg-black text-white py-2 rounded">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
