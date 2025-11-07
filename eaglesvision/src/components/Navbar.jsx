import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaServicestack, FaInfoCircle, FaImages, FaBook, FaPhone } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-main">EaglesVision</span> Diagnostics
        </Link>

        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end onClick={closeMenu}>
            <FaHome style={{ marginRight: 6 }} /> Home
          </NavLink>
          <NavLink to="/services" onClick={closeMenu}>
            <FaServicestack style={{ marginRight: 6 }} /> Services
          </NavLink>
          <NavLink to="/aboutus" onClick={closeMenu}>
            <FaInfoCircle style={{ marginRight: 6 }} /> About
          </NavLink>
          <NavLink to="/gallery" onClick={closeMenu}>
            <FaImages style={{ marginRight: 6 }} /> Gallery
          </NavLink>
          <NavLink to="/booking" onClick={closeMenu}>
            <FaBook style={{ marginRight: 6 }} /> Book
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            <FaPhone style={{ marginRight: 6 }} /> Contact
          </NavLink>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;
