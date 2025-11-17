import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCalendarCheck,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "../styles/bottomnav.css";
import { useState } from "react";

export default function BottomNav() {
  const [showInfo, setShowInfo] = useState(false);
  const [showChatOptions, setShowChatOptions] = useState(false);

  return (
    <>
      {/* Floating Booking Button */}
      <a href="/booking" className="floating-book-btn" title="Book Appointment">
        <FaCalendarCheck />
      </a>

      {/* Info Popup */}
      {showInfo && (
        <div className="info-popup">
          <button className="close-btn" onClick={() => setShowInfo(false)}>
            ✕
          </button>
          <h3>Eagle's Vision Diagnostics Centre</h3>
          <p>
            <FaEnvelope /> eaglesvisiondiagnostics@gmail.com
          </p>
          <p>
            <FaPhoneAlt /> X-Ray: 9405109962 | Lab: 9607109962
          </p>
          <p>
            <FaMapMarkerAlt /> Shop No.10, 1st Floor, Ganesh Bella Montana,
            Shinde Wasti Chowk, Ravet, Pune-412101
          </p>
          <p className="highlight">
            Digital X-Ray | Portable X-Ray | Pathology Lab | Home Sample
            Collection
          </p>
        </div>
      )}

      {/* Chat Selection Popup */}
      {showChatOptions && (
        <div className="chat-popup">
          <div className="chat-popup-content">
            <button className="close-btn" onClick={() => setShowChatOptions(false)}>✕</button>
            <h3>Select Chat Option</h3>

            <a
              href="https://wa.me/919405109962"
              target="_blank"
              rel="noopener noreferrer"
              className="chat-option"
            >
              <FaWhatsapp /> Chat for X-Ray
            </a>

            <a
              href="https://wa.me/919607109962"
              target="_blank"
              rel="noopener noreferrer"
              className="chat-option"
            >
              <FaWhatsapp /> Chat for Lab
            </a>
          </div>
        </div>
      )}

      {/* Bottom Navbar */}
      <nav className="bottom-nav">
        <div className="bottom-nav-container">
          <a href="/" className="bottom-nav-item">
            <FaHome />
            <span>Home</span>
          </a>

          <a href="/booking" className="bottom-nav-item">
            <FaCalendarCheck />
            <span>Book</span>
          </a>

          <button
            className="bottom-nav-item chat-btn"
            onClick={() => setShowChatOptions(true)}
          >
            <FaWhatsapp className="whatsapp-icon" />
            <span>Chat</span>
          </button>

          <a
            href="https://maps.google.com?q=Eagle's Vision Diagnostics Centre Ravet Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-nav-item"
          >
            <FaMapMarkerAlt />
            <span>Locate</span>
          </a>

          <button
            onClick={() => setShowInfo(true)}
            className="bottom-nav-item info-btn"
          >
            <FaInfoCircle />
            <span>Info</span>
          </button>
        </div>
      </nav>
    </>
  );
}
