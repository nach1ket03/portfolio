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
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section label */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-xs text-neutral-600 uppercase tracking-[0.18em] font-medium">
            Guestbook
          </span>
          <div className="h-px flex-1 bg-[#1e1e1e]" />
        </div>

        <div className="rounded-3xl bg-[#111111] border border-[#262626] overflow-hidden">
          {/* Header / Login */}
          <div className="p-8 border-b border-[#1a1a1a]">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-2.5 rounded-xl bg-[#191919] border border-[#262626] shrink-0">
                <MessageSquare size={16} className="text-neutral-500" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white mb-1 tracking-tight">
                  Leave a message
                </h2>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Sign in with your GitHub account to drop a note for visitors.
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 bg-white text-black font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-neutral-100 transition-colors shadow-lg shadow-black/30"
            >
              <Github size={15} />
              Log in with GitHub to leave a message
            </motion.button>
          </div>

          {/* Messages list */}
          <div className="divide-y divide-[#161616]">
            {placeholderMessages.map((msg, i) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                className="flex items-start gap-4 px-8 py-5"
              >
                <div className="w-8 h-8 rounded-full bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center text-[10px] font-bold text-neutral-500 shrink-0">
                  {msg.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-white">{msg.name}</span>
                    <span className="text-xs text-neutral-700">{msg.time}</span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">{msg.message}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
