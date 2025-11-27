"use client";

import { ReactNode } from "react";

interface ShelfLayoutProps {
  children: ReactNode;
  shelfColor?: string;
}

export function ShelfLayout({ children, shelfColor = "#1a1a1a" }: ShelfLayoutProps) {
  return (
    <div className="relative mb-24">
      {/* Shelf Container */}
      <div className="relative px-4 py-12">
        {/* Background shelf bar */}
        <div
          className="absolute left-0 right-0 bottom-0 h-4 shadow-lg"
          style={{
            background: `linear-gradient(to bottom, ${shelfColor} 0%, rgba(0,0,0,0.9) 100%)`,
            boxShadow: "0 6px 30px rgba(0,0,0,0.4)",
          }}
        />

        {/* Cards Grid - 4 cards per row for premium spacing */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-8">
          {children}
        </div>
      </div>

      {/* Shelf Shadow/Depth */}
      <div
        className="absolute left-0 right-0 bottom-0 h-3 opacity-30"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.6))",
        }}
      />
    </div>
  );
}
