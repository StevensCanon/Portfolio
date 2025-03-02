import React, { useState, useEffect } from "react";
import "../../globals.css";
import Paragraphe2 from "./Paragraphe2";
import Paragraphe1 from "./Paragraphe1";
import IntroPage from "../../Carga";
import { motion } from "framer-motion";
import Particles from "./Particles";
import Image from 'next/image';

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
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 to-black">
      <Particles />
      {!loadingComplete && <IntroPage onLoadComplete={handleLoadingComplete} />}
      {loadingComplete && (
        <header className="relative min-h-screen z-10">
          <div className="absolute inset-0 flex items-center justify-center p-4 mx-8">
            <div className="flex flex-col lg:flex-row w-full max-w-8xl mx-auto gap-8">
              {/* Columna izquierda con párrafos */}
              <motion.div
                className="flex flex-col lg:w-1/2 justify-center space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Primer párrafo */}
                <motion.div
                  className="rounded-lg backdrop-blur-lg transition-all duration-500 hover:bg-opacity-20 flex items-center justify-center text-6xl text-left"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-full">
                    {showFirstParagraph && (
                      <Paragraphe1
                        onComplete={handleFirstParagraphComplete}
                        startDelay={0}
                      />
                    )}
                  </div>
                </motion.div>
                {/* Segundo párrafo */}
                <motion.div
                  className="rounded-lg backdrop-blur-lg transition-all duration-500 hover:bg-opacity-20 flex items-center justify-center text-zinc-400 text-sm text-justify"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-full h-auto">
                    {showSecondParagraph && <Paragraphe2 startDelay={1000} />}
                  </div>
                </motion.div>
              </motion.div>

            
              <motion.div
                className="lg:w-1/2 flex items-center justify-center relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="gif-container w-90 h-[550px] relative">
                  <Image
                    src="/images/xero-code.gif"
                    alt="Coding GIF"
                    width={1000}
                    height={1000}
                    unoptimized={true}
                    className="w-full h-full object-cover"
                  />
                  {/* Contenedor para el efecto encima del GIF */}
                  <div className="effect-overlay" />
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
