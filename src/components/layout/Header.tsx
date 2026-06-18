"use client";

import { useAuthDrawer } from "@/components/auth/AuthDrawerContext";
import { mainNav } from "@/data/homepage";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const searchInputBase =
  "w-full rounded-full bg-white border border-[#d8d8d8] font-sans text-[#222] placeholder:text-[#9a9a9a] outline-none focus:border-[#888] focus:ring-0 transition-colors";
const searchInputMobile = `${searchInputBase} h-8 pl-4 pr-10 text-[11px] shadow-[0_2px_10px_rgba(0,0,0,0.06)]`;
const searchInputDesktop = `${searchInputBase} h-[34px] pl-5 pr-11 text-[11px] font-bold tracking-[0.08em]`;
const searchPlaceholderPhrases = [
  "SEARCH FOR PRODUCTS",
  "SEARCH WOMEN",
  "SEARCH MEN",
  "SEARCH FOOTWEAR",
  "SEARCH JEWELLERY",
  "SEARCH ACCESSORIES",
];

function SearchField({
  className,
  inputClassName,
  value,
  onChange,
  id,
  inputRef,
  staticPlaceholder,
}: {
  className?: string;
  inputClassName: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;
  staticPlaceholder?: string;
}) {
  const [placeholder, setPlaceholder] = useState(searchPlaceholderPhrases[0]);

  useEffect(() => {
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const tick = () => {
      const phrase = searchPlaceholderPhrases[phraseIndex];
      const nextText = phrase.slice(0, charIndex);
      setPlaceholder(nextText || " ");

      if (!deleting && charIndex < phrase.length) {
        charIndex += 1;
        timeoutId = setTimeout(tick, 72);
        return;
      }

      if (!deleting && charIndex === phrase.length) {
        deleting = true;
        timeoutId = setTimeout(tick, 1300);
        return;
      }

      if (deleting && charIndex > 0) {
        charIndex -= 1;
        timeoutId = setTimeout(tick, 34);
        return;
      }

      deleting = false;
      phraseIndex = (phraseIndex + 1) % searchPlaceholderPhrases.length;
      timeoutId = setTimeout(tick, 260);
    };

    timeoutId = setTimeout(tick, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={["relative w-full", className].filter(Boolean).join(" ")}>
      <input
        id={id}
        ref={inputRef}
        value={value}
        onChange={onChange}
        placeholder={staticPlaceholder ?? (value ? "SEARCH FOR PRODUCTS" : placeholder)}
        className={inputClassName}
      />
      <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#777] pointer-events-none md:right-4">
        <IconSearch />
      </span>
    </div>
  );
}

function IconUser() {
  return (
    <svg className="w-6 h-6 stroke-[#222] fill-none stroke-[2.05] shrink-0" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg className="w-[21px] h-[21px] stroke-[#333] fill-none stroke-[1.6] shrink-0" viewBox="0 0 24 24">
      <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

function IconCart({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={[className, "stroke-[#333] fill-none stroke-[1.6] shrink-0"].join(" ")}
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path
        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CartLink({ labelClassName }: { labelClassName: string }) {
  const cartCount = 0;

  return (
    <Link
      href="/cart"
      className="relative inline-flex items-center gap-1.5 font-sans text-[#333] hover:text-[#666] transition-colors shrink-0"
      aria-label="CART"
    >
      <IconCart />
      <span className={labelClassName}>CART</span>
      {cartCount > 0 ? <CountBadge count={cartCount} /> : null}
    </Link>
  );
}

function IconSearch() {
  return (
    <svg className="w-5 h-5 stroke-current fill-none stroke-2 shrink-0" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg className="w-5 h-5 stroke-current fill-none stroke-[2.3]" viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconCompare() {
  return (
    <svg className="w-[21px] h-[21px] stroke-[#333] fill-none stroke-[1.6]" viewBox="0 0 24 24" aria-hidden>
      <path d="M7 4H4v3M17 20h3v-3M4 20l16-16M20 4v3h-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CountBadge({ count }: { count: number }) {
  if (count <= 0) return null;

  return (
    <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-[#f5f5f5] text-[#333] text-[10px] font-semibold leading-none border border-[#e8e8e8]">
      {count}
    </span>
  );
}

const categoryNav = mainNav;
const mobileCategoryNav = [
  { label: "Women", href: "/search?category=women" },
  { label: "Men", href: "/search?category=men" },
  { label: "Kids", href: "/search?category=kids" },
  { label: "Glam", href: "/search?category=glam" },
  { label: "Accessories", href: "/search?type=accessories" },
  { label: "Jewellery", href: "/search?type=jewelry" },
];

function BrandLogo({ variant = "desktop" }: { variant?: "desktop" | "mobile" | "drawer" }) {
  const isDrawer = variant === "drawer";
  const isMobile = variant === "mobile";

  return (
    <span className="block text-flat-pink">
      <span
        className={[
          "block font-serif font-medium leading-[0.82] tracking-[0.08em]",
          isDrawer ? "text-[38px]" : isMobile ? "text-[20px]" : "text-[42px] lg:text-[46px] xl:text-[48px]",
        ].join(" ")}
      >
        Hanket
      </span>
    </span>
  );
}

const navSubcategories: Record<string, string[]> = {
  WOMEN: ["Ethnic Wear", "Western Wear", "Dresses", "Co-ords", "Tops & Shirts", "Bottom Wear", "Plus Size", "Maternity"],
  MEN: ["Shirts", "T-Shirts", "Ethnic Wear", "Co-ords", "Jeans & Trousers", "Jackets & Blazers"],
  KIDS: ["Boys Wear", "Girls Wear", "Baby Wear", "Ethnic Wear", "Party Wear"],
  GLAM: ["Makeup", "Skincare", "Haircare", "Fragrances", "Beauty Tools", "Wellness"],
  "HOME DECOR": ["Wall Decor", "Home Furnishings", "Lighting", "Decorative Accents", "Kitchen & Dining", "Handmade Decor"],
  "WEDDING & OCCASION": [
    "Bridal Wear",
    "Groom Wear",
    "Bridesmaid Collection",
    "Wedding Guest Outfits",
    "Festive Wear",
    "Wedding Accessories",
  ],
  FOOTWEAR: ["Women Footwear", "Men Footwear", "Kids Footwear", "Sneakers", "Heels", "Flats", "Boots"],
  JEWELLERY: ["Fashion Jewellery", "Fine Jewellery", "Earrings", "Necklaces", "Rings", "Bracelets", "Bridal Jewellery"],
  ACCESSORIES: ["Handbags", "Wallets", "Backpacks", "Watches", "Sunglasses", "Belts", "Scarves", "Tech Accessories"],
};

function getNavSubcategories(item: (typeof mainNav)[number]) {
  return navSubcategories[item.label] ?? item.dropdownItems?.map((subItem) => subItem.label) ?? [];
}

function subcategoryHref(parentHref: string, label: string) {
  const separator = parentHref.includes("?") ? "&" : "?";
  const slug = label.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
  return `${parentHref}${separator}subcategory=${encodeURIComponent(slug)}`;
}

export function Header() {
  const { openAuthDrawer } = useAuthDrawer();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const drawerLinks = categoryNav;

  const toggleSubmenu = (label: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };
  const drawerAccountLinks: { label: string; href?: string; action?: "auth" }[] = [
    { label: "Login / Register", action: "auth" },
    { label: "WISHLIST", href: "#" },
    { label: "CART", href: "/cart" },
  ];

  const openAuth = () => {
    setMobileOpen(false);
    openAuthDrawer("sign-in");
  };

  const isNavActive = (href: string) => {
    if (pathname !== "/search") return false;

    const [, queryString] = href.split("?");
    if (!queryString) return false;

    const itemParams = new URLSearchParams(queryString);
    const itemCategory = itemParams.get("category");
    const itemType = itemParams.get("type");

    return (
      (itemCategory && itemCategory === searchParams.get("category")) ||
      (itemType && itemType === searchParams.get("type"))
    );
  };

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="bg-white fixed md:sticky top-0 left-0 right-0 w-full z-50">
      <div className="w-full px-3 sm:px-6 lg:px-10 xl:px-14 py-1.5 md:py-0">
        {/* Mobile */}
        <div className="md:hidden">
          <div className="grid grid-cols-[auto_1fr_auto] items-center min-h-[34px] gap-2">
            <button
              type="button"
              className="justify-self-start text-flat-text w-8 h-8 inline-flex items-center justify-center rounded-sm hover:bg-flat-layer transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={mobileOpen}
            >
              <IconMenu />
            </button>

            <Link
              href="/"
              className="justify-self-start flex items-center min-w-0 max-w-[min(180px,46vw)] px-0.5 py-1 overflow-visible"
              aria-label="Hanket home"
            >
              <BrandLogo variant="mobile" />
            </Link>

            <div className="justify-self-end flex items-center gap-2 shrink-0">
              <button
                type="button"
                className="text-[#333] w-8 h-8 inline-flex items-center justify-center rounded-sm hover:bg-flat-layer transition-colors"
                aria-label="WISHLIST"
              >
                <IconHeart />
              </button>
              <Link
                href="/cart"
                className="text-[#333] w-8 h-8 inline-flex items-center justify-center rounded-sm hover:bg-flat-layer transition-colors"
                aria-label="CART"
              >
                <IconCart className="w-[21px] h-[21px]" />
              </Link>
            </div>
          </div>

          <nav
            className="mt-1 flex w-full items-center justify-between gap-2 overflow-hidden px-1 pb-1 pt-1"
            aria-label="Mobile category navigation"
          >
            {mobileCategoryNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "shrink-0 border-b py-1 text-center font-sans text-[13px] font-medium leading-none text-[#222] transition-colors hover:text-flat-pink",
                  isNavActive(item.href) ? "border-flat-text text-flat-text" : "border-transparent",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop: WoodMart-style */}
        <div className="hidden md:flex flex-col w-full min-w-0">
          <div className="grid grid-cols-[minmax(180px,0.8fr)_minmax(260px,1fr)_auto] items-center gap-4 py-2.5 lg:grid-cols-[minmax(230px,1fr)_minmax(320px,0.95fr)_minmax(230px,1fr)] lg:gap-8 lg:py-3">
            <Link
              href="/"
              className="flex items-center justify-self-start overflow-visible"
              aria-label="Hanket home"
            >
              <BrandLogo />
            </Link>

            <form
              className="w-full max-w-[36rem] justify-self-center"
              onSubmit={(e) => e.preventDefault()}
              role="search"
              aria-label="Site search"
            >
              <SearchField
                inputClassName={searchInputDesktop}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            <div className="flex items-center justify-self-end gap-4 lg:gap-5 shrink-0">
              <button
                type="button"
                className="relative inline-flex h-10 items-center justify-center gap-1.5 font-sans text-[#333] hover:text-[#666] transition-colors"
                aria-label="WISHLIST"
              >
                <IconHeart />
                <span className="text-[13px] font-normal">WISHLIST</span>
                <CountBadge count={0} />
              </button>

              <button
                type="button"
                onClick={() => openAuthDrawer("sign-in")}
                className="hidden lg:inline-flex items-center gap-2 font-sans text-[#333] hover:text-[#666] transition-colors whitespace-nowrap"
              >
                <IconUser />
                <span className="font-sans text-[13px] font-normal">PROFILE</span>
              </button>
              <button
                type="button"
                onClick={() => openAuthDrawer("sign-in")}
                className="lg:hidden relative flex h-10 w-10 items-center justify-center text-[#333] hover:text-[#666] transition-colors"
                aria-label="PROFILE"
              >
                <IconUser />
              </button>

              <CartLink labelClassName="font-sans text-[13px] font-normal" />
            </div>
          </div>

          <div className="relative flex items-center py-1.5 lg:py-2 overflow-visible before:absolute before:left-1/2 before:top-0 before:h-px before:w-screen before:-translate-x-1/2 before:bg-[#ededed]">
            <nav className="-mx-3 flex w-full min-w-0 items-center justify-start gap-1 overflow-visible xl:-mx-4">
              {categoryNav.map((item) => (
                <div key={item.label} className="relative group shrink-0 py-0.5">
                  <Link
                    href={item.href}
                    className={[
                      "flex items-center gap-1 border-b px-3 py-2 text-[10px] font-bold tracking-[0.04em] transition-colors whitespace-nowrap lg:gap-1.5 lg:text-[11px] lg:tracking-[0.06em] xl:px-4 xl:text-[12px]",
                      isNavActive(item.href)
                        ? "border-flat-pink bg-flat-pink/5 text-flat-pink"
                        : "border-transparent text-[#222] hover:bg-[#f7f7f7] hover:text-flat-pink",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    {getNavSubcategories(item).length > 0 && (
                      <span className="text-[8px] text-gray-400 group-hover:text-flat-pink group-hover:rotate-180 transition-transform duration-300 shrink-0">
                        ▼
                      </span>
                    )}
                  </Link>

                  {getNavSubcategories(item).length > 0 && (
                    <div className="absolute left-0 top-full pt-1.5 w-48 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                      <div className="bg-white/98 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100/80 overflow-hidden p-1">
                        {getNavSubcategories(item).map((label) => (
                          <Link
                            key={label}
                            href={subcategoryHref(item.href, label)}
                            className="group/item flex items-center justify-between px-3 py-1.5 rounded-none font-sans text-[11px] lg:text-[12px] font-semibold uppercase text-[#333] hover:bg-flat-pink/5 hover:text-flat-pink transition-all duration-200"
                          >
                            <span className="transform group-hover/item:translate-x-1 transition-transform duration-200">
                              {label}
                            </span>
                            <span className="opacity-0 group-hover/item:opacity-100 -translate-x-1 group-hover/item:translate-x-0 transition-all duration-200 text-flat-pink text-xs">
                              →
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Close menu overlay"
        className={[
          "fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={[
          "fixed top-0 left-0 h-full w-[300px] bg-flat-bg z-[70] transition-transform duration-300 ease-out flex flex-col border-r border-flat-border md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex justify-between items-center px-5 py-5 border-b border-flat-border">
          <span className="flex min-w-0 flex-1 items-center overflow-visible">
            <BrandLogo variant="drawer" />
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-flat-text p-2 hover:text-flat-muted transition-colors"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col flex-1 overflow-y-auto p-6 pb-10">
          <form
            className="mb-6"
            onSubmit={(e) => {
              e.preventDefault();
              setMobileOpen(false);
            }}
            role="search"
            aria-label="Site search"
          >
            <SearchField
              id="mobile-search-input"
              inputRef={mobileSearchInputRef}
              inputClassName={searchInputMobile}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <div className="flex flex-col gap-4">
            {drawerLinks.map((item) => (
              <div key={item.label} className="flex flex-col">
                {getNavSubcategories(item).length > 0 ? (
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleSubmenu(item.label)}
                      className={[
                        "w-full flex items-center justify-between py-1 font-sans text-[17px] font-bold uppercase tracking-[0.06em] hover:text-flat-pink transition-colors text-left",
                        isNavActive(item.href) ? "text-flat-pink" : "text-flat-text",
                      ].join(" ")}
                    >
                      <span>{item.label}</span>
                      <span className={`text-[10px] text-gray-400 transition-transform duration-200 ${openSubmenus[item.label] ? "rotate-180" : ""}`}>
                        ▼
                      </span>
                    </button>
                    {openSubmenus[item.label] && (
                      <div className="flex flex-col gap-1.5 pl-4 mt-1.5 mb-1.5 border-l border-gray-200">
                        {getNavSubcategories(item).map((label) => (
                          <Link
                            key={label}
                            href={subcategoryHref(item.href, label)}
                            onClick={() => setMobileOpen(false)}
                            className="font-sans text-[14px] font-semibold uppercase tracking-[0.03em] text-flat-text/80 hover:text-flat-pink transition-colors"
                          >
                            {label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={[
                      "py-1 font-sans text-[17px] font-bold uppercase tracking-[0.06em] hover:text-flat-pink transition-colors",
                      isNavActive(item.href) ? "text-flat-pink" : "text-flat-text",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="my-6 border-t border-flat-border" />

          <div className="flex flex-col gap-4">
            {drawerAccountLinks.map(({ label, href, action }) =>
              action === "auth" ? (
                <button
                  key={label}
                  type="button"
                  onClick={openAuth}
                  className="text-left font-sans text-[15px] font-semibold uppercase tracking-[0.06em] text-flat-text/90 hover:text-flat-pink transition-colors"
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={label}
                  href={href ?? "#"}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans text-[15px] font-semibold uppercase tracking-[0.06em] text-flat-text/90 hover:text-flat-muted transition-colors"
                >
                  {label}
                </Link>
              ),
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
