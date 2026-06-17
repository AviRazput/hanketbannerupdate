import Link from "next/link";
import { creatorServices } from "@/data/homepage";
import { CreatorServiceCard } from "./CreatorServiceCard";
import { HorizontalScrollRow } from "./HorizontalScrollRow";
import { sectionHeadingClass } from "./sectionHeadingStyle";

export function CreatorMarketplaceSection() {
  return (
    <section id="launch-with-hanket" className="bg-white pt-6 pb-8 md:pt-10 md:pb-12">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <header className="mb-5 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className={sectionHeadingClass}>
              Launch With Hanket
            </h2>
            <p className="mt-2 max-w-xl font-sans text-[13px] leading-relaxed text-[#5c5c5c] md:text-[15px]">
              We do not just sell fashion brands. We help build them.
            </p>
          </div>
          <Link
            href="/search?service=creator"
            className="inline-flex w-fit items-center justify-center bg-[#1a1a1a] px-5 py-3 font-sans text-[10px] font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-flat-pink md:px-6"
          >
            Start Your Launch
          </Link>
        </header>

        <HorizontalScrollRow
          arrowTop="50%"
          scrollClassName="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth md:grid md:grid-cols-3 md:gap-5 lg:gap-7"
        >
          {creatorServices.map((service) => (
            <CreatorServiceCard
              key={service.slug}
              service={service}
            />
          ))}
        </HorizontalScrollRow>
      </div>
    </section>
  );
}
