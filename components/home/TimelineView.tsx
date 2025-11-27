"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Trophy, Users, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { getCompetitions, getProjects } from "@/lib/data";

export function TimelineView() {
  const competitions = getCompetitions();
  const allProjects = getProjects();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
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
            Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-brutal-text mb-3 sm:mb-4">
            Competition Timeline
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
            A chronological journey through codeXtreme&apos;s history of innovation
          </p>
        </div>

        {/* Desktop: Alternating Timeline */}
        <div className="hidden md:block relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-brand-red transform -translate-x-1/2" />

          {competitions.map((competition, index) => {
            const isLeft = index % 2 === 0;
            const topProjects = allProjects
              .filter((p) => p.competitionId === competition.id && p.rank <= 3)
              .sort((a, b) => a.rank - b.rank);
            const allCompetitionProjects = allProjects.filter(
              (p) => p.competitionId === competition.id
            );
            const isExpanded = expandedId === competition.id;

            return (
              <div key={competition.id} className="relative mb-16">
                {/* Timeline Circle */}
                <div className="absolute left-1/2 top-8 w-6 h-6 rounded-full bg-brand-red border-4 border-white transform -translate-x-1/2 z-10 shadow-lg" />

                {/* Card - Alternating Sides */}
                <div
                  className={`relative ${
                    isLeft ? "pr-[calc(50%+3rem)]" : "pl-[calc(50%+3rem)]"
                  }`}
                >
                  <div
                    className={`bg-white border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all p-6 ${
                      isLeft ? "text-right" : "text-left"
                    }`}
                  >
                    {/* Year Badge */}
                    <div
                      className={`inline-block mb-3 px-4 py-1 bg-brand-red border-2 border-brutal-border text-white font-bold uppercase text-sm ${
                        isLeft ? "" : ""
                      }`}
                    >
                      {competition.year}
                    </div>

                    {/* Competition Name */}
                    <h3 className="text-2xl font-black text-brutal-text mb-2">
                      {competition.name}
                    </h3>

                    {/* Theme */}
                    <p className="text-base text-gray-700 mb-4 italic">
                      &quot;{competition.theme}&quot;
                    </p>

                    {/* Stats */}
                    <div
                      className={`flex gap-4 mb-4 text-sm text-gray-600 ${
                        isLeft ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{competition.participantCount} participants</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Lightbulb className="w-4 h-4" />
                        <span>{competition.projectsSubmitted} projects</span>
                      </div>
                    </div>

                    {/* Top 3 Projects Thumbnails */}
                    <div className="mb-4">
                      <div
                        className={`text-xs font-bold text-gray-600 uppercase mb-2 ${
                          isLeft ? "text-right" : "text-left"
                        }`}
                      >
                        <Trophy className="w-3 h-3 inline mr-1" />
                        Top Winners
                      </div>
                      <div
                        className={`flex gap-2 ${
                          isLeft ? "justify-end" : "justify-start"
                        }`}
                      >
                        {topProjects.map((project) => (
                          <div
                            key={project.id}
                            className="relative w-16 h-16 bg-gradient-to-br from-red-200 to-orange-200 border-2 border-brutal-border flex items-center justify-center group cursor-pointer"
                            title={project.name}
                          >
                            <span className="text-xl font-black text-white opacity-50">
                              {project.rank}
                            </span>
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                              <span className="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-all">
                                {project.name}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Expand Button */}
                    <button
                      onClick={() => toggleExpand(competition.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-brutal-text border-2 border-brutal-border shadow-brutal-sm hover:shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all font-bold uppercase text-xs"
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Hide Full List
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          View All {allCompetitionProjects.length} Projects
                        </>
                      )}
                    </button>

                    {/* Expanded Project List */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t-2 border-gray-200">
                        <div className="space-y-2">
                          {allCompetitionProjects.map((project) => (
                            <div
                              key={project.id}
                              className={`flex items-center gap-3 p-2 hover:bg-gray-50 transition-all ${
                                isLeft ? "flex-row-reverse text-right" : ""
                              }`}
                            >
                              <span className="text-sm font-black text-brand-red min-w-[2rem]">
                                #{project.rank}
                              </span>
                              <div className="flex-1">
                                <div className="text-sm font-bold text-brutal-text">
                                  {project.name}
                                </div>
                                <div className="text-xs text-gray-600">
                                  {project.teamName}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Single Column with Left Timeline */}
        <div className="md:hidden relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-brand-red" />

          {competitions.map((competition) => {
            const topProjects = allProjects
              .filter((p) => p.competitionId === competition.id && p.rank <= 3)
              .sort((a, b) => a.rank - b.rank);
            const allCompetitionProjects = allProjects.filter(
              (p) => p.competitionId === competition.id
            );
            const isExpanded = expandedId === competition.id;

            return (
              <div key={competition.id} className="relative mb-12 pl-12">
                {/* Timeline Circle */}
                <div className="absolute left-2.5 top-8 w-3 h-3 rounded-full bg-brand-red border-2 border-white z-10 shadow-lg" />

                {/* Card */}
                <div className="bg-white border-3 border-brutal-border shadow-brutal p-4">
                  {/* Year Badge */}
                  <div className="inline-block mb-3 px-3 py-1 bg-brand-red border-2 border-brutal-border text-white font-bold uppercase text-xs">
                    {competition.year}
                  </div>

                  {/* Competition Name */}
                  <h3 className="text-xl font-black text-brutal-text mb-2">
                    {competition.name}
                  </h3>

                  {/* Theme */}
                  <p className="text-sm text-gray-700 mb-3 italic">
                    &quot;{competition.theme}&quot;
                  </p>

                  {/* Stats */}
                  <div className="flex flex-col gap-2 mb-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{competition.participantCount} participants</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Lightbulb className="w-3 h-3" />
                      <span>{competition.projectsSubmitted} projects</span>
                    </div>
                  </div>

                  {/* Top 3 Projects */}
                  <div className="mb-4">
                    <div className="text-xs font-bold text-gray-600 uppercase mb-2">
                      <Trophy className="w-3 h-3 inline mr-1" />
                      Top Winners
                    </div>
                    <div className="flex gap-2">
                      {topProjects.map((project) => (
                        <div
                          key={project.id}
                          className="relative w-12 h-12 bg-gradient-to-br from-red-200 to-orange-200 border-2 border-brutal-border flex items-center justify-center"
                          title={project.name}
                        >
                          <span className="text-base font-black text-white opacity-50">
                            {project.rank}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => toggleExpand(competition.id)}
                    className="inline-flex items-center gap-2 px-3 py-2 bg-white text-brutal-text border-2 border-brutal-border shadow-brutal-sm hover:shadow-brutal transition-all font-bold uppercase text-xs w-full justify-center"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        Hide
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        View All {allCompetitionProjects.length}
                      </>
                    )}
                  </button>

                  {/* Expanded List */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t-2 border-gray-200">
                      <div className="space-y-2">
                        {allCompetitionProjects.map((project) => (
                          <div
                            key={project.id}
                            className="flex items-center gap-2 p-2 hover:bg-gray-50"
                          >
                            <span className="text-xs font-black text-brand-red min-w-[1.5rem]">
                              #{project.rank}
                            </span>
                            <div className="flex-1">
                              <div className="text-xs font-bold text-brutal-text">
                                {project.name}
                              </div>
                              <div className="text-xs text-gray-600">
                                {project.teamName}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
