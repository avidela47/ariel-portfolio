/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Las rutas viejas ahora son secciones de la home
  async redirects() {
    return [
      { source: "/about", destination: "/#sobre-mi", permanent: true },
      { source: "/services", destination: "/#servicios", permanent: true },
      { source: "/work", destination: "/#proyectos", permanent: true },
      { source: "/certificates", destination: "/#certificados", permanent: true },
      { source: "/contact", destination: "/#contacto", permanent: true },
    ];
  },
};

module.exports = nextConfig;
