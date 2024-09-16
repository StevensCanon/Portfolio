import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';

function Particles() {
  const [dimensions, setDimensions] = useState<{ width: number, height: number } | null>(null);

  useEffect(() => {
    function updateDimensions() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }

    updateDimensions(); // Inicializa las dimensiones
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  if (!dimensions) return null; // Evita renderizar si las dimensiones no están disponibles

  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute bg-fuchsia-900 rounded-full"
          initial={{
            opacity: Math.random(),
            scale: Math.random() * 0.5 + 0.5,
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            y: [null, Math.random() * dimensions.height],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            },
          }}
          style={{
            width: `${Math.random() * 4 + 5}px`,
            height: `${Math.random() * 4 + 6}px`,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;
