import React from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    if (role === "organizer") {
      navigate("/register-organizer");
    } else {
      navigate("/register-purchaser");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Side Branding */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-purple-700 tracking-widest">EVENTSYNC</h1>
        <p className="mt-4 text-sm text-gray-700 uppercase tracking-widest">
          From Planning to Applause – All in One Place
        </p>
        <p className="absolute bottom-4 text-xs text-gray-400">
          © EventSync 2025 | Privacy | Terms
        </p>
      </div>

      {/* Right Side: Role Selection */}
      <div className="w-1/2 bg-purple-100 flex items-center justify-center">
        <div className="w-3/4 max-w-md bg-white bg-opacity-50 rounded-xl p-8 text-center space-y-6">
          <h2 className="text-2xl font-semibold text-purple-800">Create an Account</h2>
          <p className="text-sm text-gray-700">Choose your role to continue:</p>

          <button
            onClick={() => handleRoleSelection("organizer")}
            className="w-full bg-purple-700 text-white py-3 rounded hover:bg-purple-800 transition"
          >
            I am an Event Organizer
          </button>

          <button
            onClick={() => handleRoleSelection("purchaser")}
            className="w-full bg-purple-300 text-purple-900 py-3 rounded hover:bg-purple-400 transition"
          >
            I am a Purchaser
          </button>

          <p className="text-sm mt-4">
            Already have an account?{" "}
            <span
              className="text-purple-700 underline cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
