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

function IconWishlist() {
  return (
    <svg className="h-[21px] w-[21px] stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 20.2S4.3 15.7 2.8 10.9C1.9 8 3.8 5.4 6.8 5.4c1.8 0 3.2.9 4 2.1.8-1.2 2.2-2.1 4-2.1 3 0 4.9 2.6 4 5.5C19.7 15.7 12 20.2 12 20.2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShop() {
  return (
    <svg className="h-[21px] w-[21px] stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 9V8a5 5 0 0 1 10 0v1"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 9h14l-1 10.2A2 2 0 0 1 16 21H8a2 2 0 0 1-2-1.8L5 9Z"
      />
    </svg>
  );
}

function IconCart() {
  return (
    <svg className="h-[21px] w-[21px] stroke-current fill-none stroke-[1.8]" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M3.5 4.5h2.2l2 10.1A2 2 0 0 0 9.7 16h7.8a2 2 0 0 0 1.9-1.4L21 8H6.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="20" r="1.2" className="fill-current stroke-none" />
      <circle cx="18" cy="20" r="1.2" className="fill-current stroke-none" />
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
