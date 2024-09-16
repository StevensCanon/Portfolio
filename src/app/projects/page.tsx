"use client";
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from '@/app/Components/HomeComponents/Navbar';
import Footer from '@/app/Components/HomeComponents/Footer';
import '../globals.css';
import CardsProjects from '../Components/ProjectsComponents/CardsProjects';
import Header from '../Components/ProjectsComponents/Header';


const fullpageOptions = {
  scrollingSpeed: 1000,
  scrollOverflow: true, 
  responsiveWidth: 768, 
  credits: { 
   
    enabled: false
  }
};

function ProjectsPage() {
  return (
    <div className=''>
      <Navbar />
      <ReactFullpage
        {...fullpageOptions}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section fp-auto-height">
                <Header />
              </div>
              <div className="section ">
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

export default ProjectsPage;
