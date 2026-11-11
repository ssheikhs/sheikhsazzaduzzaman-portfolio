import { Link } from "react-router-dom";
import { projects } from "../data/portfolio.js";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";
import { fadeUp, RevealGroup } from "./Motion.jsx";

export function ProjectCard({ p }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow duration-300 hover:shadow-[0_24px_48px_-28px_rgba(15,30,61,0.45)]"
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

export default function Projects() {
  return (
    <section id="projects" className="border-y border-line bg-surface py-20 md:py-28">
      <div className="container-x">
        <SectionHeading title="Projects">
          Four projects I'm proud of, across the web, Android and machine learning. Open any of them for the stack,
          the hard parts and what I'd build next.
        </SectionHeading>
        <RevealGroup gap={0.12} className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
