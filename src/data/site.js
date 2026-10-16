// Todo el contenido del sitio vive acá: editá este archivo y listo.

export const profile = {
  name: "Ariel Videla",
  role: "Desarrollador Full Stack",
  location: "Córdoba, Argentina",
  email: "ariel_videla@hotmail.com",
  // WhatsApp necesita el formato internacional: 54 + 9 + código de área + número
  whatsapp: "5493512890110",
  phoneLabel: "+54 351 289-0110",
  intro:
    "Diseño y desarrollo sitios web, e-commerce y sistemas de gestión a medida. Trabajo con React, Next.js y Node.js, y uso IA como copiloto para entregar más rápido sin resignar calidad.",
  about: [
    "Soy Licenciado en Comercio Internacional y trabajé más de veinte años en gestión administrativa y cobranzas. Esa experiencia me enseñó a entender cómo funciona un negocio por dentro, y por eso hoy construyo software que resuelve problemas reales de las empresas.",
    "Me formé como desarrollador Full Stack desde 2022 y desde entonces desarrollo sitios web, aplicaciones y sistemas internos, tanto para clientes como para la empresa donde trabajo.",
  ],
};

export const socials = [
  { name: "GitHub", href: "https://github.com/avidela47", icon: "github" },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ariel-videla-5b246b223",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ariel__videla/",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/arielvidela43",
    icon: "facebook",
  },
];

export const navItems = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Certificados", href: "#certificados" },
  { label: "Contacto", href: "#contacto" },
];

export const stack = [
  {
    group: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Sass",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Tailwind",
      "Bootstrap",
    ],
  },
  {
    group: "Backend y datos",
    items: ["Node.js", "NestJS", "MongoDB", "MySQL", "Postman"],
  },
  {
    group: "Herramientas",
    items: ["Git", "GitHub", "Vite", "Vercel", "Docker"],
  },
];

export const aiTools = [
  "Claude",
  "ChatGPT",
  "Gemini",
  "Copilot",
  "Cursor",
  "Perplexity",
];

// destacados: proyectos propios. webs: sitios publicados.
export const featured = [
  {
    title: "Gestión de luminarias",
    description:
      "Sistema de gestión para una empresa de iluminación: componentes, recetas (BOM), fabricación, órdenes de trabajo, presupuestos y stock.",
    tags: ["Next.js", "MongoDB", "NextAuth"],
    // repo privado: https://github.com/avidela47/gestion-luminarias (el link daría 404 a los visitantes)
    image: "/projects/luminarias.png",
    note: "Repositorio privado",
  },
  {
    title: "Ferretería Ríos",
    description:
      "Sistema de gestión para ferretería: catálogo, stock, ventas, fiados, compras, presupuestos, gastos y reportes.",
    tags: ["Next.js", "MongoDB", "NextAuth"],
    repo: "https://github.com/avidela47/ferreteria-rios",
    image: "/projects/ferreteria.png",
  },
  {
    title: "Prode Mundial 2026",
    description:
      "Aplicación de pronósticos para el Mundial 2026: fixture completo, carga de apuestas, resultados y tabla de posiciones.",
    tags: ["Next.js", "Zustand", "MongoDB"],
    href: "https://prode-mundial-2026-virid.vercel.app/",
    repo: "https://github.com/avidela47/prode-mundial-2026",
    image: "/projects/prode.png",
  },
  {
    title: "TuttiTube",
    description:
      "Juego musical con ruleta: sorteá letra, sexo e idioma para generar un artista al azar. Empaquetado como app Android.",
    tags: ["JavaScript", "Capacitor", "Android"],
    image: "/tutti-logo.png",
  },
];

