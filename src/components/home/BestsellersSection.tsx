import Image from "next/image";
import Link from "next/link";
import { mainCollection } from "@/data/products";
import { HorizontalScrollRow } from "./HorizontalScrollRow";
import { sectionHeadingClass } from "./sectionHeadingStyle";

const bestsellerImages = [
  "/catogery/JEWELRY.jpg",
  "/instagram/4.jpg",
  "/catogery/women.jpg",
  "/instagram/2.jpg",
  "/catogery/glam.jpg",
  "/instagram/6.jpg",
] as const;

const bestsellerTitles = [
  "Gopi Vaid",
  "Noib",
  "Nidhika Shekhar",
  "Nikita Mhaisalkar",
  "Hirika Dhruti",
  "Anu Pellakuru",
] as const;

export function BestsellersSection() {
  const products = mainCollection.slice(0, 6);

  return (
    <section className="bg-white pt-7 pb-8 md:pt-9 md:pb-10">
      <div className="mx-auto w-full max-w-[1920px] px-0 sm:px-6 lg:px-10 xl:px-14">
        <div className="mb-5 md:mb-7">
          <h2 className={sectionHeadingClass}>
            Curated Brands
          </h2>
        </div>

        <HorizontalScrollRow
          arrowTop="50%"
          scrollClassName="flex gap-4 overflow-x-auto pb-1 no-scrollbar scroll-smooth sm:gap-5 lg:gap-7"
        >
          {products.map((p, index) => (
            <BestsellerCard
              key={p.id}
              href={`/product/${p.id}`}
              image={bestsellerImages[index % bestsellerImages.length]}
              title={bestsellerTitles[index % bestsellerTitles.length]}
            />
          ))}
        </HorizontalScrollRow>
      </div>
    </section>
  );
}

function BestsellerCard({
  href,
  image,
  title,
}: {
  href: string;
  image: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="group block w-[min(78vw,310px)] shrink-0 overflow-hidden rounded-[24px] bg-[#f4f4f4] shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 sm:w-[285px] lg:w-[310px]"
    >
      <article className="relative aspect-[5/7]">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 640px) 78vw, 310px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/62 via-black/20 to-transparent" />
        <h3 className="absolute inset-x-0 bottom-0 px-4 pb-7 text-center font-serif text-[1.35rem] font-semibold leading-tight text-white drop-shadow-sm md:text-[1.5rem]">
          {title}
          <span className="mt-2 block font-sans text-[13px] font-black uppercase tracking-[0.08em]">
            Shop Now
          </span>
        </h3>
      </article>
    </Link>
  );
}
