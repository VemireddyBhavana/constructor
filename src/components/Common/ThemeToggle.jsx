import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle Theme"
    >
      <div className="toggle-track">
        <motion.div 
          className="toggle-thumb"
          animate={{ x: theme === 'light' ? 0 : 28 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {theme === 'light' ? '☀️' : '🌙'}
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
