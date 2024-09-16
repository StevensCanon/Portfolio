"use client";

import React, { useState, useEffect, useMemo } from 'react';

interface TypingEffectProps {
  text: { content: string; highlight: boolean }[];
  speed?: number;
  typingDelay?: number;
  onComplete?: () => void;
  style?: React.CSSProperties; // Add this line for style prop
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50, typingDelay = 1500, onComplete, style }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPartIndex, setCurrentPartIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  // Memoize textArray to avoid unnecessary re-renders
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
          onComplete(); // Notify parent when typing is complete
        }
        return; // Stop typing
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
          className={part.highlight ? 'text-transparent bg-clip-text bg-gradient-to-t from-fuchsia-700 to-purple-700' : ''}
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
