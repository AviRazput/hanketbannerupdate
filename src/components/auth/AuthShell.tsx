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
        <div className="mb-8 text-center">
          <h2 className="text-flat-text text-[2.5rem] leading-[1.2] mb-2">{title}</h2>
          {subtitle ? <p className="text-flat-muted">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </div>
  );
}

