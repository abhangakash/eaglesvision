import React from "react";
import "../../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero-modern">
      {/* Background geometric network */}
      <svg 
        className="hero-network" 
        viewBox="0 0 800 400" 
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="150" cy="80" r="7" />
        <circle cx="400" cy="100" r="7" />
        <circle cx="650" cy="120" r="7" />
        <circle cx="350" cy="320" r="7" />
        <circle cx="580" cy="300" r="7" />
        
        <line x1="150" y1="80" x2="400" y2="100" />
        <line x1="400" y1="100" x2="650" y2="120" />
        <line x1="400" y1="100" x2="350" y2="320" />
        <line x1="650" y1="120" x2="580" y2="300" />
      </svg>

      {/* Content */}
      <div className="hero-content-modern">
        <h1 className="hero-title-modern">
          Eagle’s Vision Diagnostics Center
        </h1>
        <p className="hero-tagline-modern">
          Precision · Trust · Excellence in Every Diagnosis
        </p>
        <div className="hero-buttons-modern">
          <button className="btn-modern primary">Book Appointment</button>
          <button className="btn-modern secondary">Explore Services</button>
          <button className="btn-modern outline">Contact</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
