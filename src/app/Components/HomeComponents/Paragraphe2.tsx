"use client";
import React, { useState, useEffect } from 'react';
import TypingEffect from './TypingEffect';

// Define an interface for the component props
interface Paragraphe2Props {
  startDelay: number;
  onComplete?: () => void; // Optional callback function
}

export function Paragraphe2({ startDelay, onComplete }: Paragraphe2Props) {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowParagraph(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  const text = [
    { content: "I am passionate about technology and problem-solving, with a practical approach that drives startup success. My ability to lead multidisciplinary teams ensures timely project completion. I am committed to continuous learning and technical growth to consistently deliver exceptional results.", highlight: false }
  ];

  return (
    <div>
      {showParagraph && (
        <TypingEffect
          text={text}
          speed={30}
          typingDelay={0}
          onComplete={onComplete} 
        />
      )}
    </div>
  );
}

export default Paragraphe2;
