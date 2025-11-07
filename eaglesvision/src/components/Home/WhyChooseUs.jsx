import React from "react";
import "../../styles/whychooseus.css";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Accurate Results",
      description: "We use advanced diagnostic equipment to ensure precise and reliable results every time.",
      icon: "🎯",
    },
    {
      title: "Experienced Specialists",
      description: "Our doctors and lab experts have decades of experience in pathology and imaging.",
      icon: "👩‍⚕️",
    },
    {
      title: "Quick Turnaround",
      description: "Get your reports within hours with our smart automated processing systems.",
      icon: "⚡",
    },
    {
      title: "Luxury & Care",
      description: "Enjoy a clean, calm, and premium facility designed for your comfort and care.",
      icon: "💎",
    },
  ];

  return (
    <section className="whychooseus" id="whychooseus">
      <div className="why-container">
        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-subtitle">Your health deserves accuracy, comfort, and trust.</p>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
