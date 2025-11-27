"use client";

import { Trophy } from "lucide-react";

interface PulseBadgeProps {
  rank: number;
  size?: "small" | "medium" | "large";
  className?: string;
}

export function PulseBadge({ rank, size = "medium", className = "" }: PulseBadgeProps) {
  if (rank > 3) return null;

  const sizeClasses = {
    small: "px-2 py-1 text-xs",
    medium: "px-3 py-2 text-sm",
    large: "px-4 py-3 text-base",
  };

  const colors = {
    1: {
      bg: "bg-brand-yellow",
      border: "border-yellow-600",
      text: "text-brutal-text",
      pulse: "shadow-yellow-400",
    },
    2: {
      bg: "bg-gray-300",
      border: "border-gray-500",
      text: "text-brutal-text",
      pulse: "shadow-gray-400",
    },
    3: {
      bg: "bg-brand-orange",
      border: "border-orange-600",
      text: "text-white",
      pulse: "shadow-orange-400",
    },
  };

  const color = colors[rank as 1 | 2 | 3];

  return (
    <div
      className={`inline-flex items-center gap-1.5 ${color.bg} ${color.text} border-3 ${color.border} font-black uppercase ${sizeClasses[size]} animate-pulse-slow ${className}`}
      style={{
        animation: "pulse-soft 3s ease-in-out infinite",
      }}
    >
      <Trophy className={size === "small" ? "w-3 h-3" : size === "medium" ? "w-4 h-4" : "w-5 h-5"} />
      <span>
        {rank === 1 ? "1st Place" : rank === 2 ? "2nd Place" : "3rd Place"}
      </span>
      <style jsx>{`
        @keyframes pulse-soft {
          0%, 100% {
            box-shadow: 0 0 0 0 ${color.pulse};
          }
          50% {
            box-shadow: 0 0 15px 5px ${color.pulse};
          }
        }
      `}</style>
    </div>
  );
}
