import React from "react";
import "../styles/services.css";
import {
  FaVial,
  FaXRay,
  FaHeartbeat,
  FaMicroscope,
  FaNotesMedical,
  FaHome,
  FaLaptopMedical,
  FaDna,
  FaStethoscope,
  FaAllergies,
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaVial />,
    title: "Comprehensive Laboratory Testing",
    description:
      "Our advanced lab performs precise investigations including Blood, Urine, and Biochemistry tests — powered by automated analyzers ensuring 100% accuracy and reliability.",
    highlights: [
      "Blood, Urine, Stool, Sputum tests",
      "Biochemistry & Hematology",
      "Serology, Immunology & Microbiology",
      "Cytology & Histopathology",
      "Molecular Diagnostics (PCR, DNA/RNA)",
    ],
  },
  {
    icon: <FaXRay />,
    title: "Radiology & Imaging",
    description:
      "We use digital imaging for X-Ray, ECG, and Echocardiography, enabling early diagnosis with clear visuals and expert interpretation.",
    highlights: ["Digital X-Ray", "Portable X-Ray", "ECG & Echocardiography"],
  },
  {
    icon: <FaDna />,
    title: "Specialized Diagnostic Profiles",
    description:
      "Our molecular and biochemical tests provide detailed insights for complex disorders, helping physicians tailor treatment effectively.",
    highlights: [
      "Hormone & Thyroid Panels",
      "Allergy & Autoimmune Testing",
      "Vitamin, Mineral & Tumor Marker Tests",
      "Infectious Disease Diagnosis",
    ],
  },
  {
    icon: <FaHeartbeat />,
    title: "Preventive & Corporate Health Packages",
    description:
      "We offer customized packages for families, working professionals, and senior citizens — promoting early detection and wellness tracking.",
    highlights: [
      "Annual Health Check-Ups",
      "Corporate / Executive Screening",
      "Women’s & Senior Citizen Packages",
      "Preventive Health Assessments",
    ],
  },
  {
    icon: <FaHome />,
    title: "Home Collection & Online Reports",
    description:
      "Get tested from the comfort of your home. Our trained technicians ensure sample integrity and timely report delivery through our digital platform.",
    highlights: [
      "Free Home Sample Collection",
      "Online Report Delivery",
      "Instant WhatsApp Alerts",
    ],
  },
  {
    icon: <FaStethoscope />,
    title: "Physiotherapy & Allied Support",
    description:
      "Our physiotherapy services assist in post-diagnosis recovery and rehabilitation — guided by trained experts to restore health efficiently.",
    highlights: [
      "Rehabilitation Programs",
      "Pain Management Therapy",
      "Customized Exercise Plans",
    ],
  },
];

const Services = () => {
  return (
    <section className="modern-services-page">
      {/* Hero Intro */}
      <div className="services-hero">
        <div className="services-hero-content">
          <h1>Our Diagnostic Expertise</h1>
          <p>
            At <strong>Eagle’s Vision Diagnostics Center</strong>, we combine
            innovation, precision, and care — delivering fast and reliable
            diagnostic services for every patient.
          </p>
          <a href="/booking" className="hero-cta-btn">
            Book Your Test Now
          </a>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p className="service-desc">{service.description}</p>
            <ul className="service-highlights">
              {service.highlights.map((point, i) => (
                <li key={i}>
                  <FaNotesMedical className="list-icon" /> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA Footer */}
      <div className="services-footer-cta">
        <h2>Ready to Get Tested?</h2>
        <p>
          Schedule your appointment online or visit us — our experts ensure
          smooth, fast, and stress-free testing every time.
        </p>
        <a href="/booking" className="cta-button">
          Schedule Appointment
        </a>
      </div>
    </section>
  );
};

export default Services;
