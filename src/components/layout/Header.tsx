"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

function IconSearch() {
  return (
    <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function IconUser() {
  return (
    <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg className="w-5 h-5 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
      <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

function IconCart() {
  return (
    <svg className="w-5 h-5 stroke-current fill-none stroke-2 mr-2" viewBox="0 0 24 24">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg className="w-6 h-6 stroke-current fill-none stroke-2" viewBox="0 0 24 24">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

const navLinks = [
  "Mens",
  "Womens",
  "Kids",
  "Handloom",
  "GenZ",
  "Accessories",
  "Beauty",
  "Customized",
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const cartCount = 0;

  const drawerLinks = useMemo(() => navLinks.slice(0, 4), []);

  useEffect(() => {
    function onScroll() {
      setIsCompact(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="bg-flat-bg border-b border-flat-border sticky top-0 z-50 transition-all duration-300">
      <div
        className={[
          "max-w-[1500px] mx-auto px-8 grid grid-cols-[200px_1fr_auto] items-center transition-[height] duration-300",
          isCompact ? "h-[60px]" : "h-[80px]",
        ].join(" ")}
      >
        {/* Logo section (fixed width so nav doesn't shift) */}
        <a href="#" className="flex items-center w-[240px] shrink-0">
          <Image
            src="/logo.png"
            alt="Hanket"
            width={160}
            height={64}
            priority
            className="h-[58px] w-auto object-contain"
          />
        </a>

        {/* Nav section (centered, independent from logo size) */}
        <nav className="hidden md:flex gap-8 justify-center">
          {navLinks.map((label) => (
            <a key={label} href="#" className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        {/* Actions section */}
        <div className="flex items-center gap-6 justify-end">
          <button className="text-flat-text hover:text-flat-muted transition-colors" aria-label="Search">
            <IconSearch />
          </button>

          <a
            href="#"
            className="hidden lg:flex items-center text-flat-text hover:text-flat-muted transition-colors font-sans text-xs uppercase tracking-widest"
          >
            <span className="mr-2">
              <IconUser />
            </span>
            Login / Register
          </a>

          <button className="text-flat-text hover:text-flat-muted transition-colors" aria-label="Wishlist">
            <IconHeart />
          </button>

          <button
            className="flex items-center text-flat-text hover:text-flat-muted transition-colors font-sans text-xs uppercase tracking-widest"
            aria-label="Cart"
          >
            <IconCart />
            <span className="hidden lg:inline">Cart</span>
            <span className="bg-flat-text text-flat-bg text-[10px] px-[6px] py-[2px] ml-1 flex items-center justify-center min-w-[20px]">
              {cartCount}
            </span>
          </button>

          <button
            className="md:hidden text-flat-text"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            <IconMenu />
          </button>
        </div>
      </div>

      {/* Mobile overlay + drawer */}
      <button
        type="button"
        aria-label="Close menu overlay"
        className={[
          "fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={[
          "fixed top-0 left-0 h-full w-[300px] bg-flat-bg z-[70] transition-transform duration-300 ease-out flex flex-col border-r border-flat-border",
          mobileOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex justify-between items-center p-6 border-b border-flat-border">
          <span className="flex items-center">
            <Image
              src="/logo.png"
              alt="Hanket"
              width={110}
              height={44}
              className="h-[42px] w-auto object-contain"
            />
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-flat-text p-2 hover:text-flat-muted transition-colors"
          >
            ✕
          </button>
        </div>
        <nav className="flex flex-col flex-1 overflow-y-auto p-6 gap-6">
          {drawerLinks.map((label) => (
            <a
              key={label}
              href="#"
              className="text-xs font-bold uppercase tracking-widest text-flat-text hover:text-flat-muted transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

