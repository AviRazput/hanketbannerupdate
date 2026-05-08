export function WelcomeSection() {
  return (
    <section className="py-24 bg-flat-bg border-t border-flat-border">
      <div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center">
        <div className="text-[0.75rem] leading-[1.5] tracking-[0.15em] text-flat-muted uppercase mb-6 font-semibold">
          Welcome to HANKET
        </div>
        <h2 className="mb-6 text-flat-text leading-tight text-[2.5rem]">
          Discover Fashion &amp; Style
          <br />
          On Our Online Worldwide Store
        </h2>
        <p className="text-flat-muted text-[15px] mb-10 max-w-2xl leading-relaxed">
          At HANKET, we believe fashion is more than clothing — {"it's"} a language. Explore our
          curated collections of premium apparel, artisan handloom, and contemporary designs
          crafted for the modern wardrobe. Quality you can feel. Style you can own.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn-flat">Shop New Arrivals</button>
          <button className="btn-flat-outline">Explore Collections</button>
        </div>
      </div>
    </section>
  );
}

