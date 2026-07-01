import { Fragment } from "react";
import { Mail } from "lucide-react";
import { SITE, AUTHOR } from "../config";
import Reveal from "./Reveal";
import profile from "../assets/profile.webp";

/**
 * Meet Your Mentor — a compact, premium author card. The name, roles and
 * bio all come from `AUTHOR` in src/config.ts (edit content there). To
 * change the photo, replace `src/assets/profile.webp`.
 */
export default function About() {
  return (
    <section id="about" className="surface-a border-t border-edge">
      <Reveal>
        <div className="mx-auto max-w-2xl px-4 py-9 sm:px-6 sm:py-11">

          {/* Section heading */}
          <h2 className="text-center text-xl font-extrabold tracking-tight sm:text-2xl">
            Meet Your <span className="text-gradient">Mentor</span>
          </h2>

          {/* Author card */}
          <div className="hero-panel mt-5 rounded-2xl p-5 transition-shadow hover:shadow-[var(--shadow-card-hover)] sm:mt-6 sm:p-6">

            {/* Identity row: blended photo + name + roles */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <div className="relative shrink-0">
                <span
                  aria-hidden="true"
                  className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-brand/25 to-brand-2/25 blur-md"
                />
                <img
                  src={profile}
                  alt={`${AUTHOR.name} — Founder & Educator`}
                  loading="lazy"
                  decoding="async"
                  width={240}
                  height={240}
                  className="relative h-16 w-16 rounded-full object-cover shadow-md ring-1 ring-edge sm:h-[72px] sm:w-[72px]"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-extrabold tracking-tight sm:text-xl">
                  <span className="text-gradient">{AUTHOR.name}</span>
                </h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[12.5px] font-semibold text-muted sm:text-[13px]">
                  {AUTHOR.roles.map((role, i) => (
                    <Fragment key={role}>
                      {i > 0 && (
                        <span aria-hidden="true" className="text-brand-2/70">
                          •
                        </span>
                      )}
                      {role}
                    </Fragment>
                  ))}
                </p>
              </div>
            </div>

            {/* Short bio — compact paragraphs */}
            <div className="mt-4 space-y-2 text-[13px] leading-relaxed text-muted sm:text-sm">
              {AUTHOR.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Contact — label shows on tablet/desktop, email always visible */}
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="hidden font-mono text-[11px] uppercase tracking-widest text-muted/70 sm:inline">
                {AUTHOR.contactLabel}
              </span>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-edge bg-card px-3 py-1.5 text-[13px] transition-all hover:border-brand/40 hover:shadow-sm active:scale-[0.98]"
              >
                <Mail size={14} className="shrink-0 text-brand" />
                <span className="font-semibold text-fg">{SITE.email}</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
