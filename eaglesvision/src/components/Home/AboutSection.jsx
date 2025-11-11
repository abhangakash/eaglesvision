import React from 'react';
import { FaCalendarCheck, FaVial, FaChartLine, FaShieldAlt } from "react-icons/fa";
import "../../styles/homeabout.css"; 

const utilityFeatures = [
    {
        id: 1,
        title: "Rapid Result Delivery",
        description: "Secure, online access to your reports, often within 24 hours.",
        icon: <FaCalendarCheck />,
    },
    {
        id: 2,
        title: "Advanced Lab Precision",
        description: "Utilizing state-of-the-art instruments for ultimate testing accuracy.",
        icon: <FaVial />,
    },
    {
        id: 3,
        title: "Comprehensive Health Panel",
        description: "A full spectrum of diagnostics from screening to specialized tests.",
        icon: <FaChartLine />,
    },
];

const achievementMetrics = [
    { value: "5+", label: "Years Experience" },
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "3K+", label: "Community Served" },
];

const AboutHomeSectionV5 = () => {
    return (
        <section className="about-home-v5-section">
            <div className="v5-content-wrapper">

                {/* 1. Value Proposition (Left Side) */}
                <div className="v5-value-proposition">
                    <span className="section-subtitle">Our Promise to You</span>
                    <h2>The Future of Diagnostics: **EaglesVision**</h2>
                    <p>
                        We simplify complex health testing. Our focus is on providing a seamless, **highly reliable service** built on transparent communication and medical excellence.
                    </p>
                    
                    <div className="v5-metric-bar">
                        {achievementMetrics.map((metric, index) => (
                            <div key={index} className="metric-box-v5">
                                <p className="metric-value-v5">{metric.value}</p>
                                <p className="metric-label-v5">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                    
                    <a href="/aboutus" className="v5-cta-button">
                        Discover Our Commitment
                    </a>
                </div>

                {/* 2. Utility Features & Trust Panel (Right Side) */}
                <div className="v5-feature-panel">
                    
                    {/* Features Grid */}
                    <div className="v5-features-grid">
                        {utilityFeatures.map((feature) => (
                            <div key={feature.id} className="feature-card-v5">
                                <div className="feature-icon-v5">{feature.icon}</div>
                                <h4>{feature.title}</h4>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Certification Box */}
                    <div className="v5-certification-box">
                        <FaShieldAlt className="shield-icon-v5" />
                        <p>**Globally Certified:** Our standards exceed expectations, guaranteeing trusted results every time.</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default AboutHomeSectionV5;