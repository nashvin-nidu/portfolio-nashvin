"use client";

import { certifications, leadership, research } from "@/lib/data";
import { Reveal, SectionHeader } from "./motion";

export default function Research() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-28 md:py-36">
      <SectionHeader index="04" label="Research & Beyond" />

      <div className="grid lg:grid-cols-2 gap-16">
        <Reveal>
          <article className="border border-line rounded-2xl p-8 md:p-10 h-full bg-raised/40">
            <p className="micro-label mb-4">{research.type}</p>
            <h3 className="font-serif text-2xl md:text-3xl tracking-tight leading-snug">
              {research.title}
            </h3>
            <ul className="mt-6 space-y-3">
              {research.points.map((point) => (
                <li
                  key={point}
                  className="text-dim text-[0.95rem] leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-accent-deep"
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={0.1}>
            <h3 className="micro-label mb-6">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.name} className="border-b border-line pb-6">
                  <p className="font-serif text-xl">
                    {cert.name}
                    <span className="text-accent text-sm font-sans ml-3">
                      {cert.issuer}
                    </span>
                  </p>
                  <p className="mt-2 text-dim text-sm leading-relaxed">
                    {cert.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h3 className="micro-label mb-6">Leadership</h3>
            <div className="space-y-6">
              {leadership.map((item) => (
                <div key={item.org}>
                  <p className="font-serif text-xl">
                    {item.org}
                    <span className="text-accent text-sm font-sans ml-3">
                      {item.role}
                    </span>
                  </p>
                  <p className="mt-2 text-dim text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
