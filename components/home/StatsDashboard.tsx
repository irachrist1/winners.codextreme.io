import { Container } from "@/components/layout/Container";
import { AnimatedCounter } from "./AnimatedCounter";
import { getProjects, getCompetitions } from "@/lib/data";

export function StatsDashboard() {
  // Calculate stats from data
  const projects = getProjects();
  const competitions = getCompetitions();

  // Get unique categories
  const categories = new Set(projects.map(p => p.category));

  // Calculate total students (rough estimate from participants)
  const totalStudents = competitions.reduce((sum, comp) => sum + comp.participantCount, 0);

  const stats = {
    totalProjects: projects.length,
    totalEvents: competitions.length,
    totalCategories: categories.size,
    totalStudents: totalStudents,
  };

  const statCards = [
    {
      value: stats.totalProjects,
      label: "Projects",
      color: "bg-brand-red",
      borderColor: "border-brand-red",
    },
    {
      value: stats.totalEvents,
      label: "Events",
      color: "bg-brand-blue",
      borderColor: "border-brand-blue",
    },
    {
      value: stats.totalCategories,
      label: "Categories",
      color: "bg-brand-green",
      borderColor: "border-brand-green",
    },
    {
      value: stats.totalStudents,
      label: "Students",
      color: "bg-brand-orange",
      borderColor: "border-brand-orange",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      {/* Unified grid background - same size as all sections */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `
          linear-gradient(to right, #000 1px, transparent 1px),
          linear-gradient(to bottom, #000 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        backgroundPosition: '0 0',
      }} />

      <Container size="xl" className="relative z-10">
        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-3 min-w-max">
            {statCards.map((stat, index) => (
              <div
                key={index}
                className={`${stat.color} min-w-[160px] border-2 border-brutal-border shadow-brutal p-5 text-white`}
              >
                <AnimatedCounter value={stat.value} />
                <div className="text-xs font-bold uppercase mt-1 tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Horizontal Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-6">
          {statCards.map((stat, index) => (
            <div
              key={index}
              className={`group ${stat.color} border-3 border-brutal-border shadow-brutal hover:shadow-brutal-xl hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300 p-8 text-white text-center relative overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <div className="relative z-10">
                <AnimatedCounter value={stat.value} />
                <div className="text-sm font-bold uppercase mt-2 tracking-wide">
                  {stat.label}
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-l-3 border-b-3 border-white/20 group-hover:w-20 group-hover:h-20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
