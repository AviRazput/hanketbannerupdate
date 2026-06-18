import Link from "next/link";
import { creatorServices } from "@/data/homepage";
import { CreatorServiceCard } from "./CreatorServiceCard";
import { sectionHeadingClass } from "./sectionHeadingStyle";

const creatorServiceImages: Record<string, string> = {
  photography: "/instagram/2.jpg",
  branding: "/instagram/4.jpg",
  "marketplace-growth": "/instagram/6.jpg",
};

export function CreatorMarketplaceSection() {
  const [featuredService, ...sideServices] = creatorServices;

  return (
    <section id="launch-with-hanket" className="bg-[#fff8f3] pt-7 pb-9 md:pt-10 md:pb-12">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <header className="mb-5 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className={sectionHeadingClass}>
              Launch With Hanket
            </h2>
          </div>
          <Link
            href="/search?service=creator"
            className="inline-flex w-fit items-center justify-center bg-[#1a1a1a] px-5 py-3 font-sans text-[10px] font-black uppercase tracking-[0.18em] text-white transition-colors hover:bg-flat-pink md:px-6"
          >
            Start Your Launch
          </Link>
        </header>

        <div className="grid gap-4 md:grid-cols-[1.1fr_1fr] md:gap-6 lg:gap-8">
          {featuredService ? (
            <CreatorServiceCard
              service={featuredService}
              image={creatorServiceImages[featuredService.slug]}
              featured
            />
          ) : null}

          <div className="flex gap-4 overflow-x-auto no-scrollbar md:grid md:grid-rows-2 md:overflow-visible">
            {sideServices.map((service) => (
              <CreatorServiceCard
                key={service.slug}
                service={service}
                image={creatorServiceImages[service.slug]}
                className="md:w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
