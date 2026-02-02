import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="text-2xl font-bold text-slate-900 tracking-tight font-serif hover:text-blue-700 transition-colors">
            Peterson Hub.
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">Work</Link>
            <Link to="/about-contact" className="text-slate-600 hover:text-blue-700 font-medium transition-colors">About & Contact</Link>
            <a 
              href="https://stocks.petersonhub.com" 
              className="bg-slate-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-md hover:-translate-y-0.5"
            >
              Launch Stock Tool
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" className="block px-3 py-2 text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Work</Link>
            <Link to="/about-contact" className="block px-3 py-2 text-slate-600 font-medium" onClick={() => setIsOpen(false)}>About & Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;