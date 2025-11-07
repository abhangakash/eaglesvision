import React, { useState } from "react";
import "../../styles/bookingform.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    test: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp Integration (example)
    const whatsappMessage = `New Booking:%0A
Name: ${formData.name}%0A
Phone: ${formData.phone}%0A
Test: ${formData.test}%0A
Date: ${formData.date}`;
    window.open(
      `https://wa.me/91XXXXXXXXXX?text=${whatsappMessage}`,
      "_blank"
    );

    // EmailJS (optional, will add later)
    alert("Your booking request has been sent! We will contact you soon.");
    setFormData({ name: "", phone: "", test: "", date: "" });
  };

  return (
    <section className="booking" id="booking">
      <div className="booking-container">
        <h2 className="booking-title">Book Your Test Appointment</h2>
        <p className="booking-subtitle">
          Fill out the form below to schedule your preferred test slot.
        </p>

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <label>Select Test</label>
            <select
              name="test"
              value={formData.test}
              onChange={handleChange}
              required
            >
              <option value="">Select Test</option>
              <option value="Blood Test">Blood Test</option>
              <option value="MRI Scan">MRI Scan</option>
              <option value="CT Scan">CT Scan</option>
              <option value="Ultrasound">Ultrasound</option>
              <option value="ECG / Cardiology">ECG / Cardiology</option>
              <option value="Full Body Checkup">Full Body Checkup</option>
            </select>
          </div>

          <div className="form-group">
            <label>Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
