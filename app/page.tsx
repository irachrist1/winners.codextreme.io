import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { getCompetitions } from "@/lib/data";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Trophy, Users, Lightbulb } from "lucide-react";

export default function HomePage() {
  const competitions = getCompetitions();

  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-12 sm:py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <Container size="lg">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange border-3 border-brutal-border text-white font-bold uppercase text-sm shadow-brutal-sm hover:border-brutal-border hover:shadow-brutal transition-all cursor-default">
                <Trophy className="w-4 h-4" />
                Hall of Fame
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6 text-brutal-text">
              codeXtreme
              <br />
              Winners Gallery
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Celebrating Africa&apos;s brightest student innovators building
              solutions that shape communities
            </p>
            <Link href="/competition/codextreme-2025">
              <Button size="lg">View Latest Competition</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Competition Grid */}
      <section className="px-4 py-16">
        <Container size="lg">
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-12 text-brutal-text">
            Past Competitions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitions.map((competition) => (
              <Link
                key={competition.id}
                href={`/competition/${competition.id}`}
                className="block"
              >
                <div className="bg-white border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all overflow-hidden cursor-pointer h-full flex flex-col">
                  {/* Thumbnail */}
                  <div className="relative h-48 border-b-3 border-brutal-border bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center">
                    <div className="text-6xl font-black text-white opacity-50">
                      {competition.year}
                    </div>
                    <div className="absolute top-4 right-4">
                      <StatusBadge status={competition.status} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-brand-purple uppercase">
                        {competition.year}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-600">
                        {competition.location}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black mb-3 text-brutal-text">
                      {competition.name}
                    </h3>
                    <p className="text-base text-gray-700 mb-4 line-clamp-2 flex-1">
                      {competition.theme}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{competition.participantCount} participants</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Lightbulb className="w-4 h-4" />
                        <span>{competition.projectsSubmitted} projects</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button variant="primary" className="w-full">
                      View Results
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
