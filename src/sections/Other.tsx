"use client";

import { motion } from "framer-motion";
import { Briefcase, Globe, Mail } from "lucide-react";

export function Other() {
  const items = [
    {
      key: "brinkco",
      icon: Globe,
      title: "Brink Co",
      desc: "My freelance web design & dev agency. Building sites for cafes, gyms, and salons across Pune.",
      href: "https://brinkco.in",
      color: "from-lime-400 to-emerald-500",
      external: true,
    },
    {
      key: "work",
      icon: Briefcase,
      title: "Open to Internships",
      desc: "Actively looking for MERN Stack or AI/ML internships. Let's build something together.",
      href: "#about",
      color: "from-yellow-400 to-orange-400",
      external: false,
    },
    {
      key: "contact",
      icon: Mail,
      title: "Get in Touch",
      desc: "Have a project or opportunity in mind? Drop me an email or find me on GitHub.",
      href: "mailto:nachiket@brinkco.in",
      color: "from-sky-400 to-blue-500",
      external: true,
    },
  ];

  return (
    <section
      id="other"
      className="relative overflow-hidden pt-0 pb-24 sm:pb-32"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2
            className="mb-4 px-2 text-3xl font-bold text-pretty sm:text-5xl md:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let's{" "}
            <span className="text-gradient-shimmer">Connect</span>
          </h2>
          <p className="mx-auto max-w-2xl px-3 text-base sm:text-lg md:text-xl" style={{ color: "var(--muted)" }}>
            Always building, always learning. Here's where to find more.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <motion.a
              key={item.key}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group glass relative cursor-pointer overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:scale-105 sm:p-8"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
              />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                <div className={`h-16 w-16 rounded-2xl bg-linear-to-br ${item.color} p-0.5`}>
                  <div
                    className="flex h-full w-full items-center justify-center rounded-2xl"
                    style={{ backgroundColor: "var(--background)" }}
                  >
                    <item.icon size={32} style={{ color: "var(--foreground)" }} />
                  </div>
                </div>
                <div>
                  <h3
                    className={`bg-linear-to-br ${item.color} mb-2 bg-clip-text px-1 text-xl font-bold text-transparent sm:text-2xl`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="px-1 text-xs sm:text-sm" style={{ color: "var(--muted)" }}>
                    {item.desc}
                  </p>
                </div>
                <div
                  className={`bg-linear-to-br ${item.color} mt-2 bg-clip-text text-sm font-semibold text-transparent transition-transform duration-300 group-hover:translate-x-2`}
                >
                  Explore →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
