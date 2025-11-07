import React from "react";
import "../styles/services.css";

const ServicesSection = () => {
  const services = [
    {
      title: "MRI Scan",
      description: "Advanced MRI imaging with high-resolution diagnostics for accurate results.",
      icon: "🧲",
    },
    {
      title: "CT Scan",
      description: "Fast and precise CT scanning for detailed internal imaging.",
      icon: "💡",
    },
    {
      title: "Blood Test",
      description: "Comprehensive pathology tests with same-day digital reports.",
      icon: "🩸",
    },
    {
      title: "Ultrasound",
      description: "High-frequency ultrasound imaging for accurate internal observation.",
      icon: "🫀",
    },
    {
      title: "Cardiology Check",
      description: "ECG, Echo, and advanced cardiac screening by specialists.",
      icon: "❤️",
    },
    {
      title: "Health Packages",
      description: "Custom full-body health checkups for all age groups.",
      icon: "💎",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="section-title">Our Premium Diagnostic Services</h2>
        <p className="section-subtitle">
          Precision-driven healthcare powered by modern technology and expert professionals.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
