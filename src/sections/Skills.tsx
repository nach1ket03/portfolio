"use client";

import { motion } from "framer-motion";
import {
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export function Skills() {
  const beltChunk = [...Array(4)].flatMap(() => [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Python", icon: SiPython, color: "#F7C948" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  ]);

  const skillGroups = [
    {
      title: "Frontend",
      summary: "Polished, animated UIs that convert.",
      items: ["Next.js (Pages/App Router)", "React + TypeScript", "Tailwind + Framer Motion"],
    },
    {
      title: "Backend",
      summary: "APIs, auth, and server-side logic.",
      items: ["Node.js + Express + REST", "MongoDB / Mongoose", "Auth, JWT, rate-limiting"],
    },
    {
      title: "AI & Tools",
      summary: "Integrating AI into real products.",
      items: ["Anthropic API (Claude)", "Python + ML basics", "Cursor + Vercel deployment"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden pt-0 pb-28"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="section">
        <div className="text-center">
          <span
            className="text-xs font-bold uppercase tracking-widest sm:text-base"
            style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}
          >
            Tech stack
          </span>
          <h2
            className="mt-2 px-2 text-3xl font-bold tracking-tight text-pretty sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skills{" "}
            <span className="text-gradient-shimmer">Overview</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border p-5"
              style={{
                borderColor: "var(--card-border)",
                background: "linear-gradient(135deg, var(--card), var(--card-border))",
              }}
            >
              <h3
                className="text-base font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {group.title}
              </h3>
              <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>
                {group.summary}
              </p>
              <ul className="mt-3 space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                {group.items.map((item) => (
                  <li key={item}>→ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-8 rounded-2xl border py-3"
          style={{ borderColor: "var(--card-border)", backgroundColor: "rgba(17,17,16,0.4)" }}
        >
          <div className="relative overflow-hidden">
            <motion.div
              className="flex w-max items-center gap-8 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 28,
              }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center gap-8 px-4">
                  {beltChunk.map((item, index) => (
                    <div key={`${copy}-${item.name}-${index}`} className="flex items-center gap-2">
                      <item.icon style={{ color: item.color }} size={16} />
                      <span
                        className="text-xs uppercase tracking-wider"
                        style={{ color: "var(--muted)" }}
                      >
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
