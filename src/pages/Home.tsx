import { Link } from "react-router";
import { useEffect, useState } from "react";

const ticker = ["OPEN_TO_WORK", "BUILDING_TOOLS", "SOLVING_PROBLEMS"];

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i += 1;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}</span>;
}

export default function Home() {
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((index) => (index + 1) % ticker.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const statCards = [
    { label: "FOCUS", value: "UI/UX" },
    { label: "STACK", value: "C#" },
    { label: "MODE", value: "REMOTE" },
  ];

  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168,85,247,0.12) 0%, transparent 70%)",
        }}
      />

      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-36">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[var(--primary)]" />
              <span className="font-mono-cyber text-xs text-[var(--primary)] tracking-widest">
                PORTFOLIO_2026
              </span>
            </div>

            <h1
              className="font-display font-bold text-5xl sm:text-7xl md:text-8xl leading-none tracking-tight mb-4 glitch-container flicker"
              data-text="Isa Rhodes"
            >
              Isa
              <br />
              <span className="text-[var(--primary)] neon-text">Rhodes</span>
            </h1>

            <div className="font-mono-cyber text-sm sm:text-base text-[var(--muted-foreground)] mb-6 h-6">
              <span className="text-[var(--neon-cyan)]">&gt; </span>
              <TypewriterText key={tickerIndex} text={ticker[tickerIndex]} />
              <span className="cursor-blink" />
            </div>

            <p className="text-[var(--muted-foreground)] max-w-lg leading-relaxed mb-10 text-sm md:text-base">
              I build clean, performant experiences across front-end and back-end work,
              with a focus on thoughtful UX, strong fundamentals, and production-ready code.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="font-mono-cyber text-xs tracking-widest px-6 py-3 bg-[var(--primary)] text-white neon-border hover:bg-[var(--accent)] transition-colors duration-200"
              >
                VIEW_PROJECTS →
              </Link>
              <Link
                to="/contact"
                className="font-mono-cyber text-xs tracking-widest px-6 py-3 border border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-200"
              >
                GET_IN_TOUCH
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative border border-[var(--border)] bg-[var(--card)] p-6 w-56 neon-border">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--primary)]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--primary)]" />
              {statCards.map((stat) => (
                <div key={stat.label} className="mb-4 last:mb-0">
                  <div className="font-mono-cyber text-[10px] text-[var(--muted-foreground)] mb-0.5">
                    {stat.label}
                  </div>
                  <div className="font-display font-bold text-3xl text-[var(--primary)] neon-text">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-[var(--border)] bg-[var(--muted)] py-2 overflow-hidden">
        <div className="ticker-track flex gap-12 whitespace-nowrap w-max">
          {[...ticker, ...ticker].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="font-mono-cyber text-[10px] text-[var(--muted-foreground)] tracking-widest"
            >
              ◆ {item}
            </span>
          ))}
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono-cyber text-[10px] text-[var(--primary)]">03/</span>
          <h2 className="font-display font-bold text-2xl tracking-widest">CORE_STACK</h2>
          <span className="flex-1 h-px bg-[var(--border)]" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {["C++", "C#", "JavaScript", "Python", "SQL", "Unity"].map((tech) => (
            <div
              key={tech}
              className="border border-[var(--border)] bg-[var(--card)] px-3 py-3 text-center font-mono-cyber text-[11px] text-[var(--muted-foreground)] neon-border-hover hover:text-[var(--primary)] hover:border-[var(--primary)]/50 transition-all duration-200 cursor-default"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--card)]">
        <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-wide mb-2">
              READY TO <span className="text-[var(--primary)] neon-text">BUILD</span> SOMETHING?
            </h2>
            <p className="font-mono-cyber text-xs text-[var(--muted-foreground)]">
              Available for design, development, and problem-solving collaborations.
            </p>
          </div>
          <Link
            to="/resume"
            className="font-mono-cyber text-xs tracking-widest px-8 py-4 border border-[var(--primary)] text-[var(--primary)] neon-border hover:bg-[var(--primary)] hover:text-white transition-all duration-200 whitespace-nowrap"
          >
            VIEW_RESUME →
          </Link>
        </div>
      </section>
    </div>
  );
}

