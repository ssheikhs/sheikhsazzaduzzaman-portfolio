import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ease } from "./Motion.jsx";

const HOLD_MS = 2600; // how long each title stays fully visible

// Shows each title word by word, holds it, then lets it fade away before the next one.
export default function RoleRotator({ roles, className = "" }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const words = roles[index].split(" ").length;
    const t = setTimeout(() => setIndex((i) => (i + 1) % roles.length), HOLD_MS + words * 120);
    return () => clearTimeout(t);
  }, [index, roles]);

  return (
    <span className={`relative inline-flex min-h-[1.4em] items-center ${className}`}>
      <span className="sr-only">{roles.join(", ")}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          aria-hidden="true"
          className="inline-flex flex-wrap gap-x-[0.28em]"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={{
            show: { transition: { staggerChildren: 0.12 } },
            exit: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {roles[index].split(" ").map((word, i) => (
            <motion.span
              key={word + i}
              className="inline-block"
              variants={{
                hidden: reduce ? { opacity: 0 } : { opacity: 0, y: "0.45em", filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease } },
                exit: reduce
                  ? { opacity: 0, transition: { duration: 0.2 } }
                  : { opacity: 0, y: "-0.35em", filter: "blur(6px)", transition: { duration: 0.3, ease } },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
