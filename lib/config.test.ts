import { describe, it, expect } from "vitest";
import nextConfig from "../next.config.mjs";

describe("next.config.mjs", () => {
  it("enables AVIF and WebP image optimization", () => {
    expect(nextConfig.images?.formats).toContain("image/avif");
    expect(nextConfig.images?.formats).toContain("image/webp");
  });

  it("configures all baseline security response headers for all routes", async () => {
    expect(typeof nextConfig.headers).toBe("function");
    const routeHeaders = await nextConfig.headers!();

    const wildcardRule = routeHeaders.find((r) => r.source === "/:path*");
    expect(wildcardRule).toBeDefined();

    const headerMap = new Map(
      wildcardRule?.headers.map((h) => [h.key, h.value])
    );

    expect(headerMap.get("X-Content-Type-Options")).toBe("nosniff");
    expect(headerMap.get("Referrer-Policy")).toBe(
      "strict-origin-when-cross-origin"
    );
    expect(headerMap.get("X-Frame-Options")).toBe("SAMEORIGIN");
    expect(headerMap.get("Permissions-Policy")).toBe(
      "camera=(), microphone=(), geolocation=(), payment=()"
    );
  });
});
