import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import BookingForm from "../components/Home/BookingForm";
import Testimonials from "../components/Home/Testimonials";
import Gallery1 from "../components/Home/Gallery";
//import ContactSection from "../components/Home/ContactSection";
import ServicesShowcase from "../components/Home/ServicesShowcase";
import AccreditationSection from "../components/Home/AccreditationSection";
import Insights from "../components/Home/insights";
import Gallery from  "../components/Home/Gallery";

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <HeroSection />

      {/* ✨ Floating Auto-Scrolling Services Showcase */}
      <section className="home-section light-bg">
        <ServicesShowcase />
      </section>

      {/* About Section */}
      <section className="home-section">
        <AboutSection />
      </section>

      <section className="home-section">
        <Insights />
      </section>

      

      {/* Why Choose Us */}
      <section className="home-section">
        <WhyChooseUs />
      </section>

      <section className="home-section light-bg ">
        <AccreditationSection />
      </section>

      {/* Testimonials */}
      <section className="home-section">
        <Testimonials />
      </section>

     

      <section className="home-section">
        <Gallery1 />
      </section>
      
      
    
      
    </div>
  );
};

export default Home;