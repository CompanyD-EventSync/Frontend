/*
function RegisterPage() {
    return <h2>Register Page</h2>;
  }
  export default RegisterPage;
*/

import React from "react";
import { Link } from "react-router-dom";


export default function RegisterPage() {
    return (
      <div className="flex h-screen">
        <div className="w-1/2 bg-white flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-purple-700 tracking-widest">EVENTSYNC</h1>
          <p className="mt-4 text-sm text-gray-700 uppercase tracking-widest">From Planning to Applause – All in One Place</p>
          <p className="absolute bottom-4 text-xs text-gray-400">© EventSync 2025 | Privacy | Terms</p>
        </div>
  
        <div className="w-1/2 bg-purple-100 flex items-center justify-center">
          <div className="w-3/4 max-w-md bg-white bg-opacity-50 rounded-xl p-6">
            <div className="flex mb-4">
              <button className="flex-1 bg-purple-700 text-white py-2 rounded-l-xl">Sign Up</button>
              <Link to="/login" className="flex-1 bg-purple-300 text-center py-2 rounded-r-xl">Sign In</Link>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm">Name</label>
                <input className="w-full border rounded p-2" type="text" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm">Phone Number</label>
                <input className="w-full border rounded p-2" type="text" placeholder="Phone" />
              </div>
              <div>
                <label className="block text-sm">Email</label>
                <input className="w-full border rounded p-2" type="email" placeholder="Email" />
              </div>
              <div>
                <label className="block text-sm">Password</label>
                <textarea className="w-full border rounded p-2" placeholder="Password"></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white py-2 rounded">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }