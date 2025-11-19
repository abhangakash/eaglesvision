import React from "react";
import "../../styles/ServicesShowcase.css";

const services = [
  { name: "Pathology", img: "pathology_ruqppo.png" },
  { name: "X-Ray", img: "xray_iixsyk.png" },
  { name: "ECG", img: "ecg_mntgny.png" },
  { name: "Ultrasound", img: "ultrasound_adu9vf.png" },
  { name: "Blood Test", img: "bloodtest_hirwqw.png" },
  { name: "CT Scan", img: "ctscan_msrzu8.png" },
  { name: "MRI", img: "mri_pgjhyj.png" },
];

const doubledServices = [...services, ...services];

const ServicesShowcase = () => {
  return (
    <div className="services-wrapper">
      <div className="scroll-container">
        <div className="scroll-content">
          {doubledServices.map((service, index) => (
            <div className="service-item" key={index}>
              <div className="circle-image">
                <img
                  src={`https://res.cloudinary.com/dq8drlcks/image/upload/w_124,h_124,c_fill,f_auto,q_auto/${service.img}`}
                  srcSet={`
                    https://res.cloudinary.com/dq8drlcks/image/upload/w_156,h_156,c_fill,f_auto,q_auto/${service.img} 156w,
                    https://res.cloudinary.com/dq8drlcks/image/upload/w_124,h_124,c_fill,f_auto,q_auto/${service.img} 124w
                  `}
                  sizes="(max-width: 768px) 156px, 124px"
                  alt={service.name}
                  loading="lazy"
                />
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
