import { homeCategories } from "@/data/homepage";
import { CategoryCard } from "./CategoryCard";
import { HorizontalScrollRow } from "./HorizontalScrollRow";

export function CategoriesSection() {
  return (
    <section className="bg-white pt-2 pb-5 md:pt-6 md:pb-6">
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="mb-3 md:mb-6">
          <h2 className="font-serif text-[1.625rem] md:text-[2rem] font-medium text-flat-text leading-[1.15] tracking-[-0.02em]">
            Top Categories
          </h2>
          <p className="mt-2 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-flat-muted">
            Shop by style
          </p>
        </div>

        <HorizontalScrollRow
          arrowTop="42%"
          arrowInset
          scrollClassName="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-1 pr-1 lg:gap-4"
        >
          {homeCategories.map((cat) => (
            <div
              key={cat.slug}
              className="w-[112px] shrink-0 sm:w-[132px] md:w-[148px] lg:w-[calc((100%_-_7rem)/8)] lg:min-w-[156px]"
            >
              <CategoryCard
                imageFill="cover"
                size="grid"
                item={{
                  slug: cat.slug,
                  label: cat.label,
                  href: cat.href,
                  image: cat.image,
                }}
              />
            </div>
          ))}
        </HorizontalScrollRow>
      </div>
    </section>
  );
}
