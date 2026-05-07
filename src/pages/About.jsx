import React from 'react';
import Navbar from '../components/Layout/Navbar';
import AboutIntroSection from '../components/Sections/AboutIntroSection';
import ClientCentricSection from '../components/Sections/ClientCentricSection';
import OurStorySection from '../components/Sections/OurStorySection';
import { IMAGES } from '../constants/data';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section" style={{ backgroundImage: `url(${IMAGES.heroAbout})` }}>
        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <span className="hero-subtitle">About</span>
            <h1 className="hero-title">Discover Our Story and Expertise</h1>
          </div>
        </div>
      </header>

      <AboutIntroSection />
      <ClientCentricSection />
      <OurStorySection />
    </>
  );
};

export default About;
