import { Link } from "react-router-dom";
import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";

function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-900">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section with Custom Image */}
      <HeroSection image="https://source.unsplash.com/1600x900/?career" />

      {/* Content Section */}
      <div className="py-12 text-center w-full px-6">
        <h2 className="text-4xl font-extrabold mb-4">Find Your Career Path</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Discover a career tailored to your skills and interests. Take a short
          quiz and explore personalized roadmaps to your future!
        </p>

        {/* Action Buttons */}
        <div className="flex gap-6 justify-center">
          <Link
            to="/quiz"
            className="bg-yellow-700 text-black px-6 py-3 rounded-lg shadow-lg font-semibold transition duration-300 transform hover:scale-105 hover:bg-slate-300"
          >
            Get Started 🚀
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
