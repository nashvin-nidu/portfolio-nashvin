"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site, skills } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 1.1, ease: EASE, delay: 0.15 + i * 0.12 },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const drift = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const marqueeItems = skills.flatMap((g) => g.items).slice(0, 14);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* warm radial glow behind the headline */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 30% 40%, rgba(200,155,106,0.10), transparent 65%)",
        }}
      />

      <motion.div
        style={{ y: drift, opacity: fade }}
        className="mx-auto w-full max-w-6xl px-6 md:px-10 pt-36 pb-16"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="micro-label mb-8 flex items-center gap-3"
        >
          <span className="inline-block size-1.5 rounded-full bg-accent animate-pulse" />
          Full-stack developer — {site.location}
        </motion.p>

        <h1 className="font-serif leading-[0.95] tracking-tight text-[clamp(3.2rem,11vw,9rem)]">
          <span className="block overflow-hidden">
            <motion.span
              custom={0}
              variants={rise}
              initial="hidden"
              animate="visible"
              className="block"
            >
              Nashvin
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              custom={1}
              variants={rise}
              initial="hidden"
              animate="visible"
              className="block italic text-accent"
            >
              Nidu
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
            className="max-w-md text-dim leading-relaxed"
          >
            {site.tagline}
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
            href="#work"
            className="group inline-flex items-center gap-3 text-sm shrink-0"
          >
            <span className="border-b border-accent-deep pb-1 group-hover:border-accent transition-colors">
              Selected work
            </span>
            <span className="text-accent transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* skills marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.1 }}
        className="border-y border-line py-4 overflow-hidden select-none"
      >
        <div className="marquee-track flex w-max gap-0 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex">
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-6 px-6 text-sm text-dim"
                >
                  {item}
                  <span className="text-accent-deep font-serif italic">✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
