import { useEffect, useState, type ReactNode } from "react";
import { FileText, ExternalLink, SlidersHorizontal } from "lucide-react";
import { library, REAL_TYPES } from "../data/library";
import PaperBadge from "./PaperBadge";

type Props = {
  types: string[];
  papers: string[];
  langs: string[];
  setTypes: (v: string[]) => void;
  setPapers: (v: string[]) => void;
  setLangs: (v: string[]) => void;
};

const PAPER_ORDER: Record<string, number> = { "Paper 1": 0, "Paper 2": 1 };

// Featured item pinned to the top of the "Latest & Essentials" view —
// the newest memory-recall paper, linked straight to its Google Drive PDF.
const FEATURED = {
  title: "UGC-NET Pol Sc Memory Recall June-2026",
  driveUrl:
    "https://drive.google.com/file/d/1XqhoJPCnLYjSwIhqplGfoLzYyC_-qaES/view?usp=drivesdk",
};

function FilterRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="w-[4.5rem] shrink-0 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted/70 sm:text-xs">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export default function MaterialsBrowser({
  types,
  papers,
  langs,
  setTypes,
  setPapers,
  setLangs,
}: Props) {
  // Filters stay hidden until the user enters via a Quick Access tile.
  const [revealed, setRevealed] = useState(false);

  const toggle = (arr: string[], val: string, setter: (v: string[]) => void) =>
    setter(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);

  const clearAll = () => {
    setTypes([]);
    setPapers([]);
    setLangs([]);
  };

  const hasFilter = types.length + papers.length + langs.length > 0;

  useEffect(() => {
    if (hasFilter) setRevealed(true);
  }, [hasFilter]);

  // The syllabus now lives on the hero Paper cards, so it is excluded from
  // the browser entirely. Default view = the newest essentials.
  const browsable = library.filter((i) => i.type !== "Syllabus");
  const base = hasFilter ? browsable : browsable.filter((i) => i.isNew);

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

  const chip = (active: boolean) =>
    "rounded-full border px-3 py-1 text-xs sm:text-sm font-medium transition-all active:scale-95 " +
    (active
      ? "pill-active"
      : "border-edge bg-bg text-muted hover:border-brand/40 hover:text-fg");

  return (
    <section id="materials" className="surface-b border-t border-edge">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">

        {revealed ? (
          <>
            {/* ── Compact filters (Category · Paper · Language) ── */}
            <div className="flex items-center justify-between">
              <p className="inline-flex items-center gap-2 eyebrow">
                <SlidersHorizontal size={13} className="text-brand" />
                Filter Materials
              </p>
              {hasFilter && (
                <button
                  onClick={clearAll}
                  className="text-xs font-semibold text-brand transition-colors hover:underline sm:text-sm"
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="card mt-4 space-y-3 p-4 sm:p-5">
              <FilterRow label="Category">
                {REAL_TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggle(types, t, setTypes)}
                    className={chip(types.includes(t))}
                  >
                    {t}
                  </button>
                ))}
              </FilterRow>

              <span className="block h-px bg-edge" />

              <FilterRow label="Paper">
                {(["Paper 1", "Paper 2"] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => toggle(papers, p, setPapers)}
                    className={chip(papers.includes(p))}
                  >
                    {p}
                  </button>
                ))}
              </FilterRow>

              <FilterRow label="Language">
                {(["English", "Hindi"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => toggle(langs, l, setLangs)}
                    className={chip(langs.includes(l))}
                  >
                    {l}
                  </button>
                ))}
              </FilterRow>
            </div>

            <p className="mb-3 mt-5 text-sm font-medium text-muted">
              {results.length}{" "}
              {results.length === 1 ? "material" : "materials"} found
            </p>
          </>
        ) : (
          /* ── Default: Latest & Essentials ── */
          <div className="mb-6">
            <p className="eyebrow">Fresh on the shelf</p>
            <h2 className="mt-1.5 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Latest &amp; Essentials
            </h2>
            <p className="mt-1.5 text-sm text-muted">
              The newest solutions and must-have material — use Quick Access above to filter everything.
            </p>
          </div>
        )}

        {/* ── Featured: newest memory-recall paper, pinned to the top of
            the Latest & Essentials view (hidden once filters are active) ── */}
        {!revealed && (
          <a
            href={FEATURED.driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-interactive card-tint group mb-2 flex items-center gap-3 p-3.5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
              <FileText size={17} />
            </span>
            <span className="min-w-0 flex-1 text-sm font-semibold leading-snug sm:text-[15px]">
              {FEATURED.title}
            </span>
            <span className="shrink-0 rounded bg-red-500/15 px-1.5 py-0.5 text-[10px] font-bold uppercase text-red-500">
              New
            </span>
            <ExternalLink
              size={16}
              className="shrink-0 text-muted transition-colors group-hover:text-brand"
            />
          </a>
        )}

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
                className="card-interactive card-tint group flex items-center gap-3 p-3.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <FileText size={17} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold sm:text-[15px]">
                    {item.name}
                  </span>
                  <span className="mt-1 flex items-center gap-2">
                    <PaperBadge paper={item.paper} />
                    <span className="text-xs text-muted">{item.language}</span>
                    <span className="truncate text-xs text-muted">
                      · {item.unit}
                    </span>
                  </span>
                </span>
                {item.isNew && (
                  <span className="shrink-0 rounded bg-brand-2 px-1.5 py-0.5 text-[10px] font-bold text-white">
                    New
                  </span>
                )}
                <ExternalLink
                  size={16}
                  className="shrink-0 text-muted transition-colors group-hover:text-brand"
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
