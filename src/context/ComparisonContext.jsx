import React, { createContext, useContext, useState } from 'react';

const ComparisonContext = createContext();

export const ComparisonProvider = ({ children }) => {
  const [comparisonList, setComparisonList] = useState([]);

  const toggleComparison = (property) => {
    setComparisonList(prev => {
      const exists = prev.find(p => p.id === property.id);
      if (exists) {
        return prev.filter(p => p.id !== property.id);
      }
      if (prev.length >= 3) {
        alert("You can compare up to 3 properties at a time.");
        return prev;
      }
      return [...prev, property];
    });
  };

  const removeFromComparison = (propertyId) => {
    setComparisonList(prev => prev.filter(p => p.id !== propertyId));
  };

  const clearComparison = () => setComparisonList([]);

  const isInComparison = (propertyId) => comparisonList.some(p => p.id === propertyId);

  return (
    <ComparisonContext.Provider value={{ 
      comparisonList, 
      toggleComparison, 
      removeFromComparison, 
      clearComparison, 
      isInComparison 
    }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};
