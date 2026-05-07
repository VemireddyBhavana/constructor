import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Layout/Navbar';
import PropertyCard from '../components/Common/PropertyCard';
import ScrollReveal from '../components/Common/ScrollReveal';
import { IMAGES, PROPERTIES } from '../constants/data';

const Properties = () => {
  const [filter, setFilter] = useState('ALL');
  const [subFilter, setSubFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  const categories = ['ALL', 'APARTMENT', 'VILLA', 'PENTHOUSE', 'HOUSE'];
  const villaSubCategories = ['ALL', '1BHK', '2BHK', '3BHK', '4BHK', 'FLATS'];

  const filteredProperties = PROPERTIES.filter(property => {
    const matchesFilter = filter === 'ALL' || property.category === filter;
    const matchesSubFilter = subFilter === 'ALL' || property.subCategory === subFilter;

    // Search across ALL fields when search is active
    const q = search.toLowerCase().trim();
    const matchesSearch = !q || [
      property.title,
      property.description,
      property.category,
      property.subCategory || '',
      property.price,
      String(property.beds) + ' bed',
      String(property.beds) + ' beds',
      String(property.baths) + ' bath',
      String(property.baths) + ' baths',
      property.sqft + ' sqft',
      property.sqft,
    ].some(field => field.toLowerCase().includes(q));

    return matchesFilter && matchesSubFilter && matchesSearch;
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setSubFilter('ALL');
  };

  const handleSearch = (e) => {
    const val = e.target.value;
    setSearch(val);
    // When searching, reset category filters so no results are hidden
    if (val.trim() !== '') {
      setFilter('ALL');
      setSubFilter('ALL');
    }
  };

  return (
    <>
      <header className="hero-section small" style={{ backgroundImage: `url(${IMAGES.heroHome})` }}>
        <div className="hero-overlay">
          <Navbar />
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="hero-subtitle">Listings</span>
              <h1 className="hero-title">Looking to Buy, Sell, Rent, Invest or Manage?</h1>
            </motion.div>
          </div>
        </div>
      </header>

      <div className="section-container">
        <div className="properties-controls">
          <div className="filter-group">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                onClick={() => handleFilterChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search by name, type, beds, price..." 
              value={search}
              onChange={handleSearch}
            />
          </div>
        </div>

        {filter === 'VILLA' && (
          <motion.div 
            className="sub-filter-group"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {villaSubCategories.map(sub => (
              <button 
                key={sub} 
                className={`sub-filter-btn ${subFilter === sub ? 'active' : ''}`}
                onClick={() => setSubFilter(sub)}
              >
                {sub}
              </button>
            ))}
          </motion.div>
        )}

        <div className="properties-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
              <ScrollReveal key={property.id}>
                <PropertyCard property={property} />
              </ScrollReveal>
            ))
          ) : (
            <div className="no-results">No properties found matching your criteria.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Properties;
