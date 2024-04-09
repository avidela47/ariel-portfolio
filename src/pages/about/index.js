/* eslint-disable react/jsx-key */
import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaReact,
  FaAngular,
  FaNode,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import { TbBrandJavascript, TbBrandTailwind } from "react-icons/tb";

//  about data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Desing",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaSass />,
          <FaReact />,
          <FaAngular />,
          <SiNextdotjs />,
          <TbBrandJavascript />,
          <FaBootstrap />,
          <TbBrandTailwind />,
        ],
      },
      {
        title: "Web Development",
        icons: [
          <TbBrandJavascript />,
          <FaNode />,
          <SiNestjs />,
          <SiMongodb />,
          <SiMysql />,
          <SiPostman />,
          <FaGitAlt />,
          <FaGithub />,
        ],
      },
    ],
  },
  {
    title: "educación",
    info: [
      {
        title: "Full Stack Developer - CoderHouse -",
        stage: "2022 - 2024",
      },
      {
        title: "Programador Jr. Full Stack - Arg. Prog. 4.0 -",
        stage: "2022 - 2023",
      },
      {
        title: "Programador Jr. JavaScript/Node.js - <Codo a Codo/> -",
        stage: "2024",
      },
      {
        title: "Lic. Comercio Internacional - UdeMM -",
        stage: "1999 - 2005",
      },
    ],
  },
  {
    title: "certificados",
    info: [
      {
        title: "Desarrolo Web - CoderHouse - 2022",
        stage: "",
      },
      {
        title: "Desarrolo Web - XAcademy - 2023",
        stage: "",
      },
      {
        title: "Programador JS - CoderHouse - 2022",
        stage: "",
      },
      {
        title: "Programador ReactJs - XAcademy - 2023",
        stage: "",
      },
      {
        title: "Programador Frontend - CoderHouse - 2023",
        stage: "",
      },
      {
        title: "Programador Backend - XAcademy - 2023",
        stage: "",
      },
    ],
  },
  {
    title: "experiencia",
    info: [
      {
        title: "Web Developer - Selflick Gráfica -",
        stage: "2023",
      },
      {
        title: "Coordinador Admin. y Cobranza - Gama SA -",
        stage: "2016 - 2021",
      },
      {
        title: "Responsable Admin. - Estudio Loyo & Asoc. -",
        stage: "2005 - 2015",
      },
      {
        title: "Admin. Junior - Estudio Piñeiro & Asoc. -",
        stage: "1999 - 2004",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[320px] h-full w-full"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 xl:text-5xl sm:text-xl xl:ml-[120px]"
          >
            Convertir <span className="text-accent">la visión en realidad</span>{" "}
            con código y diseño.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 xl:ml-[120px]"
          >
            Soy Lic. en Comercio Internacional, hace mas de dos años descubrí el
            mundo de la programación y busco experiencia laboral en el rubro
            para seguir aprendiendo. Actualmente soy desarrolador Jr. Full
            Stack.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 xl:ml-[125px] xl:-mt-10">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs tracking-[1px] leading-[1.4] max-w-[100px]">
                  Años de experiencia
                </div>
              </div>
              {/* complete projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={25} duration={5} /> +
                </div>
                <div className="text-xs tracking-[1px] leading-[1.4] max-w-[100px]">
                  Proyectos completos
                </div>
              </div>
              {/* Projects in progress */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={30} duration={5} /> +
                </div>
                <div className="text-xs tracking-[1px] leading-[1.4] max-w-[100px]">
                  Proyectos en proceso
                </div>
              </div>
              {/* Certifications */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={9} duration={5} /> +
                </div>
                <div className="text-xs tracking-[1px] leading-[1.4] max-w-[100px]">
                  Certificaciones
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] xl:text-lg sm:text-xs"
        >
          <div className="sm:mt-[-10px] flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 sm:text-sm xl:mt-[215px]">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 sm:font-[10px]`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex"></div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          className="text-2xl text-white transition-all duration-500"
                          key={itemIndex}
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <button className="xl:ml-[180px] sm:text-sm mt-0 bg-accent hover:bg-secondary text-white hover:text-accent font-bold py-2 px-4 rounded-full xl:z-10">
              <a href="/Ariel.pdf" className="xl:z-20" download>
                Descargar CV
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
