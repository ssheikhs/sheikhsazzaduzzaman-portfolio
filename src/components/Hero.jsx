import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import { profile, socials } from "../data/portfolio.js";
import { SocialIcon } from "./Icons.jsx";
import RoleRotator from "./RoleRotator.jsx";
import { ease, fadeUp, stagger } from "./Motion.jsx";

// Portrait tilts gently toward the pointer, and the blue frame shifts the other way.
function Portrait() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 18 });
  const sy = useSpring(y, { stiffness: 150, damping: 18 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5]);
  const frameX = useTransform(sx, [-0.5, 0.5], [22, 10]);
  const frameY = useTransform(sy, [-0.5, 0.5], [22, 10]);

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative mx-auto w-[82%] max-w-sm [perspective:1000px] sm:w-full lg:ml-auto lg:mr-0"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease, delay: 0.2 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <motion.div
        className="absolute inset-0 rounded-[1.75rem] bg-brand"
        style={{ x: frameX, y: frameY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        aria-hidden="true"
      />
      <motion.img
        src={profile.photo}
        alt="Portrait of Sheikh Sazzaduzzaman"
        width="720"
        height="900"
        style={{ rotateX, rotateY }}
        className="relative aspect-[4/5] w-full rounded-[1.75rem] border border-line bg-white object-cover object-top"
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="container-x grid grid-cols-1 items-center gap-14 pb-20 pt-10 md:pt-16 lg:grid-cols-12 lg:gap-10 lg:pb-28"
    >
      <motion.div className="min-w-0 lg:col-span-7" variants={stagger(0.1, 0.1)} initial="hidden" animate="show">
        <motion.p variants={fadeUp} className="text-base font-medium text-muted sm:text-lg">
          As-salamu alaykum, I am
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-3 text-[2.15rem] font-bold leading-[1.02] tracking-[-0.035em] min-[360px]:text-[2.55rem] min-[400px]:text-[2.9rem] sm:text-6xl lg:text-[4.6rem]"
        >
          Sheikh
          <br />
          Sazzaduzzaman
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-5 text-xl font-semibold text-brand sm:text-2xl">
          <RoleRotator roles={profile.roles} />
        </motion.p>

        <motion.p variants={fadeUp} className="mt-4 max-w-xl text-lg text-muted sm:text-xl">
          {profile.intro}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
          <a href={profile.resume} download={profile.resumeFileName} className="btn-primary">
            <FiDownload aria-hidden="true" /> Download resume
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="btn-outline">
            <FiExternalLink aria-hidden="true" /> View resume
          </a>
          <Link
            to="/#projects"
            className="btn px-3 text-ink underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-brand"
          >
            See my projects
          </Link>
        </motion.div>

        <motion.ul variants={fadeUp} className="mt-10 flex items-center gap-2" aria-label="Social links">
          {socials.map((s) => (
            <li key={s.name}>
              <motion.a
                href={s.url}
                target={s.icon === "mail" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={s.name}
                title={s.name}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-lg text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                <SocialIcon name={s.icon} />
              </motion.a>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      <div className="min-w-0 lg:col-span-5">
        <Portrait />
      </div>
    </section>
  );
}
