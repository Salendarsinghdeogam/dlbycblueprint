import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as api from "../utils/api";
import "../styles/home.css";

gsap.registerPlugin(ScrollTrigger);

const heroBackgroundImage =
  "https://scontent.fbbi2-1.fna.fbcdn.net/v/t39.30808-6/491922742_1113434384148920_8775778473344191008_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_gW0h5we9mYQ7kNvwF4VP_6&_nc_oc=AdqMXaOvn4K8V-PfAk-bXTuSL_oSj6ketO5KpcxybTY24fF0gRaS_Lbak1nu2lk_sN5XU-iRe1DdZHSR8guwIBhm&_nc_zt=23&_nc_ht=scontent.fbbi2-1.fna&_nc_gid=Fm3fH7w_S09Dz4kl52TZOg&_nc_ss=7b289&oh=00_Af4RlQq2grsvdMtz_U-hbGQKR7PPzWMhCMFNsUwxfyEwAw&oe=6A132EF9";

const heroTitle = "DR. LAKO BADARA YOUTH CLUB";
const heroTitleFont = '"Poppins", "Segoe UI", Arial, sans-serif';

const dummyFestivalImages = [
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
];

const fallbackFestivals = [
  {
    _id: "mage-parab-demo",
    name: "Mage Parab",
    month: "February - March",
    description:
      "A spring celebration for renewal, sowing season, music, and community gatherings.",
    significence: "Marks a joyful new beginning and honors community bonds.",
    imageUrl: dummyFestivalImages[0],
  },
  {
    _id: "baha-parab-demo",
    name: "Baha Parab",
    month: "March - April",
    description:
      "A flower festival celebrating nature, growth, songs, dances, and shared meals.",
    significence: "Celebrates new blossoms and gratitude toward nature.",
    imageUrl: dummyFestivalImages[1],
  },
  {
    _id: "chuti-para-demo",
    name: "Chuti Para",
    month: "September - October",
    description:
      "A harvest festival filled with folk music, dance, family visits, and thanksgiving.",
    significence: "Honors the harvest and the blessings of land and ancestors.",
    imageUrl: dummyFestivalImages[2],
  },
];

const danceImages = [
  "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=80",
];

