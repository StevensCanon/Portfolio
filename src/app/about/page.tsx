'use client';
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage'; 
import Navbar from '@/app/Components/HomeComponents/Navbar';
import Body from '@/app/Components/AboutmeComponents/Body';
import Footer from '@/app/Components/HomeComponents/Footer';
import Carousel from '@/app/Components/AboutmeComponents/Carousel';
import Certificado from '@/app/Components/AboutmeComponents/Certificado';
import Recomendaciones from '@/app/Components/AboutmeComponents/Recomendaciones';

import "../globals.css";

const fullpageOptions = {
  scrollingSpeed: 1000,
  scrollOverflow: true, // Esto permite el scroll dentro de secciones con mucho contenido
  responsiveWidth: 768, // Desactiva fullpage.js en pantallas menores a 768px
  credits: {} // Provide an empty object or valid credits if needed
};

function AboutPage() {
  return (
    <div className=''>
      <Navbar />
      <ReactFullpage
        {...fullpageOptions}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section fp-auto-height">
                <Body />
              </div>
              <div className="section fp-auto-height">
                <Carousel />
              </div>
              <div className="section fp-auto-height">
                <Recomendaciones />
              </div>
              <div className="section fp-auto-height">
                <Certificado />
              </div>
              <div className="section fp-auto-height">
                <Footer />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default AboutPage;
