import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SlideInOnScrollProps {
  direction?: "left" | "right";
  children: ReactNode;
}

const SlideInOnScroll : React.FC<SlideInOnScrollProps> = ({ direction = "left", children }) => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.5, // Trigger when 20% of component is in view
    
  });

  const variants: Variants = {
    hidden: {
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default SlideInOnScroll;
