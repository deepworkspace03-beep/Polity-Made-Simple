import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * Shared inner-page header: "Back to home" link + eyebrow + title +
 * subtitle. Keeps Paper 1 / Paper 2 / Mock Tests / Updates consistent.
 */
export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <>
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-brand"
      >
        <ArrowLeft size={16} />
        Back to home
      </Link>

      <div className="mb-6 mt-4">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-muted">{subtitle}</p>
      </div>
    </>
  );
}
