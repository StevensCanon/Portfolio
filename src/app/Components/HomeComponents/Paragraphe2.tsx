"use client";
import React, { useState, useEffect } from "react";
import TypingEffect from "./TypingEffect";

interface Paragraphe2Props {
  startDelay: number;
  onComplete?: () => void;
}

export function Paragraphe2({ startDelay, onComplete }: Paragraphe2Props) {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowParagraph(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  const text = [
    {
      content:
        "Me apasiona la tecnología y la resolución de problemas, y siempre busco formas prácticas de hacer realidad las ideas. Disfruto colaborar y asumir desafíos que me impulsen a mejorar. Estoy comprometido con el aprendizaje continuo y el crecimiento técnico para crear experiencias digitales útiles y confiables.",
      highlight: false,
    },
  ];

  return (
    <div>
      {showParagraph && (
        <TypingEffect
          text={text}
          speed={30}
          typingDelay={5}
          onComplete={onComplete}
        />
      )}
    </div>
  );
}

export default Paragraphe2;
