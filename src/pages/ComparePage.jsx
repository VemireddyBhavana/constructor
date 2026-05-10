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
        <button className="btn-primary" onClick={() => navigate('/designs')} style={{ marginTop: '20px' }}>Go to Designs</button>
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
                    <div style={{ position: 'relative', padding: '10px' }}>
                      <button 
                        onClick={() => removeFromComparison(p.id)}
                        style={{ 
                          position: 'absolute', 
                          top: '0', 
                          right: '0', 
                          background: 'rgba(255, 0, 0, 0.1)', 
                          color: '#ff4d4d', 
                          border: '1px solid rgba(255, 0, 0, 0.2)', 
                          borderRadius: '50%',
                          width: '30px',
                          height: '30px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          zIndex: 10
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.background = 'red'; e.currentTarget.style.color = 'white'; }}
                        onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255, 0, 0, 0.1)'; e.currentTarget.style.color = '#ff4d4d'; }}
                        title="Remove from comparison"
                      >
                        ✕
                      </button>
                      <div className="property-image-wrapper" style={{ overflow: 'hidden', borderRadius: '15px', marginBottom: '15px' }}>
                        <img src={p.image} alt={p.title} style={{ width: '100%', height: '220px', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                      </div>
                      <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '5px' }}>{p.title}</h3>
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

        <div style={{ marginTop: '60px', textAlign: 'center' }}>
          <button 
            className="btn-hero" 
            style={{ 
              background: 'transparent', 
              border: '1px solid #444', 
              color: '#888',
              padding: '12px 40px' 
            }} 
            onClick={clearComparison}
          >
            Reset Comparison List
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .compare-table tr:hover {
          background: rgba(212, 175, 55, 0.03);
        }
        .property-image-wrapper:hover img {
          transform: scale(1.05);
        }
        .compare-table td {
          color: #ccc;
        }
        .compare-table th {
          color: #fff;
        }
      `}} />
    </div>
  );
};

export default ComparePage;
