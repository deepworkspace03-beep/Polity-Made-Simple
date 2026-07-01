import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Languages,
  BookOpen,
  Landmark,
  Sparkles,
  Zap,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "../config";
import { UPDATES } from "../data/updates";
import UpdateLink from "./UpdateLink";
import SyllabusChip from "./SyllabusChip";

const PAPERS = [
  {
    paper: "paper1" as const,
    label: "Paper 1",
    title: "General",
    topics: ["Teaching Aptitude", "Research Methodology", "ICT & Reasoning"],
    cardClass: "hero-card-p1",
    dotClass: "bg-brand",
    btnClass: "btn-blue",
    to: "/paper-1",
    ariaLabel: "Open Paper 1 — General materials",
  },
  {
    paper: "paper2" as const,
    label: "Paper 2",
    title: "Political Science",
    topics: ["Political Theory", "Indian Government", "International Relations"],
    cardClass: "hero-card-p2",
    dotClass: "bg-brand-2",
    btnClass: "btn-green",
    to: "/paper-2",
    ariaLabel: "Open Paper 2 — Political Science materials",
  },
];

/**
 * Muted "Upcoming" status pill — filled with the page background so it blends
 * into the theme (light & dark), a hairline border for definition and a small
 * teal accent dot so it reads as a status without any loud colour.
 */
function UpcomingBadge() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-edge bg-bg px-1.5 py-0.5 font-mono text-[7px] font-semibold uppercase tracking-wide text-muted sm:text-[8px]">
      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand-2/70" />
      Upcoming
    </span>
  );
}

/** One paper card — whole card links; a Syllabus chip sits in the corner. */
function PaperCard({
  paper,
  label,
  title,
  topics,
  cardClass,
  dotClass,
  btnClass,
  to,
  ariaLabel,
}: (typeof PAPERS)[number]) {
  return (
    <div
      className={`hero-card ${cardClass} card relative flex flex-col bg-bg p-3 text-left sm:p-4`}
    >
      <Link to={to} aria-label={ariaLabel} className="absolute inset-0" />
      <div className="flex items-center justify-between gap-1.5">
        <span className="eyebrow shrink-0 whitespace-nowrap text-[9px] tracking-[0.12em] sm:text-[10px]">
          {label}
        </span>
        <SyllabusChip paper={paper} label={label} />
      </div>
      <h3 className="mt-1.5 text-[15px] font-extrabold sm:mt-2 sm:text-lg">
        {title}
      </h3>
      <ul className="mt-2 flex-1 space-y-1 sm:space-y-2">
        {topics.map((t) => (
          <li
            key={t}
            className="flex items-start gap-1.5 text-[10px] leading-snug text-muted sm:text-[13px]"
          >
            <span
              className={`mt-[4px] h-1 w-1 shrink-0 rounded-full sm:mt-[5px] sm:h-1.5 sm:w-1.5 ${dotClass}`}
            />
            {t}
          </li>
        ))}
      </ul>
      <span
        className={`${btnClass} mt-2.5 w-full py-2 text-[11px] shadow-none sm:text-sm`}
      >
        Open &rsaquo;
      </span>
    </div>
  );
}

