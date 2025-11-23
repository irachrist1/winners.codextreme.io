import React from "react";
import { cn } from "@/lib/utils";

interface RankBadgeProps {
  rank: number;
  size?: "small" | "medium" | "large";
  className?: string;
}

export function RankBadge({ rank, size = "medium", className }: RankBadgeProps) {
  const sizeClasses = {
    small: "w-8 h-8 text-sm",
    medium: "w-12 h-12 text-lg",
    large: "w-16 h-16 text-2xl",
  };

  const colorClasses =
    rank === 1
      ? "bg-gradient-to-br from-yellow-300 to-yellow-500"
      : rank === 2
      ? "bg-gradient-to-br from-gray-300 to-gray-400"
      : rank === 3
      ? "bg-gradient-to-br from-orange-300 to-orange-400"
      : "bg-white";

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center border-3 border-brutal-border shadow-brutal-sm rounded-full font-black",
        sizeClasses[size],
        colorClasses,
        className
      )}
    >
      {rank}
    </div>
  );
}
