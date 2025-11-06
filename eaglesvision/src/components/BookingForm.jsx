import { useState } from "react";
import "../styles/main.css";

export default function BookingForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp
    const msg = `Booking Request:%0AName: ${formData.name}%0APhone: ${formData.phone}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${msg}`);

    alert("Booking sent successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" required onChange={handleChange} />
      <input type="text" name="service" placeholder="Service Type" required onChange={handleChange} />
      <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
      <button type="submit">Send Booking</button>
    </form>
  );
}
