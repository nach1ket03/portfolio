"use client";

import { motion } from "framer-motion";
import { Github, MessageSquare } from "lucide-react";

export default function Guestbook() {
  return (
    <section id="guestbook" className="px-4 pb-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-8 flex items-center gap-4">
          <span
            className="text-[11px] text-neutral-700 uppercase tracking-[0.22em] font-medium"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Guestbook
          </span>
          <div className="h-px flex-1 bg-[#181818]" />
        </div>

        <div
          className="rounded-3xl overflow-hidden"
          style={{ background: "rgba(11,11,11,0.9)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="p-8 sm:p-10">
            <div className="flex items-start gap-4 mb-7">
              <div
                className="p-2.5 rounded-xl shrink-0"
                style={{ background: "rgba(17,17,17,1)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <MessageSquare size={15} className="text-neutral-600" />
              </div>
              <div>
                <h2
                  className="text-lg font-bold text-white mb-1 tracking-tight"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Leave a message
                </h2>
                <p className="text-neutral-600 text-sm leading-relaxed max-w-md">
                  Worked with me, reviewed my code, or just passing through? Drop a note — sign in with GitHub and leave something for the next visitor.
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              data-cursor-hover
              aria-label="Log in with GitHub to leave a guestbook message"
              className="flex items-center gap-2.5 bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors shadow-lg shadow-black/40"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <Github size={14} />
              Log in with GitHub
            </motion.button>

            <p className="text-neutral-800 text-[11px] mt-5" style={{ fontFamily: "var(--font-syne)" }}>
              Messages are public · No spam · Authenticated via GitHub OAuth
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
