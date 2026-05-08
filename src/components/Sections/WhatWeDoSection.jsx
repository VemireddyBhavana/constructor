import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants/data';

const WhatWeDoSection = () => (
  <section className="section-container text-center">
    <h2 className="section-title">Our Expertise</h2>
    <p className="section-subtitle">
      From curated investment portfolios to bespoke residential management, 
      we redefine the luxury real estate experience through precision, passion, and unparalleled expertise.
    </p>
    <div className="teal-line"></div>
    
    <div className="services-grid">
      {SERVICES.map((service, index) => (
        <motion.div 
          key={service.id} 
          className="service-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="service-img-container">
            <img src={service.image} alt={service.title} />
          </div>
          <span className="service-num">0{index + 1}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhatWeDoSection;
