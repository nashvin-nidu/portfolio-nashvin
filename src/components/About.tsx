"use client";

import { about, skills } from "@/lib/data";
import { Reveal, SectionHeader, SplitLines } from "./motion";

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-raised/40">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-28 md:py-36">
        <SectionHeader index="03" label="About" />

        <SplitLines
          as="h2"
          className="font-serif text-3xl md:text-5xl leading-tight tracking-tight max-w-4xl"
          lines={["Performance-obsessed,", "detail-driven, and allergic", "to slow software."]}
        />

        <div className="mt-16 grid md:grid-cols-[1.4fr_1fr] gap-14">
          <div className="space-y-6">
            {about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-dim leading-relaxed">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <dl className="space-y-5 border-l border-line pl-8">
              {about.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="micro-label">{fact.label}</dt>
                  <dd className="mt-1">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 0.07}>
              <h3 className="micro-label mb-4">{group.group}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-dim text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
