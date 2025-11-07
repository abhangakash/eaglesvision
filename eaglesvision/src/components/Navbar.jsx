import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/main.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <span className="logo-main">EaglesVision</span> Diagnostics
        </Link>

        <nav className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/aboutus">About</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/booking">Book</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
