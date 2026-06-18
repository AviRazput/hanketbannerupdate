import Image from "next/image";
import Link from "next/link";
import { trendingItems } from "@/data/homepage";
import { HorizontalScrollRow } from "./HorizontalScrollRow";
import { sectionHeadingClass } from "./sectionHeadingStyle";

const MOBILE_GRID_PAGE_SIZE = 4;
const trendingImages = [
  "/instagram/2.jpg",
  "/instagram/4.jpg",
  "/catogery/women.jpg",
  "/catogery/glam.jpg",
  "/instagram/6.jpg",
  "/instagram/1.jpg",
  "/instagram/7.jpg",
  "/instagram/8.jpg",
] as const;

function chunkBy<T>(items: readonly T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size) as T[]);
  }
  return pages;
}

export function TrendingNowSection() {
  const mobilePages = chunkBy(trendingItems, MOBILE_GRID_PAGE_SIZE);

  return (
    <section className="bg-white pt-7 pb-8 md:pt-9 md:pb-10">
      <div className="mx-auto w-full max-w-[1920px] px-0 sm:px-6 lg:px-10 xl:px-14">
        <div className="mb-5 md:mb-7">
          <h2 className={sectionHeadingClass}>
            Trending Now
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
              {page.map((item, i) => {
                const index = pageIndex * MOBILE_GRID_PAGE_SIZE + i;
                return (
                  <TrendingCard
                    key={item.slug}
                    href={item.href}
                    title={item.label}
                    image={trendingImages[index % trendingImages.length]}
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
            {trendingItems.map((item, i) => (
              <TrendingCard
                key={item.slug}
                href={item.href}
                title={item.label}
                image={trendingImages[i % trendingImages.length]}
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
