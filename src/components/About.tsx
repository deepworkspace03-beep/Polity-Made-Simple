import { Mail, BadgeCheck, Award, GraduationCap } from "lucide-react";
import { SITE } from "../config";
import Reveal from "./Reveal";
import profile from "../assets/profile.jpg";

/**
 * About Us — modern, premium and trustworthy. Photo + credentials on the
 * left (stacks on top on mobile), name and bio on the right.
 *
 * To use a different photo, just replace `src/assets/profile.jpg`.
 */
const CREDENTIALS = [
  { icon: BadgeCheck, label: "UGC-NET / JRF", detail: "Political Science · 99.826 %ile" },
  { icon: Award, label: "GATE", detail: "Economics" },
  { icon: GraduationCap, label: "UGC-NET", detail: "Geography" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-edge bg-bg">
      <Reveal>
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">

          <p className="eyebrow text-center">About Us</p>

          <div className="mt-6 grid gap-8 sm:mt-8 md:grid-cols-[auto,1fr] md:items-center md:gap-10">

            {/* ── Photo + verified badge ── */}
            <div className="relative mx-auto w-44 shrink-0 sm:w-52 md:mx-0">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] bg-brand/20 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-2xl border border-edge bg-card shadow-lg">
                <img
                  src={profile}
                  alt="Deepak — author"
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                {/* subtle theme tint along the bottom for a premium finish */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 to-transparent"
                />
              </div>
              <span className="absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-edge bg-card px-3 py-1.5 text-[11px] font-semibold shadow-md sm:text-xs">
                <BadgeCheck size={14} className="text-brand-2" />
                JRF Qualified
              </span>
            </div>

            {/* ── Name + credentials + bio ── */}
            <div className="text-center md:text-left">
              <p className="text-sm font-medium text-muted">Built &amp; mentored by</p>
              <h2 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl">
                <span className="text-gradient">Deepak</span>
              </h2>

              {/* Credentials */}
              <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                {CREDENTIALS.map((c) => {
                  const Icon = c.icon;
                  return (
                    <span
                      key={c.label}
                      className="inline-flex items-center gap-1.5 border border-edge bg-card px-2.5 py-1.5 text-xs"
                    >
                      <Icon size={13} className="shrink-0 text-brand" />
                      <span className="font-bold text-fg">{c.label}</span>
                      <span className="text-muted">{c.detail}</span>
                    </span>
                  );
                })}
              </div>

              {/* Bio */}
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-[15px] md:mx-0">
                Qualified UGC-NET/JRF in Political Science (99.826 percentile,
                June 2025), along with GATE in Economics and UGC-NET in
                Geography. With firsthand exam experience, dedicated to providing
                quality notes, mock tests, PYQ analysis, and practical
                preparation strategies — to crack JRF and make preparation
                simpler, smarter, and effective.
              </p>

              {/* Email */}
              <a
                href={`mailto:${SITE.email}`}
                className="mt-5 inline-flex items-center gap-2 border border-edge bg-card px-3.5 py-2 text-sm transition-all hover:border-brand/40 hover:shadow-sm"
              >
                <Mail size={14} className="shrink-0 text-brand" />
                <span className="hidden text-muted sm:inline">Questions or feedback?</span>
                <span className="font-semibold text-fg">{SITE.email}</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
