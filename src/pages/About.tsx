export default function About() {
  const interests = ["Open Source", "Systems Design", "Game Dev", "3D Graphics"];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono-cyber text-[10px] text-[var(--primary)]">01/</span>
        <h1 className="font-display font-bold text-3xl tracking-widest">ABOUT_ME</h1>
        <span className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-12 md:gap-16">
        <div>
          <div className="flex items-start gap-6 mb-10">
            <div className="relative shrink-0">
              <div className="w-24 h-24 border border-[var(--primary)] neon-border overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format"
                  alt="Isa Rhodes"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-24 h-24 border border-[var(--border)] -z-10" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl tracking-wide mb-1">Isa Rhodes</h2>
              <p className="font-mono-cyber text-xs text-[var(--primary)] mb-1">Software Developer</p>
              <p className="font-mono-cyber text-[10px] text-[var(--muted-foreground)]">
                📍 Augusta, GA · Remote-friendly
              </p>
            </div>
          </div>

          <div className="space-y-4 text-[var(--muted-foreground)] text-sm leading-relaxed border-l-2 border-[var(--border)] pl-5">
            <p>
              I am a computer programmer focused on building thoughtful digital experiences
              that balance strong technical foundations with practical usability.
            </p>
            <p>
              My work spans front-end interfaces, back-end logic, and problem-solving through
              clean, maintainable code. I enjoy turning rough ideas into polished, useful tools.
            </p>
          </div>

          <div className="mt-10">
            <p className="font-mono-cyber text-[10px] text-[var(--muted-foreground)] mb-3 tracking-widest">
              INTERESTS &amp; HOBBIES
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="font-mono-cyber text-[10px] border border-[var(--border)] px-3 py-1 text-[var(--muted-foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200 cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative border border-[var(--border)] bg-[var(--card)] p-5 neon-border">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--primary)]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--primary)]" />
            <p className="font-mono-cyber text-[10px] text-[var(--primary)] mb-4 tracking-widest">SYS_INFO</p>
            {[
              { key: "NAME", val: "Isa Rhodes" },
              { key: "ROLE", val: "Developer" },
              { key: "EXP", val: "2+ Years" },
              { key: "LOCATION", val: "Augusta, GA" },
              { key: "STATUS", val: "Open to Work" },
              { key: "PREF", val: "Remote / Hybrid" },
            ].map(({ key, val }) => (
              <div key={key} className="flex justify-between py-2 border-b border-[var(--border)]/40 last:border-0">
                <span className="font-mono-cyber text-[10px] text-[var(--muted-foreground)]">{key}</span>
                <span className="font-mono-cyber text-[10px] text-[var(--foreground)]">{val}</span>
              </div>
            ))}
          </div>

          <div className="border border-[var(--border)] bg-[var(--card)] p-5">
            <p className="font-mono-cyber text-[10px] text-[var(--primary)] mb-4 tracking-widest">CORE_VALUES</p>
            {[
              "Clean, readable code",
              "Thoughtful UX decisions",
              "Clear communication",
            ].map((value, index) => (
              <div key={value} className="flex items-center gap-2 py-1.5">
                <span className="font-mono-cyber text-[10px] text-[var(--primary)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-[var(--muted-foreground)]">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono-cyber text-[10px] text-[var(--primary)]">02/</span>
          <h2 className="font-display font-bold text-xl tracking-widest">CAREER_TIMELINE</h2>
          <span className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="space-y-0">
          {[
            {
              year: "2024 — PRESENT",
              role: "Developer / Problem Solver",
              company: "Freelance & Independent Projects",
              desc: "Building practical interfaces, prototypes, and tools for personal and client work with a focus on polished execution.",
            },
            {
              year: "2021 — 2024",
              role: "Programmer",
              company: "Academic & Project-Based Experience",
              desc: "Worked on application and software projects spanning C#, C++, front-end development, and technical problem solving.",
            },
          ].map((item) => (
            <div
              key={`${item.year}-${item.role}`}
              className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 border-b border-[var(--border)]/40 py-5 last:border-0"
            >
              <div>
                <p className="font-mono-cyber text-[10px] text-[var(--primary)]">{item.year}</p>
              </div>
              <div>
                <h3 className="font-display font-semibold text-base tracking-wide mb-0.5">{item.role}</h3>
                <p className="font-mono-cyber text-[10px] text-[var(--muted-foreground)] mb-2">{item.company}</p>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
