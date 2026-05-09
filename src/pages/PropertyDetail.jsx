import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Layout/Navbar';
import { PROPERTIES } from '../constants/data';
import ScrollReveal from '../components/Common/ScrollReveal';
import EMICalculator from '../components/Common/EMICalculator';

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

  if (!property) {
    return (
      <div className="no-results" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Navbar />
        <h2>Property not found</h2>
        <button className="btn-primary" onClick={() => navigate('/properties')} style={{ marginTop: '20px' }}>
          Back to Listings
        </button>
      </div>
    );
  }

  const goToPayment = () => setBookingStep('payment');
  
  const handlePaymentComplete = () => {
    localStorage.setItem('selectedDesign', JSON.stringify(property));
    setBookingStep('success');
  };

  return (
    <div className="property-detail-page">
      <header className="detail-hero">
        <div className="detail-hero-img" style={{ backgroundImage: `url(${property.image})` }}></div>
        <div className="detail-hero-overlay"></div>
        <Navbar />
        <div className="detail-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="property-category">
              {property.category} {property.subCategory ? `• ${property.subCategory}` : ''}
            </span>
            <h1 className="detail-title">{property.title}</h1>
            <div className="detail-price-tag">{property.price}</div>
          </motion.div>
        </div>
      </header>

      <div className="section-container">
        <div className="detail-main-grid">
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
                  <span className="spec-label">Square Ft</span>
                  <span className="spec-value">{property.sqft}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Property ID</span>
                  <span className="spec-value">#SKY-{property.id}</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <div className="detail-description">
                <h2>Description</h2>
                <div className="teal-line left" style={{ margin: '20px 0' }}></div>
                <p>{property.description}</p>
                <p>
                  Experience the epitome of luxury living in this architectural masterpiece. 
                  Every detail has been meticulously crafted to offer unparalleled comfort and sophistication. 
                  From the sprawling living areas to the gourmet kitchen and private outdoor sanctuary, 
                  this home is designed for the most discerning homeowners.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <div className="detail-features">
                <h2>Premium Features</h2>
                <div className="features-list">
                  {['Private Pool', 'Home Automation', 'Wine Cellar', 'Sky Deck', 'Spa Bathroom', 'Gourmet Kitchen', 'Concierge Service'].map(feature => (
                    <span key={feature} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <EMICalculator propertyPrice={property.price} />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.5}>
              <div className="detail-floor-plan" style={{ marginTop: '40px' }}>
                <h2>Architectural Floor Plan</h2>
                <div className="floor-plan-container" style={{ margin: '20px 0', background: '#f5f5f5', padding: '20px', borderRadius: '15px' }}>
                  <img src="/architectural_floor_plan.png" alt="House Floor Plan" style={{ width: '100%', height: 'auto' }} />
                </div>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>
                  * This floor plan represents the standard layout. Custom modifications are possible during construction.
                </p>
              </div>
            </ScrollReveal>
          </div>

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
                      <p>Select your preferred date and time for an exclusive viewing.</p>
                      
                      <div className="booking-calendar">
                        <div className="calendar-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '5px', marginTop: '20px' }}>
                          {[...Array(31)].map((_, i) => {
                            const day = i + 1;
                            return (
                              <div 
                                key={i} 
                                className={`calendar-day ${selectedDate === day ? 'selected' : ''}`}
                                onClick={() => setSelectedDate(day)}
                                style={{
                                  padding: '10px',
                                  textAlign: 'center',
                                  cursor: 'pointer',
                                  borderRadius: '5px',
                                  background: selectedDate === day ? 'var(--primary)' : 'transparent',
                                  color: selectedDate === day ? '#000' : 'inherit',
                                  border: '1px solid var(--border)'
                                }}
                              >
                                {day}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="time-slots" style={{ marginTop: '20px' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          {['10:00 AM', '02:00 PM', '05:00 PM'].map(time => (
                            <button 
                              key={time}
                              className={`slot-btn ${selectedTime === time ? 'active' : ''}`}
                              onClick={() => setSelectedTime(time)}
                              style={{
                                flex: 1,
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid var(--primary)',
                                background: selectedTime === time ? 'var(--primary)' : 'transparent',
                                color: selectedTime === time ? '#000' : 'var(--primary)',
                                cursor: 'pointer'
                              }}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button 
                        className="btn-primary full-width" 
                        style={{ marginTop: '20px', width: '100%' }}
                        onClick={goToPayment}
                      >
                        Start Construction
                      </button>
                    </motion.div>
                  )}

                  {bookingStep === 'payment' && (
                    <motion.div
                      key="payment-step"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="payment-container"
                    >
                      <h3>Secure Design Reservation</h3>
                      <p>Scan the QR code to pay the ₹5,000 reservation fee.</p>
                      
                      <div className="qr-wrapper" style={{ textAlign: 'center', margin: '20px 0' }}>
                        <div style={{ 
                          width: '200px', 
                          height: '200px', 
                          background: 'var(--bg-secondary)', 
                          margin: '0 auto', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          border: '1px solid var(--border)',
                          borderRadius: '15px',
                          color: 'var(--primary)'
                        }}>
                          QR CODE PLACEHOLDER
                        </div>
                      </div>

                      <button 
                        className="btn-primary full-width" 
                        style={{ width: '100%' }}
                        onClick={handlePaymentComplete}
                      >
                        Confirm Reservation
                      </button>
                    </motion.div>
                  )}

                  {bookingStep === 'success' && (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      style={{ textAlign: 'center' }}
                    >
                      <div style={{ fontSize: '3rem', color: '#4caf50' }}>✓</div>
                      <h3>Payment Successful!</h3>
                      <p>Your design reservation is confirmed for May {selectedDate}, 2026.</p>
                      <button className="btn-primary" style={{ width: '100%' }} onClick={() => navigate('/construction-setup')}>
                        Go to Construction Setup
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="agent-info" style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '15px', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                  <div className="agent-avatar">SE</div>
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>Skyview Estates Advisory</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Luxury Property Consultant</div>
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
