import React from "react";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import ServicesSection from "../components/Home/ServicesSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import BookingForm from "../components/Home/BookingForm";
import Testimonials from "../components/Home/Testimonials";
import Gallery from "../components/Home/Gallery";
import ContactSection from "../components/Home/ContactSection";
import ServicesShowcase from "../components/Home/ServicesShowcase";

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

      {/* Full Services Page Preview */}
      <section className="home-section light-bg">
        <ServicesSection />
      </section>

      {/* Why Choose Us */}
      <section className="home-section">
        <WhyChooseUs />
      </section>

      {/* Booking Form */}
      <section className="home-section light-bg">
        <BookingForm />
      </section>

      {/* Testimonials */}
      <section className="home-section">
        <Testimonials />
      </section>

      {/* Gallery */}
      <section className="home-section light-bg">
        <Gallery />
      </section>

      {/* Contact Section */}
      <section className="home-section">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
