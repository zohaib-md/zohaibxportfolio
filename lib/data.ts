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

export const personalData = {
  firstName: "Mohammad",
  lastName: "Zohaib",
  eyebrow: "Hello, I'm",
  title: "Android Developer — Available for Hire",
  bio: "Software Dev Intern at Hyperzod, an AI-first quick commerce SaaS platform. Core background in Android/Kotlin development, currently expanding into Laravel, PHP, and Vue.js through the internship. Pursuing a B.Tech in Computer Science and Engineering.",
  bioHtml: `Software Dev Intern at <strong class="font-bold text-black">Hyperzod</strong>, an AI-first quick commerce SaaS platform. Core background in <strong class="font-bold text-black">Android/Kotlin</strong> development, currently expanding into <strong class="font-bold text-black">Laravel</strong>, <strong class="font-bold text-black">PHP</strong>, and <strong class="font-bold text-black">Vue.js</strong> through the internship. Pursuing a B.Tech in <strong class="font-bold text-black">Computer Science and Engineering</strong>.`,
  location: "BASED IN SRINAGAR · REMOTE FRIENDLY",
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
};
