import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import type { Update } from "../data/updates";

/**
 * Renders an update as a directly-clickable link.
 *  • If the update has a `driveUrl` → opens that file in a new tab.
 *  • Otherwise → routes to its `href` (falls back to the Updates page).
 * Used by both the desktop hero panel and the mobile updates strip so
 * every update is clickable straight from the section (no "View All" first).
 */
export default function UpdateLink({
  update,
  className,
  children,
}: {
  update: Update;
  className?: string;
  children: ReactNode;
}) {
  if (update.driveUrl) {
    return (
      <a
        href={update.driveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={update.href ?? "/updates"} className={className}>
      {children}
    </Link>
  );
}
