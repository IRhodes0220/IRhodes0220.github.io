export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-14">
        <div className="flex items-center gap-4">
          <span className="font-mono-cyber text-[10px] text-[var(--primary)]">02/</span>
          <h1 className="font-display font-bold text-3xl tracking-widest">RESUME</h1>
        </div>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="font-mono-cyber text-xs tracking-widest px-5 py-2.5 border border-[var(--primary)] text-[var(--primary)] neon-border hover:bg-[var(--primary)] hover:text-white transition-all duration-200"
        >
          ↓ DOWNLOAD_PDF
        </a>
      </div>

      <div className="grid md:grid-cols-[1fr_280px] gap-10">
        {/* main column */}
        <div className="space-y-10">
          {/* experience */}
          <Section title="WORK_EXPERIENCE" index="A">
            {[
              {
                role: "N/A",
                company: "N/A",
                period: "N/A",
                location: "N/A",
                bullets: [
                  "N/A",
                  
                ],
              },
            ].map((job) => (
              <JobBlock key={job.company} {...job} />
            ))}
          </Section>

          {/* education */}
          <Section title="EDUCATION" index="B">
            <div className="border border-[var(--border)] bg-[var(--card)] p-5">
              <div className="flex flex-wrap justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-display font-semibold text-base tracking-wide">B.Sc. Computer Programing</h3>
                  <p className="font-mono-cyber text-[10px] text-[var(--primary)]">Augusta Technical college, Augusta</p>
                </div>
                <span className="font-mono-cyber text-[10px] text-[var(--muted-foreground)]">2017 – 2021</span>
              </div>
              <ul className="space-y-1.5">
                {[
                  "GPA: 3.9 — Dean's List all semesters",
                  "Finished with degree and a certification in C# and C++",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-[var(--muted-foreground)]">
                    <span className="text-[var(--primary)] mt-0.5">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </div>

        {/* sidebar */}
        <div className="space-y-6">
          <SidePanel title="TECHNICAL_SKILLS">
            {[
              { cat: "Languages", items: ["C#", "C++", "Python", "SQL", "Java"] },
            ].map(({ cat, items }) => (
              <div key={cat} className="mb-4 last:mb-0">
                <p className="font-mono-cyber text-[10px] text-[var(--primary)] mb-2">{cat.toUpperCase()}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <span key={item} className="font-mono-cyber text-[10px] border border-[var(--border)] px-2 py-0.5 text-[var(--muted-foreground)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </SidePanel>

          <SidePanel title="CERTIFICATIONS">
            {[
              { name: "N/A", year: "N/A", issuer: "N/A" },
              { name: "N/A", year: "N/A", issuer: "N/A" },
              { name: "N/A", year: "N/A", issuer: "N/A" },
            ].map((c) => (
              <div key={c.name} className="py-2.5 border-b border-[var(--border)]/40 last:border-0">
                <p className="text-xs text-[var(--foreground)] font-medium">{c.name}</p>
                <p className="font-mono-cyber text-[10px] text-[var(--muted-foreground)]">{c.issuer} · {c.year}</p>
              </div>
            ))}
          </SidePanel>

          <SidePanel title="LANGUAGES">
            {[
              { lang: "English", level: "Native", pct: 100 },
            ].map((l) => (
              <div key={l.lang} className="mb-3 last:mb-0">
                <div className="flex justify-between mb-1">
                  <span className="font-mono-cyber text-[10px] text-[var(--foreground)]">{l.lang}</span>
                  <span className="font-mono-cyber text-[10px] text-[var(--muted-foreground)]">{l.level}</span>
                </div>
                <div className="h-0.5 bg-[var(--border)] w-full">
                  <div
                    className="h-0.5 bg-[var(--primary)]"
                    style={{ width: `${l.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </SidePanel>
        </div>
      </div>
    </div>
  );
}

function Section({ title, index, children }: { title: string; index: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono-cyber text-[10px] text-[var(--primary)]">{index}/</span>
        <h2 className="font-display font-bold text-lg tracking-widest">{title}</h2>
        <span className="flex-1 h-px bg-[var(--border)]" />
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function SidePanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative border border-[var(--border)] bg-[var(--card)] p-5 neon-border">
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[var(--primary)]" />
      <p className="font-mono-cyber text-[10px] text-[var(--primary)] mb-4 tracking-widest">{title}</p>
      {children}
    </div>
  );
}

function JobBlock({ role, company, period, location, bullets }: {
  role: string; company: string; period: string; location: string; bullets: string[];
}) {
  return (
    <div className="border border-[var(--border)] bg-[var(--card)] p-5 neon-border-hover">
      <div className="flex flex-wrap justify-between gap-2 mb-3">
        <div>
          <h3 className="font-display font-semibold text-base tracking-wide">{role}</h3>
          <p className="font-mono-cyber text-[10px] text-[var(--primary)]">{company}</p>
        </div>
        <div className="text-right">
          <p className="font-mono-cyber text-[10px] text-[var(--foreground)]">{period}</p>
          <p className="font-mono-cyber text-[10px] text-[var(--muted-foreground)]">{location}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-xs text-[var(--muted-foreground)]">
            <span className="text-[var(--primary)] mt-0.5 shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
    </div>
  );
}
