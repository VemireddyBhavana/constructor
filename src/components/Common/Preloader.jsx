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
    }, 1200);

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
          transition={{ duration: 1, ease: "easeInOut" }}
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
          {/* Main Background Texture/Pattern */}
          <div style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage: `url(${IMAGES.heroHome})`,
            backgroundSize: 'cover',
            filter: 'grayscale(100%)'
          }} />

          <div className="loader-container" style={{ position: 'relative', textAlign: 'center' }}>
            {/* The Large Rounded Circle */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(200, 169, 110, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                marginBottom: '40px'
              }}
            >
              {/* Spinning Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  inset: '10px',
                  border: '1px dashed rgba(200, 169, 110, 0.3)',
                  borderRadius: '50%',
                }}
              />

              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImg}
                  src={splashImages[currentImg]}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    width: '70%',
                    height: '70%',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                  }}
                />
              </AnimatePresence>
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
