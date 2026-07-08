"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/nashvin.png"
            alt="Nashvin Nidu"
            width={32}
            height={32}
            className="rounded-full border border-line object-cover"
          />
          <span className="font-serif italic text-lg tracking-tight">
            nashvin<span className="text-accent">.</span>
          </span>
        </a>
        <div className="hidden sm:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-dim hover:text-ink transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${site.email}`}
          className="text-sm border border-line rounded-full px-4 py-1.5 hover:border-accent hover:text-accent transition-colors duration-300"
        >
          Say hello
        </a>
      </nav>
    </motion.header>
  );
}
