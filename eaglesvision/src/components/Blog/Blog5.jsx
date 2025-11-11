import React from 'react';
import { FaCalendarAlt, FaUserMd, FaChevronLeft } from 'react-icons/fa';
import '../../styles/blog-listing.css'; 

const POST_IMAGE_PLACEHOLDER = "";
const AUTHOR_NAME = "EaglesVision Health Team";

export default function Blog5() {
    const postData = {
        title: "Thyroid Trouble: Understanding T3, T4, and TSH Hormones",
        date: "Sep 25, 2025",
        author: AUTHOR_NAME,
        image: POST_IMAGE_PLACEHOLDER,
        body: (
            <>
                <p>The thyroid gland, located in your neck, is small but mighty, regulating metabolism, energy, and mood. When things go wrong, the effects can be widespread. The **Thyroid Function Test (TFT)** is the key to diagnosis.</p>
                
                <h3>The Master Regulator: TSH</h3>
                <p>Thyroid Stimulating Hormone (TSH) is produced by the pituitary gland and signals the thyroid to make more hormones. TSH is the most common first-line test. High TSH often indicates an underactive thyroid (hypothyroidism), while low TSH can point to an overactive thyroid (hyperthyroidism).</p>

                <h3>The Active Hormones: T3 and T4</h3>
                <p>Triiodothyronine (T3) and Thyroxine (T4) are the hormones produced by the thyroid. They are the active agents that influence the body's metabolism. Testing for Free T3 and Free T4 (the unbound, active forms) provides a clearer picture of how much hormone is actually available to your cells.</p>

                <h4>Symptoms to Watch For</h4>
                <p>If you experience unexplained weight changes, chronic fatigue, temperature sensitivity, or persistent changes in heart rate, a TFT may be warranted. Many people feel better once their hormonal balance is restored.</p>

                <p className="conclusion-note">If your doctor suspects a thyroid imbalance, our precise hormone testing provides the accurate data needed for effective treatment planning. No special preparation is usually needed for this test.</p>
            </>
        )
    };

    return (
        <div className="blog-post-container">
            <a href="/blog" className="back-to-blog">
                <FaChevronLeft /> Back to Insights Hub
            </a>
            
            <article className="blog-post-article">
                <h1 className="post-title">{postData.title}</h1>
                <div className="post-meta-line">
                    <div className="meta-item"><FaCalendarAlt /> {postData.date}</div>
                    <div className="meta-item"><FaUserMd /> By {postData.author}</div>
                </div>

                <div className="post-featured-image">
                    {postData.image}
                </div>
                
                <div className="post-body">
                    {postData.body}
                </div>
                
            </article>
            
            <div className="post-footer-cta">
                <p>Need a Thyroid Function Test? Book your appointment or Home Sample Collection today!</p>
                <a href="/booking" className="post-cta-button">Book Now</a>
            </div>
        </div>
    );
}