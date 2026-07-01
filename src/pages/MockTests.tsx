import { ExternalLink, BookOpen } from "lucide-react";
import { mockPapers } from "../data/mockTests";
import PageHeader from "../components/PageHeader";
import PaperBadge from "../components/PaperBadge";
import Reveal from "../components/Reveal";

/**
 * Mock Tests page. Data comes from src/data/mockTests.ts.
 * Tests are organized paper-wise and unit-wise for clarity.
 * Each test opens its online test in a new tab.
 */
export default function MockTests() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <PageHeader
        eyebrow="Mock Tests"
        title="Mock Test Series"
        subtitle="Paper-wise & unit-wise mock tests for UGC-NET/JRF · Free, no registration. English & Hindi, with detailed solutions."
      />

      <Reveal>
        <div className="flex flex-col gap-8">
          {mockPapers.map((paperGroup) => (
            <div key={paperGroup.paper} className="space-y-4">
              {/* Paper header */}
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-brand" />
                <h2 className="text-lg font-bold">{paperGroup.paper}</h2>
              </div>

              {/* Sections within paper */}
              <div className="space-y-3 pl-6">
                {paperGroup.sections.map((section) => (
                  <div key={section.name} className="space-y-2">
                    {/* Section header (Unit or Full-Length) */}
                    <h3 className="text-sm font-semibold text-muted">
                      {section.name}
                    </h3>

                    {/* Tests in section */}
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {section.tests.map((test) => (
                        <a
                          key={test.url}
                          href={test.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-2 rounded-lg border border-edge bg-bg px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[var(--shadow-card)]"
                        >
                          <span className="min-w-0">
                            <span className="flex items-center gap-2">
                              <PaperBadge paper={test.paper} />
                              {test.questions && (
                                <span className="font-mono text-[10px] text-muted">
                                  {test.questions}
                                </span>
                              )}
                            </span>
                            <span className="mt-1 block text-sm font-semibold">
                              {test.title}
                            </span>
                          </span>
                          <ExternalLink
                            size={15}
                            className="shrink-0 text-muted transition-colors group-hover:text-brand"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
