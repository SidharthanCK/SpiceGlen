import React, { useState } from "react";
import { X } from "lucide-react";
import icon from "../../assets/spiceglen_icon.png";

const ProfileModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("signup");
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-opacity-50 z-[9999] flex items-center justify-center">
      <div className="bg-white w-[95%] max-w-md rounded-xl shadow-lg relative p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={icon} alt="Spice Glen" className="h-10" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-lg font-semibold mb-4">
          Welcome to Spice Glen
        </h2>

        {/* Tabs */}
        <div className="flex border rounded-full overflow-hidden mb-5">
          <button
            onClick={() => setActiveTab("login")}
            className={`w-1/2 py-2 font-medium ${
              activeTab === "login"
                ? "bg-teal-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`w-1/2 py-2 font-medium ${
              activeTab === "signup"
                ? "bg-teal-500 text-white"
                : "bg-white text-black"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Conditional Form Content */}
        {activeTab === "signup" ? (
          <>
            <h3 className="text-md font-semibold mb-2">Create Account</h3>
            <p className="text-sm text-gray-500 mb-4">Fill in your details</p>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded px-3 py-2 mb-3 focus:outline-teal-500"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="w-full border rounded px-3 py-2 mb-3 focus:outline-teal-500"
            />

            <div className="flex items-center border rounded px-3 py-2 mb-4">
              <span className="mr-2">🇮🇳</span>
              <span className="text-gray-600">+91</span>
              <input
                type="tel"
                placeholder="Phone number"
                className="ml-2 flex-1 focus:outline-none"
              />
            </div>

            <button className="bg-teal-500 text-white w-full py-2 rounded hover:bg-teal-600 transition">
              Create Account
            </button>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-4">Enter your mobile number</p>
            <div className="flex items-center border rounded px-3 py-2 mb-4">
              <span className="mr-2">🇮🇳</span>
              <span className="text-gray-600">+91</span>
              <input
                type="tel"
                placeholder="Phone number"
                className="ml-2 flex-1 focus:outline-none"
              />
            </div>
            <button className="bg-teal-500 text-white w-full py-2 rounded hover:bg-teal-600 transition">
              Proceed to OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileModal;
