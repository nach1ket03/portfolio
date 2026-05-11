export function Hero() {
  return (
    <section
      id="home"
      className="section relative flex min-h-[100svh] items-center overflow-hidden pb-32 pt-24 sm:pt-32 lg:min-h-[112vh]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
        <div className="absolute right-0 bottom-6 h-72 w-72 rounded-full bg-lime-300/8 blur-3xl" />
      </div>

      <div className="grid w-full items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p
            className="text-xs uppercase tracking-[0.25em] sm:text-sm"
            style={{ color: "var(--accent)", fontFamily: "var(--font-display)" }}
          >
            Full Stack Developer · Pune, IN
          </p>
          <h1
            className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Nachiket.
            <br />
            <span className="text-gradient-shimmer">Code. Ship. Repeat.</span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg" style={{ color: "var(--muted)" }}>
            MERN Stack & AI/ML developer. Founder of{" "}
            <a
              href="https://brinkco.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors"
              style={{ color: "var(--accent)" }}
            >
              Brink Co
            </a>
            {" "}— building web products that actually work.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full px-5 py-2 text-sm font-semibold text-black transition-all hover:brightness-110"
              style={{ backgroundColor: "var(--accent)" }}
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-full border px-5 py-2 text-sm font-semibold text-white transition-colors hover:border-white/40"
              style={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              About me
            </a>
          </div>
        </div>

        <div
          className="rounded-2xl border p-6"
          style={{
            borderColor: "var(--card-border)",
            background: "linear-gradient(135deg, var(--card), var(--card-border))",
          }}
        >
          <div className="mb-5 flex items-center justify-between">
            <span
              className="text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--muted)", fontFamily: "var(--font-display)" }}
            >
              Current stack
            </span>
            <span
              className="rounded-full border px-2 py-0.5 text-[10px]"
              style={{ borderColor: "rgba(200,241,53,0.25)", color: "var(--accent)" }}
            >
              open to internship
            </span>
          </div>
          <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
            <li>→ Next.js · React · Node.js · MongoDB</li>
            <li>→ TypeScript · Tailwind · Framer Motion</li>
            <li>→ Python · AI/ML (Apna College Prime)</li>
            <li>→ Anthropic API · Razorpay · Vercel</li>
          </ul>
          <div
            className="mt-5 grid grid-cols-3 gap-2 border-t pt-4 text-center"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div>
              <p className="text-lg font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>4+</p>
              <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>Projects</p>
            </div>
            <div>
              <p className="text-lg font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>MCA</p>
              <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>Data Science</p>
            </div>
            <div>
              <p className="text-lg font-bold" style={{ color: "var(--foreground)", fontFamily: "var(--font-display)" }}>TASL</p>
              <p className="text-[10px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>Internship</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
