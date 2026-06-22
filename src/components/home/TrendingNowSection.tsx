import Image from "next/image";
import Link from "next/link";
import { categories, marketplaceHeadings, typeHref } from "@/data/categories";
import { HorizontalScrollRow } from "./HorizontalScrollRow";
import { sectionHeadingClass } from "./sectionHeadingStyle";

const MOBILE_GRID_PAGE_SIZE = 4;
export type TrendingSectionItem = { slug: string; name: string; image: string; href: string };

const defaultTrendingItems: TrendingSectionItem[] = categories.slice(0, 8).flatMap((category) => {
  const subcategory = category.subcategories[0];
  const type = subcategory?.types[0];
  return subcategory && type
    ? [{
        slug: `${category.slug}-${subcategory.slug}-${type.slug}`,
        name: type.name,
        image: type.image,
        href: typeHref(category.slug, subcategory.slug, type.slug),
      }]
    : [];
});

function chunkBy<T>(items: readonly T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size) as T[]);
  }
  return pages;
}

export function TrendingNowSection({
  title = marketplaceHeadings.trendingNow,
  items = defaultTrendingItems,
}: {
  title?: string;
  items?: TrendingSectionItem[];
}) {
  const mobilePages = chunkBy(items, MOBILE_GRID_PAGE_SIZE);

  return (
    <section className="bg-white py-3 md:pt-9 md:pb-10">
      <div className="mx-auto w-full max-w-[1920px] px-0 sm:px-6 lg:px-10 xl:px-14">
        <div className="mb-5 md:mb-7">
          <h2 className={sectionHeadingClass}>
            {title}
          </h2>
        </div>

        {/* Mobile: 2×2 grid (4 per screen), swipe for more */}
        <div
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-0 -mx-1"
          aria-label="Trending items, swipe for more"
        >
          {mobilePages.map((page, pageIndex) => (
            <div
              key={pageIndex}
              className="grid w-full min-w-full shrink-0 snap-start grid-cols-2 gap-3 px-1"
            >
              {page.map((item) => {
                return (
                  <TrendingCard
                    key={item.slug}
                    href={item.href}
                    title={item.name}
                    image={item.image}
                    className="w-full"
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Tablet & desktop: horizontal row */}
        <div className="hidden md:block">
          <HorizontalScrollRow
            arrowTop="50%"
            scrollClassName="flex justify-start gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-1 lg:gap-7"
          >
            {items.map((item) => (
              <TrendingCard
                key={item.slug}
                href={item.href}
                title={item.name}
                image={item.image}
                className="w-[245px] lg:w-[285px] xl:w-[310px]"
              />
            ))}
          </HorizontalScrollRow>
        </div>
      </div>
    </section>
  );
}

function TrendingCard({
  href,
  title,
  image,
  className = "",
}: {
  href: string;
  title: string;
  image: string;
  className?: string;
}) {
  return (
    <Link href={href} className={["group block shrink-0", className].join(" ")}>
      <article className="relative aspect-[5/7] overflow-hidden rounded-[24px] bg-[#f4f4f4] shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition-transform duration-300 group-hover:-translate-y-1">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1280px) 285px, 310px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/58 via-black/18 to-transparent" />
        <h3 className="absolute inset-x-0 bottom-0 px-4 pb-7 text-center font-serif text-[1.25rem] font-semibold leading-tight text-white drop-shadow-sm md:text-[1.45rem]">
          {title}
        </h3>
      </article>
    </Link>
  );
}
