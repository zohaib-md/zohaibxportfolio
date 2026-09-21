export interface NavItem {
  href: string;
  label: string;
  bg: string;
}

export interface SocialLink {
  platform: "linkedin" | "github" | "twitter";
  href: string;
  label: string;
}

export interface TimelineEntry {
  id: string;
  type: "work" | "education";
  tag: string;
  title: string;
  role: string;
  organization: string;
  location: string;
  dateRange: string;
  dateRangeFormatted?: string;
  projectCount?: string;
  dotColor: string;
  bgColor: string;
  bullets?: string[];
}

export interface ProjectEntry {
  id: string;
  title: string;
  year: string;
  techSummary: string;
  techList: string[];
  description: string;
  githubUrl: string;
  monogram: string;
  accentBg?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  tagline?: string;
  description?: string;
  theme?: "yellow" | "dark" | "lavender";
  badge?: string;
  price?: string;
  tags?: string[];
  ctaText?: string;
  href?: string;
  githubUrl?: string;
  coffeeUrl?: string;
  isPlaceholder?: boolean;
}

export const personalData = {
  firstName: "Mohammad",
  lastName: "Zohaib",
  eyebrow: "Hello, I'm",
  title: "Software Developer · Available for Hire",
  bio: "Focused on mobile systems and building agentic AI systems, LLM pipelines, and AI workflow automation that power production AI products. Core background in Android and Kotlin development, currently interning at Hyperzod across Laravel, PHP, and Vue.js while pursuing a B.Tech in Information Technology.",
  bioHtml: `Focused on mobile systems and building agentic AI systems, LLM pipelines, and AI workflow automation that power production AI products. Core background in Android and Kotlin development, currently interning at Hyperzod across Laravel, PHP, and Vue.js while pursuing a B.Tech in Information Technology.`,
  location: "BASED IN DELHI NCR · REMOTE FRIENDLY",
  photo: "/me.jpg",
  hireLink: "/hire",
  workLink: "#projects",
  navLinks: [
    { href: "/", label: "Home", bg: "#fef08a" },
    { href: "/projects", label: "Projects", bg: "#bfdbfe" },
    { href: "/blog", label: "Blog", bg: "#fce7f3" },
    { href: "/products", label: "Products", bg: "#e9d5ff" },
    { href: "/hire", label: "Hire Me", bg: "#bbf7d0" },
    { href: "/design", label: "Web Design", bg: "#fde68a" },
    { href: "/contact", label: "Get in Touch", bg: "#fca5a5" },
  ] as NavItem[],
  socials: [
    { platform: "linkedin", href: "https://www.linkedin.com/in/mohammad-zohaib-279794204/", label: "LinkedIn" },
    { platform: "github", href: "https://github.com/zohaib-md", label: "GitHub" },
    { platform: "twitter", href: "https://x.com/zohaib_kt", label: "X / Twitter" },
  ] as SocialLink[],
  timelineData: [
    {
      id: "hyperzod",
      type: "work",
      tag: "INTERNSHIP",
      title: "Hyperzod",
      role: "Software Development Intern",
      organization: "Hyperzod",
      location: "Lucknow, India (On-site)",
      dateRange: "June 2026 - Present",
      dateRangeFormatted: "June 2026 → Present",
      projectCount: "1 Project",
      dotColor: "#EC4899",
      bgColor: "#FFE4EF",
      bullets: [
        "Working on Zonrad, an AI-first agents platform, developing the zonrad-sdk for creating autonomous agents with client-side tool execution, token observability, and runtime orchestration.",
        "Worked on modular Theme Builder components in Vue.js and Tailwind CSS, enabling multi-tenant storefront customization and real-time layout configuration.",
        "Collaborated on backend API endpoints in Laravel (PHP) with MySQL, optimizing query performance and reducing payload serialization overhead by 35%.",
        "Developed reactive admin dashboard components using Vue.js and Tailwind CSS, improving multi-store inventory sync speed.",
      ],
    },
    {
      id: "lettrblack",
      type: "work",
      tag: "INTERNSHIP",
      title: "LettrBlack",
      role: "Android Lead & Developer",
      organization: "LettrBlack",
      location: "Bengaluru, India (Remote)",
      dateRange: "Feb 2026 - Jul 2026",
      dateRangeFormatted: "Feb 2026 → Jul 2026",
      projectCount: "1 Project",
      dotColor: "#F97316",
      bgColor: "#FFF4EC",
      bullets: [
        "Led the Android development team by managing pull requests, assigning tasks, and driving technical execution.",
        "Enforced Clean Architecture and MVVM principles to maintain a scalable, modular, and production-ready codebase.",
        "Collaborated with backend engineers on API design and integration, enabling parallel development and faster feature delivery.",
        "Built highly interactive Android screens using Jetpack Compose, including Smart Flashcards with 3D card transitions and gamified accountability features.",
        "Engineered a lifecycle-aware Focus Timer using Kotlin Coroutines and StateFlow to manage distraction-free study sessions and user streaks.",
        "Integrated REST APIs with Retrofit, migrating the app from Firebase to a Spring Boot backend secured with JWT authentication.",
        "Developed features including authentication, leaderboards, LettrCoins wallet, daily streaks, and user profile management.",
      ],
    },
    {
      id: "innovative-technology",
      type: "work",
      tag: "FREELANCE",
      title: "Innovative Technology Ltd",
      role: "Android Developer",
      organization: "Innovative Technology Ltd",
      location: "England, United Kingdom (Remote)",
      dateRange: "September 2025 - October 2025",
      dateRangeFormatted: "Sep 2025 → Oct 2025",
      projectCount: "1 Project",
      dotColor: "#8B5CF6",
      bgColor: "#F3E8FF",
      bullets: [
        "Delivered a production-ready kiosk software solution for Vending Machine, integrating hardware controls, touch UI, and REST API communication to manage item selection, payment processing, and machine operation.",
      ],
    },
    {
      id: "education",
      type: "education",
      tag: "ENGINEERING",
      title: "Education",
      role: "B.Tech in Information Technology",
      organization: "AKGEC",
      location: "Ghaziabad, Delhi NCR, India",
      dateRange: "2023-27",
      dateRangeFormatted: "2023-27",
      projectCount: "AKGEC",
      dotColor: "#EC4899",
      bgColor: "#FFEEF8",
      bullets: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems, Operating Systems, Computer Networks.",
        "Active contributor to technical clubs and student developer communities, organizing hackathons and workshops on mobile application development.",
      ],
    },
  ] as TimelineEntry[],
  projectsData: [
    {
      id: "zonrad",
      title: "Zonrad",
      year: "2026-Present",
      techSummary: "Python · Next.js · TypeScript · React · LLM APIs · Agent Orchestration",
      techList: [
        "Python",
        "Next.js",
        "TypeScript",
        "React",
        "LLM APIs",
        "Agent Orchestration",
      ],
      description:
        "An AI-native workspace for orchestrating autonomous agents, contextual reasoning, and tool-driven workflows: built to turn complex tasks into structured, actionable execution.",
      githubUrl: "https://github.com/zohaib-md/zonrad",
      monogram: "ZR",
      accentBg: "#FEF08A",
    },
    {
      id: "avatarx",
      title: "AvatarX",
      year: "2026",
      techSummary: "Kotlin · Android · MediaPipe · ML Kit · Gemini 2.5",
      techList: ["Kotlin", "Android", "MediaPipe", "ML Kit", "Gemini 2.5"],
      description:
        "On-device Android app mapping body biometrics to a digital avatar for virtual try-on. Combines MediaPipe pose detection and ML Kit segmentation with Gemini 2.5 for AI-driven styling. All running fully on-device, no cloud or AR engine dependency.",
      githubUrl: "https://github.com/zohaib-md/AvatarX",
      monogram: "AX",
      accentBg: "#EFF6FF",
    },
    {
      id: "miniseek",
      title: "MiniSeek",
      year: "2026",
      techSummary: "Python · Edge AI · Local-first",
      techList: ["Python", "Edge AI", "Local-first"],
      description:
        "Local-first agent harness built for edge hardware (M1, 8GB RAM), with zero third-party dependencies and 138 passing tests. Uses a \"model proposes, harness validates, Python executes\" architecture for safe, constrained agent execution.",
      githubUrl: "https://github.com/zohaib-md/miniseek",
      monogram: "MS",
      accentBg: "#F0FDF4",
    },
    {
      id: "ratchet",
      title: "Ratchet",
      year: "2026",
      techSummary: "Python · AI Safety · Eval/Benchmarking",
      techList: ["Python", "AI Safety", "Eval/Benchmarking"],
      description:
        "An empirical benchmark testing whether harness-level constraints (vs. prompt-only rules) reduce dangerous agent actions. Achieved 0/30 catastrophic failures once permission layers were added. Evaluation-driven research into agent reliability, not just a demo.",
      githubUrl: "https://github.com/zohaib-md/ratchet",
      monogram: "RT",
      accentBg: "#FEF2F2",
    },
    {
      id: "inbox-triage-agent",
      title: "inbox-triage-agent",
      year: "2026",
      techSummary: "Python · Google ADK · Agent Guardrails",
      techList: ["Python", "Google ADK", "Agent Guardrails"],
      description:
        "Google ADK-based email triage agent with a 10-case evaluation suite (10/10 passing) and an explicit no-auto-send safety guardrail. A compact, well-scoped example of applied agent design with real safety constraints.",
      githubUrl: "https://github.com/zohaib-md/inbox-triage-agent",
      monogram: "IT",
      accentBg: "#FFFBEB",
    },
    {
      id: "expectr",
      title: "Expectr",
      year: "2026",
      techSummary: "Kotlin · Jetpack Compose · Gemini API · SQLite",
      techList: ["Kotlin", "Jetpack Compose", "Gemini API", "SQLite"],
      description:
        "AI-powered personal finance app, 100% Jetpack Compose, with Gemini-driven spending insights and a custom \"financial health score.\" Built offline-first with SQLite over cloud sync, and a custom REST client instead of SDK bloat.",
      githubUrl: "https://github.com/zohaib-md/expectr",
      monogram: "EX",
      accentBg: "#F5F3FF",
    },
    {
      id: "foundry",
      title: "Foundry",
      year: "2026",
      techSummary: "Vue 3 · Laravel · Pinia · PostgreSQL",
      techList: ["Vue 3", "Laravel", "Pinia", "PostgreSQL"],
      description:
        "A visual drag-and-drop page builder built with Vue 3 and Laravel, featuring Pinia for state management, with dynamic component trees serialized to Postgres. Demonstrates full-stack web breadth outside the mobile/Python work above.",
      githubUrl: "https://github.com/zohaib-md/foundry",
      monogram: "FD",
      accentBg: "#FFF7ED",
    },
    {
      id: "zenith-launcher",
      title: "Zenith Launcher",
      year: "2025",
      techSummary: "Kotlin · Android · Jetpack Compose",
      techList: ["Kotlin", "Android", "Jetpack Compose"],
      description:
        "A custom Android home-screen launcher focused on digital wellbeing with dynamic wallpaper-based theming and built-in friction timers to reduce mindless app usage.",
      githubUrl: "https://github.com/zohaib-md/zenith-launcher",
      monogram: "ZL",
      accentBg: "#ECFDF5",
    },
  ] as ProjectEntry[],
  productsData: [
    {
      id: "jobbie",
      name: "Jobbie",
      tagline: "Privacy-first job applications.",
      description:
        "A local CLI + Agent Skill that onboards your résumé, checks keyword gaps against postings, and drafts cover letters from verified facts: no data leaves your machine, nothing gets auto-submitted.",
      tags: ["CLI", "Open Source", "Privacy"],
      theme: "yellow",
      badge: "Free & Open Source",
      ctaText: "Learn more →",
      href: "https://github.com/zohaib-md/jobbie",
      githubUrl: "https://github.com/zohaib-md/jobbie",
      coffeeUrl: "https://buymeacoffee.com/mohammadzohaib",
    },
    {
      id: "uxray",
      name: "UXRay",
      tagline: "Dark Pattern HUD for Android.",
      description:
        "A system-wide Android overlay that inspects on-screen UI via an AccessibilityService and AI inference, showing a floating HUD badge whenever manipulative or deceptive UX patterns are detected in real time.",
      tags: ["Android", "Accessibility", "Open Source"],
      theme: "lavender",
      badge: "Free & Open Source",
      ctaText: "Learn more →",
      href: "https://github.com/zohaib-md/UXRay",
      githubUrl: "https://github.com/zohaib-md/UXRay",
      coffeeUrl: "https://buymeacoffee.com/mohammadzohaib",
    },
  ] as ProductItem[],
};

