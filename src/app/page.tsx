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
  scrollingSpeed: 1000,
  scrollOverflow: true,
  responsiveWidth: 768,
  credits: {},
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
