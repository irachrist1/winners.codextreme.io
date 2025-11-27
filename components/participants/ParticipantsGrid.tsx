"use client";

import { useState, useMemo } from "react";
import { Container } from "@/components/layout/Container";
import { ParticipantCard } from "./ParticipantCard";
import { ParticipantModal } from "./ParticipantModal";
import { getParticipants, getProjects, getCompetitions } from "@/lib/data";
import { Participant } from "@/lib/types";
import { Search } from "lucide-react";

export function ParticipantsGrid() {
  const participants = getParticipants();
  const allProjects = getProjects();
  const competitions = getCompetitions();

  const [selectedParticipant, setSelectedParticipant] = useState<Participant | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedUniversity, setSelectedUniversity] = useState("all");
  const [winnersOnly, setWinnersOnly] = useState(false);

  // Get unique years and universities
  const years = Array.from(new Set(competitions.map((c) => c.year))).sort((a, b) => b - a);
  const universities = Array.from(new Set(participants.map((p) => p.university))).sort();

  // Get participant data with stats
  const participantsWithStats = useMemo(() => {
    return participants.map((participant) => {
      const participantProjects = allProjects.filter((project) =>
        project.members.some((member) => member.name === participant.name)
      );

      const yearsParticipated = Array.from(
        new Set(participantProjects.map((p) => p.competitionYear))
      ).sort((a, b) => b - a);

      const awardsCount = participantProjects.filter((p) => p.rank <= 3).length;

      return {
        participant,
        projects: participantProjects,
        projectsCount: participantProjects.length,
        awardsCount,
        yearsParticipated,
      };
    });
  }, [participants, allProjects]);

  // Filtered participants
  const filteredParticipants = useMemo(() => {
    return participantsWithStats.filter(({ participant, projects, awardsCount, yearsParticipated }) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = participant.name.toLowerCase().includes(query);
        const matchesUniversity = participant.university.toLowerCase().includes(query);
        const matchesBio = participant.bio.toLowerCase().includes(query);
        if (!matchesName && !matchesUniversity && !matchesBio) {
          return false;
        }
      }

      // Year filter
      if (selectedYear !== "all" && !yearsParticipated.includes(parseInt(selectedYear))) {
        return false;
      }

      // University filter
      if (selectedUniversity !== "all" && participant.university !== selectedUniversity) {
        return false;
      }

      // Winners only filter
      if (winnersOnly && awardsCount === 0) {
        return false;
      }

      return true;
    });
  }, [participantsWithStats, searchQuery, selectedYear, selectedUniversity, winnersOnly]);

  const handleSelectParticipant = (participant: Participant) => {
    setSelectedParticipant(participant);
  };

  const handleCloseModal = () => {
    setSelectedParticipant(null);
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
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
        {/* Section Header */}
        <div className="mb-6 sm:mb-10 pt-6 sm:pt-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-brutal-text mb-2">
            Participants
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl">
            Meet the {participants.length} innovators who have shaped codeXtreme
          </p>
        </div>

        {/* Search Bar - Neobrutalist */}
        <div className="mb-6 sm:mb-10">
          <div className="relative max-w-full sm:max-w-lg">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, university..."
              className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border-2 sm:border-3 border-brutal-border shadow-brutal font-medium text-sm sm:text-base text-brutal-text bg-white focus:outline-none focus:shadow-brutal-lg transition-shadow"
            />
          </div>
        </div>

        {/* Filters - Removed for cleaner design
        <div className="sticky top-0 z-20 bg-white border-b-3 border-brutal-border shadow-brutal py-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            Left: Filter Icon & Year
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-bold uppercase text-sm text-gray-600">Filters:</span>
              </div>

              Year Filter
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 border-2 border-brutal-border shadow-brutal-sm font-bold uppercase text-xs text-brutal-text bg-white cursor-pointer hover:shadow-brutal transition-all focus:outline-none focus:ring-2 focus:ring-brand-red"
              >
                <option value="all">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>

              University Filter
              <select
                value={selectedUniversity}
                onChange={(e) => setSelectedUniversity(e.target.value)}
                className="px-3 py-2 border-2 border-brutal-border shadow-brutal-sm font-bold uppercase text-xs text-brutal-text bg-white cursor-pointer hover:shadow-brutal transition-all focus:outline-none focus:ring-2 focus:ring-brand-purple"
              >
                <option value="all">All Universities</option>
                {universities.map((university) => (
                  <option key={university} value={university}>
                    {university}
                  </option>
                ))}
              </select>
            </div>

            Right: Winners Only Toggle
            <div className="flex items-center gap-2">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={winnersOnly}
                    onChange={(e) => setWinnersOnly(e.target.checked)}
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
        </div> */}

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-600">
            {filteredParticipants.length} {filteredParticipants.length === 1 ? "participant" : "participants"}
          </p>
        </div>

        {/* Grid - 4 cards max with proper spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredParticipants.map(({ participant, projectsCount, awardsCount, yearsParticipated }) => (
            <ParticipantCard
              key={participant.id}
              participant={participant}
              projectsCount={projectsCount}
              awardsCount={awardsCount}
              yearsParticipated={yearsParticipated}
              onClick={() => handleSelectParticipant(participant)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredParticipants.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-black text-brutal-text mb-2">
              No Participants Found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedYear("all");
                setSelectedUniversity("all");
                setWinnersOnly(false);
              }}
              className="px-6 py-3 bg-brand-red text-white font-bold uppercase text-sm border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </Container>

      {/* Participant Modal */}
      {selectedParticipant && (
        <ParticipantModal
          participant={selectedParticipant}
          projects={allProjects.filter((project) =>
            project.members.some((member) => member.name === selectedParticipant.name)
          )}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
