import React, { useEffect, useState } from "react";
import "../../styles/hero.css";
// ✅ Import local images from src/assets
import lab1 from "../../assets/lab1.jpeg";
import lab2 from "../../assets/lab2.webp";
import lab3 from "../../assets/lab3.avif";

const HeroSection = () => {
  const images = [lab1, lab2, lab3]; // array of images
  const [current, setCurrent] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero-section">
      {/* Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay for darkening */}
      <div className="overlay"></div>

      {/* White box content */}
      <div className="hero-content">
        <div className="hero-box">
          <h1 className="brand-title">Eagle’s Vision Diagnostics Center</h1>
          <p className="brand-tagline">
            Precision · Trust · Excellence in Every Diagnosis
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Book Appointment</button>
            <button className="btn secondary">Explore Services</button>
            <button className="btn outline">Contact</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
