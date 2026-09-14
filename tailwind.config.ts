import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#fef3c7",
        "canvas-nav": "#fde68a",
        "neo-yellow": "#facc15",
        "neo-blue": "#bfdbfe",
        "neo-pink": "#fce7f3",
        "neo-pink-accent": "#f472b6",
        "neo-purple": "#e9d5ff",
        "neo-green": "#bbf7d0",
        "neo-green-accent": "#34d399",
        "neo-coral": "#fca5a5",
        "neo-dark": "#0c2a2e",
      },
      boxShadow: {
        "neo-sm": "3px 3px 0 0 rgba(0, 0, 0, 0.9)",
        "neo": "5px 5px 0 0 rgba(0, 0, 0, 0.9)",
        "neo-lg": "7px 7px 0 0 rgba(0, 0, 0, 0.9)",
        "neo-card": "6px 6px 0 0 rgba(0, 0, 0, 0.9)",
      },
      borderWidth: {
        "3": "3px",
        "3.5": "3.5px",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "var(--font-inter)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        neo: {
          primary: "#facc15",
          secondary: "#bfdbfe",
          accent: "#f472b6",
          neutral: "#000000",
          "base-100": "#fef3c7",
          "base-200": "#fde68a",
          "base-300": "#fef08a",
          info: "#60a5fa",
          success: "#34d399",
          warning: "#facc15",
          error: "#f87171",
        },
      },
    ],
    defaultTheme: "neo",
  },
};
export default config;
