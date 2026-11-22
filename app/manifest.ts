import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mohammad Zohaib — Software Engineer",
    short_name: "Mohd Zohaib",
    description:
      "Software & Systems Engineer building AI platforms, intuitive frontend design systems, and scalable backend infrastructure.",
    start_url: "/",
    display: "standalone",
    background_color: "#fef3c7",
    theme_color: "#fef3c7",
    icons: [
      {
        src: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
