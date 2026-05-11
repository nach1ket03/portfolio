// TODO: Replace with real screenshot when available

interface ProjectPlaceholderProps {
  title: string;
  tags?: string[];
}

export default function ProjectPlaceholder({ title, tags = [] }: ProjectPlaceholderProps) {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-5" style={{ background: "#090909" }}>
      {/* Terminal header bar */}
      <div className="flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
        <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
        <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        <div
          className="ml-3 flex-1 rounded bg-[#111111] h-4 flex items-center px-2"
          style={{ border: "1px solid #1e1e1e" }}
        >
          <span className="text-[9px] text-neutral-700 font-mono tracking-wider">localhost:3000</span>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-3 py-4">
        <span
          className="text-[11px] font-mono tracking-[0.25em] uppercase"
          style={{ color: "#c8f135" }}
        >
          ~ $ preview
        </span>
        <p
          className="text-lg font-bold text-white leading-tight max-w-[80%]"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {title}
        </p>
        <div className="flex flex-wrap gap-1.5 justify-center">
          {tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[9px] font-mono px-2 py-0.5 rounded"
              style={{
                color: "#c8f135",
                background: "rgba(200,241,53,0.06)",
                border: "1px solid rgba(200,241,53,0.14)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Terminal bottom line */}
      <div className="flex items-center gap-2">
        <span className="text-[9px] font-mono text-neutral-700">▶</span>
        <span className="text-[9px] font-mono text-neutral-700">screenshot coming soon</span>
        <span
          className="inline-block h-2.5 w-px ml-0.5 animate-pulse"
          style={{ background: "#c8f135" }}
        />
      </div>
    </div>
  );
}
