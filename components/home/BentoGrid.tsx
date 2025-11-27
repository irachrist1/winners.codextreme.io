import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { RankBadge } from "@/components/shared/RankBadge";
import { Badge } from "@/components/ui/Badge";
import { Project } from "@/lib/data";

interface BentoGridProps {
  topProjects: Project[];
}

export function BentoGrid({ topProjects }: BentoGridProps) {
  const first = topProjects[0];
  const second = topProjects[1];
  const third = topProjects[2];

  return (
    <section id="bento-grid" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 scroll-mt-20 overflow-hidden">
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
          <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-red border-3 border-brutal-border text-white font-bold uppercase text-[10px] sm:text-xs shadow-brutal-sm mb-3 sm:mb-4">
            Top 3
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-brutal-text mb-3 sm:mb-4">
            Latest Champions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
            Meet the winning projects from CodeXtreme 2025
          </p>
        </div>

        {/* Desktop: Asymmetric Bento Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {/* 1ST PLACE - Takes 2 columns */}
          <div className="md:col-span-2">
            <Link href={`/project/${first.id}`}>
              <div className="relative bg-white border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all overflow-hidden cursor-pointer h-full group">
                {/* Background Rank Number */}
                <div className="absolute top-0 right-0 text-[200px] font-black text-gray-100 leading-none pointer-events-none select-none">
                  1
                </div>

                {/* Image */}
                <div className="relative h-80 border-b-3 border-brutal-border bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center">
                  <div className="text-8xl font-black text-white opacity-30">
                    {first.name.charAt(0)}
                  </div>
                  <div className="absolute top-4 left-4">
                    <RankBadge rank={1} size="large" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <Badge variant="primary" className="mb-3">
                      {first.category}
                    </Badge>
                    <h3 className="text-3xl font-black text-brutal-text mb-2">
                      {first.name}
                    </h3>
                    <p className="text-lg text-gray-700 mb-3">{first.tagline}</p>
                    <p className="text-sm font-bold text-brand-red">
                      {first.teamName}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {first.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 border-2 border-brutal-border text-gray-800 text-xs font-bold uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="primary" className="w-full">
                    View Project
                  </Button>
                </div>
              </div>
            </Link>
          </div>

          {/* 2ND & 3RD PLACE - Share 1 column, stacked */}
          <div className="flex flex-col gap-6">
            {/* 2ND PLACE */}
            <Link href={`/project/${second.id}`}>
              <div className="relative bg-white border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all overflow-hidden cursor-pointer group">
                {/* Background Rank Number */}
                <div className="absolute top-0 right-0 text-[120px] font-black text-gray-100 leading-none pointer-events-none select-none">
                  2
                </div>

                {/* Image */}
                <div className="relative h-40 border-b-3 border-brutal-border bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                  <div className="text-5xl font-black text-white opacity-30">
                    {second.name.charAt(0)}
                  </div>
                  <div className="absolute top-3 left-3">
                    <RankBadge rank={2} size="medium" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {second.category}
                  </Badge>
                  <h3 className="text-xl font-black text-brutal-text mb-1">
                    {second.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {second.tagline}
                  </p>
                  <p className="text-xs font-bold text-brand-blue">
                    {second.teamName}
                  </p>
                </div>
              </div>
            </Link>

            {/* 3RD PLACE */}
            <Link href={`/project/${third.id}`}>
              <div className="relative bg-white border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all overflow-hidden cursor-pointer group">
                {/* Background Rank Number */}
                <div className="absolute top-0 right-0 text-[120px] font-black text-gray-100 leading-none pointer-events-none select-none">
                  3
                </div>

                {/* Image */}
                <div className="relative h-40 border-b-3 border-brutal-border bg-gradient-to-br from-orange-200 to-orange-400 flex items-center justify-center">
                  <div className="text-5xl font-black text-white opacity-30">
                    {third.name.charAt(0)}
                  </div>
                  <div className="absolute top-3 left-3">
                    <RankBadge rank={3} size="medium" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <Badge variant="warning" className="mb-2 text-xs">
                    {third.category}
                  </Badge>
                  <h3 className="text-xl font-black text-brutal-text mb-1">
                    {third.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {third.tagline}
                  </p>
                  <p className="text-xs font-bold text-brand-green">
                    {third.teamName}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile: Single Column Stack */}
        <div className="md:hidden flex flex-col gap-6">
          {topProjects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`}>
              <div className="relative bg-white border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all overflow-hidden cursor-pointer">
                {/* Background Rank Number */}
                <div className="absolute top-0 right-0 text-[120px] font-black text-gray-100 leading-none pointer-events-none select-none">
                  {project.rank}
                </div>

                {/* Image */}
                <div className={`relative h-48 border-b-3 border-brutal-border flex items-center justify-center ${
                  project.rank === 1
                    ? "bg-gradient-to-br from-yellow-200 to-yellow-400"
                    : project.rank === 2
                    ? "bg-gradient-to-br from-gray-200 to-gray-400"
                    : "bg-gradient-to-br from-orange-200 to-orange-400"
                }`}>
                  <div className="text-6xl font-black text-white opacity-30">
                    {project.name.charAt(0)}
                  </div>
                  <div className="absolute top-4 left-4">
                    <RankBadge rank={project.rank} size="medium" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <Badge variant="primary" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-black text-brutal-text mb-2">
                    {project.name}
                  </h3>
                  <p className="text-base text-gray-700 mb-3">{project.tagline}</p>
                  <p className="text-sm font-bold text-brand-red">
                    {project.teamName}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 border-2 border-brutal-border text-gray-800 text-xs font-bold uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
