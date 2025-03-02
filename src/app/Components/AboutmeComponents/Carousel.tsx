import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from '../HomeComponents/Particles';
import Image from 'next/image';

const skills = [
  {
    title: "Creativity",
    description: "Innovative problem-solving and unique idea generation.",
    image: "/images/creatividad.jpeg"
  },
  {
    title: "Leadership",
    description: "Guiding teams towards common goals with vision and empathy.",
    image: "/images/liderazgo.jpeg"
  },
  {
    title: "Adaptability",
    description: "Quickly adjusting to new situations and technologies.",
    image: "/images/adaptabilidad.jpeg"
  },
  {
    title: "Autonomy",
    description: "Self-driven and capable of independent work and decision-making.",
    image: "/images/autonoma.jpeg"
  },
  {
    title: "Communication",
    description: "Clearly conveying ideas and actively listening to others.",
    image: "/images/comunicativa.jpeg"
  },
  {
    title: "Critical Thinking",
    description: "Analyzing complex problems and making reasoned decisions.",
    image: "/images/pensamiento.jpeg"
  },
  {
    title: "Problem Solving",
    description: "Finding effective solutions to challenges and obstacles.",
    image: "/images/problemas.jpeg"
  }
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-gradient-to-b from-black to-slate-950 h-screen flex flex-col items-center justify-center">
      <Particles />
      <motion.h2
        className="text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-t from-zinc-200 to-zinc-400 my-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills & Qualities
      </motion.h2>
      <div className="relative w-full h-[75vh]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full flex items-center justify-center"
          >
            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={skills[currentIndex].image}
                alt={skills[currentIndex].title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-6">
                <motion.h3
                  className="text-4xl md:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {skills[currentIndex].title}
                </motion.h3>
                <motion.p
                  className="text-lg md:text-xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {skills[currentIndex].description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Carousel;
