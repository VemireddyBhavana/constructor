import React from 'react';
import { PROPERTIES } from '../../constants/data';

const FeaturedPropertiesSection = () => (
  <section className="section-container text-center bg-white-full">
    <h2 className="section-title">Featured Properties</h2>
    <p className="section-subtitle">
      Discover our hand-picked selection of top-notch properties with outstanding features, 
      guaranteed to meet your real estate needs and exceed your expectations.
    </p>
    <div className="teal-line"></div>

    <div className="properties-grid">
      {PROPERTIES.map((property) => (
        <div key={property.id} className="property-card">
          <div className="property-img-container">
            <img src={property.image} alt={property.title} />
          </div>
          <div className="property-info">
            <span className="property-category">{property.category}</span>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <div className="property-price">{property.price}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedPropertiesSection;
