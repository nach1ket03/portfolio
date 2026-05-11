import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nachiket — MERN Developer & AI Tools Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Lime glow */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,241,53,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(200,241,53,0.08)",
            border: "1px solid rgba(200,241,53,0.25)",
            borderRadius: 99,
            padding: "6px 16px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#c8f135",
            }}
          />
          <span style={{ color: "#c8f135", fontSize: 14, letterSpacing: "0.2em" }}>
            OPEN TO WORK
          </span>
        </div>

        {/* Headline */}
        <div style={{ color: "#ffffff", fontSize: 72, fontWeight: 800, lineHeight: 1.05, marginBottom: 20 }}>
          Nachiket.
        </div>
        <div style={{ color: "#555", fontSize: 32, marginBottom: 40 }}>
          MERN Developer &amp; AI Tools Builder
        </div>

        {/* Sub */}
        <div style={{ color: "#444", fontSize: 20 }}>
          Founder of Brink Co · Pune, India · nach1ket03
        </div>
      </div>
    ),
    size
  );
}
