import { Mail } from "lucide-react";
import { SITE } from "../config";
import Reveal from "./Reveal";
import profile from "../assets/profile.webp";

/**
 * About Author — a compact author byline. A small photo (blended into the
 * background with a soft brand halo) is paired with the name and role, and
 * a short bio spans below to keep the section low and tidy. To change the
 * photo, just replace `src/assets/profile.webp`.
 */
export default function About() {
  return (
    <section id="about" className="surface-a border-t border-edge">
      <Reveal>
        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-10">

          <p className="eyebrow text-center">About Author</p>

          <div className="mt-5 sm:mt-6">

            {/* ── Identity row: blended photo + name + role ── */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="relative shrink-0">
                <span
                  aria-hidden="true"
                  className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-brand/25 to-brand-2/25 blur-md"
                />
                <img
                  src={profile}
                  alt="Deepak — Founder & Educator"
                  loading="lazy"
                  decoding="async"
                  width={240}
                  height={240}
                  className="relative h-16 w-16 rounded-full object-cover shadow-md ring-1 ring-edge sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <div className="min-w-0">
                <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                  <span className="text-gradient">Deepak</span>
                </h2>
                <p className="mt-0.5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-muted">
                  <span className="h-1 w-1 rounded-full bg-brand-2" />
                  Founder &amp; Educator
                </p>
              </div>
            </div>

            {/* ── Short bio ── */}
            <p className="mt-3.5 text-[13px] leading-relaxed text-muted sm:text-sm">
              UGC-NET/JRF in Political Science (99.826&nbsp;%ile, 2025), with GATE
              (Economics) &amp; UGC-NET (Geography). Sharing quality notes, mock
              tests, PYQ analysis &amp; exam strategy — to make JRF prep simpler
              and smarter.
            </p>

            {/* ── Contact ── */}
            <a
              href={`mailto:${SITE.email}`}
              className="mt-3 inline-flex items-center gap-2 border border-edge bg-card px-3 py-1.5 text-[13px] transition-all hover:border-brand/40 hover:shadow-sm"
            >
              <Mail size={14} className="shrink-0 text-brand" />
              <span className="font-semibold text-fg">{SITE.email}</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
