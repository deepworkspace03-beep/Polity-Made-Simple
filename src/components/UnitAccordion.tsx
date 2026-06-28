import { useState } from "react";
import { ChevronDown, FileText, ExternalLink } from "lucide-react";
import type { ResSection } from "../data/resources";

/**
 * One collapsible Unit card.
 * - Has files  → expandable; shows categories (Handwritten Notes, etc.)
 *   with one button per PDF. Each button opens the Drive PDF in a new tab.
 * - No files   → static card showing "Resources will be uploaded soon."
 */
export default function UnitAccordion({ section }: { section: ResSection }) {
  const [open, setOpen] = useState(false);

  const fileCount = section.categories.reduce(
    (sum, c) => sum + c.files.length,
    0
  );
  const isEmpty = fileCount === 0;

  // Empty unit → simple static card with the "soon" message.
  if (isEmpty) {
    return (
      <div className="card flex items-center justify-between p-4">
        <h3 className="text-sm font-bold">{section.title}</h3>
        <span className="font-mono text-[11px] text-muted">
          Resources will be uploaded soon
        </span>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden">
      {/* header (click to expand) */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 p-4 text-left transition-colors hover:bg-fg/5"
      >
        <span className="flex items-center gap-2">
          <h3 className="text-sm font-bold">{section.title}</h3>
          <span className="rounded-md bg-brand/10 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-brand">
            {fileCount}
          </span>
        </span>
        <ChevronDown
          size={18}
          className={
            "shrink-0 text-muted transition-transform " +
            (open ? "rotate-180" : "")
          }
        />
      </button>

      {/* body */}
      {open && (
        <div className="border-t border-edge px-4 pb-4 pt-3">
          {section.categories.map((cat) => (
            <div key={cat.label} className="mb-4 last:mb-0">
              <p className="eyebrow mb-2">{cat.label}</p>
              <div className="flex flex-col gap-1.5">
                {cat.files.map((file) => (
                  <a
                    key={file.url}
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 rounded-lg border border-edge bg-bg px-3 py-2 text-sm transition-colors hover:border-brand/40 hover:bg-fg/5"
                  >
                    <FileText size={15} className="shrink-0 text-brand" />
                    <span className="flex-1 break-words">{file.name}</span>
                    <ExternalLink
                      size={14}
                      className="shrink-0 text-muted transition-colors group-hover:text-brand"
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
