import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      const target = e.target;
      if (!target) return;

      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.closest('button, a, .property-card, .filter-btn');
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="cursor-outer"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.15)" : "rgba(212, 175, 55, 0)",
          borderColor: isHovered ? "rgba(212, 175, 55, 1)" : "rgba(212, 175, 55, 0.4)",
          width: isHovered ? 60 : 32,
          height: isHovered ? 60 : 32,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      />
      <motion.div
        className="cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.2 : 1,
        }}
      />
    </>
  );
};

export default CustomCursor;
