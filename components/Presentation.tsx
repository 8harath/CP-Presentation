"use client";

import { useState, useEffect, ReactNode } from "react";

interface PresentationProps {
  slides: ReactNode[];
}

export default function Presentation({ slides }: PresentationProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key === "Home") {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goToSlide(slides.length - 1);
      } else if (e.key >= "1" && e.key <= "9") {
        const slideNum = parseInt(e.key) - 1;
        if (slideNum < slides.length) {
          goToSlide(slideNum);
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* Slide Container */}
      <div className="w-full h-full flex items-center justify-center p-12">
        <div className="w-full max-w-7xl h-full bg-white neo-border neo-brutal-shadow-lg overflow-auto">
          {slides[currentSlide]}
        </div>
      </div>

      {/* Fancy Slide Counter - NeoBrutalist Style */}
      <div className="absolute top-8 right-8 flex items-center gap-3">
        <div className="bg-white neo-border-thin neo-brutal-shadow-sm px-6 py-3 flex items-baseline gap-2">
          <span className="text-5xl font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="text-2xl font-medium text-gray-400">/</span>
          <span className="text-2xl font-medium text-gray-400">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}
