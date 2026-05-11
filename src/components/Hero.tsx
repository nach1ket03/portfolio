"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, FileText, Search, ArrowUpRight } from "lucide-react";

const socials = [
  { href: "https://github.com/nach1ket03", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/nachiket", label: "LinkedIn", icon: Linkedin },
  { href: "https://x.com/nachiket", label: "X / Twitter", icon: Twitter },
];

export default function Hero() {
  const [chatFocused, setChatFocused] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-20 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.018] blur-[140px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-white/[0.01] blur-[100px]" />
      </div>

      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-10 text-center">
        {/* AI search bar */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div
            onClick={() => setChatFocused(true)}
            onBlur={() => setChatFocused(false)}
            tabIndex={0}
            className={`group relative flex items-center gap-3 px-5 py-4 rounded-2xl cursor-text bg-[#111111] border transition-all duration-200 outline-none ${
              chatFocused
                ? "border-white/20 shadow-lg shadow-white/[0.04]"
                : "border-[#262626] hover:border-white/10"
            }`}
          >
            <Search size={15} className="text-neutral-600 flex-shrink-0" />
            <span className="text-neutral-500 text-sm flex-1 text-left select-none">
              Ask me anything about my work...
            </span>
            <div className="hidden sm:flex items-center gap-1 flex-shrink-0">
              <kbd className="text-[11px] text-neutral-700 border border-[#2a2a2a] bg-[#1a1a1a] rounded-md px-1.5 py-0.5 font-mono leading-none">
                ↵
              </kbd>
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] text-white">
            Full-Stack Dev
            <br />
            <span className="text-neutral-500">&amp; College Student.</span>
          </h1>

          <p className="text-neutral-500 text-base sm:text-[17px] leading-relaxed max-w-md mx-auto">
            Building polished web products with modern tech. Founder of{" "}
            <a
              href="https://brinkco.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-400 transition-all"
            >
              Brink Co
            </a>
            . Based in Pune, India.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors shadow-lg shadow-black/30"
          >
            <FileText size={14} />
            View Resume
            <ArrowUpRight size={13} className="text-neutral-500" />
          </motion.a>

          <div className="flex items-center gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#111111] border border-[#262626] text-neutral-500 hover:text-white hover:border-white/20 hover:bg-[#191919] transition-all"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-700 pointer-events-none"
      >
        <span className="text-[9px] tracking-[0.22em] uppercase font-medium">scroll</span>
        <motion.div
          animate={{ scaleY: [1, 0.35, 1] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
          className="w-px h-7 bg-gradient-to-b from-neutral-600 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
