import { FiAward } from "react-icons/fi";
import { education } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import { Reveal } from "./Motion.jsx";

export default function Education() {
  return (
    <section id="education" className="border-y border-line bg-surface py-20 md:py-28">
      <div className="container-x">
        <SectionHeading title="Education" />
        {education.map((e) => (
          <Reveal as="article" key={e.degree} className="grid gap-8 rounded-3xl border border-line bg-paper p-6 sm:p-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-display text-lg font-semibold text-brand">{e.period}</p>
              <h3 className="mt-3 text-[1.75rem] font-bold sm:text-3xl">{e.degree}</h3>
              <p className="mt-2 text-lg text-muted">{e.school}</p>
            </div>
            <div className="lg:col-span-7">
              <dl className="divide-y divide-line">
                {e.details.map((d) => (
                  <div key={d.label} className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[8rem_1fr] sm:gap-4">
                    <dt className="text-sm text-muted">{d.label}</dt>
                    <dd className="font-medium">{d.value}</dd>
                  </div>
                ))}
              </dl>
              {e.achievement && (
                <p className="mt-6 flex gap-3 rounded-2xl bg-ink p-5 text-white">
                  <FiAward aria-hidden="true" className="mt-1 shrink-0 text-xl text-[#9DB8FF]" />
                  <span>{e.achievement}</span>
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
