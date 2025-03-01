import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <div className="relative w-full h-60 md:h-72 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?contact,team')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-3xl mx-auto p-8 text-center bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-extrabold text-gray-800">Get in Touch</h2>
        <p className="text-lg text-gray-600 mt-3">
          Have any questions? Feel free to reach out to us!
        </p>

        <div className="mt-6">
          <p className="text-xl font-semibold text-gray-700">📌 Team No. 14 - CodeCrafters</p>
          <p className="text-lg text-gray-700 mt-2">📞 Contact: 123-456-789</p>
          <p className="text-lg text-gray-700 mt-2">📧 Email: contact@codecrafters.com</p>
        </div>

       
      </div>
    </div>
  );
};

export default Contact;
