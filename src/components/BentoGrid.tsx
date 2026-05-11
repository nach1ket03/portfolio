"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Dumbbell } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiVercel,
  SiGit,
} from "react-icons/si";

const techRow1 = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiMongodb, name: "MongoDB" },
];

const techRow2 = [
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiPython, name: "Python" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiGit, name: "Git" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

/* Spotlight hover effect — gradient follows mouse within the card */
function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: "50%", y: "50%", opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x: `${x}%`, y: `${y}%`, opacity: 1 });
  };

  const handleMouseLeave = () => setSpotlight((s) => ({ ...s, opacity: 0 }));

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.015, transition: { duration: 0.22, ease: "easeOut" } }}
      className={`relative overflow-hidden rounded-3xl bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors duration-300 ${className}`}
    >
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 rounded-3xl"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(280px circle at ${spotlight.x} ${spotlight.y}, rgba(255,255,255,0.038) 0%, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section id="stack" className="px-4 pb-24 max-w-5xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={containerVariants}
      >
        {/* Section label */}
        <motion.div variants={cardVariants} className="mb-8 flex items-center gap-4">
          <span
            className="text-[11px] text-neutral-700 uppercase tracking-[0.22em] font-medium"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            About
          </span>
          <div className="h-px flex-1 bg-[#181818]" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

          {/* ── Location — 2 cols ── */}
          <SpotlightCard className="lg:col-span-2 min-h-[11rem] p-6 flex flex-col justify-between">
            {/* Dot-map pattern */}
            <div
              className="absolute inset-0 opacity-[0.055]"
              style={{
                backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                backgroundSize: "18px 18px",
              }}
            />
            {/* Fade edges */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0e0e0e]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-transparent to-[#0e0e0e]" />

            <div className="relative z-10">
              <div className="flex items-center gap-1.5 text-neutral-700 mb-2">
                <MapPin size={11} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ fontFamily: "var(--font-syne)" }}>
                  Location
                </span>
              </div>
              <p
                className="text-2xl font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Pune, India
              </p>
              <p className="text-neutral-700 text-sm mt-0.5">GMT +5:30</p>
            </div>

            <div className="relative z-10 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-neutral-600 text-sm">Open to remote &amp; relocation</span>
            </div>
          </SpotlightCard>

          {/* ── Fitness ── */}
          <SpotlightCard className="min-h-[11rem] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-neutral-700 mb-2">
                <Dumbbell size={11} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ fontFamily: "var(--font-syne)" }}>
                  Lifestyle
                </span>
              </div>
              <p className="text-xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
                Lean Bulking
              </p>
              <p className="text-neutral-600 text-sm mt-1.5 leading-relaxed">
                Bodybuilding &amp; fitness discipline. 6AM sessions, progressive overload, consistent nutrition.
              </p>
            </div>

            <div className="space-y-2 mt-4">
              {[
                { label: "Consistency", pct: 82 },
                { label: "Discipline", pct: 90 },
              ].map(({ label, pct }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-[10px] text-neutral-700 w-20 shrink-0" style={{ fontFamily: "var(--font-syne)" }}>
                    {label}
                  </span>
                  <div className="h-px flex-1 rounded-full bg-[#1e1e1e] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-neutral-600"
                    />
                  </div>
                  <span className="text-[10px] text-neutral-700 w-7 text-right">{pct}%</span>
                </div>
              ))}
            </div>
          </SpotlightCard>

          {/* ── Education ── */}
          <SpotlightCard className="min-h-[11rem] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-neutral-700 mb-2">
                <GraduationCap size={11} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ fontFamily: "var(--font-syne)" }}>
                  Education
                </span>
              </div>
              <p className="text-xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
                MCA — Data Science
              </p>
              <p className="text-neutral-600 text-sm mt-1">MIT ADT University</p>
            </div>
            <div className="space-y-2">
              <p className="text-neutral-700 text-xs tracking-wide">Pune · 2024–2026</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {["MERN", "ML", "Python", "DSA"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-neutral-700 border border-[#1e1e1e] rounded-full px-2 py-0.5 tracking-wide"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* ── Tech Marquee — 2 cols ── */}
          <SpotlightCard className="lg:col-span-2 min-h-[11rem] flex flex-col justify-center gap-5 py-6 overflow-hidden">
            {/* Row 1 */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee flex gap-10 pr-10 items-center">
                {[...techRow1, ...techRow1].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2.5 shrink-0">
                      <Icon size={16} className="text-neutral-600" />
                      <span
                        className="text-neutral-600 text-[13px] whitespace-nowrap font-medium tracking-wide"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2 — reversed */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee-reverse flex gap-10 pr-10 items-center">
                {[...techRow2, ...techRow2].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2.5 shrink-0">
                      <Icon size={16} className="text-neutral-600" />
                      <span
                        className="text-neutral-600 text-[13px] whitespace-nowrap font-medium tracking-wide"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Side fade gradients */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0e0e0e] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0e0e0e] to-transparent pointer-events-none z-10" />
          </SpotlightCard>
        </div>
      </motion.div>
    </section>
  );
}
