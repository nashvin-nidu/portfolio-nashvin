"use client";

import { experience } from "@/lib/data";
import { Reveal, SectionHeader } from "./motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-6 md:px-10 py-28 md:py-36"
    >
      <SectionHeader index="02" label="Experience" />

      <div className="space-y-20">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <article className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-12">
              <div>
                <p className="micro-label">{job.period}</p>
                <p className="mt-2 text-dim text-sm">{job.location}</p>
              </div>
              <div>
                <h3 className="font-serif text-3xl md:text-4xl tracking-tight">
                  {job.company}
                </h3>
                <p className="mt-1 text-accent text-sm">{job.role}</p>
                <ul className="mt-6 space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-dim leading-relaxed text-[0.95rem] pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-accent-deep"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-dim border border-line rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
