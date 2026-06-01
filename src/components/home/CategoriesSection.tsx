import { homeCategories } from "@/data/homepage";
import { CategoryCard } from "./CategoryCard";

export function CategoriesSection() {
  return (
    <section className="bg-white pt-5 pb-5 md:pt-6 md:pb-6">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-5 md:mb-6">
          <h2 className="font-serif text-[1.625rem] md:text-[2rem] font-medium text-flat-text leading-[1.15] tracking-[-0.02em]">
            Top Categories
          </h2>
          <p className="mt-2 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-flat-muted">
            Shop by style
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-5 xl:gap-6">
          {homeCategories.map((cat) => (
            <div key={cat.slug} className="min-w-0">
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
        </div>
      </div>
    </section>
  );
}
