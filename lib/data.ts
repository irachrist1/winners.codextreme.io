import competitionsData from "@/data/competitions.json";
import projectsData from "@/data/projects.json";
import participantsData from "@/data/participants.json";

export interface Competition {
  id: string;
  name: string;
  year: number;
  status: "past" | "ongoing" | "upcoming";
  theme: string;
  startDate: string;
  endDate: string;
  location: string;
  participantCount: number;
  projectsSubmitted: number;
  prizePool: string;
  thumbnailUrl: string;
  description: string;
  highlights: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  university: string;
  photoUrl: string;
  linkedin?: string;
  github?: string;
}

export interface Project {
  id: string;
  competitionId: string;
  competitionYear: number; // Derived from competition
  name: string;
  tagline: string;
  description: string;
  rank: number;
  prize: string;
  category: string;
  teamName: string;
  members: TeamMember[];
  techStack: string[];
  problemStatement: string;
  solution: string;
  impact: string;
  thumbnailUrl: string;
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  presentationUrl?: string;
  judgesComments?: string;
  scoreBreakdown?: {
    innovation: number;
    technical: number;
    impact: number;
    presentation: number;
  };
}

export interface Participant {
  id: string;
  name: string;
  university: string;
  photoUrl: string;
  bio: string;
  projectIds: string[];
  achievements: string[];
  linkedin?: string;
  github?: string;
}

// Get all competitions
export function getCompetitions(): Competition[] {
  return competitionsData.competitions as Competition[];
}

// Get competition by ID
export function getCompetitionById(id: string): Competition | undefined {
  return (competitionsData.competitions as Competition[]).find((comp) => comp.id === id);
}

// Get all projects
export function getProjects(): Project[] {
  return projectsData.projects.map((project: any) => {
    const competition = getCompetitionById(project.competitionId);
    return {
      ...project,
      competitionYear: competition?.year || new Date().getFullYear(),
    };
  });
}

// Get project by ID
export function getProjectById(id: string): Project | undefined {
  const project = projectsData.projects.find((proj: any) => proj.id === id);
  if (!project) return undefined;

  const competition = getCompetitionById(project.competitionId);
  return {
    ...project,
    competitionYear: competition?.year || new Date().getFullYear(),
  };
}

// Get projects by competition ID
export function getProjectsByCompetition(competitionId: string): Project[] {
  const competition = getCompetitionById(competitionId);
  const year = competition?.year || new Date().getFullYear();

  return projectsData.projects
    .filter((proj: any) => proj.competitionId === competitionId)
    .map((proj: any) => ({
      ...proj,
      competitionYear: year,
    }))
    .sort((a, b) => a.rank - b.rank);
}

// Get top N projects by competition
export function getTopProjects(competitionId: string, limit: number = 3): Project[] {
  return getProjectsByCompetition(competitionId).slice(0, limit);
}

// Get all participants
export function getParticipants(): Participant[] {
  return participantsData.participants as Participant[];
}

// Get participant by ID
export function getParticipantById(id: string): Participant | undefined {
  return (participantsData.participants as Participant[]).find((part) => part.id === id);
}
