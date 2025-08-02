import React, { useState, useEffect } from "react";
import "../../globals.css";
import Paragraphe2 from "./Paragraphe2";
import Paragraphe1 from "./Paragraphe1";
import IntroPage from "../../Carga";
import Image from "next/image";
import { motion } from "framer-motion";
import { ParticlesDemo } from "./Particles";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";

function Header() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showFirstParagraph, setShowFirstParagraph] = useState(false);
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);

  const handleFirstParagraphComplete = () => {
    setShowSecondParagraph(true);
  };

  const handleLoadingComplete = () => {
    setLoadingComplete(true);
  };

  useEffect(() => {
    if (loadingComplete) {
      const timer = setTimeout(() => {
        setShowFirstParagraph(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [loadingComplete]);

  return (
    <div className="relative min-h-screen overflow-hidden dark:bg-gradient-to-b from-fuchsia-950/20 to-black">
      <div className="absolute inset-0">
        <ParticlesDemo />
      </div>
      {!loadingComplete && <IntroPage onLoadComplete={handleLoadingComplete} />}

      {loadingComplete && (
        <header className="relative z-10 min-h-screen">
          <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12">
            <div className="flex flex-col-reverse lg:flex-row w-full max-w-screen-xl mx-auto gap-6 md:gap-10">
              {/* Columna izquierda con texto */}
              <motion.div
                className="flex flex-col w-full lg:w-1/2 justify-center space-y-6 md:space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="rounded-lg transition-all duration-500 hover:bg-opacity-20 text-3xl sm:text-4xl md:text-5xl text-left flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full ">
                    {showFirstParagraph && (
                      <Paragraphe1
                        onComplete={handleFirstParagraphComplete}
                        startDelay={0}
                      />
                    )}
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-lg backdrop-blur-sm text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm md:text-base text-justify"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-full">
                    {showSecondParagraph && <Paragraphe2 startDelay={1000} />}
                  </div>
                </motion.div>

                {/* Botones */}
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Link href="/contact" passHref>
                    <motion.button
                      className="px-6 py-2 sm:px-8 sm:py-3 bg-purple-600 text-white rounded-3xl font-medium hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Empezemos
                    </motion.button>
                  </Link>
                  <Link href="/projects" passHref>
                    <ShimmerButton className="shadow-2xl">
                      <span className="text-sm sm:text-base lg:text-lg font-medium text-white">
                        Ver mis proyectos
                      </span>
                    </ShimmerButton>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Columna derecha con imagen */}
              <motion.div
                className="w-full lg:w-1/2 flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl h-auto">
                  <Image
                    src="/images/xero-code.gif"
                    alt="GIF"
                    width={600}
                    height={600}
                    layout="responsive"
                    className="rounded-xl object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </header>
      )}
    </div>
  );
}

export default Header;
