import React, { useState, useRef, useEffect, useMemo } from 'react';
import { IoLogoNodejs, IoLogoReact, IoLogoGithub } from 'react-icons/io5';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMysql, SiTailwindcss, SiBootstrap, SiPrisma, SiTypescript, SiHtml5 } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { MdCss } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from './Particles';

type Technology = {
    name: string;
    icon: JSX.Element;
    description: string;
};

const TechShowcase = () => {
    const [selectedTech, setSelectedTech] = useState<Technology | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const technologies = useMemo(() => [
        { name: 'React', icon: <IoLogoReact />, description: 'A JavaScript library for building user interfaces' },
        { name: 'Node.js', icon: <IoLogoNodejs />, description: 'JavaScript runtime built on Chrome&#39;s V8 JavaScript engine' },
        { name: 'Next.js', icon: <TbBrandNextjs />, description: 'The React Framework for Production' },
        { name: 'MySQL', icon: <SiMysql />, description: 'Open-source relational database management system' },
        { name: 'PostgreSQL', icon: <BiLogoPostgresql />, description: 'Advanced open-source relational database' },
        { name: 'CSS', icon: <MdCss />, description: 'Style sheet language for designing web pages' },
        { name: 'Tailwind', icon: <SiTailwindcss />, description: 'A utility-first CSS framework' },
        { name: 'Bootstrap', icon: <SiBootstrap />, description: 'The most popular HTML, CSS, and JS library' },
        { name: 'Prisma', icon: <SiPrisma />, description: 'Next-generation ORM for Node.js and TypeScript' },
        { name: 'TypeScript', icon: <SiTypescript />, description: 'Typed superset of JavaScript that compiles to plain JavaScript' },
        { name: 'GitHub', icon: <IoLogoGithub />, description: 'Web-based hosting service for version control using Git' },
        { name: 'HTML', icon: <SiHtml5 />, description: 'Standard markup language for documents designed to be displayed in a web browser' }
    ], []);

    useEffect(() => {
        const handleResize = () => {
            if (selectedTech) {
                const index = technologies.findIndex(tech => tech.name === selectedTech.name);
                updateTooltipPosition(index);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [selectedTech, technologies]);

    const updateTooltipPosition = (index: number) => {
        const card = cardRefs.current[index];
        if (card) {
            const rect = card.getBoundingClientRect();
            const scrollY = window.scrollY || window.pageYOffset;
            setTooltipPosition({
                x: rect.right + 20,
                y: rect.top + scrollY + rect.height / 2
            });
        }
    };

    const handleCardClick = (tech: Technology, index: number) => {
        setSelectedTech(selectedTech?.name === tech.name ? null : tech);
        updateTooltipPosition(index);
    };

    return (
        <div className="bg-gradient-to-t from-slate-950 to-black  min-h-screen flex flex-col justify-center items-center p-8 ">
            <Particles />
            <motion.h1 
                initial={{ opacity: 100, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-fuchsia-400 mb-20 "
            >
               My ToolBox
            </motion.h1>

            <div className="grid grid-cols-6 gap-12 max-w-5xl ">
                {technologies.map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        ref={el => {
                            cardRefs.current[index] = el;
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="relative"
                        onClick={() => handleCardClick(tech, index)}
                    >
                        <div className={`bg-purple-950 bg-opacity-50 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-opacity-30 transition-all duration-300  ${selectedTech?.name === tech.name ? 'ring-2 ring-purple-500' : ''}`}>
                            <span className="text-5xl text-purple-400 mb-2">{tech.icon}</span>
                            <span className="text-lg text-purple-300">{tech.name}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedTech && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        style={{
                            position: 'absolute',
                            left: tooltipPosition.x,
                            top: tooltipPosition.y,
                            transform: 'translateY(-50%)'
                        }}
                        className="bg-purple-900 bg-opacity-90 rounded-lg p-6 max-w-xs shadow-lg "
                    >
                        <div className="flex items-center mb-4 ">
                            <span className="text-4xl text-purple-400 mr-4">{selectedTech.icon}</span>
                            <h2 className="text-2xl font-bold text-purple-200">{selectedTech.name}</h2>
                        </div>
                        <p className="text-purple-100 text-sm">{selectedTech.description}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default TechShowcase;
