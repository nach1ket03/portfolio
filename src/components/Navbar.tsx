"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home",       label: "Home"       },
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects"   },
  { href: "#stack",      label: "Stack"      },
  { href: "#contact",    label: "Contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl"
    >
      <div
        className={`px-4 py-2.5 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)]"
            : ""
        }`}
        style={{
          background: scrolled
            ? "rgba(8,8,8,0.92)"
            : "rgba(8,8,8,0.6)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => setMobileOpen(false)}
            data-cursor-hover
            className="font-bold text-white text-sm tracking-tight transition-opacity hover:opacity-70"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            nachiket.
          </Link>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor-hover
                className="px-3 py-1.5 text-[13px] text-neutral-500 hover:text-white rounded-xl hover:bg-white/[0.04] transition-all duration-150"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            {/* Availability badge */}
            <div className="hidden sm:flex items-center gap-1.5 rounded-full px-2.5 py-1"
              style={{
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.14)",
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-emerald-500 text-[11px] font-medium tracking-wide" style={{ fontFamily: "var(--font-syne)" }}>
                Available
              </span>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              data-cursor-hover
              className="sm:hidden p-1.5 text-neutral-500 hover:text-white rounded-lg hover:bg-white/[0.04] transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden sm:hidden"
            >
              <div className="pt-3 pb-1 flex flex-col gap-0.5 border-t border-white/[0.05] mt-2.5">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-2 py-2.5 text-sm text-neutral-500 hover:text-white rounded-xl hover:bg-white/[0.04] transition-all"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="flex items-center gap-1.5 px-2 py-2.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-emerald-600 text-[11px]" style={{ fontFamily: "var(--font-syne)" }}>
                    Open to internships
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
