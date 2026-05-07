import React from 'react';
import Navbar from '../components/Layout/Navbar';
import WhatWeDoSection from '../components/Sections/WhatWeDoSection';
import FeaturedPropertiesSection from '../components/Sections/FeaturedPropertiesSection';
import TestimonialsSection from '../components/Sections/TestimonialsSection';
import PassionSection from '../components/Sections/PassionSection';
import { IMAGES } from '../constants/data';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section" style={{ backgroundImage: `url(${IMAGES.heroHome})` }}>
        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <span className="hero-subtitle">Discover Your Dream Home with Us</span>
            <h1 className="hero-title">Find the Perfect Property for Your Lifestyle</h1>
            <button className="btn-primary">Start Searching</button>
          </div>
        </div>
      </header>

      <WhatWeDoSection />
      <FeaturedPropertiesSection />
      <TestimonialsSection />
      <PassionSection />
    </>
  );
};

export default Home;
