import React from "react";
//import "../styles/contactsection.css";

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            We’re here to answer your queries and help you with appointments.
            Visit us or contact our team for assistance.
          </p>

          <div className="contact-details">
            <div>
              <h4>📍 Address</h4>
              <p>Nextgen Diagnostic Center, MG Road, Pune, Maharashtra</p>
            </div>
            <div>
              <h4>📞 Phone</h4>
              <p>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </p>
            </div>
            <div>
              <h4>✉️ Email</h4>
              <p>
                <a href="mailto:info@nextgendiagnostics.com">
                  info@nextgendiagnostics.com
                </a>
              </p>
            </div>
            <div>
              <h4>💬 WhatsApp</h4>
              <p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.401... (replace with your real location embed)"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
