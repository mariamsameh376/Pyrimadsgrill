// src/components/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 font-semibold text-[#39FF14] items-center">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <Link to="/menu" className="hover:text-white transition">
              Menu
            </Link>
            <Link to="/about" className="hover:text-white transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>

            {/* زر Order Online */}
            <Link
              to="/order"
              className="ml-6 bg-[#39FF14] text-black px-5 py-2 rounded-full font-bold hover:bg-white transition-all duration-300"
            >
              Order Online
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#39FF14] text-3xl"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-[#39FF14] px-8 py-6 flex flex-col space-y-4 font-semibold text-lg border-t border-gray-800">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition"
          >
            Home
          </Link>

          <Link
            to="/menu"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition"
          >
            Menu
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-white transition"
          >
            Contact
          </Link>

          {/* زر Order Online في الموبايل */}
          <Link
            to="/order"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-[#39FF14] text-black text-center px-4 py-3 rounded-full font-bold hover:bg-white transition-all duration-300"
          >
            Order Online
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
