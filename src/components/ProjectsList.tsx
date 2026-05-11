"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, ChevronDown } from "lucide-react";
import ProjectPlaceholder from "@/components/ProjectPlaceholder";

interface CaseStudy {
  problem: string;
  solution: string;
  stack: string;
  challenges: string;
  outcome: string;
}

interface Project {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  badges: string[];
  github: string;
  demo: string | null;
  image: string | null;
  caseStudy?: CaseStudy;
}

const projects: Project[] = [
  {
    num: "01",
    title: "AURA Fitness",
    desc: "A luxury gym membership web application with Razorpay payment integration, animated UI, and a premium aesthetic. Built to demonstrate modern full-stack architecture with real-world payment flows.",
    tags: ["Next.js 16", "Tailwind v4", "MongoDB", "Razorpay", "Framer Motion"],
    badges: ["Featured"],
    github: "https://github.com/nach1ket03/luxury-gym-app",
    demo: null,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop",
    caseStudy: {
      problem:
        "Boutique gyms in India lack affordable, modern SaaS tools for membership management. Existing solutions are bloated, expensive, or built for Western markets — not INR payments or local business workflows.",
      solution:
        "Built a full-stack membership platform with tiered plans, Razorpay-powered payment flows, and a member dashboard. Designed to be deployable by any gym owner with zero technical knowledge.",
      stack:
        "Next.js 16 (App Router) for SSR and API routes. MongoDB with Mongoose for flexible, schema-less member data. Razorpay for native INR payment processing. Framer Motion for premium UX animations. Tailwind v4 for utility-first styling.",
      challenges:
        "Razorpay webhook signature verification required careful HMAC-SHA256 implementation to prevent replay attacks. Tailwind v4's migration broke several utility classes that needed manual porting. MongoDB session handling across multiple tabs required careful state synchronisation.",
      outcome:
        "Fully functional demo with live payment flow, member dashboard, and plan management. Demonstrates end-to-end full-stack ownership from DB schema to payment webhooks.",
    },
  },
  {
    num: "02",
    title: "ReView — AI Review Analyser",
    desc: "AI-powered product review summarisation and fact-checking web app. Uses the Anthropic API to extract key sentiments, flag misleading claims, and generate structured summaries from raw user reviews.",
    tags: ["Next.js", "Anthropic API", "TypeScript", "Tailwind"],
    badges: ["AI", "Featured"],
    github: "https://github.com/nach1ket03",
    demo: null,
    image: null,
  },
  {
    num: "03",
    title: "Face Recognition Attendance",
    desc: "Academic engineering project that automates attendance using real-time facial detection and recognition. Processes live webcam feeds, matches against a registered database, and logs records automatically.",
    tags: ["Python", "OpenCV", "NumPy", "UML", "SQLite"],
    badges: [],
    github: "https://github.com/nach1ket03",
    demo: null,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1400&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Brink Co — Agency Portfolio",
    desc: "Freelance web design & development agency site targeting local Pune businesses. Dark theme, lime accent, Syne typography, and cinematic scroll animations — built as Nachiket's agency brand.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    badges: ["Freelance"],
    github: "https://github.com/nach1ket03/nachiket-brinkco",
    demo: "https://brinkco.in",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
  },
  {
    num: "05",
    title: "InternBot — AI Outreach Tool",
    desc: "Self-contained HTML app using the Anthropic API to help students discover internship opportunities and generate personalised cold email drafts — from first search to sent email in under 2 minutes.",
    tags: ["HTML", "Vanilla JS", "Anthropic API", "Claude"],
    badges: ["AI", "LLM"],
    github: "https://github.com/nach1ket03",
    demo: null,
    image: null,
  },
  {
    num: "06",
    title: "LUMIÈRE — Luxury Salon Site",
    desc: "Premium salon website for a high-end client. Dark aesthetic, cinematic scroll animations, and a bespoke appointment-ready layout — designed to attract and convert luxury clientele.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    badges: ["Freelance", "Client"],
    github: "https://github.com/nach1ket03/lumiere",
    demo: null,
    image: null,
  },
];

