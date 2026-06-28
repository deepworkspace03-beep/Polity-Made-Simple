# Polity Made Simple

A clean, fast website (light + dark themes) for a UGC NET Political Science
community. Built with **React + Vite + TypeScript + Tailwind CSS** and
**React Router**. Lightweight and easy to edit — designed to grow over time.

> **Want to add a Drive link, a mock test, or deploy the site?**
> See **[GUIDE.md](./GUIDE.md)** — it has copy-paste steps for everything.

## Run it locally

Needs [Node.js](https://nodejs.org) 18+.

```bash
npm install      # one time
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → /dist
npm run preview  # preview the production build
```

## Where things live

```
src/
├── App.tsx              # theme (dark/light) + routing
├── config.ts            # ← links, brand name, exam date
├── index.css            # ← all theme colors (top of file) + base styles
├── data/                # ← ALL your content
│   ├── paper1.ts        #    Paper 1 PDFs (edit these to add files)
│   ├── paper2.ts        #    Paper 2 PDFs (edit these to add files)
│   ├── mockTests.ts     #    mock test schedule + links
│   ├── quickAccess.ts   #    the six homepage tiles
│   └── library.ts       #    auto-generated browser feed — don't edit
├── pages/               # Home, Paper1, Paper2, MockTests, Updates
└── components/          # Header, Hero, browser, About, footer, etc.
```

## Design system (so it stays consistent and easy to restyle)

- **Colors are CSS variables** defined once in `src/index.css` (`:root` for
  light, `.dark` for dark). Components use semantic classes — `bg-bg`,
  `bg-card`, `text-fg`, `text-muted`, `border-edge`, `bg-brand`, `text-brand`.
  Change a value in `index.css` and it updates the whole site, both themes.
- **Accent:** a blue→teal gradient (`--brand` → `--brand-2`). Red is used only
  for alert badges (e.g. the "New" tag).
- **Light mode is a soft gray, not pure white**, for a premium feel.
- **Fonts:** Manrope (text) + JetBrains Mono (small uppercase labels).
- **Buttons/cards:** restyle every button via `.btn-brand` / `.btn-outline`
  and every card via `.card` / `.card-interactive` in `index.css`.
- **Animations** are subtle and need no library: hover lift, click press
  (`active:scale`), and fade-in on scroll (the `Reveal` component). Motion is
  disabled automatically for users who prefer reduced motion.

## Good to know

- Light mode is the default; the header toggle switches the whole site and
  remembers your choice (saved in `localStorage`).
- The home-page filter pills are live — they filter the materials list by
  category, paper, and language.
- Secondary pages (Paper 1/2, Mock Tests, Updates) are code-split and load on
  demand, so the homepage stays fast.
- Telegram/WhatsApp use Lucide's `Send` and `MessageCircle` icons (Lucide
  doesn't ship official brand logos).
- Deploy configs are included: `vercel.json` (Vercel), `public/_redirects`
  (Netlify), `public/.htaccess` (Hostinger/Apache).
