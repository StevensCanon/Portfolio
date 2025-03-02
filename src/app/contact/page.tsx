"use client";

import React from "react";
import ReactFullpage from '@fullpage/react-fullpage'; 
import Navbar from "@/app/Components/HomeComponents/Navbar";
import Footer from "@/app/Components/HomeComponents/Footer";
import Form from "@/app/Components/ContactComponents/Form";
import "../globals.css";

// Opciones para fullpage.js
const fullpageOptions = {
  scrollingSpeed: 1000,
  scrollOverflow: true, // Permite el scroll dentro de secciones con mucho contenido
  responsiveWidth: 768, // Desactiva fullpage.js en pantallas menores a 768px
  credits: {} // Proporciona un objeto vacío o créditos válidos si es necesario
};

function ContactPage() {
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

export default ContactPage;
