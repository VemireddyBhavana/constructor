import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#050810',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            overflow: 'hidden'
          }}
        >
          <div className="loader-container" style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Spinning Circle of items */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: i * 30,
                  translateY: -100
                }}
                transition={{ 
                  delay: i * 0.1, 
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1
                }}
                style={{
                  position: 'absolute',
                  width: '10px',
                  height: '10px',
                  background: '#C8A96E',
                  borderRadius: '50%',
                  transformOrigin: 'center 100px'
                }}
              />
            ))}

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              style={{ textAlign: 'center', zIndex: 10 }}
            >
              <h2 style={{ color: '#C8A96E', fontSize: '2rem', letterSpacing: '5px', fontWeight: '300', margin: 0 }}>SKYVIEW</h2>
              <p style={{ color: '#4D9FE8', fontSize: '0.8rem', letterSpacing: '3px', marginTop: '5px' }}>ESTATES</p>
            </motion.div>

            {/* Main Spinner Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute',
                width: '220px',
                height: '220px',
                border: '2px solid rgba(200, 169, 110, 0.1)',
                borderTop: '2px solid #C8A96E',
                borderRadius: '50%'
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
