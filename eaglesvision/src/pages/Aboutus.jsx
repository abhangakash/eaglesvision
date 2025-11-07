import React from "react";
import "../styles/about.css";
import { FaUserTie, FaUserGraduate, FaFlask, FaBullhorn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Aditya D. Korde",
    role: "Founder & HOD Finance Department",
    icon: <FaUserTie />,
  },
  {
    name: "Vaibhav G. Gavali",
    role: "Co-Founder, Manager & Marketing Director",
    icon: <FaBullhorn />,
  },
  {
    name: "Amit A. Shinde",
    role: "Co-Founder, Project Manager",
    icon: <FaUserGraduate />,
  },
  {
    name: "Shivshambhu G. More",
    role: "Co-Founder, HOD & Laboratory Director",
    icon: <FaFlask />,
  },
];

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About EaglesVision Diagnostics Center</h1>
        <p>
          Established with a vision to provide world-class diagnostics, EaglesVision
          Diagnostics Center combines advanced technology with expert professionals.
          Our mission is to deliver accurate and timely results with compassion and care.
        </p>
      </section>

      {/* History Section */}
      <section className="about-history">
        <h2>Our Journey</h2>
        <p>
          EaglesVision started as a small laboratory with a passion for excellence.
          Over the years, we have grown into a trusted diagnostic center known for
          precision, innovation, and patient-centric services.
        </p>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-icon">{member.icon}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
