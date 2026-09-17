import Link from "next/link";

/** Compact chrome for member/scan flows — not a sales header. */
export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className="no-print border-b border-border sticky top-0 z-40 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold border"
            style={{
              backgroundColor: "#E5193726",
              color: "#E51937",
              borderColor: "#E5193755",
            }}
          >
            CF
          </span>
          <span className="text-navy">Crunch Fitness</span>
        </Link>
        {!compact && (
          <nav className="flex items-center gap-3 text-sm text-muted">
            <Link href="/" className="hover:text-[var(--accent)]" style={{ color: undefined }}>
              Home
            </Link>
            <Link href="/scan">Scan</Link>
            <Link href="/admin/login" className="text-xs text-muted hover:text-body">
              Staff
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
