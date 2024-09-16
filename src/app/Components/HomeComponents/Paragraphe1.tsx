"use client";

import React, { useState, useEffect } from 'react';
import TypingEffect from './TypingEffect';

// Define an interface for the component props
interface Paragraphe1Props {
  startDelay: number;
  onComplete?: () => void; // Optional callback function
}

export function Paragraphe1({ startDelay, onComplete }: Paragraphe1Props) {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowParagraph(true), startDelay);

    return () => clearTimeout(timer);
  }, [startDelay]);

  const text = [
    { content: "I am a ", highlight: false },
    { content: "Software Development student", highlight: true },
    { content: " focused on promoting your project.", highlight: false }
  ];

  return (
    <div>
      {showParagraph && (
        <TypingEffect
          text={text}
          speed={80}
          typingDelay={0}
          onComplete={onComplete}
          style={{}} // Pass an empty style object or customize if needed
        />
      )}
    </div>
  );
}

export default Paragraphe1;
