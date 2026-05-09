import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../../constants/data';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);
  const splashImages = [IMAGES.heroHome, IMAGES.heroHome2, IMAGES.heroHome3];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500); // Slightly longer for the images to cycle

    const imgTimer = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % splashImages.length);
    }, 2000); // Slower cycle

    return () => {
      clearTimeout(timer);
      clearInterval(imgTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#050810',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10000,
            overflow: 'hidden'
          }}
        >
          {/* Subtle Background Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            background: `radial-gradient(circle at center, #C8A96E 0%, transparent 70%)`,
            filter: 'blur(100px)'
          }} />

          <div className="loader-container" style={{ position: 'relative', textAlign: 'center' }}>
            {/* The Large Rounded Circle - Fixed to be perfectly filled */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{
                width: '350px',
                height: '350px',
                borderRadius: '50%',
                border: '2px solid rgba(200, 169, 110, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 0 50px rgba(200, 169, 110, 0.2)',
                marginBottom: '50px',
                padding: '10px' // Space for the ring
              }}
            >
              {/* Outer Spinning Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  inset: '-5px',
                  border: '2px dashed rgba(200, 169, 110, 0.2)',
                  borderRadius: '50%',
                }}
              />

              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 2
              }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImg}
                    src={splashImages[currentImg]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <h1 style={{ 
                color: '#C8A96E', 
                fontSize: '3.5rem', 
                fontFamily: "'Playfair Display', serif",
                fontWeight: '400',
                margin: 0,
                letterSpacing: '2px'
              }}>
                Skyview Estates
              </h1>
              <div style={{
                width: '100px',
                height: '2px',
                background: '#C8A96E',
                margin: '15px auto',
                opacity: 0.5
              }} />
              <p style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: '8px', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                Luxury Living Redefined
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
