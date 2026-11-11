import { Reveal } from "./Motion.jsx";

export default function SectionHeading({ title, children }) {
  return (
    <Reveal className="mb-10 max-w-2xl md:mb-14">
      <h2 className="text-[2.25rem] font-bold md:text-5xl">{title}</h2>
      {children && <p className="mt-4 text-lg text-muted">{children}</p>}
    </Reveal>
  );
}
