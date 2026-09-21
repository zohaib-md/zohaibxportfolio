"use client";

import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const SplashScreen: React.FC = () => {
  const [isMounted, setIsMounted] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Lock background scroll during splash
    document.body.style.overflow = "hidden";

    // Start fade-out transition after loading bar finishes
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1500);

    // Completely unmount after exit animation finishes
    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
      document.body.style.overflow = "";
      ScrollTrigger.refresh();
    }, 1850);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(unmountTimer);
      document.body.style.overflow = "";
      ScrollTrigger.refresh();
    };
  }, []);

  const handleSkip = () => {
    if (!isExiting) {
      setIsExiting(true);
      setTimeout(() => {
        setIsMounted(false);
        document.body.style.overflow = "";
        ScrollTrigger.refresh();
      }, 350);
    }
  };

  if (!isMounted) return null;

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#ffd93d] select-none cursor-pointer transition-all duration-350 ease-out ${
        isExiting
          ? "opacity-0 pointer-events-none scale-105"
          : "opacity-100 scale-100"
      }`}
      aria-hidden="true"
    >
      {/* Background Floating Neo-brutalist Developer Stickers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sticker 1: Code brackets </ > (Top-Left) */}
        <div className="absolute top-[12%] left-[7%] sm:top-[16%] sm:left-[12%] splash-float-1">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[5px_5px_0px_#000000]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6"
              y="6"
              width="88"
              height="88"
              rx="12"
              fill="#66d9ef"
              stroke="#000"
              strokeWidth="5"
            />
            <path
              d="M35 40 L20 50 L35 60"
              stroke="#000"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M65 40 L80 50 L65 60"
              stroke="#000"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="55"
              y1="34"
              x2="45"
              y2="66"
              stroke="#000"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Sticker 2: Terminal Prompt >_ (Top-Right) */}
        <div className="absolute top-[14%] right-[7%] sm:top-[18%] sm:right-[14%] splash-float-2">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[5px_5px_0px_#000000]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6"
              y="6"
              width="88"
              height="88"
              rx="12"
              fill="#ffd93d"
              stroke="#000"
              strokeWidth="5"
            />
            <path
              d="M24 35 L39 50 L24 65"
              stroke="#000"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="48"
              y1="65"
              x2="74"
              y2="65"
              stroke="#000"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Sticker 3: Retro Floppy Disk / Save Icon (Bottom-Left) */}
        <div className="absolute bottom-[14%] left-[8%] sm:bottom-[18%] sm:left-[14%] splash-float-3">
          <svg
            className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[5px_5px_0px_#000000]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="6"
              y="6"
              width="88"
              height="88"
              rx="12"
              fill="#a8e6cf"
              stroke="#000"
              strokeWidth="5"
            />
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              rx="4"
              fill="#ffd93d"
              stroke="#000"
              strokeWidth="4.5"
            />
            <rect
              x="30"
              y="20"
              width="40"
              height="22"
              fill="#66d9ef"
              stroke="#000"
              strokeWidth="3.5"
            />
            <rect
              x="35"
              y="56"
              width="30"
              height="15"
              rx="2"
              fill="#000"
            />
            <circle cx="50" cy="36" r="3.5" fill="#000" />
          </svg>
        </div>
      </div>

      {/* Center Group: MZ Logo Tiles + Loading Bar */}
      <div className="relative z-10 flex flex-col items-center gap-9 sm:gap-11">
        {/* MZ Overlapping Letter Tiles */}
        <div className="flex items-center justify-center relative">
          {/* Tile 1: "M" in Cyan Tile */}
          <div className="splash-letter-m relative z-10 w-[105px] h-[105px] sm:w-[124px] sm:h-[124px] md:w-[130px] md:h-[130px] rounded-[14px] bg-[#66d9ef] border-[5px] sm:border-[6px] border-black shadow-[9px_9px_0_0_#000000] sm:shadow-[12px_12px_0_0_#000000] flex items-center justify-center -rotate-2 select-none">
            <span className="font-display font-black text-6xl sm:text-7xl md:text-[82px] text-black tracking-tighter leading-none select-none">
              M
            </span>
          </div>

          {/* Tile 2: "Z" in Pink Tile (Overlapping on right) */}
          <div className="splash-letter-z relative z-20 -ml-4 sm:-ml-5 w-[105px] h-[105px] sm:w-[124px] sm:h-[124px] md:w-[130px] md:h-[130px] rounded-[14px] bg-[#ff6b9d] border-[5px] sm:border-[6px] border-black shadow-[9px_9px_0_0_#000000] sm:shadow-[12px_12px_0_0_#000000] flex items-center justify-center rotate-6 select-none">
            <span className="font-display font-black text-6xl sm:text-7xl md:text-[82px] text-black tracking-tighter leading-none select-none">
              Z
            </span>
          </div>
        </div>

        {/* Horizontal Loading Bar */}
        <div className="w-[260px] sm:w-[320px] h-[18px] sm:h-[22px] bg-white border-[3.5px] sm:border-[4px] border-black shadow-[5px_5px_0_0_#000000] sm:shadow-[6px_6px_0_0_#000000] rounded-none overflow-hidden relative">
          <div className="splash-progress h-full bg-[#ffd93d] relative border-r-[4px] border-black" />
        </div>
      </div>
    </div>
  );
};
