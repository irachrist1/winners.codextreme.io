"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Project } from "@/lib/types";

interface SearchBarProps {
  projects: Project[];
  onSelectProject?: (project: Project) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  projects,
  onSelectProject,
  placeholder = "Search projects, teams, tech stack...",
  className = "",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Project[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filter projects based on search query
  useEffect(() => {
    if (query.trim().length === 0) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = projects.filter((project) => {
      return (
        project.name.toLowerCase().includes(lowercaseQuery) ||
        project.teamName.toLowerCase().includes(lowercaseQuery) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(lowercaseQuery)
        ) ||
        project.competitionYear.toString().includes(query)
      );
    });

    setResults(filtered.slice(0, 8)); // Limit to 8 results
    setIsOpen(filtered.length > 0);
    setSelectedIndex(-1);
  }, [query, projects]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleSelectProject(results[selectedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSelectProject = (project: Project) => {
    setQuery("");
    setIsOpen(false);
    setSelectedIndex(-1);
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length > 0 && results.length > 0 && setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 border-2 border-brutal-border shadow-brutal-sm font-medium text-sm text-brutal-text bg-white focus:outline-none focus:ring-2 focus:ring-brand-red focus:shadow-brutal transition-all"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brutal-text transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-3 border-brutal-border shadow-brutal-lg max-h-96 overflow-y-auto z-50">
          {/* Results count */}
          <div className="px-4 py-2 bg-gray-50 border-b-2 border-brutal-border">
            <span className="text-xs font-bold uppercase text-gray-600">
              {results.length} {results.length === 1 ? "Result" : "Results"} Found
            </span>
          </div>

          {/* Results list */}
          <div className="divide-y-2 divide-gray-100">
            {results.map((project, index) => (
              <button
                key={project.id}
                onClick={() => handleSelectProject(project)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full px-4 py-3 text-left hover:bg-red-50 transition-colors ${
                  selectedIndex === index ? "bg-red-50" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    {/* Project Name */}
                    <div className="font-bold text-sm text-brutal-text truncate mb-1">
                      {project.name}
                    </div>

                    {/* Team Name & Year */}
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-1">
                      <span className="font-medium">{project.teamName}</span>
                      <span className="text-gray-400">•</span>
                      <span>{project.competitionYear}</span>
                    </div>

                    {/* Tech Stack Preview */}
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-gray-100 border border-gray-300 text-xs font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-0.5 text-xs text-gray-500">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Rank Badge */}
                  {project.rank <= 3 && (
                    <div
                      className={`flex-shrink-0 px-2 py-1 border-2 border-brutal-border font-black text-xs ${
                        project.rank === 1
                          ? "bg-brand-yellow text-brutal-text"
                          : project.rank === 2
                          ? "bg-gray-300 text-brutal-text"
                          : "bg-brand-orange text-white"
                      }`}
                    >
                      #{project.rank}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Keyboard hint */}
          <div className="px-4 py-2 bg-gray-50 border-t-2 border-brutal-border">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs font-mono">
                  ↑↓
                </kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs font-mono">
                  ↵
                </kbd>
                Select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs font-mono">
                  Esc
                </kbd>
                Close
              </span>
            </div>
          </div>
        </div>
      )}

      {/* No results message */}
      {isOpen && query.length > 0 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-3 border-brutal-border shadow-brutal-lg z-50">
          <div className="px-4 py-8 text-center">
            <Search className="w-8 h-8 text-gray-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-gray-600 mb-1">
              No results found
            </p>
            <p className="text-xs text-gray-500">
              Try searching for a different project, team, or technology
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
