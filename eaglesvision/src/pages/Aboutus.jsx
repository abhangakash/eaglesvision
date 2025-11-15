import React from "react";
import "../styles/about.css";
import { FaUserTie, FaUserGraduate, FaFlask, FaBullhorn, FaHeartbeat, FaMicroscope } from "react-icons/fa";

const teamMembers = [
  { name: "Aditya D. Korde", role: "Founder & HOD Finance Dept.", icon: <FaUserTie /> },
  { name: "Vaibhav G. Gavali", role: "Co-Founder & Marketing Director", icon: <FaBullhorn /> },
  { name: "Amit A. Shinde", role: "Co-Founder & Project Manager", icon: <FaUserGraduate /> },
  { name: "Shivshambhu G. More", role: "Co-Founder & Lab Director", icon: <FaFlask /> },
];

const stats = [
  { title: "Patients Served", value: "25,000+", icon: <FaHeartbeat /> },
  { title: "Lab Tests", value: "500+", icon: <FaMicroscope /> },
  { title: "Years of Excellence", value: "10+", icon: <FaFlask /> },
];

const AboutUs = () => {
  return (
    <div className="about-container">

      {/* Hero */}
      <section className="about-hero">
        <div className="hero-text">
          <h1>Welcome to EaglesVision Diagnostics</h1>
          <p>Precision. Trust. Excellence in Every Diagnosis.</p>
          <p>Our center combines advanced technology with expert professionals to provide reliable, accurate, and timely diagnostic services for all.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-mission">
        <div className="mission-card">
          <h2>Our Mission</h2>
          <p>Deliver accurate diagnostic results with compassion, speed, and integrity, ensuring every patient receives exceptional care.</p>
        </div>
        <div className="mission-card">
          <h2>Our Vision</h2>
          <p>Become the most trusted and innovative diagnostics center, leading the way in healthcare excellence and patient satisfaction.</p>
        </div>
        <div className="mission-card">
          <h2>Our Values</h2>
          <p>Accuracy, Compassion, Innovation, Integrity, and Patient-Centered Care guide every step of our work.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </section>

      {/* Team */}
      <section className="about-team">
        <h2>Meet Our Experts</h2>
        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card">
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
