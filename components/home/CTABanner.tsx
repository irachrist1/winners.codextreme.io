import Link from "next/link";
import { Trophy, ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-br from-brand-red via-red-600 to-red-700 overflow-hidden">
      {/* Skewed Border Top */}
      <div className="absolute top-0 left-0 right-0 h-3 sm:h-4 bg-white transform -skew-y-1 origin-top-left" />

      {/* Skewed Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-3 sm:h-4 bg-white transform skew-y-1 origin-bottom-left" />

      {/* Unified Grid Pattern - consistent 80px */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `
          linear-gradient(to right, #fff 1px, transparent 1px),
          linear-gradient(to bottom, #fff 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        backgroundPosition: '0 0',
      }} />

      {/* Floating Geometric Shapes - Hidden on mobile */}
      <div className="hidden sm:block absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rotate-12 animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-white rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-20 left-1/4 w-28 h-28 border-4 border-white -rotate-6 animate-pulse delay-500" />
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-white/10 rotate-45 animate-pulse delay-700" />
      </div>

      {/* Trophy Icons - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl font-black text-white">
          🏆
        </div>
        <div className="absolute bottom-10 right-10 text-9xl font-black text-white">
          🏆
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-white border-3 sm:border-4 border-white shadow-brutal-lg">
            <Trophy className="w-7 h-7 sm:w-10 sm:h-10 text-brand-red" strokeWidth={3} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase text-white mb-4 sm:mb-6 leading-tight">
          Be The
          <br />
          Next Winner
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-red-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Join Africa&apos;s most exciting student hackathon and showcase your innovation to the world
        </p>

        {/* Competition Date */}
        <div className="inline-block mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-white border-2 sm:border-3 border-brutal-border shadow-brutal">
          <p className="text-xs sm:text-sm font-bold text-gray-600 uppercase mb-0.5 sm:mb-1">
            Next Competition
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-black text-brand-red">
            November 2026
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Link href="https://codextreme.io" target="_blank" rel="noopener noreferrer">
            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-brand-red font-bold uppercase text-sm sm:text-base border-2 sm:border-3 border-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all flex items-center justify-center gap-2">
              Register Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/about">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-bold uppercase text-sm sm:text-base border-2 sm:border-3 border-white shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all">
              Learn More
            </button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-red-400">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 text-white">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 sm:mb-2">$5K+</div>
              <div className="text-[10px] sm:text-xs md:text-sm font-bold uppercase text-red-200">
                In Prizes
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 sm:mb-2">250+</div>
              <div className="text-[10px] sm:text-xs md:text-sm font-bold uppercase text-red-200">
                Participants
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 sm:mb-2">3 Days</div>
              <div className="text-[10px] sm:text-xs md:text-sm font-bold uppercase text-red-200">
                Of Innovation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
