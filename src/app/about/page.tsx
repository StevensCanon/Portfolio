"use client";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "@/app/Components/HomeComponents/Navbar";
import Body from "@/app/Components/AboutmeComponents/Body";
import Footer from "@/app/Components/HomeComponents/Footer";
import Certificado from "@/app/Components/AboutmeComponents/Certificado";
import { QualitiesMarquee } from "@/app/Components/AboutmeComponents/Qualities";

const fullpageOptions = {
  scrollingSpeed: 1000,
  scrollOverflow: true,
  responsiveWidth: 768,
  credits: {},
};

export default function AboutPage() {
  return (
    <div className="">
      <Navbar />
      <ReactFullpage
        {...fullpageOptions}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section fp-auto-height">
                <Body />
              </div>
              <div className="section fp-auto-height ">
                <QualitiesMarquee />
              </div>
              <div className="section fp-auto-height">
                
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