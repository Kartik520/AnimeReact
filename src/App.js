// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AnimePage from "./Pages/AnimePage";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<AnimePage />} />
            <Route path="/about" element={<About />} />
            <Route path="" element={<About />} />
            {/* Add more routes here if needed */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
