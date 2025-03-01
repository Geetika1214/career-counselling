import React from "react";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="relative min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Background Section */}
      <div
        className="relative w-full h-60 md:h-80 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ-ddhcpWj2ENmcav0amBLOcor6Ja09Ad60A&s')",
        }}
      >
        <div className="absolute inset-0 bg-slate-400 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-6 text-center mt-10">
        <h2 className="text-3xl font-extrabold mb-4">Who We Are</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are CodeCrafters, dedicated to helping students explore the best career paths in 
          the tech industry. Our platform offers insightful guidance, career roadmaps, and 
          interactive quizzes to help you make informed decisions about your future.
        </p>

        <h2 className="text-3xl font-extrabold mt-10 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to bridge the gap between education and industry needs by providing 
          personalized career counseling and skill-based recommendations.
        </p>

        <h2 className="text-3xl font-extrabold mt-10 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          A passionate team of developers, designers, and career advisors committed to making 
          career guidance accessible to every aspiring tech professional.
        </p>
      </div>
    </div>
  );
}

export default About;
