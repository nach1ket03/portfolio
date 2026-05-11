"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
    title: "Face Recognition Attendance System",
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
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function ProjectsList() {
  return (
    <section id="projects" className="px-4 pb-24 max-w-5xl mx-auto">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-6 flex items-center gap-3"
      >
        <span className="text-xs text-neutral-600 uppercase tracking-[0.18em] font-medium">
          Projects
        </span>
        <div className="h-px flex-1 bg-[#1e1e1e]" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
        className="space-y-3"
      >
        {projects.map((project) => (
          <motion.div
            key={project.num}
            variants={itemVariants}
            whileHover={{ scale: 1.003 }}
            className="group relative rounded-3xl bg-[#111111] border border-[#262626] hover:border-white/10 overflow-hidden transition-colors duration-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Text — 3 cols */}
              <div className="lg:col-span-3 p-8 flex flex-col justify-between min-h-[260px]">
                <div>
                  {/* Number + links */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-6xl font-bold text-[#1c1c1c] select-none leading-none tabular-nums">
                      {project.num}
                    </span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-1">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-white border border-[#262626] hover:border-white/20 bg-[#0d0d0d] rounded-xl px-3 py-1.5 transition-all"
                      >
                        <Github size={12} />
                        GitHub
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-neutral-500 hover:text-white border border-[#262626] hover:border-white/20 bg-[#0d0d0d] rounded-xl px-3 py-1.5 transition-all"
                        >
                          <ArrowUpRight size={12} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{project.desc}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-neutral-500 border border-[#222222] rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image — 2 cols */}
              <div className="lg:col-span-2 relative overflow-hidden bg-[#0d0d0d] min-h-[220px] lg:min-h-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                {/* Left fade into card text */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#111111] to-transparent hidden lg:block" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
