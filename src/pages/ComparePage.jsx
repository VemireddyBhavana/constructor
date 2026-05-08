import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import { useComparison } from '../context/ComparisonContext';
import { IMAGES } from '../constants/data';

const ComparePage = () => {
  const { comparisonList, removeFromComparison, clearComparison } = useComparison();
  const navigate = useNavigate();

  if (comparisonList.length === 0) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Navbar />
        <h2>No properties selected for comparison</h2>
        <button className="btn-primary" onClick={() => navigate('/properties')} style={{ marginTop: '20px' }}>Go to Listings</button>
      </div>
    );
  }

  const attributes = [
    { label: 'Price', key: 'price' },
    { label: 'Category', key: 'category' },
    { label: 'Sub Category', key: 'subCategory' },
    { label: 'Bedrooms', key: 'beds' },
    { label: 'Bathrooms', key: 'baths' },
    { label: 'Area (sqft)', key: 'sqft' },
  ];

  return (
    <div className="compare-page">
      <header className="hero-section small" style={{ backgroundImage: `url(${IMAGES.heroHome})` }}>
        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="hero-subtitle">Comparison</span>
              <h1 className="hero-title">Side-by-Side Analysis</h1>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="section-container" style={{ padding: '80px 20px' }}>
        <div style={{ overflowX: 'auto' }}>
          <table className="compare-table" style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
            <thead>
              <tr>
                <th style={{ width: '200px', textAlign: 'left', padding: '20px', borderBottom: '1px solid var(--border)' }}>Features</th>
                {comparisonList.map(p => (
                  <th key={p.id} style={{ padding: '20px', borderBottom: '1px solid var(--border)', textAlign: 'center' }}>
                    <div style={{ position: 'relative' }}>
                      <button 
                        onClick={() => removeFromComparison(p.id)}
                        style={{ position: 'absolute', top: '-10px', right: '0', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}
                      >
                        ✕ Remove
                      </button>
                      <img src={p.image} alt={p.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '15px', marginBottom: '15px' }} />
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>{p.title}</h3>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {attributes.map(attr => (
                <tr key={attr.key}>
                  <td style={{ padding: '20px', fontWeight: '600', color: 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>{attr.label}</td>
                  {comparisonList.map(p => (
                    <td key={p.id} style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontSize: '1.1rem' }}>
                      {p[attr.key] || 'N/A'}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td style={{ padding: '20px', fontWeight: '600', color: 'var(--text-muted)' }}>Action</td>
                {comparisonList.map(p => (
                  <td key={p.id} style={{ padding: '20px', textAlign: 'center' }}>
                    <button 
                      className="btn-hero" 
                      style={{ padding: '10px 20px', fontSize: '0.8rem' }}
                      onClick={() => navigate(`/property/${p.id}`)}
                    >
                      View Details
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <button className="btn-secondary" onClick={clearComparison}>Clear Comparison List</button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .compare-table tr:hover {
          background: rgba(212, 175, 55, 0.03);
        }
      `}} />
    </div>
  );
};

export default ComparePage;
