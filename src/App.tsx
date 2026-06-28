import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Secondary pages are code-split: each loads its own chunk on demand,
// keeping the initial homepage bundle small for faster first paint.
const Paper1 = lazy(() => import("./pages/Paper1"));
const Paper2 = lazy(() => import("./pages/Paper2"));
const MockTests = lazy(() => import("./pages/MockTests"));
const Updates = lazy(() => import("./pages/Updates"));

type Theme = "dark" | "light";

// Scrolls to the top whenever you move to a new page (but leaves
// in-page "#section" links alone so they still scroll normally).
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  // Read the saved theme, defaulting to light mode for first-time visitors.
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    // If nothing is saved, default to light mode
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    return "light"; // Default to light mode for new visitors
  });

  // Whenever the theme changes, update the <html> class and save it.
  // Tailwind's `dark:` variants react to this `dark` class, so the
  // ENTIRE site switches themes at once.
  useEffect(() => {
    const root = document.documentElement;
    // Keep `light`/`dark` mutually exclusive — mirrors the pre-paint
    // script in index.html so <html> never ends up with both classes.
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Shared layout: header + page content + footer on every route. */}
      <div className="flex min-h-screen flex-col">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main className="flex-1">
          {/* ── ROUTES: add a new <Route> here to add a new page ── */}
          <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/paper-1" element={<Paper1 />} />
              <Route path="/paper-2" element={<Paper2 />} />
              <Route path="/mock-tests" element={<MockTests />} />
              <Route path="/updates" element={<Updates />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
