import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 sm:border-t-3 border-brutal-border bg-white mt-12 sm:mt-16 md:mt-24">
      <Container size="xl">
        <div className="py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="mb-3 sm:mb-4">
                <Image
                  src="/images/codextreme-logo.svg"
                  alt="codeXtreme"
                  width={150}
                  height={28}
                  className="h-6 sm:h-7 w-auto mb-1 sm:mb-2"
                />
                <div className="text-[10px] sm:text-xs font-bold text-brutal-text uppercase">
                  Hall of Fame
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xs">
                Celebrating Africa&apos;s brightest student innovators building
                solutions that shape communities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-black uppercase text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-brand-red transition-colors"
                  >
                    Competitions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/participants"
                    className="text-gray-600 hover:text-brand-red transition-colors"
                  >
                    Participants
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-brand-red transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="https://codextreme.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand-red transition-colors"
                  >
                    Visit codeXtreme
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-black uppercase text-sm sm:text-base mb-3 sm:mb-4">Connect</h3>
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="https://twitter.com/codextreme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-red border-2 sm:border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                  aria-label="Twitter"
                >
                  X
                </a>
                <a
                  href="https://linkedin.com/company/codextreme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-blue border-2 sm:border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="https://instagram.com/codextreme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-red border-2 sm:border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                  aria-label="Instagram"
                >
                  IG
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t-2 sm:border-t-3 border-brutal-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-600">
            © {currentYear} codeXtreme. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
