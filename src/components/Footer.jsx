import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FiArrowUp, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { navLinks, profile, projects, socials } from "../data/portfolio.js";
import { SocialIcon } from "./Icons.jsx";

function Column({ title, children }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-5 space-y-3 text-[0.95rem]">{children}</ul>
    </div>
  );
}

const linkCls = "text-white/65 transition-colors hover:text-white";

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-ink text-white">
      <div className="container-x">
        {/* Call to action */}
        <div className="flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-center md:justify-between md:py-14">
          <div>
            <p className="text-2xl font-semibold tracking-tight sm:text-3xl">Have a project or a role in mind?</p>
            <p className="mt-2 text-white/65">I'm open to full-time roles, freelance work and collaborations.</p>
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="btn shrink-0 self-start bg-white text-ink hover:bg-brand-soft md:self-auto"
          >
            <FiMail aria-hidden="true" /> Get in touch
          </a>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-2 lg:col-span-4">
            <p className="text-xl font-semibold tracking-tight">{profile.name}</p>
            <p className="mt-3 max-w-xs text-white/65">
              Software Engineer building reliable web and Android applications, with experience in on-device machine
              learning.
            </p>
            <ul className="mt-6 flex gap-2" aria-label="Social links">
              {socials.map((s) => (
                <li key={s.name}>
                  <motion.a
                    href={s.url}
                    target={s.icon === "mail" ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={s.name}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.92 }}
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 text-white/85 transition-colors hover:border-white hover:bg-white hover:text-ink"
                  >
                    <SocialIcon name={s.icon} />
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <Column title="Navigate">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <Link to={`/#${l.id}`} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </Column>
          </div>

          <div className="lg:col-span-2">
            <Column title="Projects">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link to={`/projects/${p.slug}`} className={linkCls}>
                    {p.name}
                  </Link>
                </li>
              ))}
            </Column>
          </div>

          <div className="col-span-2 lg:col-span-4">
            <Column title="Contact">
              <li>
                <a href={`mailto:${profile.email}`} className={`flex items-center gap-3 break-all ${linkCls}`}>
                  <FiMail aria-hidden="true" className="shrink-0 text-white/45" /> {profile.email}
                </a>
              </li>
              <li>
                <a href={profile.phoneHref} className={`flex items-center gap-3 ${linkCls}`}>
                  <FiPhone aria-hidden="true" className="shrink-0 text-white/45" /> {profile.phone}
                </a>
              </li>
              <li>
                <a href={profile.whatsappHref} target="_blank" rel="noreferrer" className={`flex items-center gap-3 ${linkCls}`}>
                  <FaWhatsapp aria-hidden="true" className="shrink-0 text-white/45" /> WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/65">
                <FiMapPin aria-hidden="true" className="shrink-0 text-white/45" /> {profile.location}
              </li>
            </Column>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse gap-4 border-t border-white/10 py-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <button
            type="button"
            onClick={toTop}
            className="group inline-flex items-center gap-2 self-start text-white/65 transition-colors hover:text-white sm:self-auto"
          >
            Back to top
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/15 transition-transform duration-200 group-hover:-translate-y-0.5">
              <FiArrowUp aria-hidden="true" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
