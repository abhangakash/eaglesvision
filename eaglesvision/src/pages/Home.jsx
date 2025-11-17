import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import BookingForm from "../components/Home/BookingForm";
import Testimonials from "../components/Home/Testimonials";
import Gallery1 from "../components/Home/Gallery";
import ServicesShowcase from "../components/Home/ServicesShowcase";
import AccreditationSection from "../components/Home/AccreditationSection";
import Insights from "../components/Home/insights";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      {/* --- SEO --- */}
      <Helmet>
        <title>Home | Eagle’s Vision Diagnostics Centre</title>
        <meta 
          name="description" 
          content="Eagle’s Vision Diagnostics Centre offers Digital X-Ray, Portable X-Ray, Pathology, Physiotherapy & home sample collection in Ravet Pune." 
        />
        <meta 
          name="keywords" 
          content="Diagnostic Center Ravet, X-Ray Ravet, Blood Test Pune, Pathology Lab Ravet, PCR Test Pune, Microbiology Lab, Physiotherapy Ravet, Home Sample Collection" 
        />
      </Helmet>

      {/* --- Page Content --- */}
      <div className="home-page">
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

        <section className="home-section light-bg">
          <AccreditationSection />
        </section>

        {/* Testimonials */}
        <section className="home-section">
          <Testimonials />
        </section>

        {/* Gallery */}
        <section className="home-section">
          <Gallery1 />
        </section>
      </div>
    </>
  );
};

export default Home;
