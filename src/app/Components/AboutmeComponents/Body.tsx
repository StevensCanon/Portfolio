"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import "../../../app/globals.css";

function Body() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-black to-purple-950/20 px-4 sm:px-6 lg:px-8">
      <div className="z-10 w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center py-6 gap-6">

        {/* Columna izquierda: Información personal */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full max-w-xl p-6 rounded-lg flex flex-col justify-between bg-black/10 backdrop-blur-md">
            <div>
              <p className="mb-3 text-xs md:text-sm font-medium tracking-widest uppercase text-white/80">
                Más sobre mí
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-white pb-6">
                Yo soy{" "}
                <span className="text-purple-500">Stevens Cañon</span>
              </h1>
              <p className="text-gray-300 text-md leading-relaxed">
                Soy un desarrollador junior full-stack con experiencia en la creación de aplicaciones web modernas y escalables.
                Disfruto trabajar tanto en el frontend como en el backend, construyendo soluciones que aportan valor real a usuarios y negocios.
                <br /><br />
                Trabajo con tecnologías como React, Next.js y Node.js, aplicando buenas prácticas para escribir código limpio, eficiente y mantenible.
                Me interesa especialmente el diseño de interfaces y la creación de experiencias de usuario fluidas y atractivas.
                <br /><br />
                Siempre estoy en busca de nuevos retos y oportunidades para seguir aprendiendo y mejorando como profesional.
              </p>
            </div>

            <div className="mt-6">
              <Link href="/projects" passHref>
                <InteractiveHoverButton className="bg-purple-900 text-white px-6 py-3 rounded-full font-light transition-all duration-300">
                  Explora mis proyectos
                </InteractiveHoverButton>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Columna derecha: Imagen con efecto */}
        <motion.div
          className="w-full md:w-1/4 flex items-center justify-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative w-full max-w-md aspect-[3/4]">
            <div className="absolute inset-0 bg-purple-500 rounded-xl rotate-3 z-0"></div>
            <div className="absolute inset-0 overflow-hidden rounded-xl shadow-xl z-10">
              <Image
                src="/images/foto.png"
                alt="Stevens Cañon"
                fill
                className="object-cover rounded-xl transition-transform duration-500 ease-in-out hover:scale-110"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Body;
