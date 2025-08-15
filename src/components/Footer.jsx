import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 text-white py-10 px-6 mt-10 rounded-t-3xl shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        {/* Left - Website Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-pink-400">AnimeVerse 🌸</h2>
          <p className="text-sm mt-2 max-w-sm">
            Built with ❤️ by <strong>Kartik</strong> to help anime lovers find their favorite,
            most <span className="text-yellow-300">memorable YouTube moments</span> in one place.
            This is just the beginning — more anime love coming soon!
          </p>
        </div>

        {/* Right - Contact Info */}
        <div className="text-center md:text-right">
          <p className="text-lg font-semibold text-pink-300">Contact Me</p>
          <p className="text-sm">📞 9548082606</p>
          <p className="text-sm">📧 kartikepro@gmail.com</p>
          <p className="text-xs mt-2 text-gray-400">
            © {new Date().getFullYear()} AnimeVerse by Kartik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
