import { featuredBrands } from "@/data/homepage";
import { categories, categoryHref, marketplaceHeadings } from "@/data/categories";
import { categoryCardImages } from "@/data/categoryCardImages";
import Image from "next/image";
import Link from "next/link";
import { HorizontalScrollRow } from "./HorizontalScrollRow";
import { sectionHeadingClass } from "./sectionHeadingStyle";

const featuredBrandDetails = {
  "craft-district": "Handcrafted Fashion",
  "kind-label": "Contemporary Womenswear",
  "loom-line": "Modern Ethnic Wear",
  "studio-nine": "Elevated Everyday Style",
} as const;

const featuredBrandImages = {
  "craft-district": "/instagram/1.jpg",
  "kind-label": "/instagram/2.jpg",
  "loom-line": "/instagram/3.jpg",
  "studio-nine": "/instagram/6.jpg",
} as const;

const featuredBrandOrder = [
  "craft-district",
  "kind-label",
  "loom-line",
  "studio-nine",
] as const;

const featuredOnHanket = featuredBrandOrder.flatMap((slug) => {
  const brand = featuredBrands.find((item) => item.slug === slug);
  return brand
    ? [{
        ...brand,
        image: featuredBrandImages[slug],
        description: featuredBrandDetails[slug],
      }]
    : [];
});

export function FeaturedOnHanketSection({
  title = marketplaceHeadings.featuredOnHanket,
  variant = "brands",
  items,
}: {
  title?: string;
  variant?: "brands" | "categories";
  items?: readonly { slug: string; name: string; image: string; href: string }[];
}) {
  const displayItems = variant === "categories" ? items ?? categories : featuredOnHanket;

  return (
    <section className={variant === "categories" ? "bg-white py-8 md:py-14" : "bg-white pt-3 pb-0 md:pt-9 md:pb-10"}>
      <div className="mx-auto w-full max-w-[1920px] px-0 sm:px-6 lg:px-10 xl:px-14">
        <div className={variant === "categories" ? "mb-7 text-center md:mb-10" : "mb-5 md:mb-7"}>
          <h2 className={variant === "categories" ? "font-serif text-[2rem] font-medium leading-none tracking-[-0.04em] text-[#191919] sm:text-[2.5rem] md:text-[3rem]" : sectionHeadingClass}>
            {title}
          </h2>
        </div>

        <HorizontalScrollRow
          arrowTop="50%"
          arrowInset
          showArrows={variant === "categories"}
          scrollClassName={
            variant === "categories"
              ? "flex snap-x snap-mandatory gap-10 overflow-x-auto pb-2 no-scrollbar sm:gap-12"
              : "flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 no-scrollbar sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-4 lg:gap-6 xl:gap-8"
          }
        >
          {displayItems.map((item) => variant === "categories" ? (
            <Link
              key={item.slug}
              href={"href" in item ? item.href : categoryHref(item.slug)}
              className="group block w-[34vw] max-w-[120px] shrink-0 snap-start text-center sm:w-[140px] sm:max-w-none md:w-[150px] lg:w-[160px] xl:w-[170px]"
            >
              <span className="relative block aspect-square overflow-hidden rounded-full border-[3px] border-white bg-[#f5f1ec] shadow-[0_8px_20px_rgba(0,0,0,0.14)] ring-1 ring-black/5 transition-transform duration-500 group-hover:-translate-y-1">
                {(!items && categoryCardImages[item.slug]?.startsWith("http")) || (items && item.image.startsWith("http")) ? (
                  <img src={items ? item.image : categoryCardImages[item.slug]} alt={item.name} className={`absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]`} />
                ) : (
                  <Image src={items ? item.image : (categoryCardImages[item.slug] ?? item.image)} alt={item.name} fill unoptimized sizes="(max-width: 639px) 34vw, 170px" className={`object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]`} />
                )}
              </span>
              <h3 className="mt-4 px-1 font-sans text-[14px] font-medium leading-tight text-[#333] sm:text-[16px] md:text-[18px]">{item.name}</h3>
            </Link>
          ) : (
            <Link key={item.slug} href={`/search?brand=${item.slug}`} className="group relative block aspect-[3/4] w-[78vw] max-w-[290px] shrink-0 snap-start overflow-hidden rounded-[24px] bg-white shadow-[0_12px_32px_rgba(43,35,29,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(43,35,29,0.16)] sm:w-auto sm:max-w-none sm:shrink md:border md:border-white/80 md:shadow-[0_18px_55px_rgba(43,35,29,0.12)]">
              <Image src={item.image} alt={item.name} fill unoptimized sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className={`transition-transform duration-700 ease-out group-hover:scale-[1.06] ${item.slug === "party-edit" ? "object-contain bg-[#1a1a1a]" : "object-cover"}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/18 to-transparent" />
              <div className="absolute inset-0 opacity-0 ring-1 ring-inset ring-white/35 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white md:p-5">
                <h3 className="font-serif text-[1.25rem] font-medium uppercase leading-none tracking-[-0.025em] md:text-[1.4rem]">{item.name}</h3>
                {"description" in item ? <p className="mt-2 font-sans text-[9px] font-bold uppercase tracking-[0.12em] text-white/78">{item.description}</p> : null}
                <span className="mt-4 inline-flex items-center gap-2 font-sans text-[10px] font-bold tracking-[0.04em] text-white">Explore Brand<span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span></span>
              </div>
            </Link>
          ))}
        </HorizontalScrollRow>

      </div>
    </section>
  );
}
