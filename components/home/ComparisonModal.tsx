"use client";

import { useEffect } from "react";
import { X, Trophy, Users, Code2, Calendar } from "lucide-react";
import { Project } from "@/lib/types";
import { RankBadge } from "@/components/shared/RankBadge";
import { Badge } from "@/components/ui/Badge";

interface ComparisonModalProps {
  projects: Project[];
  onClose: () => void;
}

export function ComparisonModal({ projects, onClose }: ComparisonModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Modal */}
      <div className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto bg-white border-3 border-brutal-border shadow-brutal-lg">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b-3 border-brutal-border px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-brutal-text">
              Project Comparison
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 transition-colors"
              aria-label="Close comparison"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="sticky left-0 bg-gray-50 border-2 border-brutal-border p-4 text-left font-bold uppercase text-sm text-gray-600 w-48">
                    Attribute
                  </th>
                  {projects.map((project) => (
                    <th
                      key={project.id}
                      className="border-2 border-brutal-border p-4 min-w-[280px]"
                    >
                      <div className="flex flex-col items-center gap-3">
                        {/* Rank Badge */}
                        {project.rank <= 3 && (
                          <RankBadge rank={project.rank} size="medium" />
                        )}
                        {/* Project Name */}
                        <h3 className="text-lg font-black text-brutal-text text-center">
                          {project.name}
                        </h3>
                        {/* Team Name */}
                        <p className="text-xs font-bold text-brand-red">
                          {project.teamName}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Ranking */}
                <tr>
                  <td className="sticky left-0 bg-gray-50 border-2 border-brutal-border p-4 font-bold uppercase text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4" />
                      Ranking
                    </div>
                  </td>
                  {projects.map((project) => (
                    <td
                      key={project.id}
                      className="border-2 border-brutal-border p-4 text-center"
                    >
                      <span className="text-2xl font-black text-brand-red">
                        #{project.rank}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Category */}
                <tr className="bg-gray-50/50">
                  <td className="sticky left-0 bg-gray-50 border-2 border-brutal-border p-4 font-bold uppercase text-xs text-gray-600">
                    Category
                  </td>
                  {projects.map((project) => (
                    <td
                      key={project.id}
                      className="border-2 border-brutal-border p-4 text-center"
                    >
                      <Badge variant="primary" className="text-xs">
                        {project.category}
                      </Badge>
                    </td>
                  ))}
                </tr>

                {/* Year */}
                <tr>
                  <td className="sticky left-0 bg-gray-50 border-2 border-brutal-border p-4 font-bold uppercase text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Year
                    </div>
                  </td>
                  {projects.map((project) => (
                    <td
                      key={project.id}
                      className="border-2 border-brutal-border p-4 text-center"
                    >
                      <span className="font-bold text-brutal-text">
                        {project.competitionYear}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Team Size */}
                <tr className="bg-gray-50/50">
                  <td className="sticky left-0 bg-gray-50 border-2 border-brutal-border p-4 font-bold uppercase text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Team Size
                    </div>
                  </td>
                  {projects.map((project) => (
                    <td
                      key={project.id}
                      className="border-2 border-brutal-border p-4 text-center"
                    >
                      <span className="font-bold text-brutal-text">
                        {project.members.length}{" "}
                        {project.members.length === 1 ? "member" : "members"}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* Description */}
                <tr>
                  <td className="sticky left-0 bg-gray-50 border-2 border-brutal-border p-4 font-bold uppercase text-xs text-gray-600">
                    Description
                  </td>
                  {projects.map((project) => (
                    <td
                      key={project.id}
                      className="border-2 border-brutal-border p-4"
                    >
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {project.tagline}
                      </p>
                    </td>
                  ))}
                </tr>

                {/* Tech Stack */}
                <tr className="bg-gray-50/50">
                  <td className="sticky left-0 bg-gray-50 border-2 border-brutal-border p-4 font-bold uppercase text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      Tech Stack
                    </div>
                  </td>
                  {projects.map((project) => (
                    <td
                      key={project.id}
                      className="border-2 border-brutal-border p-4"
                    >
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 border border-brutal-border text-xs font-bold text-gray-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Team Members */}
                <tr>
                  <td className="sticky left-0 bg-gray-50 border-2 border-brutal-border p-4 font-bold uppercase text-xs text-gray-600">
                    Team Members
                  </td>
                  {projects.map((project) => (
                    <td
                      key={project.id}
                      className="border-2 border-brutal-border p-4"
                    >
                      <div className="space-y-1">
                        {project.members.map((member, idx) => (
                          <div
                            key={idx}
                            className="text-sm text-gray-700 text-center"
                          >
                            {member.name}
                          </div>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Close Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={onClose}
              className="px-8 py-3 bg-brand-red text-white font-bold uppercase text-sm border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
            >
              Close Comparison
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
