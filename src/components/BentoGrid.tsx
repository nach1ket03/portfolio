"use client";

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
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.012, transition: { duration: 0.18 } }}
      className={`relative overflow-hidden rounded-3xl bg-[#111111] border border-[#262626] hover:border-white/10 transition-colors duration-200 ${className}`}
    >
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
        <motion.div variants={cardVariants} className="mb-6 flex items-center gap-3">
          <span className="text-xs text-neutral-600 uppercase tracking-[0.18em] font-medium">
            About
          </span>
          <div className="h-px flex-1 bg-[#1e1e1e]" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Location — spans 2 cols on lg */}
          <BentoCard className="lg:col-span-2 min-h-45 p-6 flex flex-col justify-between">
            {/* Dot-map pattern */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
            {/* Fade edges */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#111111]" />
            <div className="absolute inset-0 bg-linear-to-r from-[#111111] via-transparent to-[#111111]" />

            <div className="relative z-10">
              <div className="flex items-center gap-1.5 text-neutral-600 mb-2">
                <MapPin size={12} />
                <span className="text-[10px] uppercase tracking-[0.18em] font-medium">Location</span>
              </div>
              <p className="text-2xl font-bold text-white tracking-tight">Pune, India</p>
              <p className="text-neutral-600 text-sm mt-0.5">GMT +5:30</p>
            </div>

            <div className="relative z-10 flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-neutral-500 text-sm">Open to remote &amp; relocation</span>
            </div>
          </BentoCard>

          {/* Fitness */}
          <BentoCard className="min-h-45 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-neutral-600 mb-2">
                <Dumbbell size={12} />
                <span className="text-[10px] uppercase tracking-[0.18em] font-medium">Lifestyle</span>
              </div>
              <p className="text-xl font-bold text-white leading-tight">Lean Bulking</p>
              <p className="text-neutral-500 text-sm mt-1 leading-relaxed">
                Bodybuilding &amp; fitness discipline. 6AM sessions, progressive overload, consistent nutrition.
              </p>
            </div>

            <div className="space-y-1.5 mt-3">
              {[
                { label: "Consistency", pct: 82 },
                { label: "Discipline", pct: 90 },
              ].map(({ label, pct }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="text-[10px] text-neutral-700 w-20 shrink-0">{label}</span>
                  <div className="h-1 flex-1 rounded-full bg-[#1e1e1e] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                      className="h-full bg-neutral-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Education */}
          <BentoCard className="min-h-45 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-neutral-600 mb-2">
                <GraduationCap size={12} />
                <span className="text-[10px] uppercase tracking-[0.18em] font-medium">Education</span>
              </div>
              <p className="text-xl font-bold text-white leading-tight">MCA — Data Science</p>
              <p className="text-neutral-500 text-sm mt-1">MIT ADT University</p>
            </div>
            <div className="space-y-1">
              <p className="text-neutral-600 text-xs">Pune · 2024–2026</p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["MERN", "ML", "Python", "DSA"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-neutral-600 border border-[#222222] rounded-full px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Tech Marquee — spans 2 cols on lg */}
          <BentoCard className="lg:col-span-2 min-h-45 flex flex-col justify-center gap-4 py-6 overflow-hidden">
            {/* Row 1 */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee flex gap-8 pr-8 items-center">
                {[...techRow1, ...techRow1].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 shrink-0">
                      <Icon size={17} className="text-neutral-500" />
                      <span className="text-neutral-500 text-sm whitespace-nowrap font-medium">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 2 — reversed */}
            <div className="flex overflow-hidden">
              <div className="animate-marquee-reverse flex gap-8 pr-8 items-center">
                {[...techRow2, ...techRow2].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 shrink-0">
                      <Icon size={17} className="text-neutral-500" />
                      <span className="text-neutral-500 text-sm whitespace-nowrap font-medium">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Side fade gradients */}
            <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#111111] to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[#111111] to-transparent pointer-events-none z-10" />
          </BentoCard>
        </div>
      </motion.div>
    </section>
  );
}
