"use client";
import React, { useState } from 'react';
import TypingEffect from './Components/HomeComponents/TypingEffect';


interface IntroPageProps {
  onLoadComplete?: () => void; 
}

const IntroPage: React.FC<IntroPageProps> = ({ onLoadComplete }) => {
  const [loading, setLoading] = useState(true);


  const handleTypingComplete = () => {
    setTimeout(() => {
      setLoading(false);
      if (onLoadComplete) {
        onLoadComplete();
      }
    }, 1300); 
  };

 
  const text = [
    { content: "STEVENS ", highlight: false },
    { content: "CAÑON", highlight: false }
  ];

  return (
    <>
      {loading && (
        <div 
          className='bg-black' 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 9999 
          }}
        >
          <TypingEffect
            text={text} 
            speed={100} 
            typingDelay={0} 
            style={{ 
              fontSize: '120px',
              color: 'transparent', 
              WebkitTextStrokeWidth: '2px', 
              WebkitTextStrokeColor: 'indigo', 
              animationName: 'fillText', 
              animationDuration: '1s', 
              animationDelay: '2s', 
              animationFillMode: 'forwards' 
            }}
            onComplete={handleTypingComplete} 
          />
        </div>
      )}
    </>
  );
};

export default IntroPage;
