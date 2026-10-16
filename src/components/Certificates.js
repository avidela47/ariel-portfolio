import { useEffect, useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { certificates } from "../data/site";
import { HiOutlineAcademicCap, HiXMark } from "react-icons/hi2";

const Certificates = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <Section
      id="certificados"
      eyebrow="Certificados"
      title="Formación verificable."
      intro="Tocá cualquier certificado para verlo en grande."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c, i) => (
          <Reveal key={`${c.issuer}-${c.title}`} delay={0.03 * (i % 3)}>
            <button
              type="button"
              onClick={() => setActive(c)}
              className="card card-hover flex w-full items-center gap-4 p-5 text-left"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-xl text-accent">
                <HiOutlineAcademicCap />
              </span>
              <span>
                <span className="block text-sm font-medium text-white">{c.title}</span>
                <span className="block text-xs text-zinc-500">{c.issuer}</span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} – ${active.issuer}`}
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Cerrar"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/40 text-2xl text-white"
            onClick={() => setActive(null)}
          >
            <HiXMark />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={active.file}
            alt={`Certificado ${active.title} – ${active.issuer}`}
            className="max-h-[88vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </Section>
  );
};

export default Certificates;
