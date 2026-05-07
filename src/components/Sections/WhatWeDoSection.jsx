import React from 'react';
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
        <div key={service.id} className="service-card">
          <div className="service-img-container">
            <img src={service.image} alt={service.title} />
          </div>
          <span className="service-num">0{index + 1}</span>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhatWeDoSection;
