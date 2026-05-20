import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AuthContext } from "../context/AuthContext";
import * as api from "../utils/api";
import "../styles/gallery.css";

gsap.registerPlugin(ScrollTrigger);

const Music = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredMusic, setFilteredMusic] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const categories = ["Traditional", "Dance", "Festive", "Devotional"];

  useEffect(() => {
    // Fetch music
    api
      .getMusic(selectedCategory || "", "")
      .then((res) => {
        setFilteredMusic(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // Animations
    gsap.from(".music-card", {
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".music-gallery",
        start: "top center",
      },
    });
  }, [selectedCategory]);

  const handleDownload = (musicId) => {
    if (!user) {
      navigate("/login");
      return;
    }

    api
      .downloadMusic(musicId)
      .then(() => {
        alert("Download recorded! Audio file would be served here.");
      })
      .catch((err) => alert("Download failed: " + err.message));
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="hero-title">🎵 HO Tribe Folk Music</h1>
          <p className="hero-subtitle">
            Experience the soulful melodies of our ancestors
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section filter-section">
        <div className="container">
          <h2 className="section-title">Browse Music Collection</h2>
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
      <section className="section music-gallery">
        <div className="container">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : filteredMusic.length > 0 ? (
            <div className="grid grid-3">
              {filteredMusic.map((track) => (
                <div key={track._id} className="music-card card">
                  <div className="music-card-header">
                    <div className="music-icon">🎵</div>
                    <span className="category-badge">{track.category}</span>
                  </div>
                  <div className="music-card-content">
                    <h3>{track.title}</h3>
                    <p className="artist">
                      {track.artist || "Traditional Artist"}
                    </p>
                    <p className="description">{track.description}</p>
                    {track.festival && (
                      <p className="festival-tag">🎊 {track.festival}</p>
                    )}
                    <div className="music-stats">
                      <span>⬇️ {track.downloads} downloads</span>
                    </div>
                  </div>
                  <div className="music-actions">
                    {user ? (
                      <>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleDownload(track._id)}
                        >
                          🎧 Listen & Download
                        </button>
                      </>
                    ) : (
                      <p className="login-prompt">Login to download music</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No music found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Music;
