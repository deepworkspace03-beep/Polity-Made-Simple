import { useId } from "react";

/**
 * Political Science JRF Club emblem — a faithful vector recreation of the
 * club logo: a glossy blue→teal disc with a white dove over a stepped
 * pedestal, flanked by "POLITICAL · SCIENCE", with "JRF" and "CLUB" below.
 *
 * Pure SVG so it stays razor-sharp at any size and renders identically in
 * light and dark mode. To swap in an exact raster instead, drop the PNG in
 * `public/` and replace the <JrfLogo /> usages with an <img>.
 */
export default function JrfLogo({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const uid = useId().replace(/:/g, "");
  const grad = "jrfGrad-" + uid;
  const gloss = "jrfGloss-" + uid;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      role="img"
      aria-label="Political Science JRF Club"
    >
      <defs>
        <linearGradient id={grad} x1="6" y1="6" x2="94" y2="94" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2C57C8" />
          <stop offset="0.55" stopColor="#2774C0" />
          <stop offset="1" stopColor="#23B7AC" />
        </linearGradient>
        <radialGradient id={gloss} cx="0.35" cy="0.28" r="0.75">
          <stop stopColor="#ffffff" stopOpacity="0.30" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* disc + subtle gloss + hairline rim */}
      <circle cx="50" cy="50" r="49" fill={`url(#${grad})`} />
      <circle cx="50" cy="50" r="49" fill={`url(#${gloss})`} />
      <circle cx="50" cy="50" r="48.4" fill="none" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="1.2" />

      <g fill="#ffffff">
        {/* dove — spread wings */}
        <path d="M50 30c-9-7.6-20.4-8.4-31.6-3 10.6-.4 20.6 2.8 31.6 9 11-6.2 21-9.4 31.6-9-11.2-5.4-22.6-4.6-31.6 3Z" />
        {/* dove — head + body */}
        <circle cx="50" cy="17.4" r="3.4" />
        <path d="M47.7 20.2h4.6l-1.1 10.4h-2.4l-1.1-10.4Z" />

        {/* stepped pedestal */}
        <rect x="42.5" y="31.5" width="15" height="3.4" rx="1.5" />
        <rect x="37.5" y="36.2" width="25" height="3.8" rx="1.6" />
        <rect x="32" y="41.3" width="36" height="3.9" rx="1.7" />

        {/* flanking wordmark */}
        <text x="29.5" y="42" textAnchor="end" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.3">POLITICAL</text>
        <text x="70.5" y="42" textAnchor="start" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="7" letterSpacing="0.3">SCIENCE</text>

        {/* primary mark */}
        <text x="50" y="69" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="31" letterSpacing="0.5">JRF</text>
        <text x="50" y="86" textAnchor="middle" fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="13" letterSpacing="2.5">CLUB</text>
      </g>
    </svg>
  );
}
