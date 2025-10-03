import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Sulje mobiilivalikko reitin vaihtuessa
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-navbar fixed w-full top-0 left-0 z-50 shadow-md font-retro">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-accent">
          monsol
        </Link>

        {/* Desktop-menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-text hover:text-accent transition-colors">
            Koti
          </Link>
          <Link
            to="/services"
            className="text-text hover:text-accent transition-colors"
          >
            Palvelut
          </Link>
          <Link
            to="/projects"
            className="text-text hover:text-accent transition-colors"
          >
            Referenssit
          </Link>
          <Link
            to="/about"
            className="text-text hover:text-accent transition-colors"
          >
            Tietoa
          </Link>
          <Link
            to="/contact"
            className="text-text hover:text-accent transition-colors"
          >
            Ota yhteyttä
          </Link>
        </div>

        {/* Hamburger-menu */}
        <button
          className="md:hidden text-accent text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Overlay + liukuva mobiilivalikko */}
      <>
        {/* Overlay (näkyy vain kun valikko auki) */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Mobiilivalikko, liukuu vasemmalta */}
        <div
          className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-navbar shadow-lg p-6 z-50 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="flex flex-col space-y-6 text-lg">
            <Link to="/" className="text-text hover:text-accent transition-colors">
              Koti
            </Link>
            <Link
              to="/services"
              className="text-text hover:text-accent transition-colors"
            >
              Palvelut
            </Link>
            <Link
              to="/projects"
              className="text-text hover:text-accent transition-colors"
            >
              Referenssit
            </Link>
            <Link
              to="/about"
              className="text-text hover:text-accent transition-colors"
            >
              Tietoa
            </Link>
            <Link
              to="/contact"
              className="text-text hover:text-accent transition-colors"
            >
              Ota yhteyttä
            </Link>
          </nav>
        </div>
      </>
    </nav>
  );
}
