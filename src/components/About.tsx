import { Mail } from "lucide-react";
import { SITE } from "../config";
import Reveal from "./Reveal";
import profile from "../assets/profile.jpg";

/**
 * About Us — clean, compact and trustworthy. Photo on the left (stacks on
 * top on mobile), name and bio on the right.
 *
 * To use a different photo, just replace `src/assets/profile.jpg`.
 */
export default function About() {
  return (
    <section id="about" className="border-t border-edge bg-bg">
      <Reveal>
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">

          <p className="eyebrow text-center">About Us</p>

          <div className="mt-6 grid gap-6 sm:grid-cols-[auto,1fr] sm:items-center sm:gap-8">

            {/* ── Photo ── */}
            <div className="mx-auto w-32 shrink-0 sm:mx-0 sm:w-40">
              <div className="overflow-hidden rounded-2xl border border-edge bg-card shadow-md">
                <img
                  src={profile}
                  alt="Deepak — founder & mentor"
                  loading="lazy"
                  width={320}
                  height={320}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            {/* ── Name + bio + contact ── */}
            <div className="text-center sm:text-left">
              <p className="text-sm font-medium text-muted">Built &amp; mentored by</p>
              <h2 className="mt-0.5 text-2xl font-extrabold tracking-tight sm:text-3xl">
                <span className="text-gradient">Deepak</span>
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:mx-0 sm:text-[15px]">
                Qualified UGC-NET/JRF in Political Science (99.826 percentile,
                June 2025), along with GATE in Economics and UGC-NET in
                Geography. With firsthand exam experience, dedicated to providing
                quality notes, mock tests, PYQ analysis, and practical
                preparation strategies — to crack JRF and make preparation
                simpler, smarter, and effective.
              </p>

              <a
                href={`mailto:${SITE.email}`}
                className="mt-4 inline-flex items-center gap-2 border border-edge bg-card px-3.5 py-2 text-sm transition-all hover:border-brand/40 hover:shadow-sm"
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
