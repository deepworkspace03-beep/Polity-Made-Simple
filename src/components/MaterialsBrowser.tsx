import { Link } from "react-router-dom";
import { FileText, ExternalLink } from "lucide-react";
import {
  library,
  REAL_TYPES,
  SOON_TYPES,
  type LibraryItem,
} from "../data/library";

type Props = {
  types: string[];
  papers: string[];
  langs: string[];
  setTypes: (v: string[]) => void;
  setPapers: (v: string[]) => void;
  setLangs: (v: string[]) => void;
  onComingSoon: (message: string) => void;
};

const PAPER_ORDER: Record<string, number> = { "Paper 1": 0, "Paper 2": 1 };

function PaperBadge({ paper }: { paper: LibraryItem["paper"] }) {
  const tone =
    paper === "Paper 1"
      ? "bg-brand/10 text-brand"
      : "bg-brand-2/10 text-brand-2";
  return (
    <span className={`px-1.5 py-0.5 text-[10px] font-semibold ${tone}`}>
      {paper}
    </span>
  );
}

export default function MaterialsBrowser({
  types,
  papers,
  langs,
  setTypes,
  setPapers,
  setLangs,
  onComingSoon,
}: Props) {
  const toggle = (arr: string[], val: string, setter: (v: string[]) => void) =>
    setter(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);

  const clearAll = () => {
    setTypes([]);
    setPapers([]);
    setLangs([]);
  };

  const hasFilter = types.length + papers.length + langs.length > 0;

  const base = hasFilter
    ? library
    : library.filter((i) => i.isNew || i.type === "Syllabus");

  const results = base
    .filter(
      (i) =>
        (types.length === 0 || types.includes(i.type)) &&
        (papers.length === 0 || papers.includes(i.paper)) &&
        (langs.length === 0 || langs.includes(i.language))
    )
    .sort(
      (a, b) =>
        PAPER_ORDER[a.paper] - PAPER_ORDER[b.paper] ||
        a.unit.localeCompare(b.unit) ||
        a.name.localeCompare(b.name)
    );

  // Shared style for every filter chip (category, paper, language).
  const chipClass = (active: boolean) =>
    "border px-1.5 py-px text-[10px] sm:px-2.5 sm:py-1 sm:text-xs font-medium transition-all active:scale-95 " +
    (active
      ? "pill-active"
      : "border-edge bg-bg text-muted hover:border-brand/40 hover:text-fg");

  return (
    <section id="materials" className="border-t border-edge bg-band">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">

        {/* ── Section header ── */}
        <p className="eyebrow">Study Material</p>
        <h2 className="mt-1 text-xl font-extrabold tracking-tight sm:text-2xl">
          Find What You Need
        </h2>
        <p className="mt-1 text-xs text-muted sm:text-sm">
          Browse notes, PYQs &amp; more — pick a category, then filter by paper or language.
        </p>

        {/* ── Box 1: Categories — all chips in one flex-wrap row ── */}
        <div className="mt-4 border border-edge bg-card p-3 sm:mt-6 sm:p-5">
          <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-widest text-muted/60">
            Category
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {REAL_TYPES.map((t) => (
              <button
                key={t}
                onClick={() => toggle(types, t, setTypes)}
                className={chipClass(types.includes(t))}
              >
                {t}
              </button>
            ))}
            {/* Coming soon chips inline — dashed border distinguishes them */}
            {SOON_TYPES.map((t) => (
              <button
                key={t}
                onClick={() => onComingSoon(`${t} — coming soon. Stay tuned!`)}
                className="border border-dashed border-edge bg-transparent px-1.5 py-px text-[10px] font-medium text-muted/50 transition-colors hover:text-muted sm:px-2.5 sm:py-1 sm:text-xs"
              >
                {t}
                <span className="ml-1 font-mono text-[8px] uppercase tracking-wider opacity-60">
                  soon
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Box 2: Refine filters — always one line ── */}
        <div className="mt-px border border-t-0 border-edge bg-card p-3 sm:p-5">
          <div className="flex flex-row flex-wrap items-center gap-x-3 gap-y-2 sm:gap-6">

            {/* Paper filter */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-muted/60">
                Paper
              </span>
              <div className="flex gap-1.5 sm:gap-2">
                {(["Paper 1", "Paper 2"] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => toggle(papers, p, setPapers)}
                    className={chipClass(papers.includes(p))}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <span className="h-4 w-px shrink-0 bg-edge" />

            {/* Language filter */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <span className="shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-muted/60">
                Lang
              </span>
              <div className="flex gap-1.5 sm:gap-2">
                {(["English", "Hindi"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => toggle(langs, l, setLangs)}
                    className={chipClass(langs.includes(l))}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Clear all */}
            {hasFilter && (
              <button
                onClick={clearAll}
                className="ml-auto text-xs font-semibold text-brand transition-colors hover:underline"
              >
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* ── Result count ── */}
        <p className="mb-3 mt-6 text-xs font-medium text-muted">
          {hasFilter
            ? `${results.length} ${results.length === 1 ? "material" : "materials"} found`
            : "Latest & essentials"}
        </p>

        {/* ── Results ── */}
        {results.length === 0 ? (
          <div className="card p-8 text-center text-sm text-muted">
            No materials match these filters yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {results.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-interactive group flex items-center gap-3 p-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-brand/10 text-brand">
                  <FileText size={16} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">
                    {item.name}
                  </span>
                  <span className="mt-1 flex items-center gap-2">
                    <PaperBadge paper={item.paper} />
                    <span className="text-[11px] text-muted">{item.language}</span>
                    <span className="truncate text-[11px] text-muted">
                      · {item.unit}
                    </span>
                  </span>
                </span>
                {item.isNew && (
                  <span className="shrink-0 bg-brand-2 px-1.5 py-0.5 text-[10px] font-bold text-white">
                    New
                  </span>
                )}
                <ExternalLink
                  size={15}
                  className="shrink-0 text-muted transition-colors group-hover:text-brand"
                />
              </a>
            ))}
          </div>
        )}

        {/* ── Full library hint ── */}
        <p className="mt-6 text-center text-xs text-muted">
          Looking for everything? Browse the full library on the{" "}
          <Link to="/paper-1" className="font-medium text-brand hover:underline">
            Paper 1
          </Link>{" "}
          and{" "}
          <Link to="/paper-2" className="font-medium text-brand hover:underline">
            Paper 2
          </Link>{" "}
          pages.
        </p>
      </div>
    </section>
  );
}
