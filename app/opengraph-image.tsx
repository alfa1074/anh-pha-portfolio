import { ImageResponse } from "next/og";

import { site } from "@/lib/content";

export const runtime = "edge";
export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#09090b",
          color: "#fafafa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, color: "#a1a1aa" }}>{site.title}</div>
        <div style={{ fontSize: 84, fontWeight: 700, marginTop: 12 }}>
          {site.name}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            marginTop: 24,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Enterprise telecom software testing · Manual &amp; API testing ·
          Release validation
        </div>
      </div>
    ),
    { ...size }
  );
}
