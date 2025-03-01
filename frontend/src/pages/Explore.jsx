import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const domains = [
  {
    id: "database fundamentals",
    title: "Database Fundamentals",
    description: "Build and design websites using modern frameworks and tools.",
    image: "https://cdn-icons-png.flaticon.com/512/8526/8526306.png"
  },
  {
    id: "computer-architecture",
    title: "Computer Architecture",
    description: "Analyze data and build machine learning models for insights.",
    image: "https://cdn-icons-png.flaticon.com/512/1835/1835276.png"
  },
  {
    id: "Distributed-Computing",
    title: "Distributed Computing",
    description: "Protect networks, systems, and data from cyber threats.",
    image: "https://static.vecteezy.com/system/resources/previews/050/999/084/non_2x/distributed-systems-illustration-line-art-vector.jpg"
  },
  {
    id: "cyber-secutity",
    title: "Cyber Security",
    description: "Deploy and manage scalable cloud solutions.",
    image: "https://cdn-icons-png.flaticon.com/512/6783/6783360.png"
  },
  {
    id: "Networking",
    title: "Database Fundamentals",
    description: "Build and design websites using modern frameworks and tools.",
    image: "https://cdn-icons-png.flaticon.com/512/8526/8526306.png"
  },
  {
    id: "Software development",
    title: "Software Development",
    description: "Build and design websites using modern frameworks and tools.",
    image: "https://cdn-icons-png.flaticon.com/512/8526/8526306.png"
  },
  {
    id: "Programming Skills",
    title: "Programming Skills",
    description: "Build and design websites using modern frameworks and tools.",
    image: "https://cdn-icons-png.flaticon.com/512/8526/8526306.png"
  },
  {
    id: "Projectmanagement",
    title: "Project Management",
    description: "Build and design websites using modern frameworks and tools.",
    image: "https://cdn-icons-png.flaticon.com/512/8526/8526306.png"
  },
];

const Explore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-700 py-10 px-6">
        
        <Navbar />
      <h1 className="text-4xl font-bold text-center mb-10 text-slate-700">
        Explore Tech Domains
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {domains.map((domain) => (
          <div
            key={domain.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer"
            onClick={() => navigate(`/domain/${domain.id}`)}
          >
            <img src={domain.image} alt={domain.title} className="w-full h-40 object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-bold text-slate-700">{domain.title}</h2>
              <p className="text-gray-600 mt-2">{domain.description}</p>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default Explore;
