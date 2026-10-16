import { useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "../data/site";
import { socialIcons } from "./icons";
import { HiOutlineEnvelope } from "react-icons/hi2";

const empty = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState("idle"); // idle | sending | ok | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || "Mensaje desde el portfolio",
          message: form.message,
          from_name: "Portfolio Ariel Videla",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "error");
      setForm(empty); // solo se limpia si se envió bien
      setStatus("ok");
    } catch (err) {
      setStatus("error");
    }
  };

  const Wa = socialIcons.whatsapp;

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Hablemos de tu proyecto."
      intro="Contame qué necesitás y te respondo a la brevedad."
    >
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal className="card p-7">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="sr-only">Nombre</span>
                <input
                  className="input"
                  name="name"
                  placeholder="Nombre"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </label>
              <label className="block">
                <span className="sr-only">Email</span>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Asunto</span>
              <input
                className="input"
                name="subject"
                placeholder="Asunto"
                value={form.subject}
                onChange={onChange}
                required
              />
            </label>
            <label className="block">
              <span className="sr-only">Mensaje</span>
              <textarea
                className="input min-h-[140px] resize-none"
                name="message"
                placeholder="Mensaje"
                value={form.message}
                onChange={onChange}
                required
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button type="submit" className="btn-primary" disabled={status === "sending"}>
                {status === "sending" ? "Enviando…" : "Enviar mensaje"}
              </button>
              <p role="status" aria-live="polite" className="text-sm">
                {status === "ok" && (
                  <span className="text-emerald-400">¡Mensaje enviado! Te respondo pronto.</span>
                )}
                {status === "error" && (
                  <span className="text-red-400">
                    No se pudo enviar. Probá de nuevo o escribime por email.
                  </span>
                )}
              </p>
            </div>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5">
          <a
            href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent("Hola Ariel, vi tu portfolio.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover flex items-center gap-4 p-6"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/15 text-2xl text-emerald-400">
              <Wa />
            </span>
            <span>
              <span className="block font-medium text-white">WhatsApp</span>
              <span className="text-sm text-zinc-500">{profile.phoneLabel}</span>
            </span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="card card-hover flex items-center gap-4 p-6"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-2xl text-accent">
              <HiOutlineEnvelope />
            </span>
            <span className="min-w-0">
              <span className="block font-medium text-white">Email</span>
              <span className="block truncate text-sm text-zinc-500">{profile.email}</span>
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
