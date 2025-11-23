import { Container } from "@/components/layout/Container";
import { Users, Construction } from "lucide-react";

export const metadata = {
  title: "Participants | codeXtreme Hall of Fame",
  description: "Meet the talented participants from codeXtreme hackathons",
};

export default function ParticipantsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 py-12 sm:py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50">
        <Container size="lg">
          <div className="text-center">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue border-3 border-brutal-border text-white font-bold uppercase text-sm shadow-brutal-sm hover:border-brutal-border hover:shadow-brutal transition-all cursor-default">
                <Users className="w-4 h-4" />
                Participants
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-tight mb-6 text-brutal-text">
              Meet Our
              <br />
              Innovators
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Explore the profiles of talented students who have participated in
              codeXtreme hackathons
            </p>
          </div>
        </Container>
      </section>

      {/* Coming Soon Section */}
      <section className="px-4 py-16">
        <Container size="lg">
          <div className="bg-white border-3 border-brutal-border shadow-brutal p-12 text-center">
            <div className="flex justify-center mb-6">
              <Construction className="w-16 h-16 text-brand-orange" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-black uppercase mb-4 text-brutal-text">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              We&apos;re currently building the participants directory. Check back
              soon to explore profiles of innovators from past codeXtreme events!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="px-6 py-3 bg-brand-purple text-white font-bold uppercase text-sm border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
              >
                View Competitions
              </a>
              <a
                href="/about"
                className="px-6 py-3 bg-white text-brutal-text font-bold uppercase text-sm border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
              >
                Learn About codeXtreme
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
