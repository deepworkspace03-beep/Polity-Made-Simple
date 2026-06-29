import { useId } from "react";

/**
 * JRF Club emblem — a crisp SVG rendition of the Political Science JRF Club
 * mark (a dove with spread wings over a pedestal) on the site's blue→teal
 * gradient, inside a circular badge. Pure SVG so it stays sharp at any size
 * and matches the theme in both light and dark mode.
 *
 * To use the exact uploaded PNG instead, drop it in `public/` (e.g.
 * `public/jrf-club-logo.png`) and swap this component for an <img>.
 */
export default function JrfLogo({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const gradId = "jrfGrad-" + useId().replace(/:/g, "");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      role="img"
      aria-label="JRF Club"
    >
      <defs>
        <linearGradient id={gradId} x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B6BFF" />
          <stop offset="1" stopColor="#34D39E" />
        </linearGradient>
      </defs>

      {/* circular badge */}
      <circle cx="24" cy="24" r="23" fill={`url(#${gradId})`} />
      <circle cx="24" cy="24" r="23" fill="none" stroke="#ffffff" strokeOpacity="0.18" />

      <g fill="#ffffff">
        {/* dove — spread wings */}
        <path d="M24 18.4C19.6 14.6 14 14.2 8.6 16.8c5.2-.3 10 1.3 15.4 4.2 5.4-2.9 10.2-4.5 15.4-4.2C34 14.2 28.4 14.6 24 18.4Z" />
        {/* dove — head + body */}
        <circle cx="24" cy="14.6" r="1.9" />
        <path d="M22.8 16.6h2.4l-.5 5.2h-1.4l-.5-5.2Z" />

        {/* pedestal */}
        <rect x="20.3" y="23" width="7.4" height="2.1" rx="1" />
        <rect x="17.8" y="26.2" width="12.4" height="2.3" rx="1.1" />
        <rect x="15.4" y="29.6" width="17.2" height="2.3" rx="1.1" />
      </g>
    </svg>
  );
}
