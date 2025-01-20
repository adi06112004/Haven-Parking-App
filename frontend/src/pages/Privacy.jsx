import React from 'react';
import Header from '../components/Header';
import {Footer} from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

        <p className="mb-6 text-gray-700 text-lg text-center">
          At Haven, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.
        </p>

        {/* Information We Collect */}
        <div className="mb-8 p-6 bg-gray-100 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Information We Collect</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li><span className="font-semibold">Personal information:</span> Name, email, and phone number</li>
            <li><span className="font-semibold">Location data:</span> When you use our services</li>
            <li><span className="font-semibold">Payment information</span></li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className="mb-8 p-6 bg-gray-100 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">How We Use Your Information</h2>
          <p className="text-gray-700">
            We use your information to provide and improve our services, process payments, and communicate with you about your bookings and account.
          </p>
        </div>

        {/* Data Protection */}
        <div className="mb-8 p-6 bg-gray-100 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Data Protection</h2>
          <p className="text-gray-700">
            We implement a variety of security measures to maintain the safety of your personal information.
          </p>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
