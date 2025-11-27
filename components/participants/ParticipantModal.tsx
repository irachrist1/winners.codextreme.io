"use client";

import { useEffect } from "react";
import { X, ArrowLeft, Github, Linkedin, Trophy, Award, Calendar } from "lucide-react";
import { Participant, Project } from "@/lib/types";
import { Badge } from "@/components/ui/Badge";
import { RankBadge } from "@/components/shared/RankBadge";
import Link from "next/link";

interface ParticipantModalProps {
  participant: Participant;
  projects: Project[];
  onClose: () => void;
}

export function ParticipantModal({ participant, projects, onClose }: ParticipantModalProps) {
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Calculate stats
  const yearsParticipated = Array.from(new Set(projects.map((p) => p.competitionYear))).sort((a, b) => b - a);
  const winningProjects = projects.filter((p) => p.rank <= 3);
  const totalAwards = winningProjects.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white border-0 sm:border-3 border-brutal-border shadow-brutal-lg">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b-2 sm:border-b-3 border-brutal-border bg-white">
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

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Profile Header */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Profile Photo */}
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-red-200 to-orange-200 border-2 sm:border-3 border-brutal-border flex items-center justify-center">
                <span className="text-4xl sm:text-6xl font-black text-white">
                  {participant.name.charAt(0)}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-brutal-text mb-1 sm:mb-2">
                {participant.name}
              </h1>
              <p className="text-base sm:text-lg font-bold text-brand-red mb-2 sm:mb-3">
                {participant.university}
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">{participant.bio}</p>

              {/* Social Links */}
              <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
                {participant.linkedin && (
                  <a
                    href={participant.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white border-2 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all font-bold uppercase text-xs sm:text-sm"
                  >
                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                    LinkedIn
                  </a>
                )}
                {participant.github && (
                  <a
                    href={participant.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-brutal-text text-white border-2 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all font-bold uppercase text-xs sm:text-sm"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-red-50 border-2 border-brutal-border p-3 sm:p-4">
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red" />
                <span className="text-[10px] sm:text-sm font-bold text-gray-600 uppercase">Projects</span>
              </div>
              <div className="text-xl sm:text-3xl font-black text-brand-red">{projects.length}</div>
            </div>

            <div className="bg-yellow-50 border-2 border-brutal-border p-3 sm:p-4">
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-brand-yellow" />
                <span className="text-[10px] sm:text-sm font-bold text-gray-600 uppercase">Awards</span>
              </div>
              <div className="text-xl sm:text-3xl font-black text-brutal-text">{totalAwards}</div>
            </div>

            <div className="bg-blue-50 border-2 border-brutal-border p-3 sm:p-4">
              <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue" />
                <span className="text-[10px] sm:text-sm font-bold text-gray-600 uppercase">Years</span>
              </div>
              <div className="text-xl sm:text-3xl font-black text-brand-blue">{yearsParticipated.length}</div>
            </div>
          </div>

          {/* Achievements */}
          {participant.achievements && participant.achievements.length > 0 && (
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-black uppercase text-brutal-text mb-3 sm:mb-4">
                Skills & Expertise
              </h2>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {participant.achievements.map((achievement, idx) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-1 sm:py-2 bg-red-50 border-2 border-brand-red text-xs sm:text-sm font-bold text-brand-red"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          <div>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-brutal-text mb-3 sm:mb-4">
              Projects ({projects.length})
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/project/${project.id}`}
                  className="block group"
                >
                  <div className="bg-white border-2 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all p-3 sm:p-4">
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      {/* Project Image Placeholder */}
                      <div className="flex-shrink-0 w-full sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-br from-red-200 to-orange-200 border-2 border-brutal-border flex items-center justify-center">
                        <span className="text-3xl sm:text-4xl font-black text-white opacity-40">
                          {project.name.charAt(0)}
                        </span>
                      </div>

                      {/* Project Info */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                          {project.rank <= 3 && (
                            <RankBadge rank={project.rank} size="small" />
                          )}
                          <Badge variant="primary">{project.category}</Badge>
                          <span className="text-[10px] sm:text-xs font-bold text-gray-600">
                            {project.competitionYear}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-brutal-text group-hover:text-brand-red transition-colors mb-0.5 sm:mb-1">
                          {project.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{project.teamName}</p>
                        <p className="text-xs sm:text-sm text-gray-700 line-clamp-2">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
