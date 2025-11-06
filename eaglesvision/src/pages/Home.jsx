import { Link } from "react-router-dom";
import "../styles/main.css";

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h1>We Build Modern Websites That Build Businesses 🚀</h1>
        <p>Creative digital solutions for startups and brands.</p>
        <Link to="/booking" className="btn">Get a Free Quote</Link>
      </div>
    </section>
  );
}

