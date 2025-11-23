"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b-3 border-brutal-border bg-white sticky top-0 z-50">
      <Container size="xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="w-12 h-12 bg-brand-purple border-3 border-brutal-border shadow-brutal flex items-center justify-center font-black text-white text-xl">
              CX
            </div>
            <div>
              <div className="font-black text-lg leading-tight text-brutal-text">codeXtreme</div>
              <div className="text-xs font-bold text-brand-purple uppercase">
                Hall of Fame
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 font-bold uppercase text-xs text-brutal-text border-2 border-transparent hover:border-brutal-border hover:shadow-brutal-sm transition-all"
            >
              Competitions
            </Link>
            <Link
              href="/participants"
              className="flex items-center gap-2 px-3 py-2 font-bold uppercase text-xs text-brutal-text border-2 border-transparent hover:border-brutal-border hover:shadow-brutal-sm transition-all"
            >
              Participants
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 px-3 py-2 font-bold uppercase text-xs text-brutal-text border-2 border-transparent hover:border-brutal-border hover:shadow-brutal-sm transition-all"
            >
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <a
            href="https://codextreme.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-6 py-3 bg-brand-orange text-white font-bold uppercase text-sm border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
          >
            Visit codeXtreme
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden px-4 py-2 bg-white border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span className="block w-6 h-0.5 bg-brutal-text mb-1"></span>
            <span className="block w-6 h-0.5 bg-brutal-text mb-1"></span>
            <span className="block w-6 h-0.5 bg-brutal-text"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t-3 border-brutal-border bg-white">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="px-4 py-3 font-bold uppercase text-sm text-brutal-text border-2 border-transparent hover:border-brutal-border hover:shadow-brutal-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Competitions
              </Link>
              <Link
                href="/participants"
                className="px-4 py-3 font-bold uppercase text-sm text-brutal-text border-2 border-transparent hover:border-brutal-border hover:shadow-brutal-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Participants
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 font-bold uppercase text-sm text-brutal-text border-2 border-transparent hover:border-brutal-border hover:shadow-brutal-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-4 pt-2">
                <a
                  href="https://codextreme.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-3 bg-brand-orange text-white font-bold uppercase text-sm border-3 border-brutal-border shadow-brutal text-center hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-none active:translate-x-0 active:translate-y-0 transition-all"
                >
                  Visit codeXtreme
                </a>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
