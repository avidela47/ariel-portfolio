# Ariel Videla · Portfolio

Portfolio personal de una sola página, hecho con **Next.js**, **Tailwind CSS** y **Framer Motion**.

🌐 **Demo:** https://ariel-portfolio-indol.vercel.app/

## Secciones

Inicio · Sobre mí · Proyectos · Servicios · Trayectoria · Certificados · Contacto

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # completá tus claves de EmailJS
npm run dev                  # http://localhost:3000
```

## Variables de entorno

El formulario de contacto usa [EmailJS](https://www.emailjs.com/). Cargá estas variables en `.env.local` y en Vercel (Project → Settings → Environment Variables):

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ID del servicio |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ID de la plantilla |
| `NEXT_PUBLIC_EMAILJS_USER_ID` | Public key |

> Estas variables son públicas por diseño (viajan al navegador). Restringí los dominios permitidos en el panel de EmailJS para evitar abusos.

## Editar el contenido

Todo el contenido (textos, proyectos, servicios, experiencia, certificados) está en [`src/data/site.js`](src/data/site.js). No hace falta tocar los componentes.

## Estructura

```
src/
  components/   # Hero, About, Projects, Services, Trajectory, Certificates, Contact...
  data/site.js  # contenido del sitio
  pages/        # _app, _document, index
  styles/       # globals.css
public/         # imágenes y certificados
```

## Deploy

Se despliega en Vercel de forma automática con cada push a `master`.
