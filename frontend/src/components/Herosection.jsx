import React from "react";

const Herosection = ({ image }) => {
  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Background Image */}
      <img
        src="https://imageio.forbes.com/specials-images/imageserve/65fb34d5cd20c1b2e5234b81/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds"
        alt="Hero Section"
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-600 to-gray-800 opacity-75"></div>

      {/* Floating Icons */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white z-10">
          Career Counseling
        </h1>
      </div>

      {/* Animated Floating Elements */}
      {/* <div className="absolute top-10 left-20 animate-float">
        <img src="/icons/book.svg" alt="Book" className="w-12 opacity-80" />
      </div>
      <div className="absolute bottom-20 right-20 animate-float-slow">
        <img src="/icons/code.svg" alt="Code" className="w-14 opacity-80" />
      </div>
      <div className="absolute bottom-10 left-1/2 animate-float">
        <img src="/icons/graduation-cap.svg" alt="Graduation Cap" className="w-10 opacity-80" />
      </div> */}

      {/* Glowing Blobs */}
      <div className="absolute w-48 h-48 bg-blue-500 opacity-30 blur-3xl rounded-full top-1/3 left-10"></div>
      <div className="absolute w-56 h-56 bg-purple-600 opacity-30 blur-3xl rounded-full bottom-10 right-10"></div>
    </div>
  );
};

export default Herosection;
