import React from "react";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "past" | "ongoing" | "upcoming";
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = {
    past: { bg: "bg-gray-100", text: "text-gray-700", label: "Completed" },
    ongoing: { bg: "bg-green-100", text: "text-green-700", label: "Ongoing" },
    upcoming: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Upcoming" },
  };

  const { bg, text, label } = config[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 border-2 border-brutal-border text-xs font-bold uppercase shadow-brutal-sm",
        bg,
        text,
        className
      )}
    >
      {label}
    </span>
  );
}
