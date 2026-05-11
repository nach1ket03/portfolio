"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

const experience = {
  company: "Tata Advanced Systems Limited (TASL)",
  role: "Data Analyst Intern",
  location: "Nagpur, India",
  duration: "Jan 2025 – Apr 2025 · 3 months",
  manager: "Prabhanjan Gondhalekar",
  tech: ["Python", "Pandas", "NumPy", "Data Pipelines", "Reporting Automation"],
  bullets: [
    "Designed and automated reporting pipelines in Python, reducing manual data processing time by ~60% across multiple internal dashboards.",
    "Built data cleaning and transformation scripts using Pandas that standardised inconsistent source datasets, improving downstream report accuracy.",
    "Delivered weekly analytical reports to the reporting manager, translating raw operational data into actionable insights for the engineering team.",
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="px-4 pb-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section label */}
        <div className="mb-8 flex items-center gap-4">
          <span
            className="text-[11px] text-neutral-700 uppercase tracking-[0.22em] font-medium"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Experience
          </span>
          <div className="h-px flex-1 bg-[#181818]" />
        </div>

        {/* Timeline card */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "rgba(11,11,11,0.9)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Lime accent bar — the timeline stripe */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-3xl"
            style={{ background: "linear-gradient(to bottom, #c8f135, #a3d900)" }}
          />

          <div className="pl-8 pr-7 py-8 sm:pl-10 sm:pr-9 sm:py-9">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase size={13} style={{ color: "#c8f135" }} />
                  <span
                    className="text-[11px] uppercase tracking-[0.22em] font-medium"
                    style={{ color: "#c8f135", fontFamily: "var(--font-syne)" }}
                  >
                    Internship
                  </span>
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-white leading-tight tracking-tight mb-0.5"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {experience.role}
                </h3>
                <p className="text-neutral-400 text-sm font-medium">{experience.company}</p>
              </div>

              <div className="flex flex-col gap-1.5 sm:items-end shrink-0 mt-1">
                <div className="flex items-center gap-1.5 text-neutral-600 text-xs">
                  <CalendarDays size={11} />
                  <span style={{ fontFamily: "var(--font-syne)" }}>{experience.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-600 text-xs">
                  <MapPin size={11} />
                  <span style={{ fontFamily: "var(--font-syne)" }}>{experience.location}</span>
                </div>
                <span className="text-neutral-800 text-xs" style={{ fontFamily: "var(--font-syne)" }}>
                  Reporting to: {experience.manager}
                </span>
              </div>
            </div>

            {/* Bullet points */}
            <ul className="space-y-3 mb-7">
              {experience.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.45, ease: "easeOut" }}
                  className="flex items-start gap-3 text-neutral-500 text-sm leading-relaxed"
                >
                  <span className="mt-[6px] h-1 w-1 rounded-full shrink-0" style={{ background: "#c8f135" }} />
                  {bullet}
                </motion.li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {experience.tech.map((t) => (
                <span
                  key={t}
                  className="text-[11px] rounded-full px-3 py-1 tracking-wide"
                  style={{
                    fontFamily: "var(--font-syne)",
                    color: "#c8f135",
                    background: "rgba(200,241,53,0.06)",
                    border: "1px solid rgba(200,241,53,0.18)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
