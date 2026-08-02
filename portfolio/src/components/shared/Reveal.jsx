import React from "react";
import { motion } from "framer-motion";

/**
 * Reveal — fades + slides content into place once it enters the viewport.
 * Wrap any block of content: <Reveal><h2>Title</h2></Reveal>
 *
 * Props:
 *  - delay: seconds to wait before animating (for staggered groups)
 *  - y: initial vertical offset in px (default 24)
 *  - as: motion element tag (default "div")
 */
const Reveal = ({ children, delay = 0, y = 24, as = "div", className = "" }) => {
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
};

// Stagger container — use with StaggerItem children
export const StaggerGroup = ({ children, className = "", staggerDelay = 0.08 }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: staggerDelay } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "", y = 20 }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y },
      show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    }}
  >
    {children}
  </motion.div>
);

export default Reveal;
