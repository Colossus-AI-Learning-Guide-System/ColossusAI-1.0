'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypeWriterProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function TypeWriter({
  text,
  className,
  speed = 100,
  delay = 500,
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isStarted]);

  return (
    <span className={cn('font-mono', className)}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}