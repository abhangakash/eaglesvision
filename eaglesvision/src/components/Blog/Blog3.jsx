import React from 'react';
import { FaCalendarAlt, FaUserMd, FaChevronLeft } from 'react-icons/fa';
import '../../styles/blog-listing.css'; 

const POST_IMAGE_PLACEHOLDER = "";
const AUTHOR_NAME = "EaglesVision Lab Director";

export default function Blog3() {
    const postData = {
        title: "Preparation Guide for Accurate Lab Sample Collection",
        date: "Oct 10, 2025",
        author: AUTHOR_NAME,
        image: POST_IMAGE_PLACEHOLDER,
        body: (
            <>
                <p>The accuracy of your diagnostic report begins before the sample is even collected. Following proper pre-test protocols ensures that the results reflect your true physiological state, not temporary dietary or activity factors.</p>
                
                <h3>Fasting Tests (Lipid Profile, Blood Sugar)</h3>
                <p>For most fasting blood tests, you must abstain from food and caloric beverages (including juice and coffee with sugar/milk) for **10 to 12 hours** prior to collection. You may drink plain water. This is critical because consuming food can temporarily elevate glucose and triglyceride levels, leading to misleading results.</p>

                <h3>Medications and Supplements</h3>
                <p>Always inform the phlebotomist or our booking desk about any medications or supplements you are taking. While you should generally take prescribed life-saving drugs, certain vitamins or over-the-counter medications can interfere with specific hormone or chemistry tests. **Never stop a prescription without consulting your doctor.**</p>

                <h4>Activity and Stress</h4>
                <p>Heavy exercise or high levels of stress immediately before the test can transiently affect certain markers (like creatinine kinase or white blood cell counts). Try to relax and avoid strenuous activity for 24 hours prior to your sample collection.</p>

                <p className="conclusion-note">At EaglesVision, we ensure highly accurate lab analysis. Help us by ensuring your preparation is just as precise! If you are unsure about any steps, please call our Lab Desk.</p>
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
                <p>Need to book a test? Ask our team about preparation when you schedule!</p>
                <a href="/booking" className="post-cta-button">Book Now</a>
            </div>
        </div>
    );
}