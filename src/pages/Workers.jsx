import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import ScrollReveal from '../components/Common/ScrollReveal';
import { WORKERS } from '../constants/data';

const Workers = () => {
  const navigate = useNavigate();
  const [hiredWorkers, setHiredWorkers] = useState([]);

  const toggleHireWorker = (worker) => {
    if (hiredWorkers.find(w => w.id === worker.id)) {
      setHiredWorkers(hiredWorkers.filter(w => w.id !== worker.id));
    } else {
      setHiredWorkers([...hiredWorkers, worker]);
    }
  };

  const handleStartProject = () => {
    localStorage.setItem('hiredWorkers', JSON.stringify(hiredWorkers));
    navigate('/dashboard');
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
              Hire Your Expert Team
            </motion.h1>
            <p className="hero-subtitle">Select the best professionals to bring your design to life.</p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="workers-grid">
          {WORKERS.map((worker, index) => (
            <ScrollReveal key={worker.id} delay={index * 0.1}>
              <div className={`worker-card ${hiredWorkers.find(w => w.id === worker.id) ? 'hired' : ''}`}>
                <div className="worker-image-wrapper">
                  <img src={worker.image} alt={worker.name} className="worker-img" />
                  <div className="worker-rating">⭐ {worker.rating}</div>
                </div>
                <div className="worker-info">
                  <span className="worker-role">{worker.role}</span>
                  <h3>{worker.name}</h3>
                  <div className="worker-meta">
                    <span><strong>Exp:</strong> {worker.experience}</span>
                    <span><strong>Specialty:</strong> {worker.specialty}</span>
                  </div>
                  <button 
                    className={`btn-${hiredWorkers.find(w => w.id === worker.id) ? 'success' : 'primary'} full-width`}
                    onClick={() => toggleHireWorker(worker)}
                  >
                    {hiredWorkers.find(w => w.id === worker.id) ? 'Selected ✓' : 'Hire Professional'}
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
                <button className="btn-primary" onClick={handleStartProject}>Proceed to Dashboard</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Workers;
