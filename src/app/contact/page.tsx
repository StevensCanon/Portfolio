"use client";

import React from "react";
import ReactFullpage from '@fullpage/react-fullpage'; 
import Navbar from "@/app/Components/HomeComponents/Navbar";
import Footer from "@/app/Components/HomeComponents/Footer";
import Form from "@/app/Components/ContactComponents/Form";

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
  anchors: ['contact', 'footer'],
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

export default function ContactPage() {
  return (
    <ReactFullpage
      {...fullpageOptions}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section fp-auto-height">
              <Navbar />
            </div>
            <div className="section fp-auto-height">
              <Form />
            </div>
            <div className="section fp-auto-height">
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
} 