import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Send, Sun, Moon, X, Menu } from "lucide-react";
import Logo from "./Logo";
import { SITE, NAV_LINKS } from "../config";

type HeaderProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
};

function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const cls =
    "px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-fg/5 hover:text-fg";
  if (href.includes("#")) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {label}
      </a>
    );
  }
  return (
    <Link to={href} onClick={onClick} className={cls}>
      {label}
    </Link>
  );
}

function ThemeToggle({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center gap-1.5"
    >
      <Sun
        size={12}
        className={`hidden sm:block transition-colors ${isDark ? "text-muted/40" : "text-brand"}`}
      />
      {/* Toggle pill + label stacked on mobile */}
      <span className="flex flex-col items-center gap-0.5">
        <span
          className={`relative inline-flex h-4 w-7 shrink-0 items-center rounded-full transition-colors duration-300 sm:h-5 sm:w-9 ${
            isDark ? "bg-brand" : "bg-edge"
          }`}
        >
          <span
            className={`absolute h-3 w-3 transform rounded-full bg-white shadow transition-transform duration-300 sm:h-3.5 sm:w-3.5 ${
              isDark ? "translate-x-[14px] sm:translate-x-[18px]" : "translate-x-0.5 sm:translate-x-1"
            }`}
          />
        </span>
        {/* Current mode icon — only on mobile */}
        {isDark
          ? <Moon size={9} className="block text-brand sm:hidden" />
          : <Sun size={9} className="block text-brand sm:hidden" />
        }
      </span>
      <Moon
        size={12}
        className={`hidden sm:block transition-colors ${isDark ? "text-brand" : "text-muted/40"}`}
      />
    </button>
  );
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = theme === "dark";

  // The drawer stays mounted (so it can slide in/out), but when closed it
  // sits off-screen. `inert` keeps its links out of the tab order and the
  // accessibility tree until the menu is actually open.
  const drawerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (drawerRef.current) drawerRef.current.inert = !menuOpen;
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-edge bg-band/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">

          {/* Left: logo + brand */}
          <Link to="/" className="flex items-center gap-3">
            <Logo size={40} />
            <span className="leading-tight">
              <span className="block whitespace-nowrap text-base font-extrabold tracking-tight sm:text-lg">
                <span className="text-gradient">Polity</span> Made Simple
              </span>
              <span className="block text-[11px] font-medium text-muted">
                {SITE.tagline}
              </span>
            </span>
          </Link>

          {/* Right: nav + actions */}
          <div className="flex items-center gap-3">

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <NavItem key={link.label} href={link.href} label={link.label} />
              ))}
            </nav>

            {/* Theme toggle */}
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

            {/* Telegram */}
            <a
              href={SITE.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tg px-2.5 py-2 sm:px-3"
            >
              <Send size={15} />
              <span className="hidden sm:inline">Join Telegram</span>
            </a>

            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-9 w-9 items-center justify-center border border-edge text-fg transition-colors hover:bg-fg/5 active:scale-95 lg:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-fg/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar drawer — rectangle */}
      <aside
        ref={drawerRef}
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-band shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between border-b border-edge px-5 py-4">
          <div className="flex items-center gap-2.5">
            <Logo size={34} />
            <span className="text-sm font-extrabold">
              <span className="text-gradient">Polity</span> Made Simple
            </span>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center border border-edge text-muted hover:bg-fg/5 active:scale-95"
          >
            <X size={15} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-2 px-3 font-mono text-[10px] uppercase tracking-widest text-muted/60">
            Navigation
          </p>
          <div className="flex flex-col gap-0.5">
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.label}
                href={link.href}
                label={link.label}
                onClick={() => setMenuOpen(false)}
              />
            ))}
          </div>
        </nav>

        {/* Sidebar footer */}
        <div className="space-y-3 border-t border-edge px-5 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted">
              {isDark ? "Dark Mode" : "Light Mode"}
            </span>
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
          <a
            href={SITE.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tg w-full justify-center px-3 py-2 text-sm"
          >
            <Send size={14} />
            Join Telegram
          </a>
        </div>
      </aside>
    </>
  );
}
