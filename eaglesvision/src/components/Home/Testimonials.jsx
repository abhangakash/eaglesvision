import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import '../../styles/testimonials.css';

const testimonials = [
    {
        quote: "The team at EaglesVision is professional, compassionate, and incredibly fast. The accuracy and clarity of my reports were outstanding. Highly recommended!",
        name: "Mrs. Sneha P.",
        source: "Routine Checkup Patient",
        rating: 5,
    },
    {
        quote: "I used their Home Sample Collection service. The phlebotomist was on time and very gentle. Getting the results online was seamless and efficient.",
        name: "Mr. Rohan K.",
        source: "Home Service User",
        rating: 5,
    },
    {
        quote: "The digital X-Ray service here is top-notch. Much clearer images and the staff walked me through every step. A genuinely patient-centric approach.",
        name: "Ms. Aarohi S.",
        source: "X-Ray Patient",
        rating: 5,
    },
];

const TestimonialsHomeSection = () => {
    // Function to render star icons
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar 
                key={index} 
                className={index < rating ? "star-filled" : "star-empty"} 
            />
        ));
    };

    return (
        <section className="testimonials-home-section">
            <div className="testimonials-wrapper">
                
                <div className="testimonials-header">
                    <span className="section-subtitle-testimonial">Trust & Confidence</span>
                    <h2>What Our Patients Say</h2>
                    <p>
                        Real feedback from the community drives our commitment to excellence, precision, and care.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <FaQuoteLeft className="quote-icon" />
                            <div className="rating-stars">
                                {renderStars(testimonial.rating)}
                            </div>
                            <p className="quote-text">{testimonial.quote}</p>
                            <div className="patient-info">
                                <h4 className="patient-name">{testimonial.name}</h4>
                                <span className="patient-source">{testimonial.source}</span>
                            </div>
                        </div>
                    ))}
                </div>

               

            </div>
        </section>
    );
};

export default TestimonialsHomeSection;