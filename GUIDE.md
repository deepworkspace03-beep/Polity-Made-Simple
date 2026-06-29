# Editing Guide — Polity Made Simple

Everything you change day-to-day lives in **`src/data/`**, **`src/config.ts`**,
and **`src/assets/`**. You almost never need to touch the components.

> Tip: edit these files directly on GitHub (pencil icon → commit). Vercel
> rebuilds and redeploys automatically. A typo only fails the build — the live
> site keeps the last working version, so visitors never see a broken page.

---

## Quick map — "where do I edit … ?"

| What you want to change | File to edit |
| --- | --- |
| **Latest Updates** (ticker + widget + Updates page) | `src/data/updates.ts` |
| **Paper 1 resources** (notes / PYQs / syllabus) | `src/data/paper1.ts` |
| **Paper 2 resources** (notes / PYQs / syllabus) | `src/data/paper2.ts` |
| **Syllabus** (Paper 1 / Paper 2) | inside `paper1.ts` / `paper2.ts` → the `"Syllabus"` section |
| **PYQs** | inside `paper1.ts` / `paper2.ts` → any `"PYQs"` category |
| **Mock Tests** | `src/data/mockTests.ts` |
| **Quick Access tiles** | `src/data/quickAccess.ts` |
| **Current Affairs / Strategy** | `src/data/quickAccess.ts` (currently "coming soon" tiles) |
| **Links / email / exam label / brand** | `src/config.ts` |
| **About Us** — bio text | `src/components/About.tsx` |
| **About Us** — photo | replace `src/assets/profile.jpg` |
| **Footer** — name + tagline | `src/config.ts` (`footerName`, `footerTagline`) |
| **Footer / JRF Club logo** | `src/components/JrfLogo.tsx` |
| **Header logo** | `src/components/Logo.tsx` |
| **Theme colours** | `src/index.css` (top of file) |

The home-page browser (`src/data/library.ts`) is **generated automatically** from
`paper1.ts` + `paper2.ts` — never edit it by hand.

---

## 1. Latest Updates

Open **`src/data/updates.ts`** and copy one line to the **top** of the list:

```ts
{ id: 7, text: "Your announcement", short: "Short title", href: "/paper-2", isNew: true, date: "Jul 2026" },
```

- `id` — make it 1 higher than the current highest.
- `text` — full announcement (Updates page). `short` — single-line ticker label.
- `href` — page to open (`/paper-1`, `/paper-2`, `/mock-tests`, `/updates`), **or**
  `driveUrl: "https://drive.google.com/..."` to open a file directly.
- `isNew: true` — shows the **NEW** badge. Remove it to make it an "old" update.
- `date` — display date.

Every update is clickable from the mobile ticker, the desktop widget and the
Updates page automatically.

---

## 2. Paper 1 / Paper 2 resources (notes, PYQs, syllabus)

Open **`src/data/paper1.ts`** (General) or **`src/data/paper2.ts`** (Political Science).
Each unit looks like this:

```ts
{
  "title": "Unit 5 – International Relations",
  "categories": [
    {
      "label": "Handwritten Notes",
      "files": [
        { "name": "IR Handwritten Notes.pdf", "url": "https://drive.google.com/file/d/FILE_ID/view" }
      ]
    }
  ]
}
```

To add a file: copy a `{ "name": ..., "url": ... }` line, paste it, change the two
values. `name` is the label; `url` opens the PDF. Hindi files are detected
automatically (Devanagari text or the word "Hindi" in the name).

**Getting the link:** Google Drive → right-click → Share → "Anyone with the link"
→ Copy link → paste as `url`.

---

## 3. Mock Tests

Open **`src/data/mockTests.ts`**:

```ts
{
  date: "23 June",
  tests: [
    { title: "Unit 1 – Political Theory", paper: "Paper 2", questions: "50 Q", url: "https://your-test-link/" }
  ]
}
```

`paper` must be `"Paper 1"`, `"Paper 2"`, or `"Full"`.

---

## 4. Links, email, exam label, footer text

Open **`src/config.ts`**:

- `telegram`, `whatsapp`, `whatsappChannel`, `email`
- `examLabel` — the highlighted tag in the hero card
- `initiative` — the hero eyebrow line
- `footerName`, `footerTagline` — the footer identity
- `COMMUNITY` — the channel icons in the footer

---

## 5. Quick Access tiles (incl. Current Affairs / Strategy)

Open **`src/data/quickAccess.ts`**. Each tile has an `action`:
`{ kind: "filter", type }`, `{ kind: "route", to }`, or `{ kind: "soon" }`.
"Current Affairs" and "Exam Updates & Strategy" are `soon` tiles today — change
their `action` to `{ kind: "route", to: "/..." }` when those pages go live.

---

## 6. About Us & images

- **Bio / name:** `src/components/About.tsx`.
- **Profile photo:** replace `src/assets/profile.jpg` (square image, any size).
- **JRF Club logo (footer):** `src/components/JrfLogo.tsx` (vector). To use an exact
  raster instead, drop the PNG in `public/` and swap the `<JrfLogo />` for an `<img>`.

---

## Run locally

```bash
npm install
npm run dev        # local preview
npm run typecheck  # check for errors
npm run build      # production build
```
