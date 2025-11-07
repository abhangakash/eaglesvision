import React from "react";
import "../../styles/about.css";

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src="/images/about-clinic.jpg" alt="About Clinic" />
        </div>
        <div className="about-content">
          <h2>About Our Diagnostic Excellence</h2>
          <p>
            At <strong>Elite Diagnostics</strong>, we combine cutting-edge technology
            with personalized medical attention to deliver precise, timely, and
            compassionate care. Our world-class facility ensures comfort and
            reliability from check-in to results.
          </p>
          <p>
            Every test, scan, and service is performed under the supervision of
            expert clinicians using internationally approved standards to ensure
            <em> quality, accuracy, and trust.</em>
          </p>
          <a href="#services" className="about-btn">Explore Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
