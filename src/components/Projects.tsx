"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Reveal, SectionHeader } from "./motion";

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const href = project.live ?? project.repo;

  return (
    <motion.li
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-b border-line first:border-t px-2 md:px-4 -mx-2 md:-mx-4 transition-colors duration-300 hover:bg-raised/60"
    >
      {/* stretched link: covers the whole row without wrapping other links */}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — ${project.live ? "live site" : "GitHub"}`}
          className="absolute inset-0 z-0"
        />
      )}

      <div className="grid md:grid-cols-[auto_1fr_auto] items-baseline gap-x-8 gap-y-3 py-9 md:py-11">
        <span className="font-serif italic text-dim text-sm w-10">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="font-serif text-3xl md:text-5xl tracking-tight transition-colors duration-300 group-hover:text-accent">
              {project.title}
            </h3>
            <span className="text-dim text-sm">{project.year}</span>
          </div>
          <p className="mt-3 max-w-xl text-dim leading-relaxed text-[0.95rem]">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-dim border border-line rounded-full px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex md:flex-col items-start gap-3 text-sm justify-self-start md:justify-self-end">
          {project.live && (
            <span className="inline-flex items-center gap-2 text-accent">
              Live site
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                ↗
              </span>
            </span>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-dim hover:text-ink transition-colors relative z-10"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </motion.li>
  );
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 md:px-10 py-28 md:py-36">
      <SectionHeader index="01" label="Selected Work" />
      <Reveal className="mb-14">
        <h2 className="font-serif text-4xl md:text-6xl tracking-tight max-w-3xl">
          Things I&apos;ve <span className="italic text-accent">built</span> and
          shipped.
        </h2>
      </Reveal>
      <ul>
        {projects.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </ul>
    </section>
  );
}
