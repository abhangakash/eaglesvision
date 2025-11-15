import React from "react";
import { Link } from "react-router-dom";
import "../../styles/hero.css";
import heroImg from "../../assets/hero.webp";

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
        <div className="hero-text">
          <h1>
            Eagle’s Vision <span className="highlight">Diagnostics Center</span>
          </h1>
          <p className="hero-subtitle">
            Delivering <strong>Precision</strong>, <strong>Trust</strong> &{" "}
            <strong>Excellence</strong> in Every Diagnosis
          </p>
          <div className="hero-buttons">
            <Link to="/booking" className="btn btn-primary">
              Book Appointment
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
