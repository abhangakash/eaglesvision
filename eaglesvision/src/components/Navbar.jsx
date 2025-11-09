import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaStethoscope, FaRegImages, FaEnvelope, FaInfoCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

const navLinks = [
  { path: "/", name: "Home", icon: <FaHome /> },
  { path: "/services", name: "Services", icon: <FaStethoscope /> },  // Changed service icon
  { path: "/aboutus", name: "About", icon: <FaInfoCircle /> },
  { path: "/gallery", name: "Gallery", icon: <FaRegImages /> },
  { path: "/contact", name: "Contact", icon: <FaEnvelope /> }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo always visible */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-img-wrap">
              <img src={logo} alt="Eagle's Vision Diagnostics Logo" className="logo-img" />
            </span>
            <span className="logo-text">
              <span className="logo-main">Eagle's Vision Diagnostics</span>
            </span>
          </Link>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            tabIndex={0}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Nav links with icons */}
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {/* Removed close button for simplicity as requested */}
            {navLinks.map(link => (
              <NavLink key={link.name} to={link.path} end onClick={closeMenu}>
                <span className="nav-icon">{link.icon}</span>
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      {/* Overlay behind menu */}
      <div
        className={`mobile-overlay${menuOpen ? " active" : ""}`}
        onClick={closeMenu}
        tabIndex={-1}
        aria-label="Close overlay"
      />
    </>
  );
};

export default Navbar;
