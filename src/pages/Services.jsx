import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Layout/Navbar';
import ServiceDetailSection from '../components/Sections/ServiceDetailSection';
import ScrollReveal from '../components/Common/ScrollReveal';
import { IMAGES, SERVICES } from '../constants/data';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section" style={{ backgroundImage: `url(${IMAGES.heroServices})` }}>
        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <span className="hero-subtitle">Services</span>
              <h1 className="hero-title">We offer a wide Range of Services</h1>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Service Details */}
      <div className="services-page-content">
        {SERVICES.map((service, index) => (
          <ScrollReveal key={service.id} direction={index % 2 === 0 ? "left" : "right"}>
            <ServiceDetailSection 
              id={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              isReversed={index % 2 !== 0}
            />
          </ScrollReveal>
        ))}
      </div>
    </>
  );
};

export default Services;
