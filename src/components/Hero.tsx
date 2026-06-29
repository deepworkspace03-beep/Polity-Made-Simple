import { Link } from "react-router-dom";
import {
  FileText,
  GraduationCap,
  Languages,
  BookOpen,
  Landmark,
  Zap,
  ClipboardList,
} from "lucide-react";
import { SITE } from "../config";
import { UPDATES } from "../data/updates";
import UpdateLink from "./UpdateLink";

const PAPER_1_TOPICS = ["Teaching Aptitude", "Research Methodology", "ICT & Reasoning"];
const PAPER_2_TOPICS = ["Political Theory", "Indian Government", "International Relations"];

export default function Hero() {
  return (
    <section
      id="home"
      className="section-hero relative overflow-hidden border-b border-edge"
    >
      {/* ── Animated glow blobs ── */}
      <div
        aria-hidden="true"
        className="anim-glow pointer-events-none absolute left-1/2 top-0 h-80 w-[52rem] max-w-full -translate-x-1/2 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="anim-glow-slow pointer-events-none absolute -right-16 top-8 h-96 w-96 rounded-full bg-brand-2/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="anim-glow pointer-events-none absolute -left-16 bottom-8 h-64 w-64 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex min-h-[calc(100svh-128px)] flex-col lg:min-h-[calc(100svh-68px)] lg:flex-row">

          {/* ── Main hero content ── */}
          <div className="flex flex-1 flex-col items-center justify-start px-4 py-2 text-center sm:px-10 sm:py-12 lg:justify-center lg:py-14">

            {/* Eyebrow */}
            <span className="anim-hero eyebrow inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-2" />
              {SITE.initiative}
            </span>

            {/* Heading */}
            <h1 className="anim-hero anim-d1 mt-2 text-[2rem] font-extrabold leading-[1.05] tracking-tight sm:mt-4 sm:text-6xl sm:leading-[1.08] lg:text-[4.5rem]">
              Political Science{" "}
              <span className="text-gradient">Made Simple</span>
            </h1>

            {/* Subtitle */}
            <p className="anim-hero anim-d2 mx-auto mt-1.5 max-w-lg text-[13px] text-muted sm:mt-4 sm:text-base">
              <span className="sm:hidden">
                Notes, PYQs, mock tests &amp; strategy — all in one place.
              </span>
              <span className="hidden sm:inline">
                Notes, PYQs, mock tests, current affairs and exam strategy —{" "}
                <br className="hidden sm:block" />
                everything you need, in one clean place.
              </span>
            </p>

            {/* ── Grouped exam card: exam tag · Hindi · Papers · Mock series ── */}
            <div className="anim-hero anim-d3 mx-auto mt-6 w-full max-w-lg rounded-2xl border border-edge bg-card/60 p-2.5 shadow-sm backdrop-blur-sm sm:mt-7 sm:p-4">

              {/* Exam tag + Hindi availability */}
              <div className="flex flex-col items-center gap-1.5">
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

              {/* Paper cards — always 2 columns, full card is a link */}
              <div className="mt-2.5 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-3">

                {/* Paper 1 */}
                <Link
                  to="/paper-1"
                  className="hero-card hero-card-p1 card flex flex-col bg-bg p-3 text-left sm:p-4"
                >
                  <div className="flex items-start justify-between">
                    <span className="eyebrow text-[9px] sm:text-[10px]">Paper 1</span>
                    <FileText size={12} className="mt-0.5 shrink-0 text-muted/50" />
                  </div>
                  <h3 className="mt-1.5 text-[15px] font-extrabold sm:mt-2 sm:text-lg">
                    General
                  </h3>
                  <ul className="mt-2 flex-1 space-y-1 sm:space-y-2">
                    {PAPER_1_TOPICS.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-1.5 text-[10px] leading-snug text-muted sm:text-[13px]"
                      >
                        <span className="mt-[4px] h-1 w-1 shrink-0 rounded-full bg-brand sm:mt-[5px] sm:h-1.5 sm:w-1.5" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span
                    className="mt-2.5 flex items-center justify-center rounded-lg py-2 text-[11px] font-semibold text-white sm:text-sm"
                    style={{ backgroundColor: "rgb(var(--blue))" }}
                  >
                    Open &rsaquo;
                  </span>
                </Link>

                {/* Paper 2 */}
                <Link
                  to="/paper-2"
                  className="hero-card hero-card-p2 card flex flex-col bg-bg p-3 text-left sm:p-4"
                >
                  <div className="flex items-start justify-between">
                    <span className="eyebrow text-[9px] sm:text-[10px]">Paper 2</span>
                    <FileText size={12} className="mt-0.5 shrink-0 text-muted/50" />
                  </div>
                  <h3 className="mt-1.5 text-[15px] font-extrabold sm:mt-2 sm:text-lg">
                    Political Science
                  </h3>
                  <ul className="mt-2 flex-1 space-y-1 sm:space-y-2">
                    {PAPER_2_TOPICS.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-1.5 text-[10px] leading-snug text-muted sm:text-[13px]"
                      >
                        <span className="mt-[4px] h-1 w-1 shrink-0 rounded-full bg-brand-2 sm:mt-[5px] sm:h-1.5 sm:w-1.5" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span
                    className="mt-2.5 flex items-center justify-center rounded-lg py-2 text-[11px] font-semibold text-white sm:text-sm"
                    style={{ backgroundColor: "rgb(var(--green))" }}
                  >
                    Open &rsaquo;
                  </span>
                </Link>
              </div>

              {/* Mock tests — slim full-width call to action */}
              <Link
                to="/mock-tests"
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-lg gradient-brand px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform active:scale-[0.98] sm:mt-3 sm:py-2.5"
              >
                <ClipboardList size={15} />
                Mock Test Series 2026
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            {/* ── Upcoming exams — kept visible at the bottom of the first screen ── */}
            <div className="anim-hero anim-d4 mx-auto mt-3 grid w-full max-w-lg grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
              <div className="hero-chip hero-chip-cuet flex min-w-0 items-center gap-1.5 rounded-lg border border-edge bg-card px-2.5 py-2 sm:gap-2.5 sm:px-4 sm:py-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-2/15 text-brand-2 sm:h-7 sm:w-7">
                  <BookOpen size={12} />
                </span>
                <span className="min-w-0 truncate text-[11px] font-semibold text-fg/80 sm:text-sm">CUET-PG</span>
                <span className="shrink-0 rounded bg-fg/10 px-1 py-px font-mono text-[7px] uppercase tracking-wider text-fg/50 sm:px-1.5 sm:py-0.5 sm:text-[8px]">
                  Upcoming
                </span>
              </div>
              <div className="hero-chip hero-chip-rset flex min-w-0 items-center gap-1.5 rounded-lg border border-edge bg-card px-2.5 py-2 sm:gap-2.5 sm:px-4 sm:py-3">
                <span
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md sm:h-7 sm:w-7"
                  style={{ backgroundColor: "rgb(245 158 11 / 0.12)", color: "rgb(217 119 6)" }}
                >
                  <Landmark size={12} />
                </span>
                <span className="min-w-0 truncate text-[11px] font-semibold text-fg/80 sm:text-sm">SET Rajasthan</span>
                <span className="shrink-0 rounded bg-fg/10 px-1 py-px font-mono text-[7px] uppercase tracking-wider text-fg/50 sm:px-1.5 sm:py-0.5 sm:text-[8px]">
                  Upcoming
                </span>
              </div>
            </div>
          </div>

          {/* ── Desktop updates panel (RIGHT) — full-height, blends with the
              hero background (no plain card), list fills vertically ── */}
          <aside className="hidden w-64 shrink-0 border-l border-edge bg-bg/20 backdrop-blur-[1px] lg:flex xl:w-72">
            <div className="flex flex-1 flex-col px-5 py-10 xl:px-6">

              {/* Header with View All */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center gradient-brand text-white">
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
              <span className="mt-3 block h-px bg-edge" />

              {/* All updates — fill the available height, each clickable */}
              <div className="mt-4 flex-1 space-y-4 overflow-y-auto pr-1">
                {UPDATES.map((update) => (
                  <UpdateLink
                    key={update.id}
                    update={update}
                    className="group flex items-center gap-2.5"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2" />
                    <span className="min-w-0 flex-1 truncate text-xs text-muted transition-colors group-hover:text-fg">
                      {update.short ?? update.text}
                    </span>
                    {update.isNew && (
                      <span className="shrink-0 bg-brand-2 px-1 py-px text-[8px] font-bold uppercase text-white">
                        New
                      </span>
                    )}
                  </UpdateLink>
                ))}
              </div>

              {/* See all — pinned to the bottom of the panel */}
              <Link
                to="/updates"
                className="mt-4 flex items-center justify-center gap-1.5 border-t border-edge pt-3 text-[11px] font-medium text-muted transition-colors hover:text-fg"
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
