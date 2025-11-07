import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h3 className="footer-logo">
            <span className="gold">EaglesVision</span> Diagnostics
          </h3>
          <p>
            Trusted healthcare diagnostics with cutting-edge technology and
            compassionate care.
          </p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/services">Services</a></li>
            <li><a href="/aboutus">About</a></li>
            <li><a href="/booking">Book Now</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 123 Health Avenue, Pune, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ care@eaglesvision.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} EaglesVision Diagnostics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
