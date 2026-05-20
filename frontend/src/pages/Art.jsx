import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuthContext } from "../context/AuthContext";
import * as api from "../utils/api";
import "../styles/gallery.css";

gsap.registerPlugin(ScrollTrigger);

const Art = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredArt, setFilteredArt] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const categories = ["Paintings", "Sculptures", "Crafts", "Traditional Art"];

  useEffect(() => {
    // Fetch art
    api
      .getArt(selectedCategory || "", "")
      .then((res) => {
        setFilteredArt(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // Animations
    gsap.from(".art-card", {
      duration: 0.8,
      scale: 0.8,
      opacity: 0,
      stagger: 0.15,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".art-gallery",
        start: "top center",
      },
    });
  }, [selectedCategory]);

  const handleDownload = (artId) => {
    if (!user) {
      navigate("/login");
      return;
    }

    api
      .downloadArt(artId)
      .then(() => {
        alert("Download recorded! Image would be downloaded here.");
      })
      .catch((err) => alert("Download failed: " + err.message));
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="hero-title">🎨 Traditional HO Tribal Art</h1>
          <p className="hero-subtitle">
            Explore the artistic heritage of our community
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section filter-section">
        <div className="container">
          <h2 className="section-title">Art Collection</h2>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${selectedCategory === "" ? "active" : ""}`}
              onClick={() => setSelectedCategory("")}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section art-gallery">
        <div className="container">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : filteredArt.length > 0 ? (
            <div className="grid grid-3">
              {filteredArt.map((artwork) => (
                <div key={artwork._id} className="art-card card">
                  <div className="art-image-container">
                    <div className="art-image-placeholder">
                      🎨 {artwork.title}
                    </div>
                  </div>
                  <div className="art-content">
                    <h3>{artwork.title}</h3>
                    <p className="artist">
                      {artwork.artist || "Traditional Artist"}
                    </p>
                    <p className="description">{artwork.description}</p>
                    <span className="category-badge">{artwork.category}</span>
                    {artwork.festival && (
                      <p className="festival-tag">🎊 {artwork.festival}</p>
                    )}
                    <div className="art-stats">
                      <span>⬇️ {artwork.downloads} downloads</span>
                    </div>
                  </div>
                  <div className="art-actions">
                    {user ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDownload(artwork._id)}
                      >
                        🖼️ Download
                      </button>
                    ) : (
                      <p className="login-prompt">Login to download art</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No art found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Art;
