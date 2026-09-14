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
      location: "Delhi NCR, India (Hybrid)",
      dateRange: "May 2024 - Present",
      dotColor: "#ec4899",
      bgColor: "#ffe4ef",
      bullets: [
        "Architected and shipped native Android features using Kotlin, Jetpack Compose, and Coroutines, reducing app cold-start latency by 28%.",
        "Integrated real-time order tracking and dispatch workflows via WebSockets and REST APIs, handling 15,000+ daily quick-commerce transactions.",
        "Collaborated on backend API endpoints in Laravel (PHP) with MySQL, optimizing query performance and reducing payload serialization overhead by 35%.",
        "Developed reactive admin dashboard components using Vue.js and Tailwind CSS, improving multi-store inventory sync speed.",
        "Implemented offline-first caching mechanisms using Room database, ensuring 99.8% uptime during volatile network conditions.",
      ],
    },
    {
      id: "android-dev",
      type: "work",
      tag: "PROJECTS & OPEN SOURCE",
      title: "Android & Open Source",
      role: "Mobile Application Developer",
      organization: "Independent / Community",
      location: "Remote",
      dateRange: "Jan 2023 - Apr 2024",
      dotColor: "#f97316",
      bgColor: "#fff4ec",
      bullets: [
        "Built and published full-featured Android applications adhering to Clean Architecture and MVVM design patterns.",
        "Implemented modern UI using Jetpack Compose, Material Design 3, dynamic theming, and responsive layouts for multiple form factors.",
        "Leveraged Retrofit, OkHttp, and Dagger-Hilt for robust networking, dependency injection, and scalable state management.",
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
      dotColor: "#8b5cf6",
      bgColor: "#ffeef8",
      bullets: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems, Operating Systems, Computer Networks.",
        "Active contributor to technical clubs and student developer communities, organizing hackathons and workshops on mobile application development.",
      ],
    },
  ] as TimelineEntry[],
};

