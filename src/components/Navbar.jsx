import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#F0FBFF] backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-3xl font-necra text-gray-800">CALEB</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-700 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="bg-[#FFA500] text-white px-5 py-2 rounded-sm font-medium cursor-pointer hover:opacity-90 transition"
          >
            View Work
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md py-6 flex flex-col items-center space-y-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-gray-700 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#portfolio"
              onClick={() => setMenuOpen(false)}
              className="bg-[#FFA500]  text-white px-5 py-2 rounded-sm font-medium hover:opacity-90 transition"
            >
              View Work
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
