import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft, FiExternalLink, FiGithub, FiServer, FiDownload } from "react-icons/fi";
import { projects } from "../data/portfolio.js";
import { ProjectCard } from "../components/Projects.jsx";
import NotFound from "./NotFound.jsx";
import { AnimatePresence, motion } from "motion/react";
import { ease, fadeUp, Reveal, stagger } from "../components/Motion.jsx";

function Block({ title, children }) {
  return (
    <Reveal as="section" className="border-t border-line pt-8">
      <h2 className="text-2xl font-bold sm:text-[1.75rem]">{title}</h2>
      <div className="mt-5">{children}</div>
    </Reveal>
  );
}

function Bullets({ items, tone = "ink" }) {
  return (
    <ul className="space-y-4">
      {items.map((t) => (
        <li key={t} className="flex gap-4">
          <span
            className={`mt-[0.6rem] h-2 w-2 shrink-0 rounded-full ${tone === "brand" ? "bg-brand" : "bg-ink/40"}`}
            aria-hidden="true"
          />
          <span className="text-ink/85">{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const p = projects[index];
  const [shot, setShot] = useState(0);

  useEffect(() => {
    setShot(0);
    if (p) document.title = `${p.name} | Sheikh Sazzaduzzaman`;
  }, [slug, p]);

  if (!p) return <NotFound message="There's no project at this address." />;

  const others = [projects[(index + 1) % projects.length], projects[(index + 2) % projects.length]];
  const isApk = p.live?.url.endsWith(".apk");

  return (
    <>
      <article className="container-x pb-20 pt-8 md:pt-12">
        <Link to="/#projects" className="inline-flex items-center gap-2 font-medium text-muted hover:text-ink">
          <FiArrowLeft aria-hidden="true" /> All projects
        </Link>

        <motion.header key={p.slug} className="mt-8 max-w-3xl" variants={stagger(0.08)} initial="hidden" animate="show">
          <motion.p variants={fadeUp} className="font-medium text-brand">{p.category}</motion.p>
          <motion.h1 variants={fadeUp} className="mt-3 text-4xl font-bold sm:text-5xl">{p.name}</motion.h1>
          <motion.p variants={fadeUp} className="mt-5 text-xl text-muted">{p.tagline}</motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
            {p.live ? (
              <a href={p.live.url} target="_blank" rel="noreferrer" className="btn-primary">
                {isApk ? <FiDownload aria-hidden="true" /> : <FiExternalLink aria-hidden="true" />} {p.live.label}
              </a>
            ) : (
              <span className="btn cursor-not-allowed border border-dashed border-line bg-paper text-muted" aria-disabled="true">
                Live demo coming soon
              </span>
            )}
            <a href={p.github} target="_blank" rel="noreferrer" className="btn-dark">
              <FiGithub aria-hidden="true" /> GitHub (client)
            </a>
            {p.server && (
              <a href={p.server} target="_blank" rel="noreferrer" className="btn-outline">
                <FiServer aria-hidden="true" /> Server repo
              </a>
            )}
          </motion.div>
        </motion.header>

        <motion.div className="mt-12" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.3 }}>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-paper">
            <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={p.gallery[shot]}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              src={p.gallery[shot]}
              alt={`${p.name} screenshot ${shot + 1} of ${p.gallery.length}`}
              className="aspect-[16/9] w-full object-contain"
            />
            </AnimatePresence>
          </div>
          {p.gallery.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-1" role="group" aria-label="Screenshots">
              {p.gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setShot(i)}
                  aria-label={`Show screenshot ${i + 1}`}
                  aria-pressed={shot === i}
                  className={`shrink-0 overflow-hidden rounded-xl border-2 bg-surface transition-[border-color,transform] duration-200 hover:-translate-y-0.5 active:scale-95 ${
                    shot === i ? "border-brand" : "border-line hover:border-ink/40"
                  }`}
                >
                  <img src={src} alt="" className="h-16 w-28 object-cover object-top sm:h-20 sm:w-36" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <Block title="About the project">
              <p className="max-w-[68ch] text-[1.08rem] text-ink/85">{p.description}</p>
            </Block>
            <Block title="Challenges I faced">
              <Bullets items={p.challenges} />
            </Block>
            <Block title="Improvements and future plans">
              <Bullets items={p.improvements} tone="brand" />
            </Block>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-8 rounded-2xl border border-line bg-surface p-6 lg:sticky lg:top-24">
              <div>
                <h2 className="text-lg font-semibold">Main tech stack</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="chip bg-paper">{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Links</h2>
                <ul className="mt-3 space-y-2">
                  <li>
                    {p.live ? (
                      <a href={p.live.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-medium text-brand hover:underline">
                        <FiExternalLink aria-hidden="true" /> {p.live.label}
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-muted">
                        <FiExternalLink aria-hidden="true" /> Live demo coming soon
                      </span>
                    )}
                  </li>
                  <li>
                    <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-medium text-brand hover:underline">
                      <FiGithub aria-hidden="true" /> Client repository
                    </a>
                  </li>
                  {p.server && (
                    <li>
                      <a href={p.server} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-medium text-brand hover:underline">
                        <FiServer aria-hidden="true" /> Server repository
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </article>

      <section className="border-t border-line bg-surface py-16 md:py-20">
        <div className="container-x">
          <h2 className="mb-8 text-3xl font-bold">More projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((o) => (
              <ProjectCard key={o.slug} p={o} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
