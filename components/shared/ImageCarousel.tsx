"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  // If no images, show placeholder
  if (images.length === 0) {
    return (
      <div className="relative w-full aspect-video bg-gradient-to-br from-red-200 to-orange-200 border-3 border-brutal-border flex items-center justify-center">
        <div className="text-6xl font-black text-white opacity-30">
          {alt.charAt(0)}
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div className="relative w-full aspect-video bg-gray-100 border-3 border-brutal-border overflow-hidden">
        {/* Current Image - Using gradient placeholder for now */}
        <div
          className={`w-full h-full bg-gradient-to-br ${
            currentIndex % 3 === 0
              ? "from-purple-200 to-blue-300"
              : currentIndex % 3 === 1
              ? "from-blue-200 to-teal-300"
              : "from-teal-200 to-green-300"
          } flex items-center justify-center`}
        >
          <div className="text-center">
            <div className="text-8xl font-black text-white opacity-40 mb-4">
              {alt.charAt(0)}
            </div>
            <div className="text-lg font-bold text-white opacity-60">
              Image {currentIndex + 1}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-50%] active:shadow-none active:translate-x-0 transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-brutal-text" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white border-2 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[2px] hover:translate-y-[-50%] active:shadow-none active:translate-x-0 transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-brutal-text" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white font-bold text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={`flex-shrink-0 w-16 h-16 border-2 transition-all ${
                index === currentIndex
                  ? "border-brand-red shadow-brutal"
                  : "border-brutal-border opacity-60 hover:opacity-100"
              }`}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${
                  index % 3 === 0
                    ? "from-red-200 to-orange-200"
                    : index % 3 === 1
                    ? "from-blue-200 to-teal-300"
                    : "from-teal-200 to-green-300"
                } flex items-center justify-center`}
              >
                <span className="text-xs font-bold text-white opacity-60">
                  {index + 1}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
