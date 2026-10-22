import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// The preview image when a DAS Digital link is shared (LinkedIn, Facebook, texts…).
export const alt = "DAS Digital: Smarter Technology. Simpler Business.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The full logo (icon, name and tagline as outlines), read at build time so it renders in the brand fonts.
const LOGO = `data:image/svg+xml;base64,${readFileSync(join(process.cwd(), "public/brand/das-digitalai-logo-horizontal.svg")).toString("base64")}`;

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
          background: "#ffffff",
          borderTop: "16px solid #9333ea",
          color: "#0f172a",
          fontFamily: "sans-serif",
        }}
      >
        <img src={LOGO} width={610} height={80} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 1000 }}>
            Smarter Technology. Simpler Business.
          </div>
          <div style={{ fontSize: 30, color: "#475569" }}>
            Websites · AI Receptionists · Business Automation · Technology Consulting
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#7e22ce" }}>dasdigitalai.com</div>
      </div>
    ),
    size
  );
}
