import Section from "./Section";
import Reveal from "./Reveal";
import { profile, stack, aiTools, certificates, featured, webs } from "../data/site";
import { techIcons } from "./icons";

const stats = [
  { value: featured.length + webs.length, label: "Proyectos" },
  { value: certificates.length, label: "Certificados" },
  { value: 2022, label: "Formación en desarrollo desde", plain: true },
];

const About = () => (
  <Section
    id="sobre-mi"
    eyebrow="Sobre mí"
    title="Del negocio al código."
  >
    <div className="grid gap-5 lg:grid-cols-3">
      <Reveal className="card p-7 lg:col-span-2">
        <div className="space-y-4 leading-relaxed text-zinc-400">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-6">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="gradient-text text-3xl font-semibold md:text-4xl">
                {s.plain ? s.value : `${s.value}`}
              </div>
              <div className="mt-1 text-xs leading-snug text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="card p-7">
        <h3 className="mb-1 font-semibold text-white">IA en mi flujo de trabajo</h3>
        <p className="mb-5 text-sm leading-relaxed text-zinc-500">
          Programo junto a la IA: la uso para acelerar, investigar y revisar, y
          siempre reviso el resultado antes de entregarlo.
        </p>
        <div className="flex flex-wrap gap-2">
          {aiTools.map((t) => (
            <span key={t} className="chip">
              {t}
            </span>
          ))}
        </div>
      </Reveal>

      {stack.map((g, idx) => (
        <Reveal key={g.group} delay={0.05 * idx} className="card p-7">
          <h3 className="mb-5 font-semibold text-white">{g.group}</h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 lg:grid-cols-2">
            {g.items.map((name) => {
              const Icon = techIcons[name];
              return (
                <li key={name} className="flex items-center gap-2.5 text-sm text-zinc-300">
                  {Icon && <Icon className="shrink-0 text-lg text-accent" />}
                  {name}
                </li>
              );
            })}
          </ul>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default About;
