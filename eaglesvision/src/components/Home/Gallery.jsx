import React from "react";
import { Link } from "react-router-dom";
import "../../styles/homegallery.css";

import img1 from "../../assets/img1.JPG";
import img2 from "../../assets/img2.JPG";
import img3 from "../../assets/img3.JPG";
import img4 from "../../assets/img4.JPG";
import img5 from "../../assets/img5.JPG";
import img6 from "../../assets/img6.JPG";

const images = [img1, img2, img3, img4, img5, img6];

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
