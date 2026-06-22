import { marketplaceHeadings, typeHref } from "@/data/categories";
import { categoryProducts, type CategoryProduct } from "@/data/categoryProducts";
import Image from "next/image";
import Link from "next/link";
import { HorizontalScrollRow } from "./HorizontalScrollRow";
import { sectionHeadingClass } from "./sectionHeadingStyle";

const defaultProducts = categoryProducts
  .filter((product, index, products) => products.findIndex((item) => item.category === product.category) === index)
  .slice(0, 8);

export function NewArrivalsSection({
  title = marketplaceHeadings.newArrivals,
  products = defaultProducts,
}: {
  title?: string;
  products?: CategoryProduct[];
}) {

  return (
    <section id="new-arrivals" className="bg-white py-3 md:pt-9 md:pb-10">
      <div className="mx-auto w-full max-w-[1920px] px-0 sm:px-6 lg:px-10 xl:px-14">
        <div className="mb-5 md:mb-7">
          <h2 className={sectionHeadingClass}>{title}</h2>
        </div>
        <HorizontalScrollRow arrowTop="50%" scrollClassName="flex justify-start gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-1 sm:gap-5 lg:gap-7">
          {products.map((product) => (
            <Link
              key={product.id}
              href={typeHref(product.category, product.subcategory, product.type)}
              className="group block w-[min(74vw,300px)] shrink-0 sm:w-[270px] md:w-[285px] lg:w-[305px] xl:w-[330px]"
            >
              <div className="relative aspect-[5/7] w-full overflow-hidden rounded-[24px] bg-[#f7f7f7] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 74vw, (max-width: 1024px) 285px, 330px" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/62 via-black/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 px-4 pb-7 text-center text-white md:px-5">
                  <p className="font-serif text-[1.3rem] font-semibold leading-tight drop-shadow-sm md:text-[1.45rem]">{product.brand}</p>
                  <p className="mt-2 font-sans text-[13px] font-bold leading-tight drop-shadow-sm md:text-[14px]">{product.name}</p>
                  <p className="mt-1.5 font-sans text-[12px] font-black tracking-[0.04em] drop-shadow-sm md:text-[13px]">{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </HorizontalScrollRow>
      </div>
    </section>
  );
}
