import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Common/Logo';

const Footer = () => {
  const [showLiveFeed, setShowLiveFeed] = useState(false);

  return (
    <footer className="footer-section section-container">
      <div className="footer-grid">
        <div className="footer-col">
          <Logo />
        </div>
        <div className="footer-col">
          <h3>About Us</h3>
          <p>At Skyview Estates, we pride ourselves on being a trusted and reputable name in the luxury real estate industry with years of experience.</p>
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
        <p>Copyright © 2026 Skyview Estates Company</p>
        <div className="footer-bottom-right">
          <div className="footer-socials">
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <button 
              className="footer-camera-btn" 
              onClick={() => setShowLiveFeed(true)}
              title="Live Site Monitoring"
              style={{ background: 'none', border: 'none', color: '#999', cursor: 'pointer', fontSize: '1.2rem', padding: '0 10px' }}
            >
              <i className="fa-solid fa-camera"></i>
            </button>
          </div>
          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            ↑
          </button>
        </div>
      </div>

      {/* Global Live Feed Modal */}
      <AnimatePresence>
        {showLiveFeed && (
          <motion.div 
            className="live-feed-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.9)', zIndex: 5000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div className="modal-content" style={{ background: '#111', borderRadius: '20px', width: '90%', maxWidth: '800px', padding: '20px', position: 'relative' }}>
              <div className="modal-header" style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', marginBottom: '15px' }}>
                <h3><span style={{ color: 'red' }}>●</span> LIVE SITE CAMERA</h3>
                <button onClick={() => setShowLiveFeed(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '1.2rem' }}>✕</button>
              </div>
              <div className="camera-view" style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden' }}>
                <img src="/assets/workers/mason-1.png" alt="Live Feed" style={{ width: '100%', filter: 'brightness(0.7) contrast(1.2)' }} />
                <div className="cam-overlay" style={{ position: 'absolute', top: '10px', left: '10px', color: '#0f0', fontFamily: 'monospace' }}>
                  REC {new Date().toLocaleTimeString()}
                </div>
              </div>
              <div className="upload-section" style={{ marginTop: '20px', textAlign: 'center' }}>
                <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '10px' }}>Upload progress photos or documents to your project</p>
                <label className="btn-primary" style={{ display: 'inline-block', cursor: 'pointer', padding: '10px 20px' }}>
                  <i className="fa-solid fa-cloud-arrow-up" style={{ marginRight: '8px' }}></i>
                  Upload Project Photo
                  <input type="file" style={{ display: 'none' }} onChange={(e) => alert("Photo Uploaded Successfully! Our engineers will review it shortly.")} />
                </label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
