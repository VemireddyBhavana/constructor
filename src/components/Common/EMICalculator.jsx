import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const EMICalculator = ({ propertyPrice }) => {
  // Convert price string like "₹1.25 Cr" or "₹85 L" to number
  const parsePrice = (priceStr) => {
    if (!priceStr) return 10000000;
    const cleanStr = priceStr.replace('₹', '').replace(/,/g, '');
    if (cleanStr.includes('Cr')) return parseFloat(cleanStr) * 10000000;
    if (cleanStr.includes('L')) return parseFloat(cleanStr) * 100000;
    return parseFloat(cleanStr);
  };

  const totalPrice = parsePrice(propertyPrice);
  
  const [downPayment, setDownPayment] = useState(totalPrice * 0.2);
  const [loanAmount, setLoanAmount] = useState(totalPrice - downPayment);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [monthlyEMI, setMonthlyEMI] = useState(0);

  useEffect(() => {
    const loan = totalPrice - downPayment;
    setLoanAmount(loan);
    
    const r = interestRate / (12 * 100);
    const n = tenure * 12;
    const emi = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    setMonthlyEMI(Math.round(emi));
  }, [downPayment, interestRate, tenure, totalPrice]);

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <div className="emi-calculator-container" style={{ 
      background: 'var(--bg-secondary)', 
      padding: '30px', 
      borderRadius: '20px', 
      border: '1px solid var(--border)',
      marginTop: '40px'
    }}>
      <h3 style={{ marginBottom: '25px', fontFamily: 'Montserrat, sans-serif' }}>Mortgage Calculator</h3>
      
      <div className="calculator-grid" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div className="calc-item">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Down Payment</label>
            <span style={{ fontWeight: '600' }}>{formatCurrency(downPayment)}</span>
          </div>
          <input 
            type="range" 
            min={0} 
            max={totalPrice} 
            step={100000}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#D4AF37' }}
          />
        </div>

        <div className="calc-item">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Interest Rate (%)</label>
            <span style={{ fontWeight: '600' }}>{interestRate}%</span>
          </div>
          <input 
            type="range" 
            min={7} 
            max={15} 
            step={0.1}
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#D4AF37' }}
          />
        </div>

        <div className="calc-item">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Loan Tenure (Years)</label>
            <span style={{ fontWeight: '600' }}>{tenure} Yrs</span>
          </div>
          <input 
            type="range" 
            min={5} 
            max={30} 
            step={1}
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#D4AF37' }}
          />
        </div>

        <motion.div 
          className="emi-result" 
          style={{ 
            background: '#0a0a0a', 
            padding: '25px', 
            borderRadius: '15px', 
            textAlign: 'center',
            marginTop: '10px',
            border: '1px solid #D4AF37'
          }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 0.5, repeat: 0 }}
          key={monthlyEMI}
        >
          <span style={{ display: 'block', fontSize: '0.8rem', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>
            Estimated Monthly EMI
          </span>
          <h2 style={{ color: 'white', margin: 0, fontSize: '2.2rem' }}>{formatCurrency(monthlyEMI)}</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default EMICalculator;
