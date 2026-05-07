import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Common/Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/home' && (location.pathname === '/' || location.pathname === '/home')) return true;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <Logo />
      
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'mobile-active' : ''}`}>
        <li><Link to="/home" className={isActive('/home') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
        <li><Link to="/properties" className={isActive('/properties') || location.pathname.startsWith('/property') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Designs</Link></li>
        <li><Link to="/workers" className={isActive('/workers') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Workers</Link></li>
        <li><Link to="/dashboard" className={isActive('/dashboard') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Dashboard</Link></li>
        <li><Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
        <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
