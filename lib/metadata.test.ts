import { describe, it, expect } from "vitest";
import robots from "../app/robots";
import sitemap from "../app/sitemap";
import manifest from "../app/manifest";

describe("robots()", () => {
  it("configures wildcard crawler rules with proper allow and disallow paths", () => {
    const config = robots();
    expect(config.rules).toBeDefined();

    const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
    const wildcardRule = rules.find((r) => r.userAgent === "*");
    expect(wildcardRule).toBeDefined();
    expect(wildcardRule?.allow).toBe("/");
    expect(wildcardRule?.disallow).toEqual(["/api/", "/_next/"]);
  });

  it("points to the canonical sitemap and host", () => {
    const config = robots();
    expect(config.sitemap).toBe("https://mohdzohaib.com/sitemap.xml");
    expect(config.host).toBe("https://mohdzohaib.com");
  });
});

describe("sitemap()", () => {
  it("includes all core public routes with valid priorities", () => {
    const entries = sitemap();
    const expectedPaths = [
      "",
      "/projects",
      "/hire",
      "/blog",
      "/design",
      "/products",
      "/contact",
    ];

    const urls = entries.map((entry) => entry.url);
    for (const path of expectedPaths) {
      expect(urls).toContain(`https://mohdzohaib.com${path}`);
    }

    // Validate priorities and frequencies
    for (const entry of entries) {
      expect(entry.priority).toBeGreaterThanOrEqual(0.0);
      expect(entry.priority).toBeLessThanOrEqual(1.0);
      expect(entry.lastModified).toBeInstanceOf(Date);
      expect([
        "always",
        "hourly",
        "daily",
        "weekly",
        "monthly",
        "yearly",
        "never",
      ]).toContain(entry.changeFrequency);
    }

    const homeEntry = entries.find((e) => e.url === "https://mohdzohaib.com");
    expect(homeEntry?.priority).toBe(1.0);
  });
});

describe("manifest()", () => {
  it("provides valid PWA metadata and icon declarations", () => {
    const pwa = manifest();
    expect(pwa.name).toContain("Mohammad Zohaib");
    expect(pwa.start_url).toBe("/");
    expect(pwa.display).toBe("standalone");
    expect(pwa.theme_color).toBe("#fef3c7");
    expect(pwa.background_color).toBe("#fef3c7");

    expect(pwa.icons?.length).toBeGreaterThanOrEqual(3);
    const sizes = pwa.icons?.map((icon) => icon.sizes);
    expect(sizes).toContain("32x32");
    expect(sizes).toContain("180x180");
    expect(sizes).toContain("512x512");
  });
});
