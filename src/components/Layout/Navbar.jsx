import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Common/Logo';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/home' || location.pathname === '/';
  const isAbout = location.pathname === '/about';

  return (
    <nav className="navbar">
      <Logo className="light" />
      <ul className="nav-links">
        <li><Link to="/home" className={isHome ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={isAbout ? 'active' : ''}>About</Link></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Properties</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div className="nav-socials">
        <a href="#">🐦</a>
        <a href="#">📌</a>
        <a href="#">▶️</a>
        <a href="#" className="search-icon">🔍</a>
      </div>
    </nav>
  );
};

export default Navbar;
