import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import ScrollReveal from '../components/Common/ScrollReveal';
import { CONSTRUCTION_PACKAGES } from '../constants/data';

const ConstructionServices = () => {
  const navigate = useNavigate();

  const handleSelectPackage = (pkg) => {
    // Save selected package to local storage for the dashboard
    localStorage.setItem('selectedPackage', JSON.stringify(pkg));
    navigate('/workers');
  };

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
              Construction Packages
            </motion.h1>
            <p className="hero-subtitle">Choose the perfect foundation for your future home.</p>
          </div>
        </div>
      </section>

      <section className="section-container">
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
      </section>
    </div>
  );
};

export default ConstructionServices;
