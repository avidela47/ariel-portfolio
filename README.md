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

El formulario de contacto usa [Web3Forms](https://web3forms.com/). Cargá esta variable en `.env.local` (o en Vercel → Settings → Environment Variables):

| Variable | Descripción |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Access key del formulario (pública por diseño) |

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
