import { about } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import { Reveal, RevealGroup, RevealItem } from "./Motion.jsx";

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-surface py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading title="About me" />
          <RevealGroup gap={0.12} className="max-w-[65ch] space-y-5 text-[1.08rem] text-ink/85">
            {about.paragraphs.map((p, i) => (
              <RevealItem as="p" key={i} className={i === 0 ? "text-lg text-ink" : undefined}>
                {p}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal as="aside" delay={0.15} className="lg:col-span-5 lg:pt-28">
          <dl className="divide-y divide-line rounded-2xl border border-line bg-paper">
            {about.facts.map((f) => (
              <div key={f.label} className="grid grid-cols-[7rem_1fr] gap-4 px-5 py-4">
                <dt className="text-sm text-muted">{f.label}</dt>
                <dd className="font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-10 text-xl font-semibold">Outside of work</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {about.interests.map((i) => (
              <li key={i} className="chip border-transparent bg-brand-soft text-brand-dark transition-transform duration-200 hover:-translate-y-0.5">
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
