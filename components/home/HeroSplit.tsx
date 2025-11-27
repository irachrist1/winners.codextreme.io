"use client";

import { Trophy, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { LiveTicker } from "./LiveTicker";
import { GeometricBackground } from "@/components/shared/GeometricBackground";
import { getProjects, getCompetitions } from "@/lib/data";

export function HeroSplit() {
  // Calculate data from data layer
  const projects = getProjects();
  const competitions = getCompetitions();

  const totalYears = competitions.length;
  const totalWinners = projects.filter(p => p.rank <= 3).length;
  const recentProjects = projects.slice(0, 5); // Get first 5 projects for ticker

  return (
    <section className="relative min-h-screen flex items-center py-20 sm:py-24 px-4 overflow-hidden">
      {/* Premium Geometric Background - CSS only for instant load */}
      <GeometricBackground variant="dark" intensity="medium" />

      {/* Content */}
      <Container size="xl" className="relative z-10 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
          {/* LEFT SIDE - 60% (3/5) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Main Heading - Responsive sizes */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-none mb-4 sm:mb-6">
              <span className="block text-white">
                HALL OF
              </span>
              <span className="block bg-gradient-to-r from-brand-red via-red-500 to-orange-500 text-transparent bg-clip-text">
                FAME
              </span>
            </h1>

            {/* Tagline - Responsive */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Celebrating Africa&apos;s{" "}
              <span className="font-bold text-brand-red">
                brightest innovators
              </span>{" "}
              building solutions that shape communities
            </p>

            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => {
                  const element = document.getElementById('bento-grid');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-bold uppercase text-xs sm:text-sm border-2 border-white hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="flex items-center justify-center gap-2">
                  View Latest Competition
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('winners-grid');
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white font-bold uppercase text-xs sm:text-sm border-2 border-white/40 hover:border-white hover:bg-white/10 transition-all duration-200"
              >
                <span className="flex items-center justify-center gap-2">
                  Browse All Winners
                  <Trophy className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                </span>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - LIVE TICKER - Hidden on small mobile, shown from sm up */}
          <div className="lg:col-span-2 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 p-4 sm:p-6">
              <LiveTicker projects={recentProjects} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
