import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Layout/Navbar';
import { PROPERTIES } from '../constants/data';
import ScrollReveal from '../components/Common/ScrollReveal';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = PROPERTIES.find(p => p.id === parseInt(id));
  const [bookingStep, setBookingStep] = useState('select'); // 'select', 'payment', 'success'
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const goToPayment = () => {
    setBookingStep('payment');
  };

  const handlePaymentComplete = () => {
    localStorage.setItem('selectedDesign', JSON.stringify(property));
    setBookingStep('success');
  };

  if (!property) {
    return (
      <div className="no-results" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <h2>Property not found</h2>
        <button className="btn-primary" onClick={() => navigate('/properties')}>Back to Listings</button>
      </div>
    );
  }

  return (
    <div className="property-detail-page">
      <Navbar />
      
      {/* Cinematic Hero Image */}
      <section className="detail-hero">
        <div className="detail-hero-img" style={{ backgroundImage: `url(${property.image})` }}>
          <div className="detail-hero-overlay"></div>
        </div>
        <div className="detail-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="property-category">{property.category} {property.subCategory ? `• ${property.subCategory}` : ''}</span>
            <h1 className="detail-title">{property.title}</h1>
            <div className="detail-price-tag">{property.price}</div>
          </motion.div>
        </div>
      </section>

      <div className="section-container">
        <div className="detail-main-grid">
          {/* Left Column: Info */}
          <div className="detail-info-col">
            <ScrollReveal direction="up">
              <div className="detail-specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Bedrooms</span>
                  <span className="spec-value">{property.beds}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Bathrooms</span>
                  <span className="spec-value">{property.baths}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Living Area</span>
                  <span className="spec-value">{property.sqft} sqft</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Property ID</span>
                  <span className="spec-value">#SKY-{property.id}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="detail-description">
                <h2>About this Property</h2>
                <div className="teal-line left"></div>
                <p>{property.description}</p>
                <p>
                  Experience the pinnacle of luxury living in this exceptional estate. 
                  Every detail has been meticulously curated to offer an unparalleled lifestyle of comfort and elegance. 
                  From the floor-to-ceiling windows offering breathtaking views to the custom-designed interiors, 
                  this property represents the finest in modern architecture and premium craftsmanship.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="detail-features">
                <h2>Key Amenities</h2>
                <div className="features-list">
                  <div className="feature-tag">Smart Home System</div>
                  <div className="feature-tag">Private Balcony</div>
                  <div className="feature-tag">Concierge Service</div>
                  <div className="feature-tag">Premium Finishes</div>
                  <div className="feature-tag">Panoramic Views</div>
                  <div className="feature-tag">Secure Parking</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Sidebar / Action */}
          <div className="detail-sidebar">
            <ScrollReveal direction="left">
              <div className="enquiry-card">
                <AnimatePresence mode="wait">
                  {bookingStep === 'select' && (
                    <motion.div
                      key="booking-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3>Schedule a Private Tour</h3>
                      <p>Select your preferred date and time for an exclusive viewing of this estate.</p>
                      
                      <div className="booking-calendar">
                        <div className="calendar-header">
                          <span>May 2026</span>
                          <div className="calendar-nav">
                            <button>←</button>
                            <button>→</button>
                          </div>
                        </div>
                        <div className="calendar-grid">
                          <div className="day-name">S</div><div className="day-name">M</div><div className="day-name">T</div><div className="day-name">W</div><div className="day-name">T</div><div className="day-name">F</div><div className="day-name">S</div>
                          {[...Array(31)].map((_, i) => {
                            const day = i + 1;
                            const isPast = day < 10;
                            return (
                              <div 
                                key={i} 
                                className={`calendar-day ${selectedDate === day ? 'selected' : ''} ${isPast ? 'disabled' : ''}`}
                                onClick={() => !isPast && setSelectedDate(day)}
                              >
                                {day}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="time-slots">
                        <span className="slot-title">Available Time Slots</span>
                        <div className="slots-grid">
                          {['10:00 AM', '02:00 PM', '05:00 PM'].map(time => (
                            <button 
                              key={time}
                              className={`slot-btn ${selectedTime === time ? 'active' : ''}`}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button 
                        className="btn-primary full-width" 
                        style={{ marginTop: '20px' }}
                        onClick={goToPayment}
                      >
                        Proceed to Payment
                      </button>
                    </motion.div>
                  )}

                  {bookingStep === 'payment' && (
                    <motion.div
                      key="payment-step"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="payment-container"
                    >
                      <h3>Secure Booking</h3>
                      <p>Scan the QR code to pay the ₹5,000 reservation fee for your private tour on May {selectedDate}, 2026 at {selectedTime}.</p>
                      
                      <div className="qr-wrapper">
                        <img src="/payment_qr_code_1778173496267.png" alt="Payment QR Code" className="payment-qr" />
                        <div className="qr-overlay">
                          <span>PAYMENT SECURE</span>
                        </div>
                      </div>

                      <div className="payment-info-small">
                        <div className="info-row">
                          <span>Amount:</span>
                          <strong>₹5,000</strong>
                        </div>
                        <div className="info-row">
                          <span>Property:</span>
                          <strong>{property.title}</strong>
                        </div>
                      </div>

                      <button 
                        className="btn-primary full-width" 
                        onClick={handlePaymentComplete}
                      >
                        I have completed the payment
                      </button>
                      <button className="btn-secondary full-width" style={{ marginTop: '10px' }} onClick={() => setBookingStep('select')}>
                        Back
                      </button>
                    </motion.div>
                  )}

                  {bookingStep === 'success' && (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="booking-success"
                    >
                      <div className="success-icon">✓</div>
                      <h3>Payment Successful!</h3>
                      <p>Your design reservation is confirmed for May {selectedDate}, 2026. A digital receipt has been sent to your email.</p>
                      <button className="btn-primary full-width" onClick={() => navigate('/construction-setup')}>Start Construction Setup</button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="agent-info">
                  <div className="agent-avatar">SE</div>
                  <div className="agent-details">
                    <span className="agent-name">Skyview Estates Advisory</span>
                    <span className="agent-tag">Luxury Property Consultant</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
