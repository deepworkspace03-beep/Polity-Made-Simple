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
      {/* Mobile latest updates — compact, only latest 2, each directly clickable. Hidden on lg+ */}
      <div className="sticky top-16 z-30 border-b border-edge bg-band/95 backdrop-blur-sm lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 pt-1.5">
          <span className="inline-flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-widest text-brand">
            <Zap size={9} fill="currentColor" />
            Latest Updates
          </span>
          <Link
            to="/updates"
            className="font-mono text-[9px] uppercase tracking-wider text-brand hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="px-4 pb-1.5">
          {UPDATES.slice(0, 2).map((u) => (
            <UpdateLink
              key={u.id}
              update={u}
              className="group flex items-center gap-2 py-1"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-brand-2" />
              <span className="min-w-0 flex-1 truncate text-[11px] text-muted group-hover:text-fg">
                {u.short ?? u.text}
              </span>
              {u.isNew && (
                <span className="shrink-0 bg-brand-2 px-1 text-[8px] font-bold uppercase leading-4 text-white">
                  New
                </span>
              )}
            </UpdateLink>
          ))}
        </div>
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
        onComingSoon={setToast}
      />
      <About />
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </>
  );
}
