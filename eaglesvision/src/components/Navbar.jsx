import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaServicestack, FaInfoCircle, FaImages, FaBook, FaPhone } from "react-icons/fa";
import logo from "../assets/logo.PNG"; // Import your logo file
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
          {/* Show logo image on mobile, text on desktop */}
          <span className="logo-img-wrap">
            <img src={logo} alt="Eagle's Vision Diagnostics Logo" className="logo-img" />
          </span>
          <span className="logo-text">
            <span className="logo-main">EaglesVision</span> Diagnostics
          </span>
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
          <NavLink to="/" end onClick={closeMenu}><FaHome /> <span>Home</span></NavLink>
          <NavLink to="/services" onClick={closeMenu}><FaServicestack /> <span>Services</span></NavLink>
          <NavLink to="/aboutus" onClick={closeMenu}><FaInfoCircle /> <span>About</span></NavLink>
          <NavLink to="/gallery" onClick={closeMenu}><FaImages /> <span>Gallery</span></NavLink>
          <NavLink to="/booking" onClick={closeMenu}><FaBook /> <span>Book</span></NavLink>
          <NavLink to="/contact" onClick={closeMenu}><FaPhone /> <span>Contact</span></NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
