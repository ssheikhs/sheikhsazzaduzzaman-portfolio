import { skillGroups } from "../data/portfolio.js";
import { SkillIcon } from "./Icons.jsx";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";
import { ease, Reveal, RevealGroup, RevealItem } from "./Motion.jsx";

// Card widths on large screens: Frontend + Android, Backend full width, then AI/ML + Tools
const SPANS = ["lg:col-span-3", "lg:col-span-3", "md:col-span-2 lg:col-span-6", "lg:col-span-2", "lg:col-span-4"];

function Legend() {
  return (
    <div className="mb-8 flex flex-wrap gap-5 text-sm text-muted">
      <span className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-brand" /> Use regularly
      </span>
      <span className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full border-2 border-brand" /> Currently learning
      </span>
    </div>
  );
}

export default function Skills() {
  const total = skillGroups.reduce((n, g) => n + g.skills.length, 0);

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading title="Skills">
          The tools I use to take an idea from a sketch to a working app, grouped by where they sit in the stack.
        </SectionHeading>

        {/* Stack overview bar: each segment's width is the share of skills in that group */}
        <Reveal className="mb-10" aria-hidden="true">
          <div className="flex h-3 overflow-hidden rounded-full bg-line">
            {skillGroups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ width: 0 }}
                whileInView={{ width: `${(g.skills.length / total) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease, delay: 0.1 + i * 0.12 }}
                style={{ opacity: 1 - i * 0.16 }}
                className="h-full bg-brand first:rounded-l-full last:rounded-r-full [&:not(:last-child)]:border-r-2 [&:not(:last-child)]:border-paper"
              />
            ))}
          </div>
          <div className="mt-3 hidden gap-x-6 text-sm text-muted md:flex">
            {skillGroups.map((g) => (
              <span key={g.title} style={{ width: `${(g.skills.length / total) * 100}%` }}>
                {g.title} <span className="text-ink">{g.skills.length}</span>
              </span>
            ))}
          </div>
        </Reveal>

        <Legend />

        <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((g, gi) => (
            <RevealItem
              as="article"
              key={g.title}
              className={`rounded-2xl border border-line bg-surface p-6 ${SPANS[gi] || ""}`}
            >
              <h3 className="text-xl font-semibold">{g.title}</h3>
              <p className="mt-1 text-sm text-muted">{g.note}</p>
              <ul className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-2.5">
                {g.skills.map((s) => (
                  <li
                    key={s.name}
                    className="group flex items-center gap-3 rounded-xl border border-line bg-paper px-3 py-2.5 transition-[border-color,transform,background-color] duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-white"
                  >
                    <span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-[1.3rem] transition-transform duration-300 group-hover:scale-110"
                      style={{ color: s.color }}
                    >
                      <SkillIcon name={s.icon} />
                    </span>
                    <span className="min-w-0 flex-1 text-[0.93rem] font-medium leading-tight">{s.name}</span>
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                        s.level === "daily" ? "bg-brand" : "border-2 border-brand"
                      }`}
                      title={s.level === "daily" ? "Use regularly" : "Currently learning"}
                    >
                      <span className="sr-only">{s.level === "daily" ? "Use regularly" : "Currently learning"}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
