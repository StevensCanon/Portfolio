"use client";

import React from "react";
import ReactFullpage from '@fullpage/react-fullpage'; 
import Navbar from "@/app/Components/HomeComponents/Navbar";
import Footer from "@/app/Components/HomeComponents/Footer";
import Form from "@/app/Components/ContactComponents/Form";
import { fullpageConfig } from '@/lib/fullpage-config';

const fullpageOptions = {
  ...fullpageConfig,
  // Configuración específica para la página de contact
  anchors: ['contact', 'footer'],
  lockAnchors: false,
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