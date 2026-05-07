import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import ScrollReveal from '../components/Common/ScrollReveal';
import { WORKERS } from '../constants/data';

const Workers = () => {
  const navigate = useNavigate();
  const [hiredWorkers, setHiredWorkers] = useState([]);
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  const categories = ['ALL', 'DESIGN', 'MASONRY', 'ELECTRICAL', 'PLUMBING', 'ENGINEERING'];

  const filteredWorkers = WORKERS.filter(worker => {
    const matchesFilter = filter === 'ALL' || worker.category.toUpperCase() === filter;
    const q = search.toLowerCase().trim();
    const matchesSearch = !q || [
      worker.name,
      worker.role,
      worker.specialty,
      worker.category
    ].some(field => field.toLowerCase().includes(q));

    return matchesFilter && matchesSearch;
  });

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
      
      <header className="hero-section small" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000)` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-subtitle">Marketplace</span>
              <h1 className="hero-title">Hire Your Expert Construction Team</h1>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="section-container">
        <div className="properties-controls">
          <div className="filter-group">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search by name, role or specialty..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="workers-grid">
          {filteredWorkers.length > 0 ? (
            filteredWorkers.map((worker, index) => (
              <ScrollReveal key={worker.id} delay={index * 0.05}>
                <div className={`worker-card ${hiredWorkers.find(w => w.id === worker.id) ? 'hired' : ''}`}>
                  <div className="worker-image-wrapper">
                    <img src={worker.image} alt={worker.name} className="worker-img" />
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
            ))
          ) : (
            <div className="no-results">No professionals found matching your search.</div>
          )}
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
      </div>
    </div>
  );
};

export default Workers;
