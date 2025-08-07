"use client";
import React from "react";

import { WavyBackground } from "@/components/ui/wavy-background";

const Header = () => {
  return (
    <WavyBackground containerClassName="w-full" className="text-center">
      <h1 className="text-3xl md:text-5xl font-black text-black dark:text-white">
        Conoce mi <span className="">Portafolio</span>
      </h1>
      <p className="mt-4 text-base md:text-lg text-zinc-800 dark:text-zinc-200">
        Estos son algunos de los proyectos en los que he participado como
        estudiante.
      </p>
    </WavyBackground>
  );
};

export default Header;
