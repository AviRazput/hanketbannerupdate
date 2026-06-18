import { featuredBrands } from "@/data/homepage";
import Image from "next/image";
import Link from "next/link";
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

export function FeaturedOnHanketSection() {
  return (
    <section className="bg-white pt-7 pb-8 md:pt-9 md:pb-10">
      <div className="w-full px-0 sm:px-6 lg:px-10 xl:px-14">
        <div className="mb-5 md:mb-7">
          <h2 className={sectionHeadingClass}>
            Featured On Hanket
          </h2>
        </div>

        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 no-scrollbar sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:pb-0 lg:grid-cols-4 lg:items-end lg:gap-6 xl:gap-8">
          {featuredOnHanket.map((brand, index) => (
            <Link
              key={brand.slug}
              href={`/search?brand=${brand.slug}`}
              className={[
                "group relative block aspect-[3/4] w-[78vw] max-w-[290px] shrink-0 snap-start overflow-hidden rounded-[3px] bg-white shadow-[0_12px_32px_rgba(43,35,29,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(43,35,29,0.16)]",
                "sm:w-auto sm:max-w-none sm:shrink md:border md:border-white/80 md:shadow-[0_18px_55px_rgba(43,35,29,0.12)]",
                index === 1 ? "lg:translate-y-8" : index === 2 ? "lg:-translate-y-4" : "",
              ].join(" ")}
            >
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                unoptimized
                sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/18 to-transparent" />
              <div className="absolute inset-0 opacity-0 ring-1 ring-inset ring-white/35 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white md:p-5">
                <h3 className="font-serif text-[1.25rem] font-medium uppercase leading-none tracking-[-0.025em] md:text-[1.4rem]">
                  {brand.name}
                </h3>
                <p className="mt-2 font-sans text-[9px] font-bold uppercase tracking-[0.12em] text-white/78">
                  {brand.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-sans text-[10px] font-bold tracking-[0.04em] text-white">
                  Explore Brand
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 flex justify-center md:mt-10">
          <Link
            href="/search"
            className="inline-flex min-h-11 items-center justify-center bg-black px-9 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#302a27]"
          >
            View All Designers
          </Link>
        </div>
      </div>
    </section>
  );
}
