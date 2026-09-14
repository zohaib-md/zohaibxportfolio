"use client";

import React from "react";
import Link from "next/link";
import { personalData } from "@/lib/data";

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-[#1b1917] text-white border-t-[3.5px] border-black pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1280px]">
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-12 pb-14 border-b border-stone-800/70">
          {/* Left Column: Brand & Status */}
          <div className="flex flex-col items-start max-w-sm">
            {/* Logo Pills */}
            <div className="flex items-center gap-2">
              <span className="inline-block rounded-full border-[3px] border-black bg-white px-4 py-1 font-display text-lg sm:text-xl font-bold text-black shadow-[3px_3px_0_0_#000000]">
                {personalData.firstName}
              </span>
              <span className="inline-block rounded-full border-[3px] border-black bg-[#FACC15] px-4 py-1 font-display text-lg sm:text-xl font-bold text-black shadow-[3px_3px_0_0_#000000]">
                {personalData.lastName}
              </span>
            </div>

            {/* Subtitles */}
            <p className="font-display font-medium text-sm sm:text-base text-stone-300 mt-4">
              Android &amp; Full-Stack Engineer
            </p>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Based in Delhi NCR · Remote friendly
            </p>

            {/* Available for projects pill */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-stone-800 bg-stone-900 px-3.5 py-1.5 text-xs font-medium text-stone-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for projects</span>
            </div>
          </div>

          {/* Middle Column: Explore Navigation */}
          <div className="flex flex-col items-start">
            <h4 className="text-[11px] font-bold tracking-wider text-stone-500 uppercase mb-4">
              Explore
            </h4>
            <div className="grid grid-cols-2 gap-x-10 gap-y-2.5">
              <div className="flex flex-col gap-2.5">
                <Link
                  href="#"
                  className="text-sm text-stone-400 hover:text-white transition-colors duration-150 font-medium"
                >
                  Home
                </Link>
                <Link
                  href="#blog"
                  className="text-sm text-stone-400 hover:text-white transition-colors duration-150 font-medium"
                >
                  Blog
                </Link>
                <Link
                  href="#hire"
                  className="text-sm text-stone-400 hover:text-white transition-colors duration-150 font-medium"
                >
                  Hire Me
                </Link>
                <Link
                  href="#contact"
                  className="text-sm text-stone-400 hover:text-white transition-colors duration-150 font-medium"
                >
                  Get in Touch
                </Link>
              </div>
              <div className="flex flex-col gap-2.5">
                <Link
                  href="#projects"
                  className="text-sm text-stone-400 hover:text-white transition-colors duration-150 font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="#products"
                  className="text-sm text-stone-400 hover:text-white transition-colors duration-150 font-medium"
                >
                  Products
                </Link>
                <Link
                  href="#design"
                  className="text-sm text-stone-400 hover:text-white transition-colors duration-150 font-medium"
                >
                  Web Design
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Connect */}
          <div className="flex flex-col items-start">
            <h4 className="text-[11px] font-bold tracking-wider text-stone-500 uppercase mb-4">
              Connect
            </h4>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-stone-800 bg-stone-900 text-stone-300 hover:text-white hover:border-stone-700 hover:bg-stone-800 transition-all shadow-[2px_2px_0_0_#000000]"
              >
                <svg
                  width="18"
                  height="18"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.66 1.66 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/zohaib-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-stone-800 bg-stone-900 text-stone-300 hover:text-white hover:border-stone-700 hover:bg-stone-800 transition-all shadow-[2px_2px_0_0_#000000]"
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
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-stone-800 bg-stone-900 text-stone-300 hover:text-white hover:border-stone-700 hover:bg-stone-800 transition-all shadow-[2px_2px_0_0_#000000]"
              >
                <svg
                  width="16"
                  height="16"
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Email link */}
            <a
              href="mailto:zohaib.work@gmail.com"
              className="mt-4 text-xs sm:text-sm text-stone-400 hover:text-white transition-colors duration-150"
            >
              zohaib.work@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} {personalData.firstName}{" "}
            {personalData.lastName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
