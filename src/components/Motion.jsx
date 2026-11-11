import { motion } from "motion/react";

// Shared easing and motion presets so every animation on the site feels the same.
export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const stagger = (gap = 0.08, delay = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

// Fades content up once when it scrolls into view.
export function Reveal({ as = "div", delay = 0, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease, delay }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// A list whose children (use <RevealItem>) appear one after another.
export function RevealGroup({ as = "div", gap = 0.08, className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      variants={stagger(gap)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ as = "div", className, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag className={className} variants={fadeUp} {...rest}>
      {children}
    </Tag>
  );
}
