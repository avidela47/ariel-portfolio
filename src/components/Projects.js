import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";
import { featured, webs } from "../data/site";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

const FeaturedCard = ({ p, i }) => (
  <Reveal delay={0.08 * i} className="card card-hover group flex flex-col overflow-hidden">
    <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-gradient-to-br from-accent/20 via-violet/20 to-transparent">
      {p.image ? (
        <Image
          src={p.image}
          alt={`Captura de ${p.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="grid h-full place-items-center text-6xl">{p.emoji}</div>
      )}
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-lg font-semibold text-white">{p.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4 text-sm">
        {p.href && (
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
          >
            Ver demo <HiArrowUpRight />
          </a>
        )}
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white"
          >
            <FaGithub /> Código
          </a>
        )}
        {p.note && <span className="text-zinc-500">{p.note}</span>}
      </div>
    </div>
  </Reveal>
);

const Projects = () => (
  <Section
    id="proyectos"
    eyebrow="Proyectos"
    title="Cosas que construí."
    intro="Aplicaciones propias y sitios que publiqué para negocios reales."
  >
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {featured.map((p, i) => (
        <FeaturedCard key={p.title} p={p} i={i} />
      ))}
    </div>

    <Reveal className="mb-6 mt-16">
      <h3 className="text-xl font-semibold text-white">Sitios web publicados</h3>
    </Reveal>
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {webs.map((w, i) => (
        <Reveal key={w.title} delay={0.04 * (i % 4)}>
          <a
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover group block overflow-hidden"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={w.image}
                alt={`Captura de ${w.title}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 280px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-between p-4">
              <span className="text-sm font-medium text-white">{w.title}</span>
              <HiArrowUpRight className="text-zinc-500 transition group-hover:text-accent" />
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Projects;
