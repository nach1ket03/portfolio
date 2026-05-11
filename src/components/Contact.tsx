"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

const socials = [
  { href: "https://github.com/nach1ket03",          label: "GitHub",    icon: Github   },
  { href: "https://linkedin.com/in/nachiket-chole", label: "LinkedIn",  icon: Linkedin },
  { href: "https://x.com/nach1ket03",               label: "X/Twitter", icon: Twitter  },
  { href: "mailto:nachiket@brinkco.in",             label: "Email",     icon: Mail     },
];

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID
      ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
      : null;

    if (!endpoint) {
      // Fallback: open mailto
      const name    = formData.get("name")    as string;
      const message = formData.get("message") as string;
      window.location.href = `mailto:nachiket@brinkco.in?subject=Portfolio%20message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-700 outline-none transition-all duration-200 focus:border-[rgba(200,241,53,0.3)] focus:shadow-[0_0_0_1px_rgba(200,241,53,0.08)]";
  const inputStyle = {
    background: "rgba(10,10,10,0.9)",
    border: "1px solid rgba(255,255,255,0.07)",
    fontFamily: "var(--font-syne)",
  };

  return (
    <section id="contact" className="px-4 pb-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section label */}
        <div className="mb-8 flex items-center gap-4">
          <span
            className="text-[11px] text-neutral-700 uppercase tracking-[0.22em] font-medium"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Contact
          </span>
          <div className="h-px flex-1 bg-[#181818]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
          {/* ── Left — heading + socials ── */}
          <div
            className="lg:col-span-2 rounded-3xl p-7 sm:p-8 flex flex-col justify-between gap-8"
            style={{ background: "rgba(11,11,11,0.9)", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-3"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Let&apos;s work
                <br />
                <span style={{ color: "#c8f135" }}>together.</span>
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Open to MERN internships, AI projects, and freelance web work. Response within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:nachiket@brinkco.in"
                aria-label="Email Nachiket"
                className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition-colors duration-200 group"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors duration-200 group-hover:border-[rgba(200,241,53,0.2)]"
                  style={{ background: "rgba(14,14,14,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <Mail size={13} />
                </div>
                nachiket@brinkco.in
              </a>

              <div className="flex gap-2 pt-1">
                {socials.map(({ href, label, icon: Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={label}
                    whileHover={{ scale: 1.08, y: -1 }}
                    whileTap={{ scale: 0.93 }}
                    data-cursor-hover
                    className="flex items-center justify-center w-9 h-9 rounded-xl text-neutral-700 hover:text-white transition-all duration-200"
                    style={{ background: "rgba(14,14,14,0.8)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <Icon size={14} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right — form ── */}
          <div
            className="lg:col-span-3 rounded-3xl p-7 sm:p-8"
            style={{ background: "rgba(11,11,11,0.9)", border: "1px solid rgba(255,255,255,0.05)" }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center gap-4 py-10"
              >
                <CheckCircle size={36} style={{ color: "#c8f135" }} />
                <div>
                  <p className="text-white font-semibold text-lg" style={{ fontFamily: "var(--font-syne)" }}>
                    Message sent!
                  </p>
                  <p className="text-neutral-600 text-sm mt-1">I&apos;ll get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[11px] text-neutral-600 hover:text-neutral-300 transition-colors mt-2"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Name"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="sr-only">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="Email"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="sr-only">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What are you working on? Tell me about the project or opportunity..."
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                  />
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-400 text-xs">
                    <AlertCircle size={13} />
                    <span>Something went wrong. Try emailing directly instead.</span>
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={status !== "sending" ? { scale: 1.02, y: -1 } : {}}
                  whileTap={status !== "sending" ? { scale: 0.97 } : {}}
                  data-cursor-hover
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 disabled:opacity-60"
                  style={{
                    background: "#c8f135",
                    color: "#080808",
                    fontFamily: "var(--font-syne)",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="inline-block"
                      >
                        <Send size={14} />
                      </motion.span>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Send message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
