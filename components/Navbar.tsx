"use client";

import React, { useState } from "react";
import Link from "next/link";
import { personalData } from "@/lib/data";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Floating Pill Nav Container */}
      <nav
        id="navbar-container"
        className="w-full bg-[#fde68a] border-[3.5px] border-black rounded-[26px] shadow-[6px_6px_0_0_#000000] px-4 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between transition-transform duration-200"
      >
        {/* Left: Dual-Pill Name Badges */}
        <Link href="#" className="flex items-center gap-2 group cursor-pointer select-none">
          {/* First Name Badge */}
          <span className="badge badge-lg h-auto py-1.5 px-3.5 bg-white text-black font-display font-extrabold text-base sm:text-lg border-[3px] border-black rounded-xl shadow-[3px_3px_0_0_#000000] transition-transform group-hover:-translate-y-0.5">
            {personalData.firstName}
          </span>
          {/* Last Name Badge */}
          <span className="badge badge-lg h-auto py-1.5 px-3.5 bg-black text-[#facc15] font-display font-extrabold text-base sm:text-lg border-[3px] border-black rounded-xl shadow-[3px_3px_0_0_#000000] transition-transform group-hover:-translate-y-0.5">
            {personalData.lastName}
          </span>
        </Link>

        {/* Center-Right: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-2.5">
          {personalData.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{ backgroundColor: link.bg }}
              className="btn btn-sm h-auto py-1.5 px-3.5 border-[2.5px] border-black rounded-xl font-display font-bold text-xs sm:text-sm text-black shadow-[3px_3px_0_0_#000000] hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000000] active:translate-y-0.5 active:shadow-[1px_1px_0_0_#000000] transition-all normal-case"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Far Right: Circular Social Icons & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* LinkedIn Icon Button */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="btn btn-circle btn-sm w-9 h-9 min-h-[36px] bg-white border-[2.5px] border-black text-black shadow-[3px_3px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000000] active:translate-y-0 transition-all p-0 flex items-center justify-center overflow-hidden"
          >
            <svg width="16" height="16" className="w-4 h-4 max-w-[16px] max-h-[16px] fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* GitHub Icon Button */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="btn btn-circle btn-sm w-9 h-9 min-h-[36px] bg-white border-[2.5px] border-black text-black shadow-[3px_3px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000000] active:translate-y-0 transition-all p-0 flex items-center justify-center overflow-hidden"
          >
            <svg width="16" height="16" className="w-4 h-4 max-w-[16px] max-h-[16px] fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* X / Twitter Icon Button */}
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="btn btn-circle btn-sm w-9 h-9 min-h-[36px] bg-white border-[2.5px] border-black text-black shadow-[3px_3px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000000] active:translate-y-0 transition-all p-0 flex items-center justify-center overflow-hidden"
          >
            <svg width="16" height="16" className="w-4 h-4 max-w-[16px] max-h-[16px] fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden btn btn-square btn-sm w-9 h-9 min-h-[36px] bg-white border-[2.5px] border-black text-black shadow-[3px_3px_0_0_#000000] hover:bg-neutral-100 p-0 flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            <svg width="20" height="20" className="w-5 h-5 max-w-[20px] max-h-[20px] stroke-current" fill="none" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 w-full bg-[#fde68a] border-[3.5px] border-black rounded-2xl shadow-[6px_6px_0_0_#000000] p-4 flex flex-col gap-2.5 animate-fadeIn">
          {personalData.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ backgroundColor: link.bg }}
              className="btn btn-sm w-full border-[2.5px] border-black rounded-xl font-display font-bold text-sm text-black shadow-[3px_3px_0_0_#000000] justify-center normal-case"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
