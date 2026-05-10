import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../../constants/data';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);
  
  const splashImages = [IMAGES.heroHome, IMAGES.heroHome2, IMAGES.heroHome3];
  const brandName = "SKYVIEW ESTATES";

  useEffect(() => {
    // Hide scrollbar while loading
    document.body.style.overflow = 'hidden';

    // Preload all critical images
    const allImages = [...splashImages];
    allImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

    // Timing: Reduced to 3.5 seconds for a snappy but cinematic entrance
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto'; 
    }, 3500);

    // Speed up sequence: Start name reveal at 0.5s, cycle images faster
    let imgInterval;
    const cycleTimeout = setTimeout(() => {
      imgInterval = setInterval(() => {
        setCurrentImg(prev => (prev + 1) % splashImages.length);
      }, 800); // Fast cycle
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(cycleTimeout);
      if (imgInterval) clearInterval(imgInterval);
    };
  }, []);

  const letters = brandName.split("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'var(--bg-primary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100000,
            overflow: 'hidden'
          }}
        >
          {/* Animated Background Orbs */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              position: 'absolute',
              width: '1000px',
              height: '1000px',
              background: 'radial-gradient(circle, rgba(200, 169, 110, 0.1) 0%, transparent 70%)',
              filter: 'blur(120px)',
              zIndex: 1
            }}
          />

          <div style={{ 
            position: 'relative', 
            zIndex: 10, 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%'
          }}>
            
            {/* Step 1: Image Reveal (Starts immediately) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: 'min(550px, 80vw)',
                height: 'min(550px, 80vw)',
                borderRadius: '50%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 120px rgba(200, 169, 110, 0.2)',
                marginBottom: '50px',
                border: '1px solid rgba(200, 169, 110, 0.3)'
              }}
            >
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 2,
                backgroundColor: '#111',
              }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <img 
                      src={splashImages[currentImg]} 
                      alt="Luxury Home" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.5) 100%)' 
                    }} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Halo Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  inset: '-15px',
                  border: '1px solid rgba(200, 169, 110, 0.15)',
                  borderRadius: '50%'
                }}
              />
            </motion.div>

            {/* Step 2: Brand Reveal (Starts after image is settled) */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                {letters.map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.8 + (i * 0.05), // Starts faster
                        duration: 0.6,
                        ease: "easeOut"
                      }}
                      style={{
                        color: letter === " " ? "transparent" : "#C8A96E",
                        fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                        fontWeight: '300',
                        fontFamily: "'Playfair Display', serif",
                        letterSpacing: '0.1em',
                        display: 'inline-block'
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                  ))}
                </div>
  
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 1 }} 
                  style={{
                    height: '1px',
                    width: '200px',
                    background: 'linear-gradient(to right, transparent, #C8A96E, transparent)',
                    margin: '20px auto'
                  }}
                />
  
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 2.2, duration: 1 }}
                  style={{
                    color: '#fff',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.8em',
                    margin: 0,
                    paddingLeft: '0.8em'
                  }}
                >
                  ESTATES
                </motion.p>
              </div>
            </div>
  
            {/* Progress Bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 3.5, ease: "linear" }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(to right, #000, #C8A96E, #000)',
                transformOrigin: 'left'
              }}
            />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
