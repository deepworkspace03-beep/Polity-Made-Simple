// ───────────────────────────────────────────────────────────────
//  UNIFIED LIBRARY  (derived automatically — no manual editing)
//  Flattens Paper 1 + Paper 2 into one filterable list so the home
//  page browser always matches the Paper pages. To add/edit files,
//  edit src/data/paper1.ts or paper2.ts — this updates itself.
// ───────────────────────────────────────────────────────────────
import { paper1Sections } from "./paper1";
import { paper2Sections } from "./paper2";
import type { ResSection } from "./resources";

export type MatType =
  | "Handwritten Notes"
  | "Printed Notes"
  | "Detailed PYQ Solutions"
  | "Syllabus";

export type Paper = "Paper 1" | "Paper 2";
export type Language = "Hindi" | "English";

export type LibraryItem = {
  name: string;
  url: string;
  paper: Paper;
  type: MatType;
  language: Language;
  unit: string;
  isNew: boolean;
};

// Map a raw category label to a clean filter type.
function toType(label: string): MatType {
  const l = label.toLowerCase();
  if (l.includes("handwritten")) return "Handwritten Notes";
  if (l.includes("printed")) return "Printed Notes";
  if (l.includes("pyq") || l.includes("solution")) return "Detailed PYQ Solutions";
  if (l.includes("syllabus")) return "Syllabus";
  return "Printed Notes"; // "Extra Notes / Others" → grouped with printed material
}

// Detect language from the file name (Devanagari or the word "Hindi").
function toLanguage(name: string): Language {
  if (/[\u0900-\u097F]/.test(name) || /hindi/i.test(name)) return "Hindi";
  return "English";
}

function flatten(sections: ResSection[], paper: Paper): LibraryItem[] {
  const items: LibraryItem[] = [];
  for (const section of sections) {
    const isNew = section.title.includes("Dec 2025");
    for (const cat of section.categories) {
      for (const file of cat.files) {
        items.push({
          name: file.name,
          url: file.url,
          paper,
          type: toType(cat.label),
          language: toLanguage(file.name),
          unit: section.title,
          isNew,
        });
      }
    }
  }
  return items;
}

export const library: LibraryItem[] = [
  ...flatten(paper1Sections, "Paper 1"),
  ...flatten(paper2Sections, "Paper 2"),
];

// Real, browsable categories (shown as active filter chips).
export const REAL_TYPES: MatType[] = [
  "Handwritten Notes",
  "Printed Notes",
  "Detailed PYQ Solutions",
  "Syllabus",
];
