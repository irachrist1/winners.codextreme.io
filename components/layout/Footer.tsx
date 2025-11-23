import React from "react";
import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-3 border-brutal-border bg-white mt-24">
      <Container size="xl">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-brand-purple border-3 border-brutal-border shadow-brutal flex items-center justify-center font-black text-white text-xl">
                  CX
                </div>
                <div>
                  <div className="font-black text-lg">codeXtreme</div>
                  <div className="text-xs font-bold text-brand-purple uppercase">
                    Hall of Fame
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Celebrating Africa&apos;s brightest student innovators building
                solutions that shape communities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-black uppercase mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-brand-purple transition-colors"
                  >
                    Competitions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/participants"
                    className="text-gray-600 hover:text-brand-purple transition-colors"
                  >
                    Participants
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-brand-purple transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="https://codextreme.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand-purple transition-colors"
                  >
                    Visit codeXtreme
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-black uppercase mb-4">Connect</h3>
              <div className="flex gap-3">
                <a
                  href="https://twitter.com/codextreme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-purple border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center justify-center text-white font-bold"
                  aria-label="Twitter"
                >
                  X
                </a>
                <a
                  href="https://linkedin.com/company/codextreme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-blue border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center justify-center text-white font-bold"
                  aria-label="LinkedIn"
                >
                  in
                </a>
                <a
                  href="https://instagram.com/codextreme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-brand-orange border-3 border-brutal-border shadow-brutal hover:shadow-brutal-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center justify-center text-white font-bold"
                  aria-label="Instagram"
                >
                  IG
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t-3 border-brutal-border mt-8 pt-8 text-center text-sm text-gray-600">
            © {currentYear} codeXtreme. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
