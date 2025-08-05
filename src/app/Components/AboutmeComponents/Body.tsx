"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "../../../app/globals.css";
import Link from "next/link";
import { Particles } from "@/components/magicui/particles";
import { QualitiesMarquee } from "@/app/Components/AboutmeComponents/Qualities";
import { FlipText } from "@/components/magicui/flip-text";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

function Body() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-black to-purple-950/20">
      <div className="z-10 w-full max-w-7xl h-[calc(100vh)] flex flex-col md:flex-row items-stretch justify-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Columna izquierda: Imagen con efecto */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center p-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-full max-h-[90vh] rounded-lg p-6  flex flex-col justify-between">
            <div>
              <p className="mb-3 text-xs font-normal tracking-widest text-black dark:text-white uppercase md:text-sm">
                Más sobre mi
              </p>
              <h1 className="text-2xl font-bold  text-black dark:text-white md:text-5xl pb-8 ">
                Yo soy{" "}
                <span className="text-purple-500 dark:text-purple-500">
                  Stevens Cañon
                </span>
              </h1>
              <p className="text-gray-300 text-md">
                Soy un desarrollador junior full-stack con experiencia en
                la creación de aplicaciones web modernas y escalables. Disfruto
                trabajar tanto en el frontend como en el backend, construyendo
                soluciones que aportan valor real a usuarios y negocios.
                <br />
                <br />
                Trabajo con tecnologías como React, Next.js y Node.js, aplicando
                buenas prácticas para escribir código limpio, eficiente y
                mantenible. Me interesa especialmente el diseño de interfaces y
                la creación de experiencias de usuario fluidas y atractivas.
                <br />
                <br />
                Siempre estoy en busca de nuevos retos y oportunidades para
                seguir aprendiendo y mejorando como profesional.
              </p>
            </div>
            <Link href="/projects" passHref>
            <InteractiveHoverButton className="mt-4 bg-purple-900  text-white px-4 py-2 rounded-full font-light   transition-all duration-300 ">Explora mis proyectos</InteractiveHoverButton>
            </Link>
          </div>
        </motion.div>

        {/* Columna derecha: Desarrollo */}
        <motion.div
          className="w-full md:w-1/3 flex items-center justify-center "
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative w-full h-full max-h-[90vh]">
            <div className="absolute inset-0 bg-purple-500 rounded-lg transform rotate-3 z-0"></div>
            <div className="absolute inset-0 overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/foto.png"
                alt="Stevens Cañon"
                fill
                className="transition-all duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Body;
