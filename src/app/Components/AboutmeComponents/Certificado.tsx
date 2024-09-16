'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import '../../../app/globals.css';
import Particles from '../HomeComponents/Particles';

function Certificado() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" flex items-center relative w-full h-screen bg-gradient-to-t from-slate-950  to-black overflow-hidden ">
      <Particles />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mb-20"
      >
        <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text  mb-8 sm:mb-12 mt-20">
          CERTIFICATE IN FULL-STACK WEB DEVELOPMENT
        </h2>
        <motion.div 
          className="relative w-full max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className="relative z-0"
            animate={{ rotateY: isHovered ? 5 : 0, rotateX: isHovered ? -5 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl transform rotate-1 scale-100 blur-sm"></div>
            <motion.div 
              className="relative z-10 bg-gray-900 rounded-xl p-1 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image 
                src='/images/full-stack.jpg' 
                alt='certificado' 
                width={700} 
                height={500} 
                className=" object-cover rounded-lg"
              />
              
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Certificado;
