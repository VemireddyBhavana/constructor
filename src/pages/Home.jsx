import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import WhatWeDoSection from '../components/Sections/WhatWeDoSection';
import FeaturedPropertiesSection from '../components/Sections/FeaturedPropertiesSection';
import TestimonialsSection from '../components/Sections/TestimonialsSection';
import PassionSection from '../components/Sections/PassionSection';
import ScrollReveal from '../components/Common/ScrollReveal';
import { IMAGES } from '../constants/data';
import AntiGravitySection from '../components/Sections/AntiGravitySection';

import DreamHomeQuiz from '../components/Common/DreamHomeQuiz';

const heroSlides = [
  {
    image: IMAGES.heroHome,
    subtitle: "Curated collection of ultra-luxury estates for the most discerning homeowners.",
    title: "Exceptional Homes for the Discerning Few"
  },
  {
    image: IMAGES.heroHome2,
    subtitle: "Experience architectural excellence and unmatched elegance in the heart of the city.",
    title: "Discover Your Sanctuary of Elegance"
  },
  {
    image: IMAGES.heroHome3,
    subtitle: "A legacy of premium living, meticulously crafted for your comfort and prestige.",
    title: "The Pinnacle of Sophisticated Living"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-with-swimming-pool-41655-large.mp4");
  const [inputUrl, setInputUrl] = useState("");

  const handleSetUrl = () => {
    if (inputUrl.trim() !== "") {
      setVideoUrl(inputUrl.trim());
      setInputUrl("");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setVideoUrl(objectUrl);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showQuiz && <DreamHomeQuiz onClose={() => setShowQuiz(false)} />}
      </AnimatePresence>

      {/* Cinematic Walkthrough Video Modal */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="video-modal-overlay"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="video-modal-container"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="video-modal-close" onClick={() => setShowVideoModal(false)}>
                &times;
              </button>
              <div className="video-wrapper">
                <video
                  key={videoUrl}
                  src={videoUrl}
                  autoPlay
                  controls
                  className="modal-video-element"
                />
              </div>
              
              {/* Premium Video Customizer Controls */}
              <div className="video-customizer-panel">
                <span className="customizer-label">🎥 Customize Video Source:</span>
                <div className="customizer-inputs">
                  <input 
                    type="text" 
                    placeholder="Paste your MP4 link / YouTube direct video URL..." 
                    value={inputUrl} 
                    onChange={(e) => setInputUrl(e.target.value)}
                    className="customizer-url-input"
                  />
                  <button className="btn-set-url" onClick={handleSetUrl}>
                    Set Link
                  </button>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>or</span>
                  <label className="btn-upload-file">
                    Upload Local MP4
                    <input 
                      type="file" 
                      accept="video/*" 
                      style={{ display: 'none' }} 
                      onChange={handleFileChange} 
                    />
                  </label>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Slider Section */}
      <header className="hero-section">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`bg-${currentSlide}`}
            className="hero-slide-bg"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
        </AnimatePresence>

        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.1, 
                  ease: "easeOut" 
                }}
              >
                <motion.span 
                  className="hero-subtitle"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.span>
                <h1 className="hero-title">{heroSlides[currentSlide].title}</h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="hero-buttons-container"
                >
                  <Link to="/designs">
                    <button className="btn-hero">Explore Estates</button>
                  </Link>
                  <button className="btn-hero" style={{ background: '#D4AF37', color: 'black' }} onClick={() => setShowQuiz(true)}>
                    Find My Match
                  </button>
                  <button 
                    className="btn-hero watch-video-btn" 
                    onClick={() => setShowVideoModal(true)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      backdropFilter: 'blur(5px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      justifyContent: 'center'
                    }}
                  >
                    <span style={{ fontSize: '0.8rem', color: '#D4AF37' }}>▶</span> Watch Video
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Dots */}
          <div className="slider-dots">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </header>

      <AntiGravitySection />

      <ScrollReveal>
        <WhatWeDoSection />
      </ScrollReveal>

      <ScrollReveal>
        <div className="ai-cta-section" style={{ 
          padding: '140px 20px', 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('/assets/ai-bg-v2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="section-container ai-cta-container">
            <span className="ai-cta-tag">AI Powered Discovery</span>
            <h2 className="ai-cta-title">Find Your Dream Home in Seconds</h2>
            <p className="ai-cta-desc">
              Our AI property matching engine analyzes your lifestyle preferences, budget, and architectural tastes to curate a selection of homes that feel like they were built just for you.
            </p>
            <button className="btn-hero ai-cta-btn" onClick={() => setShowQuiz(true)}>Start AI Matching Quiz</button>
          </div>
          <style dangerouslySetInnerHTML={{ __html: `
            .ai-cta-section {
              padding: 140px 20px;
              text-align: center;
              position: relative;
              overflow: hidden;
            }
            .ai-cta-container {
              position: relative;
              zIndex: 2;
            }
            .ai-cta-tag {
              color: #D4AF37;
              letter-spacing: 3px;
              text-transform: uppercase;
              font-size: 0.9rem;
              font-weight: 600;
            }
            .ai-cta-title {
              font-size: clamp(2rem, 5vw, 3.5rem);
              margin: 20px 0;
              color: white;
              font-family: 'Playfair Display', serif;
            }
            .ai-cta-desc {
              max-width: 700px;
              margin: 0 auto 40px;
              color: rgba(255, 255, 255, 0.7);
              font-size: 1.1rem;
              line-height: 1.8;
            }
            .ai-cta-btn {
              background: #D4AF37 !important;
              color: black !important;
              border: none !important;
              font-weight: 700 !important;
            }
            @media (max-width: 768px) {
              .ai-cta-section {
                padding: 80px 20px !important;
              }
              .ai-cta-title {
                font-size: 2.2rem !important;
              }
              .ai-cta-desc {
                font-size: 1rem !important;
              }
            }
            .watch-video-btn {
              transition: all 0.3s ease !important;
            }
            .watch-video-btn:hover {
              background: rgba(255, 255, 255, 0.2) !important;
              border-color: #D4AF37 !important;
              color: #D4AF37 !important;
              transform: translateY(-2px);
              box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
            }
            .video-modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(0, 0, 0, 0.85);
              backdrop-filter: blur(8px);
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 9999;
              padding: 20px;
            }
            .video-modal-container {
              position: relative;
              width: 100%;
              max-width: 900px;
              background: #000;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 25px 50px -12px rgba(212, 175, 55, 0.25);
              border: 1px solid rgba(212, 175, 55, 0.2);
              display: flex;
              flex-direction: column;
            }
            .video-modal-close {
              position: absolute;
              top: 15px;
              right: 20px;
              background: rgba(0, 0, 0, 0.5);
              border: 1px solid rgba(255, 255, 255, 0.2);
              color: white;
              font-size: 2rem;
              line-height: 1;
              cursor: pointer;
              border-radius: 50%;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 10;
              transition: all 0.3s ease;
            }
            .video-modal-close:hover {
              background: #D4AF37;
              color: black;
              border-color: #D4AF37;
              transform: scale(1.1);
            }
            .video-wrapper {
              width: 100%;
              aspect-ratio: 16/9;
              position: relative;
            }
            .video-customizer-panel {
              background: rgba(20, 20, 20, 0.95);
              border-top: 1px solid rgba(212, 175, 55, 0.2);
              padding: 15px 20px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 15px;
              flex-wrap: wrap;
            }
            .customizer-label {
              color: #D4AF37;
              font-family: var(--font-heading);
              font-weight: 600;
              font-size: 0.9rem;
            }
            .customizer-inputs {
              display: flex;
              gap: 10px;
              flex-grow: 1;
              max-width: 650px;
              align-items: center;
            }
            .customizer-url-input {
              flex-grow: 1;
              background: rgba(0, 0, 0, 0.5);
              border: 1px solid rgba(255, 255, 255, 0.2);
              color: white;
              padding: 8px 12px;
              border-radius: 8px;
              font-size: 0.85rem;
              outline: none;
              transition: all 0.3s ease;
            }
            .customizer-url-input:focus {
              border-color: #D4AF37;
              box-shadow: 0 0 10px rgba(212, 175, 55, 0.2);
            }
            .btn-set-url {
              background: #D4AF37;
              color: black;
              border: none;
              padding: 8px 16px;
              border-radius: 8px;
              font-weight: 600;
              font-size: 0.85rem;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            .btn-set-url:hover {
              background: white;
              transform: translateY(-1px);
            }
            .btn-upload-file {
              background: rgba(255, 255, 255, 0.1);
              color: white;
              border: 1px solid rgba(255, 255, 255, 0.2);
              padding: 7px 16px;
              border-radius: 8px;
              font-weight: 600;
              font-size: 0.85rem;
              cursor: pointer;
              transition: all 0.3s ease;
              white-space: nowrap;
            }
            .btn-upload-file:hover {
              background: rgba(255, 255, 255, 0.2);
              border-color: #D4AF37;
              color: #D4AF37;
            }
            .modal-video-element {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          `}} />
          {/* Animated Glow Effect */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 50%)',
            zIndex: 1,
            pointerEvents: 'none'
          }} />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <FeaturedPropertiesSection />
      </ScrollReveal>

      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      <ScrollReveal>
        <PassionSection />
      </ScrollReveal>
    </>
  );
};

export default Home;
