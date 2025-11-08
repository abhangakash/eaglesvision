import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About & Logo */}
        <div className="footer-col footer-about">
          <h2>Eagle's Vision Diagnostics</h2>
          <p>
            Clarity defines quality. Trusted diagnostic services with digital X-ray, portable x-ray, pathology lab and home sample collection.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/booking">Book Appointment</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col footer-services">
          <h3>Our Services</h3>
          <ul>
            <li>Digital X-Ray</li>
            <li>Portable X-Ray</li>
            <li>Pathology Lab</li>
            <li>Home Sample Collection</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-col footer-contact">
          <h3>Contact Us</h3>
          <p><FaEnvelope className="icon" /> eaglesvisiondiagnostics@gmail.com</p>
          <p><FaPhone className="icon" /> For X-Ray: <a href="tel:9405109962">9405109962</a></p>
          <p><FaPhone className="icon" /> For Lab: <a href="tel:9607109962">9607109962</a></p>
          <p><FaMapMarkerAlt className="icon" /> Shop No. 10, 1st Floor, Ganesh Bella Montana, Shinde Wasti Chowk, Ravet, Pune-412101</p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Eagle's Vision Diagnostics Center. All rights reserved.
      </div>
    </footer>
  );
}
