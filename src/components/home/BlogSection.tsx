import Image from "next/image";
import { blogPosts } from "../../data/products";

export function BlogSection() {
  return (
    <section className="py-24 bg-flat-bg border-t border-flat-border">
      <div className="max-w-[1500px] mx-auto px-8">
        <div className="text-center mb-16 max-w-xl mx-auto">
          <div className="text-[0.75rem] leading-[1.5] tracking-[0.15em] text-flat-muted uppercase mb-4">
            Read Our Journal
          </div>
          <h2 className="mb-4 text-flat-text text-[2.5rem] leading-[1.2]">Our Latest Posts</h2>
          <p className="text-flat-muted">Style guides, lookbooks, and fashion insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-flat-border border border-flat-border">
          {blogPosts.map((b) => (
            <div
              key={b.id}
              className="bg-flat-bg p-8 flex flex-col group cursor-pointer hover:bg-flat-layer transition-colors"
            >
              <div className="aspect-square w-full mb-6 overflow-hidden relative">
                <div className="absolute top-4 left-4 bg-flat-bg px-3 py-2 z-10 text-center border border-flat-border">
                  <span className="block font-bold text-lg leading-none">{b.date}</span>
                  <span className="block text-[9px] uppercase tracking-widest text-flat-muted">
                    {b.month}
                  </span>
                </div>
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-flat-muted mb-3 font-semibold">
                {b.cat}
              </p>
              <h3 className="text-flat-text text-[22px] mb-4 leading-snug group-hover:text-flat-muted transition-colors">
                {b.title}
              </h3>
              <a
                href="#"
                className="text-[11px] font-bold uppercase tracking-widest border-b border-flat-text self-start pb-1 mt-auto group-hover:text-flat-muted group-hover:border-flat-muted transition-colors"
              >
                Read Article
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

