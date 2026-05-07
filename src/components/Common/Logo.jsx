import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => (
  <Link to="/" className={`nav-logo ${className}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div className="logo-container">
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon-svg">
        {/* Luxury Geometric Villa Icon */}
        <path d="M50 20L15 45V80H40V60H60V80H85V45L50 20Z" stroke="var(--text-main)" strokeWidth="4" strokeLinejoin="round"/>
        <path d="M15 45L50 20L85 45" stroke="#D4AF37" strokeWidth="4" strokeLinecap="round"/>
        <path d="M50 20V10M50 10H60" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
        <rect x="25" y="50" width="10" height="10" stroke="var(--text-main)" strokeWidth="2"/>
        <rect x="65" y="50" width="10" height="10" stroke="var(--text-main)" strokeWidth="2"/>
      </svg>
      <div className="logo-text">
        <span className="brand-skyview" style={{ color: 'var(--text-main)' }}>SKYVIEW</span>
        <span className="brand-estates" style={{ color: '#D4AF37' }}>ESTATES</span>
      </div>
    </div>
  </Link>
);

export default Logo;
