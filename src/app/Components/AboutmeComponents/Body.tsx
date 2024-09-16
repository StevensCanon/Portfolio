'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../../../app/globals.css';
import Link from 'next/link';
import Particles from '../HomeComponents/Particles';

function Body() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-black to-slate-950">
      <Particles />

      <div className="z-10 w-full max-w-7xl h-[calc(100vh)] flex flex-col md:flex-row items-stretch justify-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Columna izquierda: Imagen con efecto */}
        <motion.div 
          className="w-full md:w-1/2 flex items-center justify-center p-4"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="relative w-full h-full max-h-[90vh]">
            <div className="absolute inset-0 bg-purple-500 rounded-lg transform rotate-3 z-0"></div>
            <div className="absolute inset-0 overflow-hidden rounded-lg shadow-xl">
              <Image
                src='/images/yo1.png'
                alt='Stevens Cañon'
                layout='fill'
                objectFit='cover'
                className="transition-all duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
          </div>
        </motion.div>

        {/* Columna derecha: Desarrollo */}
        <motion.div 
          className="w-full md:w-1/2 flex items-center justify-center p-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full h-full max-h-[90vh] bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-purple-400 mb-2">WHO I AM?</h2>
              <p className="text-gray-300 text-md">
                Hello, I&apos;m Elian Stevens Cañon Suarez, a 19-year-old passionate about software development. Currently in my fourth semester at UNIVERSIDAD MINUTO DE DIOS &quot;UNIMINUTO&quot;. I&apos;m committed to honing my skills and seeking opportunities in the programming field.<br/><br/>
                My journey includes various student projects that have enriched my experience. I&apos;m particularly drawn to Frontend development, where creativity and inspiration fuel my work. I&apos;m also delving into Backend development to bring functionality to my projects, aiming for the comprehensive skill set of a Full-stack Developer.<br/><br/>
                Beyond web development, I&apos;m intrigued by game development, a fascinating realm I&apos;m eager to explore further.
              </p>
            </div>
            <Link href="/projects" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-gradient-to-br from-purple-400 to-purple-600 hover:to-purple-700 hover:from-purple-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 text-xs md:text-sm"
              >
                Explore My Projects
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Body;