import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mohammad Zohaib — AI Engineer & Software Developer India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#fef3c7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            background: "#000",
          }}
        />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                background: "#000",
                color: "#fef3c7",
                padding: "6px 16px",
                borderRadius: "999px",
                fontSize: "18px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              AI Engineer · Software Developer
            </div>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "86px",
              fontWeight: 900,
              color: "#000",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            Mohammad
            <br />
            Zohaib
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          {/* Skills pills */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["LLM Pipelines", "Android", "Next.js", "Laravel"].map((skill) => (
              <div
                key={skill}
                style={{
                  border: "2px solid #000",
                  padding: "8px 20px",
                  borderRadius: "999px",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "#000",
                  background: "transparent",
                }}
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Domain */}
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#000",
              opacity: 0.6,
            }}
          >
            mohdzohaib.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
