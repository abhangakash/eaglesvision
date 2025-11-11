import React from 'react';
import { FaCalendarAlt, FaUserMd, FaChevronLeft } from 'react-icons/fa';
import '../../styles/blog-listing.css'; 

const POST_IMAGE_PLACEHOLDER = "";
const AUTHOR_NAME = "EaglesVision Health Team";

export default function Blog2() {
    const postData = {
        title: "The Silent Threat: Why Annual Blood Sugar Screening Matters",
        date: "Oct 18, 2025",
        author: AUTHOR_NAME,
        image: POST_IMAGE_PLACEHOLDER,
        body: (
            <>
                <p>Diabetes often develops gradually, with many people living in the pre-diabetes stage without knowing it. This is why annual **Blood Sugar Screening**—including Fasting Plasma Glucose (FPG) or HbA1c—is one of the most crucial preventive tests we offer.</p>
                
                <h3>Understanding Pre-Diabetes</h3>
                <p>Pre-diabetes is a condition where blood sugar levels are higher than normal but not high enough to be classified as Type 2 diabetes. This is a critical window of opportunity! Lifestyle changes made during this phase can often revert blood sugar levels to normal and prevent the onset of full diabetes.</p>

                <h3>The Power of HbA1c</h3>
                <p>While the standard Fasting Plasma Glucose test gives a snapshot of your sugar level at that moment, the **HbA1c test (Glycated Hemoglobin)** provides a clear picture of your average blood sugar control over the past three months. It is the gold standard for long-term monitoring.</p>

                <h4>Early Detection is Key</h4>
                <p>Uncontrolled high blood sugar damages organs, nerves, and blood vessels over time. Early detection through regular screening allows for timely intervention, protecting your eyes, kidneys, and cardiovascular system from long-term complications. Don't wait for symptoms; be proactive.</p>

                <p className="conclusion-note">If you are over 45, overweight, or have a family history of diabetes, speak to your doctor about integrating annual blood sugar screening into your health plan. EaglesVision provides highly accurate metabolic profiles.</p>
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
                <p>Ready for your Annual Blood Sugar Screening? Book your Home Sample Collection today!</p>
                <a href="/booking" className="post-cta-button">Book Now</a>
            </div>
        </div>
    );
}