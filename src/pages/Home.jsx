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
import Preloader from '../components/Common/Preloader';
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
      <Preloader />
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
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5, 
                  ease: "easeOut" 
                }}
              >
                <motion.span 
                  className="hero-subtitle"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.span>
                <h1 className="hero-title">{heroSlides[currentSlide].title}</h1>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0 }}
                  style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}
                >
                  <Link to="/properties/all">
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
        <div className="ai-cta-section" style={{ padding: '80px 20px', background: '#0a0a0a', textAlign: 'center' }}>
          <div className="section-container">
            <span style={{ color: '#D4AF37', letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: '600' }}>AI Powered Discovery</span>
            <h2 style={{ fontSize: '3rem', margin: '20px 0', color: 'white' }}>Find Your Dream Home in Seconds</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 40px', color: '#888', fontSize: '1.1rem' }}>
              Our AI property matching engine analyzes your lifestyle preferences, budget, and architectural tastes to curate a selection of homes that feel like they were built just for you.
            </p>
            <button className="btn-hero" onClick={() => setShowQuiz(true)}>Start AI Matching Quiz</button>
          </div>
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
