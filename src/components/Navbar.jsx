import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/animefyLogo.png';

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-900 rounded-b-3xl  text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            {/* <img src={logo} alt="Animefy Logo" className="h-8" /> */}
            <Link to="/" className="text-2xl font-bold text-white-400">🌸 Animefy</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <Link to="/" className="hover:text-pink-300 transition duration-300">Home</Link>
            <Link to="/about" className="hover:text-pink-300 transition duration-300">About</Link>
            <Link to="/services" className="hover:text-pink-300 transition duration-300">Services</Link>
            <Link to="/contact" className="hover:text-pink-300 transition duration-300">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuVisible(!mobileMenuVisible)}>
              <svg className="h-6 w-6 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuVisible && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium">
          <Link to="/" className="block py-2 hover:text-pink-300 transition">Home</Link>
          <Link to="/about" className="block py-2 hover:text-pink-300 transition">About</Link>
          <Link to="/services" className="block py-2 hover:text-pink-300 transition">Services</Link>
          <Link to="/contact" className="block py-2 hover:text-pink-300 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
