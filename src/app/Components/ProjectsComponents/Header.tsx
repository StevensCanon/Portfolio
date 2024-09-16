'use client';
import React from 'react';
import TypingEffect from '../HomeComponents/TypingEffect';
import { Paytone_One } from 'next/font/google';

const paytone = Paytone_One({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className={`relative w-full h-[66.67vh] overflow-hidden flex items-center justify-center ${paytone.className}`}>
      <video 
        src='/videos/lineas.mp4' 
        autoPlay 
        loop 
        muted 
        playsInline
        className='absolute inset-0 w-full h-full object-cover'
      ></video>

      {/* Contenido sobre el video */}
      <div className='relative z-10 mt-80 text-center text-white'>
        <h2 className='text-xl'>
          <TypingEffect
            text={[
              { content: "Know my ", highlight: false },
              { content: "portfolio. ", highlight: true },
              { content: "These are some of the ",  highlight: false},
              { content: "projects ", highlight: true },
              { content: "in which he participates as a student.", highlight: false }
            ]}
            speed={80}
            typingDelay={0}
          />
        </h2>
      </div>
    </header>
  );
}

export default Header;