export const webs = [
  {
    title: "Selflick Gráfica",
    image: "/selflick1.png",
    href: "https://selflick.com.ar/",
  },
  {
    title: "Burger Burghs",
    image: "/burger.png",
    href: "https://burger-burghs.netlify.app/",
  },
  {
    title: "Bikezz",
    image: "/bikezz1.jpeg",
    href: "https://bikezz-eta.vercel.app/",
  },
  {
    title: "Masa Madre Panadería",
    image: "/masamadre.jpeg",
    href: "https://masa-madre-panaderia.netlify.app/",
  },
  {
    title: "Pet Shop",
    image: "/pet.png",
    href: "https://practico-integrador-grupo5-pet-shop.vercel.app/",
  },
  {
    title: "Sabores Argentinos",
    image: "/saboresargentinos.png",
    href: "https://avidela47.github.io/saboresargentinos/",
  },
  {
    title: "Café Normandía",
    image: "/cafenormandia.png",
    href: "https://normandiacafe.vercel.app/",
  },
  {
    title: "Birmingham Burger",
    image: "/birmghamburger.png",
    href: "https://birmghamburger.vercel.app/",
  },
];

export const services = [
  {
    title: "Sitios web",
    description:
      "Diseño responsive, rápido y pensado para que tu negocio se vea profesional en cualquier dispositivo.",
    icon: "web",
  },
  {
    title: "E-commerce",
    description:
      "Tiendas online que facilitan la compra, con foco en la velocidad de carga y el posicionamiento en buscadores.",
    icon: "cart",
  },
  {
    title: "Sistemas a medida",
    description:
      "Aplicaciones de gestión con React y Node.js: stock, clientes, pagos, reportes y lo que tu operación necesite.",
    icon: "system",
  },
  {
    title: "Integraciones y automatización",
    description:
      "Conecto APIs y automatizo tareas repetitivas, como generación de documentos o carga de datos.",
    icon: "api",
  },
  {
    title: "SEO técnico",
    description:
      "Auditoría y mejoras de rendimiento, estructura y metadatos para que Google entienda y muestre tu sitio.",
    icon: "seo",
  },
];

export const experience = [
  {
    title: "Desarrollo web y sistemas",
    place: "ITELSA SAS",
    period: "Actualidad",
  },
  {
    title: "Web Developer",
    place: "Selflick Gráfica",
    period: "2023",
  },
  {
    title: "Coordinador de Administración y Cobranza",
    place: "Gama S.A.",
    period: "2016 – 2021",
  },
  {
    title: "Responsable administrativo",
    place: "Estudio Loyo & Asoc.",
    period: "2005 – 2015",
  },
  {
    title: "Administrativo Jr.",
    place: "Estudio Piñeiro & Asoc.",
    period: "1999 – 2004",
  },
];

export const education = [
  {
    title: "Programador Jr. JavaScript / Node.js",
    place: "Codo a Codo 4.0",
    period: "2024",
  },
  {
    title: "Full Stack Developer",
    place: "CoderHouse",
    period: "2022 – 2024",
  },
  {
    title: "Programador Jr. Full Stack",
    place: "Argentina Programa 4.0",
    period: "2022 – 2023",
  },
  {
    title: "Lic. en Comercio Internacional",
    place: "Universidad de la Marina Mercante",
    period: "2005",
  },
];

export const certificates = [
  {
    issuer: "CoderHouse",
    title: "Desarrollo Full Stack",
    file: "/DesarrolloFullStack2.png",
  },
  {
    issuer: "CoderHouse",
    title: "Desarrollo Full Stack Flex",
    file: "/DesarroloFullStackFlex.png",
  },
  {
    issuer: "CoderHouse",
    title: "Programación Backend",
    file: "/ProgramaciónBackend2.png",
  },
  { issuer: "CoderHouse", title: "React JS", file: "/ReactJs2.png" },
  { issuer: "CoderHouse", title: "JavaScript", file: "/JavaScript2.png" },
  { issuer: "CoderHouse", title: "Desarrollo Web", file: "/DesarrolloWeb2.png" },
  {
    issuer: "XAcademy",
    title: "Desarrollo Web",
    file: "/DesarrolloWebProgramaAcademy.jpg",
  },
  {
    issuer: "Argentina Programa 4.0",
    title: "Desarrollo Full Stack Jr.",
    file: "/SeProgramar2022_page.jpg",
  },
  {
    issuer: "Argentina Programa 4.0",
    title: "Desarrollo Web",
    file: "/Primerosdesarrollofrontend.jpg",
  },
  {
    issuer: "Codo a Codo 4.0",
    title: "Desarrollo Web (JavaScript · Node.js)",
    file: "/Diploma_CAC.jpg",
  },
];
