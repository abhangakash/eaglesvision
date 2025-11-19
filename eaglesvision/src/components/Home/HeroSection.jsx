import React from "react";
import { Link } from "react-router-dom";
import "../../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src="https://res.cloudinary.com/dq8drlcks/image/upload/w_1335,h_890,c_fill,f_auto,q_auto/hero_qhapv6.webp"
          srcSet="
            https://res.cloudinary.com/dq8drlcks/image/upload/w_768,h_512,c_fill,f_auto,q_auto/hero_qhapv6.webp 768w,
            https://res.cloudinary.com/dq8drlcks/image/upload/w_1024,h_682,c_fill,f_auto,q_auto/hero_qhapv6.webp 1024w,
            https://res.cloudinary.com/dq8drlcks/image/upload/w_1335,h_890,c_fill,f_auto,q_auto/hero_qhapv6.webp 1335w
          "
          sizes="(max-width: 768px) 768px, (max-width: 1024px) 1024px, 1335px"
          alt="Eagle’s Vision Diagnostics Centre"
          className="hero-image"
          loading="lazy"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>
            Eagle’s Vision <span className="highlight">Diagnostics Centre</span>
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
