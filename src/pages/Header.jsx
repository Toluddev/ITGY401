import React, { useState } from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between  py-4 bg-[#000] text-white border-b-2 border-white px-[60px]">
      {/* Left: Logo and Title */}
      <div className="flex items-center space-x-4">
        <img
          src={Logo}
          alt="University Logo"
          className="w-[16px] h-[16px] object-cover"
        />
        <span className="font-bold text-lg">Lecturer's Portfolio</span>
      </div>

      {/* Right: Navigation Menu */}
      <div className="hidden md:flex">
        <nav>
          <ul className="flex space-x-8 font-medium">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300">
          Admin Login
        </button>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#000] text-white py-4 px-6">
          <nav>
            <ul className="space-y-4">
              <li>
                <button>Admin Login</button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
