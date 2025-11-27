"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { FilterBar } from "./FilterBar";
import { SearchBar } from "@/components/ui/SearchBar";
import { ComparisonBar } from "./ComparisonBar";
import { ComparisonModal } from "./ComparisonModal";
import { RankBadge } from "@/components/shared/RankBadge";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getProjects, getCompetitions } from "@/lib/data";
import { Project } from "@/lib/types";

export function WinnersGrid() {
  const allProjects = getProjects();
  const competitions = getCompetitions();

  // Get unique years and categories
  const years = Array.from(new Set(competitions.map((c) => c.year))).sort(
    (a, b) => b - a
  );
  const categories = Array.from(new Set(allProjects.map((p) => p.category)));

  // Filter state
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [winnersOnly, setWinnersOnly] = useState(false);

  // Sort and view mode state with localStorage
  const [sortBy, setSortBy] = useState<string>("recent");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Comparison mode state
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  // Load preferences from localStorage on mount
  useEffect(() => {
    const savedSort = localStorage.getItem("winnersSort");
    const savedView = localStorage.getItem("winnersView");
    if (savedSort) setSortBy(savedSort);
    if (savedView && (savedView === "grid" || savedView === "list")) {
      setViewMode(savedView);
    }
  }, []);

  // Save preferences to localStorage
  const handleSortChange = (sort: string) => {
    setSortBy(sort);
    localStorage.setItem("winnersSort", sort);
  };

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    localStorage.setItem("winnersView", mode);
  };

  // Comparison handlers
  const handleToggleCompare = (project: Project) => {
    setSelectedProjects((prev) => {
      const isSelected = prev.some((p) => p.id === project.id);
      if (isSelected) {
        return prev.filter((p) => p.id !== project.id);
      } else {
        // Max 3 projects
        if (prev.length >= 3) {
          return prev;
        }
        return [...prev, project];
      }
    });
  };

  const handleRemoveFromCompare = (projectId: string) => {
    setSelectedProjects((prev) => prev.filter((p) => p.id !== projectId));
  };

  const handleClearComparison = () => {
    setSelectedProjects([]);
  };

  const handleShowComparison = () => {
    setShowComparison(true);
  };

  const handleCloseComparison = () => {
    setShowComparison(false);
  };

  // Filtered and sorted projects
  const filteredProjects = useMemo(() => {
    // First, filter
    let filtered = allProjects.filter((project) => {
      // Year filter
      if (selectedYear !== "all") {
        const competition = competitions.find(
          (c) => c.id === project.competitionId
        );
        if (competition && competition.year.toString() !== selectedYear) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== "all" && project.category !== selectedCategory) {
        return false;
      }

      // Winners only filter (top 3)
      if (winnersOnly && project.rank > 3) {
        return false;
      }

      return true;
    });

    // Then, sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "recent":
          // Sort by competition year (most recent first)
          return b.competitionYear - a.competitionYear;
        case "rank":
          // Sort by rank (lowest number = highest rank)
          return a.rank - b.rank;
        case "innovative":
          // For now, sort by category then rank (can be customized with innovation scores)
          if (a.category === "Innovation" && b.category !== "Innovation") return -1;
          if (a.category !== "Innovation" && b.category === "Innovation") return 1;
          return a.rank - b.rank;
        case "audience":
          // For now, sort by team size then rank (can be customized with audience scores)
          return b.members.length - a.members.length || a.rank - b.rank;
        default:
          return 0;
      }
    });

    return sorted;
  }, [allProjects, competitions, selectedYear, selectedCategory, winnersOnly, sortBy]);

  // Handle search project selection
  const handleSelectProject = (project: Project) => {
    // Scroll to the project card in the grid
    const element = document.getElementById(`project-${project.id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      // Briefly highlight the card
      element.classList.add("ring-4", "ring-brand-red", "ring-offset-4");
      setTimeout(() => {
        element.classList.remove("ring-4", "ring-brand-red", "ring-offset-4");
      }, 2000);
    }
  };

  return (
    <section id="winners-grid" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 scroll-mt-20 overflow-hidden">
      {/* Unified grid pattern - consistent 80px */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, #000 1px, transparent 1px),
          linear-gradient(to bottom, #000 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        backgroundPosition: '0 0',
      }} />

      <Container size="xl" className="relative z-10">
        <div className="mb-8 sm:mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-brand-red to-red-600 border-3 border-brutal-border text-white font-bold uppercase text-[10px] sm:text-xs shadow-brutal-sm mb-3 sm:mb-4">
            Complete Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-brutal-text mb-3 sm:mb-4">
            All Winners
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
            Explore {filteredProjects.length} innovative projects from across all competitions
          </p>
        </div>

        {/* Search Bar */}
        {/* <div className="mb-6">
          <SearchBar
            projects={allProjects}
            onSelectProject={handleSelectProject}
            className="max-w-2xl"
          />
        </div> */}

        {/* Filter Bar */}
        {/* <FilterBar
          years={years}
          categories={categories}
          selectedYear={selectedYear}
          selectedCategory={selectedCategory}
          winnersOnly={winnersOnly}
          sortBy={sortBy}
          viewMode={viewMode}
          onYearChange={setSelectedYear}
          onCategoryChange={setSelectedCategory}
          onWinnersOnlyChange={setWinnersOnly}
          onSortChange={handleSortChange}
          onViewModeChange={handleViewModeChange}
        /> */}

        {/* Results Count */}
        {/* <div className="mb-6">
          <p className="text-sm font-bold text-gray-600">
            Showing <span className="text-brand-red">{filteredProjects.length}</span> {filteredProjects.length === 1 ? "project" : "projects"}
          </p>
        </div> */}

        {/* Grid - Masonry-style with varying heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            // Vary card heights for masonry effect
            const isLarge = index % 5 === 0;
            const competition = competitions.find(
              (c) => c.id === project.competitionId
            );

            const isSelected = selectedProjects.some((p) => p.id === project.id);

            return (
              <div key={project.id} className="block group relative">
                {/* Comparison Checkbox - Top Right */}
                <div className="absolute top-3 right-3 z-20">
                  <label
                    className={`flex items-center gap-2 cursor-pointer border-2 border-brutal-border shadow-brutal-sm px-2 py-1 hover:shadow-brutal transition-all ${
                      isSelected 
                        ? "bg-brand-red text-white" 
                        : "bg-white text-brutal-text"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleToggleCompare(project)}
                      disabled={!isSelected && selectedProjects.length >= 3}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <span className="text-xs font-bold uppercase whitespace-nowrap">
                      Compare
                    </span>
                  </label>
                </div>

                <Link href={`/project/${project.id}`}>
                  <div
                    id={`project-${project.id}`}
                    className={`relative bg-white border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all overflow-hidden cursor-pointer h-full flex flex-col ${
                      isLarge ? "md:row-span-2" : ""
                    } ${isSelected ? "ring-4 ring-brand-red ring-offset-2" : ""}`}
                  >
                    {/* Rank Badge - Top Left */}
                    {project.rank <= 3 && (
                      <div className="absolute top-3 left-3 z-10">
                        <RankBadge rank={project.rank} size="medium" />
                      </div>
                    )}

                  {/* Image/Thumbnail Placeholder */}
                  <div
                    className={`relative border-b-3 border-brutal-border bg-gradient-to-br ${
                      project.rank === 1
                        ? "from-yellow-200 to-yellow-400"
                        : project.rank === 2
                        ? "from-gray-200 to-gray-400"
                        : project.rank === 3
                        ? "from-orange-200 to-orange-400"
                        : "from-red-200 to-orange-200"
                    } flex items-center justify-center h-48`}
                  >
                    {/* Hover: Show Team Photo Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity">
                      <div className="text-6xl font-black text-white opacity-30">
                        {project.name.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-brand-red opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                      <div className="text-white text-center px-4">
                        <div className="text-4xl font-black mb-2">
                          {project.teamName.charAt(0)}
                        </div>
                        <div className="text-sm font-bold uppercase">
                          {project.teamName}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Category Badge */}
                    <Badge
                      variant={
                        project.rank === 1
                          ? "primary"
                          : project.rank === 2
                          ? "secondary"
                          : project.rank === 3
                          ? "warning"
                          : "secondary"
                      }
                      className="mb-3 text-xs"
                    >
                      {project.category}
                    </Badge>

                    {/* Project Name */}
                    <h3 className="text-xl font-black text-brutal-text mb-2 line-clamp-2">
                      {project.name}
                    </h3>

                    {/* Tagline */}
                    <p
                      className={`text-sm text-gray-600 mb-3 ${
                        isLarge ? "line-clamp-3" : "line-clamp-2"
                      }`}
                    >
                      {project.tagline}
                    </p>

                    {/* Team Name */}
                    <p className="text-xs font-bold text-brand-red mb-3">
                      {project.teamName}
                    </p>

                    {/* Tech Stack - Horizontal scroll */}
                    <div className="mb-4 overflow-x-auto scrollbar-hide">
                      <div className="flex gap-2 min-w-max pb-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 border border-brutal-border text-gray-800 text-xs font-bold whitespace-nowrap"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2 py-1 text-xs font-bold text-gray-500">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex items-center gap-3 text-xs text-gray-600 mb-4">
                      <span className="font-bold">{competition?.year}</span>
                      <span>•</span>
                      <span>
                        {project.members.length}{" "}
                        {project.members.length === 1 ? "member" : "members"}
                      </span>
                    </div>

                    {/* View Details Button - Only shows on hover */}
                    <div className="mt-auto">
                      <Button
                        variant="primary"
                        className="w-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-black text-brutal-text mb-2">
              No Projects Found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters to see more results
            </p>
            <button
              onClick={() => {
                setSelectedYear("all");
                setSelectedCategory("all");
                setWinnersOnly(false);
              }}
              className="px-6 py-3 bg-brand-red text-white font-bold uppercase text-sm border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </Container>

      {/* Comparison Bar */}
      <ComparisonBar
        selectedProjects={selectedProjects}
        onRemove={handleRemoveFromCompare}
        onCompare={handleShowComparison}
        onClear={handleClearComparison}
      />

      {/* Comparison Modal */}
      {showComparison && (
        <ComparisonModal
          projects={selectedProjects}
          onClose={handleCloseComparison}
        />
      )}
    </section>
  );
}
