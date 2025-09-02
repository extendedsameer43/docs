"use client";

import { useEffect, useState } from 'react';

interface ThemeImageProps {
  darkSrc: string;
  lightSrc: string;
  alt: string;
  className?: string;
}

export function ThemeImage({ darkSrc, lightSrc, alt, className }: ThemeImageProps) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check current theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <img
      src={isDark ? darkSrc : lightSrc}
      alt={alt}
      className={className}
      loading="lazy"
    />
  );
}
