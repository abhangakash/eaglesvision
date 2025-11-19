import React from "react";
import "../styles/gallery.css";

import { Helmet } from "react-helmet-async";

export default function Gallery() {
  const images = [
    "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544258/img1_eibgwi.jpg",
    "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544271/img2_jabk8y.jpg",
    "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544284/img3_c44r0q.jpg",
    "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544294/img4_deg4yt.jpg",
    "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544304/img5_ybrrrc.jpg",
    "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544313/img6_tfe4jz.jpg",
    "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763544323/img7_suwasq.jpg",
  ];

  return (
    <>
      <Helmet>
        <title>Gallery | Eagle’s Vision Diagnostics Centre</title>
        <meta
          name="description"
          content="Explore the modern diagnostic facilities at Eagle’s Vision Diagnostics Centre in Ravet Pune."
        />
      </Helmet>

      <div className="gallery-page">
        <section className="gallery-hero">
          <div className="hero-content">
            <h1>Our Modern Diagnostic Centre</h1>
            <p>
              Discover our advanced labs, imaging rooms, and patient-friendly environment
              designed for precision and care.
            </p>
          </div>
        </section>

        <section className="gallery-intro">
          <h2>Explore Our World-Class Facilities</h2>
          <p>
            Every space inside <strong>Eagle’s Vision Diagnostics Centre</strong> is crafted
            for accuracy, hygiene, and modern healthcare.
          </p>
        </section>

        <section className="gallery-grid-section">
          <div className="gallery-grid uniform-grid">
            {images.map((img, index) => (
              <div key={index} className="gallery-item">
                <img
                  src={img}
                  alt={`Facility ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="gallery-footer">
          <p>“Delivering excellence in diagnostics — where every detail matters.”</p>
        </section>
      </div>
    </>
  );
}
