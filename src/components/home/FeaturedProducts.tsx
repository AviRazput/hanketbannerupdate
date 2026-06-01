"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "../product/ProductCard";
import { mainCollection, womanCollection } from "../../data/products";

type TabKey = "main" | "woman";

export function FeaturedProducts() {
  const [tab, setTab] = useState<TabKey>("main");

  const products = useMemo(() => {
    return tab === "main" ? mainCollection : womanCollection;
  }, [tab]);

  return (
    <section className="py-14 sm:py-24 bg-flat-bg border-t border-flat-border">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8">
        <div className="text-center mb-8 sm:mb-12 max-w-xl mx-auto">
          <h2 className="mb-3 sm:mb-4 text-flat-text text-[2rem] sm:text-[2.5rem] leading-[1.2]">
            Featured Products
          </h2>
          <p className="text-sm sm:text-base text-flat-muted">
            Discover timeless silhouettes for the modern wardrobe.
          </p>
        </div>

        <div className="flex justify-center gap-6 sm:gap-8 border-b border-flat-border mb-8 sm:mb-12">
          <button
            type="button"
            onClick={() => setTab("main")}
            className={[
              "pb-3 sm:pb-4 text-[11px] sm:text-xs font-bold uppercase tracking-widest relative border-b-2 transition-all",
              tab === "main"
                ? "text-flat-text border-flat-text"
                : "text-flat-muted border-transparent hover:text-flat-text",
            ].join(" ")}
          >
            Main Collection
          </button>
          <button
            type="button"
            onClick={() => setTab("woman")}
            className={[
              "pb-3 sm:pb-4 text-[11px] sm:text-xs font-bold uppercase tracking-widest relative border-b-2 transition-all",
              tab === "woman"
                ? "text-flat-text border-flat-text"
                : "text-flat-muted border-transparent hover:text-flat-text",
            ].join(" ")}
          >
            Woman Collection
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-flat-border border border-flat-border">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

