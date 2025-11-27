import { HeroSplit } from "@/components/home/HeroSplit";
import { StatsDashboard } from "@/components/home/StatsDashboard";
import { BentoGrid } from "@/components/home/BentoGrid";
import { TimelineView } from "@/components/home/TimelineView";
import { CTABanner } from "@/components/home/CTABanner";
import { WinnersGrid } from "@/components/home/WinnersGrid";
import { getProjects } from "@/lib/data";

export default function HomePage() {
  const allProjects = getProjects();
  const topProjects = allProjects.filter(p => p.rank <= 3).sort((a, b) => a.rank - b.rank);

  return (
    <>
      {/* Hero Split Section - 60/40 */}
      <HeroSplit />

      {/* Stats Dashboard */}
      <StatsDashboard />

      {/* Latest Champions - Bento Grid */}
      <BentoGrid topProjects={topProjects} />

      {/* Competition Timeline */}
      <TimelineView />

      {/* CTA Banner - Be the Next Winner */}
      <CTABanner />

      {/* All Winners Grid with Filters */}
      <WinnersGrid />
    </>
  );
}
