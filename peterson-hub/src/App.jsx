import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import AboutContact from './pages/AboutContact.jsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-contact" element={<AboutContact />} />
        </Routes>
        <footer className="bg-white border-t border-slate-100 py-12 text-center text-slate-400 text-sm mt-auto">
          <p>© 2026 Peterson Hub. Built with React, Tailwind & Azure.</p>
        </footer>
      </div>
    </Router>
  );
}