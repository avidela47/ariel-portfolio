import Section from "./Section";
import Reveal from "./Reveal";
import { services } from "../data/site";
import { serviceIcons } from "./icons";

const Services = () => (
  <Section
    id="servicios"
    eyebrow="Servicios"
    title="Cómo puedo ayudarte."
    intro="Desde una web simple hasta un sistema a medida para tu operación."
  >
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => {
        const Icon = serviceIcons[s.icon];
        return (
          <Reveal key={s.title} delay={0.06 * i} className="card card-hover p-7">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent-gradient text-2xl text-ink">
              <Icon />
            </div>
            <h3 className="text-lg font-semibold text-white">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.description}</p>
          </Reveal>
        );
      })}
    </div>
  </Section>
);

export default Services;
