// src/pages/Blog.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Blog1 from "../components/Blog/Blog1";
import Blog2 from "../components/Blog/Blog2";
import Blog3 from "../components/Blog/Blog3";
import Blog4 from "../components/Blog/Blog4";
import Blog5 from "../components/Blog/Blog5";

const Blog = () => {
  const { slug } = useParams();

  const blogMap = {
    "cholesterol-guide": <Blog1 />,
    "blood-sugar": <Blog2 />,
    "sample-prep": <Blog3 />,
    "xray-prep": <Blog4 />,
    "thyroid-health": <Blog5 />,
  };

  return (
    <div className="blog-page">
      {blogMap[slug] || <p>Sorry, this article could not be found.</p>}
    </div>
  );
};

export default Blog;
