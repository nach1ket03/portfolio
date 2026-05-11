"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ArrowUpRight, Github, Linkedin, Twitter, Search, Sparkles } from "lucide-react";

const socials = [
  { href: "https://github.com/nach1ket03", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/nachiket", label: "LinkedIn", icon: Linkedin },
  { href: "https://x.com/nachiket", label: "X / Twitter", icon: Twitter },
];

/* Word-level mask reveal — each word slides up from below */
function WordReveal({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden" style={{ verticalAlign: "bottom" }}>
          <motion.span
            className="inline-block"
            initial={{ y: "112%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Staggered character reveal for the name */
function CharReveal({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span key={i} className="inline-block overflow-hidden" style={{ verticalAlign: "bottom" }}>
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.04,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Rotating words in the headline */
const rotatingPhrases = ["the web.", "real users.", "the future.", "Pune & beyond."];

export default function Hero() {
  const [chatFocused, setChatFocused] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-20 overflow-hidden"
    >
      {/* ── Atmospheric glows ─────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Central breathing glow */}
        <motion.div
          animate={{ opacity: [0.06, 0.12, 0.06], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Top-left accent */}
        <motion.div
          animate={{ opacity: [0.04, 0.09, 0.04] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(130,100,255,0.15) 0%, transparent 70%)",
          }}
        />
        {/* Bottom-right accent */}
        <motion.div
          animate={{ opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-32 -right-20 w-[450px] h-[450px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(60,160,255,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Dot-grid background ───────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
          maskImage: "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 75% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* ── Horizontal separator lines (cinematic) ───────────────────────── */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute top-[22%] left-0 right-0 h-px origin-left"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)" }}
      />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute bottom-[22%] left-0 right-0 h-px origin-right"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)" }}
      />

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-2xl flex flex-col items-center gap-9 text-center">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 rounded-full border border-[#222222] bg-[#111111]/80 px-3.5 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] font-medium tracking-wide text-neutral-400">
            Open to internships &amp; freelance
          </span>
        </motion.div>

        {/* Headline — cinematic word reveal */}
        <div className="space-y-1">
          <h1
            className="text-[clamp(2.8rem,9vw,5.5rem)] font-bold leading-[1.02] tracking-tight text-white"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="block">
              <WordReveal text="Full-Stack Dev" delay={0.25} />
            </span>
            <span className="block text-neutral-500">
              <WordReveal text="& College Student." delay={0.45} />
            </span>
          </h1>
        </div>

        {/* Rotating "Building for ___" line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex items-center gap-2 text-sm text-neutral-600 font-medium tracking-wide"
        >
          <span className="text-[11px] uppercase tracking-[0.2em]">Building for</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={phraseIndex}
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] uppercase tracking-[0.2em] text-neutral-400"
            >
              {rotatingPhrases[phraseIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-neutral-500 text-base sm:text-[17px] leading-relaxed max-w-md mx-auto"
        >
          Building polished web products &amp; AI tools with modern tech. Founder of{" "}
          <a
            href="https://brinkco.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 underline underline-offset-4 decoration-neutral-700 hover:text-white hover:decoration-neutral-400 transition-all duration-200"
          >
            Brink Co
          </a>
          . Based in Pune, India.
        </motion.p>

        {/* AI search bar — elevated premium feel */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div
            onClick={() => setChatFocused(true)}
            onBlur={() => setChatFocused(false)}
            tabIndex={0}
            data-cursor-hover
            className={`group relative flex items-center gap-3 px-5 py-4 rounded-2xl cursor-text transition-all duration-300 outline-none ${
              chatFocused
                ? "shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_8px_32px_rgba(0,0,0,0.4)]"
                : "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_4px_16px_rgba(0,0,0,0.3)]"
            }`}
            style={{
              background: chatFocused
                ? "rgba(17,17,17,0.95)"
                : "rgba(14,14,14,0.8)",
              border: chatFocused
                ? "1px solid rgba(255,255,255,0.14)"
                : "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Glow pulse on focus */}
            {chatFocused && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
                }}
              />
            )}

            <motion.div
              animate={{ rotate: chatFocused ? 360 : 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Sparkles size={14} className={chatFocused ? "text-neutral-300" : "text-neutral-700"} />
            </motion.div>

            <span className="text-neutral-600 text-sm flex-1 text-left select-none">
              Ask me anything about my work...
            </span>

            <div className="hidden sm:flex items-center gap-1 flex-shrink-0">
              <kbd className="text-[11px] text-neutral-700 border border-[#252525] bg-[#181818] rounded-md px-1.5 py-0.5 font-mono leading-none">
                ↵
              </kbd>
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            data-cursor-hover
            className="flex items-center gap-2 bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors shadow-lg shadow-black/40"
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
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.93 }}
                aria-label={label}
                data-cursor-hover
                className="flex items-center justify-center w-10 h-10 rounded-xl border text-neutral-600 hover:text-white transition-all duration-200"
                style={{
                  background: "rgba(14,14,14,0.8)",
                  borderColor: "rgba(255,255,255,0.07)",
                }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Cinematic scroll indicator ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-neutral-700 font-medium">
            scroll
          </span>
          <div className="w-px h-8 overflow-hidden rounded-full">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-full h-1/2 rounded-full"
              style={{
                background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.4), transparent)",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
