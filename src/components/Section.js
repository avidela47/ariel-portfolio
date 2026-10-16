import Reveal from "./Reveal";

const Section = ({ id, eyebrow, title, intro, children }) => (
  <section id={id} className="py-20 md:py-28">
    <div className="container">
      <Reveal className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </p>
        <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
          {title}
        </h2>
        {intro && <p className="mt-4 leading-relaxed text-zinc-400">{intro}</p>}
      </Reveal>
      {children}
    </div>
  </section>
);

export default Section;
