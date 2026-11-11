import { experience } from "../data/portfolio.js";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading.jsx";
import { ease } from "./Motion.jsx";

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading title="Experience">Where I've built software for real users, most recent first.</SectionHeading>

        <ol className="relative pl-6 sm:pl-10">
          {/* Timeline line draws downward as the section comes into view */}
          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-0 w-0.5 origin-top bg-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "0px 0px -120px 0px" }}
            transition={{ duration: 1.2, ease }}
          />
          {experience.map((x, i) => (
            <motion.li
              key={x.role + x.company}
              className="relative pb-12 last:pb-0"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
            >
              <span
                className={`absolute -left-[calc(1.5rem+5px)] top-2 h-3 w-3 rounded-full ring-4 ring-paper sm:-left-[calc(2.5rem+5px)] ${
                  i === 0 ? "bg-brand" : "bg-ink/30"
                }`}
                aria-hidden="true"
              />
              <div className="grid gap-4 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="font-display font-semibold text-brand">{x.period}</p>
                  <p className="mt-1 text-sm text-muted">{x.type}</p>
                </div>
                <div className="lg:col-span-8">
                  <h3 className="text-2xl font-bold">{x.role}</h3>
                  <p className="mt-1 text-lg text-muted">{x.company}</p>
                  <ul className="mt-4 space-y-2.5">
                    {x.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-ink/40" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {x.stack.map((s) => (
                      <li key={s} className="chip">{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
