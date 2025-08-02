"use client";

import React, { useState, useEffect, useMemo } from 'react';

interface TypingEffectProps {
  text: { content: string; highlight: boolean }[];
  speed?: number;
  typingDelay?: number;
  onComplete?: () => void;
  style?: React.CSSProperties; 
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50, typingDelay = 1500, onComplete, style }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);


  const textArray = useMemo(() => 
    Array.isArray(text) ? text : [{ content: text, highlight: false }],
    [text]
  );

  useEffect(() => {
    const handleTyping = () => {
      if (currentPartIndex < textArray.length) {
        const currentPart = textArray[currentPartIndex];
        if (currentCharIndex < currentPart.content.length) {
          setDisplayedText(prev => prev + currentPart.content[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setCurrentPartIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }
      } else {
        if (onComplete) {
          onComplete(); 
        }
        return;
      }
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [currentPartIndex, currentCharIndex, textArray, speed, onComplete]);

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setCurrentPartIndex(0);
      setCurrentCharIndex(0);
      setDisplayedText('');
    }, typingDelay);
    return () => clearTimeout(typingTimer);
  }, [typingDelay]);

  return (
    <p style={style}>
      {textArray.map((part, index) => (
        <span 
          key={index} 
          className={part.highlight ? 'text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-fuchsia-400' : ''}
        >
          {displayedText.slice(
            textArray.slice(0, index).reduce((acc, curr) => acc + curr.content.length, 0),
            textArray.slice(0, index + 1).reduce((acc, curr) => acc + curr.content.length, 0)
          )}
        </span>
      ))}
    </p>
  );
}

export default TypingEffect;
