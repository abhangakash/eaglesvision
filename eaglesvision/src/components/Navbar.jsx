import { Link } from "react-router-dom";
import "../styles/main.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">NextGen Digital</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
