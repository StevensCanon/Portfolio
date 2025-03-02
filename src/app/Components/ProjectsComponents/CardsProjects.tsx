 'use client';

import React from 'react';
import { IconType } from 'react-icons';
import { FaHtml5, FaCss3, FaBootstrap, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { TbBrandLaravel } from 'react-icons/tb';
import { Fade } from 'react-awesome-reveal';
import '../../globals.css'; 
import Link from 'next/link';

export interface CardData {
  title: string;
  description: string;
  image: string;
  icons: IconType[];
  link: string;
}

const cardData: CardData[] = [
  { 
    title: 'GrandSports', 
    description: 'This project is an e-commerce platform for the sale of sports clothing, developed with Laravel and styled with Bootstrap. It offers an intuitive shopping experience, with features such as user management, shopping cart, and secure payment system. Its adaptable interface ensures a consistent experience across different devices.', 
    image: '/images/Proyecto1.jpg' , 
    icons: [TbBrandLaravel, FaBootstrap],
    link: 'https://example.com/grandsports', 
  },
  { 
    title: 'Sneakers', 
    description: 'A sneaker online store project, developed with HTML5, CSS, and Bootstrap. It offers a modern and attractive shopping experience, with a responsive design that adapts to different devices. Users can explore a wide range of sneakers, view product details, and make secure purchases.', 
    image: '/images/Proyecto2.png', 
    icons: [FaHtml5, FaCss3, FaBootstrap],
    link: 'https://example.com/sneakers', 
  },
  { 
    title: 'RAM Memory Simulator', 
    description: 'An interactive RAM memory simulator developed with React, Next.js, and Tailwind CSS. This project allows users to experience how RAM works by simulating read and write processes. It utilizes modern technologies to provide a smooth and responsive user experience.', 
    image: '/images/Proyecto3.jpeg', 
    icons: [FaReact, SiNextdotjs, SiTailwindcss],
    link: 'https://example.com/ram-memory-simulator', 
  },
  { 
    title: 'GoalShirts', 
    description: 'Goalshirts is a platform for selling football-related shirts, created with HTML5 and Bootstrap. It offers a wide selection of shirts from popular teams and exclusive designs for football enthusiasts. The responsive design ensures a smooth browsing experience on all devices.', 
    image: '/images/Proyecto4.jpeg', 
    icons: [FaHtml5, FaCss3, FaBootstrap],
    link: 'https://example.com/goalshirts', 
  },
  { 
    title: 'Library Manager', 
    description: 'A library manager developed with Next.js, React, and Tailwind CSS. This project allows users to manage their book collection, add new books, perform searches, and keep track of loans. The combination of modern technologies offers an intuitive interface and advanced functionality.', 
    image: '/images/Proyecto5.jpeg', 
    icons: [FaReact, SiNextdotjs, SiTailwindcss],
    link: 'https://example.com/library-manager', 
  },
  { 
    title: 'Aprendex', 
    description: 'Aprendex is an online learning platform with login and registration features, developed with Next.js, React, Tailwind CSS, and Bootstrap. It offers a wide variety of programming and technology courses. Users can register, log in, and access exclusive content, all with a friendly and secure interface.', 
    image: '/images/Proyecto6.jpeg', 
    icons: [FaReact, SiNextdotjs, FaBootstrap, SiTailwindcss],
    link: 'https://example.com/aprendex', 
  },
];

function getTooltip(Icon: IconType): string {
  switch (Icon) {
    case FaHtml5:
      return 'HTML5';
    case FaCss3:
      return 'CSS3';
    case FaBootstrap:
      return 'Bootstrap';
    case FaReact:
      return 'React';
    case SiNextdotjs:
      return 'Next.js';
    case SiTailwindcss:
      return 'Tailwind CSS';
    case TbBrandLaravel:
      return 'Laravel';
    default:
      return 'Technology';
  }
}

function CardsProjects() {
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-slate-950 to-black py-12'>
      <Fade duration={1000}>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {cardData.map((card, index) => (
              <div key={index} className="card bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="img"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>
                <div className="p-4 flex flex-col items-center text-center">
                  <span className='text-xl font-bold'>{card.title}</span>
                  <p className="info mt-2 text-gray-700">{card.description}</p>
                  <div className="share mt-4 flex justify-center flex-wrap gap-2">
                    {card.icons.map((Icon, idx) => (
                      <div key={idx} className="icon-wrapper relative">
                        <Icon className='text-2xl text-gray-400' />
                        <span className="tooltip absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-black text-white text-sm rounded-md opacity-0 hover:opacity-100 transition-opacity">{getTooltip(Icon)}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={card.link} passHref className="mt-4 w-full flex justify-center">
                    <button className='flex items-center justify-center px-2 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 w-full'>
                      <h4>View Project</h4>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default CardsProjects;