import { ExternalLink } from "lucide-react";
import { UPDATES } from "../data/updates";
import PageHeader from "../components/PageHeader";

export default function Updates() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Announcements"
        title="Latest Updates"
        subtitle="New content, exam news, and site announcements — all in one place."
      />

      {/* Update list */}
      <div className="mt-8 space-y-2">
        {UPDATES.map((update) => {
          const hasLink = update.href || update.driveUrl;
          const Component = hasLink ? "a" : "div";
          const linkProps = hasLink
            ? {
                href: update.driveUrl || update.href,
                ...(update.driveUrl && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                }),
              }
            : {};

          return (
            <Component
              key={update.id}
              {...linkProps}
              className={`flex items-start gap-4 p-4 transition-all ${
                hasLink
                  ? "card-interactive group cursor-pointer"
                  : "card"
              }`}
            >
              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-2" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-fg">{update.text}</p>
                  {update.isNew && (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-md bg-red-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-red-500">
                      NEW
                    </span>
                  )}
                </div>
                {update.date && (
                  <p className="mt-1 font-mono text-[10px] text-muted">{update.date}</p>
                )}
              </div>
              {hasLink && (
                <ExternalLink
                  size={15}
                  className="mt-1 shrink-0 text-muted transition-colors group-hover:text-brand"
                  aria-hidden="true"
                />
              )}
            </Component>
          );
        })}
      </div>
    </section>
  );
}
