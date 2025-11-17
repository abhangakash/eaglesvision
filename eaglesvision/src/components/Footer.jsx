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
import logo from "../assets/logo.png"; // sample logo for your company
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* About */}
        <div className="footer-col footer-about">
          <h2>Eagle's Vision Diagnostics</h2>
          <p>
            Clarity defines quality. Trusted diagnostic services with digital X-ray, portable X-ray, pathology lab, and home sample collection.
          </p>
        </div>

        {/* Links + Services */}
        <div className="footer-col footer-links-services">
          <div className="footer-columns">
            <div className="column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/booking">Book Appointment</a></li>
              </ul>
            </div>
            <div className="column">
              <h3>Our Services</h3>
              <ul>
                <li>Digital X-Ray</li>
                <li>Portable X-Ray</li>
                <li>Pathology Lab</li>
                <li>Home Sample Collection</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col footer-contact">
          <h3>Contact Us</h3>
          <p><FaEnvelope className="icon" /> eaglesvisiondiagnostics@gmail.com</p>
          <p><FaPhone className="icon" /> X-Ray: <a href="tel:9405109962">9405109962</a></p>
          <p><FaPhone className="icon" /> Lab: <a href="tel:9607109962">9607109962</a></p>
          <p><FaMapMarkerAlt className="icon" /> Shop No. 10, 1st Floor, Ganesh Bella Montana, Shinde Wasti Chowk, Ravet, Pune-412101</p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/share/1BU5uD2tbY/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://www.instagram.com/eaglesvisiondiagnostics/?__d=dist" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Powered by section 
      <div className="footer-poweredby">
        <a href="https://www.yourcompanywebsite.com" target="_blank" rel="noopener noreferrer">
         <span className="company-name">Developed By</span>
          <img src={logo} alt="Digital Solutions Logo" className="company-logo" />
          <span className="company-name">Digital Solutions Co.</span>
        </a>
      </div>
      */}

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Eagle's Vision Diagnostics Centre. All rights reserved.
      </div>
    </footer>
  );
}
