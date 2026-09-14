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
  dotColor: string;
  bgColor: string;
  bullets?: string[];
}

export const personalData = {
  firstName: "Mohammad",
  lastName: "Zohaib",
  eyebrow: "Hello, I'm",
  title: "Android Developer — Available for Hire",
  bio: "Software Dev Intern at Hyperzod, an AI-first quick commerce SaaS platform. Core background in Android/Kotlin development, currently expanding into Laravel, PHP, and Vue.js through the internship. Pursuing a B.Tech in Computer Science and Engineering.",
  bioHtml: `Software Dev Intern at <strong class="font-bold text-black">Hyperzod</strong>, an AI-first quick commerce SaaS platform. Core background in <strong class="font-bold text-black">Android/Kotlin</strong> development, currently expanding into <strong class="font-bold text-black">Laravel</strong>, <strong class="font-bold text-black">PHP</strong>, and <strong class="font-bold text-black">Vue.js</strong> through the internship. Pursuing a B.Tech in <strong class="font-bold text-black">Computer Science and Engineering</strong>.`,
  location: "BASED IN DELHI NCR · REMOTE FRIENDLY",
  photo: "/me.jpg",
  hireLink: "#contact",
  workLink: "#projects",
  navLinks: [
    { href: "#", label: "Home", bg: "#fef08a" },
    { href: "#projects", label: "Projects", bg: "#bfdbfe" },
    { href: "#blog", label: "Blog", bg: "#fce7f3" },
    { href: "#products", label: "Products", bg: "#e9d5ff" },
    { href: "#hire", label: "Hire Me", bg: "#bbf7d0" },
    { href: "#design", label: "Web Design", bg: "#fde68a" },
    { href: "#contact", label: "Get in Touch", bg: "#fca5a5" },
  ] as NavItem[],
  socials: [
    { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
    { platform: "github", href: "https://github.com", label: "GitHub" },
    { platform: "twitter", href: "https://x.com", label: "X / Twitter" },
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
      dotColor: "#EC4899",
      bgColor: "#FFE4EF",
      bullets: [
        "Architected and shipped native Android features using Kotlin, Jetpack Compose, and Coroutines, reducing app cold-start latency by 28%.",
        "Integrated real-time order tracking and dispatch workflows via WebSockets and REST APIs, handling 15,000+ daily quick-commerce transactions.",
        "Collaborated on backend API endpoints in Laravel (PHP) with MySQL, optimizing query performance and reducing payload serialization overhead by 35%.",
        "Developed reactive admin dashboard components using Vue.js and Tailwind CSS, improving multi-store inventory sync speed.",
        "Implemented offline-first caching mechanisms using Room database, ensuring 99.8% uptime during volatile network conditions.",
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
      dotColor: "#8B5CF6",
      bgColor: "#F3E8FF",
      bullets: [
        "Delivered a production-ready kiosk software solution for Vending Machine, integrating hardware controls, touch UI, and REST API communication to manage item selection, payment processing, and machine operation.",
      ],
    },
    {
      id: "education",
      type: "education",
      tag: "EDUCATION",
      title: "Education",
      role: "B.Tech in Computer Science and Engineering",
      organization: "University / Institute of Technology",
      location: "Delhi NCR, India",
      dateRange: "Aug 2022 - Jun 2026",
      dotColor: "#EC4899",
      bgColor: "#FFEEF8",
      bullets: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems, Operating Systems, Computer Networks.",
        "Active contributor to technical clubs and student developer communities, organizing hackathons and workshops on mobile application development.",
      ],
    },
  ] as TimelineEntry[],
};

