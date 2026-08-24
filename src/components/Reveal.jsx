// src/components/Reveal.jsx
import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '', delay = 0, animation = 'fadeInUp' }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      style={{ animationDelay: `${delay}ms` }}
      className={`${className} ${
        isVisible ? `animate-${animation} opacity-100` : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}