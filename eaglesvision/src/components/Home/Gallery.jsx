// import React from "react";
// import "../styles/gallery.css";

// const Gallery = () => {
//   const images = [
//     { src: "/images/lab1.jpg", alt: "Modern Lab" },
//     { src: "/images/lab2.jpg", alt: "MRI Room" },
//     { src: "/images/lab3.jpg", alt: "CT Scan Equipment" },
//     { src: "/images/lab4.jpg", alt: "Pathology Team" },
//     { src: "/images/lab5.jpg", alt: "Reception Area" },
//     { src: "/images/lab6.jpg", alt: "Diagnostic Room" },
//   ];

//   return (
//     <section className="gallery" id="gallery">
//       <div className="gallery-container">
//         <h2 className="gallery-title">Our Facility Gallery</h2>
//         <p className="gallery-subtitle">
//           Take a glimpse inside our world-class diagnostic center.
//         </p>

//         <div className="gallery-grid">
//           {images.map((img, index) => (
//             <div className="gallery-item" key={index}>
//               <img src={img.src} alt={img.alt} />
//               <div className="overlay">
//                 <span>{img.alt}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;
