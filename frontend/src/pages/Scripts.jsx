import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { AuthContext } from "../context/AuthContext";
import * as api from "../utils/api";
import "../styles/gallery.css";

const Scripts = () => {
  const [loading, setLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [filteredScripts, setFilteredScripts] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const languages = ["Ho", "Santali", "Mundari", "Other"];

  useEffect(() => {
    // Fetch scripts
    api
      .getScripts(selectedLanguage || "", "")
      .then((res) => {
        setFilteredScripts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // Animations
    gsap.from(".script-card", {
      duration: 0.8,
      y: 40,
      opacity: 0,
      stagger: 0.15,
      ease: "power2.out",
    });
  }, [selectedLanguage]);

  const handleDownload = (scriptId) => {
    if (!user) {
      navigate("/login");
      return;
    }

    api
      .downloadScript(scriptId)
      .then(() => {
        alert("Download recorded! Document would be downloaded here.");
      })
      .catch((err) => alert("Download failed: " + err.message));
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="hero-title">📜 HO Language & Scripts</h1>
          <p className="hero-subtitle">
            Preserve and learn our ancestral language
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section filter-section">
        <div className="container">
          <h2 className="section-title">Language Resources</h2>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${selectedLanguage === "" ? "active" : ""}`}
              onClick={() => setSelectedLanguage("")}
            >
              All Languages
            </button>
            {languages.map((lang) => (
              <button
                key={lang}
                className={`filter-btn ${selectedLanguage === lang ? "active" : ""}`}
                onClick={() => setSelectedLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section script-gallery">
        <div className="container">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : filteredScripts.length > 0 ? (
            <div className="grid grid-2">
              {filteredScripts.map((script) => (
                <div key={script._id} className="script-card card">
                  <div className="script-header">
                    <h3>{script.title}</h3>
                    <span className="language-badge">{script.language}</span>
                  </div>
                  <div className="script-content">
                    <div className="script-category">{script.category}</div>
                    <p className="script-description">{script.description}</p>
                    <div className="script-preview">
                      <p>{script.content.substring(0, 100)}...</p>
                    </div>
                    <div className="script-stats">
                      <span>⬇️ {script.downloads} downloads</span>
                    </div>
                  </div>
                  <div className="script-actions">
                    {user ? (
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDownload(script._id)}
                      >
                        📄 Download
                      </button>
                    ) : (
                      <p className="login-prompt">Login to download scripts</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No scripts found in this language.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Scripts;
