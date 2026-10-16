import Section from "./Section";
import Reveal from "./Reveal";
import { experience, education } from "../data/site";

const Timeline = ({ title, items }) => (
  <Reveal className="card p-7">
    <h3 className="mb-6 font-semibold text-white">{title}</h3>
    <ol className="relative space-y-6 border-l border-line pl-6">
      {items.map((it) => (
        <li key={`${it.title}-${it.period}`} className="relative">
          <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(54,188,247,0.8)]" />
          <p className="font-mono text-xs text-accent">{it.period}</p>
          <p className="mt-1 font-medium text-white">{it.title}</p>
          <p className="text-sm text-zinc-500">{it.place}</p>
        </li>
      ))}
    </ol>
  </Reveal>
);

const Trajectory = () => (
  <Section id="trayectoria" eyebrow="Trayectoria" title="Experiencia y formación.">
    <div className="grid gap-5 lg:grid-cols-2">
      <Timeline title="Experiencia" items={experience} />
      <Timeline title="Formación" items={education} />
    </div>
  </Section>
);

export default Trajectory;
