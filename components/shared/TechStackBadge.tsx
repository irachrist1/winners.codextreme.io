import React from "react";
import { cn } from "@/lib/utils";

interface TechStackBadgeProps {
  tech: string;
  className?: string;
}

export function TechStackBadge({ tech, className }: TechStackBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 bg-gray-100 border-2 border-brutal-border text-gray-800 text-xs font-bold uppercase",
        className
      )}
    >
      {tech}
    </span>
  );
}
