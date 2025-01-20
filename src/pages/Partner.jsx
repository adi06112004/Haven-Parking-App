import React from "react";
import Header from "../components/Header";
import { Footer } from "../components/Footer";

export default function Partner() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-800 to-black text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Partner with Us</h1>
        <p className="text-lg">Turn your unused parking space into extra income. Join us today!</p>
        <button className="mt-6 bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition">
          Become a Partner
        </button>
      </div>

      {/* How It Works Section */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition transform hover:bg-gray-700">
            <h3 className="text-xl font-semibold mb-2">1. List Your Space</h3>
            <p className="text-gray-300">Provide details about your parking spot, availability, and pricing.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition transform hover:bg-gray-700">
            <h3 className="text-xl font-semibold mb-2">2. Get Bookings</h3>
            <p className="text-gray-300">Our platform connects you with drivers looking for parking.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition transform hover:bg-gray-700">
            <h3 className="text-xl font-semibold mb-2">3. Earn Money</h3>
            <p className="text-gray-300">Receive payments directly to your account for each booking.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
            List Your Parking Space
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
