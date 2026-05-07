import React from 'react';
import { IMAGES } from '../../constants/data';

const AboutIntroSection = () => (
  <section className="section-container about-intro-section">
    <div className="about-intro-grid">
      <div className="about-intro-img">
        <img src={IMAGES.aboutIntro} alt="Modern House" />
      </div>
      <div className="about-intro-content">
        <h2 className="section-title left">About Us</h2>
        <div className="teal-line left"></div>
        <p className="lead-text">Welcome to Real Estate, your trusted partner in the world of real estate. With a passion for connecting people with their dream properties, we are dedicated to providing exceptional service and delivering outstanding results.</p>
        <p>At Real Estate, we pride ourselves on being a trusted and reputable name in the real estate industry. With years of experience and a dedicated team of professionals, we are committed to providing exceptional service to our clients. Whether you are buying, selling, or renting, we are here to guide you throughout the entire process and ensure a smooth and successful transaction.</p>
      </div>
    </div>
  </section>
);

export default AboutIntroSection;
