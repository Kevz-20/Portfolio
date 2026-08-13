import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data";

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #0a0a0c 0%, #13131a 55%, #1c1c2a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 9999,
              background: "linear-gradient(135deg, #6366f1, #22d3ee)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            {SITE.initials}
          </div>
          <div style={{ fontSize: 30, color: "#9a9aa4" }}>{SITE.name}</div>
        </div>

        <div
          style={{
            marginTop: 48,
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 950,
            color: "#f4f4f5",
          }}
        >
          {SITE.role}
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            lineHeight: 1.4,
            maxWidth: 820,
            color: "#9a9aa4",
          }}
        >
          {SITE.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
