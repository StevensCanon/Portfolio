"use client";

import React, { useState } from 'react';
import '../../../app/globals.css';
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaAndroid } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import Link from 'next/link';

// Define los tipos de las claves posibles para tabContent
type Tab = 'web' | 'android';

const Content = () => {
  const [activeTab, setActiveTab] = useState<Tab>('web');

  const tabContent: Record<Tab, { title: string; description: string; icon: JSX.Element }> = {
    web: {
      title: "Web Applications",
      description: "I'm diving into the world of modern web development using React and Next.js. These powerful tools allow me to create responsive and interactive web applications that provide seamless user experiences across devices.",
      icon: <SiNextdotjs className="text-4xl mb-4" />
    },
    android: {
      title: "Android Applications",
      description: "Venturing into mobile development, I'm exploring the Android ecosystem. I'm learning to build native applications that leverage the full potential of Android devices, creating engaging and functional mobile experiences.",
      icon: <FaAndroid className="text-4xl mb-4" />
    }
  };

  return (
    <div className='bg-gradient-to-t from-slate-950 to-black min-h-screen flex items-center justify-center p-4'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full'>
        
        {/* Left column: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='relative w-full h-[60vh] lg:h-[80vh] rounded-xl overflow-hidden shadow-2xl'
        >
          <Image
            src="/images/anime.jpeg" 
            alt='Project'
            layout='fill'
            objectFit='cover'
            className='transition-transform duration-300 hover:scale-110'
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <motion.h1 
            className='absolute bottom-0 left-0 right-0 text-white p-6 text-3xl lg:text-4xl font-bold text-center'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            WEB AND ANDROID APPLICATIONS
          </motion.h1>
        </motion.div>

        {/* Right column: Interactive content */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='bg-purple-900 bg-opacity-20 rounded-xl p-6 flex flex-col justify-between backdrop-blur-sm'
        >
          <div>
            <div className="flex mb-6">
              <TabButton active={activeTab === 'web'} onClick={() => setActiveTab('web')}>
                <FaReact className="mr-2" /> Web
              </TabButton>
              <TabButton active={activeTab === 'android'} onClick={() => setActiveTab('android')}>
                <FaAndroid className="mr-2" /> Android
              </TabButton>
            </div>
            
            <AnimatePresence mode='wait'>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-white"
              >
                {tabContent[activeTab].icon}
                <h2 className="text-2xl font-bold mb-4">{tabContent[activeTab].title}</h2>
                <p className="text-gray-300">{tabContent[activeTab].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <Link href="/projects" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              Explore My Projects
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
      className={`flex items-center mr-4 px-4 py-2 rounded-full transition-colors duration-300 ${
        active ? 'bg-purple-600 text-white' : 'bg-purple-800 bg-opacity-50 text-gray-300 hover:bg-purple-700'
      }`}
    >
      {children}
    </button>
  );
}

export default Content;
