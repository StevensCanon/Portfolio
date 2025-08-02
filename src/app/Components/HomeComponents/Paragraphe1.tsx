"use client";

import React, { useState, useEffect } from "react";
import TypingEffect from "./TypingEffect";

interface Paragraphe1Props {
  startDelay: number;
  onComplete?: () => void;
}

export function Paragraphe1({ startDelay, onComplete }: Paragraphe1Props) {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowParagraph(true), startDelay);

    return () => clearTimeout(timer);
  }, [startDelay]);

  const text = [
    { content: "Soy un ", highlight: false },
    { content: "desarrollador de software junior ", highlight: true },
    { content: " que convierte ideas en experiencias digitales.", highlight: false }
  ];

  return (
    <div>
      {showParagraph && (
        <TypingEffect
          text={text}
          speed={80}
          typingDelay={0}
          onComplete={onComplete}
          style={{  }}
        />
      )}
    </div>
  );
}

export default Paragraphe1;
