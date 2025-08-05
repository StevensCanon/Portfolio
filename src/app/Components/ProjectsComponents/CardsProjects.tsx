"use client";

import { cardData } from "@/data/projects";
import { IconType } from "react-icons";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";

function getTooltip(Icon: IconType): string {
  const map: Record<string, string> = {
    FaHtml5: "HTML5",
    FaCss3: "CSS3",
    FaBootstrap: "Bootstrap",
    FaReact: "React",
    SiNextdotjs: "Next.js",
    SiTailwindcss: "Tailwind CSS",
    TbBrandLaravel: "Laravel",
    FaVuejs: "Vue.js",
    SiVite: "Vite",
  };
  return map[Icon.name] ?? "Tech";
}

export default function CardsProjects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  return (
    <section className="min-h-screen w-full bg-black py-16">
      <Fade duration={800}>
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card, index) => (
              <Fade key={index} delay={index * 100} duration={600}>
                <div 
                  className={`relative bg-neutral-900 overflow-hidden  transition-all duration-500 group shadow-md  hover:shadow-purple-200 ${
                    hoveredCard !== null && hoveredCard !== index 
                      ? 'blur-sm opacity-50 scale-95' 
                      : 'blur-none opacity-100 scale-100'
                  }`}
                  style={{
                    borderRadius: '24px 24px 12px 12px',
                    border: '1px solid rgba(107, 114, 128, 0.3)'
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  
                  {/* Imagen con forma personalizada */}
                  <div className="relative w-full h-48 overflow-hidden" style={{borderRadius: '20px 20px 0 0'}}>
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-fill group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                    {/* Línea de acento */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-purple-400 to-transparent opacity-60"></div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    
                    {/* Título */}
                    <h3 className="text-white text-xl font-semibold mb-3 leading-tight text-center">
                      {card.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {card.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="flex gap-3 mb-6 justify-center">
                      {card.icons.map((Icon, idx) => (
                        <div 
                          key={idx} 
                          className="relative group/tooltip"
                        >
                          <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-200">
                            <Icon className="w-4 h-4 text-gray-300 hover:text-white transition-colors duration-200" />
                          </div>
                          
                          {/* Tooltip mejorado */}
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                            <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded border border-gray-700 shadow-lg whitespace-nowrap">
                              {getTooltip(Icon)}
                            </div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Botón */}
                    <Link href={card.link}>
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200">
                        Ver Proyecto
                      </button>
                    </Link>

                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}