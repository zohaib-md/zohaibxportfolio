"use client";

import React from "react";
import Link from "next/link";
import { personalData } from "@/lib/data";

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#0F0F0F] text-white border-t-[3.5px] border-black pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        {/* Main 3-Column Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12 pb-12 sm:pb-16">
          {/* Column 1 (Left, ~35% width): Name pill pair, role, location */}
          <div className="w-full lg:w-[35%] flex flex-col items-start">
            {/* Name Pill Pair (same style as nav: first in white pill with black border, last in black pill with yellow text and subtle yellow border) */}
            <div className="flex items-center gap-2 select-none">
              <span className="badge badge-lg h-auto py-1.5 px-3.5 bg-white text-black font-display font-extrabold text-base sm:text-lg border-[2.5px] border-black rounded-xl shadow-[3px_3px_0_0_#000000]">
                {personalData.firstName}
              </span>
              <span className="badge badge-lg h-auto py-1.5 px-3.5 bg-black text-[#FACC15] font-display font-extrabold text-base sm:text-lg border-[2px] border-[#FACC15]/60 rounded-xl shadow-[3px_3px_0_0_rgba(250,204,21,0.2)]">
                {personalData.lastName}
              </span>
            </div>

            {/* Role line (white text) */}
            <p className="mt-4 font-display text-base sm:text-lg font-bold text-white tracking-tight">
              Software Developer
            </p>

            {/* Location line (gray text) */}
            <p className="mt-1 text-sm text-neutral-400 font-normal">
              Delhi NCR · Remote friendly
            </p>
          </div>

          {/* Column 2 (Center, two sub-columns side by side): Explore links */}
          <div className="flex flex-col items-start">
            <span className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase mb-4">
              EXPLORE
            </span>
            <div className="grid grid-cols-2 gap-x-12 sm:gap-x-16 gap-y-2.5">
              {/* Left Sub-column */}
              <div className="flex flex-col gap-2.5">
                <Link
                  href="/"
                  className="text-sm sm:text-[15px] text-neutral-400 hover:text-white transition-colors leading-relaxed"
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="text-sm sm:text-[15px] text-neutral-400 hover:text-white transition-colors leading-relaxed"
                >
                  Blog
                </Link>
                <Link
                  href="/hire"
                  className="text-sm sm:text-[15px] text-neutral-400 hover:text-white transition-colors leading-relaxed"
                >
                  Hire Me
                </Link>
                <Link
                  href="/contact"
                  className="text-sm sm:text-[15px] text-neutral-400 hover:text-white transition-colors leading-relaxed"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Right Sub-column */}
              <div className="flex flex-col gap-2.5">
                <Link
                  href="/projects"
                  className="text-sm sm:text-[15px] text-neutral-400 hover:text-white transition-colors leading-relaxed"
                >
                  Projects
                </Link>
                <Link
                  href="/products"
                  className="text-sm sm:text-[15px] text-neutral-400 hover:text-white transition-colors leading-relaxed"
                >
                  Products
                </Link>
                <Link
                  href="/design"
                  className="text-sm sm:text-[15px] text-neutral-400 hover:text-white transition-colors leading-relaxed"
                >
                  Web Design
                </Link>
              </div>
            </div>
          </div>

          {/* Column 3 (Right): Connect links & email */}
          <div className="flex flex-col items-start">
            <span className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase mb-4">
              CONNECT
            </span>

            {/* Row of 3 social icon buttons: LinkedIn, GitHub, X (white hover) */}
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/mohammad-zohaib-279794204/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl border border-neutral-700 bg-neutral-900/90 flex items-center justify-center text-neutral-300 hover:border-white hover:text-white hover:bg-neutral-800 transition-all duration-150"
              >
                <svg
                  width="16"
                  height="16"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/zohaib-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl border border-neutral-700 bg-neutral-900/90 flex items-center justify-center text-neutral-300 hover:border-white hover:text-white hover:bg-neutral-800 transition-all duration-150"
              >
                <svg
                  width="18"
                  height="18"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/zohaib_kt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-xl border border-neutral-700 bg-neutral-900/90 flex items-center justify-center text-neutral-300 hover:border-white hover:text-white hover:bg-neutral-800 transition-all duration-150"
              >
                <svg
                  width="15"
                  height="15"
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Email address as plain gray text */}
            <a
              href="mailto:zohaibmohammad88@gmail.com"
              className="mt-4 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              zohaibmohammad88@gmail.com
            </a>
          </div>
        </div>

        {/* BOTTOM ROW: Thin horizontal divider line & left-aligned copyright */}
        <div className="pt-8 border-t border-neutral-800/80 flex items-center justify-start text-xs sm:text-sm text-neutral-500">
          <p>
            &copy; 2026 {personalData.firstName} {personalData.lastName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
