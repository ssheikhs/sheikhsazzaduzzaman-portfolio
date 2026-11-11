import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolio.js";
import { AnimatePresence, motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";
import { ease, fadeUp, Reveal } from "./Motion.jsx";

export function ProjectCard({ p, variants = fadeUp }) {
  return (
    <motion.article
      variants={variants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(15,30,61,0.45)]"
    >
      <Link to={`/projects/${p.slug}`} tabIndex={-1} aria-hidden="true" className="block overflow-hidden border-b border-line bg-paper">
        <img
          src={p.cover}
          alt=""
          loading="lazy"
          className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-brand">{p.category}</p>
        <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
        <p className="mt-2 flex-1 text-muted">{p.tagline}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Main technologies">
          {p.cardStack.map((s) => (
            <li key={s} className="chip bg-paper">{s}</li>
          ))}
        </ul>
        <div className="mt-6">
          <Link to={`/projects/${p.slug}`} className="btn-dark">
            View details<span className="sr-only"> about {p.name}</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

const FILTERS = [
  { id: "all", label: "All" },
  { id: "web", label: "Web apps" },
  { id: "mobile", label: "Mobile apps" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const shown = projects.filter((p) => filter === "all" || p.type === filter);
  const count = (id) => (id === "all" ? projects.length : projects.filter((p) => p.type === id).length);

  return (
    <section id="projects" className="border-y border-line bg-surface py-20 md:py-28">
      <div className="container-x">
        <SectionHeading title="Projects">
          Web and mobile apps I've designed and built, from full-stack platforms to Flutter and Android apps. Open any
          project for its stack, the hard parts and what I'd build next.
        </SectionHeading>

        <Reveal className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === f.id ? "text-white" : "text-muted hover:text-ink"
              }`}
            >
              {filter === f.id && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">
                {f.label} <span className="opacity-60">{count(f.id)}</span>
              </span>
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                className="flex"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease, delay: (i % 3) * 0.08 }}
              >
                <ProjectCard p={p} variants={undefined} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
