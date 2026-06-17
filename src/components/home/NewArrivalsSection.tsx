import Image from "next/image";
import Link from "next/link";
import { instaImages, mainCollection } from "@/data/products";
import { HorizontalScrollRow } from "./HorizontalScrollRow";
import { sectionHeadingClass } from "./sectionHeadingStyle";

const INSTA_IMAGE_BASE = "https://woodmart.xtemos.com/wp-content/uploads/2017/04/";
const arrivalBrands = [
  "Craft District",
  "Studio Nine",
  "Loom & Line",
  "Urban Thread",
  "Kind Label",
  "Atelier Nine",
  "Mode House",
  "Thread Lab",
] as const;

export function NewArrivalsSection() {
  const products = mainCollection.slice(0, 8);

  return (
    <section id="new-arrivals" className="bg-white pt-5 pb-5 md:pt-6 md:pb-6">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-5 md:mb-6">
          <h2 className={sectionHeadingClass}>
            New Arrivals
          </h2>
          <p className="mt-2 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-flat-muted">
            Fresh drops from emerging brands on Hanket
          </p>
        </div>

        <HorizontalScrollRow arrowTop="42%">
          {products.map((p, i) => (
            <Link
              key={p.id}
              href={`/product/${p.id}`}
              className="group block w-[150px] shrink-0 text-center sm:w-[168px] md:w-[180px] lg:w-[192px]"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f7f7f7]">
                <Image
                  src={`${INSTA_IMAGE_BASE}${instaImages[i % instaImages.length]}`}
                  alt={p.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 150px, 192px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-1 pt-3">
                <p className="font-sans text-[12px] font-black uppercase leading-tight tracking-normal text-flat-text">
                  {arrivalBrands[i % arrivalBrands.length]}
                </p>
                <p className="mt-1 font-sans text-[12px] uppercase leading-tight tracking-normal text-flat-text">
                  {p.title}
                </p>
                <p className="mt-1 font-sans text-[11px] leading-none tracking-normal text-flat-muted">
                  {p.price}
                </p>
              </div>
            </Link>
          ))}
        </HorizontalScrollRow>
      </div>
    </section>
  );
}
