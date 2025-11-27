import { Container } from "@/components/layout/Container";
import { Info, Target, Eye, Construction } from "lucide-react";

export const metadata = {
  title: "About | codeXtreme Hall of Fame",
  description: "Learn about codeXtreme and our mission to empower student innovators across Africa",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-10 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-br from-red-50 to-orange-50 overflow-hidden">
        {/* Unified grid pattern - consistent 80px */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0',
        }} />
        <Container size="lg" className="relative z-10">
          <div className="text-center">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-green border-3 border-brutal-border text-white font-bold uppercase text-xs sm:text-sm shadow-brutal-sm hover:border-brutal-border hover:shadow-brutal transition-all cursor-default">
                <Info className="w-3 h-3 sm:w-4 sm:h-4" />
                About
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-4 sm:mb-6 text-brutal-text">
              About
              <br />
              codeXtreme
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Empowering Africa&apos;s brightest student innovators to build
              solutions that shape communities
            </p>
          </div>
        </Container>
      </section>

      {/* What is codeXtreme Section */}
      <section className="relative px-4 py-10 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        {/* Unified grid pattern - consistent 80px */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0',
        }} />

        <Container size="lg" className="relative z-10">
          <div className="bg-white border-2 sm:border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg transition-all p-5 sm:p-8 md:p-12 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase mb-4 sm:mb-6 text-brutal-text">
              What is codeXtreme?
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              codeXtreme is Africa&apos;s premier student hackathon, bringing
              together talented students from universities across the continent to
              learn, build, and share innovative solutions to real-world problems.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Every year, codeXtreme challenges participants to create high-value,
              high-impact tech solutions that address pressing issues in their
              communities. From hardware innovations to AI-powered healthcare tools,
              our participants are building the future of Africa.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            <div className="bg-red-50 border-2 sm:border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg transition-all p-5 sm:p-8">
              <div className="mb-3 sm:mb-4">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 text-brand-red" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase mb-3 sm:mb-4 text-brand-red">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-800">
                To empower the next generation of African innovators with the
                skills, resources, and platform to build solutions that create
                lasting impact in their communities.
              </p>
            </div>

            <div className="bg-blue-50 border-2 sm:border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg transition-all p-5 sm:p-8">
              <div className="mb-3 sm:mb-4">
                <Eye className="w-10 h-10 sm:w-12 sm:h-12 text-brand-blue" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase mb-3 sm:mb-4 text-brand-blue">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-gray-800">
                An Africa where every student has the opportunity to transform
                their ideas into reality and contribute to solving the
                continent&apos;s most critical challenges through technology.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 sm:border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg transition-all p-5 sm:p-8 md:p-12 mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black uppercase mb-6 sm:mb-8 text-center text-brutal-text">
              Our Impact
            </h2>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-red mb-1 sm:mb-2">
                  250+
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-bold uppercase text-gray-700">
                  Participants
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-blue mb-1 sm:mb-2">64</div>
                <div className="text-[10px] sm:text-xs md:text-sm font-bold uppercase text-gray-700">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-orange mb-1 sm:mb-2">
                  $5K+
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-bold uppercase text-gray-700">
                  In Prizes
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="bg-white border-2 sm:border-3 border-brutal-border shadow-brutal p-6 sm:p-8 md:p-12 text-center">
            <div className="flex justify-center mb-4 sm:mb-6">
              <Construction className="w-12 h-12 sm:w-16 sm:h-16 text-brand-orange" strokeWidth={2.5} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase mb-3 sm:mb-4 text-brutal-text">
              More Information Coming Soon
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
              We&apos;re working on adding more details about the DIANA framework,
              our programs, partners, and how you can get involved. Stay tuned!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-brand-red text-white font-bold uppercase text-sm border-2 sm:border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
              >
                View Winners
              </a>
              <a
                href="https://codextreme.io"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-brutal-text font-bold uppercase text-sm border-2 sm:border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
              >
                Visit codeXtreme.io
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
