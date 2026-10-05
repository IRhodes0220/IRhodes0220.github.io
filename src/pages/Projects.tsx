import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Portfolio Site",
    category: "FRONTEND",
    tags: ["React", "Vite", "Tailwind"],
    description: "A cyber-inspired portfolio experience built to showcase projects, resume details, and contact information in a clean interface.",
    status: "LIVE",
    year: "2026",
    github: "https://github.com/IRhodes0220",
    demo: "#",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Tools Dashboard",
    category: "FULLSTACK",
    tags: ["C#", "SQL", "UI"],
    description: "A data-focused dashboard for tracking project workflows, user input, and internal operational metrics.",
    status: "WIP",
    year: "2025",
    github: "https://github.com/IRhodes0220",
    demo: "#",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Game Systems Prototype",
    category: "BACKEND",
    tags: ["C++", "Unity", "Gameplay"],
    description: "A game systems prototype exploring modular logic, event-driven state, and interaction-focused player feedback.",
    status: "LIVE",
    year: "2024",
    github: "https://github.com/IRhodes0220",
    demo: "#",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Inventory Utility",
    category: "FRONTEND",
    tags: ["JavaScript", "UX", "Logic"],
    description: "A small utility for organizing data sets and improving the clarity of repetitive operational tasks.",
    status: "ARCHIVED",
    year: "2023",
    github: "https://github.com/IRhodes0220",
    demo: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    name: "Automation Scripts",
    category: "DEVOPS",
    tags: ["Python", "Automation", "Tools"],
    description: "A lightweight automation project designed to reduce repetitive tasks and improve workflow efficiency.",
    status: "LIVE",
    year: "2024",
    github: "https://github.com/IRhodes0220",
    demo: "#",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    name: "Design Exploration",
    category: "FRONTEND",
    tags: ["UI", "CSS", "Concept"],
    description: "A design exploration focused on type, contrast, motion, and interface clarity across multiple mock flows.",
    status: "WIP",
    year: "2025",
    github: "https://github.com/IRhodes0220",
    demo: "#",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
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
  const filtered = active === "ALL" ? projects : projects.filter((project) => project.category === active);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <div className="flex items-center gap-4 mb-10">
        <span className="font-mono-cyber text-[10px] text-[var(--primary)]">03/</span>
        <h1 className="font-display font-bold text-3xl tracking-widest">PROJECTS</h1>
        <span className="flex-1 h-px bg-[var(--border)]" />
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`font-mono-cyber text-[10px] tracking-widest px-4 py-2 border transition-all duration-200 ${
              active === category
                ? "border-[var(--primary)] text-[var(--primary)] bg-[var(--primary)]/5 neon-border"
                : "border-[var(--border)] text-[var(--muted-foreground)] hover:border-[var(--primary)]/50 hover:text-[var(--foreground)]"
            }`}
          >
            {category}
          </button>
        ))}
        <span className="ml-auto font-mono-cyber text-[10px] text-[var(--muted-foreground)] self-center">
          {filtered.length}_RESULTS
        </span>
      </div>

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
      <div className="relative h-40 overflow-hidden bg-[var(--muted)]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-transparent to-transparent" />
        <div className="absolute inset-0 scanlines opacity-30" />
        <div className="absolute top-3 right-3">
          <span
            className={`font-mono-cyber text-[9px] border px-2 py-0.5 bg-[var(--card)]/90 ${statusColor[project.status]}`}
          >
            {project.status}
          </span>
        </div>
      </div>

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

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono-cyber text-[9px] border border-[var(--border)] px-2 py-0.5 text-[var(--muted-foreground)]"
            >
              {tag}
            </span>
          ))}
        </div>

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
