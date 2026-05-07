import React from 'react';
import { SERVICES } from '../../constants/data';

const WhatWeDoSection = () => (
  <section className="section-container text-center">
    <h2 className="section-title">What We Do</h2>
    <p className="section-subtitle">
      Simplifying the journey of buying, selling, and renting properties. Our expert team 
      provides comprehensive real estate solutions tailored to your needs
    </p>
    <div className="teal-line"></div>
    
    <div className="services-grid">
      {SERVICES.map((service) => (
        <div key={service.id} className="service-card">
          <span className="service-num">{service.id}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhatWeDoSection;
