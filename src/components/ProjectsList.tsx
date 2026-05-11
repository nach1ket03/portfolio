"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "AURA Fitness",
    desc: "A luxury gym membership web application with Razorpay payment integration, animated UI, and a premium aesthetic. Built to demonstrate modern full-stack architecture with real-world payment flows.",
    tags: ["Next.js 16", "Tailwind v4", "MongoDB", "Razorpay", "Framer Motion"],
    github: "https://github.com/nach1ket03/luxury-gym-app",
    demo: null as string | null,
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Face Recognition Attendance",
    desc: "Academic engineering project that automates attendance using real-time facial detection and recognition. Processes live webcam feeds, matches against a registered database, and logs attendance records automatically.",
    tags: ["Python", "OpenCV", "NumPy", "UML", "SQLite"],
    github: "https://github.com/nach1ket03",
    demo: null as string | null,
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1400&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Brink Co — Agency Portfolio",
    desc: "Freelance web design & development agency site. Dark theme, lime accent, Syne typography. Targeting local Pune businesses with a cinematic, high-end portfolio look.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/nach1ket03/nachiket-brinkco",
    demo: "https://brinkco.in",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-3xl overflow-hidden transition-all duration-500"
      style={{
        background: hovered ? "rgba(16,16,16,0.98)" : "rgba(11,11,11,0.9)",
        border: hovered ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* Cinematic image reveal on hover */}
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* Text */}
        <div className="lg:col-span-3 p-7 sm:p-9 flex flex-col justify-between min-h-[260px]">
          <div>
            {/* Number + links */}
            <div className="flex items-start justify-between mb-6">
              <motion.span
                animate={{ opacity: hovered ? 0.04 : 0.08 }}
                className="text-[4.5rem] font-bold text-white select-none leading-none tabular-nums"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {project.num}
              </motion.span>

              {/* Links — slide in on hover */}
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-center gap-2 mt-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white border border-[#222] hover:border-[#333] bg-[#0d0d0d] rounded-xl px-3.5 py-2 transition-all duration-200"
                    >
                      <Github size={11} />
                      GitHub
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="flex items-center gap-1 text-xs text-neutral-500 hover:text-white border border-[#222] hover:border-[#333] bg-[#0d0d0d] rounded-xl px-3.5 py-2 transition-all duration-200"
                      >
                        <ArrowUpRight size={11} />
                        Live
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.h3
              animate={{ x: hovered ? 3 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-[1.4rem] sm:text-2xl font-bold text-white mb-3 leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {project.title}
            </motion.h3>
            <p className="text-neutral-600 text-sm leading-relaxed max-w-lg">{project.desc}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-neutral-700 border border-[#1c1c1c] rounded-full px-3 py-1 tracking-wide"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Image — cinematic reveal */}
        <div className="lg:col-span-2 relative overflow-hidden bg-[#0a0a0a] min-h-[200px] lg:min-h-0">
          <motion.div
            animate={{ scale: hovered ? 1.06 : 1.01 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              style={{
                opacity: hovered ? 0.55 : 0.2,
                transition: "opacity 0.8s ease",
              }}
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </motion.div>

          {/* Color tint on hover */}
          <motion.div
            animate={{ opacity: hovered ? 0.15 : 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(80,60,255,0.3), rgba(0,180,255,0.2))",
            }}
          />

          {/* Left-edge gradient blend */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent hidden lg:block" />

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent lg:hidden" />

          {/* Index overlay */}
          <div className="absolute bottom-4 right-4 lg:top-4 lg:right-4 lg:bottom-auto">
            <span
              className="text-[10px] text-neutral-700 tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {project.num} / 0{projects.length}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom border glow on hover */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-[10%] right-[10%] h-px origin-center"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)",
        }}
      />
    </motion.div>
  );
}

export default function ProjectsList() {
  return (
    <section id="projects" className="px-4 pb-24 max-w-5xl mx-auto">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-4"
      >
        <span
          className="text-[11px] text-neutral-700 uppercase tracking-[0.22em] font-medium"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Projects
        </span>
        <div className="h-px flex-1 bg-[#181818]" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="space-y-3"
      >
        {projects.map((project, index) => (
          <ProjectRow key={project.num} project={project} index={index} />
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center"
      >
        <motion.a
          href="https://github.com/nach1ket03"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          data-cursor-hover
          className="group inline-flex items-center gap-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-300 transition-colors duration-200"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <span className="text-[11px] uppercase tracking-[0.2em]">See all on GitHub</span>
          <motion.span
            animate={{ x: 0 }}
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={14} />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
