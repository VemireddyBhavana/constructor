import React from 'react';
import Logo from '../Common/Logo';

const Footer = () => {
  return (
    <footer className="footer-section section-container">
      <div className="footer-grid">
        <div className="footer-col">
          <Logo className="dark" />
        </div>
        <div className="footer-col">
          <h3>About Us</h3>
          <p>At Real Estate, we pride ourselves on being a trusted and reputable name in the real estate industry with years of experience.</p>
        </div>
        <div className="footer-col">
          <h3>Contact Info</h3>
          <div className="contact-links">
            <a href="#">13, Fifthe Avenue, New York, NY 101660</a>
            <a href="mailto:contact@info.com">contact@info.com</a>
            <a href="tel:5553454599">555-345-4599</a>
          </div>
        </div>
        <div className="footer-col">
          <h3>Property Search</h3>
          <p>Explore our diverse portfolio of real estate opportunities.</p>
          <div className="footer-search">
            <input type="text" placeholder="Search Properties" />
            <button className="footer-search-btn">🔍</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Copyright © 2026 Real Estate Company</p>
        <div className="footer-bottom-right">
          <div className="footer-socials">
            <a href="#">🐦</a>
            <a href="#">📌</a>
            <a href="#">▶️</a>
            <a href="#">📷</a>
          </div>
          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
