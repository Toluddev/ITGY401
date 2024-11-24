import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      {/* Hero Image */}
      <img
        src="../assets/hero1.png" 
        alt="HeroImage"
        className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0"
      />

      {/* Text Content */}
      <div className="flex flex-col text-left md:ml-6">
        <div className="text-lg font-bold">
          Dr. Jennifer Smith
        </div>
        <h2 className="text-gray-600">
          Assistant Professor, Department of Medicine
        </h2>
        <h2 className="text-gray-600">UCSF</h2>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-4 md:mt-0 md:ml-auto">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">
          Follow
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300">
          Message
        </button>
      </div>
    </div>
  );
};

export default Hero;
