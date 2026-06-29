// ───────────────────────────────────────────────────────────────
//  EDIT YOUR LINKS & TEXT HERE
//  The main file to touch for links, brand, and the short labels
//  shown across the site.
// ───────────────────────────────────────────────────────────────

export const SITE = {
  brandName: "Polity Made Simple", // header brand
  tagline: "Study smarter, learn faster.", // line under the header brand name
  initiative: "An initiative by JRF Toppers", // hero eyebrow line
  examLabel: "UGC NET JRF · December 2026", // highlighted hero tag

  // Footer identity (kept separate from the header brand on purpose).
  footerInitiative: "A JRF Club Initiative", // colourful footer brand line
  footerTagline: "Study Smarter. Learn Faster.", // line under the footer title
  copyrightName: "Political Science Made Simple", // owner shown in the © line

  // Your real links:
  telegram: "https://t.me/politicalsciencenetjrfclub",
  whatsapp: "https://chat.whatsapp.com/J8D5WkaJYj0APKBNIY4KhX?s=cl&p=a&ilr=0",
  // If you have a separate WhatsApp *Channel*, paste it here.
  whatsappChannel: "https://whatsapp.com/channel/0029VbCCAKL42DcZ9no2Mo0R",
  email: "deep.workspace03@gmail.com",
};

// Header navigation. "/#id" links scroll to a homepage section;
// plain paths open another page.
export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Paper 1", href: "/paper-1" },
  { label: "Paper 2", href: "/paper-2" },
  { label: "Mock Tests", href: "/mock-tests" },
  { label: "About", href: "/#about" },
];

// Community channels (Contact section). `brand` picks the colour:
// "telegram" → Telegram blue, "whatsapp" → WhatsApp green.
export const COMMUNITY: {
  label: string;
  desc: string;
  href: string;
  brand: "telegram" | "whatsapp";
}[] = [
  { label: "Telegram", desc: "Channel · updates", href: SITE.telegram, brand: "telegram" },
  { label: "WhatsApp", desc: "Channel · alerts", href: SITE.whatsappChannel, brand: "whatsapp" },
  { label: "Discussion Group", desc: "Ask & discuss", href: SITE.whatsapp, brand: "whatsapp" },
];
