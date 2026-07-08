"use client";

import { site } from "@/lib/data";
import { Reveal, SplitLines } from "./motion";

const socials = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "X / Twitter", href: site.twitter },
];

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-line bg-raised/40">
      <div className="mx-auto max-w-6xl px-6 md:px-10 pt-28 md:pt-36 pb-10">
        <p className="micro-label mb-8">Get in touch</p>

        <SplitLines
          as="h2"
          className="font-serif tracking-tight leading-[1.02] text-[clamp(2.6rem,7.5vw,6rem)]"
          lines={["Let’s build something", "worth shipping."]}
        />

        <Reveal delay={0.2} className="mt-12">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-4 text-xl md:text-2xl"
          >
            <span className="border-b border-accent-deep pb-1 group-hover:border-accent group-hover:text-accent transition-colors duration-300">
              {site.email}
            </span>
            <span className="text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </Reveal>

        <div className="mt-24 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-dim text-sm">
            © {new Date().getFullYear()} {site.shortName} — {site.location}
          </p>
          <nav className="flex gap-8">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-dim hover:text-accent transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
