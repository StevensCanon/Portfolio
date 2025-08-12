"use client";

import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from '@/app/Components/HomeComponents/Navbar';
import Header from '@/app/Components/HomeComponents/Header';
import LanguageCards from '@/app/Components/HomeComponents/Cards';
import Footer from '@/app/Components/HomeComponents/Footer';
import Content from './Components/HomeComponents/Content';
import Body from '@/app/Components/HomeComponents/Body';
import Contact from './Components/HomeComponents/Contact';
import IntroPage from './Carga';

const fullpageOptions = {

  // Comportamiento de scroll
  scrollingSpeed: 700,
  easingcss3: 'ease',
  easing: 'ease',
  
  // Accesibilidad
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,
  
 
  // Lazy loading
  lazyLoading: true,
  lazyLoadThreshold: 0,
  observer: false,
  
  // Créditos completamente desactivados
  credits: { 
    enabled: false, 
    label: '', 
    position: 'right' as const
  },
  
  // Opciones adicionales esenciales
  autoScrolling: true,
  fitToSection: true,
  scrollBar: false,
  responsiveWidth: 768,
  responsiveHeight: 600,
  
  
  // Configuración de touch para móviles
  touchSensitivity: 15,
  normalScrollElements: '.scrollable-content',
  
  // Configuración de hash
  anchors: ['header', 'toolbox', 'body', 'content', 'contact', 'footer'],
  lockAnchors: false,
  
  // Configuración de responsive
  responsiveSlides: true,
  
  // Configuración de scroll horizontal
  scrollHorizontally: false,
  scrollHorizontallyKey: 'shiftKey',
  
  // Configuración de parallax
  parallax: false,
  parallaxOptions: {
    type: 'reveal' as const,
    percentage: 62,
    property: 'translate' as const
  }
};

export default function HomePage() {
  return (
    <div className=''>      
      <IntroPage />
      <Navbar />
      <ReactFullpage
        {...fullpageOptions}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section fp-auto-height">
                <Header />
              </div>
              <div className="section fp-auto-height">
                <LanguageCards />
              </div>
              <div className="section fp-auto-height">
                <Body />
              </div>
              <div className="section fp-auto-height">
                <Content />
              </div>
              <div className="section fp-auto-height">
                <Contact />
              </div>
              <div className='section fp-auto-height'>
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}
