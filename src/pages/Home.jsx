import React, { useState, useEffect } from 'react';
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

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
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
                  style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
                >
                  <Link to="/designs">
                    <button className="btn-hero">Explore Estates</button>
                  </Link>
                  <button className="btn-hero" style={{ background: '#D4AF37', color: 'black' }} onClick={() => setShowQuiz(true)}>
                    Find My Match
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
