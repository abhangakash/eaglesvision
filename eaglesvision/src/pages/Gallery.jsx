import React from "react";
import "../styles/gallery.css";

import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";
import img4 from "../assets/img4.JPG";
import img5 from "../assets/img5.JPG";
import img6 from "../assets/img6.JPG";
import img7 from "../assets/img7.JPG";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-content">
          <h1>Our Modern Diagnostic Center</h1>
          <p>
            Discover our advanced labs, imaging rooms, and patient-friendly environment
            designed to deliver precision, comfort, and care.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="gallery-intro">
        <h2>Explore Our World-Class Facilities</h2>
        <p>
          Every space inside <strong>Eagle’s Vision Diagnostics Center</strong> has been
          carefully designed — ensuring accuracy, hygiene, and a modern healthcare experience
          powered by technology and compassion.
        </p>
      </section>

      {/* Uniform Image Grid */}
      <section className="gallery-grid-section">
        <div className="gallery-grid uniform-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Facility ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer Quote */}
      <section className="gallery-footer">
        <p>
          “Delivering excellence in diagnostics — where every detail matters.”
        </p>
      </section>
    </div>
  );
}
