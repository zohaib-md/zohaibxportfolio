import React from "react";

interface ResumeButtonProps {
  className?: string;
  onClick?: () => void;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({
  className = "",
  onClick,
}) => {
  return (
    <div className={`relative flex flex-col sm:inline-flex items-center ${className}`}>
      {/* Clickable Neo-brutalist White Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download resume"
        title="Download my Resume (PDF)"
        onClick={onClick}
        className="group relative z-10 inline-flex items-center justify-center bg-white border-[3.5px] border-black shadow-[6px_6px_0_0_#000000] rotate-[3deg] select-none cursor-pointer transition-all duration-150 ease-out hover:rotate-[6deg] hover:bg-[#fef9c3] hover:shadow-[8px_8px_0_0_#000000] hover:-translate-y-1 hover:-translate-x-0.5 active:scale-[0.96] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_0_#000000] active:rotate-[2deg] px-5 sm:px-6 py-2.5 sm:py-3"
      >
        {/* Document Icon */}
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-black transition-transform duration-150 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
        <span className="font-display font-black text-sm sm:text-base tracking-wider uppercase text-black">
          Resume
        </span>
      </a>

      {/* Hand-drawn "Download my Resume" doodle with arrow pointing towards the button */}
      <div
        className="pointer-events-none mt-2 sm:mt-0 sm:absolute sm:right-[calc(100%-14px)] sm:top-[calc(100%+10px)] w-44 sm:w-52 md:w-56 -ml-12 sm:ml-0 select-none z-20"
        aria-hidden="true"
      >
        <img
          src="/download-my-resume-doodle.png"
          alt=""
          className="w-full h-auto object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,0.06)]"
        />
      </div>
    </div>
  );
};
