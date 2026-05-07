import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleHover = (e) => {
      if (e.target.closest('button, a, .filter-btn, .sub-filter-btn, .property-card')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: "spring", damping: 30, stiffness: 200, mass: 0.5 }
    },
    hover: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "rgba(212, 175, 55, 0.15)",
      border: "1px solid rgba(212, 175, 55, 0.5)",
      mixBlendMode: "normal"
    }
  };

  const dotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    hover: {
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
