// src/components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-[#39FF14]
 mb-4">
            Pyramids <span className="text-red-600">Grill</span>
          </h2>
          <p className="text-sm leading-6">
            Experience the taste of authentic Egyptian cuisine, 
            made with love and the finest ingredients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-[#39FF14]
 mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500 transition">About</Link></li>
            <li><Link to="/menu" className="hover:text-red-500 transition">Menu</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold text-[#39FF14]
 mb-4">Opening Hours</h3>
          <ul className="space-y-3 text-sm">
            <li>Mon - Fri: 10:00 AM - 11:00 PM</li>
            <li>Sat - Sun: 12:00 PM - 12:00 AM</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-[#39FF14]
 mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/profile.php?id=61572270230355"  target="_blank"
    rel="noopener noreferrer" className="hover:text-red-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-red-500 transition"><FaInstagram /></a>
          
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pyramids Grill. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
