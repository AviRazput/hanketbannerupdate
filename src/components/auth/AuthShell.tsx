import Link from "next/link";

export function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-flat-layer px-6 py-16">
      <div className="w-full max-w-md bg-flat-bg border border-flat-border p-10">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-widest text-flat-muted hover:text-flat-pink transition-colors mb-8"
          >
            <svg
              className="w-5 h-5 shrink-0 stroke-current stroke-[2.25]"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              aria-hidden
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
            Back to homepage
          </Link>
          <div className="text-center">
            <h2 className="text-flat-text text-[2.5rem] leading-[1.2] mb-2">{title}</h2>
            {subtitle ? <p className="text-flat-muted">{subtitle}</p> : null}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
