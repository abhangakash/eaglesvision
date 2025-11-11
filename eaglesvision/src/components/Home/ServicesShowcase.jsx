import React from "react";
import "../../styles/ServicesShowcase.css";
import pathology from "../../assets/pathology.png";
import xray from "../../assets/xray.png";
import ecg from "../../assets/ecg.png";
import ultrasound from "../../assets/ultrasound.png";
import bloodtest from "../../assets/bloodtest.png";
import ctscan from "../../assets/ctscan.png";
import mri from "../../assets/mri.png";
const services = [
  { name: "Pathology", img: pathology },
  { name: "X-Ray", img: xray },
  { name: "ECG", img: ecg },
  { name: "Ultrasound", img: ultrasound },
  { name: "Blood Test", img: bloodtest },
  { name: "CT Scan", img: ctscan },
  { name: "MRI", img: mri },
   { name: "Pathology", img: pathology },
  { name: "X-Ray", img: xray },
  { name: "ECG", img: ecg },
  { name: "Ultrasound", img: ultrasound },
  { name: "Blood Test", img: bloodtest },
  { name: "CT Scan", img: ctscan },
  { name: "MRI", img: mri },
];

const ServicesShowcase = () => {
  // Duplicate the list twice for smooth infinite scroll illusion
  const doubledServices = [...services, ...services];

  return (
    <div className="services-wrapper">
      <div className="scroll-container">
        <div className="scroll-content">
          {doubledServices.map((service, index) => (
            <div className="service-item" key={index}>
              <div className="circle-image">
                <img src={service.img} alt={service.name} />
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