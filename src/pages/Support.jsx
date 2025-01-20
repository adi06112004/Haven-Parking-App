import React, { useState } from "react";
import Header from "../components/Header";
import {Footer} from "../components/Footer";

const faqs = [
  { question: "How do I book a parking space?", answer: "To book a parking space, simply browse available locations, select your preferred spot, and complete the booking process." },
  { question: "What if I need to cancel my reservation?", answer: "You can cancel your reservation from your booking history. Refund policies may apply depending on the cancellation time." },
  { question: "How can I become a parking space owner?", answer: "Sign up as an owner and list your parking space through our platform. Manage availability and pricing easily from your dashboard." },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Support Section */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">Support</h1>
        <p className="text-center text-gray-600 mb-8">Need help? We're here for you! Check our FAQs or reach out to us.</p>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg shadow-md bg-white p-4 cursor-pointer" onClick={() => toggleFAQ(index)}>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                  <span className="text-gray-600">{openIndex === index ? "−" : "+"}</span>
                </div>
                {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-10">
          <p className="text-lg mb-4 text-gray-700">Can't find what you're looking for?</p>
          <button className="bg-black text-white px-6 py-2 rounded-md transition transform hover:scale-105 hover:bg-gray-800">
            Contact Support
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Support;
