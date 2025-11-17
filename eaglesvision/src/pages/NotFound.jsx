import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfound.css"; // optional custom styles

export default function NotFound() {
  return (
    <div className="notfound-page">
      <h1>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="home-btn">
        Go Back Home
      </Link>
    </div>
  );
}
