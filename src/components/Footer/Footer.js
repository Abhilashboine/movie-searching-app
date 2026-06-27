import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>🎬 MovieHub</h2>
          <p>Discover your favorite movies.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>

          <a href="/favorites">Favorites</a>

          <a href="/login">Login</a>

          <a href="/register">Register</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 moviehub@gmail.com</p>

          <p>📱 +91 9876543210</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 MovieHub | Developed by Abhilash
      </p>

    </footer>
  );
}

export default Footer;