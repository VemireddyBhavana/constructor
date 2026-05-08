import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROPERTIES } from '../../constants/data';
import PropertyCard from './PropertyCard';

const DreamHomeQuiz = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    budget: null,
    type: null,
    beds: null,
    style: null
  });
  const [results, setResults] = useState([]);

  const steps = [
    {
      question: "What is your comfortable budget range?",
      options: [
        { label: "Under ₹1.5 Cr", value: "low" },
        { label: "₹1.5 Cr - ₹5 Cr", value: "mid" },
        { label: "Above ₹5 Cr", value: "high" }
      ],
      key: "budget"
    },
    {
      question: "Which property type are you looking for?",
      options: [
        { label: "Ultra-Luxury Apartment", value: "APARTMENT" },
        { label: "Exclusive Villa", value: "VILLA" },
        { label: "Signature Penthouse", value: "PENTHOUSE" },
        { label: "Modern Independent House", value: "HOUSE" }
      ],
      key: "type"
    },
    {
      question: "How many bedrooms do you need?",
      options: [
        { label: "1-2 Bedrooms", value: 2 },
        { label: "3 Bedrooms", value: 3 },
        { label: "4+ Bedrooms", value: 4 }
      ],
      key: "beds"
    },
    {
      question: "What is your preferred architectural style?",
      options: [
        { label: "Contemporary & Glass", value: "modern" },
        { label: "Classic & Timeless", value: "classic" },
        { label: "Minimalist & Zen", value: "zen" }
      ],
      key: "style"
    }
  ];

  const handleAnswer = (val) => {
    const newAnswers = { ...answers, [steps[step].key]: val };
    setAnswers(newAnswers);
    
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      calculateResults(newAnswers);
      setStep(steps.length);
    }
  };

  const calculateResults = (finalAnswers) => {
    // Logic to filter properties based on answers
    let filtered = PROPERTIES.filter(p => {
      // 1. Strict category matching
      if (p.category !== finalAnswers.type) return false;
      
      // 2. Budget matching
      const pPrice = p.price.includes('Cr') ? parseFloat(p.price.replace('₹', '')) : 0.5;
      const budgetMatch = 
        (finalAnswers.budget === 'low' && pPrice < 1.5) ||
        (finalAnswers.budget === 'mid' && pPrice >= 1.5 && pPrice <= 5) ||
        (finalAnswers.budget === 'high' && pPrice > 5);
        
      // 3. Beds matching
      const bedsMatch = p.beds >= finalAnswers.beds;
      
      return budgetMatch && bedsMatch;
    });

    // Fallback if no exact matches found in that category/budget
    if (filtered.length === 0) {
      filtered = PROPERTIES.filter(p => p.category === finalAnswers.type).slice(0, 3);
    }
    
    // Final fallback
    setResults(filtered.length > 0 ? filtered.slice(0, 3) : PROPERTIES.slice(0, 3));
  };

  return (
    <div className="quiz-overlay" style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      background: 'rgba(0,0,0,0.95)', 
      zIndex: 6000, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '20px'
    }}>
      <motion.div 
        className="quiz-modal"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ 
          background: 'var(--bg-primary)', 
          width: '100%', 
          maxWidth: '900px', 
          borderRadius: '30px', 
          overflow: 'hidden',
          border: '1px solid var(--border)',
          position: 'relative',
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <button 
          onClick={onClose} 
          style={{ 
            position: 'absolute', 
            top: '30px', 
            right: '30px', 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-main)', 
            fontSize: '1.5rem', 
            cursor: 'pointer',
            zIndex: 10
          }}
        >
          ✕
        </button>

        <div style={{ padding: '60px' }}>
          <AnimatePresence mode="wait">
            {step < steps.length ? (
              <motion.div 
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <span style={{ color: '#D4AF37', fontWeight: '600', letterSpacing: '2px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                  Question {step + 1} of {steps.length}
                </span>
                <h2 style={{ fontSize: '2.5rem', margin: '20px 0 40px', fontFamily: 'Playfair Display, serif', color: 'var(--text-main)' }}>
                  {steps[step].question}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  {steps[step].options.map(opt => (
                    <button 
                      key={opt.label}
                      onClick={() => handleAnswer(opt.value)}
                      className="quiz-opt-btn"
                      style={{ 
                        padding: '20px 30px', 
                        borderRadius: '15px', 
                        border: '1px solid var(--border)', 
                        background: 'var(--bg-primary)', 
                        color: 'var(--text-main)',
                        textAlign: 'left',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ textAlign: 'center' }}
              >
                <h2 style={{ fontSize: '3rem', marginBottom: '10px', fontFamily: 'Playfair Display, serif', color: 'var(--text-main)' }}>Your Dream Matches</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Based on your preferences, we've curated these exceptional estates for you.</p>
                
                <div className="quiz-results-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', textAlign: 'left' }}>
                  {results.map(p => (
                    <div key={p.id} style={{ scale: '0.9' }} className="quiz-result-card">
                      <PropertyCard property={p} />
                    </div>
                  ))}
                </div>

                <button 
                  className="btn-hero" 
                  style={{ marginTop: '40px', background: 'var(--primary)', color: 'white' }}
                  onClick={onClose}
                >
                  Explore All Estates
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div style={{ marginTop: 'auto', height: '6px', background: '#222' }}>
          <motion.div 
            style={{ height: '100%', background: '#D4AF37' }}
            animate={{ width: `${(step / steps.length) * 100}%` }}
          />
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        .quiz-opt-btn:hover {
          border-color: #D4AF37 !important;
          background: #D4AF37 !important;
          color: black !important;
          transform: translateY(-5px);
        }
      `}} />
    </div>
  );
};

export default DreamHomeQuiz;
