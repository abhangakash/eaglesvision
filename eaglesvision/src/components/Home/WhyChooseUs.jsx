import React from 'react';
import { FaGraduationCap, FaCogs, FaClock, FaCheckCircle, FaUserShield } from 'react-icons/fa';
import '../../styles/whychooseus.css';

const features = [
    {
        icon: <FaGraduationCap />,
        title: "Certified Specialist Team",
        description: "Our HODs and lab directors are highly qualified experts, ensuring every test and report meets strict professional standards.",
        tag: "Expertise First",
    },
    {
        icon: <FaCogs />,
        title: "Advanced Digital Technology",
        description: "We utilize cutting-edge equipment for Digital X-Ray and Pathology, providing superior accuracy and clarity in every result.",
        tag: "High Precision",
    },
    {
        icon: <FaClock />,
        title: "Guaranteed Timely Results",
        description: "Receive your reports quickly and securely through our online patient portal, enabling faster next steps in your care.",
        tag: "Patient Convenience",
    },
    {
        icon: <FaUserShield />,
        title: "Home Collection & Portable X-Ray",
        description: "Access diagnostic services from the comfort of your home, including sample collection and on-site portable X-Ray services.",
        tag: "Maximized Accessibility",
    },
];

const WhyChooseUsSection = () => {
    return (
        <section className="why-choose-us-section">
            <div className="wcu-wrapper">
                
                {/* Header and Value Proposition */}
                <div className="wcu-header">
                    <span className="section-tag-wcu">Your Health, Our Priority</span>
                    <h2>The EaglesVision Difference: **Accuracy Meets Care**</h2>
                    <p>
                        Choosing a diagnostic center is choosing trust. We differentiate ourselves through unmatched clinical **precision**, investment in **technology**, and a truly **patient-centric** service model.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="wcu-features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="wcu-feature-card">
                            <div className="wcu-icon-box">{feature.icon}</div>
                            <div className="wcu-text-content">
                                <span className="wcu-tag">{feature.tag}</span>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                                <FaCheckCircle className="check-mark" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="wcu-footer-cta">
                    <p>Ready to experience diagnostics defined by quality?</p>
                    <a href="/booking" className="wcu-cta-button">
                        Book Your Appointment Today
                    </a>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;