'use client';

import React, { useState } from 'react';
import '../../../app/globals.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import Link from 'next/link';

type Tab = 'frontend' | 'backend';

const Content = () => {
  const [activeTab, setActiveTab] = useState<Tab>('frontend');

  const tabContent: Record<
    Tab,
    { title: string; description: string; icon: JSX.Element }
  > = {
    frontend: {
      title: 'Desarrollo Frontend',
      description:
        'Creo interfaces modernas, responsivas y centradas en el usuario utilizando HTML, CSS, JavaScript, React y Next.js. Me enfoco en la accesibilidad, el diseño limpio y la experiencia del usuario.',
      icon: <FaReact className="text-4xl mb-4 text-zinc-200" />,
    },
    backend: {
      title: 'Desarrollo Backend',
      description:
        'Diseño la lógica del servidor, APIs REST y estructuras de datos escalables con tecnologías como Node.js, Express y bases de datos como MongoDB o PostgreSQL.',
      icon: <FaNodeJs className="text-4xl mb-4 text-zinc-200" />,
    },
  };

  return (
    <div
      className="bg-gradient-to-t from-purple-900/50 via-white to-white 
  dark:from-fuchsia-600/20 dark:via-black dark:to-black dark:bg-gradient-to-t min-h-screen flex items-center justify-center p-4"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Imagen lateral */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] rounded-xl overflow-hidden "
        >
          <Image
            src="/images/fullstack.png"
            alt="Programador"
            width={600}
            height={600}
            className=" bg-black/50 h-full object-fill"
          />
          <div className="absolute inset-0 opacity-70"></div>
          <motion.h1
            className="absolute bottom-0 left-0 right-0 text-white p-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-center"
            style={{
              textShadow:
                '0 2px 4px rgba(0,0,0,0.7), 0 4px 8px rgba(0,0,0,0.6)',
            }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Desarrollador Full Stack
          </motion.h1>
        </motion.div>

        {/* Contenido interactivo */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl p-6 flex flex-col justify-between backdrop-blur-sm dark:bg-purple-950 dark:bg-opacity-20 bg-purple-950 bg-opacity-50 "
        >
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              <TabButton
                active={activeTab === 'frontend'}
                onClick={() => setActiveTab('frontend')}
              >
                <FaReact className="mr-2 text-black dark:text-white" /> Frontend
              </TabButton>
              <TabButton
                active={activeTab === 'backend'}
                onClick={() => setActiveTab('backend')}
              >
                <FaNodeJs className="mr-2 text-black dark:text-white" /> Backend
              </TabButton>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="dark:text-white "
              >
                {tabContent[activeTab].icon}
                <h2 className="text-xl sm:text-2xl font-bold mb-4 dark:text-white text-black">
                  {tabContent[activeTab].title}
                </h2>
                <p className="text-sm sm:text-base dark:text-gray-400 text-zinc-800">
                  {tabContent[activeTab].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <Link href="/projects" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-3 rounded-full transition-colors duration-300
              bg-white hover:bg-zinc-400 text-black dark:bg-purple-700 dark:text-white dark:hover:bg-white hover:text-black dark:hover:text-black"
            >
              Ver mis proyectos
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

type TabButtonProps = {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

function TabButton({ children, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
        active
          ? 'bg-white dark:bg-purple-700 text-black dark:text-white'
          : 'bg-zinc-800 dark:bg-purple-900 bg-opacity-30 dark:bg-opacity-30 text-black dark:text-gray-300  hover:bg-white dark:hover:bg-purple-700'
      }`}
    >
      {children}
    </button>
  );
}

export default Content;
