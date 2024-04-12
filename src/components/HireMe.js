import React from "react";
import { CircularText } from "./Icon";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-1 bottom-2 flex items-center justify-center overflow-hidden md:right-[1em] md:left-auto md:top-[-40em] md:botton-auto md:absolute ml-[180px] mb-10 xl:mt-[700px] xl:mr-[120px] z-50 sm:mb-[10px] sm:text-sm hover:text-accent">
      <div className="w-40 h-auto flex items-center justify-center relative">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        />
        <Link
          href="mailto:ariel_videla@hotmail.com"
          target={"_blank"}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:w-12 md:h-12 md:text-[10px]"
        >
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
