import React from "react";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Excellence in Every Diagnosis</h1>
          <p>Luxury Diagnostic Care with Precision and Trust</p>
          <a href="#booking" className="hero-btn">Book Appointment</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
