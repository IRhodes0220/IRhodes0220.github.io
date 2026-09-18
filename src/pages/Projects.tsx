import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "",
    category: "",
    tags: [""],
    description: "",
    status: "",
    year: "",
    github: "",
    demo: "",
    image: "",
  },
  {
    id: 2,
 
  },
  {
    id: 3,
  
  },
  {
    id: 4,
   
  },
  {
    id: 5,

  },
  {
    id: 6,

  },
];

const categories = ["ALL", "FRONTEND", "BACKEND", "FULLSTACK", "DEVOPS"];

const statusColor: Record<string, string> = {
  LIVE: "text-green-400 border-green-400/40",
  WIP: "text-yellow-400 border-yellow-400/40",
  ARCHIVED: "text-[var(--muted-foreground)] border-[var(--border)]",
};

export default function Projects() {
  const [active, setActive] = useState("ALL");
  const filtered = active === "ALL" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono-cyber text-[10px] text-[var(--primary)]">03/</span>
        <h1 className="font-display font-bold text-3xl tracking-widest">PROJECTS</h1>
        <span className="flex-1 h-px bg-[var(--border)]" />
      </div>

      {/* filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-mono-cyber text-[10px] tracking-widest px-4 py-2 border transition-all duration-200 ${
              active === cat
                ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/5 neon-border"
                : "border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--primary)]/50 hover:text-[var(--foreground)]"
            }`}
          >
            {cat}
          </button>
        ))}
        <span className="ml-auto font-mono-cyber text-[10px] text-[var(--muted-foreground)] self-center">
          {filtered.length}_RESULTS
        </span>
      </div>

      {/* project grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="relative border border-[var(--border)] bg-[var(--card)] flex flex-col neon-border-hover group overflow-hidden">
      {/* image */}
      <div className="relative h-40 overflow-hidden bg-[var(--muted)]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent" />
        {/* scanlines on image */}
        <div className="absolute inset-0 scanlines opacity-30" />
        {/* status badge */}
        <div className="absolute top-3 right-3">
          <span className={`font-mono-cyber text-[9px] border px-2 py-0.5 bg-[var(--card)]/90 ${statusColor[project.status]}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-lg tracking-wide group-hover:text-[var(--primary)] transition-colors duration-200">
            {project.name}
          </h3>
          <span className="font-mono-cyber text-[9px] text-[var(--muted-foreground)] shrink-0 mt-1">
            {project.year}
          </span>
        </div>

        <p className="font-mono-cyber text-[9px] text-[var(--primary)] mb-3 tracking-widest">
          {project.category}
        </p>

        <p className="text-xs text-[var(--muted-foreground)] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="font-mono-cyber text-[9px] border border-[var(--border)] px-2 py-0.5 text-[var(--muted-foreground)]">
              {t}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="flex gap-3 pt-3 border-t border-[var(--border)]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono-cyber text-[10px] text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-200"
          >
            ↗ GITHUB
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-cyber text-[10px] text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors duration-200"
            >
              ↗ LIVE_DEMO
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
    </div>
  );
}
