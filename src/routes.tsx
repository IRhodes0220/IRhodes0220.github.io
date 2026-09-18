import { createHashRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] font-mono-cyber text-center px-6">
      <div className="text-6xl font-display font-bold text-[var(--primary)] neon-text mb-4">404</div>
      <div className="text-xs text-[var(--muted-foreground)] mb-6">PAGE_NOT_FOUND — SIGNAL_LOST</div>
      <a href="/" className="text-xs border border-[var(--primary)] text-[var(--primary)] px-5 py-2.5 hover:bg-[var(--primary)] hover:text-white transition-all duration-200">
        RETURN_HOME →
      </a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "resume", Component: Resume },
      { path: "projects", Component: Projects },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
