import { NavLink, Outlet, useLocation } from "react-router";
import { useState, useEffect } from "react";

const navItems = [
  { path: "/", label: "HOME", code: "00" },
  { path: "/about", label: "ABOUT", code: "01" },
  { path: "/resume", label: "RESUME", code: "02" },
  { path: "/projects", label: "PROJECTS", code: "03" },
  { path: "/contact", label: "CONTACT", code: "04" },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col relative cyber-grid">
      {/* top status bar */}
      <div className="border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm px-6 py-1.5 flex justify-between items-center font-mono-cyber text-[10px] text-[var(--muted-foreground)] z-50 sticky top-0">
        <span className="pulse-slow">● SYS_ONLINE</span>
        <span className="hidden sm:block">
          {time.toISOString().replace("T", " ").slice(0, 19)} UTC
        </span>
        <span className="text-[var(--neon-cyan)]">v2.0.26_STABLE</span>
      </div>

      {/* main nav */}
      <header className="sticky top-[33px] z-40 border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[var(--primary)] neon-border flex items-center justify-center">
              <span className="font-display font-bold text-sm text-[var(--primary)] neon-text">ISA</span>
            </div>
            <span className="font-display font-bold text-lg tracking-widest text-[var(--foreground)] hidden sm:block">
              ISA<span className="text-[var(--primary)]">_</span>RHODES
            </span>
          </NavLink>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative px-4 py-1.5 font-mono-cyber text-xs tracking-widest transition-all duration-200 border ${
                    isActive
                      ? "border-[var(--primary)] text-[var(--primary)] neon-text bg-[var(--primary)]/5"
                      : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--border)]"
                  }`
                }
              >
                <span className="text-[8px] opacity-50 mr-1">{item.code}/</span>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-[var(--primary)] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-[var(--primary)] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[var(--primary)] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[var(--border)] bg-[var(--background)]/98">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-3 font-mono-cyber text-xs tracking-widest border-b border-[var(--border)] ${
                    isActive
                      ? "text-[var(--primary)] bg-[var(--primary)]/5"
                      : "text-[var(--muted-foreground)]"
                  }`
                }
              >
                <span className="text-[var(--muted-foreground)]">{item.code}/</span>
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* footer */}
      <footer className="border-t border-[var(--border)] py-4 px-6 font-mono-cyber text-[10px] text-[var(--muted-foreground)] flex flex-col sm:flex-row justify-between items-center gap-2">
        <span>© 2026 ISA_RHODES — ALL_RIGHTS_RESERVED</span>
        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">GITHUB</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">LINKEDIN</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors">TWITTER</a>
        </div>
      </footer>
    </div>
  ); // <--- Closing brace added here
}
