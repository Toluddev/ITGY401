import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      {/* Hero Image */}
      <img
        src="https://0.academia-photos.com/94767112/20757749/97536144/s200_uche-jerry.nzenwata.png" 
        alt="HeroImage"
        className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0"
      />

      {/* Text Content */}
      <div className="flex flex-col text-left md:ml-6">
        <div className="text-lg font-bold">
          Dr. Jeremiah Nzewata
        </div>
        <h2 className="text-gray-600">
          PHd, Senior Lecturer
        </h2>
        <h2 className="text-gray-600">UCSF</h2>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-4 md:mt-0 md:ml-auto">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-gray-300 transition duration-300">
        <a href="mailto:youremail@example.com" class="email-button">Contact Us</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
