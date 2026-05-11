"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#guestbook", label: "Guestbook" },
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
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl"
    >
      <div
        className={`px-4 py-2.5 rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? "bg-black/80 border-white/10 shadow-2xl shadow-black/60"
            : "bg-black/40 border-white/6"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link
            href="#home"
            onClick={() => setMobileOpen(false)}
            className="font-semibold text-white text-sm tracking-tight"
          >
            nachiket.
          </Link>

          <nav className="hidden sm:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm text-neutral-400 hover:text-white rounded-lg hover:bg-white/6 transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-1.5 bg-emerald-500/8 border border-emerald-500/20 rounded-full px-2.5 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 text-[11px] font-medium tracking-tight">
                Available for work
              </span>
            </div>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="sm:hidden p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/6 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden sm:hidden"
            >
              <div className="pt-3 pb-1 flex flex-col gap-0.5 border-t border-white/6 mt-2.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-2 py-2.5 text-sm text-neutral-400 hover:text-white rounded-xl hover:bg-white/6 transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center gap-1.5 px-2 py-2.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <span className="text-emerald-400 text-xs">Available for work</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
