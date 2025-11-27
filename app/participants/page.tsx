import { ParticipantsGrid } from "@/components/participants/ParticipantsGrid";
import { getParticipants, getProjects } from "@/lib/data";

export const metadata = {
  title: "Participants | codeXtreme Hall of Fame",
  description: "Meet the talented participants from codeXtreme hackathons",
};

export default function ParticipantsPage() {
  const participants = getParticipants();
  const projects = getProjects();

  // Calculate stats
  const totalParticipants = participants.length;
  const universities = new Set(participants.map((p) => p.university)).size;
  const totalProjects = projects.length;

  return (
    <div className="min-h-screen">
      {/* Participants Grid - Direct, no redundant hero */}
      <ParticipantsGrid />
    </div>
  );
}
