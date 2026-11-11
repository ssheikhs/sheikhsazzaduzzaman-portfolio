import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolio.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently on screen
  useEffect(() => {
    if (!onHome) {
      setActive(pathname.startsWith("/projects") ? "projects" : "");
      return;
    }
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome, pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const linkClass = (id) =>
    `relative rounded-lg px-3 py-2 text-[0.95rem] font-medium transition-colors ${
      active === id ? "text-brand" : "text-muted hover:text-ink"
    }`;

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b bg-paper/95 backdrop-blur transition-colors ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <Link to="/" className="text-lg font-semibold tracking-tight text-ink" aria-label="Mr Sheikh, home">
          Mr Sheikh
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link to={`/#${l.id}`} className={linkClass(l.id)} aria-current={active === l.id ? "true" : undefined}>
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href={profile.resume} download={profile.resumeFileName} className="btn-dark hidden !px-4 !py-2 sm:inline-flex">
            <FiDownload aria-hidden="true" /> Resume
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="grid place-items-center"
              >
                {open ? <FiX size={20} /> : <FiMenu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "calc(100dvh - 4rem)" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-y-auto border-t border-line bg-paper lg:hidden"
        >
          <motion.ul
            className="container-x flex flex-col py-4"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
          >
            {navLinks.map((l) => (
              <motion.li
                key={l.id}
                variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}
              >
                <Link
                  to={`/#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-line py-4 font-display text-2xl font-semibold ${
                    active === l.id ? "text-brand" : "text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </motion.li>
            ))}
            <motion.li className="pt-6" variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
              <a href={profile.resume} download={profile.resumeFileName} className="btn-primary w-full">
                <FiDownload aria-hidden="true" /> Download resume
              </a>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
      </AnimatePresence>
    </motion.header>
  );
}
