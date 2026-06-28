// ───────────────────────────────────────────────────────────────
//  MOCK TEST SERIES
//  Paper-wise & Unit-wise organization for clarity.
//  To add a test: add a { title, paper, unit, questions, url } to the relevant section.
// ───────────────────────────────────────────────────────────────

export type MockTest = {
  title: string;
  paper: "Paper 1" | "Paper 2" | "Full";
  unit?: string; // e.g. "Unit 1: Political Theory"
  questions?: string; // e.g. "50 Q"
  url: string;
};

export type MockSection = {
  name: string; // e.g. "Paper 1" or "Unit 1: Political Theory"
  tests: MockTest[];
};

export type MockPaper = {
  paper: "Paper 1" | "Paper 2" | "Full";
  sections: MockSection[];
};

// Paper-wise Mock Test Series — reorganized for clarity
export const mockPapers: MockPaper[] = [
  {
    paper: "Paper 1",
    sections: [
      {
        name: "Full-Length Mock Tests",
        tests: [
          { title: "Mock Test 1", paper: "Paper 1", questions: "50 Q", url: "https://jrfclub-day-5-paper-1.netlify.app/" },
          { title: "Mock Test 2", paper: "Paper 1", questions: "50 Q", url: "https://jrfclub-day6-paper-1.netlify.app/" },
          { title: "Mock Test 3", paper: "Paper 1", questions: "50 Q", url: "https://jrfclub-day7-paper-1.netlify.app/" },
          { title: "Mock Test 4 (Full)", paper: "Paper 1", questions: "50 Q", url: "https://jrfclub-day8-paper-1.netlify.app/" },
          { title: "Mock Test 5", paper: "Paper 1", questions: "50 Q", url: "https://jrfclub-day9-paper-1.netlify.app/" },
        ],
      },
    ],
  },
  {
    paper: "Paper 2",
    sections: [
      {
        name: "Unit 1: Political Theory",
        tests: [
          { title: "Unit 1 – Political Theory", paper: "Paper 2", unit: "Unit 1", questions: "50 Q", url: "https://jrfclub-day6-unit1-political-theory.netlify.app/" },
        ],
      },
      {
        name: "Unit 2: Western Political Thought",
        tests: [
          { title: "Unit 2 – Western Political Thought", paper: "Paper 2", unit: "Unit 2", questions: "50 Q", url: "https://jrfclub-day7-unit2-political-thought.netlify.app/" },
        ],
      },
      {
        name: "Unit 3: Indian Political Thought",
        tests: [
          { title: "Unit 3 – Indian Political Thought", paper: "Paper 2", unit: "Unit 3", questions: "50 Q", url: "https://jrfclub-day8-unit3-indian-pol-thinker.netlify.app/" },
        ],
      },
      {
        name: "Unit 4: Comparative Political Analysis",
        tests: [
          { title: "Unit 4 – Comparative Political Analysis", paper: "Paper 2", unit: "Unit 4", questions: "50 Q", url: "https://jrfclub-day4-unit4-comparative-politi.netlify.app/" },
        ],
      },
      {
        name: "Unit 5: International Relations",
        tests: [
          { title: "Unit 5 – International Relations", paper: "Paper 2", unit: "Unit 5", questions: "100 Q", url: "https://jrfclub-day-1-unit-5-ir.netlify.app/" },
        ],
      },
      {
        name: "Unit 6: India's Foreign Policy",
        tests: [
          { title: "Unit 6 – India's Foreign Policy", paper: "Paper 2", unit: "Unit 6", questions: "50 Q", url: "https://jrfclub-day5-unit-6-indias-foreign-po.netlify.app/" },
        ],
      },
      {
        name: "Unit 7: Political Institutions in India",
        tests: [
          { title: "Unit 7 – Political Institutions in India", paper: "Paper 2", unit: "Unit 7", questions: "125 Q", url: "https://jrfclub-day2-unit-7-indian-polity.netlify.app/" },
          { title: "Unit 7 – Political Institutions (Part 2)", paper: "Paper 2", unit: "Unit 7", questions: "50 Q", url: "https://jrfclub-day3-unit7-polity-part-2.netlify.app/" },
        ],
      },
      {
        name: "Unit 8: Political Processes in India",
        tests: [
          { title: "Unit 8 – Political Processes in India", paper: "Paper 2", unit: "Unit 8", questions: "50 Q", url: "https://jrfclub-day8-unit8-political-process.netlify.app/" },
        ],
      },
      {
        name: "Unit 9: Public Administration",
        tests: [
          { title: "Unit 9 – Public Administration", paper: "Paper 2", unit: "Unit 9", questions: "50 Q", url: "https://jrfclub-day9-unit9-pb-ad.netlify.app/" },
        ],
      },
      {
        name: "Unit 10: Governance & Public Policy",
        tests: [
          { title: "Unit 10 – Governance & Public Policy", paper: "Paper 2", unit: "Unit 10", questions: "50 Q", url: "https://jrfclub-day9-unit10-governance.netlify.app/" },
        ],
      },
    ],
  },
  {
    paper: "Full",
    sections: [
      {
        name: "Full-Length Mock Tests",
        tests: [
          { title: "Final Mega Mock Test (Full Paper)", paper: "Full", questions: "150 Q", url: "https://jrfclub-day10-final-mega-test.netlify.app/" },
        ],
      },
    ],
  },
];
