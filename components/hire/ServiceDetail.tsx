import React from "react";

interface ServiceItem {
  title: string;
  description: string;
}

const serviceItems: ServiceItem[] = [
  {
    title: "Android app development",
    description:
      "Kotlin, Jetpack Compose, MVVM architecture, Room, on-device ML with MediaPipe/ML Kit.",
  },
  {
    title: "Full-stack web features",
    description:
      "Backend API development, database architecture, and reactive web interfaces with production experience from Hyperzod.",
  },
  {
    title: "AI-integrated tools",
    description:
      "CLI agents, on-device ML pipelines, LLM-powered features with real guardrails.",
  },
  {
    title: "Open source & side projects",
    description:
      "Happy to collaborate on or contribute to open-source tooling and small MVPs.",
  },
];

export const ServiceDetail: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b-[3.5px] border-black">
      <div className="mx-auto max-w-6xl">
        {/* Left-Aligned Header */}
        <div className="text-left">
          <h2 className="font-display text-[30px] sm:text-[40px] md:text-[46px] font-bold text-black tracking-tight leading-tight">
            Android &amp; Full-Stack Development
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-700 max-w-3xl leading-relaxed font-normal">
            I build native Android apps and modern full-stack web features, from fluid mobile UI to scalable APIs. Comfortable with AI integration (ML Kit, Gemini API) where it adds real value, not as a buzzword.
          </p>
        </div>

        {/* 2x2 Grid of White Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {serviceItems.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-start rounded-[18px] md:rounded-[22px] border-[3.5px] border-black bg-white p-6 sm:p-7 shadow-[5px_5px_0_0_#000000] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#000000]"
            >
              <h3 className="font-display text-lg sm:text-xl font-black text-black tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
