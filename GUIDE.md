# Editing Guide — Polity Made Simple

Everything you change day-to-day lives in **`src/data/`** and **`src/config.ts`**.
You never need to touch the components to add content.

> Tip: edit these files directly on GitHub (pencil icon → commit). Vercel/Netlify
> rebuilds automatically. A typo only fails the build — the live site keeps the
> last working version, so visitors never see a broken page.

---

## 1. Add or edit a PDF (notes, PYQs, syllabus)

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
values. `name` is the button label; `url` opens the PDF.

**Getting the link:** Google Drive → right-click file → Share → "Anyone with the
link" → Copy link → paste as `url`. Both link styles work
(`.../file/d/ID/view` and `.../open?id=ID`).

The home-page browser updates itself from these two files — no extra step.

---

## 2. Add or edit a mock test

Open **`src/data/mockTests.ts`**. Tests are grouped by `paper`, then by
`section` (e.g. a unit or "Full-Length Mock Tests"). To add a test, drop a new
`{ ... }` into the right section's `tests` array:

```ts
{
  title: "Unit 1 – Political Theory",
  paper: "Paper 2",
  unit: "Unit 1",       // optional label
  questions: "50 Q",    // optional
  url: "https://your-test-link/",
}
```

`paper` must be `"Paper 1"`, `"Paper 2"`, or `"Full"`. To start a brand-new
group, copy an existing `{ paper, sections: [...] }` block.

---

## 3. Change links, email, brand, or community channels

Open **`src/config.ts`** — all at the top:

- `telegram`, `whatsapp`, `whatsappChannel`, `email`
- `brandName`, `tagline`, `initiative`, `examLabel`
- `COMMUNITY` → the channel links shown in the footer

---

## 4. Quick Access tiles

Open **`src/data/quickAccess.ts`**. Each tile has an `action`:
`{ kind: "filter", type }`, `{ kind: "route", to }`, or `{ kind: "soon" }`.

---

## Do NOT edit

**`src/data/library.ts`** is generated automatically from `paper1.ts` + `paper2.ts`.
Leave it alone — it keeps the home-page browser in sync with the Paper pages.

---

## Run locally

```bash
npm install
npm run dev
```

## Later: database / admin panel

The data files are plain arrays with stable field names, so you can swap them for
a Supabase fetch later without changing any component.
