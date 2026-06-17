import { featuredBrands } from "@/data/homepage";
import Link from "next/link";

export function FeaturedBrandsSection() {
  return (
    <section className="bg-white py-10 md:py-14 lg:py-16">
      <div className="grid w-full gap-8 px-4 sm:px-6 md:grid-cols-[0.95fr_1.25fr] md:items-center lg:px-10 xl:px-14">
        <div className="mx-auto max-w-[640px] text-center md:mx-0 md:text-left">
          <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-[#9a9a9a]">
            Curated Brand Circle
          </p>
          <h2 className="mt-5 font-sans text-[2rem] font-bold leading-tight text-[#242424] sm:text-[2.4rem] lg:text-[3rem]">
            Discover fashion and style from India&apos;s emerging labels.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] font-sans text-[14px] leading-7 text-[#777] md:mx-0 md:text-[15px]">
            Explore independent fashion brands, creator-led collections, and fresh edits selected for the Hanket marketplace.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <Link
              href="/search"
              className="inline-flex min-h-12 items-center justify-center bg-[#c2a05f] px-8 font-sans text-[12px] font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#1a1a1a]"
            >
              Shop Now
            </Link>
            <Link
              href="/search"
              className="inline-flex min-h-12 items-center justify-center border border-[#dedede] bg-white px-8 font-sans text-[12px] font-black uppercase tracking-[0.08em] text-[#333] transition-colors hover:border-[#1a1a1a]"
            >
              View More
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 border border-[#e8e8e8] sm:grid-cols-3">
          {featuredBrands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/search?brand=${brand.slug}`}
              className="group flex min-h-[118px] items-center justify-center border-b border-r border-[#e8e8e8] px-4 text-center transition-colors hover:bg-[#fafafa] md:min-h-[126px] lg:min-h-[138px]"
            >
              <span className="font-sans text-[1.15rem] font-black uppercase leading-none tracking-[-0.03em] text-[#a8a8a8] transition-colors group-hover:text-[#333] md:text-[1.35rem] lg:text-[1.55rem]">
                {brand.name}
              </span>
            </Link>
          ))}
          <Link
            href="/search"
            className="group flex min-h-[118px] items-center justify-center border-b border-r border-[#e8e8e8] px-4 text-center transition-colors hover:bg-[#fafafa] md:min-h-[126px] lg:min-h-[138px]"
          >
            <span className="font-sans text-[1.15rem] font-black uppercase leading-none tracking-[-0.03em] text-[#a8a8a8] transition-colors group-hover:text-[#333] md:text-[1.35rem] lg:text-[1.55rem]">
              Atelier Nine
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
