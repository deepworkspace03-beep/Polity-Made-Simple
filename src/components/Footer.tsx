import { Send, MessageCircle, Users } from "lucide-react";
import { SITE, COMMUNITY } from "../config";
import footerLogo from "../assets/footer-logo.webp";

const BRAND_VAR: Record<"telegram" | "whatsapp", string> = {
  telegram: "--tg",
  whatsapp: "--wa",
};

const BRAND_ICON = {
  telegram: Send,
  whatsapp: MessageCircle,
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge bg-band">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6">
        {/* Main row — brand left, community right, vertically centered & symmetric */}
        <div className="flex items-center justify-between gap-4">

          {/* Brand — left */}
          <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <img
              src={footerLogo}
              alt="The JRF Club"
              width={46}
              height={46}
              loading="lazy"
              decoding="async"
              className="h-10 w-10 shrink-0 sm:h-[46px] sm:w-[46px]"
            />
            <div className="min-w-0">
              <p className="text-sm font-extrabold leading-tight tracking-tight sm:text-[15px]">
                <span className="text-gradient">{SITE.footerInitiative}</span>
              </p>
              <p className="mt-0.5 text-[11px] font-medium text-muted">
                {SITE.footerTagline}
              </p>
            </div>
          </div>

          {/* Community — right */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-4">
            <p className="hidden max-w-[7rem] text-right text-[11px] font-medium leading-tight text-muted sm:block">
              Join us for regular updates
            </p>
            <div className="flex items-center gap-2.5 sm:gap-3">
              {COMMUNITY.map((c, i) => {
                const Icon = i === COMMUNITY.length - 1 ? Users : BRAND_ICON[c.brand];
                const shortLabel = ["Telegram", "WhatsApp", "Group"][i];
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={c.label}
                    className="flex flex-col items-center gap-1"
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center border border-edge bg-card transition-all hover:border-brand/40 hover:shadow-sm active:scale-95"
                      style={{ color: `rgb(var(${BRAND_VAR[c.brand]}))` }}
                    >
                      <Icon size={16} />
                    </span>
                    <span className="text-[9px] text-muted/60">{shortLabel}</span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Copyright — slim divider bar */}
        <p className="mt-4 border-t border-edge pt-3 text-center font-mono text-[10px] text-muted/60">
          © {year} {SITE.copyrightName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
