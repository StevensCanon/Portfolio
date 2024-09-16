import React, { useState } from 'react';
import '../../../app/globals.css';
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaPaintBrush } from 'react-icons/fa';
import Link from 'next/link';

function Body() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sectionData = {
    design: {
      title: "Design",
      icon: <FaPaintBrush className="text-6xl mb-4" />,
      description: "Crafting visually stunning and intuitive user interfaces. My design philosophy revolves around user-centric principles, ensuring every pixel serves a purpose while maintaining aesthetic appeal.",
      skills: ["UI/UX", "Responsive Design", "Figma"]
    },
    development: {
      title: "Development",
      icon: <FaCode className="text-6xl mb-4" />,
      description: "Building efficient, scalable applications with cutting-edge technologies. I produce robust solutions that are not only fast but also built to grow with your needs.",
      skills: ["React", "Node.js", "Next.js", "TypeScript"]
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-950 to-black min-h-screen flex flex-col items-center justify-center p-4">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold  text-transparent bg-clip-text bg-gradient-to-t from-neutral-50 to-gray-400 mb-12"
      >
        Craft & Code
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
        {Object.entries(sectionData).map(([key, data]) => (
          <motion.div
            key={key}
            className={`flex-1 bg-purple-700 bg-opacity-20 rounded-2xl p-6 cursor-pointer backdrop-blur-sm transition-all duration-300 ${activeSection === key ? 'ring-4 ring-neutral-50' : ''}`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveSection(activeSection === key ? null : key)}
          >
            <div className="text-center text-white">
              {data.icon}
              <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
              <p className="text-sm opacity-80">Click to explore</p>
            </div>

            <AnimatePresence>
              {activeSection === key && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4"
                >
                  <p className="text-gray-300 mb-4">{data.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, index) => (
                      <span key={index} className="bg-zinc-200 text-neutral-600 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 bg-gradient-to-tl from-neutral-50 to-zinc-400 text-zinc-800 font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                  Let&#39;s Collaborate
              </motion.button>
            </Link>
    </div>
  );
}

export default Body;
