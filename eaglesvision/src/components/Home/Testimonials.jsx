import React from "react";
import "../../styles/testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ananya Sharma",
      text: "The staff was so kind and professional. My reports came within hours. Truly world-class service!",
      title: "Patient - Blood Test",
    },
    {
      name: "Rahul Verma",
      text: "I was impressed by the cleanliness and technology here. Felt comfortable throughout my MRI scan.",
      title: "Patient - MRI Scan",
    },
    {
      name: "Dr. Meera Kapoor",
      text: "As a referring doctor, I trust them completely for diagnostic accuracy and timely reports.",
      title: "Consulting Doctor",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Patients Say</h2>
        <p className="testimonials-subtitle">
          Real stories from our valued patients and healthcare partners.
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="quote">“</div>
              <p className="text">{t.text}</p>
              <div className="author">
                <h3>{t.name}</h3>
                <span>{t.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
