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

    // Preload all critical images to prevent blank screen
    const allImages = [...splashImages, IMAGES.heroHome, IMAGES.heroHome2, IMAGES.heroHome3];
    allImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });

    // Timing: 6 seconds total as requested
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto'; // Restore scroll
    }, 6000);

    // Faster image cycle for cinematic feel
    const imgTimer = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % splashImages.length);
    }, 1200);

    return () => {
      clearTimeout(timer);
      clearInterval(imgTimer);
    };
  }, []);

  // Split text for staggering
  const letters = brandName.split("");

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            filter: "blur(20px)"
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#000',
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
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              position: 'absolute',
              width: '800px',
              height: '800px',
              background: 'radial-gradient(circle, rgba(200, 169, 110, 0.15) 0%, transparent 70%)',
              filter: 'blur(100px)',
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
            
            {/* Main Cinematic Circle - Perfect Centering & Masking */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: 'min(500px, 85vw)',
                height: 'min(500px, 85vw)',
                borderRadius: '50%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 100px rgba(200, 169, 110, 0.15)',
                marginBottom: '60px'
              }}
            >
              {/* Animated Outer Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  border: '1px solid rgba(200, 169, 110, 0.1)',
                  borderRadius: '50%'
                }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: 'absolute',
                  inset: '5px',
                  border: '1px dashed rgba(200, 169, 110, 0.2)',
                  borderRadius: '50%'
                }}
              />

              {/* Image Container with SVG Mask for Perfect Circle */}
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 2,
                backgroundColor: '#111',
                border: '2px solid rgba(200, 169, 110, 0.4)'
              }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImg}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
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
                    {/* Atmospheric Overlays */}
                    <div style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'radial-gradient(circle, transparent 20%, rgba(0,0,0,0.4) 100%)' 
                    }} />
                    <div style={{ 
                      position: 'absolute', 
                      inset: 0, 
                      background: 'rgba(200, 169, 110, 0.1)', 
                      mixBlendMode: 'overlay' 
                    }} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic Glow Halo */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  inset: '-20px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(200, 169, 110, 0.2) 0%, transparent 70%)',
                  zIndex: 1
                }}
              />
            </motion.div>

            {/* Brand Reveal */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                {letters.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 30, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ 
                      delay: 0.8 + (i * 0.08),
                      duration: 1,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                    style={{
                      color: letter === " " ? "transparent" : "#C8A96E",
                      fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
                      fontWeight: '300',
                      fontFamily: "'Playfair Display', serif",
                      letterSpacing: '0.15em',
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
                transition={{ delay: 2, duration: 1.5, ease: "circOut" }}
                style={{
                  height: '1px',
                  width: '200px',
                  background: 'linear-gradient(to right, transparent, #C8A96E, transparent)',
                  margin: '25px auto'
                }}
              />

              <motion.p
                initial={{ opacity: 0, letterSpacing: '0.2em' }}
                animate={{ opacity: 0.6, letterSpacing: '0.8em' }}
                transition={{ delay: 2.5, duration: 1.5 }}
                style={{
                  color: '#fff',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  margin: 0
                }}
              >
                ESTATES
              </motion.p>
            </div>
          </div>

          {/* Loading Progress Line at Bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 4, ease: "linear" }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(to right, transparent, #C8A96E, transparent)',
              transformOrigin: 'left'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
