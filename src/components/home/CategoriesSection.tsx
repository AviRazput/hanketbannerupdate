import { homeCategories } from "@/data/homepage";
import Image from "next/image";
import Link from "next/link";
import { HorizontalScrollRow } from "./HorizontalScrollRow";
import { sectionHeadingClass } from "./sectionHeadingStyle";

const categoryNotes = [
  "Sun-ready resort pieces",
  "Occasion dressing",
  "Elevated daily edits",
  "Vacation-ready style",
  "Modern celebrationwear",
  "Urban statement pieces",
];

export function CategoriesSection() {
  return (
    <section className="bg-white pt-4 pb-6 md:pt-8 md:pb-10">
      <div className="w-full px-3 sm:px-5 md:px-8 lg:px-10 xl:px-12">
        <div className="mb-5 md:mb-8">
          <h2 className={sectionHeadingClass}>
            Shop By Category
          </h2>
        </div>

        <HorizontalScrollRow
          arrowTop="45%"
          arrowInset
          scrollClassName="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-1 pr-1 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {homeCategories.map((cat, index) => (
            <Link
              key={cat.slug}
              href={cat.href}
              className="group block w-[150px] shrink-0 bg-white p-1.5 shadow-[0_10px_30px_rgba(31,27,23,0.08)] ring-1 ring-[#eadfd4] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(31,27,23,0.14)] hover:ring-[#c8a66e] sm:w-[178px] md:w-[calc((100%_-_6.25rem)/6)] md:min-w-0"
            >
              <div className="relative aspect-[4/4.45] w-full overflow-hidden bg-[#f7f1eb]">
                <Image
                  src={cat.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 150px, (max-width: 1024px) 18vw, 220px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent opacity-70" />
              </div>
              <div className="flex min-h-[104px] flex-col items-center justify-center border border-[#efe5da] border-t-0 px-2 py-3 text-center">
                <h3 className="font-sans text-[12px] font-black uppercase leading-tight tracking-[0.08em] text-[#191714] sm:text-[13px] md:text-[14px]">
                  {cat.label}
                </h3>
                <p className="mt-1.5 min-h-[28px] font-sans text-[10px] font-semibold uppercase leading-snug tracking-[0.08em] text-[#786f66]">
                  {categoryNotes[index] ?? cat.tagline}
                </p>
                <span className="mt-2 inline-flex items-center border-b border-[#191714] pb-0.5 font-sans text-[10px] font-black uppercase tracking-[0.16em] text-[#191714]">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </HorizontalScrollRow>
      </div>
    </section>
  );
}
