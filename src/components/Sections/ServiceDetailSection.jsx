import React from 'react';

const ServiceDetailSection = ({ id, title, description, image, isReversed }) => (
  <section className={`section-container service-detail-section ${isReversed ? 'reversed' : ''}`}>
    <div className="service-detail-grid">
      <div className="service-detail-img">
        <img src={image} alt={title} />
      </div>
      <div className="service-detail-content">
        <span className="service-num">{id}</span>
        <h2 className="section-title left">{title}</h2>
        <div className="teal-line left"></div>
        <p>{description}</p>
      </div>
    </div>
  </section>
);

export default ServiceDetailSection;
