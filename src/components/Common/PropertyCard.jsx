import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/property/${property.id}`} className="property-card" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="property-img-container">
          <img src={property.image} alt={property.title} />
        </div>
        <div className="property-info">
          <span className="property-category">{property.category}</span>
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          
          <div className="property-footer">
            <div className="property-specs">
              <span>🛏️ {property.beds} Beds</span>
              <span>🚿 {property.baths} Baths</span>
              <span>📏 {property.sqft} sqft</span>
            </div>
            <div className="property-price">{property.price}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
