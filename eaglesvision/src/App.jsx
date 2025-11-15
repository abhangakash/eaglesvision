import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/Aboutus";
import Blog from "./pages/Blog";
import BlogList from "./pages/BlogList"; 


import BottomNav from "./components/BottomNav";
import "./styles/main.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/blog" element={<BlogList />} />        {/* Main blog page */}
          <Route path="/blog/:slug" element={<Blog />} />
        </Routes>
      </main>

      {/* ✅ Bottom Navbar visible only on mobile */}
      <div className="mobile-bottom-nav">
        <BottomNav />
      </div>

      <Footer />
    </Router>
  );
}
