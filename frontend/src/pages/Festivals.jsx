import React, { useState, useEffect } from "react";
import gsap from "gsap";
import * as api from "../utils/api";
import "../styles/festivals.css";

const Festivals = () => {
  const [festivals, setFestivals] = useState([]);
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getFestivals()
      .then((res) => {
        setFestivals(res.data);
        if (res.data.length > 0) {
          setSelectedFestival(res.data[0]);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));

    // Animations
    gsap.from(".festival-selector-item", {
      duration: 0.8,
      x: -50,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out",
    });

    gsap.from(".festival-details", {
      duration: 0.8,
      x: 50,
      opacity: 0,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="festivals-page">
      {/* Hero Section */}
      <section className="festivals-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <h1 className="hero-title">🎉 Sacred Festivals of HO Tribe</h1>
          <p className="hero-subtitle">
            Celebrating Culture, Community, and Spirituality
          </p>
        </div>
      </section>

      {/* Festivals Section */}
      <section className="section festivals-detail">
        <div className="container">
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="festivals-container grid grid-2">
              <div className="festival-selector">
                <h2>Our Festivals</h2>
                <div className="festival-list">
                  {festivals.map((festival) => (
                    <div
                      key={festival._id}
                      className={`festival-selector-item ${selectedFestival?._id === festival._id ? "active" : ""}`}
                      onClick={() => setSelectedFestival(festival)}
                    >
                      <div className="festival-item-header">
                        <h4>{festival.name}</h4>
                        <span className="month-badge">{festival.month}</span>
                      </div>
                      <p>{festival.description?.substring(0, 60)}...</p>
                    </div>
                  ))}
                </div>
              </div>

              {selectedFestival && (
                <div className="festival-details">
                  <div className="festival-hero-image">
                    🎊 {selectedFestival.name}
                  </div>
                  <h2>{selectedFestival.name}</h2>
                  <div className="festival-meta">
                    <span className="month">📅 {selectedFestival.month}</span>
                  </div>

                  <div className="festival-section-info">
                    <h3>About the Festival</h3>
                    <p>{selectedFestival.description}</p>
                  </div>

                  <div className="festival-section-info">
                    <h3>Significance</h3>
                    <p>{selectedFestival.significence}</p>
                  </div>

                  {selectedFestival.danceTypes?.length > 0 && (
                    <div className="festival-section-info">
                      <h3>Traditional Dances</h3>
                      <ul>
                        {selectedFestival.danceTypes.map((dance, idx) => (
                          <li key={idx}>💃 {dance}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedFestival.activities?.length > 0 && (
                    <div className="festival-section-info">
                      <h3>Activities</h3>
                      <ul>
                        {selectedFestival.activities.map((activity, idx) => (
                          <li key={idx}>🎯 {activity}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedFestival.foods?.length > 0 && (
                    <div className="festival-section-info">
                      <h3>Traditional Foods</h3>
                      <ul>
                        {selectedFestival.foods.map((food, idx) => (
                          <li key={idx}>🍽️ {food}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedFestival.traditions?.length > 0 && (
                    <div className="festival-section-info">
                      <h3>Customs & Traditions</h3>
                      <ul>
                        {selectedFestival.traditions.map((tradition, idx) => (
                          <li key={idx}>✨ {tradition}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Festival Information Section */}
      <section className="section festival-info-section">
        <div className="container">
          <h2 className="section-title">Festival Calendar</h2>
          <div className="festival-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">🌸</div>
              <div className="timeline-content">
                <h3>Baha Parab (Flower Festival)</h3>
                <p>🗓️ March-April</p>
                <p>
                  Celebrates the blooming of flowers and new growth. It
                  strengthens community bonds with singing, dancing, and
                  traditional games.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">🎭</div>
              <div className="timeline-content">
                <h3>Mage Parab (Spring Festival)</h3>
                <p>🗓️ February-March</p>
                <p>
                  Marks the New Year and beginning of sowing season. A time of
                  joy, renewal, and community gathering with traditional dances
                  and feasts.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">🌾</div>
              <div className="timeline-content">
                <h3>Chuti Para (Harvest Festival)</h3>
                <p>🗓️ September-October</p>
                <p>
                  Celebrates the harvest season. A time to thank nature and
                  ancestors with performances and family gatherings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Festivals;
