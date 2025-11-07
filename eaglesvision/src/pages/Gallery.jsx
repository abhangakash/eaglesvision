import React, { useEffect, useRef, useState } from "react";
import "../styles/gallery.css";

// --- Data Imports ---
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import video1 from "../assets/video1.mp4";

// --- ENHANCED DATA STRUCTURE ---
const IMAGES = [
  {
    id: 1,
    src: img1,
    title: "State-of-the-Art 3T MRI",
    category: "Machines",
    tagline: "Unparalleled clarity for precise diagnosis.",
    description:
      "Our latest generation 3 Tesla MRI scanner provides exceptionally high-resolution images of organs, soft tissues, bone, and virtually all internal body structures, crucial for complex neurological and orthopedic studies. We prioritize patient comfort with a wider bore design.",
  },
  {
    id: 2,
    src: img2,
    title: "Advanced Pathology Lab",
    category: "Labs",
    tagline: "Accuracy you can trust, managed by expert pathologists.",
    description:
      "A fully automated and NABL-accredited pathology laboratory equipped with high-throughput analyzers. This ensures rapid, reliable, and precise results for all biochemical, hematological, and immunological tests.",
  },
  {
    id: 3,
    src: img3,
    title: "Low-Dose CT Imaging Suite",
    category: "Machines",
    tagline: "Reduced radiation, maximized diagnostic yield.",
    description:
      "Featuring a multi-slice CT scanner with advanced dose reduction technology, minimizing patient exposure while providing crystal-clear cross-sectional images for trauma, vascular, and oncological evaluations.",
  },
  {
    id: 4,
    src: img4,
    title: "Elegant Patient Reception",
    category: "Reception",
    tagline: "A comfortable and calm start to your visit.",
    description:
      "Designed for tranquility and efficiency, our spacious reception area ensures a smooth check-in process. Our dedicated support staff are available to guide you through your appointment and answer any immediate queries.",
  },
  {
    id: 5,
    src: img5,
    title: "4D High-Resolution Ultrasound",
    category: "Machines",
    tagline: "Dynamic imaging for early and detailed screening.",
    description:
      "The dedicated Ultrasound suite is equipped with premium systems offering 3D/4D imaging capabilities, essential for obstetric, abdominal, and vascular studies, ensuring detailed visualization without radiation.",
  },
  {
    id: 6,
    src: img6,
    title: "Sterile Phlebotomy Bay",
    category: "Labs",
    tagline: "Comfort and hygiene in every sample collection.",
    description:
      "Our phlebotomy section adheres to the highest standards of sterilization and patient care. Experienced technicians ensure a quick, painless, and safe blood collection experience in a clean, professional environment.",
  },
  {
    id: 7,
    src: img7,
    title: "Our Expert Team at Work",
    category: "Staff",
    tagline: "Compassion meets world-class expertise.",
    description:
      "Our radiologists, pathologists, and technical staff are certified experts, continually trained on the latest protocols. This image captures their collaborative spirit, the foundation of our high-quality diagnostic services.",
  },
];

const CATEGORIES = ["All", "Machines", "Labs", "Reception", "Staff"];

const VIDEOS = [
  {
    id: 1,
    title: "A Tour of Our Center & Advanced Technology",
    url: video1,
    description:
      "Watch a brief walkthrough to see our commitment to technology and patient comfort in action. Understand what makes our center the benchmark for diagnostic excellence in the region.",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filtered, setFiltered] = useState(IMAGES);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gridRef = useRef(null);

  // --- FILTER LOGIC ---
  useEffect(() => {
    if (activeCategory === "All") setFiltered(IMAGES);
    else setFiltered(IMAGES.filter((i) => i.category === activeCategory));

    setIsModalOpen(false);
    setSelectedIndex(null);
  }, [activeCategory]);

  // --- REVEAL ON SCROLL ---
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const items = grid.querySelectorAll(".gallery-card");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.12 }
    );
    items.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [filtered]);

  // --- MODAL HANDLERS ---
  function openModal(index) {
    setSelectedIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setIsModalOpen(false);
    setSelectedIndex(null);
    document.body.style.overflow = "";
  }
  function prevImage() {
    setSelectedIndex((idx) => (idx - 1 + filtered.length) % filtered.length);
  }
  function nextImage() {
    setSelectedIndex((idx) => (idx + 1) % filtered.length);
  }

  // --- KEYBOARD SUPPORT ---
  useEffect(() => {
    function handler(e) {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    }
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isModalOpen, filtered.length]);

  // --- BACK TO TOP ---
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="gallery-section container">
      {/* HERO */}
      <div className="gallery-hero">
        <h1 className="gallery-title-main">
          Our <span>World-Class</span> Facilities
        </h1>
        <p className="gallery-sub">
          Step inside to see the advanced technology and patient-centric
          environment that define diagnostic excellence.
        </p>
      </div>

      {/* --- VIDEO SECTION ABOVE GALLERY --- */}
      <div className="video-showcase">
        {VIDEOS.map((video) => (
          <div key={video.id} className="video-card">
            <h2 className="video-title">🎬 {video.title}</h2>
            <p className="video-description">{video.description}</p>
            <div className="video-embed-container">
              <video
                src={video.url}
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <a href="#" className="contact-link">
              Request a Consultation →
            </a>
          </div>
        ))}
      </div>

      <hr className="gallery-divider" />

      {/* FILTER BUTTONS */}
      <div className="filters" role="tablist" aria-label="Gallery categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
            aria-pressed={activeCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <div className="gallery-grid" ref={gridRef}>
        {filtered.map((img, idx) => (
          <article
            key={img.id}
            className="gallery-card"
            onClick={() => openModal(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openModal(idx)}
          >
            <div className="gallery-img-wrap">
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="card-overlay">
                <span className="view-text">View Details</span>
              </div>
            </div>
            <div className="card-body">
              <h3 className="card-title">{img.title}</h3>
              <p className="card-tagline">{img.tagline}</p>
            </div>
          </article>
        ))}
      </div>

      {/* MODAL */}
      {isModalOpen && selectedIndex !== null && (
        <div
          className="gv-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={closeModal}
        >
          <div className="gv-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="gv-close" onClick={closeModal} aria-label="Close">
              &times;
            </button>

            <button className="gv-prev" onClick={prevImage} aria-label="Previous image">
              ‹
            </button>

            <div className="gv-content-wrap">
              <div className="gv-img-wrap">
                <img src={filtered[selectedIndex].src} alt={filtered[selectedIndex].title} />
              </div>
              <div className="gv-details">
                <h4>{filtered[selectedIndex].title}</h4>
                <p className="gv-tagline-detail">{filtered[selectedIndex].tagline}</p>
                <hr />
                <p className="gv-description-detail">
                  {filtered[selectedIndex].description}
                </p>
                <span className="gv-category-detail">
                  <strong>Category:</strong> {filtered[selectedIndex].category}
                </span>
              </div>
            </div>

            <button className="gv-next" onClick={nextImage} aria-label="Next image">
              ›
            </button>
          </div>
        </div>
      )}

      {/* BACK TO TOP */}
      <button
        className={`back-to-top ${showTop ? "visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </section>
  );
}
