"use client"
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimationWrapper = ({
  children,
  keyValue,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 2 },
  className,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
  });

  return (
    <AnimatePresence>
      <motion.div
        className={className}
        initial={initial}
        animate={inView ? animate : initial}
        transition={transition}
        key={keyValue}
        ref={ref}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;
