import React from 'react';
import Header from '../components/Header';
import {Footer} from '../components/Footer';

const Term = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>

        <p className="mb-6 text-gray-700 text-lg text-center">
          By using Haven, you agree to the following terms and conditions:
        </p>

        {/* Use of Service */}
        <div className="mb-8 p-6 bg-gray-100 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Use of Service</h2>
          <p className="text-gray-700">
            You agree to use Haven for finding and booking parking spaces in accordance with all applicable laws and regulations.
          </p>
        </div>

        {/* User Accounts */}
        <div className="mb-8 p-6 bg-gray-100 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">User Accounts</h2>
          <p className="text-gray-700">
            You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
          </p>
        </div>

        {/* Booking and Payments */}
        <div className="mb-8 p-6 bg-gray-100 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Booking and Payments</h2>
          <p className="text-gray-700">
            All bookings are subject to availability. Payments are processed securely, and refunds are subject to our cancellation policy.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="mb-8 p-6 bg-gray-100 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Limitation of Liability</h2>
          <p className="text-gray-700">
            Haven is not responsible for any damages or losses related to your use of the service. We do not guarantee the accuracy of parking space information provided by owners.
          </p>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Term;
