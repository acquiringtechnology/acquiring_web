'use client';

import React, { useEffect, useState } from 'react';
import styles from './typingEffect.module.scss'; // Import as module

export const TextTypingEffect = () => {
  const texts = ['Simplifying Tech...', 'Amplifying Skills...'];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingSpeed = 100;
    const eraseSpeed = 50;
    const pauseBetween = 1000;

    let timeout

    if (isTyping) {
      if (charIndex < texts[textIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev + texts[textIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseBetween);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, eraseSpeed);
      } else {
        setIsTyping(true);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, textIndex, texts]);

  return (
    <div className={styles.typingContainer}>
      {currentText}
      <span className={styles.cursor}>|</span>
    </div>
  );
};

