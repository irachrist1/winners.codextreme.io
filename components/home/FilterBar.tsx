"use client";

import { Filter, Grid3x3, List, ArrowUpDown } from "lucide-react";

interface FilterBarProps {
  years: number[];
  categories: string[];
  selectedYear: string;
  selectedCategory: string;
  winnersOnly: boolean;
  sortBy?: string;
  viewMode?: "grid" | "list";
  onYearChange: (year: string) => void;
  onCategoryChange: (category: string) => void;
  onWinnersOnlyChange: (winnersOnly: boolean) => void;
  onSortChange?: (sort: string) => void;
  onViewModeChange?: (mode: "grid" | "list") => void;
}

export function FilterBar({
  years,
  categories,
  selectedYear,
  selectedCategory,
  winnersOnly,
  sortBy = "recent",
  viewMode = "grid",
  onYearChange,
  onCategoryChange,
  onWinnersOnlyChange,
  onSortChange,
  onViewModeChange,
}: FilterBarProps) {
  return (
    <div className="sticky top-0 z-20 bg-white border-b-3 border-brutal-border shadow-brutal py-6 mb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Row: Filters */}
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
          {/* Left Side: Filter Icon & Year */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Filter Icon & Title */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-brand-red" />
              <span className="font-bold uppercase text-sm text-brutal-text">
                Filters:
              </span>
            </div>

            {/* Year Dropdown */}
            <select
              value={selectedYear}
              onChange={(e) => onYearChange(e.target.value)}
              className="px-4 py-2 border-2 border-brutal-border shadow-brutal-sm font-bold uppercase text-sm text-brutal-text bg-white cursor-pointer hover:shadow-brutal transition-all focus:outline-none focus:ring-2 focus:ring-brand-red"
            >
              <option value="all">All Years</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Center: Category Filter Chips */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onCategoryChange("all")}
              className={`px-4 py-2 border-2 border-brutal-border font-bold uppercase text-xs transition-all whitespace-nowrap ${
                selectedCategory === "all"
                  ? "bg-brand-red text-white shadow-brutal-sm"
                  : "bg-white text-brutal-text hover:shadow-brutal-sm"
              }`}
            >
              All Categories
            </button>
            {categories.slice(0, 3).map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 border-2 border-brutal-border font-bold uppercase text-xs transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-brand-red text-white shadow-brutal-sm"
                    : "bg-white text-brutal-text hover:shadow-brutal-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Side: Winners Only Toggle */}
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={winnersOnly}
                  onChange={(e) => onWinnersOnlyChange(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-12 h-6 border-2 border-brutal-border transition-all ${
                    winnersOnly ? "bg-brand-red" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white border-2 border-brutal-border transition-transform ${
                      winnersOnly ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
              <span className="font-bold uppercase text-xs text-brutal-text whitespace-nowrap">
                Winners Only
              </span>
            </label>
          </div>
        </div>

        {/* Bottom Row: Sort & View Controls */}
        {(onSortChange || onViewModeChange) && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t-2 border-gray-200">
            {/* Sort Controls */}
            {onSortChange && (
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-gray-600" />
                <span className="font-bold uppercase text-xs text-gray-600 mr-2">
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="px-3 py-2 border-2 border-brutal-border shadow-brutal-sm font-bold uppercase text-xs text-brutal-text bg-white cursor-pointer hover:shadow-brutal transition-all focus:outline-none focus:ring-2 focus:ring-brand-red"
                >
                  <option value="recent">Most Recent</option>
                  <option value="rank">Highest Ranked</option>
                  <option value="innovative">Most Innovative</option>
                  <option value="audience">Audience Favorite</option>
                </select>
              </div>
            )}

            {/* View Mode Toggle */}
            {onViewModeChange && (
              <div className="flex items-center gap-2">
                <span className="font-bold uppercase text-xs text-gray-600 mr-2">
                  View:
                </span>
                <div className="flex gap-1 border-2 border-brutal-border shadow-brutal-sm">
                  <button
                    onClick={() => onViewModeChange("grid")}
                    className={`p-2 transition-all ${
                      viewMode === "grid"
                        ? "bg-brand-purple text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onViewModeChange("list")}
                    className={`p-2 transition-all ${
                      viewMode === "list"
                        ? "bg-brand-red text-white"
                        : "bg-white text-gray-600 hover:bg-gray-100"
                    }`}
                    aria-label="List view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
