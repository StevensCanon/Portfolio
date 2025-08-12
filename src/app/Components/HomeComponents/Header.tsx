import React, { useState, useEffect, useCallback } from 'react';
import '../../globals.css';
import Paragraphe2 from './Paragraphe2';
import Paragraphe1 from './Paragraphe1';
import IntroPage from '../../Carga';
import { motion } from 'framer-motion';
import { ParticlesDemo } from './Particles';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';

const textVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function Header() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showFirstParagraph, setShowFirstParagraph] = useState(false);
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleFirstParagraphComplete = useCallback(() => {
    setShowSecondParagraph(true);
  }, []);

  const handleSecondParagraphComplete = useCallback(() => {
    // Espera 0.5s después del segundo párrafo
    setTimeout(() => setShowButtons(true), 500);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setLoadingComplete(true);
  }, []);

  useEffect(() => {
    if (!loadingComplete) {
      return;
    }
    const timer = setTimeout(() => setShowFirstParagraph(true), 800);
    return () => clearTimeout(timer);
  }, [loadingComplete]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-900/50 to-white dark:from-fuchsia-600/20 dark:to-black">
      <div className="absolute inset-0">
        <ParticlesDemo />
      </div>

      {!loadingComplete && <IntroPage onLoadComplete={handleLoadingComplete} />}

      {loadingComplete && (
        <header className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
          <section className="flex flex-col-reverse lg:flex-row w-full max-w-screen-xl mx-auto gap-12 md:gap-20">
            {/* Texto */}
            <motion.div
              className="flex flex-col w-full lg:w-1/2 justify-center space-y-6 md:space-y-8"
              variants={textVariants}
              initial="hiddenLeft"
              animate="visible"
            >
              {/* Párrafo principal */}
              {showFirstParagraph && (
                <div className="text-3xl sm:text-4xl md:text-5xl">
                  <Paragraphe1
                    onComplete={handleFirstParagraphComplete}
                    startDelay={0}
                  />
                </div>
              )}

              {/* Segundo párrafo */}
              {showSecondParagraph && (
                <motion.div
                  className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base text-justify"
                  whileHover={{ scale: 1.02 }}
                >
                  <Paragraphe2
                    startDelay={1000}
                    onComplete={handleSecondParagraphComplete}
                  />
                </motion.div>
              )}

              {/* Botones (solo después del segundo párrafo) */}
              {showButtons && (
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <a
                    href="/CV ELIAN STEVENS CAÑON SUAREZz.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      aria-label="Descargar CV"
                      className="px-6 py-2 sm:px-8 sm:py-3 bg-purple-700 text-white rounded-3xl font-medium transition duration-300 hover:bg-zinc-400 hover:text-black dark:hover:bg-white dark:hover:text-black"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Descargar CV
                    </motion.button>
                  </a>

                  <Link href="/projects" passHref>
                    <ShimmerButton className="shadow-2xl">
                      <span className="text-sm sm:text-base lg:text-lg font-medium text-white">
                        Ver mis proyectos
                      </span>
                    </ShimmerButton>
                  </Link>
                </motion.div>
              )}
            </motion.div>

            {/* Video */}
            <motion.div
              className="w-full lg:w-1/2 flex items-center justify-center"
              variants={textVariants}
              initial="hiddenRight"
              animate="visible"
            >
              <div className="relative w-full max-w-md sm:max-w-lg md:max-w-3xl ">
                <video
                  src="/videos/programador.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </section>
        </header>
      )}
    </div>
  );
}
