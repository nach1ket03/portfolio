"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const TILE_IMAGES = {
  education:
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
  work:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  location:
    "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1200&auto=format&fit=crop",
  gym:
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  default:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
} as const;

type TileKey = keyof typeof TILE_IMAGES;

export function About() {
  const [activeTile, setActiveTile] = useState<TileKey | null>(null);
  const currentImage = activeTile ? TILE_IMAGES[activeTile] : TILE_IMAGES.default;

  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 pb-32 pt-0"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="mb-10 text-center">
        <h2
          className="text-3xl font-bold sm:text-5xl md:text-6xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          About <span className="text-gradient-shimmer">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-[9rem_auto_9rem]">
        {/* Mobile: name card */}
        <article
          className="md:hidden col-span-1 row-span-1 rounded-2xl border p-6"
          style={{ borderColor: "var(--card-border)", background: "linear-gradient(135deg, var(--card), var(--card-border))" }}
        >
          <p
            className="text-xs uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}
          >
            Profile
          </p>
          <h3
            className="mt-2 text-3xl font-black leading-[1.05]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nachiket
          </h3>
          <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
            Full Stack Developer
          </p>
        </article>

        {/* Mobile: center image */}
        <article className="md:hidden aspect-square overflow-hidden rounded-2xl border" style={{ borderColor: "var(--card-border)" }}>
          <Image
            src={TILE_IMAGES.default}
            alt="Code"
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
        </article>

        {/* Desktop: name card */}
        <article
          className="hidden md:flex col-span-1 row-span-1 rounded-2xl border p-7"
          style={{ borderColor: "var(--card-border)", background: "linear-gradient(135deg, var(--card), var(--card-border))" }}
        >
          <div className="flex w-full flex-col justify-center text-center">
            <p
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}
            >
              Profile
            </p>
            <h3
              className="mt-2 text-4xl font-black leading-[1.05]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Nachiket
            </h3>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>
              Full Stack Developer
            </p>
          </div>
        </article>

        {/* Education tile */}
        <article
          onMouseEnter={() => setActiveTile("education")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-2 row-span-1 rounded-2xl border p-5 transition-all duration-200"
          style={{
            borderColor: "var(--card-border)",
            background: "linear-gradient(135deg, var(--card), var(--card-border))",
          }}
        >
          <h3
            className="text-sm font-bold uppercase"
            style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}
          >
            Education & Experience
          </h3>
          <p className="mt-2 text-xs leading-relaxed sm:text-sm" style={{ color: "var(--muted)" }}>
            MCA (Data Science) at MIT ADT University, Pune · Data Analyst Intern at Tata Advanced Systems Limited (TASL), Nagpur.
          </p>
        </article>

        {/* Craft / Stack tile */}
        <article
          onMouseEnter={() => setActiveTile("work")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-1 row-span-2 rounded-2xl border p-5 md:col-start-3 md:row-start-2 transition-all duration-200"
          style={{ borderColor: "var(--card-border)", background: "linear-gradient(135deg, var(--card), var(--card-border))" }}
        >
          <h3 className="text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Craft
          </h3>
          <p className="mt-2 text-xs leading-relaxed sm:text-sm" style={{ color: "var(--muted)" }}>
            Vibe-coding with Cursor + Claude for architecture. Ship fast, iterate faster.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Next.js", "React", "Node", "MongoDB", "Python"].map((t) => (
              <span
                key={t}
                className="rounded-full border px-2 py-1 text-[10px]"
                style={{ borderColor: "rgba(200,241,53,0.2)", color: "var(--muted)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        {/* Location tile */}
        <article
          onMouseEnter={() => setActiveTile("location")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-1 row-span-1 h-full min-h-[9rem] rounded-2xl border overflow-hidden relative transition-all duration-200"
          style={{ borderColor: "var(--card-border)" }}
        >
          <Image
            src={TILE_IMAGES.location}
            alt="Pune"
            fill
            className="object-cover opacity-60"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-3">
            <p className="text-xl font-bold leading-none" style={{ fontFamily: "var(--font-display)" }}>
              Pune
            </p>
            <p className="text-[11px]" style={{ color: "var(--muted)" }}>GMT+5:30</p>
          </div>
        </article>

        {/* Mindset tile */}
        <article
          onMouseEnter={() => setActiveTile("gym")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-1 row-span-2 rounded-2xl border p-5 md:col-start-1 md:row-start-2 transition-all duration-200"
          style={{ borderColor: "var(--card-border)", background: "linear-gradient(135deg, var(--card), var(--card-border))" }}
        >
          <h3 className="text-sm font-bold" style={{ fontFamily: "var(--font-display)" }}>
            Beyond Code
          </h3>
          <p className="mt-2 text-xs leading-relaxed sm:text-sm" style={{ color: "var(--muted)" }}>
            Gym every afternoon. Self-taught guitar. Urdu/Hindi shayari. Building Tōmei 耐 — quiet endurance over noise.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <Image
              src={TILE_IMAGES.gym}
              alt="Lifestyle"
              width={700}
              height={900}
              className="h-44 w-full object-cover opacity-80"
            />
          </div>
        </article>

        {/* Desktop: animated center image */}
        <article className="hidden md:block aspect-square col-start-2 row-start-2 rounded-2xl border overflow-hidden relative" style={{ borderColor: "var(--card-border)" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={currentImage}
                alt="Context"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </article>
      </div>
    </section>
  );
}
