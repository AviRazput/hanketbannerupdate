import Image from "next/image";
import Link from "next/link";
import { mainCollection } from "@/data/products";
import { HorizontalScrollRow } from "./HorizontalScrollRow";
import { sectionHeadingClass } from "./sectionHeadingStyle";

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
const arrivalPrices = ["₹2,499", "₹3,299", "₹1,899", "₹4,250", "₹999", "₹5,499"] as const;
const arrivalImages = [
  "/instagram/4.jpg",
  "/instagram/6.jpg",
  "/instagram/7.jpg",
  "/instagram/8.jpg",
  "/instagram/2.jpg",
  "/instagram/1.jpg",
] as const;

export function NewArrivalsSection() {
  const products = mainCollection.slice(0, 6);

  return (
    <section id="new-arrivals" className="bg-white pt-7 pb-8 md:pt-9 md:pb-10">
      <div className="mx-auto w-full max-w-[1920px] px-0 sm:px-6 lg:px-10 xl:px-14">
        <div className="mb-5 md:mb-7">
          <h2 className={sectionHeadingClass}>
            New Arrivals
          </h2>
        </div>

        <HorizontalScrollRow
          arrowTop="50%"
          scrollClassName="flex justify-start gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-1 sm:gap-5 lg:gap-7"
        >
          {products.map((p, i) => (
            <Link
              key={p.id}
              href={`/product/${p.id}`}
              className="group block w-[min(74vw,300px)] shrink-0 sm:w-[270px] md:w-[285px] lg:w-[305px] xl:w-[330px]"
            >
              <div className="relative aspect-[5/7] w-full overflow-hidden rounded-[24px] bg-[#f7f7f7] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                <Image
                  src={arrivalImages[i % arrivalImages.length]}
                  alt={p.title}
                  fill
                  sizes="(max-width: 640px) 74vw, (max-width: 1024px) 285px, 330px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/62 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-4 pb-7 text-center text-white md:px-5">
                  <p className="font-serif text-[1.3rem] font-semibold leading-tight drop-shadow-sm md:text-[1.45rem]">
                    {arrivalBrands[i % arrivalBrands.length]}
                  </p>
                  <p className="mt-2 font-sans text-[13px] font-bold leading-tight drop-shadow-sm md:text-[14px]">
                    {p.title}
                  </p>
                  <p className="mt-1.5 font-sans text-[12px] font-black tracking-[0.04em] drop-shadow-sm md:text-[13px]">
                    {arrivalPrices[i % arrivalPrices.length]}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </HorizontalScrollRow>
      </div>
    </section>
  );
}
