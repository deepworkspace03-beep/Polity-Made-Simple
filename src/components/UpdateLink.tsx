import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import type { Update } from "../data/updates";

/**
 * Renders an update as a directly-clickable link.
 *  • If the update has a `driveUrl` → opens that file in a new tab.
 *  • Otherwise → routes to its `href` (falls back to the Updates page).
 * Used by the desktop hero panel, the mobile ticker and the Updates page so
 * every update is clickable straight from the section (no "View All" first).
 *
 * `decorative` marks a visual duplicate (e.g. the second copy in a marquee
 * loop) as hidden from screen readers and keyboard focus.
 */
export default function UpdateLink({
  update,
  className,
  children,
  decorative = false,
}: {
  update: Update;
  className?: string;
  children: ReactNode;
  decorative?: boolean;
}) {
  const a11y = decorative ? { "aria-hidden": true, tabIndex: -1 } : {};

  if (update.driveUrl) {
    return (
      <a
        href={update.driveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...a11y}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={update.href ?? "/updates"} className={className} {...a11y}>
      {children}
    </Link>
  );
}
