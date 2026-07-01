import { Link } from "react-router-dom";
import { Sparkles, ArrowRight } from "lucide-react";
import { quickAccess } from "../data/quickAccess";
import Reveal from "./Reveal";

/**
 * Quick-access tiles — the primary entry point into the study material.
 * Each tile either filters the materials section, opens another page, or
 * shows a "coming soon" note. Visually highlighted so it reads as the
 * main call-to-action on the home page.
 */
export default function QuickAccess({
  onPick,
  onComingSoon,
}: {
  onPick: (type: string) => void;
  onComingSoon: (message: string) => void;
}) {
  const cardClass =
    "card-interactive card-tint group flex items-center gap-3 p-4 text-left shadow-sm";

  return (
    <section className="surface-a border-b border-edge">
      <Reveal className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">

        {/* Heading */}
        <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
          <Sparkles size={22} className="text-brand" />
          Quick Access
        </h2>
        <p className="mt-2 text-center text-sm text-muted">
          Jump straight to the material you need.
        </p>

        {/* Tiles */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3">
          {quickAccess.map((item) => {
            const Icon = item.icon;
            const inner = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:gradient-brand group-hover:text-white">
                  <Icon size={19} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[15px] font-bold leading-tight">
                    {item.title}
                  </span>
                  <span className="block truncate text-xs text-muted sm:text-[13px]">
                    {item.description}
                  </span>
                </span>
                <ArrowRight
                  size={15}
                  className="hidden shrink-0 text-muted/50 transition-all group-hover:translate-x-0.5 group-hover:text-brand sm:block"
                />
              </>
            );

            // Route tile → real link.
            if (item.action.kind === "route") {
              return (
                <Link key={item.title} to={item.action.to} className={cardClass}>
                  {inner}
                </Link>
              );
            }

            // Filter / coming-soon tile → button.
            return (
              <button
                key={item.title}
                className={cardClass}
                onClick={() => {
                  if (item.action.kind === "filter") {
                    onPick(item.action.type);
                  } else {
                    onComingSoon(`${item.title} — coming soon. Stay tuned!`);
                  }
                }}
              >
                {inner}
              </button>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
