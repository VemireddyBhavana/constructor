import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Layout/Navbar';
import ScrollReveal from '../components/Common/ScrollReveal';
import { IMAGES, CONTACT_INFO } from '../constants/data';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              <span className="hero-subtitle">Get in Touch</span>
              <h1 className="hero-title">Begin Your Journey to Exceptional Living</h1>
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
                  <p>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/[\s-]/g, '')}`} className="contact-detail-link">
                      P: {CONTACT_INFO.phone}
                    </a>
                  </p>
                </div>
                <div className="detail-item">
                  <span className="detail-tag">EMAIL</span>
                  <p>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sunbrightproperties99@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-detail-link">
                      {CONTACT_INFO.email}
                    </a>
                  </p>
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
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <span className="contact-tag">CONTACT US</span>
                    <h3>Send us a Message</h3>
                    <div className="teal-line"></div>
                    <form className="contact-form-minimal" onSubmit={handleSubmit}>
                      <input type="text" placeholder="Full Name" required />
                      <input type="email" placeholder="Email Address" required />
                      <input type="text" placeholder="Subject" required />
                      <textarea placeholder="Your Message" rows="5" required></textarea>
                      <button type="submit" className="btn-primary full-width">SEND MESSAGE</button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="booking-success"
                    style={{ padding: '20px 0' }}
                  >
                    <div className="success-icon" style={{ width: '60px', height: '60px', fontSize: '1.5rem' }}>✓</div>
                    <h3>Message Sent</h3>
                    <p>Thank you for reaching out to Sun Bright Properties. One of our luxury advisors will contact you shortly.</p>
                    <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.181822262438!2d-73.9950791!3d40.73514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259963e6e8c89%3A0x6b306e907d81a9f1!2s13%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e0!3m2!1sen!2sin!4v1715070000000!5m2!1sen!2sin"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
