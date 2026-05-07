import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      if (!target) return;

      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.closest('button, a, .property-card, .filter-btn');
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      transition: { type: "spring", damping: 30, stiffness: 300, mass: 0.5 }
    },
    hover: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 1.2,
      backgroundColor: "rgba(212, 175, 55, 0.1)",
      border: "1px solid rgba(212, 175, 55, 0.8)",
      transition: { type: "spring", damping: 20, stiffness: 300 }
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1.5,
      backgroundColor: "#D4AF37",
    }
  };

  return (
    <>
      <motion.div
        className="cursor-outer"
        variants={variants}
        animate={isHovered ? "hover" : "default"}
      />
      <motion.div
        className="cursor-dot"
        variants={dotVariants}
        animate={isHovered ? "hover" : "default"}
      />
    </>
  );
};

export default CustomCursor;
