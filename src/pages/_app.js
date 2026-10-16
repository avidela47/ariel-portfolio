import "../styles/globals.css";
import Head from "next/head";
import { Sora, JetBrains_Mono } from "next/font/google";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"],
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const title = "Ariel Videla · Desarrollador Full Stack";
const description =
  "Portfolio de Ariel Videla: sitios web, e-commerce y sistemas de gestión a medida con React, Next.js y Node.js.";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#07080d" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/avatar.png" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${sora.variable} ${mono.variable} font-sora bg-glow relative min-h-screen overflow-x-clip`}>
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
