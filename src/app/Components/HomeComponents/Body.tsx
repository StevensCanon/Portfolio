"use client";

import React, { useState } from "react";
import "../../../app/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaPaintBrush } from "react-icons/fa";
import Link from "next/link";

function Body() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sectionData = {
    design: {
      title: "Diseño",
      icon: <FaPaintBrush className="text-4xl sm:text-5xl mb-4 mx-auto text-neutral-900 dark:text-zinc-300" />,
      description:
        "Diseño interfaces simples, funcionales y pensadas para el usuario. Uso herramientas visuales para crear experiencias claras y coherentes.",
      skills: ["UI/UX", "Responsive Design", "Figma", "Prototipado"],
    },
    development: {
      title: "Código",
      icon: <FaCode className="text-4xl sm:text-5xl mb-4 mx-auto text-neutral-900 dark:text-zinc-300" />,
      description:
        "Desarrollo aplicaciones completas desde el frontend hasta el backend. Aplico buenas prácticas y tecnologías modernas para crear soluciones escalables.",
      skills: ["React", "Next.js", "Node.js", "TypeScript"],
    },
  };

  return (
    <div className="bg-gradient-to-b from-purple-900/50 via-white to-white 
  dark:from-fuchsia-600/20 dark:via-black dark:to-black dark:bg-gradient-to-b w-full min-h-screen px-4 sm:px-6 md:px-10 lg:px-20 py-12 md:py-20 flex flex-col items-center">
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-center"
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl dark:text-white dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-purple-700 dark:to-fuchsia-400  md:text-7xl font-bold mb-20">
          Diseño <span className="text-transparent bg-clip-text bg-gradient-to-t from-purple-900 to-fuchsia-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-purple-700 dark:to-fuchsia-400"> & </span> Código
        </h1>
      </motion.div>

      {/* Secciones */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
        {Object.entries(sectionData).map(([key, data]) => (
          <motion.div
            key={key}
            className={`w-full sm:w-[48%] lg:w-[45%] dark:bg-purple-950 dark:bg-opacity-20 bg-purple-950 bg-opacity-50 text-black dark:text-white rounded-2xl p-6 sm:p-8 cursor-pointer backdrop-blur-sm transition-all duration-300 shadow-lg ${
              activeSection === key ? "ring-4 ring-neutral-100" : ""
            }`}
            whileHover={{ scale: 1.03 }}
            onClick={() => setActiveSection(activeSection === key ? null : key)}
            aria-expanded={activeSection === key}
          >
            <div className="text-center">
              {data.icon}
              <h2 className="text-xl sm:text-2xl font-bold mb-1">
                {data.title}
              </h2>
              <p className="text-sm opacity-80">Haz clic para explorar</p>
            </div>

            <AnimatePresence>
              {activeSection === key && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 text-sm"
                >
                  <p className="text-zinc-700 dark:text-zinc-400 mb-4">{data.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {data.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-zinc-200 text-black px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Botón */}
      <Link href="/contact" passHref>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 bg-black text-white dark:bg-white dark:text-black hover:bg-zinc-600 dark:hover:bg-purple-700 dark:hover:text-white font-semibold py-3 px-6 sm:px-8 text-sm sm:text-base rounded-full transition duration-300"
        >
          Contáctame
        </motion.button>
      </Link>
    </div>
  );
}

export default Body;
