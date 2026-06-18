"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavIcon({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex h-6 w-6 items-center justify-center">{children}</span>;
}

function IconHome() {
  return (
    <svg className="h-[21px] w-[21px] stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24" aria-hidden>
      <path d="M3.5 10.8 12 4l8.5 6.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.8 10.2V20h4.4v-5.2h3.6V20h4.4v-9.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg className="h-[21px] w-[21px] stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24" aria-hidden>
      <circle cx="10.8" cy="10.8" r="6.5" />
      <path d="m16 16 4.2 4.2" strokeLinecap="round" />
    </svg>
  );
}

function IconNewArrivals() {
  return (
    <svg className="h-[21px] w-[21px] stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24" aria-hidden>
      <path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3Z" strokeLinejoin="round" />
      <path d="m18.5 14 0.8 2.2 2.2 0.8-2.2 0.8-0.8 2.2-0.8-2.2-2.2-0.8 2.2-0.8 0.8-2.2Z" strokeLinejoin="round" />
      <path d="m5.5 14 0.6 1.7 1.7 0.6-1.7 0.6-0.6 1.7-0.6-1.7-1.7-0.6 1.7-0.6 0.6-1.7Z" strokeLinejoin="round" />
    </svg>
  );
}

function IconProfile() {
  return (
    <svg className="h-[21px] w-[21px] stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" strokeLinecap="round" />
    </svg>
  );
}

const linkItems = [
  { href: "/", label: "Home", icon: <IconHome />, match: (p: string) => p === "/" },
  { href: "/search", label: "Search", icon: <IconSearch />, match: (p: string) => p.startsWith("/search") },
  { href: "/#new-arrivals", label: "New", icon: <IconNewArrivals />, match: () => false },
  { href: "/auth/login", label: "Profile", icon: <IconProfile />, match: (p: string) => p.startsWith("/auth") },
] as const;

export function MobileBottomNav() {
  const pathname = usePathname() ?? "/";

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-[100] h-14 max-w-[100vw] overflow-hidden border-t border-flat-border bg-white shadow-[0_-8px_20px_rgba(0,0,0,0.08)]">
      <div className="relative z-10 h-full max-w-[1920px] mx-auto bg-white px-4">
        <div className="grid h-full grid-cols-4 items-center shrink-0">
          {linkItems.map((it) => {
            const active = it.match(pathname);
            return (
              <Link
                key={it.href + it.label}
                href={it.href}
                className={[
                  "relative flex h-full flex-col items-center justify-center gap-0.5 rounded-xl transition-all duration-200",
                  "font-sans text-[10px] font-semibold leading-none",
                  active ? "text-flat-pink" : "text-[#444] hover:text-flat-text",
                ].join(" ")}
              >
                <NavIcon>{it.icon}</NavIcon>
                <span>{it.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
