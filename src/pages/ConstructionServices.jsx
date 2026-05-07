import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import ScrollReveal from '../components/Common/ScrollReveal';
import { CONSTRUCTION_PACKAGES } from '../constants/data';

const ConstructionServices = () => {
  const navigate = useNavigate();
  const [sqft, setSqft] = useState(1500);
  const [selectedPkgForCalc, setSelectedPkgForCalc] = useState(CONSTRUCTION_PACKAGES[1]);
  const [showLiveFeed, setShowLiveFeed] = useState(false);

  const handleSelectPackage = (pkg) => {
    localStorage.setItem('selectedPackage', JSON.stringify(pkg));
    navigate('/workers');
  };

  const calculateTotal = () => {
    const rate = parseInt(selectedPkgForCalc.price.replace(/[^0-9]/g, ''));
    return sqft * rate;
  };

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const total = calculateTotal();

  return (
    <div className="construction-services-page">
      <Navbar />
      
      <section className="page-hero small">
        <div className="hero-overlay">
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-title"
            >
              Construction Setup
            </motion.h1>
            <p className="hero-subtitle">Define your budget and select your building standards.</p>
          </div>
        </div>
      </section>

      <section className="section-container">
        {/* Cost Calculator Section */}
        <div className="calculator-wrapper">
          <ScrollReveal direction="up">
            <div className="calculator-card">
              <div className="calc-header">
                <h2>🧮 Material Cost Calculator</h2>
                <p>Estimate your total construction budget instantly.</p>
              </div>
              <div className="calc-grid">
                <div className="calc-inputs">
                  <div className="input-group">
                    <label>Total Area (Sq.Ft)</label>
                    <input 
                      type="number" 
                      value={sqft} 
                      onChange={(e) => setSqft(e.target.value)}
                      placeholder="Enter area..."
                    />
                  </div>
                  <div className="input-group">
                    <label>Select Standard</label>
                    <div className="calc-pkg-selector">
                      {CONSTRUCTION_PACKAGES.map(pkg => (
                        <button 
                          key={pkg.id}
                          className={selectedPkgForCalc.id === pkg.id ? 'active' : ''}
                          onClick={() => setSelectedPkgForCalc(pkg)}
                        >
                          {pkg.name.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="calc-results">
                  <div className="total-display">
                    <span>Estimated Total Cost</span>
                    <h3>{formatCurrency(total)}</h3>
                  </div>
                  <div className="breakdown-grid">
                    <div className="breakdown-item">
                      <span className="label">Materials (45%)</span>
                      <span className="value">{formatCurrency(total * 0.45)}</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="label">Labor (35%)</span>
                      <span className="value">{formatCurrency(total * 0.35)}</span>
                    </div>
                    <div className="breakdown-item">
                      <span className="label">Finishing (20%)</span>
                      <span className="value">{formatCurrency(total * 0.20)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="section-title-wrapper text-center" style={{marginTop: '80px'}}>
          <h2>Available Building Packages</h2>
          <div className="teal-line"></div>
        </div>

        <div className="packages-grid">
          {CONSTRUCTION_PACKAGES.map((pkg, index) => (
            <ScrollReveal key={pkg.id} delay={index * 0.1}>
              <div className={`package-card ${pkg.id === 'standard' ? 'featured' : ''}`}>
                {pkg.id === 'standard' && <div className="featured-badge">MOST POPULAR</div>}
                <div className="package-header">
                  <h3>{pkg.name}</h3>
                  <div className="package-price">{pkg.price}</div>
                  <p className="package-tagline">{pkg.tagline}</p>
                </div>
                <div className="package-body">
                  <ul className="package-features">
                    {pkg.features.map((feature, i) => (
                      <li key={i}>
                        <span className="check-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`btn-${pkg.id === 'standard' ? 'primary' : 'secondary'} full-width`}
                    onClick={() => handleSelectPackage(pkg)}
                  >
                    Select Package
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="comparison-notice">
          <p>* Prices are subject to site conditions and location. Custom modifications available upon request.</p>
        </div>

        <div className="project-tools">
          <ScrollReveal direction="up">
            <h2 className="text-center">Advanced Construction Tools</h2>
            <div className="tools-grid">
              <div className="tool-card" onClick={() => alert("Initializing 3D Virtual Environment...")} style={{cursor: 'pointer'}}>
                <span className="tool-icon"><i className="fa-solid fa-vr-cardboard"></i></span>
                <h4>3D Virtual Walkthrough</h4>
                <p>Visualize your home before a single brick is laid with our immersive VR designs.</p>
              </div>
              <div className="tool-card">
                <span className="tool-icon"><i className="fa-solid fa-calculator"></i></span>
                <h4>Material Cost Calculator</h4>
                <p>Real-time market price integration for precise budgeting and resource planning.</p>
              </div>
              <div className="tool-card" onClick={() => setShowLiveFeed(true)} style={{cursor: 'pointer'}}>
                <span className="tool-icon"><i className="fa-solid fa-camera"></i></span>
                <h4>Live Site Monitoring</h4>
                <p>Track your project in real-time with 24/7 site camera access from your dashboard.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Live Feed Simulation Modal */}
        <AnimatePresence>
          {showLiveFeed && (
            <motion.div 
              className="live-feed-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h3><i className="fa-solid fa-cloud-arrow-up" style={{ color: '#D4AF37', marginRight: '10px' }}></i> SITE DOCUMENT UPLOAD</h3>
                  <button onClick={() => setShowLiveFeed(false)}>✕</button>
                </div>
                <div className="modal-upload-zone" style={{ padding: '40px 20px', border: '2px dashed #333', borderRadius: '15px', textAlign: 'center', background: '#0a0a0a' }}>
                  <i className="fa-solid fa-file-invoice" style={{ fontSize: '3rem', color: '#222', marginBottom: '20px', display: 'block' }}></i>
                  <p style={{ color: '#888', marginBottom: '20px', fontSize: '1rem' }}>Found a site issue? Upload a photo or technical document for instant review.</p>
                  <label className="btn-primary" style={{ cursor: 'pointer', display: 'inline-block', padding: '12px 35px' }}>
                    <i className="fa-solid fa-camera-retro" style={{ marginRight: '10px' }}></i>
                    Upload New Site Photo
                    <input type="file" style={{ display: 'none' }} onChange={() => alert("File Uploaded! Site engineers notified.")} />
                  </label>
                </div>
                <p className="modal-footer-text">Project Phase: Foundation | Temperature: 32°C | Humidity: 65%</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default ConstructionServices;
