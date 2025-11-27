"use client";

import { useEffect } from "react";
import {
  X,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Video,
  FileText,
  Share2,
  Trophy,
  Linkedin,
} from "lucide-react";
import { Project } from "@/lib/types";
import { ImageCarousel } from "@/components/shared/ImageCarousel";
import { RankBadge } from "@/components/shared/RankBadge";
import { Badge } from "@/components/ui/Badge";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  competitionYear: number;
}

export function ProjectModal({
  project,
  onClose,
  onNext,
  onPrevious,
  competitionYear,
}: ProjectModalProps) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && onNext) {
        onNext();
      } else if (e.key === "ArrowLeft" && onPrevious) {
        onPrevious();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Share functionality
  const handleShare = async () => {
    const shareData = {
      title: project.name,
      text: project.tagline,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Previous Project Arrow (Left) */}
      {onPrevious && (
        <button
          onClick={onPrevious}
          className="hidden lg:block absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-50%] active:shadow-none active:translate-x-0 transition-all z-10"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-8 h-8 text-brutal-text" />
        </button>
      )}

      {/* Modal Container */}
      <div className="relative w-full h-full lg:h-[90vh] lg:max-w-7xl lg:m-4 bg-white border-0 lg:border-3 border-brutal-border shadow-brutal-lg overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex-shrink-0 flex items-center justify-between px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b-2 sm:border-b-3 border-brutal-border bg-white z-10">
          <button
            onClick={onClose}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-white border-2 border-brutal-border shadow-brutal-sm hover:shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all font-bold uppercase text-xs sm:text-sm"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col lg:flex-row">
            {/* LEFT SIDE - 40% */}
            <div className="w-full lg:w-2/5 p-4 sm:p-6 border-b-2 sm:border-b-3 lg:border-b-0 lg:border-r-3 border-brutal-border bg-gray-50">
              {/* Image Carousel */}
              <ImageCarousel images={project.images} alt={project.name} />

              {/* Team Members */}
              <div className="mt-4 sm:mt-6">
                <h3 className="text-lg sm:text-xl font-black uppercase text-brutal-text mb-3 sm:mb-4 flex items-center gap-2">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                  Team Members
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {project.members.map((member, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white border-2 border-brutal-border"
                    >
                      {/* Photo Placeholder */}
                      <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-gradient-to-br from-red-200 to-orange-200 border-2 border-brutal-border flex items-center justify-center">
                        <span className="text-base sm:text-lg font-black text-white">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-xs sm:text-sm text-brutal-text truncate">
                          {member.name}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-600 truncate">
                          {member.role}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-500 truncate">
                          {member.university}
                        </div>
                      </div>
                      {/* Social Links */}
                      <div className="flex gap-0.5 sm:gap-1 flex-shrink-0">
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 hover:bg-gray-100 transition-colors"
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                          </a>
                        )}
                        {member.github && (
                          <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 hover:bg-gray-100 transition-colors"
                            aria-label={`${member.name} GitHub`}
                          >
                            <Github className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - 60% */}
            <div className="w-full lg:w-3/5 p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Title & Badges */}
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  {project.rank <= 3 && (
                    <RankBadge rank={project.rank} size="large" />
                  )}
                  <Badge variant="primary">{project.category}</Badge>
                  <span className="text-xs sm:text-sm font-bold text-gray-600">
                    {competitionYear}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-brutal-text mb-1 sm:mb-2">
                  {project.name}
                </h1>
                <p className="text-base sm:text-lg text-brand-red font-bold mb-1 sm:mb-2">
                  {project.teamName}
                </p>
                <p className="text-base sm:text-lg text-gray-700">{project.tagline}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xs sm:text-sm font-black uppercase text-gray-600 mb-2">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 border-2 border-brutal-border text-xs sm:text-sm font-bold text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-brutal-text text-white font-bold uppercase text-xs sm:text-sm border-2 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-red text-white font-bold uppercase text-xs sm:text-sm border-2 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    Demo
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-brutal-text font-bold uppercase text-xs sm:text-sm border-2 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
                  >
                    <Video className="w-3 h-3 sm:w-4 sm:h-4" />
                    Video
                  </a>
                )}
                {project.presentationUrl && (
                  <a
                    href={project.presentationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-brutal-text font-bold uppercase text-xs sm:text-sm border-2 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
                  >
                    <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                    Slides
                  </a>
                )}
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-brutal-text font-bold uppercase text-xs sm:text-sm border-2 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
                >
                  <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  Share
                </button>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-brutal-text mb-2 sm:mb-3">
                  About the Project
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </div>

              {/* Problem Statement */}
              <div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-brutal-text mb-2 sm:mb-3">
                  Problem Statement
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-brutal-text mb-2 sm:mb-3">
                  Our Solution
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Impact */}
              <div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-brutal-text mb-2 sm:mb-3">
                  Impact
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{project.impact}</p>
              </div>

              {/* Score Breakdown */}
              {project.scoreBreakdown && (
                <div className="bg-red-50 border-2 border-brutal-border p-3 sm:p-4">
                  <h3 className="text-lg sm:text-xl font-black uppercase text-brutal-text mb-2 sm:mb-3">
                    Score Breakdown
                  </h3>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-gray-600 mb-0.5 sm:mb-1">
                        Innovation
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-brand-red">
                        {project.scoreBreakdown.innovation}/100
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-gray-600 mb-0.5 sm:mb-1">
                        Technical
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-brand-blue">
                        {project.scoreBreakdown.technical}/100
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-gray-600 mb-0.5 sm:mb-1">
                        Impact
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-brand-green">
                        {project.scoreBreakdown.impact}/100
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-gray-600 mb-0.5 sm:mb-1">
                        Presentation
                      </div>
                      <div className="text-xl sm:text-2xl font-black text-brand-orange">
                        {project.scoreBreakdown.presentation}/100
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Judges Comments */}
              {project.judgesComments && (
                <div className="bg-yellow-50 border-2 border-brutal-border p-3 sm:p-4">
                  <h3 className="text-lg sm:text-xl font-black uppercase text-brutal-text mb-2 sm:mb-3">
                    Judges&apos; Feedback
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                    &quot;{project.judgesComments}&quot;
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Next Project Arrow (Right) */}
      {onNext && (
        <button
          onClick={onNext}
          className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[2px] hover:translate-y-[-50%] active:shadow-none active:translate-x-0 transition-all z-10"
          aria-label="Next project"
        >
          <ChevronRight className="w-8 h-8 text-brutal-text" />
        </button>
      )}
    </div>
  );
}
