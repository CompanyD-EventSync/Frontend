import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Left side branding */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-purple-700 tracking-widest">EVENTSYNC</h1>
        <p className="mt-4 text-sm text-gray-700 uppercase tracking-widest">From Planning to Applause – All in One Place</p>
        <p className="absolute bottom-4 text-xs text-gray-400">© EventSync 2025 | Privacy | Terms</p>
      </div>

      {/* Right side login form */}
      <div className="w-1/2 bg-purple-100 flex items-center justify-center">
        <div className="w-3/4 max-w-md bg-white bg-opacity-50 rounded-xl p-6">

          <h2 className="text-2xl font-semibold text-purple-800 mb-4">Sign In</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm">Email</label>
              <input className="w-full border rounded p-2" type="email" placeholder="xxxx@gmail.com" />
            </div>
            <div>
              <label className="block text-sm">Password</label>
              <input className="w-full border rounded p-2" type="password" placeholder="******" />
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 rounded">Sign In</button>
            <p className="text-sm text-right underline mt-2 cursor-pointer">Forgot password?</p>
          </form>

          <p className="text-sm mt-4 text-center">
            Don’t have an account? <Link to="/register" className="text-purple-700 underline">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
