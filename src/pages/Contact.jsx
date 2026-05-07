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
              <span className="hero-subtitle">Get In Touch</span>
              <h1 className="hero-title">Contact Us</h1>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="section-container">
        <div className="contact-page-grid">
          <ScrollReveal direction="left">
            <div className="contact-form-container">
              <h3>Send us a Message</h3>
              <div className="teal-line left"></div>
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="contact-info-container">
              <h3>Office Information</h3>
              <div className="teal-line left"></div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Our Address</h4>
                  <p>{CONTACT_INFO.address}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h4>Email Us</h4>
                  <p>{CONTACT_INFO.email}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <h4>Call Us</h4>
                  <p>{CONTACT_INFO.phone}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">🕒</span>
                <div>
                  <h4>Office Hours</h4>
                  <p>{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
};

export default Contact;
