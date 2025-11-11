import React from "react";
import { Link } from "react-router-dom";
import "../../styles/hero.css";
import heroImg from "../../assets/hero.webp"; // 1920x1080 recommended

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src={heroImg}
          alt="Eagle’s Vision Diagnostics Center"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1>Eagle’s Vision Diagnostics Center</h1>
        <p>Precision · Trust · Excellence in Every Diagnosis</p>

        <div className="hero-buttons">
          <Link to="/booking" className="btn primary">
            Book Appointment
          </Link>
          <Link to="/services" className="btn secondary">
            Our Services
          </Link>
          <Link to="/contact" className="btn outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
