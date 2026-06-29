import { Send, MessageCircle, Users } from "lucide-react";
import JrfLogo from "./JrfLogo";
import { SITE, COMMUNITY } from "../config";

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
          <div className="min-w-0">
            <div className="flex items-center gap-2.5">
              <JrfLogo size={30} className="shrink-0" />
              <span className="whitespace-nowrap text-sm font-extrabold">
                <span className="text-gradient">Polity</span> Made Simple
              </span>
            </div>
            <p className="mt-1 text-[11px] text-muted">
              A <span className="font-semibold text-gradient">JRF Club</span> Initiative
            </p>
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
          © {year} {SITE.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
