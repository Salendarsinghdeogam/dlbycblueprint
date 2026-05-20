import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import gsap from "gsap";
import "../styles/header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.from("header", {
      duration: 0.8,
      y: -100,
      opacity: 0,
      ease: "power2.out",
    });
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <span className="logo-text">DR. LAKO BADARA</span>
            <span className="logo-subtitle">Youth Club</span>
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? "active" : ""}`} aria-label="Main navigation">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/music" className="nav-link" onClick={closeMenu}>
            Music
          </Link>
          <Link to="/art" className="nav-link" onClick={closeMenu}>
            Art
          </Link>
          <Link to="/scripts" className="nav-link" onClick={closeMenu}>
            Scripts
          </Link>
          <Link to="/festivals" className="nav-link" onClick={closeMenu}>
            Festivals
          </Link>

          {user ? (
            <div className="auth-menu">
              <span className="user-name">{user.name}</span>
              {user.role === "admin" && (
                <Link to="/admin" className="nav-link admin-link" onClick={closeMenu}>
                  Admin Panel
                </Link>
              )}
              <button onClick={handleLogout} className="btn btn-outline">
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-menu">
              <Link to="/login" className="btn nav-login" onClick={closeMenu}>
                Login
              </Link>
              <Link to="/register" className="btn nav-register" onClick={closeMenu}>
                Register
              </Link>
            </div>
          )}
        </nav>

        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