const Home = () => {
  const [festivals, setFestivals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch festivals
    api
      .getFestivals()
      .then((res) => {
        setFestivals(
          Array.isArray(res.data) && res.data.length
            ? res.data
            : fallbackFestivals,
        );
        setLoading(false);
      })
      .catch(() => {
        setFestivals(fallbackFestivals);
        setLoading(false);
      });

    // GSAP animations
    gsap.from(".hero-content", {
      duration: 1,
      y: 50,
      ease: "power2.out",
    });

    gsap.from(".festival-card", {
      duration: 1,
      y: 30,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".festivals-section",
        start: "top center",
      },
    });

    gsap.from(".feature-card", {
      duration: 1,
      scale: 0.8,
      stagger: 0.15,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".features-section",
        start: "top center",
      },
    });
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ "--hero-bg-image": `url("${heroBackgroundImage}")` }}
      >
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title" style={{ fontFamily: heroTitleFont }}>
            {heroTitle}
          </h1>
          <p className="hero-subtitle">
            Preserving the Rich Heritage of HO Tribe Culture
          </p>
          <p className="hero-description">
            Celebrate the timeless beauty of folk music, traditional art, sacred
            language, and ancient scripts
          </p>
          <div className="hero-buttons">
            <Link to="/music" className="btn btn-primary">
              Explore Music
            </Link>
            <Link to="/art" className="btn btn-secondary">
              View Art
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="section welcome-section">
        <div className="container">
          <div className="grid grid-2">
            <div className="welcome-text">
              <h2>Welcome to Our Cultural Hub</h2>
              <p>
                The HO tribe, one of the indigenous communities of India, has a
                rich tapestry of culture, art, and traditions. Our platform is
                dedicated to preserving and promoting the unique aspects of HO
                culture.
              </p>
              <p>
                From traditional music and dance to sacred scripts and beautiful
                artwork, explore the vibrant world of HO tribal heritage.
              </p>
              <Link to="/register" className="btn btn-primary">
                Join Our Community
              </Link>
            </div>
            <div className="welcome-image">
              <img
                className="featured-image"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Ho_Tribal_Lady.jpg/500px-Ho_Tribal_Lady.jpg"
                alt="Cultural celebration"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Our Culture</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">🎵</div>
              <h3>Folk Music</h3>
              <p>
                Experience the soulful melodies and rhythms of HO tribal music
                passed down through generations.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Traditional Art</h3>
              <p>
                Discover intricate paintings, sculptures, and crafts that
                reflect the artistic spirit of the HO community.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📜</div>
              <h3>Language & Scripts</h3>
              <p>
                Learn about the HO language and ancient scripts that preserve
                our cultural identity and wisdom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Festivals Section */}
      <section className="section festivals-section">
        <div className="container">
          <h2 className="section-title festival-section-title">
            Sacred Festivals of HO Tribe
          </h2>

          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-3">
                {festivals.map((festival, index) => (
                  <div key={festival._id} className="festival-card">
                    <img
                      className="festival-image"
                      src={
                        festival.imageUrl ||
                        dummyFestivalImages[index % dummyFestivalImages.length]
                      }
                      alt={festival.name}
                      onError={(event) => {
                        event.currentTarget.src =
                          dummyFestivalImages[
                            index % dummyFestivalImages.length
                          ];
                      }}
                    />
                    <div className="festival-content">
                      <h3>{festival.name}</h3>
                      <p className="festival-month">🗓️ {festival.month}</p>
                      <p className="festival-desc">{festival.description}</p>
                      <div className="festival-details">
                        <strong>Significance:</strong>
                        <p>{festival.significence}</p>
                      </div>
                      <Link
                        to={`/festivals/${festival._id}`}
                        className="btn btn-outline"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="festival-details-container">
                <h3 className="section-title">Festival Celebrations</h3>
                <div className="festival-info-grid grid-2">
                  <div className="festival-info">
                    <h4>🎉 Mage Parab</h4>
                    <p>
                      The Spring Festival (February-March) celebrates the New
                      Year and marks the beginning of sowing season. It is a
                      time of joy, renewal, and community gathering with
                      traditional dances and feasts.
                    </p>
                  </div>
                  <div className="festival-info">
                    <h4>🌾 Baha Parab</h4>
                    <p>
                      The Flower Festival (March-April) celebrates the blooming
                      of flowers and new growth. This festival strengthens bonds
                      and is marked by singing, dancing, and traditional games.
                    </p>
                  </div>
                  <div className="festival-info">
                    <h4>🌽 Chuti Para</h4>
                    <p>
                      The Harvest Festival (September-October) celebrates the
                      harvest season. It is a time to thank nature and ancestors
                      for the bountiful harvest with performances and family
                      gatherings.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Dance Section */}
      <section className="section dance-section">
        <div className="container">
          <h2 className="section-title">Traditional Dances</h2>
          <div className="grid grid-2">
            <div className="dance-card">
              <img
                className="dance-image"
                src={danceImages[0]}
                alt="Mage Parab Dance"
              />
              <h3>Mage Parab Dance</h3>
              <p>
                The vibrant spring festival dance performed during Mage Parab
                with rhythmic movements and traditional costumes.
              </p>
            </div>
            <div className="dance-card">
              <img
                className="dance-image"
                src={danceImages[1]}
                alt="Baha Parab Dance"
              />
              <h3>Baha Parab Dance</h3>
              <p>
                A graceful celebration dance that honors nature and spring,
                featuring synchronized group movements.
              </p>
            </div>
            <div className="dance-card">
              <img
                className="dance-image"
                src={danceImages[2]}
                alt="Chuti Para Dance"
              />
              <h3>Chuti Para Dance</h3>
              <p>
                The joyful harvest dance celebrating the bounty of nature with
                energetic steps and folk music.
              </p>
            </div>
            <div className="dance-card">
              <img
                className="dance-image"
                src={danceImages[3]}
                alt="Traditional War Dance"
              />
              <h3>Traditional War Dance</h3>
              <p>
                An ancient warrior dance that depicts the courage and valor of
                HO tribal warriors and ancestors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Explore HO Culture?</h2>
            <p>
              Sign up to access exclusive music, art, and cultural resources
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-large">
                Create Account
              </Link>
              <Link to="/music" className="btn btn-outline btn-large">
                Browse Content
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
