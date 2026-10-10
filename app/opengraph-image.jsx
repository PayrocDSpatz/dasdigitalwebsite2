import { ImageResponse } from "next/og";

// The preview image when a DAS Digital link is shared (LinkedIn, Facebook, texts…).
export const alt = "DAS Digital: automation, AI and custom software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #070910 0%, #1e0b3a 55%, #4c1d95 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 700 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(90deg,#9333ea,#c026d3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 800 }}>D</div>
          DAS Digital
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.05, maxWidth: 1000 }}>
            Automation, AI and custom software that does the busywork.
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,0.75)" }}>
            Workflows · AI follow-up · Dashboards · Vertical SaaS
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#d8b4fe" }}>dasdigitalai.com</div>
      </div>
    ),
    size
  );
}
