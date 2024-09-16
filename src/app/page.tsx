"use client"; // Ensure this is at the top of the file

import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from '@/app/Components/HomeComponents/Navbar';
import Header from '@/app/Components/HomeComponents/Header';
import LanguageCards from '@/app/Components/HomeComponents/Cards';
import Footer from '@/app/Components/HomeComponents/Footer';
import Content from './Components/HomeComponents/Content';
import Body from '@/app/Components/HomeComponents/Body';
import './globals.css';
import IntroPage from './Carga';
import Contact from './Components/HomeComponents/Contact';
import Particles from "@/app/Components/HomeComponents/Particles";

// Define fullpage options
const fullpageOptions = {
  scrollingSpeed: 1000,
  scrollOverflow: true,
  responsiveWidth: 768,
  credits: { 
    // Provide the default settings or an empty object if you do not need credits
    // The exact configuration can be found in the library's documentation
  },
};

function Home() {
  return (
    <div className=''>      
      <IntroPage />
      <Navbar />
      <ReactFullpage
        {...fullpageOptions}
        render={({ state, fullpageApi }) => {
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

export default Home;
