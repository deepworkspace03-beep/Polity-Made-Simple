/**
 * Small coloured badge naming the paper an item belongs to.
 * Shared by the materials browser and the mock-tests page.
 */
const TONES = {
  "Paper 1": "bg-brand/10 text-brand",
  "Paper 2": "bg-brand-2/10 text-brand-2",
  Full: "gradient-brand text-white",
} as const;

export type PaperTone = keyof typeof TONES;

export default function PaperBadge({ paper }: { paper: PaperTone }) {
  return (
    <span
      className={`shrink-0 whitespace-nowrap rounded-md px-1.5 py-0.5 text-[11px] font-semibold ${TONES[paper]}`}
    >
      {paper}
    </span>
  );
}
