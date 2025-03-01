import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section with Custom Image */}
      <HeroSection image="https://source.unsplash.com/1600x900/?career" />

      {/* Content Section */}
      <div className="py-12 text-center w-full px-6 flex-grow">
        <h2 className="text-4xl font-extrabold mb-4">Find Your Career Path</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Discover a career tailored to your skills and interests. Take a short
          quiz and explore personalized roadmaps to your future!
        </p>

        {/* Action Buttons */}
        <div className="flex gap-6 justify-center">
          <Link
            to="/quiz"
            className="bg-slate-500 text-black px-6 py-3 rounded-lg shadow-lg font-semibold transition duration-300 transform hover:scale-105 hover:bg-slate-400"
          >
            Get Started 🚀
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-slate-900 text-white py-8 mt-12">
        <div className="container mx-auto text-center px-6">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link to="/about" className="hover:text-indigo-400 transition">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-indigo-400 transition">
              Contact
            </Link>
            {/* <Link to="/faq" className="hover:text-indigo-400 transition">
              FAQs
            </Link> */}
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 text-xl">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-blue-300 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>
          </div>

          {/* Copyright */}
          <p className="mt-4 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CodeCrafters. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
