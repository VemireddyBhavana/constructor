import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useFavorites } from '../../context/FavoritesContext';
import { useComparison } from '../../context/ComparisonContext';

const PropertyCard = ({ property }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { toggleComparison, isInComparison } = useComparison();
  
  const favorited = isFavorite(property.id);
  const inComparison = isInComparison(property.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5 }}
      style={{ position: 'relative' }}
    >
      <div className="card-actions" style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10, display: 'flex', gap: '10px' }}>
        <button 
          className={`compare-btn ${inComparison ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleComparison(property);
          }}
          style={{
            background: inComparison ? '#D4AF37' : 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            fontSize: '1rem',
            color: inComparison ? 'white' : '#666'
          }}
          title={inComparison ? "Remove from Compare" : "Add to Compare"}
        >
          🔄
        </button>
        <button 
          className={`favorite-btn ${favorited ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(property.id);
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            fontSize: '1.2rem',
            color: favorited ? '#ff4757' : '#ccc'
          }}
        >
          {favorited ? '❤️' : '🤍'}
        </button>
      </div>
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
