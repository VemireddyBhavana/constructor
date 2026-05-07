import React from 'react';
import PropertyCard from '../Common/PropertyCard';
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
      {PROPERTIES.slice(0, 6).map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  </section>
);

export default FeaturedPropertiesSection;
