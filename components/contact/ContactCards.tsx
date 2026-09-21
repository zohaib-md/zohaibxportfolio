"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export interface ContactMethod {
  id: string;
  enabled: boolean;
  bg: string;
  icon: "calendar" | "mail" | "whatsapp";
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  isExternal?: boolean;
}

// Contact methods configuration
// Contact methods configuration
// "Book a call" is enabled and wired to Cal.com scheduling
const contactMethods: ContactMethod[] = [
  {
    id: "call",
    enabled: true,
    bg: "#bfdbfe", // Light Blue
    icon: "calendar",
    eyebrow: "FREE · 30 MIN",
    title: "Book a call",
    description:
      "Let's talk through your project. No sales pitch: just a focused conversation about what you want to build.",
    buttonText: "Pick a time",
    buttonHref: "https://cal.com/mohammad-zohaib-seahzf/30min?overlayCalendar=true",
    isExternal: true,
  },
  {
    id: "email",
    enabled: true,
    bg: "#bbf7d0", // Light Green
    icon: "mail",
    eyebrow: "EMAIL",
    title: "Send an email",
    description:
      "Prefer writing? Send me a note about what you're working on and I'll get back to you.",
    buttonText: "zohaibmohammad88@gmail.com",
    buttonHref: "mailto:zohaibmohammad88@gmail.com",
    isExternal: false,
  },
  {
    id: "whatsapp",
    enabled: true,
    bg: "#fde7f4", // Light Pink
    icon: "whatsapp",
    eyebrow: "WHATSAPP",
    title: "Message me",
    description:
      "Quickest way to reach me. Drop a message about what you're working on and I'll reply fast.",
    buttonText: "WhatsApp me",
    buttonHref: "https://wa.me/918957809411?text=Hi%20Zohaib%2C%20I%27d%20like%20to%20connect",
    isExternal: true,
  },
];

export const ContactCards: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const activeCards = contactMethods.filter((method) => method.enabled);
  const isThreeColumn = activeCards.length >= 3;

  useEffect(() => {
    // Initialize Cal.com embed
    if (typeof window !== "undefined") {
      (function (C: any, A: string, L: string) {
        const p = function (a: any, ar: any) {
          a.q.push(ar);
        };
        const d = C.document;
        C.Cal =
          C.Cal ||
          function () {
            const cal = C.Cal;
            const ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api: any = function () {
                p(api, arguments);
              };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar);
              return;
            }
            p(cal, ar);
          };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      const Cal = (window as any).Cal;
      if (Cal) {
        Cal("init", "30min", { origin: "https://cal.com" });
        Cal.ns?.["30min"]?.("ui", {
          theme: "light",
          styles: { branding: { brandColor: "#000000" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-card-item",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
          clearProps: "transform,opacity",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto w-full ${
          isThreeColumn ? "max-w-6xl" : "max-w-4xl"
        }`}
      >
        <div
          className={`grid gap-7 sm:gap-8 items-stretch ${
            isThreeColumn
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {activeCards.map((card) => (
            <div
              key={card.id}
              className={`contact-card-item rounded-[24px] sm:rounded-[28px] border-[3.5px] border-black p-7 sm:p-9 shadow-[6px_6px_0_0_#000000] flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#000000] ${
                card.id === "call"
                  ? "bg-[#bfdbfe]"
                  : card.id === "email"
                  ? "bg-[#bbf7d0]"
                  : "bg-[#fde7f4]"
              }`}
            >
              <div>
                {/* White Icon Box */}
                <div className="w-12 h-12 rounded-xl bg-white border-[2.5px] border-black shadow-[2.5px_2.5px_0_0_#000000] flex items-center justify-center select-none">
                  {card.icon === "calendar" && (
                    <svg
                      className="w-5 h-5 text-black"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  )}

                  {card.icon === "mail" && (
                    <img
                      src="/gmail-logo.png"
                      alt="Gmail"
                      className="w-6 h-auto object-contain"
                    />
                  )}

                  {card.icon === "whatsapp" && (
                    <img
                      src="/whatsapp-logo.png"
                      alt="WhatsApp"
                      className="w-6 h-6 object-contain"
                    />
                  )}
                </div>

                {/* Eyebrow */}
                <p className="mt-6 text-[11px] sm:text-xs font-mono font-bold tracking-widest text-neutral-600 uppercase">
                  {card.eyebrow}
                </p>

                {/* Card Title */}
                <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-black tracking-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base text-neutral-800 font-normal leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Solid Yellow Button */}
              <div className="mt-8 sm:mt-10">
                <a
                  href={card.buttonHref}
                  target={card.isExternal ? "_blank" : undefined}
                  rel={card.isExternal ? "noopener noreferrer" : undefined}
                  {...(card.id === "call"
                    ? {
                        "data-cal-namespace": "30min",
                        "data-cal-link": "mohammad-zohaib-seahzf/30min",
                        "data-cal-config": '{"layout":"month_view","theme":"light"}',
                      }
                    : {})}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-4 rounded-xl border-[2.5px] border-black bg-[#FACC15] font-display font-extrabold text-sm sm:text-base text-black shadow-[4px_4px_0_0_#000000] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#000000] text-center select-none"
                >
                  {card.icon === "mail" && (
                    <img
                      src="/gmail-logo.png"
                      alt=""
                      className="w-4 h-auto object-contain shrink-0"
                    />
                  )}
                  {card.icon === "whatsapp" && (
                    <img
                      src="/whatsapp-logo.png"
                      alt=""
                      className="w-4 h-4 object-contain shrink-0"
                    />
                  )}
                  <span className="truncate">{card.buttonText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
