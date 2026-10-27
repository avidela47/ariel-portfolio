import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HiArrowRight, HiArrowDownTray } from "react-icons/hi2";
import { profile, socials } from "../data/site";
import { socialIcons } from "./icons";

const words = ["sitios web", "e-commerce", "sistemas a medida", "automatizaciones"];

const RotatingWord = () => {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className="relative inline-block min-w-[1ch]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          className="gradient-text inline-block"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35 }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.04] px-4 py-1.5 font-mono text-xs text-zinc-400"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            {profile.role} · {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-semibold leading-[1.1] text-white sm:text-5xl md:text-6xl"
          >
            Construyo <RotatingWord />
            <br />
            que hacen crecer tu negocio.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 md:text-lg"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a href="#proyectos" className="btn-primary">
              Ver proyectos <HiArrowRight />
            </a>
            <a href="#contacto" className="btn-ghost">
              Contactame
            </a>
            <a href="/Ariel.pdf" download className="btn-ghost">
              <HiArrowDownTray /> CV
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex items-center gap-3"
          >
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/[0.04] text-zinc-300 transition hover:-translate-y-1 hover:border-accent hover:text-accent"
                  >
                    <Icon />
                  </a>
                </li>
              );
            })}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-3 sm:-inset-6 rounded-full bg-accent-gradient opacity-25 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-full border border-line bg-gradient-to-b from-white/[0.08] to-white/[0.02] animate-float">
            <Image
              src="/perfil.jpg"
              alt={`Retrato de ${profile.name}`}
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
