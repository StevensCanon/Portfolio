"use client";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Navbar from "@/app/Components/HomeComponents/Navbar";
import Body from "@/app/Components/AboutmeComponents/Body";
import Footer from "@/app/Components/HomeComponents/Footer";
import Certificado from "@/app/Components/AboutmeComponents/Certificado";
import { QualitiesMarquee } from "@/app/Components/AboutmeComponents/Qualities";
import { fullpageConfig } from '@/lib/fullpage-config';

const fullpageOptions = {
  ...fullpageConfig,
  // Configuración específica para la página de about
  anchors: ['about', 'experience', 'certificates', 'footer'],
  lockAnchors: false,
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