"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Quote, BarChart2 } from "lucide-react";
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiMongodb, SiFirebase,
  SiTypescript, SiNodedotjs, SiPython, SiVercel, SiGit,
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
    setSpotlight({
      x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
      y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
      opacity: 1,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((s) => ({ ...s, opacity: 0 }))}
      whileHover={{ scale: 1.015, transition: { duration: 0.22, ease: "easeOut" } }}
      className={`relative overflow-hidden rounded-3xl bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors duration-300 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 rounded-3xl"
        style={{
          opacity: spotlight.opacity,
          background: `radial-gradient(280px circle at ${spotlight.x} ${spotlight.y}, rgba(255,255,255,0.036) 0%, transparent 70%)`,
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

        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

          {/* Location — 2 cols */}
          <SpotlightCard className="lg:col-span-2 min-h-[11rem] p-6 flex flex-col justify-between">
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: "18px 18px" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0e0e0e]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-transparent to-[#0e0e0e]" />

            <div className="relative z-10">
              <div className="flex items-center gap-1.5 text-neutral-700 mb-2">
                <MapPin size={11} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ fontFamily: "var(--font-syne)" }}>
                  Location
                </span>
              </div>
              <p className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
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

          {/* Mindset quote (item 5 — replaces gym bars) */}
          <SpotlightCard className="min-h-[11rem] p-6 flex flex-col justify-between">
            <div className="flex items-center gap-1.5 text-neutral-700 mb-3">
              <Quote size={11} />
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium" style={{ fontFamily: "var(--font-syne)" }}>
                Mindset
              </span>
            </div>
            {/* Lime left-border blockquote */}
            <blockquote
              className="flex-1 flex items-center pl-4 text-neutral-400 text-[13px] leading-relaxed italic"
              style={{ borderLeft: "2px solid #c8f135" }}
            >
              "I approach code the way I approach training — progressive overload, daily reps, no shortcuts."
            </blockquote>
            <p className="text-neutral-700 text-[11px] mt-4" style={{ fontFamily: "var(--font-syne)" }}>
              — Gym since 2022 · Lean Bulking
            </p>
          </SpotlightCard>

          {/* Education */}
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
            <div>
              <p className="text-neutral-700 text-xs tracking-wide">Pune · 2024–2026</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
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

          {/* Tech Marquee — 2 cols */}
          <SpotlightCard className="lg:col-span-2 min-h-[11rem] flex flex-col justify-center gap-5 py-6 overflow-hidden">
            <div className="flex overflow-hidden">
              <div className="animate-marquee flex gap-10 pr-10 items-center">
                {[...techRow1, ...techRow1].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2.5 shrink-0">
                      <Icon size={16} className="text-neutral-600" />
                      <span className="text-neutral-600 text-[13px] whitespace-nowrap font-medium tracking-wide" style={{ fontFamily: "var(--font-syne)" }}>
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex overflow-hidden">
              <div className="animate-marquee-reverse flex gap-10 pr-10 items-center">
                {[...techRow2, ...techRow2].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2.5 shrink-0">
                      <Icon size={16} className="text-neutral-600" />
                      <span className="text-neutral-600 text-[13px] whitespace-nowrap font-medium tracking-wide" style={{ fontFamily: "var(--font-syne)" }}>
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0e0e0e] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0e0e0e] to-transparent pointer-events-none z-10" />
          </SpotlightCard>
        </div>

        {/* Row 2 — GitHub Stats (item 8) */}
        <motion.div variants={cardVariants} className="mt-3">
          <div
            className="relative overflow-hidden rounded-3xl bg-[#0e0e0e] border border-[#1e1e1e] p-6"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center gap-1.5 text-neutral-700">
                <BarChart2 size={11} />
                <span className="text-[11px] uppercase tracking-[0.22em] font-medium" style={{ fontFamily: "var(--font-syne)" }}>
                  GitHub Activity
                </span>
              </div>
              <div className="h-px flex-1 bg-[#181818]" />
              <a
                href="https://github.com/nach1ket03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile"
                className="text-[11px] text-neutral-700 hover:text-neutral-400 transition-colors"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                @nach1ket03 ↗
              </a>
            </div>

            <div className="flex justify-center">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=nach1ket03&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=c8f135&icon_color=c8f135&text_color=888888&count_private=true"
                alt="Nachiket's GitHub stats"
                width={495}
                height={195}
                loading="lazy"
                unoptimized
                className="max-w-full h-auto"
                style={{ filter: "contrast(1.05)" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
