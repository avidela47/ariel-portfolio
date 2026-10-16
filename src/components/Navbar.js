import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { navItems, profile } from "../data/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
          scrolled || open
            ? "border-line bg-ink/75 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
        aria-label="Principal"
      >
        <a href="#inicio" className="flex items-center gap-2 font-semibold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-gradient text-sm font-bold text-ink">
            {profile.name[0]}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contacto" className="btn-primary hidden !py-2 sm:inline-flex">
            Hablemos
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-xl text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <HiXMark /> : <HiBars3 />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-line bg-ink/90 p-3 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
