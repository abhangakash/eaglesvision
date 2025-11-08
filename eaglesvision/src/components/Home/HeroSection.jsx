import React, { useState, useEffect } from "react";
import "../../styles/hero.css";

// ✅ Correct imports for images inside src/assets
import img1 from "../../assets/img4.JPG";
import img2 from "../../assets/img3.JPG";
import img3 from "../../assets/img6.JPG";

const SLIDES = [img1, img2, img3];
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero-section slideshow-container">
      {SLIDES.map((img, idx) => (
        <div
          key={idx}
          className={`slide ${currentSlide === idx ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
          aria-hidden={currentSlide !== idx}
        />
      ))}

      <div className="hero-overlay"></div>

      <div className="hero-content container">
        <h1 className="hero-title">
          Eagle’s Vision <span>Diagnostics Center</span>
        </h1>
        <p className="hero-tagline">
          Clarity Defines Quality — Advanced Diagnostic Solutions to Empower Your Health.
        </p>
        <p className="hero-subtagline">
          Offering Digital X-Ray, Portable X-Ray, Pathology Lab, and Home Sample Collection services with precision and care.
        </p>
        <div className="hero-cta-wrapper">
          <a href="/booking" className="btn btn-primary" aria-label="Book an appointment">
            Book Appointment
          </a>
          <a href="/services" className="btn btn-secondary" aria-label="View our services">
            Explore Services
          </a>
          <a href="/contact" className="btn btn-tertiary" aria-label="Contact us today">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
