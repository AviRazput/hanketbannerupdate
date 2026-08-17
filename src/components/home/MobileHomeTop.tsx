"use client";

import { categories, categoryHref, subcategoryHref } from "@/data/categories";
import { categoryCardImages } from "@/data/categoryCardImages";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileHomeTop({ initialCategorySlug = "" }: { initialCategorySlug?: string }) {
  const [categorySlug, setCategorySlug] = useState(initialCategorySlug);
  const category = categories.find((item) => item.slug === categorySlug);

  useEffect(() => {
    setCategorySlug(initialCategorySlug);
  }, [initialCategorySlug]);

  useEffect(() => {
    const onCategoryChange = (event: Event) => {
      const selectedName = (event as CustomEvent<string>).detail;
      const selected = categories.find((item) => item.name === selectedName);
      if (selected) setCategorySlug(selected.slug);
    };
    window.addEventListener("hanket:mobile-category", onCategoryChange);
    return () => window.removeEventListener("hanket:mobile-category", onCategoryChange);
  }, []);

  return (
    <section className="bg-white pb-2 md:hidden">
      <div className="mx-auto w-full max-w-[1920px] overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-2 pt-2 sm:px-6">
        <div className="flex min-w-max gap-2.5 pr-3">
          {(category
            ? category.subcategories.map((subcategory) => ({
                slug: subcategory.slug,
                name: subcategory.name,
                image: subcategory.image,
                href: subcategoryHref(category.slug, subcategory.slug),
              }))
            : categories.map((item) => ({
                slug: item.slug,
                name: item.name,
                image: item.image,
                href: categoryHref(item.slug),
              })))
            .map((item) => ({
              ...item,
              image: category ? item.image : categoryCardImages[item.slug] ?? item.image,
            }))
            .map((item) => (
            <Link key={item.slug} href={item.href} className="w-[58px] shrink-0 snap-start text-center">
              <span className="relative block aspect-[4/5] overflow-hidden rounded-xl bg-white ring-1 ring-black/10 shadow-sm">
                {item.image.startsWith("http") ? (
                  <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
                ) : (
                  <Image src={item.image} alt="" fill sizes="58px" className="object-cover object-top" />
                )}
              </span>
              <span className="mt-1 block min-h-5 px-0.5 font-sans text-[8px] font-bold uppercase leading-[1.15] text-[#333]">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
