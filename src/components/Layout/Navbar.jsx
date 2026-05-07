import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Common/Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/home' || location.pathname === '/';
  const isAbout = location.pathname === '/about';
  const isServices = location.pathname === '/services';
  const isProperties = location.pathname === '/properties';
  const isContact = location.pathname === '/contact';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Logo className="light" />
      <ul className="nav-links">
        <li><Link to="/home" className={isHome ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={isAbout ? 'active' : ''}>About</Link></li>
        <li><Link to="/services" className={isServices ? 'active' : ''}>Services</Link></li>
        <li><Link to="/properties" className={isProperties ? 'active' : ''}>Properties</Link></li>
        <li><Link to="/contact" className={isContact ? 'active' : ''}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
