import React, { useState } from "react";
import "../styles/contact.css";
import logo from "../assets/logo.png";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("✅ Thank you for reaching out! We’ll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 6000);
  };

  return (
    <section className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <div className="contact-icon-card">
          <img
            src={logo}
            alt="Eagle's Vision Diagnostics Center Logo"
            className="contact-logo"
          />
          <h1>Eagle's Vision Diagnostics Center</h1>
          <p className="contact-claim">Clarity Defines Quality...</p>
        </div>

        <div className="contact-info-card">
          <div>
            <i className="fa-solid fa-envelope"></i>
            <span>eaglesvisiondiagnostics@gmail.com</span>
          </div>
          <div>
            <i className="fa-solid fa-phone"></i>
            <span>
              For X-Ray: <a href="tel:9405109962">9405109962</a> / For Lab:{" "}
              <a href="tel:9607109962">9607109962</a>
            </span>
          </div>
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <span>
              Shop No. 10, 1st Floor, Ganesh Bella Montana, Shinde Wasti Chowk,
              Ravet, Pune-412101
            </span>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="contact-service-highlights">
        <h3>Our Services</h3>
        <ul>
          <li><i className="fa-solid fa-x-ray"></i> Digital X-Ray</li>
          <li><i className="fa-solid fa-truck-medical"></i> Portable X-Ray</li>
          <li><i className="fa-solid fa-vials"></i> Pathology Lab</li>
          <li><i className="fa-solid fa-house-medical"></i> Home Sample Collection</li>
        </ul>
      </div>


      {/* Main Content */}
      <div className="contact-main-content">
        {/* Form */}
        <div className="contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
            />

            <label>Email</label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />

            <label>Message</label>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Please let us know how we can help you"
              rows={5}
            />

            <button type="submit">
              <i className="fa-solid fa-paper-plane"></i> Send Message
            </button>

            {status && <div className="contact-status">{status}</div>}
          </form>

          <div className="quick-contact-box">
            <h4>Quick Contact</h4>
            <a
              href="https://wa.me/919405109962"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i> WhatsApp Now
            </a>
            <a href="mailto:eaglesvisiondiagnostics@gmail.com">
              <i className="fa-solid fa-envelope"></i> Email Us
            </a>
            <a href="tel:9405109962">
              <i className="fa-solid fa-phone"></i> Call X-Ray Desk
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="contact-map-panel">
          <h4>Find Us on Map</h4>
          <div className="map-embed-container">
            <iframe
              src="https://www.google.com/maps?q=Ganesh+Bella+Montana,+Shinde+Wasti+Chowk,+Ravet,+Pune-412101&output=embed"
              title="Eagle's Vision Diagnostics Center Map"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
