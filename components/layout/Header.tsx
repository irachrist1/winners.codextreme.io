"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white/95 backdrop-blur-md sticky top-0 z-50">
      <Container size="xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image
              src="/images/codextreme-logo.svg"
              alt="codeXtreme"
              width={140}
              height={28}
              className="h-7 sm:h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 font-bold uppercase text-xs text-gray-700 hover:text-brand-red transition-colors"
            >
              Competitions
            </Link>
            <Link
              href="/participants"
              className="px-4 py-2 font-bold uppercase text-xs text-gray-700 hover:text-brand-red transition-colors"
            >
              Participants
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 font-bold uppercase text-xs text-gray-700 hover:text-brand-red transition-colors"
            >
              About
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <a
            href="https://codextreme.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block px-5 py-2.5 bg-brand-red text-white font-bold uppercase text-xs border-2 border-brand-red hover:bg-red-700 transition-colors"
          >
            Visit codeXtreme
          </a>

          {/* Mobile Menu Button - Smaller, cleaner */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-brand-red transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col">
              <Link
                href="/"
                className="px-4 py-3 font-bold uppercase text-sm text-gray-700 hover:text-brand-red hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Competitions
              </Link>
              <Link
                href="/participants"
                className="px-4 py-3 font-bold uppercase text-sm text-gray-700 hover:text-brand-red hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Participants
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 font-bold uppercase text-sm text-gray-700 hover:text-brand-red hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-4 pt-3 mt-2 border-t border-gray-100">
                <a
                  href="https://codextreme.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 bg-brand-red text-white font-bold uppercase text-sm text-center hover:bg-red-700 transition-colors"
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
