import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "NexusDB",
    category: "BACKEND",
    tags: ["TypeScript", "Node.js", "PostgreSQL", "Redis"],
    description: "A high-performance query layer built on top of PostgreSQL with intelligent caching via Redis. Supports real-time subscriptions, complex joins, and a GraphQL-like query syntax. Ships with a CLI for schema migrations.",
    status: "LIVE",
    year: "2025",
    github: "https://github.com",
    demo: "https://demo.example.com",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=340&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Meridian UI",
    category: "FRONTEND",
    tags: ["React", "TypeScript", "Storybook", "Tailwind"],
    description: "An accessible, composable React component library with 60+ components. Built with design-token theming from the ground up. Full Storybook documentation and WCAG 2.1 AA compliance throughout.",
    status: "LIVE",
    year: "2025",
    github: "https://github.com",
    demo: "https://demo.example.com",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=340&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "FluxPipeline",
    category: "DEVOPS",
    tags: ["Docker", "GitHub Actions", "AWS", "Terraform"],
    description: "An opinionated CI/CD pipeline template for Node.js microservices. Auto-provisions infrastructure with Terraform, runs parallel test suites, and deploys blue-green to ECS. Cut our deploy cycle from 40 min to 8 min.",
    status: "LIVE",
    year: "2024",
    github: "https://github.com",
    demo: null,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=340&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "CoWrite",
    category: "FULLSTACK",
    tags: ["React", "Node.js", "WebSockets", "CRDT"],
    description: "Real-time collaborative code editor built with Conflict-free Replicated Data Types for seamless multi-user editing. Supports syntax highlighting for 30+ languages and operational transform for offline-first sync.",
    status: "ARCHIVED",
    year: "2024",
    github: "https://github.com",
    demo: null,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=340&fit=crop&auto=format",
  },
  {
    id: 5,
    name: "Archivist",
    category: "FRONTEND",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Vercel"],
    description: "A personal knowledge management tool with smart tagging, full-text search, and Markdown editing. Includes browser extension for web clipping and a public API for integrations.",
    status: "LIVE",
    year: "2024",
    github: "https://github.com",
    demo: "https://demo.example.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=340&fit=crop&auto=format",
  },
  {
    id: 6,
    name: "PulseMonitor",
    category: "DEVOPS",
    tags: ["Python", "Prometheus", "Grafana", "AWS"],
    description: "Lightweight uptime and performance monitoring for web services. Sends alerts via Slack and PagerDuty. Tracks response times, error rates, and custom business metrics with historical charting.",
    status: "WIP",
    year: "2026",
    github: "https://github.com",
    demo: null,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=340&fit=crop&auto=format",
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
