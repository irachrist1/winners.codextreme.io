"use client";

import { useRouter, useParams } from "next/navigation";
import { getProjectById, getProjects, getCompetitionById } from "@/lib/data";
import { ProjectModal } from "@/components/project/ProjectModal";

export default function ProjectPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;

  const project = getProjectById(projectId);
  const allProjects = getProjects();

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black uppercase text-brutal-text mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-brand-red text-white font-bold uppercase text-sm border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const competition = getCompetitionById(project.competitionId);
  const competitionYear = competition?.year || new Date().getFullYear();

  // Get projects from same competition for navigation
  const competitionProjects = allProjects
    .filter((p) => p.competitionId === project.competitionId)
    .sort((a, b) => a.rank - b.rank);

  const currentIndex = competitionProjects.findIndex((p) => p.id === projectId);

  const handleNext = () => {
    if (currentIndex < competitionProjects.length - 1) {
      const nextProject = competitionProjects[currentIndex + 1];
      router.push(`/project/${nextProject.id}`);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevProject = competitionProjects[currentIndex - 1];
      router.push(`/project/${prevProject.id}`);
    }
  };

  const handleClose = () => {
    router.push("/");
  };

  return (
    <ProjectModal
      project={project}
      competitionYear={competitionYear}
      onClose={handleClose}
      onNext={currentIndex < competitionProjects.length - 1 ? handleNext : undefined}
      onPrevious={currentIndex > 0 ? handlePrevious : undefined}
    />
  );
}
