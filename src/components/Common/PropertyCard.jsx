import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
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
  );
};

export default PropertyCard;
