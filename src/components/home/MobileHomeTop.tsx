"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const categoryDetails = {
  Women: {
    href: "/search?category=women",
    image: "/catogery/women.jpg",
    items: ["Ethnic Wear", "Western Wear", "Dresses", "Co-ords", "Tops & Shirts", "Bottom Wear", "Plus Size", "Maternity"],
  },
  Men: {
    href: "/search?category=men",
    image: "/catogery/men.jpg",
    items: ["Shirts", "T-Shirts", "Ethnic Wear", "Co-ords", "Jeans & Trousers", "Jackets & Blazers"],
  },
  Kids: {
    href: "/search?category=kids",
    image: "/catogery/kids.jpg",
    items: ["Boys Wear", "Girls Wear", "Baby Wear", "Ethnic Wear", "Party Wear"],
  },
  Glam: {
    href: "/search?category=glam",
    image: "/catogery/glam.jpg",
    items: ["Makeup", "Skincare", "Haircare", "Fragrances", "Beauty Tools", "Wellness"],
  },
  "Home Decor": {
    href: "/search?category=home-decor",
    image: "/catogery/homedecor.jpg",
    items: ["Wall Decor", "Home Furnishings", "Lighting", "Decorative Accents", "Kitchen & Dining", "Handmade Decor"],
  },
  "Wedding & Occasion": {
    href: "/search?category=wedding-occasion",
    image: "/catogery/women.jpg",
    items: ["Bridal Wear", "Groom Wear", "Bridesmaid Collection", "Wedding Guest Outfits", "Festive Wear", "Wedding Accessories"],
  },
  Footwear: {
    href: "/search?type=footwear",
    image: "/catogery/x.jpg",
    items: ["Women Footwear", "Men Footwear", "Kids Footwear", "Sneakers", "Heels", "Flats", "Boots"],
  },
  Accessories: {
    href: "/search?type=accessories",
    image: "/catogery/x.jpg",
    items: ["Handbags", "Wallets", "Backpacks", "Watches", "Sunglasses", "Belts", "Scarves", "Tech Accessories"],
  },
  Jewellery: {
    href: "/search?type=jewelry",
    image: "/catogery/JEWELRY.jpg",
    items: ["Fashion Jewellery", "Fine Jewellery", "Earrings", "Necklaces", "Rings", "Bracelets", "Bridal Jewellery"],
  },
};

function itemHref(parentHref: string, label: string) {
  const separator = parentHref.includes("?") ? "&" : "?";
  const slug = label.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
  return `${parentHref}${separator}subcategory=${encodeURIComponent(slug)}`;
}

export function MobileHomeTop() {
  const [category, setCategory] = useState<keyof typeof categoryDetails>("Women");

  useEffect(() => {
    const onCategoryChange = (event: Event) => {
      const selected = (event as CustomEvent<string>).detail;
      if (selected in categoryDetails) setCategory(selected as keyof typeof categoryDetails);
    };

    window.addEventListener("hanket:mobile-category", onCategoryChange);
    return () => window.removeEventListener("hanket:mobile-category", onCategoryChange);
  }, []);

  return (
    <section className="bg-white pb-2 md:hidden">
      <div className="mx-auto w-full max-w-[1920px] overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-2 pt-2 sm:px-6 md:pt-4 lg:px-10 xl:px-14">
        <div className="flex min-w-max gap-2.5 pr-3 md:gap-5 md:pr-0">
          {categoryDetails[category].items.map((label) => (
            <Link
              key={label}
              href={itemHref(categoryDetails[category].href, label)}
              className="w-[58px] shrink-0 snap-start text-center md:w-[92px]"
            >
              <span className="relative block aspect-[4/5] overflow-hidden rounded-xl bg-[#fff3f5] shadow-[0_2px_9px_rgba(225,20,80,0.18)]">
                <Image src={categoryDetails[category].image} alt="" fill sizes="58px" className="object-cover object-top" />
              </span>
              <span className="mt-1 block min-h-5 whitespace-normal break-words px-0.5 font-sans text-[8px] font-bold uppercase leading-[1.15] text-[#333] md:mt-2 md:min-h-6 md:text-[10px]">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
