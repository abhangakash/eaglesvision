import React from 'react';
import { FaCalendarAlt, FaUserMd, FaChevronLeft } from 'react-icons/fa';
import '../../styles/blog-listing.css'; 

// Cloudinary optimized image (f_auto + q_auto)
const POST_IMAGE_PLACEHOLDER = (
    <img 
        src="https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763622235/hdl-ldl-cholesterol-types-blue-yellow-ball-shapes-good-bad-cholesterin-concept-high-low-density-lipoprotein-icons-isolated-289425165_nptbzc.jpg" 
        alt="HDL and LDL Cholesterol Illustration"
        style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        loading="lazy"
    />
);

const AUTHOR_NAME = "EaglesVision Health Team";

export default function Blog1() {
    const postData = {
        title: "Decoding Your Lipid Profile: Beyond Cholesterol",
        date: "Oct 25, 2025",
        author: AUTHOR_NAME,
        image: POST_IMAGE_PLACEHOLDER,
        body: (
            <>
                <p>Welcome to our deep dive into the <strong>Lipid Profile Test</strong>. While most people focus narrowly on total cholesterol, understanding the nuances of HDL, LDL, and Triglycerides is crucial for accurate risk assessment and preventive cardiovascular care.</p>
                
                <h3>Understanding LDL ("Bad" Cholesterol)</h3>
                <p>Low-Density Lipoprotein (LDL) carries cholesterol to your arteries. High levels are problematic as they contribute significantly to plaque buildup (atherosclerosis), narrowing the arteries and increasing heart attack risk. Our experts often emphasize therapeutic goals that may require you to maintain your LDL significantly below 100 mg/dL.</p>

                <h3>Understanding HDL ("Good" Cholesterol)</h3>
                <p>High-Density Lipoprotein (HDL) acts like a scavenger. It moves excess cholesterol away from the body tissues and back to the liver for removal, protecting the arteries. Higher HDL levels (ideally above 60 mg/dL) are strongly protective against heart disease.</p>

                <h4>What About Triglycerides?</h4>
                <p>Triglycerides are a type of fat found in your blood, which the body uses for energy. High levels are often influenced by diet (especially high sugar and refined carbs), obesity, and sedentary lifestyle. Elevated triglycerides are an independent risk factor for heart disease and often require specialized attention beyond cholesterol management.</p>

                <p className="conclusion-note">If your recent lipid profile showed abnormal results, schedule a consultation with your physician. Our role at EaglesVision is to provide the <strong>precision data</strong> you need for informed health decisions. Don't hesitate to reach out to our desk if you have questions about preparation.</p>
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
                <p>Need a Lipid Profile Test? Book your appointment or Home Sample Collection today!</p>
                <a href="/booking" className="post-cta-button">Book Now</a>
            </div>
        </div>
    );
}
