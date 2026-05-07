import React from 'react';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="property-img-container">
        <img src={property.image} alt={property.title} />
      </div>
      <div className="property-info" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <span className="property-category">{property.category}</span>
        <h3>{property.title}</h3>
        <p style={{ flexGrow: 1 }}>{property.description}</p>
        <div className="property-specs">
          <span>🛏️ {property.beds} Beds</span>
          <span>🚿 {property.baths} Baths</span>
          <span>📏 {property.sqft} sqft</span>
        </div>
        <div className="property-price">{property.price}</div>
      </div>
    </div>
  );
};

export default PropertyCard;
