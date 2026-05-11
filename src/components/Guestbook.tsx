"use client";

import { motion } from "framer-motion";
import { Github, MessageSquare } from "lucide-react";

const placeholderMessages = [
  {
    id: 1,
    initials: "HM",
    name: "Harsh M.",
    message: "Incredible work on the AURA Fitness app! The attention to detail is next level.",
    time: "2 days ago",
  },
  {
    id: 2,
    initials: "PS",
    name: "Priya S.",
    message: "Brink Co's website is stunning — those scroll animations are so smooth.",
    time: "5 days ago",
  },
  {
    id: 3,
    initials: "RK",
    name: "Rahul K.",
    message: "The face recognition project is impressive for an academic project. Clean code!",
    time: "1 week ago",
  },
];

export default function Guestbook() {
  return (
    <section id="guestbook" className="px-4 pb-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section label */}
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
          style={{
            background: "rgba(11,11,11,0.9)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Header */}
          <div className="p-8 border-b border-[#141414]">
            <div className="flex items-start gap-4 mb-7">
              <div
                className="p-2.5 rounded-xl shrink-0"
                style={{
                  background: "rgba(17,17,17,1)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
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
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Sign in with GitHub to drop a note for visitors.
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              data-cursor-hover
              className="flex items-center gap-2.5 bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors shadow-lg shadow-black/40"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <Github size={14} />
              Log in with GitHub
            </motion.button>
          </div>

          {/* Messages */}
          <div className="divide-y divide-[#111111]">
            {placeholderMessages.map((msg, i) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45, ease: "easeOut" }}
                className="flex items-start gap-4 px-8 py-5 hover:bg-white/[0.015] transition-colors duration-200"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-neutral-600 shrink-0"
                  style={{
                    background: "rgba(20,20,20,1)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  {msg.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2.5 mb-1">
                    <span
                      className="text-sm font-semibold text-white"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {msg.name}
                    </span>
                    <span className="text-xs text-neutral-800">{msg.time}</span>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed">{msg.message}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
