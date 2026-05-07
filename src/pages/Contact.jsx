import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Layout/Navbar';
import ScrollReveal from '../components/Common/ScrollReveal';
import { IMAGES, CONTACT_INFO } from '../constants/data';

const Contact = () => {
  return (
    <>
      <header className="hero-section small" style={{ backgroundImage: `url(${IMAGES.contact})` }}>
        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="hero-subtitle">Contact Us</span>
              <h1 className="hero-title">We're Just a Phone Call or Message Away</h1>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="section-container">
        <div className="contact-page-grid">
          <ScrollReveal direction="left">
            <div className="contact-welcome-container">
              <h2>We are excited to connect with you and assist you with your real estate needs</h2>
              <div className="teal-line left"></div>
              
              <div className="contact-details-minimal">
                <div className="detail-item">
                  <span className="detail-tag">PHONE</span>
                  <p>P: {CONTACT_INFO.phone}</p>
                </div>
                <div className="detail-item">
                  <span className="detail-tag">EMAIL</span>
                  <p>{CONTACT_INFO.email}</p>
                </div>
                <div className="detail-item">
                  <span className="detail-tag">ADDRESS</span>
                  <p>A: {CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="reach-out-card">
              <span className="contact-tag">CONTACT US</span>
              <h3>Send us a Message</h3>
              <div className="teal-line"></div>
              <form className="contact-form-minimal">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="text" placeholder="Subject" required />
                <textarea placeholder="Your Message" rows="5" required></textarea>
                <button type="submit" className="btn-primary full-width">SEND MESSAGE</button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container" style={{ backgroundImage: `url(${IMAGES.heroContactBedroom})` }}>
          {/* Using heroContactBedroom as a placeholder for the map background if needed, 
              but the screenshot shows a real map. I'll use a standard map style or image. */}
          <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000" alt="Map Location" className="full-map-img" />
        </div>
      </section>
    </>
  );
};

export default Contact;
