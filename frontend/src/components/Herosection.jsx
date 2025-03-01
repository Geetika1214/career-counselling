import React from "react";

const Herosection = ({ image }) => {
  return (
    <div className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] relative">
      <img
        src={image}
        alt="Hero Section"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Career Counseling
        </h1>
      </div>
    </div>
  );
};

export default Herosection;
