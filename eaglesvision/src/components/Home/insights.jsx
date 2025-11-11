import React from "react";
import { FaBookOpen, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../styles/insights.css"

const insights = [
    {
        id: 1,
        title: "Decoding Your Lipid Profile: Beyond Cholesterol",
        date: "Nov 05, 2025",
        summary: "Go beyond LDL and HDL — discover what your lipid profile truly says about your heart health. A deep dive into triglycerides and VLDL.",
        link: "/blog/cholesterol-guide",
    },
    {
        id: 2,
        title: "The Silent Threat: Why Annual Blood Sugar Screening Matters",
        date: "Nov 02, 2025",
        summary: "Learn how routine screening helps prevent diabetes complications early.",
        link: "/blog/blood-sugar",
    },
    {
        id: 3,
        title: "Preparation Guide for Accurate Lab Sample Collection",
        date: "Oct 28, 2025",
        summary: "Simple steps to ensure your lab results are accurate and reliable every time.",
        link: "/blog/sample-prep",
    },
    {
        id: 4,
        title: "Preparing for an X-Ray: Ensuring the Clearest Diagnostic Image",
        date: "Oct 22, 2025",
        summary: "Tips to help you prepare for an X-ray and get the best-quality images.",
        link: "/blog/xray-prep",
    },
    {
        id: 5,
        title: "Thyroid Trouble: Understanding T3, T4, and TSH Hormones",
        date: "Oct 15, 2025",
        summary: "Learn what these key thyroid hormones indicate about your metabolism and energy levels.",
        link: "/blog/thyroid-health",
    },
];

const HealthInsightsSection = () => {
    // Separate the featured article (the first one)
    const [featuredInsight, ...listInsights] = insights;

    return (
        <section className="list-insights-section">
            <div className="list-insights-wrapper">

                {/* Header */}
                <header className="list-insights-header">
                    <div className="section-tag-list">
                        <FaBookOpen className="header-icon" />
                        <span>Knowledge is Health</span>
                    </div>
                    <h2>Latest Health Insights & News</h2>
                </header>
                
                {/* Main Content Grid (Featured + List) */}
                <div className="content-list-grid">
                    
                    {/* 1. Featured Insight (Pillar Style) */}
                    <Link to={featuredInsight.link} className="featured-pillar">
                        <div className="pillar-meta">
                             <FaCalendarAlt /> <span>{featuredInsight.date}</span>
                        </div>
                        <h3>{featuredInsight.title}</h3>
                        <p className="pillar-summary">{featuredInsight.summary}</p>
                        <div className="pillar-link">
                            Explore Guide <FaArrowRight />
                        </div>
                    </Link>

                    {/* 2. Minimalist Divided List */}
                    <div className="minimalist-list">
                        {listInsights.map((item) => (
                            <Link key={item.id} to={item.link} className="list-item">
                                <div className="list-meta">
                                    <FaCalendarAlt /> <span>{item.date}</span>
                                </div>
                                <h4>{item.title}</h4>
                                <FaArrowRight className="list-arrow" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Footer CTA */}
               

            </div>
        </section>
    );
};

export default HealthInsightsSection;