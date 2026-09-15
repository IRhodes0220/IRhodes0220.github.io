export default function About() {
  const interests = [
    "Open Source", "Systems Design", "Game Dev", "3D Graphics",
    "Mechanical Keyboards", "Synthwave Music", "Competitive Programming",
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* section header */}
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono-cyber text-[10px] text-[var(--primary)]">01/</span>
        <h1 className="font-display font-bold text-3xl tracking-widest">ABOUT_ME</h1>
        <span className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="grid md:grid-cols-[2fr_1fr] gap-12 md:gap-16">
        {/* left */}
        <div>
          {/* avatar + name block */}
          <div className="flex items-start gap-6 mb-10">
            <div className="relative shrink-0">
              <div className="w-24 h-24 border border-[var(--primary)] neon-border overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&auto=format"
                  alt="Jane Smith — software engineer"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-24 h-24 border border-[var(--border)] -z-10" />
            </div>
            <div>
              <h2 className="font-display font-bold text-2xl tracking-wide mb-1">JANE SMITH</h2>
              <p className="font-mono-cyber text-xs text-[var(--primary)] mb-1">SENIOR SOFTWARE ENGINEER</p>
              <p className="font-mono-cyber text-[10px] text-[var(--muted-foreground)]">
                📍 San Francisco, CA · Remote-Friendly
              </p>
            </div>
          </div>

          <div className="space-y-4 text-[var(--muted-foreground)] text-sm leading-relaxed border-l-2 border-[var(--border)] pl-5">
            <p>
              I'm a software engineer with 5 years of professional experience building
              high-performance web applications. My focus is on the full stack — from
              architecting reliable backend APIs to crafting interfaces that feel
              genuinely good to use.
            </p>
            <p>
              Before going professional I spent years deep in open-source communities,
              contributing to UI libraries and developer tooling. That background
              shaped how I think about code quality, documentation, and building
              things that other developers can actually work with.
            </p>
            <p>
              I care deeply about performance, accessibility, and the kind of
              attention to detail that separates good software from great software.
              I'm most energized working on teams that share those values.
            </p>
          </div>

          {/* interests */}
          <div className="mt-10">
            <p className="font-mono-cyber text-[10px] text-[var(--muted-foreground)] mb-3 tracking-widest">INTERESTS &amp; HOBBIES</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((i) => (
                <span
                  key={i}
                  className="font-mono-cyber text-[10px] border border-[var(--border)] px-3 py-1 text-[var(--muted-foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200 cursor-default"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* right — system specs panel */}
        <div className="space-y-4">
          <div className="relative border border-[var(--border)] bg-[var(--card)] p-5 neon-border">
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--primary)]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[var(--primary)]" />
            <p className="font-mono-cyber text-[10px] text-[var(--primary)] mb-4 tracking-widest">SYS_INFO</p>
            {[
              { key: "NAME", val: "Jane Smith" },
              { key: "ROLE", val: "Sr. Engineer" },
              { key: "EXP", val: "5 Years" },
              { key: "LOCATION", val: "SF, CA" },
              { key: "STATUS", val: "Open to Work" },
              { key: "PREF", val: "Remote / Hybrid" },
            ].map(({ key, val }) => (
              <div key={key} className="flex justify-between py-2 border-b border-[var(--border)]/40 last:border-0">
                <span className="font-mono-cyber text-[10px] text-[var(--muted-foreground)]">{key}</span>
                <span className="font-mono-cyber text-[10px] text-[var(--foreground)]">{val}</span>
              </div>
            ))}
          </div>

          {/* values */}
          <div className="border border-[var(--border)] bg-[var(--card)] p-5">
            <p className="font-mono-cyber text-[10px] text-[var(--primary)] mb-4 tracking-widest">CORE_VALUES</p>
            {[
              "Clean, readable code",
              "Thoughtful UX decisions",
              "Clear communication",
              "Ship and iterate",
              "Leave it better",
            ].map((v, i) => (
              <div key={v} className="flex items-center gap-2 py-1.5">
                <span className="font-mono-cyber text-[10px] text-[var(--primary)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-xs text-[var(--muted-foreground)]">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* timeline */}
      <div className="mt-16">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono-cyber text-[10px] text-[var(--primary)]">02/</span>
          <h2 className="font-display font-bold text-xl tracking-widest">CAREER_TIMELINE</h2>
          <span className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="space-y-0">
          {[
            { year: "2024–PRESENT", role: "Senior Software Engineer", company: "NeuralEdge Inc.", desc: "Leading frontend architecture for a real-time analytics platform serving 50K+ daily users. Reduced bundle size by 40% and improved core web vitals scores across the board." },
            { year: "2022–2024", role: "Software Engineer II", company: "Apex Digital", desc: "Built and maintained a suite of React micro-frontends. Introduced TypeScript and a shared component library that cut UI development time by 30%." },
            { year: "2021–2022", role: "Software Engineer I", company: "Stackbase", desc: "Full-stack development on a SaaS project management tool. Owned the notification system and user permissions model end-to-end." },
            { year: "2021", role: "B.Sc. Computer Science", company: "UC Berkeley", desc: "Graduated with honors. Focus on distributed systems and human-computer interaction. Senior capstone: a collaborative code editor with real-time sync." },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 border-b border-[var(--border)]/40 py-5 last:border-0">
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
