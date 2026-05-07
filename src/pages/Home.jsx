import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import WhatWeDoSection from '../components/Sections/WhatWeDoSection';
import FeaturedPropertiesSection from '../components/Sections/FeaturedPropertiesSection';
import TestimonialsSection from '../components/Sections/TestimonialsSection';
import PassionSection from '../components/Sections/PassionSection';
import ScrollReveal from '../components/Common/ScrollReveal';
import { IMAGES } from '../constants/data';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section" style={{ backgroundImage: `url(${IMAGES.heroHome})` }}>
        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="hero-subtitle">The Pinnacle of Luxury Living</span>
              <h1 className="hero-title">Exceptional Homes for the Discerning Few</h1>
              <Link to="/properties/all">
                <button className="btn-primary">Explore Estates</button>
              </Link>
            </motion.div>
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
