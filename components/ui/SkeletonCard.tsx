export function SkeletonCard({ isLarge = false }: { isLarge?: boolean }) {
  return (
    <div
      className={`bg-white border-3 border-brutal-border shadow-brutal overflow-hidden h-full flex flex-col animate-pulse ${
        isLarge ? "md:row-span-2" : ""
      }`}
    >
      {/* Image Skeleton */}
      <div
        className={`bg-gray-200 border-b-3 border-brutal-border ${
          isLarge ? "h-64" : "h-48"
        }`}
      />

      {/* Content Skeleton */}
      <div className="p-5 flex-1 flex flex-col space-y-3">
        {/* Badge */}
        <div className="w-24 h-6 bg-gray-200" />

        {/* Title */}
        <div className="space-y-2">
          <div className="h-6 bg-gray-300 w-3/4" />
          <div className="h-6 bg-gray-300 w-1/2" />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 w-full" />
          <div className="h-4 bg-gray-200 w-5/6" />
        </div>

        {/* Team Name */}
        <div className="h-4 bg-gray-200 w-32" />

        {/* Tech Stack */}
        <div className="flex gap-2">
          <div className="w-16 h-7 bg-gray-200" />
          <div className="w-16 h-7 bg-gray-200" />
          <div className="w-16 h-7 bg-gray-200" />
        </div>

        {/* Stats */}
        <div className="flex gap-3">
          <div className="h-4 bg-gray-200 w-12" />
          <div className="h-4 bg-gray-200 w-20" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} isLarge={index % 5 === 0} />
      ))}
    </div>
  );
}
