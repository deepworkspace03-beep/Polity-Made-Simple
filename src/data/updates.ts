// ────────────────────────────────────────────────────────────────────────────
//  UPDATES — this is the ONLY file you need to edit to add/change announcements.
//
//  HOW TO ADD A NEW UPDATE (no coding knowledge needed):
//
//  1. Find the UPDATES list below (starts after this comment block).
//  2. Copy this line exactly:
//       { id: 7, text: "Your announcement here", date: "Jul 2026" },
//     Paste it at the TOP of the list (right after the opening "[" bracket).
//  3. Change the id number (make it 1 higher than the current highest).
//  4. Change the text to your announcement.
//  5. Change the date (e.g. "Jun 2026", "Jul 2026").
//
//  HOW TO LINK AN UPDATE TO A PAGE:
//    Add   href: "/paper-2"   inside the { }. For example:
//    { id: 7, text: "New notes added", href: "/paper-2", date: "Jul 2026" },
//    Pages you can link to:  "/paper-1"  "/paper-2"  "/mock-tests"  "/updates"
//
//  HOW TO ADD A GOOGLE DRIVE LINK:
//    Add   driveUrl: "https://drive.google.com/..."   inside the { }.
//
//  HOW TO ADD A "NEW" BADGE:
//    Add   isNew: true   inside the { }.
//
//  HOW TO REMOVE AN UPDATE:
//    Delete the entire line for that update (the { ... }, line).
//
//  Save the file after editing. That's it!
// ────────────────────────────────────────────────────────────────────────────

export type Update = {
  id: number;
  text: string;
  short?: string; // optional — short single-line title for compact lists
  href?: string;  // optional — page to open when clicked
  driveUrl?: string; // optional — Google Drive link
  isNew?: boolean; // optional — show NEW badge
  date?: string;  // optional — display date e.g. "Jun 2026"
};

export const UPDATES: Update[] = [
  {
    id: 6,
    text: "UGC-NET June-2026 Pol Sci memory recalled Paper",
    short: "June 2026 Pol. Sci. Memory Recall",
    driveUrl: "https://drive.google.com/file/d/1BigZ06D3TwdQIo252ZhS3gPcM2mTFGeh/view?usp=drivesdk",
    isNew: true,
    date: "28 Jun 2026",
  },
  {
    id: 1,
    text: "New PYQ Solutions added for Political Theory — Unit 1 & 2",
    short: "New PYQs · Political Theory U1–2",
    href: "/paper-2",
    date: "Jun 2026",
  },
  {
    id: 2,
    text: "Mock Test Series 3 is now live — attempt now",
    short: "Mock Test Series 3 is now live",
    href: "/mock-tests",
    date: "Jun 2026",
  },
  {
    id: 3,
    text: "UGC NET Dec 2026 application dates expected in August",
    short: "NET Dec 2026 dates · expected Aug",
    date: "Jun 2026",
  },
  {
    id: 4,
    text: "Handwritten notes for Indian Government now available",
    short: "Indian Govt handwritten notes added",
    href: "/paper-2",
    date: "May 2026",
  },
  {
    id: 5,
    text: "Current Affairs section coming soon — stay tuned",
    short: "Current Affairs · coming soon",
    date: "May 2026",
  },
];