/** Non-interactive "upcoming exam" chip with an accent icon + status pill. */
function UpcomingChip({
  icon: Icon,
  chipClass,
  iconClass,
  iconStyle,
  children,
}: {
  icon: LucideIcon;
  chipClass: string;
  iconClass?: string;
  iconStyle?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div
      className={`hero-chip ${chipClass} flex min-w-0 items-center gap-1.5 rounded-lg border border-edge bg-card px-2.5 py-2 text-left sm:gap-2.5 sm:px-4 sm:py-3`}
    >
      <span
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md sm:h-7 sm:w-7 ${iconClass ?? ""}`}
        style={iconStyle}
      >
        <Icon size={12} />
      </span>
      <span className="min-w-0 flex-1 truncate text-[11px] font-semibold text-fg/80 sm:text-sm">
        {children}
      </span>
      <UpcomingBadge />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="section-hero edge-glow relative overflow-hidden border-b border-edge"
    >
      {/* ── Animated glow blobs ── */}
      <div
        aria-hidden="true"
        className="anim-glow pointer-events-none absolute left-1/2 top-0 h-80 w-[52rem] max-w-full -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="anim-glow-slow pointer-events-none absolute -right-16 top-8 h-96 w-96 rounded-full bg-brand-2/[0.17] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="anim-glow pointer-events-none absolute -left-16 bottom-8 h-64 w-64 rounded-full bg-brand/[0.12] blur-3xl"
      />

      {/* Vertically-centered content fills the first screen; a two-column
          grid on desktop aligns the updates panel with the exam card. */}
      <div className="relative mx-auto flex min-h-[calc(100svh-124px)] max-w-6xl flex-col justify-center px-4 py-8 sm:px-6 lg:min-h-[calc(100svh-68px)] lg:py-10">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-x-10 lg:gap-y-10">

          {/* ── Heading block (desktop: col 1 / row 1) ── */}
          <div className="text-center lg:col-start-1 lg:row-start-1">
            {/* Eyebrow */}
            <span className="anim-hero eyebrow inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
              {SITE.initiative}
            </span>

            {/* Heading */}
            <h1 className="anim-hero anim-d1 mt-3 text-[2rem] font-extrabold leading-[1.05] tracking-tight sm:mt-4 sm:text-6xl sm:leading-[1.08] lg:text-[4.25rem]">
              Political Science{" "}
              <span className="text-gradient">Made Simple</span>
            </h1>

            {/* Subtitle */}
            <p className="anim-hero anim-d2 mx-auto mt-3 max-w-lg text-[13px] text-muted sm:mt-4 sm:text-base">
              <span className="sm:hidden">
                Notes, PYQs, mock tests &amp; strategy — all in one place.
              </span>
              <span className="hidden sm:inline">
                Notes, PYQs, mock tests, current affairs and exam strategy —{" "}
                <br className="hidden sm:block" />
                everything you need, in one clean place.
              </span>
            </p>
          </div>

          {/* ── Exam card + upcoming chips (desktop: col 1 / row 2) ── */}
          <div className="mt-10 sm:mt-12 lg:col-start-1 lg:row-start-2 lg:mt-0">
            <div className="mx-auto w-full max-w-lg">

              {/* Grouped exam card: exam tag · Hindi · Papers · Mock series.
                  A small floating badge overlaps the card's top edge. */}
              <div className="anim-hero anim-d3 hero-panel relative rounded-2xl p-3 pt-6 sm:p-4 sm:pt-7">
                <span className="badge-float absolute -top-3 left-1/2 z-10 -translate-x-1/2 sm:-top-3.5">
                  <Sparkles size={11} className="shrink-0" aria-hidden="true" />
                  Material Updates Every Week
                </span>

                {/* Exam tag + Hindi availability */}
                <div className="flex flex-col items-center gap-2">
                  <span className="inline-flex items-center gap-2.5 rounded-xl border border-edge bg-card px-4 py-1.5 shadow-sm">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg gradient-brand text-white">
                      <GraduationCap size={15} />
                    </span>
                    <span className="text-sm font-bold text-fg sm:text-[15px]">
                      {SITE.examLabel}
                    </span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-2/35 bg-brand-2/10 px-3 py-1 text-[12px] font-semibold text-fg sm:text-[13px]">
                    <Languages size={13} className="text-brand-2" />
                    Also available in{" "}
                    <span className="font-bold text-brand-2">हिंदी</span>
                  </span>
                </div>

                {/* Paper cards */}
                <div className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3">
                  {PAPERS.map((p) => (
                    <PaperCard key={p.paper} {...p} />
                  ))}
                </div>

                {/* Mock tests — slim full-width call to action */}
                <Link
                  to="/mock-tests"
                  className="group mt-2.5 flex w-full items-center justify-center gap-2 rounded-lg gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-[0_6px_18px_rgb(var(--brand)/0.3)] hover:brightness-105 active:scale-[0.98] sm:mt-3 sm:py-2.5"
                >
                  <ClipboardList size={15} />
                  Mock Test Series 2026
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>

              {/* ── Upcoming exams — two compact columns on every screen,
                  each with a muted "Upcoming" status pill ── */}
              <div className="anim-hero anim-d4 mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3">
                <UpcomingChip
                  icon={BookOpen}
                  chipClass="hero-chip-cuet"
                  iconClass="bg-brand-2/15 text-brand-2"
                >
                  CUET-PG
                </UpcomingChip>
                <UpcomingChip
                  icon={Landmark}
                  chipClass="hero-chip-rset"
                  iconStyle={{
                    backgroundColor: "rgb(245 158 11 / 0.12)",
                    color: "rgb(217 119 6)",
                  }}
                >
                  {/* Responsive label: "SET (Raj.)" on mobile, "Rajasthan SET" on ≥sm */}
                  <span className="sm:hidden">SET (Raj.)</span>
                  <span className="hidden sm:inline">Rajasthan SET</span>
                </UpcomingChip>
              </div>

              {/* More updates soon — links to the announcements page */}
              <Link
                to="/updates"
                className="group anim-hero anim-d4 mt-6 flex w-full items-center justify-center gap-2 rounded-lg gradient-brand px-3 py-2 text-white shadow-sm transition-all hover:shadow-[0_6px_18px_rgb(var(--brand)/0.3)] hover:brightness-105 active:scale-[0.98] sm:mt-7 sm:py-2.5"
              >
                <Zap size={12} className="animate-pulse" fill="currentColor" />
                <span className="text-[11px] font-semibold sm:text-xs">
                  More updates soon
                </span>
              </Link>
            </div>
          </div>

          {/* ── Desktop updates panel (col 2) — premium card, vertically
              centered against the full hero content for a balanced layout ── */}
          <aside className="hidden lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex lg:items-center">
            <div className="anim-hero anim-d4 hero-panel flex w-full flex-col rounded-2xl px-5 py-7 xl:min-h-[28rem]">

              {/* Header with View All */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md gradient-brand text-white">
                    <Zap size={10} fill="currentColor" />
                  </span>
                  <p className="eyebrow text-[11px]">Latest Updates</p>
                </div>
                <Link
                  to="/updates"
                  className="font-mono text-[10px] uppercase tracking-wider text-brand hover:underline"
                >
                  View All →
                </Link>
              </div>

              {/* Divider */}
              <span className="mt-4 block h-px bg-edge" />

              {/* All updates — listed from the top, each clickable */}
              <div className="mt-3 flex flex-1 flex-col justify-start gap-1 overflow-y-auto pr-0.5">
                {UPDATES.map((update) => (
                  <UpdateLink
                    key={update.id}
                    update={update}
                    className="group flex items-center gap-2.5 rounded-lg px-2 py-2.5 transition-colors hover:bg-fg/[0.04]"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 self-start rounded-full bg-brand-2 transition-transform group-hover:scale-125" />
                    <span className="min-w-0 flex-1 text-xs leading-snug text-muted transition-colors group-hover:text-fg">
                      {update.short ?? update.text}
                    </span>
                    {update.isNew && (
                      <span className="shrink-0 rounded bg-red-500/15 px-1.5 py-px text-[8px] font-bold uppercase text-red-500">
                        New
                      </span>
                    )}
                  </UpdateLink>
                ))}
              </div>

              {/* See all — pinned to the bottom of the panel */}
              <Link
                to="/updates"
                className="mt-3 flex items-center justify-center gap-1.5 border-t border-edge pt-4 text-[11px] font-medium text-muted transition-colors hover:text-fg"
              >
                <Zap size={9} className="text-brand-2" />
                See all announcements →
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}
