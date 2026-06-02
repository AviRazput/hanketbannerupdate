"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavIcon({ children }: { children: React.ReactNode }) {
  return <span className="w-6 h-6 inline-flex items-center justify-center">{children}</span>;
}

function IconHome() {
  return (
    <Image
      src="/homeicon.png"
      alt="Home"
      width={40}
      height={40}
      className="w-5 h-5 object-contain"
    />
  );
}

function IconWishlist() {
  return (
    <svg className="w-6 h-6 stroke-current fill-none stroke-[2.35]" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 20.5s-7.75-4.45-9.35-9.28C1.6 8.05 3.7 5.1 6.94 5.1c1.86 0 3.32.9 4.06 2.05.74-1.15 2.2-2.05 4.06-2.05 3.24 0 5.34 2.95 4.29 6.12C17.75 16.05 12 20.5 12 20.5Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShop() {
  return (
    <svg className="w-6 h-6 stroke-current fill-none stroke-[2.25]" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 9.5V8.25a5.5 5.5 0 0 1 11 0V9.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.35 9.5h15.3l-1.05 10.05A2.2 2.2 0 0 1 16.42 21H7.58a2.2 2.2 0 0 1-2.18-1.45L4.35 9.5Z"
      />
    </svg>
  );
}

function IconCart() {
  return (
    <svg className="w-6 h-6 stroke-current fill-none stroke-[2.2]" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M3 4h2.45l2.1 10.15A2.35 2.35 0 0 0 9.85 16h7.95a2.35 2.35 0 0 0 2.25-1.68L21.5 8H6.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.35" className="fill-current stroke-none" />
      <circle cx="18" cy="20" r="1.35" className="fill-current stroke-none" />
    </svg>
  );
}

const linkItems = [
  { href: "/", label: "Home", icon: <IconHome />, match: (p: string) => p === "/" },
  { href: "#", label: "Wishlist", icon: <IconWishlist />, match: () => false },
  { href: "/product", label: "Shop", icon: <IconShop />, match: (p: string) => p.startsWith("/product") },
  { href: "/cart", label: "Cart", icon: <IconCart />, match: (p: string) => p === "/cart" },
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
                  "font-sans text-[9px] uppercase tracking-[0.16em] font-bold",
                  active ? "text-flat-pink" : "text-[#6f6f6f] hover:text-flat-text",
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
