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

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
      {/* Hero Slider Section */}
      <header className="hero-section">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-slide-bg"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
        </AnimatePresence>

        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
              >
                <span className="hero-subtitle">{heroSlides[currentSlide].subtitle}</span>
                <h1 className="hero-title">{heroSlides[currentSlide].title}</h1>
                <Link to="/properties/all">
                  <button className="btn-hero">Explore Estates</button>
                </Link>
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

      <ScrollReveal>
        <WhatWeDoSection />
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
