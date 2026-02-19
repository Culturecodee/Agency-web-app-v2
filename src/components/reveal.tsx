"use client";

import * as React from "react";
import { motion, useInView, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.25, once });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={defaultVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.65, ease: [0.21, 0.61, 0.35, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

