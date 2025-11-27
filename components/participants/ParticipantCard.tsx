"use client";

import { Trophy, Award, Github, Linkedin } from "lucide-react";
import { Participant } from "@/lib/types";

interface ParticipantCardProps {
  participant: Participant;
  projectsCount: number;
  awardsCount: number;
  yearsParticipated: number[];
  onClick: () => void;
}

export function ParticipantCard({
  participant,
  projectsCount,
  awardsCount,
  yearsParticipated,
  onClick,
}: ParticipantCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Card - CSS-only hover for performance */}
      <div className="relative bg-white border-2 border-gray-200 overflow-hidden transition-all duration-200 ease-out group-hover:-translate-y-2 group-hover:shadow-lg group-hover:border-gray-300">
        {/* Header with Photo */}
        <div className="relative h-44 bg-gradient-to-br from-red-100 via-red-50 to-orange-100 border-b border-gray-200 overflow-hidden">
          {/* Award Badge - Top Right */}
          {awardsCount > 0 && (
            <div className="absolute top-3 right-3 px-2 py-1 bg-brand-yellow border-2 border-brutal-border font-bold text-xs flex items-center gap-1 z-10">
              <Trophy className="w-3 h-3" />
              {awardsCount}
            </div>
          )}

          {/* Profile Photo Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white border-2 border-gray-200 flex items-center justify-center group-hover:scale-105 group-hover:rotate-3 transition-transform duration-200">
              <span className="text-4xl font-black text-brand-red">
                {participant.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Name */}
          <h3 className="font-bold text-base text-gray-900 group-hover:text-brand-red transition-colors duration-200 mb-1">
            {participant.name}
          </h3>

          {/* University */}
          <p className="text-sm text-gray-500 mb-4 line-clamp-1">
            {participant.university}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
            <div className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>{projectsCount} {projectsCount === 1 ? 'project' : 'projects'}</span>
            </div>
            <span>•</span>
            <span>
              {yearsParticipated.length === 1
                ? yearsParticipated[0]
                : `${Math.min(...yearsParticipated)}-${Math.max(...yearsParticipated)}`}
            </span>
          </div>

          {/* Social Links */}
          {(participant.linkedin || participant.github) && (
            <div className="flex gap-2 pt-3 border-t border-gray-100">
              {participant.linkedin && (
                <a
                  href={participant.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-gray-50 border border-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-150"
                  aria-label={`${participant.name} LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {participant.github && (
                <a
                  href={participant.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 bg-gray-50 border border-gray-200 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors duration-150"
                  aria-label={`${participant.name} GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
