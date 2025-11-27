"use client";

import { X, ArrowRight } from "lucide-react";
import { Project } from "@/lib/types";

interface ComparisonBarProps {
  selectedProjects: Project[];
  onRemove: (projectId: string) => void;
  onCompare: () => void;
  onClear: () => void;
}

export function ComparisonBar({
  selectedProjects,
  onRemove,
  onCompare,
  onClear,
}: ComparisonBarProps) {
  if (selectedProjects.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-3 border-brutal-border shadow-brutal-lg animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Selected Projects */}
          <div className="flex items-center gap-3 flex-1 overflow-x-auto">
            <span className="font-bold uppercase text-sm text-brutal-text whitespace-nowrap">
              Compare ({selectedProjects.length}/3):
            </span>
            <div className="flex gap-2">
              {selectedProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center gap-2 px-3 py-2 bg-red-50 border-2 border-brand-red text-sm whitespace-nowrap"
                >
                  <span className="font-bold text-brutal-text">
                    {project.name}
                  </span>
                  <button
                    onClick={() => onRemove(project.id)}
                    className="text-gray-600 hover:text-brutal-text transition-colors"
                    aria-label={`Remove ${project.name}`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onClear}
              className="px-4 py-2 bg-white text-gray-600 font-bold uppercase text-sm border-2 border-brutal-border shadow-brutal-sm hover:shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all whitespace-nowrap"
            >
              Clear All
            </button>
            <button
              onClick={onCompare}
              disabled={selectedProjects.length < 2}
              className="px-6 py-2 bg-brand-red text-white font-bold uppercase text-sm border-2 border-brutal-border shadow-brutal-sm hover:shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-brutal-sm flex items-center gap-2 whitespace-nowrap"
            >
              Compare
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
