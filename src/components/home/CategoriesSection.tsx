import { marketplaceHeadings } from "@/data/categories";
import { homeCategories } from "@/data/homepage";
import Image from "next/image";
import Link from "next/link";
import { HorizontalScrollRow } from "./HorizontalScrollRow";
import { sectionHeadingClass } from "./sectionHeadingStyle";

export type CategorySectionItem = {
  slug: string;
  name: string;
  image: string;
  href: string;
  description: string;
};

const editImages: Record<string, string> = {
  "summer-escape": "/instagram/4.jpg",
  "wedding-guest": "/instagram/2.jpg",
  "everyday-luxury": "/instagram/6.jpg",
  "resort-wear": "/instagram/7.jpg",
  "festive-edit": "/catogery/JEWELRY.jpg",
  "street-culture": "/instagram/8.jpg",
};

const defaultItems: CategorySectionItem[] = homeCategories.map((edit) => ({
  slug: edit.slug,
  name: edit.label,
  image: editImages[edit.slug] ?? edit.image,
  href: edit.href,
  description: edit.tagline,
}));

export function CategoriesSection({
  title = marketplaceHeadings.shopByEdit,
  items = defaultItems,
}: {
  title?: string;
  items?: CategorySectionItem[];
}) {
  return (
    <section className="bg-white py-3 md:pt-9 md:pb-10">
      <div className="mx-auto w-full max-w-[1920px] px-0 sm:px-6 lg:px-10 xl:px-14">
        <div className="mb-5 md:mb-7">
          <h2 className={sectionHeadingClass}>
            {title}
          </h2>
        </div>

        <HorizontalScrollRow
          arrowTop="45%"
          arrowInset
          scrollClassName="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-1 pr-1 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {items.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="group block w-[150px] shrink-0 overflow-hidden rounded-[24px] bg-white p-1.5 ring-1 ring-inset ring-black/10 transition-transform duration-300 hover:-translate-y-1 sm:w-[178px] md:w-[calc((100%_-_6.25rem)/6)] md:min-w-0"
            >
              <div className="relative aspect-[4/4.45] w-full overflow-hidden bg-[#f7f1eb]">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 150px, (max-width: 1024px) 18vw, 220px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent opacity-70" />
              </div>
              <div className="flex min-h-[104px] flex-col items-center justify-center bg-white px-2 py-3 text-center">
                <h3 className="font-sans text-[12px] font-black uppercase leading-tight tracking-[0.08em] text-[#191714] sm:text-[13px] md:text-[14px]">
                  {item.name}
                </h3>
                <p className="mt-1.5 min-h-[28px] font-sans text-[10px] font-semibold uppercase leading-snug tracking-[0.08em] text-[#786f66]">
                  {item.description}
                </p>
                <span className="mt-2 inline-flex items-center border-b border-[#191714] pb-0.5 font-sans text-[10px] font-black uppercase tracking-[0.16em] text-[#191714]">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </HorizontalScrollRow>
      </div>
    </section>
  );
}
