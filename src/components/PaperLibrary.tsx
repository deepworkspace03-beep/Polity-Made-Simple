import type { ResSection } from "../data/resources";
import PageHeader from "./PageHeader";
import UnitAccordion from "./UnitAccordion";
import Reveal from "./Reveal";

/**
 * Shared layout for the Paper 1 and Paper 2 pages.
 * Renders the back link, heading, and a list of collapsible Units.
 */
export default function PaperLibrary({
  eyebrow,
  title,
  subtitle,
  sections,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  sections: ResSection[];
}) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <Reveal>
        <div className="flex flex-col gap-3">
          {sections.map((section) => (
            <UnitAccordion key={section.title} section={section} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
