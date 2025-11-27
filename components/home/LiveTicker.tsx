"use client";

import { useEffect, useState } from "react";
import { Project } from "@/lib/data";

interface LiveTickerProps {
  projects: Project[];
}

export function LiveTicker({ projects }: LiveTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
        setIsPulsing(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const currentProject = projects[currentIndex];

  return (
    <div className="relative">
      {/* LIVE Badge */}
      <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-10">
        <div className="px-2 py-0.5 sm:px-3 sm:py-1 bg-white text-gray-900 font-bold uppercase text-[10px] sm:text-xs border border-gray-200">
          Live
        </div>
      </div>

      {/* Winner Card */}
      <div
        className={`bg-white border border-gray-200 p-4 sm:p-6 transition-all duration-300 ${
          isPulsing ? "opacity-80" : "opacity-100"
        }`}
      >
        <div className="mb-3 sm:mb-4">
          <div className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wider mb-1 sm:mb-2">
            Latest Winner
          </div>
          <h3
            className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-900 transition-opacity duration-300 ${
              isPulsing ? "opacity-50" : "opacity-100"
            }`}
          >
            {currentProject.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{currentProject.tagline}</p>
        </div>

        {/* Team Photo Placeholder */}
        <div className="mb-3 sm:mb-4">
          <div className="w-full h-20 sm:h-28 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-gray-400">
              {currentProject.teamName.charAt(0)}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="font-medium text-gray-700">Team:</span>
            <span className="text-gray-600 truncate">{currentProject.teamName}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 text-[10px] sm:text-xs font-medium">
              {currentProject.category}
            </span>
            <span className="text-[10px] sm:text-xs text-gray-500">
              CodeXtreme 2025
            </span>
          </div>

          {/* Tech Stack - Hide on very small screens */}
          <div className="hidden sm:block">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
              Tech Stack
            </div>
            <div className="flex flex-wrap gap-1.5">
              {currentProject.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-50 border border-gray-200 text-gray-600 text-xs"
                >
                  {tech}
                </span>
              ))}
              {currentProject.techStack.length > 3 && (
                <span className="px-2 py-1 text-xs text-gray-400">
                  +{currentProject.techStack.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
          <div className="flex gap-1">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`h-0.5 flex-1 transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gray-900"
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
