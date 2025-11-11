import React, { useEffect, useRef, useState } from "react";
import "../styles/gallery.css";
import img1 from "../assets/img1.JPG";
import img2 from "../assets/img2.JPG";
import img3 from "../assets/img3.JPG";
import img4 from "../assets/img4.JPG";
import img5 from "../assets/img5.JPG";
import img6 from "../assets/img6.JPG";
import img7 from "../assets/img7.JPG";
import video1 from "../assets/video1.MP4";

// --- IMAGE & VIDEO DATA ---
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

  // --- Filter Logic ---
  useEffect(() => {
    setFiltered(activeCategory === "All" ? IMAGES : IMAGES.filter((i) => i.category === activeCategory));
    setIsModalOpen(false);
    setSelectedIndex(null);
  }, [activeCategory]);

  // --- Intersection Observer for Reveal ---
  useEffect(() => {
    const items = gridRef.current?.querySelectorAll(".gallery-card");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    items?.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [filtered]);

  // --- Modal Handlers ---
  const openModal = (idx) => { setSelectedIndex(idx); setIsModalOpen(true); document.body.style.overflow = "hidden"; };
  const closeModal = () => { setSelectedIndex(null); setIsModalOpen(false); document.body.style.overflow = ""; };
  const prevImage = () => setSelectedIndex((idx) => (idx - 1 + filtered.length) % filtered.length);
  const nextImage = () => setSelectedIndex((idx) => (idx + 1) % filtered.length);

  // --- Keyboard Support ---
  useEffect(() => {
    const handler = (e) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isModalOpen, filtered.length]);

  // --- Back to Top ---
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const scrollHandler = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <section className="gallery-section container">
      {/* HERO */}
      <div className="gallery-hero">
        <h1 className="gallery-title-main">
          Our <span>World-Class</span> Facilities
        </h1>
        <p className="gallery-sub">
          Step inside to see the advanced technology and patient-centric environment that define diagnostic excellence.
        </p>
      </div>

      {/* VIDEO SHOWCASE */}
      <div className="video-showcase">
        {VIDEOS.map((v) => (
          <div key={v.id} className="video-card">
            <h2 className="video-title">🎬 {v.title}</h2>
            <p className="video-description">{v.description}</p>
            <div className="video-embed-container">
              <video src={v.url} controls playsInline width="100%" />
            </div>
            <a href="#" className="contact-link">Request a Consultation →</a>
          </div>
        ))}
      </div>

      <hr className="gallery-divider" />

      {/* FILTERS */}
      <div className="filters">
        {CATEGORIES.map((cat) => (
          <button key={cat} className={`filter-btn ${activeCategory === cat ? "active" : ""}`} onClick={() => setActiveCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <div className="gallery-grid" ref={gridRef}>
        {filtered.map((img, idx) => (
          <article key={img.id} className="gallery-card" onClick={() => openModal(idx)}>
            <div className="gallery-img-wrap">
              <img src={img.src} alt={img.title} />
              <div className="card-overlay"><span className="view-text">View Details</span></div>
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
        <div className="gv-modal" onClick={closeModal}>
          <div className="gv-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="gv-close" onClick={closeModal}>&times;</button>
            <button className="gv-prev" onClick={prevImage}>‹</button>
            <div className="gv-content-wrap">
              <div className="gv-img-wrap">
                <img src={filtered[selectedIndex].src} alt={filtered[selectedIndex].title} />
              </div>
              <div className="gv-details">
                <h4>{filtered[selectedIndex].title}</h4>
                <p>{filtered[selectedIndex].tagline}</p>
                <hr />
                <p>{filtered[selectedIndex].description}</p>
                <span><strong>Category:</strong> {filtered[selectedIndex].category}</span>
              </div>
            </div>
            <button className="gv-next" onClick={nextImage}>›</button>
          </div>
        </div>
      )}

      
    </section>
  );
}
