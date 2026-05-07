import React from 'react';
import Navbar from '../components/Layout/Navbar';
import ServiceDetailSection from '../components/Sections/ServiceDetailSection';
import { IMAGES, SERVICES } from '../constants/data';

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero-section" style={{ backgroundImage: `url(${IMAGES.heroServices})` }}>
        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <span className="hero-subtitle">Services</span>
            <h1 className="hero-title">We offer a wide Range of Services</h1>
          </div>
        </div>
      </header>

      {/* Service Details */}
      <div className="services-page-content">
        {SERVICES.map((service, index) => (
          <ServiceDetailSection 
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </>
  );
};

export default Services;
