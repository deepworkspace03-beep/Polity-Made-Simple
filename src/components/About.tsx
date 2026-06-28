import { Mail } from "lucide-react";
import { SITE } from "../config";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="border-t border-edge bg-bg">
      <Reveal>
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">

          {/* Compact centered layout with avatar and label stacked */}
          <div className="flex flex-col items-center gap-3 text-center sm:gap-4">

            {/* Avatar — circle is intentional for person avatar */}
            <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-brand/25 blur-xl"
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full gradient-brand text-base font-extrabold text-white ring-4 ring-bg sm:h-16 sm:w-16 sm:text-lg">
                D
              </div>
            </div>

            {/* Label below avatar */}
            <p className="eyebrow">About</p>

            {/* Bio + contact — more compact */}
            <div className="max-w-2xl">
              {/* Bio */}
              <p className="text-xs leading-relaxed text-muted sm:text-sm">
                The author has qualified UGC-NET/JRF in Political Science (99.826 percentile, June 2025), 
                along with GATE in Economics and UGC-NET in Geography. With years of first-hand exam 
                experience and mentoring, the focus is on providing comprehensive preparation strategy, 
                quality notes, mock tests, and detailed PYQs — all in one place to make preparation 
                simpler, smarter, and effective.
              </p>

              {/* Email contact */}
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 inline-flex items-center gap-2 border border-edge bg-card px-3 py-2 text-xs transition-all hover:border-brand/40 hover:shadow-sm sm:mt-4"
              >
                <Mail size={12} className="shrink-0 text-brand" />
                <span className="hidden text-[10px] text-muted sm:inline">Questions or feedback?</span>
                <span className="text-xs font-semibold text-fg">{SITE.email}</span>
              </a>
            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
