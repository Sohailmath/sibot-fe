import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// type SlidingInComponentProps = {
//   children: React.ReactNode,
//   class?: string, // optional prop to add custom classes
//   direction?: "left" | "right" | "up" | "down", // optional prop to specify slide direction
//   offset?: number, // optional prop to control animation start point
//   duration?: number, // optional prop to control animation duration
//   delay?: number, // optional prop to control animation delay
// };

const SlidingInComponent = ({
  children,
  class: className,
  direction = "down",
  offset = 30,
  duration = 0.5,
  delay = 0,
}) => {
  // Animation control from Framer Motion
  const controls = useAnimation();

  // Intersection Observer Ref
  const [ref, inView] = useInView({
    triggerOnce: true, // trigger the animation only once
    threshold: 0.1, // percentage of element visible before triggering
  });

  // Define animation variants
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -offset : direction === "right" ? offset : 0,
      y: direction === "up" ? -offset : direction === "down" ? offset : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay },
    },
  };

  // Start the animation when the element is in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default SlidingInComponent;
