import { profile, socials } from "../data/site";
import { socialIcons } from "./icons";

const Footer = () => (
  <footer className="border-t border-line py-10">
    <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
      <p className="text-sm text-zinc-500">
        © {new Date().getFullYear()} {profile.name}. Hecho con Next.js y Tailwind.
      </p>
      <ul className="flex items-center gap-3">
        {socials.map((s) => {
          const Icon = socialIcons[s.icon];
          return (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-zinc-500 transition hover:text-accent"
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </footer>
);

export default Footer;
