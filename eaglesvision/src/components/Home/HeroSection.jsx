import React from "react";
import "../../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            Eagle’s Vision <span>Diagnostics Center</span>
          </h1>
          <p className="hero-subtitle">
            Clarity Defines Quality — Providing Digital X-Ray, Portable X-Ray, Pathology Lab, and Home Sample Collection.
          </p>
          <div className="hero-buttons">
            <a href="/booking" className="btn-primary">Book Appointment</a>
            <a href="/services" className="btn-secondary">Our Services</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
