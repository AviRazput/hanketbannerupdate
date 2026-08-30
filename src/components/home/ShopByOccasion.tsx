import Image from "next/image";
import Link from "next/link";
import { sectionHeadingClass } from "./sectionHeadingStyle";

const womenOccasions = [
  {
    title: "Festive Celebrations",
    image: "/category-pages/women/Shop-By-Occasion/festive_celebration_ai_full_1786948672099.jpg",
    className: "col-span-2 row-span-2",
  },
  {
    title: "Lehnga",
    image: "/category-pages/women/Shop-By-Occasion/lehnga_ai_full_1786948933813.jpg",
    className: "col-span-2 row-span-1",
  },
  {
    title: "Mehndi Set",
    image: "/category-pages/women/Shop-By-Occasion/mehndi_ai_full_1786949303370.jpg",
    className: "col-span-2 row-span-1",
  },
  {
    title: "Wedding",
    image: "/category-pages/women/Shop-By-Occasion/wedding_ai.jpg",
    className: "col-span-2 row-span-1",
  },
  {
    title: "Reception",
    image: "/category-pages/women/Shop-By-Occasion/reception_ai_full_1786949387693.jpg",
    className: "col-span-1 row-span-1",
  },
  {
    title: "Sangeet",
    image: "/category-pages/women/Shop-By-Occasion/sangeet_ai_full_1786949525597.jpg",
    className: "col-span-1 row-span-1",
  },
];

const menOccasions = [
  { title: "Sherwani", image: "https://images.unsplash.com/photo-1590212353724-4f01657cba38?auto=format&fit=crop&w=600&q=80" },
  { title: "Coat & Pant", image: "https://images.unsplash.com/photo-1594938298596-70f56fb3cecb?auto=format&fit=crop&w=600&q=80" },
  { title: "Kurta Sets", image: "https://images.unsplash.com/photo-1615886737521-4f107c13bb10?auto=format&fit=crop&w=600&q=80" },
  { title: "Formal Suits", image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=600&q=80" },
  { title: "Party Wear", image: "https://images.unsplash.com/photo-1512401765038-f86a9f46b1eb?auto=format&fit=crop&w=600&q=80" },
  { title: "Indo-Western", image: "https://images.unsplash.com/photo-1598305436662-3860166299d2?auto=format&fit=crop&w=600&q=80" },
  { title: "Blazer & Trousers", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80" },
  { title: "Nehru Jacket", image: "https://images.unsplash.com/photo-1603504829379-373a628549cb?auto=format&fit=crop&w=600&q=80" },
];

export function ShopByOccasion({ categorySlug = 'women' }: { categorySlug?: string }) {
  const isMen = categorySlug === 'men';
  const items = isMen ? menOccasions : womenOccasions;

  return (
    <section className="bg-white py-3 md:pt-9 md:pb-10">
      <div className="mx-auto w-full max-w-[1920px] px-0 sm:px-6 lg:px-10 xl:px-14">
        <div className="mb-5 md:mb-7">
          <h2 className={sectionHeadingClass}>
            Shop By Occasion
          </h2>
        </div>

        {isMen ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5 auto-rows-[200px] md:auto-rows-[280px]">
            {items.map((item, index) => (
              <Link
                key={index}
                href="#"
                className={`group relative overflow-hidden rounded-[20px] bg-[#f7f1eb] col-span-1 row-span-1 block w-full h-full`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-2.5 md:bottom-6 px-1 text-center font-serif text-[13px] sm:text-[16px] md:text-[1.25rem] font-medium text-white drop-shadow-md leading-tight">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2 md:gap-5 auto-rows-[130px] sm:auto-rows-[180px] md:auto-rows-[280px]">
            {items.map((item, index) => (
              <Link
                key={index}
                href="#"
                className={`group relative overflow-hidden rounded-[20px] bg-[#f7f1eb] ${(item as any).className} block w-full h-full`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-2.5 md:bottom-6 px-1 text-center font-serif text-[13px] sm:text-[16px] md:text-[1.25rem] font-medium text-white drop-shadow-md leading-tight">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
