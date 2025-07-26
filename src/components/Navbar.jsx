import   React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  return (
    <nav className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold"> 🌸  Animefy</a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuVisible(!mobileMenuVisible)}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuVisible && (
        <div className="md:hidden px-4 pb-4">
          <a href="#" className="block py-2">Home</a>
          <a href="#" className="block py-2">About</a>
          <a href="#" className="block py-2">Services</a>
          <a href="#" className="block py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
