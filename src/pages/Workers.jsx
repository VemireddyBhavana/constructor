import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import ScrollReveal from '../components/Common/ScrollReveal';
import { WORKERS } from '../constants/data';

const Workers = () => {
  const navigate = useNavigate();
  const [hiredWorkers, setHiredWorkers] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Design', 'Masonry', 'Electrical', 'Plumbing', 'Engineering'];

  const filteredWorkers = activeCategory === 'All' 
    ? WORKERS 
    : WORKERS.filter(w => w.category === activeCategory);

  const toggleHireWorker = (worker) => {
    if (hiredWorkers.find(w => w.id === worker.id)) {
      setHiredWorkers(hiredWorkers.filter(w => w.id !== worker.id));
    } else {
      setHiredWorkers([...hiredWorkers, worker]);
    }
  };

  const handleStartProject = () => {
    localStorage.setItem('hiredWorkers', JSON.stringify(hiredWorkers));
    alert('Project Initiated Successfully! Your expert team has been assigned. Our builder will contact you shortly.');
    navigate('/home');
  };

  return (
    <div className="workers-page">
      <Navbar />
      
      <section className="page-hero small">
        <div className="hero-overlay">
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-title"
            >
              Expert Team Marketplace
            </motion.h1>
            <p className="hero-subtitle">Hand-picked professionals for your construction needs.</p>
          </div>
        </div>
      </section>

      <section className="section-container">
        {/* Category Filter */}
        <div className="filter-container text-center" style={{marginBottom: '50px'}}>
          <div className="category-filters">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="workers-grid">
          {filteredWorkers.map((worker, index) => (
            <ScrollReveal key={worker.id} delay={index * 0.05}>
              <div className={`worker-card ${hiredWorkers.find(w => w.id === worker.id) ? 'hired' : ''}`}>
                <div className="worker-image-wrapper">
                  <img src={worker.image} alt={worker.name} className="worker-img" />
                  {worker.verified && <div className="verified-badge">VERIFIED PRO</div>}
                  <div className="worker-rating">⭐ {worker.rating}</div>
                </div>
                <div className="worker-info">
                  <span className="worker-role">{worker.role}</span>
                  <h3>{worker.name}</h3>
                  <p className="worker-specialty">{worker.specialty}</p>
                  
                  <div className="worker-meta">
                    <span>
                      <small>EXPERIENCE</small>
                      <strong>{worker.experience}</strong>
                    </span>
                    <span>
                      <small>REVIEWS</small>
                      <strong>{(Math.random() * 50 + 20).toFixed(0)}+</strong>
                    </span>
                  </div>

                  <button 
                    className={`btn-${hiredWorkers.find(w => w.id === worker.id) ? 'success' : 'primary'} full-width`}
                    style={{marginTop: '25px'}}
                    onClick={() => toggleHireWorker(worker)}
                  >
                    {hiredWorkers.find(w => w.id === worker.id) ? 'Professional Assigned ✓' : 'Assign to Project'}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <AnimatePresence>
          {hiredWorkers.length > 0 && (
            <motion.div 
              className="hiring-bar"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
            >
              <div className="hiring-bar-content">
                <span>{hiredWorkers.length} Professional{hiredWorkers.length > 1 ? 's' : ''} Selected</span>
                <button className="btn-primary" onClick={handleStartProject}>Finalize Project Hiring</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Workers;
