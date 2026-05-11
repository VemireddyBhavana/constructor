import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useComparison } from '../../context/ComparisonContext';

const ComparisonBar = () => {
  const { comparisonList, removeFromComparison, clearComparison } = useComparison();
  const navigate = useNavigate();

  if (comparisonList.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="comparison-bar comparison-bar-responsive"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        style={{ 
          position: 'fixed', 
          bottom: '30px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          background: 'rgba(0,0,0,0.9)', 
          backdropFilter: 'blur(10px)',
          padding: '15px 30px', 
          borderRadius: '100px', 
          zIndex: 5000, 
          display: 'flex', 
          alignItems: 'center', 
          gap: '20px',
          border: '1px solid #D4AF37',
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
          width: 'max-content',
          maxWidth: '95vw'
        }}
      >
        <div style={{ display: 'flex', gap: '10px', maxWidth: '400px', overflowX: 'auto', padding: '5px' }} className="hide-scrollbar">
          {comparisonList.map(p => (
            <div key={p.id} style={{ position: 'relative', flexShrink: 0 }}>
              <img 
                src={p.image} 
                alt={p.title} 
                style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #D4AF37' }} 
              />
              <button 
                onClick={() => removeFromComparison(p.id)}
                style={{ 
                  position: 'absolute', 
                  top: '-5px', 
                  right: '-5px', 
                  background: 'red', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '50%', 
                  width: '18px', 
                  height: '18px', 
                  fontSize: '10px', 
                  cursor: 'pointer' 
                }}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div style={{ width: '1px', height: '30px', background: '#333' }}></div>

        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            className="btn-hero" 
            style={{ 
              padding: '10px 25px', 
              fontSize: '0.8rem', 
              background: '#D4AF37', 
              color: 'black',
              opacity: comparisonList.length < 1 ? 0.5 : 1,
              cursor: comparisonList.length < 1 ? 'not-allowed' : 'pointer'
            }}
            onClick={() => navigate('/compare')}
            disabled={comparisonList.length < 1}
          >
            Compare {comparisonList.length} {comparisonList.length === 1 ? 'Property' : 'Properties'}
          </button>
          <button 
            style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '0.8rem' }}
            onClick={clearComparison}
          >
            Clear All
          </button>
        </div>
      </motion.div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 600px) {
          .comparison-bar-responsive {
            padding: 10px 20px !important;
            gap: 10px !important;
            bottom: 20px !important;
            border-radius: 20px !important;
          }
          .comparison-bar-responsive .btn-hero {
            padding: 8px 15px !important;
            font-size: 0.7rem !important;
          }
          .comparison-bar-responsive div[style*="width: 1px"] {
            display: none;
          }
        }
      `}} />
    </AnimatePresence>
  );
};

export default ComparisonBar;
