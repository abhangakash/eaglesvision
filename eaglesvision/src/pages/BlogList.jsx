import React from "react";
import { Link } from "react-router-dom";
import "../styles/blog.css";

// Example blog data
const blogs = [
  {
    title: "Cholesterol Guide",
    slug: "cholesterol-guide",
    date: "Oct 25, 2025",
    excerpt: "Learn about cholesterol levels, tests, and preventive measures for a healthy heart.",
  },
  {
    title: "Blood Sugar Levels Explained",
    slug: "blood-sugar",
    date: "Oct 18, 2025",
    excerpt: "Understanding blood sugar, testing methods, and tips for managing diabetes effectively.",
  },
  {
    title: "Preparing Samples for Tests",
    slug: "sample-prep",
    date: "Oct 10, 2025",
    excerpt: "Step-by-step guide on how to prepare samples to ensure accurate diagnostic results.",
  },
  {
    title: "X-Ray Preparation Tips",
    slug: "xray-prep",
    date: "Oct 1, 2025",
    excerpt: "Everything you need to know to prepare for X-Ray and imaging procedures.",
  },
  {
    title: "Thyroid Health Awareness",
    slug: "thyroid-health",
    date: "Sep 25, 2025",
    excerpt: "Know the importance of thyroid tests and maintaining optimal thyroid function.",
  },
];

const BlogList = () => {
  return (
    <section className="blog-list-page">
      <header className="blog-header">
        <h1>Our Blog & Health Insights</h1>
        <p>Stay updated with the latest health tips, diagnostics guides, and wellness advice.</p>
      </header>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.slug}>
            <div className="blog-content">
              <p className="blog-date">{blog.date}</p>
              <h2 className="blog-title">
                <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
              </h2>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <Link to={`/blog/${blog.slug}`} className="read-more-btn">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
