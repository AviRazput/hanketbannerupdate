"use client";

import { topCategories } from "@/data/topCategories";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

function IconChevronLeft() {
  return (
    <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24" aria-hidden>
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg className="w-4 h-4 stroke-current fill-none stroke-2" viewBox="0 0 24 24" aria-hidden>
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const arrowButtonClass =
  "w-10 h-10 flex items-center justify-center rounded-full border border-[#e8e8e8] bg-white text-[#333] hover:border-[#ccc] transition-colors disabled:opacity-35 disabled:pointer-events-none disabled:hover:border-[#e8e8e8]";

export function FeaturedCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 12);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 12);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [mounted, updateScrollState]);

  const scrollByStep = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const step = el.querySelector<HTMLElement>("[data-category-card]")?.offsetWidth ?? 160;
    el.scrollBy({ left: direction * (step + 16), behavior: "smooth" });
  };

  return (
    <section className="py-10 md:py-14 bg-white border-t border-flat-border">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans text-[1.25rem] md:text-[1.375rem] font-medium text-flat-text tracking-tight mb-6 md:mb-8">
          Top Categories
        </h2>

        <div className="flex items-center gap-4 md:gap-5">
          <div className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center">
            {mounted ? (
              <button
                type="button"
                onClick={() => scrollByStep(-1)}
                disabled={!canScrollLeft}
                aria-label="Scroll categories left"
                className={arrowButtonClass}
              >
                <IconChevronLeft />
              </button>
            ) : (
              <span className="w-10 h-10" aria-hidden />
            )}
          </div>

          <div
            ref={scrollRef}
            className="flex flex-1 min-w-0 gap-4 md:gap-5 overflow-x-auto no-scrollbar scroll-smooth"
          >
            {topCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.href}
                data-category-card
                className="group shrink-0 w-[112px] sm:w-[132px] md:w-[148px] lg:w-[168px]"
              >
                <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] mb-2.5 md:mb-3">
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    sizes="(max-width: 640px) 120px, 168px"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="block font-sans text-[0.8125rem] md:text-[0.875rem] text-flat-text leading-snug">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex shrink-0 w-10 h-10 items-center justify-center">
            {mounted ? (
              <button
                type="button"
                onClick={() => scrollByStep(1)}
                disabled={!canScrollRight}
                aria-label="Scroll categories right"
                className={arrowButtonClass}
              >
                <IconChevronRight />
              </button>
            ) : (
              <span className="w-10 h-10" aria-hidden />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
