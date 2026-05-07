import React from 'react';
import Navbar from '../components/Layout/Navbar';

const aboutBg = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000"

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section" style={{ backgroundImage: `url(${aboutBg})` }}>
        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <span className="hero-subtitle">About</span>
            <h1 className="hero-title">Discover Our Story and Expertise</h1>
          </div>
        </div>
      </header>

      {/* About Us Intro Section */}
      <section className="section-container about-intro-section">
        <div className="about-intro-grid">
          <div className="about-intro-img">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000" alt="Modern House" />
          </div>
          <div className="about-intro-content">
            <h2 className="section-title left">About Us</h2>
            <div className="teal-line left"></div>
            <p className="lead-text">Welcome to Real Estate, your trusted partner in the world of real estate. With a passion for connecting people with their dream properties, we are dedicated to providing exceptional service and delivering outstanding results.</p>
            <p>At Real Estate, we pride ourselves on being a trusted and reputable name in the real estate industry. With years of experience and a dedicated team of professionals, we are committed to providing exceptional service to our clients. Whether you are buying, selling, or renting, we are here to guide you throughout the entire process and ensure a smooth and successful transaction.</p>
          </div>
        </div>
      </section>

      {/* Client-Centric Section */}
      <section className="section-container text-center client-centric-section bg-cream">
        <span className="section-tag">CLIENT-CENTRIC APPROACH</span>
        <div className="teal-line"></div>
        <h2 className="large-quote">Our clients are our priority. Exceptional customer service and personalized experiences define our company culture.</h2>
      </section>

      {/* Our Story Section */}
      <section className="section-container our-story-section">
        <div className="our-story-grid">
          <div className="our-story-content">
            <h2 className="section-title left">Our Story</h2>
            <div className="teal-line left"></div>
            <p className="lead-text">Built on a foundation of trust, integrity, and a deep-rooted passion for architectural excellence.</p>
            <p>From our humble beginnings to becoming a leader in the luxury real estate market, our journey has always been defined by the people we serve. We believe that a home is more than just a property; it's a sanctuary where life unfolds. Over the years, we have refined our expertise to offer an unparalleled experience, combining data-driven insights with a personal touch that ensures every client finds their perfect match.</p>
            <p>Our commitment goes beyond transactions. We strive to build lasting relationships and contribute to the growth of the communities we operate in. With a team of experts who understand the nuances of the local and global markets, we are here to turn your real estate aspirations into reality.</p>
          </div>
          <div className="our-story-img">
            <img src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1000" alt="Modern Interior" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
