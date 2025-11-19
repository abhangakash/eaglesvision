import React from "react";
import "../../styles/ServicesShowcase.css";

// Cloudinary optimized URLs
const services = [
  {
    name: "Pathology",
    img: "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763545498/pathology_ruqppo.png",
  },
  {
    name: "X-Ray",
    img: "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763545535/xray_iixsyk.png",
  },
  {
    name: "ECG",
    img: "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763545566/ecg_mntgny.png",
  },
  {
    name: "Ultrasound",
    img: "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763545519/ultrasound_adu9vf.png",
  },
  {
    name: "Blood Test",
    img: "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763545429/bloodtest_hirwqw.png",
  },
  {
    name: "CT Scan",
    img: "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763545578/ctscan_msrzu8.png",
  },
  {
    name: "MRI",
    img: "https://res.cloudinary.com/dq8drlcks/image/upload/f_auto,q_auto/v1763545488/mri_pgjhyj.png",
  },
];

// Duplicate once to maintain infinite scroll effect
const doubledServices = [...services, ...services];

const ServicesShowcase = () => {
  return (
    <div className="services-wrapper">
      <div className="scroll-container">
        <div className="scroll-content">
          {doubledServices.map((service, index) => (
            <div className="service-item" key={index}>
              <div className="circle-image">
                <img src={service.img} alt={service.name} loading="lazy" />
              </div>
              <p className="service-name">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesShowcase;
