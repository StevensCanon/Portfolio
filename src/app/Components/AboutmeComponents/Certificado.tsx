'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import '../../../app/globals.css';

type Certificate = {
  id: number;
  title: string;
  image: string;
  issuer: string;
  date: string;
  category: string;
};

function Certificado() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

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
    // Agrega más certificados aquí si lo deseas
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
    <>
      <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-black to-purple-950/20 py-10 px-4">
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white bg-clip-text mb-4">
              Certificaciones
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
                className="group cursor-pointer h-full"
                onClick={() => setSelectedCertificate(cert)}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
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
                    <div className="flex justify-between items-center text-sm text-gray-400 mt-auto">
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
              <div className="text-2xl font-bold text-neutral-400">{certificates.length}</div>
              <div className="text-gray-400 text-sm">Certificados</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div>
              <div className="text-2xl font-bold text-neutral-400">
                {new Set(certificates.map((cert) => cert.category)).size}
              </div>
              <div className="text-gray-400 text-sm">Categorías</div>
            </div>
            <div className="w-px h-12 bg-gray-700" />
            <div>
              <div className="text-2xl font-bold text-neutral-300">2023–2025</div>
              <div className="text-gray-400 text-sm">Período</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative bg-gray-900 border border-gray-700 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Contenido del modal */}
              <div className="mt-4">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    fill
                    sizes="100%"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedCertificate.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400">
                      <span>{selectedCertificate.issuer}</span>
                      <span>•</span>
                      <span>{selectedCertificate.date}</span>
                      <span className="ml-auto px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                        {selectedCertificate.category}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                      Ver Certificado Completo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Certificado;
