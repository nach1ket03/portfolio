"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { href: "https://github.com/nach1ket03", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/nachiket", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:nachiket@brinkco.in", label: "Email", icon: Mail },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="px-4 pb-10 max-w-5xl mx-auto">
      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#1e1e1e] to-transparent mb-10" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Left */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <span
            className="text-white font-bold text-sm"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            nachiket.
          </span>
          <p className="text-neutral-800 text-xs" style={{ fontFamily: "var(--font-syne)" }}>
            © {new Date().getFullYear()} · Built with Next.js &amp; Tailwind
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-2">
          {links.map(({ href, label, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={label}
              data-cursor-hover
              className="flex items-center justify-center w-9 h-9 rounded-xl text-neutral-700 hover:text-neutral-300 transition-all duration-200"
              style={{
                background: "rgba(14,14,14,0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <Icon size={14} />
            </motion.a>
          ))}
        </div>

        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          data-cursor-hover
          className="flex items-center gap-2 text-[12px] text-neutral-600 hover:text-neutral-300 border border-[#1e1e1e] hover:border-[#2e2e2e] rounded-xl px-3.5 py-2 transition-all duration-200"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          <span className="tracking-wide uppercase">Top</span>
          <ArrowUp size={11} />
        </motion.button>
      </motion.div>
    </footer>
  );
}
