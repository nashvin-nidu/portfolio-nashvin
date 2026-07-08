"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 32,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const lineParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const line: Variants = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 0.9, ease: EASE } },
};

/** Serif headline that slides up line-by-line from behind a clip mask. */
export function SplitLines({
  lines,
  className,
  as: Tag = "h2",
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  return (
    <motion.div
      variants={lineParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <Tag className={className}>
        {lines.map((text, i) => (
          <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
            <motion.span variants={line} className="block will-change-transform">
              {text}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}

/** Section header: index number + micro label + hairline rule. */
export function SectionHeader({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <Reveal>
      <div className="flex items-baseline gap-4 mb-12 md:mb-16">
        <span className="font-serif italic text-accent text-lg">{index}</span>
        <span className="micro-label">{label}</span>
        <span className="flex-1 h-px bg-line self-center" />
      </div>
    </Reveal>
  );
}
