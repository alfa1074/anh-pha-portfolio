"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  /** Delay in seconds before the fade begins. */
  delay?: number;
  className?: string;
  /** Render as a specific element. Defaults to a div. */
  as?: "div" | "section" | "article" | "li";
}

/**
 * Fade-only animation wrapper (0.5s), per the design system.
 * Animates once when scrolled into view and respects reduced-motion.
 */
export function FadeIn({
  children,
  delay = 0,
  className,
  as = "div",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}
