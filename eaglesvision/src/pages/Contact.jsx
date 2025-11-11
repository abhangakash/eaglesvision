import React, { useState } from "react";
import "../styles/contact.css";
import logo from "../assets/logo.png";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("✅ Thank you for reaching out! We’ll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section className="contact-modern-section">
      {/* Header */}
      <div className="contact-header-modern">
        <div className="contact-header-left">
          <img src={logo} alt="Eagle's Vision Diagnostics" />
          <div>
            <h1>Eagle's Vision Diagnostics Center</h1>
            <p>Clarity Defines Quality...</p>
          </div>
        </div>

        <div className="contact-header-info">
          <p>
            <i className="fa-solid fa-envelope"></i>
            eaglesvisiondiagnostics@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            X-Ray: <a href="tel:9405109962">9405109962</a> | Lab:{" "}
            <a href="tel:9607109962">9607109962</a>
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            Shop No.10, 1st Floor, Ganesh Bella Montana, Shinde Wasti Chowk,
            Ravet, Pune-412101
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="contact-services-modern">
        <h3>Our Core Services</h3>
        <div className="service-icons">
          <div><i className="fa-solid fa-x-ray"></i> Digital X-Ray</div>
          <div><i className="fa-solid fa-truck-medical"></i> Portable X-Ray</div>
          <div><i className="fa-solid fa-vials"></i> Pathology Lab</div>
          <div><i className="fa-solid fa-house-medical"></i> Home Collection</div>
        </div>
      </div>

      {/* Main Section */}
      <div className="contact-grid">
        {/* Left: Form */}
        <div className="contact-form-card">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">
              <i className="fa-solid fa-paper-plane"></i> Send Message
            </button>

            {status && <p className="status-message">{status}</p>}
          </form>

          <div className="quick-links">
            <h4>Quick Contact</h4>
            <a
              href="https://wa.me/919405109962"
              target="_blank"
              rel="noreferrer"
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

        {/* Right: Map */}
        <div className="contact-map-card">
          <h3>Locate Us</h3>
          <iframe
            src="https://www.google.com/maps?q=Ganesh+Bella+Montana,+Shinde+Wasti+Chowk,+Ravet,+Pune-412101&output=embed"
            title="Eagle's Vision Diagnostics Center"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
