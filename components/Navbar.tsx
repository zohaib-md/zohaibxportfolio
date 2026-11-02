"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Volume2, VolumeX } from "lucide-react";
import { personalData } from "@/lib/data";
import { useSoundContext } from "@/components/providers/SoundProvider";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { soundEnabled, toggleSound, playClick, playRetro } = useSoundContext();

  const isLinkActive = (label: string) => {
    if (pathname === "/products" || pathname?.startsWith("/products")) {
      return label === "Products";
    }
    if (pathname === "/hire" || pathname?.startsWith("/hire")) {
      return label === "Hire Me";
    }
    if (pathname === "/design" || pathname?.startsWith("/design")) {
      return label === "Web Design";
    }
    if (pathname === "/blog" || pathname?.startsWith("/blog")) {
      return label === "Blog";
    }
    if (pathname === "/projects" || pathname?.startsWith("/projects")) {
      return label === "Projects";
    }
    if (pathname === "/contact" || pathname?.startsWith("/contact")) {
      return label === "Get in Touch";
    }
    return label === "Home" && (pathname === "/" || pathname === "" || !pathname);
  };

  // Automatically close mobile menu on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll and listen for Escape key when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Mobile Drawer Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => {
            playClick();
            setMobileMenuOpen(false);
          }}
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-40 lg:hidden transition-opacity duration-200"
          aria-hidden="true"
        />
      )}

      <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Floating Pill Nav Container */}
        <nav
          id="navbar-container"
          className="w-full bg-[#fde68a] border-[3px] sm:border-[3.5px] border-black rounded-[20px] sm:rounded-[26px] shadow-[4px_4px_0_0_#000000] sm:shadow-[6px_6px_0_0_#000000] px-3 py-2 sm:px-5 sm:py-3 flex items-center justify-between transition-transform duration-200"
        >
          {/* Left: Dual-Pill Name Badges */}
          <Link
            href="/"
            onClick={() => playRetro()}
            className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer select-none flex-shrink-0"
          >
            {/* First Name Badge */}
            <span className="badge badge-lg h-auto py-1 px-2.5 sm:py-1.5 sm:px-3.5 bg-white text-black font-display font-extrabold text-xs xs:text-sm sm:text-lg border-[2.5px] sm:border-[3px] border-black rounded-lg sm:rounded-xl shadow-[2px_2px_0_0_#000000] sm:shadow-[3px_3px_0_0_#000000] transition-transform group-hover:-translate-y-0.5">
              {personalData.firstName}
            </span>
            {/* Last Name Badge */}
            <span className="badge badge-lg h-auto py-1 px-2.5 sm:py-1.5 sm:px-3.5 bg-black text-[#facc15] font-display font-extrabold text-xs xs:text-sm sm:text-lg border-[2.5px] sm:border-[3px] border-black rounded-lg sm:rounded-xl shadow-[2px_2px_0_0_#000000] sm:shadow-[3px_3px_0_0_#000000] transition-transform group-hover:-translate-y-0.5">
              {personalData.lastName}
            </span>
          </Link>

          {/* Center-Right: Desktop Nav Links (The mid buttons from Image 2) */}
          <div className="hidden lg:flex items-center gap-2.5">
            {personalData.navLinks.map((link) => {
              const isActive = isLinkActive(link.label);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => playClick()}
                  style={{ backgroundColor: link.bg }}
                  className={`inline-flex items-center justify-center h-auto py-1.5 px-3.5 border-[2.5px] border-black rounded-xl font-display font-bold text-xs sm:text-sm text-black transition-all duration-150 select-none ${
                    isActive
                      ? "-translate-y-0.5 shadow-[3.5px_3.5px_0_0_#000000]"
                      : "translate-y-0 shadow-none hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0_0_#000000] hover:underline"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Far Right: Sound Toggle, Circular Social Icons & Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            {/* Sound Effects Mute/Unmute Toggle Button */}
            <button
              onClick={toggleSound}
              aria-label={soundEnabled ? "Mute sound effects" : "Unmute sound effects"}
              title={soundEnabled ? "Sound Effects: ON (Click to mute)" : "Sound Effects: OFF (Click to unmute)"}
              className={`btn-neo-circle group transition-colors duration-150 ${
                soundEnabled ? "bg-[#34d399] hover:bg-[#10b981]" : "bg-[#f87171] hover:bg-[#ef4444]"
              }`}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 max-w-[16px] max-h-[16px] text-black group-hover:scale-110 transition-transform" />
              ) : (
                <VolumeX className="w-4 h-4 max-w-[16px] max-h-[16px] text-white group-hover:scale-110 transition-transform" />
              )}
            </button>

            {/* Desktop / Tablet Social Icons (Hidden on mobile phones) */}
            <div className="hidden md:flex items-center gap-1.5 sm:gap-2">
              <a
                href="https://www.linkedin.com/in/mohammad-zohaib-279794204/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                onClick={() => playClick()}
                className="btn-neo-circle"
              >
                <svg width="16" height="16" className="w-4 h-4 max-w-[16px] max-h-[16px] fill-current" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="https://github.com/zohaib-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onClick={() => playClick()}
                className="btn-neo-circle"
              >
                <svg width="16" height="16" className="w-4 h-4 max-w-[16px] max-h-[16px] fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://x.com/zohaib_kt"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                onClick={() => playClick()}
                className="btn-neo-circle"
              >
                <svg width="16" height="16" className="w-4 h-4 max-w-[16px] max-h-[16px] fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Mobile / Tablet Neo-Brutalist Hamburger Button */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className={`lg:hidden flex items-center justify-center gap-1.5 h-9 sm:h-10 px-2.5 sm:px-3 border-[2.5px] border-black rounded-xl font-display font-extrabold text-xs uppercase tracking-wider transition-all duration-150 select-none cursor-pointer ${
                mobileMenuOpen
                  ? "bg-black text-[#facc15] shadow-[2px_2px_0_0_#000000] translate-x-0.5 translate-y-0.5"
                  : "bg-white text-black shadow-[2.5px_2.5px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_0_#000000]"
              }`}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                width="18"
                height="18"
                className="w-[18px] h-[18px] stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
              <span className="hidden xs:inline">
                {mobileMenuOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile Drawer Menu (Featuring the mid buttons from Image 2) */}
        {mobileMenuOpen && (
          <div className="relative z-50 lg:hidden mt-2.5 sm:mt-3 w-full bg-[#fde68a] border-[3px] sm:border-[3.5px] border-black rounded-[22px] sm:rounded-[26px] shadow-[6px_6px_0_0_#000000] p-4 sm:p-5 flex flex-col gap-3 max-h-[calc(100vh-90px)] overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-2.5 border-b-[2px] border-black/20">
              <span className="font-display font-extrabold text-xs uppercase tracking-wider text-black">
                Navigation
              </span>
              <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-white border-[1.5px] border-black shadow-[1.5px_1.5px_0_0_#000000]">
                {personalData.navLinks.length} Pages
              </span>
            </div>

            {/* Navigation Buttons (The exact mid buttons with matching neo-brutalist styling) */}
            <div className="flex flex-col gap-2">
              {personalData.navLinks.map((link) => {
                const isActive = isLinkActive(link.label);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      playClick();
                      setMobileMenuOpen(false);
                    }}
                    style={{ backgroundColor: link.bg }}
                    className={`w-full py-2.5 px-4 border-[2.5px] border-black rounded-xl font-display font-extrabold text-sm sm:text-base text-black flex items-center justify-between transition-all duration-150 select-none ${
                      isActive
                        ? "-translate-y-0.5 shadow-[4px_4px_0_0_#000000] ring-2 ring-black"
                        : "translate-y-0 shadow-[2px_2px_0_0_#000000] hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_0_#000000]"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <span
                        className={`w-2.5 h-2.5 rounded-full border-[1.5px] border-black ${
                          isActive ? "bg-black" : "bg-transparent"
                        }`}
                      />
                      {link.label}
                    </span>
                    {isActive ? (
                      <span className="text-[10px] uppercase tracking-wider bg-black text-[#facc15] px-2 py-0.5 rounded-md font-display font-black shadow-[1px_1px_0_0_#000000]">
                        Current
                      </span>
                    ) : (
                      <svg
                        className="w-4 h-4 text-black/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Social Links Row in Mobile Drawer */}
            <div className="pt-3 mt-1 border-t-[2px] border-black/20 flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-black/70">
                Connect
              </span>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/mohammad-zohaib-279794204/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  onClick={() => playClick()}
                  className="btn-neo-circle"
                >
                  <svg width="16" height="16" className="w-4 h-4 max-w-[16px] max-h-[16px] fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/zohaib-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  onClick={() => playClick()}
                  className="btn-neo-circle"
                >
                  <svg width="16" height="16" className="w-4 h-4 max-w-[16px] max-h-[16px] fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/zohaib_kt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  onClick={() => playClick()}
                  className="btn-neo-circle"
                >
                  <svg width="16" height="16" className="w-4 h-4 max-w-[16px] max-h-[16px] fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
