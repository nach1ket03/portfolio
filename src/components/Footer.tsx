"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="px-4 pb-10 max-w-5xl mx-auto">
      <div className="h-px bg-[#1a1a1a] mb-8" />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="flex items-center justify-between"
      >
        <p className="text-neutral-700 text-sm">
          © {new Date().getFullYear()} Nachiket. Built with Next.js &amp; Tailwind.
        </p>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white border border-[#262626] hover:border-white/20 rounded-xl px-3.5 py-2 transition-all"
        >
          Back to top
          <ArrowUp size={13} />
        </motion.button>
      </motion.div>
    </footer>
  );
}
