import { FaCertificate, FaAward, FaMedal } from "react-icons/fa";
import "../../styles/accreditation.css";

export default function AccreditationSection() {
  const certificates = [
    {
      icon: <FaCertificate />,
      title: "ISO 9001:2015 Certified",
      desc: "Recognized for maintaining international quality standards in diagnostic and management processes.",
    },
    {
      icon: <FaAward />,
      title: "NABL Accredited",
      desc: "Our laboratory is accredited by NABL, ensuring accuracy, reliability, and globally recognized test results.",
    },
    {
      icon: <FaMedal />,
      title: "Govt. of India Approved",
      desc: "We operate under authorization and compliance with all healthcare and diagnostic regulations.",
    },
  ];

  return (
    <section className="accreditation-section" id="accreditations">
      <h2 className="section-title">Accreditation & Certifications</h2>
      <p className="section-subtitle">
        Recognized by leading authorities for excellence, safety, and reliability.
      </p>

      <div className="accreditation-cards">
        {certificates.map((item, index) => (
          <div key={index} className="accreditation-card">
            <div className="accreditation-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
