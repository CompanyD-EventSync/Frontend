import React from "react";

export default function RegisterOrganizerPage() {
  return (
    <div className="flex h-screen">
      {/* Left branding */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-purple-700 tracking-widest">EVENTSYNC</h1>
        <p className="mt-4 text-sm text-gray-700 uppercase tracking-widest">
          For Organizers — Make Every Event Matter
        </p>
        <p className="absolute bottom-4 text-xs text-gray-400">
          © EventSync 2025 | Privacy | Terms
        </p>
      </div>

      {/* Right form */}
      <div className="w-1/2 bg-purple-100 flex items-center justify-center">
        <div className="w-3/4 max-w-md bg-white bg-opacity-50 rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4 text-center">Event Organizer Registration</h2>

          <form className="space-y-4">
            <input className="w-full border rounded p-2" placeholder="Name" />
            <input className="w-full border rounded p-2" placeholder="Email" type="email" />
            <input className="w-full border rounded p-2" placeholder="Password" type="password" />
            <input className="w-full border rounded p-2" placeholder="Organization Name" />
            <button type="submit" className="w-full bg-black text-white py-2 rounded">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
