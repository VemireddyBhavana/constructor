import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => (
  <Link to="/" className={`nav-logo ${className}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="logo-icon-svg">
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4v18" />
      <path d="M13 21V11l5-3v13" />
      <rect x="7" y="10" width="2" height="2" />
      <rect x="7" y="14" width="2" height="2" />
    </svg>
    <span>Real<b>Estate</b></span>
  </Link>
);

export default Logo;
