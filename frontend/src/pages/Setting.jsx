import React, { useState } from "react";
import Header from "../components/Header";
import {Footer} from "../components/Footer";

const Setting = () => {
  const [emailNotifications, setEmailNotifications] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      {/* Main Settings Section */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Settings</h1>

        <div className="space-y-6 max-w-2xl mx-auto">
          {/* Account Settings */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
              Change Password
            </button>
          </div>

          {/* Notification Preferences */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="w-5 h-5 accent-black"
              />
              <span className="text-gray-700">Receive email notifications</span>
            </label>
          </div>

          {/* Payment Methods */}
          <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Payment Methods</h2>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
              Manage Payment Methods
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Setting;
