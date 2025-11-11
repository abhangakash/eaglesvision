import React from 'react';
import { FaCalendarAlt, FaUserMd, FaChevronLeft } from 'react-icons/fa';
import '../../styles/blog-listing.css'; 

const POST_IMAGE_PLACEHOLDER = "";
const AUTHOR_NAME = "EaglesVision X-Ray Specialist";

export default function Blog4() {
    const postData = {
        title: "Preparing for an X-Ray: Ensuring the Clearest Diagnostic Image",
        date: "Oct 01, 2025",
        author: AUTHOR_NAME,
        image: POST_IMAGE_PLACEHOLDER,
        body: (
            <>
                <p>Digital X-Ray is a fundamental diagnostic tool, offering clear images of bones and soft tissues. While preparation is generally minimal, a few simple steps ensure you get the sharpest image possible for accurate diagnosis.</p>
                
                <h3>Remove All Metal Objects</h3>
                <p>The most important step is removing all metallic items from the area being scanned. This includes jewelry, zippers, metal buttons, hairpins, belts, and glasses. Metal absorbs X-rays, creating bright white spots that can obscure critical diagnostic details.</p>

                <h3>Wear Loose, Comfortable Clothing</h3>
                <p>We recommend wearing loose, easily removable clothing. Depending on the area being imaged, you may be asked to change into a gown. If you must wear your own clothes, ensure they are free of any metal components.</p>

                <h4>Pregnancy Precaution</h4>
                <p>If you are pregnant or suspect you may be pregnant, it is **absolutely essential** to inform the technician and your referring physician immediately. While X-rays use low-dose radiation, we take every necessary precaution, which may include postponing the test or using specialized shielding.</p>

                <p className="conclusion-note">Our state-of-the-art Digital X-Ray facility provides rapid, high-resolution imaging. Following these simple steps ensures the quality and speed of your diagnostic process.</p>
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
                <p>Need a Digital X-Ray or Portable X-Ray? Contact our desk today!</p>
                <a href="/booking" className="post-cta-button">Book Now</a>
            </div>
        </div>
    );
}