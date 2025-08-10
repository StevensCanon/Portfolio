'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Certificate = {
  id: number;
  title: string;
  image: string;
  issuer: string;
  date: string;
  category: string;
};

function Certificado() {
  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      image: '/images/full-stack.jpg',
      issuer: 'IBM',
      date: '2024',
      category: 'Development',
    },
    {
      id: 2,
      title: 'Front End Developer Certified Associate',
      image: '/images/certificado.png',
      issuer: 'IT Certificate',
      date: '2025',
      category: 'Frontend',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-t from-purple-900/50 via-white to-white dark:from-fuchsia-600/20 dark:via-black dark:to-black dark:bg-gradient-to-t py-10 px-4">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-900 to-fuchsia-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-purple-700 dark:to-fuchsia-400 mb-4">
            Certificaciones
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Validación continua de conocimientos en tecnologías modernas
          </p>
        </motion.div>

        {/* Grid de certificados */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              className="group h-full"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                {/* Imagen del certificado */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    sizes="100%"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Etiqueta de categoría */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-xs rounded-full">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-lg text-white mb-2 line-clamp-2">{cert.title}</h3>
                  <div className="flex justify-between items-center text-sm text-zinc-400 mt-auto">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-center"
        >
          <div>
            <div className="text-2xl font-bold dark:text-zinc-300 text-zinc-800">{certificates.length}</div>
            <div className="text-zinc-700 dark:text-zinc-400 text-sm">Certificados</div>
          </div>
          <div className="w-px h-12 bg-zinc-700" />
          <div>
            <div className="text-2xl font-bold dark:text-zinc-300 text-zinc-800">
              {new Set(certificates.map((cert) => cert.category)).size}
            </div>
            <div className="text-zinc-700 dark:text-zinc-400 text-sm">Categorías</div>
          </div>
          <div className="w-px h-12 bg-zinc-700" />
          <div>
            <div className="text-2xl font-bold text-black dark:text-white">2023–2025</div>
            <div className="text-zinc-700 dark:text-zinc-400 text-sm">Período</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certificado;
