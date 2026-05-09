const categories = [
  {
    title: "Mens",
    subtitle: "120 Products",
    img: "https://woodmart.xtemos.com/wp-content/uploads/2017/01/cat-img-kids-4.jpg",
    className: "col-span-2 md:col-span-2 row-span-2",
    variant: "darkGradient" as const,
  },
  {
    title: "Womens",
    subtitle: "180 Products",
    img: "https://woodmart.xtemos.com/wp-content/uploads/2017/01/cat-img-woman.jpg",
    className: "col-span-1 row-span-1 md:row-span-2",
    variant: "lightTop" as const,
  },
  {
    title: "Accessories",
    subtitle: "140 Products",
    img: "https://woodmart.xtemos.com/wp-content/uploads/2017/01/cat-img-glass.jpg",
    className: "col-span-1 row-span-1",
    variant: "center" as const,
  },
  {
    title: "Beauty",
    subtitle: "72 Products",
    img: "https://woodmart.xtemos.com/wp-content/uploads/2017/01/cat-img-accesories-9.jpg",
    className: "col-span-1 row-span-1",
    variant: "lightTop" as const,
  },
];

export function FeaturedCategories() {
  return (
    <section className="py-24 bg-flat-layer border-t border-flat-border">
      <div className="max-w-[1500px] mx-auto px-8">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <div className="text-[0.75rem] leading-[1.5] tracking-[0.15em] text-flat-muted uppercase mb-4">
            Welcome to HANKET
          </div>
          <h2 className="mb-4 text-flat-text text-[2.5rem] leading-[1.2]">Featured Categories</h2>
          <p className="text-flat-muted">
            Explore our minimalist approach to everyday fashion across all categories.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[240px] gap-px bg-flat-border border border-flat-border">
          {categories.map((c) => (
            <div
              key={c.title}
              className={[
                c.className,
                "relative bg-flat-bg group overflow-hidden cursor-pointer",
              ].join(" ")}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('${c.img}')` }}
              />

              {c.variant === "darkGradient" ? (
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-8 text-white">
                  <h3 className="mb-1 text-[22px]">{c.title}</h3>
                  <p className="text-xs tracking-widest uppercase opacity-80">{c.subtitle}</p>
                </div>
              ) : c.variant === "center" ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-flat-text text-center">
                  <h3 className="mb-1 text-[22px]">{c.title}</h3>
                  <p className="text-xs tracking-widest uppercase text-flat-muted">{c.subtitle}</p>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col justify-start p-8 text-flat-text">
                  <h3 className="mb-1 text-[22px]">{c.title}</h3>
                  <p className="text-xs tracking-widest uppercase text-flat-muted">{c.subtitle}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

