import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";
import Hero from "../components/Hero";
import QuickAccess from "../components/QuickAccess";
import MaterialsBrowser from "../components/MaterialsBrowser";
import About from "../components/About";
import Toast from "../components/Toast";
import UpdateLink from "../components/UpdateLink";
import { UPDATES } from "../data/updates";

export default function Home() {
  const [types, setTypes] = useState<string[]>([]);
  const [papers, setPapers] = useState<string[]>([]);
  const [langs, setLangs] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  const handlePick = (type: string) => {
    setTypes([type]);
    setPapers([]);
    setLangs([]);
    setTimeout(
      () =>
        document
          .getElementById("materials")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      0
    );
  };

  return (
    <>
      {/* Mobile Latest Updates — single-line auto-scrolling ticker on a
          distinct accent band below the header. Each item is directly
          clickable; pauses on touch/hover and respects reduced-motion. */}
      <div className="sticky top-16 z-30 flex items-center gap-2 border-b border-edge bg-brand/[0.07] py-1.5 pl-3 pr-2 backdrop-blur-sm lg:hidden">
        {/* Fixed accent label — distinguishes the bar from the top header */}
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-brand px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-white">
          <Zap size={9} fill="currentColor" />
          Updates
        </span>

        {/* Scrolling ticker (content duplicated for a seamless loop) */}
        <div
          role="region"
          aria-label="Latest updates"
          className="relative min-w-0 flex-1 overflow-hidden"
        >
          <div className="animate-marquee" style={{ display: "inline-flex" }}>
            {[0, 1].flatMap((copy) =>
              UPDATES.map((u) => (
                <UpdateLink
                  key={`${copy}-${u.id}`}
                  update={u}
                  decorative={copy === 1}
                  className="mr-6 inline-flex shrink-0 items-center gap-1.5 text-[11px]"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-brand-2" />
                  <span className="whitespace-nowrap text-muted">
                    {u.short ?? u.text}
                  </span>
                  {u.isNew && (
                    <span className="rounded bg-red-500/15 px-1 py-px text-[8px] font-bold uppercase leading-none text-red-500">
                      New
                    </span>
                  )}
                </UpdateLink>
              ))
            )}
          </div>
        </div>

        {/* Link to the full announcements page */}
        <Link
          to="/updates"
          className="shrink-0 font-mono text-[9px] uppercase tracking-wider text-brand hover:underline"
        >
          All →
        </Link>
      </div>

      <Hero />
      <QuickAccess onPick={handlePick} onComingSoon={setToast} />
      <MaterialsBrowser
        types={types}
        papers={papers}
        langs={langs}
        setTypes={setTypes}
        setPapers={setPapers}
        setLangs={setLangs}
      />
      <About />
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </>
  );
}