const badgeColors: Record<string, { bg: string; color: string; border: string }> = {
  Featured:  { bg: "rgba(200,241,53,0.07)", color: "#c8f135",         border: "rgba(200,241,53,0.22)" },
  AI:        { bg: "rgba(139,92,246,0.08)", color: "rgb(167,139,250)", border: "rgba(139,92,246,0.2)" },
  LLM:       { bg: "rgba(139,92,246,0.08)", color: "rgb(167,139,250)", border: "rgba(139,92,246,0.2)" },
  Freelance: { bg: "rgba(251,191,36,0.07)", color: "rgb(251,191,36)",  border: "rgba(251,191,36,0.2)" },
  Client:    { bg: "rgba(251,191,36,0.07)", color: "rgb(251,191,36)",  border: "rgba(251,191,36,0.2)" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

function CaseStudySection({ cs }: { cs: CaseStudy }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      <div
        className="mx-7 sm:mx-9 mb-8 mt-0 rounded-2xl p-6 space-y-5"
        style={{ background: "rgba(8,8,8,0.8)", border: "1px solid rgba(200,241,53,0.1)" }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="h-px flex-1" style={{ background: "rgba(200,241,53,0.15)" }} />
          <span
            className="text-[10px] uppercase tracking-[0.25em] font-medium"
            style={{ color: "#c8f135", fontFamily: "var(--font-syne)" }}
          >
            Case Study
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(200,241,53,0.15)" }} />
        </div>

        {[
          { label: "Problem", text: cs.problem },
          { label: "Solution", text: cs.solution },
          { label: "Stack Decisions", text: cs.stack },
          { label: "Challenges", text: cs.challenges },
          { label: "Outcome", text: cs.outcome },
        ].map(({ label, text }) => (
          <div key={label}>
            <span
              className="text-[10px] uppercase tracking-[0.2em] font-semibold block mb-1"
              style={{ color: "#c8f135", fontFamily: "var(--font-syne)" }}
            >
              {label}
            </span>
            <p className="text-neutral-500 text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

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
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {/* ── Text ── */}
        <div className="lg:col-span-3 p-7 sm:p-9 flex flex-col justify-between min-h-[260px]">
          <div>
            {/* Number + badges + links */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-start gap-3">
                <motion.span
                  animate={{ opacity: hovered ? 0.04 : 0.07 }}
                  className="text-[4rem] font-bold text-white select-none leading-none tabular-nums"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {project.num}
                </motion.span>
                {project.badges.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {project.badges.map((b) => {
                      const style = badgeColors[b] ?? badgeColors.Featured;
                      return (
                        <span
                          key={b}
                          className="text-[9px] rounded-full px-2 py-0.5 tracking-wide font-semibold"
                          style={{
                            fontFamily: "var(--font-syne)",
                            background: style.bg,
                            color: style.color,
                            border: `1px solid ${style.border}`,
                          }}
                        >
                          {b}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>

              <AnimatePresence>
                {hovered && (
                  <motion.div
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.22 }}
                    className="flex items-center gap-2 mt-1"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
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
                        aria-label={`${project.title} live demo`}
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

          {/* Tags + case study toggle */}
          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap gap-2">
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

            {project.caseStudy && (
              <button
                onClick={() => setCaseStudyOpen((v) => !v)}
                data-cursor-hover
                className="flex items-center gap-1.5 text-[11px] font-medium transition-colors duration-200"
                style={{
                  color: caseStudyOpen ? "#c8f135" : "rgba(200,241,53,0.55)",
                  fontFamily: "var(--font-syne)",
                }}
              >
                <motion.span animate={{ rotate: caseStudyOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown size={13} />
                </motion.span>
                {caseStudyOpen ? "Hide case study" : "Read case study"}
              </button>
            )}
          </div>
        </div>

        {/* ── Image / Placeholder ── */}
        <div className="lg:col-span-2 relative overflow-hidden bg-[#0a0a0a] min-h-[200px] lg:min-h-0">
          {project.image ? (
            <>
              <motion.div
                animate={{ scale: hovered ? 1.06 : 1.01 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  loading="lazy"
                  className="object-cover"
                  style={{ opacity: hovered ? 0.55 : 0.2, transition: "opacity 0.8s ease" }}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </motion.div>
              <motion.div
                animate={{ opacity: hovered ? 0.15 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
                style={{ background: "linear-gradient(135deg, rgba(80,60,255,0.3), rgba(0,180,255,0.2))" }}
              />
            </>
          ) : (
            <ProjectPlaceholder title={project.title} tags={project.tags} />
          )}

          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent hidden lg:block" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent lg:hidden" />

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

      {/* Case study expand */}
      <AnimatePresence>
        {project.caseStudy && caseStudyOpen && (
          <CaseStudySection cs={project.caseStudy} />
        )}
      </AnimatePresence>

      {/* Bottom border glow */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-[10%] right-[10%] h-px origin-center"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }}
      />
    </motion.div>
  );
}

export default function ProjectsList() {
  return (
    <section id="projects" className="px-4 pb-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
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
        {projects.map((project) => (
          <ProjectRow key={project.num} project={project} />
        ))}
      </motion.div>

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
          aria-label="See all projects on GitHub"
          whileHover={{ y: -2 }}
          data-cursor-hover
          className="group inline-flex items-center gap-2.5 text-neutral-600 hover:text-neutral-300 transition-colors duration-200"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <span className="text-[11px] uppercase tracking-[0.2em]">See all on GitHub</span>
          <ArrowUpRight size={14} />
        </motion.a>
      </motion.div>
    </section>
  );
}
