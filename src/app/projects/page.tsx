"use client";
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from '@/app/Components/HomeComponents/Navbar';
import Footer from '@/app/Components/HomeComponents/Footer';
import CardsProjects from '@/app/Components/ProjectsComponents/CardsProjects';
import Header from '@/app/Components/ProjectsComponents/Header';

const fullpageOptions = {
  scrollingSpeed: 1000,
  scrollOverflow: true, 
  responsiveWidth: 768, 
  credits: { 
    enabled: false
  }
};

export default function ProjectsPage() {
  return (
    <div className=''>
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
                <CardsProjects />
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