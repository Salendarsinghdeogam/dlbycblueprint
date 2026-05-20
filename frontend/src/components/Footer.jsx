import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content grid grid-3">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>
              DR. LAKO BADARA YOUTH CLUB preserves and promotes the rich
              cultural heritage of the HO tribe.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/music">Music</Link>
              </li>
              <li>
                <Link to="/art">Art</Link>
              </li>
              <li>
                <Link to="/scripts">Scripts</Link>
              </li>
              <li>
                <Link to="/festivals">Festivals</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect With Us</h4>
            <ul className="social-links">
              <li>
                <a href="#facebook">Facebook</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
              <li>
                <a href="#instagram">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 DR. LAKO BADARA YOUTH CLUB. All rights reserved.</p>
          <p className="ornament">
            🎶 Preserving Heritage Through Art and Culture 🎶
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
