import React from "react";
import { Link } from "react-router-dom";
import "../../styles/homegallery.css";

const images = [
  "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544258/img1_eibgwi.jpg",
  "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544271/img2_jabk8y.jpg",
  "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544284/img3_c44r0q.jpg",
  "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544294/img4_deg4yt.jpg",
  "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544304/img5_ybrrrc.jpg",
  "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544313/img6_tfe4jz.jpg",
];

const HomeGallery = () => {
  return (
    <section className="home-gallery">
      <div className="home-gallery-header">
        <h2>Inside Our World-Class Facilities</h2>
        <p>Where innovation meets precision — a glimpse into our trusted lab environment.</p>
      </div>

      <div className="home-gallery-scroll">
        {images.map((img, i) => (
          <div className="home-gallery-item" key={i}>
            <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="home-gallery-cta">
        <Link to="/gallery" className="home-gallery-btn">
          View Full Gallery →
        </Link>
      </div>
    </section>
  );
};

export default HomeGallery;
