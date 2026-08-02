import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import "./MagneticButton.scss";

/**
 * MagneticButton — button that nudges toward the cursor on hover.
 * Usage: <MagneticButton onClick={...} variant="primary">Contact Me</MagneticButton>
 */
const MagneticButton = ({ children, onClick, href, variant = "primary", className = "" }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.3, y: relY * 0.3 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref}
      href={href}
      onClick={onClick}
      className={`magnetic-btn magnetic-btn--${variant} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.1 }}
    >
      <span>{children}</span>
    </Tag>
  );
};

export default MagneticButton;
