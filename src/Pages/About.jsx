import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white p-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">About Animefy</h1>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          <strong>Animefy</strong> is a passion project created by <strong>Kartik</strong> to bring all your favorite and unforgettable
          anime YouTube videos into one place. Whether it's intense battles, emotional scenes, or nostalgic
          moments – Animefy makes them easy to search and relive.
        </p>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          🧠 <strong>Why Animefy?</strong> Because true anime lovers deserve a space where discovering their favorite moments is simple,
          beautiful, and fun. Animefy is crafted <em>for fans, by a fan</em>.
        </p>
        <p className="text-lg md:text-xl mb-4 leading-relaxed">
          💖 <strong>Built with love</strong> and a dream to build something magical for the anime community. This is just the start —
          expect more features and updates as we grow!
        </p>
        <div className="mt-8 border-t border-gray-600 pt-6">
          <h2 className="text-2xl font-semibold mb-2 text-blue-300">Contact</h2>
          <p className="text-lg">📞 <strong>Phone:</strong> +91 95480 82606</p>
          <p className="text-lg">📧 <strong>Email:</strong> kartikepro@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;
